// Tests for the "Må jeg tage fisken med hjem?" checker.
// Run: node --experimental-strip-types scripts/test-fish-rules.mjs
// Expected answers come from Miljøstyrelsen's rules page (see src/data/fiskeregler.ts).
import { SPECIES, ZONES, AREA_NAMES } from '../src/data/fiskeregler.ts';
import { evaluate, yearSegments } from '../src/lib/fishRules.ts';
import { AREAS, fishToday, weatherTips, windDir, nearestArea } from '../src/lib/todayBiting.ts';
import { monthData } from '../src/data/season-data.ts';

const data = { species: SPECIES, zones: ZONES, areas: AREA_NAMES };
const d = (s) => new Date(s + 'T12:00:00');

const cases = [
  // [description, input, expected tone, text the verdict must contain]
  ['Havørred, Kattegat, 11. nov: ikke fredet endnu', { art: 'havoerred', hvor: 'kattegat', date: d('2026-11-11') }, 'ok', '40 cm'],
  ['Havørred, Kattegat, 20. nov: kun blanke', { art: 'havoerred', hvor: 'kattegat', date: d('2026-11-20') }, 'check', 'blank'],
  ['Havørred, Kattegat, 20. nov, farvet', { art: 'havoerred', hvor: 'kattegat', date: d('2026-11-20'), state: 'farvet' }, 'no', 'farvet'],
  ['Havørred, Kattegat, 20. nov, blank 45 cm', { art: 'havoerred', hvor: 'kattegat', date: d('2026-11-20'), state: 'blank', length: 45 }, 'ok', '45 cm'],
  ['Havørred, Kattegat, 16. jan: fredning slut', { art: 'havoerred', hvor: 'kattegat', date: d('2027-01-16') }, 'ok', '40 cm'],
  ['Havørred, 38 cm: under mindstemål', { art: 'havoerred', hvor: 'baelt', date: d('2026-06-01'), length: 38 }, 'no', 'mindstemålet'],
  ['Havørred, Vadehavet, 1. okt: alle fredet', { art: 'havoerred', hvor: 'vadehavet', date: d('2026-10-01') }, 'no', 'ud igen'],
  ['Havørred, Ringkøbing Fjord, juni: totalfredet', { art: 'havoerred', hvor: 'ringkobing', date: d('2026-06-01') }, 'no', 'ud igen'],
  ['Havørred, å, 1. dec: fredet', { art: 'havoerred', hvor: 'fersk', date: d('2026-12-01') }, 'no', 'ud igen'],
  ['Havørred, å, 5. mar: åben', { art: 'havoerred', hvor: 'fersk', date: d('2027-03-05') }, 'ok', '40 cm'],
  ['Havørred, Bornholm-å, 1. okt: kun blanke', { art: 'havoerred', hvor: 'fersk-bornholm', date: d('2026-10-01') }, 'check', 'blank'],
  ['Gedde, sø, 10. apr: fredet', { art: 'gedde', hvor: 'fersk', date: d('2026-04-10') }, 'no', 'ud igen'],
  ['Gedde, sø, 20. mar: fredet', { art: 'gedde', hvor: 'fersk', date: d('2026-03-20') }, 'no', 'ud igen'],
  ['Gedde, saltvand, 20. mar: åben, 60 cm', { art: 'gedde', hvor: 'baelt', date: d('2026-03-20') }, 'ok', '60 cm'],
  ['Torsk, Bælterne, 2026: forbudt', { art: 'torsk', hvor: 'baelt', date: d('2026-11-11') }, 'no', 'ud igen'],
  ['Torsk, Bælterne, 2027: regel ikke tjekket', { art: 'torsk', hvor: 'baelt', date: d('2027-02-01') }, 'check', 'Tjek'],
  ['Torsk, Kattegat: 30 cm', { art: 'torsk', hvor: 'kattegat', date: d('2026-11-11') }, 'ok', '30 cm'],
  ['Ål, saltvand, 2026: forbudt', { art: 'aal', hvor: 'kattegat', date: d('2026-08-01') }, 'no', 'ud igen'],
  ['Sandart, saltvand: ingen regler', { art: 'sandart', hvor: 'kattegat', date: d('2026-08-01') }, 'check', 'ingen regler'],
  ['Hornfisk, Bælterne: intet mindstemål', { art: 'hornfisk', hvor: 'baelt', date: d('2026-05-01') }, 'ok', 'gerne'],
];

