// Decision logic for "Må jeg tage fisken med hjem?". Pure function, used by
// src/components/FishRuleChecker.astro in the browser and by scripts/test-fish-rules.mjs.
import type { Species, Period } from '../data/fiskeregler';

type ZoneInfo = { key: string; label: string; water: 'salt' | 'fersk'; area: string };
export type Input = { art: string; hvor: string; date: Date; length?: number; state?: '' | 'blank' | 'farvet' };
export type Result = {
  tone: 'ok' | 'no' | 'check';
  verdict: string;
  why: string;
  showState: boolean;
  facts: [string, string][];
  notes: string[];
};

const MONTHS = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'];
export const mmdd = (d: Date) => `${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const inPeriod = (md: string, p: Period) => (p.from <= p.to ? md >= p.from && md <= p.to : md >= p.from || md <= p.to);
const human = (md: string) => {
  const [m, d] = md.split('-').map(Number);
  return md === '02-29' ? '28./29. februar' : `${d}. ${MONTHS[m - 1]}`;
};

// Year strip: the periods for one species + zone in a given year, as percentages of the year,
// plus where the chosen date sits. Periods over New Year are split in two.
export type Segment = { start: number; end: number; kind: Period['kind'] };
export function yearSegments(species: Species[], art: string, zone: string, date: Date) {
  const year = date.getFullYear();
  const leap = new Date(year, 1, 29).getMonth() === 1;
  const daysInYear = leap ? 366 : 365;
  const dayOf = (md: string) => {
    const [m, d] = md.split('-').map(Number);
    const day = m === 2 && d === 29 && !leap ? 28 : d;
    return Math.round((new Date(year, m - 1, day).getTime() - new Date(year, 0, 1).getTime()) / 86400000);
  };
  const pct = (n: number) => (n / daysInYear) * 100;
  const sp = species.find((s) => s.slug === art);
  const segments: Segment[] = [];
  for (const p of sp?.periods ?? []) {
    if (!p.zones.includes(zone as any) || (p.years && !p.years.includes(year))) continue;
    const a = dayOf(p.from), b = dayOf(p.to) + 1;
    if (p.from <= p.to) segments.push({ start: pct(a), end: pct(b), kind: p.kind });
    else segments.push({ start: 0, end: pct(b), kind: p.kind }, { start: pct(a), end: 100, kind: p.kind });
  }
  // Full closures drawn on top of "colored only" so overlaps read correctly
  const order = { check: 0, colored: 1, closed: 2 } as const;
  segments.sort((x, y) => order[x.kind] - order[y.kind]);
  return { segments, marker: pct(dayOf(mmdd(date)) + 0.5) };
}

export function evaluate(
  data: { species: Species[]; zones: ZoneInfo[]; areas: Record<string, string> },
  input: Input,
): Result {
  const sp = data.species.find((s) => s.slug === input.art)!;
  const zone = data.zones.find((z) => z.key === input.hvor)!;
  const md = mmdd(input.date);
  const year = input.date.getFullYear();
  const length = input.length;
  const state = input.state ?? '';

  const forZone = sp.periods.filter((p) => p.zones.includes(zone.key as any));
  const active = forZone.filter((p) => inPeriod(md, p) && (!p.years || p.years.includes(year)));
  // A year-limited rule (EU rules for torsk, ål …) that has run out: next year's rule isn't known here.
  const expired = forZone.find((p) => p.years && year > Math.max(...p.years));
  const closed = active.find((p) => p.kind === 'closed');
  const colored = active.find((p) => p.kind === 'colored');
  const check = active.find((p) => p.kind === 'check') ?? (expired && !closed && !colored
    ? { ...expired, kind: 'check' as const, text: `Reglen gjaldt ${expired.years!.join(', ')}. Reglerne for ${year} er ikke tjekket her endnu, så se Miljøstyrelsens side.` }
    : undefined);
  const min = sp.minZone?.[zone.key as keyof typeof sp.minZone] ?? sp.min[zone.area as keyof typeof sp.min];
  const waterOk = sp.waters.includes(zone.water);

  let tone: Result['tone'] = 'ok';
  let verdict = '';
  let why = '';
  if (!waterOk) {
    tone = 'check';
    verdict = `Miljøstyrelsen har ingen regler for ${sp.name.toLowerCase()} i ${zone.water === 'salt' ? 'saltvand' : 'ferskvand'}`;
    why = sp.slug === 'baekoerred' ? 'En ørred i saltvand er en havørred. Vælg havørred.' : 'Tjek de lokale regler, der hvor du fisker.';
  } else if (closed) {
    tone = 'no'; verdict = 'Nej, den skal ud igen'; why = closed.text;
  } else if (colored) {
    if (state === 'farvet') { tone = 'no'; verdict = 'Nej, en farvet fisk skal ud igen'; }
    else if (state === 'blank') { tone = 'ok'; verdict = min ? `Ja, hvis den er mindst ${min} cm` : 'Ja'; }
    else { tone = 'check'; verdict = 'Kun hvis den er helt blank'; }
    why = colored.text;
  } else if (check) {
    tone = 'check'; verdict = 'Tjek de lokale regler'; why = check.text;
  } else {
    verdict = min ? `Ja, hvis den er mindst ${min} cm` : sp.noMin ? 'Ja, den må du gerne tage med' : 'Ja, der er ingen fredning nu';
    why = `${sp.name} er ikke fredet ${zone.water === 'salt' ? 'her' : 'i ferskvand'} på den valgte dato.`;
  }

  // Length check (only when the fish may otherwise be kept)
  if (tone !== 'no' && min && length !== undefined && !isNaN(length)) {
    if (length < min) { tone = 'no'; verdict = `Nej, den er under mindstemålet på ${min} cm`; }
    else if (tone === 'ok') verdict = `Ja, ${length} cm er over mindstemålet på ${min} cm`;
  }

  // When does it change next? (year-round rules are not "changes")
  const seasonal = forZone.filter((p) => p.from !== '01-01' && (!p.years || p.years.includes(year)));
  let next = '';
  if (closed && closed.from !== '01-01') next = `Fredningen slutter ${human(closed.to)}.`;
  else if (colored) {
    // If a full closure starts the day after, say that instead of "slutter" (e.g. Bornholm streams).
    const after = new Date(year, Number(colored.to.slice(0, 2)) - 1, Number(colored.to.slice(3)) + 1);
    const full = seasonal.find((p) => p.kind === 'closed' && p.from === mmdd(after));
    next = full
      ? `Fra ${human(full.from)} er alle fisk fredet (til ${human(full.to)}).`
      : `Fredningen af farvede fisk slutter ${human(colored.to)}.`;
  }
  else if (!closed) {
    const starts = seasonal.map((p) => p.from).sort();
    const upcoming = starts.find((d) => d > md) ?? starts[0];
    const p = seasonal.find((x) => x.from === upcoming && x.kind !== 'check');
    if (p) next = `Næste fredning starter ${human(p.from)}${p.kind === 'colored' ? ' (farvede fisk)' : ''}.`;
  }

  const facts: [string, string][] = [
    ['Mindstemål', min ? `${min} cm (${data.areas[zone.area]})` : sp.noMin ? 'Intet mindstemål' : waterOk ? `Ikke angivet for ${data.areas[zone.area].toLowerCase()}` : '–'],
    ...(next ? [['Næste ændring', next] as [string, string]] : []),
  ];

  const notes = [
    ...(sp.zoneNotes?.[zone.key as keyof typeof sp.zoneNotes] ? [sp.zoneNotes[zone.key as keyof typeof sp.zoneNotes]!] : []),
    ...(sp.notes ?? []),
    ...(zone.water === 'salt' && ['havoerred', 'laks'].includes(sp.slug)
      ? ['Ved mange å- og bækudløb er der fredningsbælter, hvor alt fiskeri er forbudt i hele eller dele af året. Tjek, om du står i et.']
      : []),
  ];

  return { tone, verdict, why, showState: !!colored, facts, notes };
}
