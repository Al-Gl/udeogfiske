// Tests for the "Må jeg tage fisken med hjem?" checker.
// Run: node --experimental-strip-types scripts/test-fish-rules.mjs
// Expected answers come from Miljøstyrelsen's rules page (see src/data/fiskeregler.ts).
import { SPECIES, ZONES, AREA_NAMES } from '../src/data/fiskeregler.ts';
import { evaluate } from '../src/lib/fishRules.ts';

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
console.log(failed ? `\n${failed} of ${cases.length} failed` : `\nAll ${cases.length} passed`);
process.exit(failed ? 1 : 0);