let failed = 0;
for (const [desc, input, tone, text] of cases) {
  const r = evaluate(data, input);
  const ok = r.tone === tone && r.verdict.toLowerCase().includes(text.toLowerCase());
  if (!ok) failed++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${desc} -> [${r.tone}] ${r.verdict}${r.facts[1] ? ' | ' + r.facts[1][1] : ''}`);
}
// Year strip
const strip = yearSegments(SPECIES, 'havoerred', 'kattegat', d('2026-11-20'));
const stripOk = strip.segments.length === 2
  && strip.segments.every((s) => s.kind === 'colored')
  && strip.segments[0].start === 0 && Math.abs(strip.segments[0].end - (15 / 365) * 100) < 0.01  // 1-15 Jan
  && Math.abs(strip.segments[1].start - (319 / 365) * 100) < 0.01 && strip.segments[1].end === 100 // 16 Nov -> 31 Dec
  && strip.marker > strip.segments[1].start;
if (!stripOk) failed++;
console.log(`${stripOk ? 'ok  ' : 'FAIL'} Year strip: havørred, Kattegat, 2026 -> ${JSON.stringify(strip.segments.map((s) => [s.kind, s.start.toFixed(1), s.end.toFixed(1)]))}, marker ${strip.marker.toFixed(1)}%`);
const none = yearSegments(SPECIES, 'hornfisk', 'baelt', d('2026-05-01'));
const noneOk = none.segments.length === 0;
if (!noneOk) failed++;
console.log(`${noneOk ? 'ok  ' : 'FAIL'} Year strip: hornfisk has no periods`);

// "Hvad bider i dag?"
let extra = 2;
const check = (desc, ok) => { extra++; if (!ok) failed++; console.log(`${ok ? 'ok  ' : 'FAIL'} ${desc}`); };
const area = (k) => AREAS.find((a) => a.key === k);
const nov20 = fishToday(data, monthData[10], area('koebenhavn'), d('2026-11-20'));
const by = (list, n) => list.find((f) => f.name === n);
check(`I dag, København 20/11: havørred -> ${by(nov20, 'Havørred').label}`, by(nov20, 'Havørred').label === 'Kun blanke fisk');
check(`I dag, København 20/11: torsk -> ${by(nov20, 'Torsk').label}`, by(nov20, 'Torsk').label === 'Forbudt her' && by(nov20, 'Torsk').tone === 'no');
check(`I dag, København 20/11: regnbueørred -> ${by(nov20, 'Regnbueørred').detail}`, /put and take/i.test(by(nov20, 'Regnbueørred').detail));
const novKat = fishToday(data, monthData[10], area('nordsjaelland'), d('2026-11-11'));
check(`I dag, Isefjorden 11/11: torsk -> ${by(novKat, 'Torsk').label}, ${by(novKat, 'Torsk').detail}`, by(novKat, 'Torsk').label === 'Må fanges' && by(novKat, 'Torsk').detail === 'Mindst 30 cm');
check(`I dag, Isefjorden 11/11: havørred -> ${by(novKat, 'Havørred').label}, ${by(novKat, 'Havørred').detail}`, by(novKat, 'Havørred').label === 'Må fanges' && by(novKat, 'Havørred').detail === 'Mindst 40 cm');
const marGedde = fishToday(data, monthData[2], area('fyn'), d('2027-03-20'));
check(`I dag, Fyn 20/3: gedde (ferskvand) -> ${by(marGedde, 'Gedde').label}`, by(marGedde, 'Gedde').label === 'Fredet nu');
check('Vejrtips: stærk vind', weatherTips({ air: 6, wind: 12, dir: 270, cloud: 80, rain: 0 }, ['Havørred']).some((t) => t.includes('blæser')));
check('Vejrtips: gråvejr + let vind -> havørredvejr', weatherTips({ air: 7, wind: 4, dir: 270, cloud: 90, rain: 0 }, ['Havørred']).some((t) => t.includes('havørredvejr')));
check('Vejrtips: ingen havørred -> intet havørredtip', !weatherTips({ air: 7, wind: 4, dir: 270, cloud: 90, rain: 0 }, ['Makrel']).some((t) => t.includes('havørred')));
check('Vindretning 240° = SV', windDir(240) === 'SV');
check('Nærmeste område for Odense (55.40, 10.39) = Fyn', nearestArea(55.40, 10.39).key === 'fyn');

const total = cases.length + extra;
console.log(failed ? `\n${failed} of ${total} failed` : `\nAll ${total} passed`);
process.exit(failed ? 1 : 0);
