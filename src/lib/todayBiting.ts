// "Hvad bider i dag?" — pure helpers, used by src/components/TodayBiting.astro in the
// browser and by scripts/test-fish-rules.mjs. No made-up scores: the fish list comes from
// the site's season data, the status from the official rules, and the weather tips are
// rules of thumb already written on the site.
import type { Species } from '../data/fiskeregler';
import type { MonthEntry } from '../data/season-data';
import { evaluate } from './fishRules.ts';

export type Area = { key: string; region: string; name: string; zone: string; fresh: string; lat: number; lng: number; seaLat: number; seaLng: number };

// One entry per fishing water, because the rules zone changes inside a region (Limfjorden = Nordsøen,
// Esbjerg = Vadehavet ...). Kattegat's southern border is the line Hasenøre (just south of Ebeltoft)
// – Gniben, and Gilbjerg Hoved – Kullen (reguleringsbekendtgørelsen, bilag 1): Aarhus Bugt, Horsens
// Fjord and Nordfyn lie south of it = Bælterne.
// Weather point = a town on that water; sea point = water where Open-Meteo has a sea temperature
// (all tested 2026-11-11; most of Limfjorden returns none, Nibe Bredning does).
const a = (region: string, key: string, name: string, zone: string, lat: number, lng: number, seaLat: number, seaLng: number): Area =>
  ({ key, region, name, zone, fresh: zone === 'bornholm' ? 'fersk-bornholm' : 'fersk', lat, lng, seaLat, seaLng });
export const AREAS: Area[] = [
  a('Nordjylland', 'skagen', 'Skagen og Skagerrak', 'kattegat', 57.60, 10.20, 57.75, 10.20),
  a('Nordjylland', 'nj-oestkyst', 'Østkysten (Frederikshavn–Hals)', 'kattegat', 57.33, 10.52, 57.30, 10.70),
  a('Nordjylland', 'limfjorden', 'Limfjorden', 'nordsoen', 57.00, 9.50, 57.02, 9.60),
  a('Nordjylland', 'thy', 'Thy og Hanstholm', 'nordsoen', 57.12, 8.62, 57.15, 8.40),
  a('Nordjylland', 'mariager', 'Mariager Fjord', 'kattegat', 56.65, 9.98, 56.70, 10.40),
  a('Vestjylland', 'vestkysten', 'Vestkysten (Thyborøn–Hvide Sande)', 'nordsoen', 56.30, 8.13, 56.30, 7.95),
  a('Vestjylland', 'ringkobing', 'Ringkøbing og Nissum Fjord', 'ringkobing', 56.09, 8.24, 56.00, 8.20),
  a('Vestjylland', 'vadehavet', 'Esbjerg og Vadehavet', 'vadehavet', 55.47, 8.45, 55.40, 8.25),
  a('Østjylland', 'djursland', 'Djursland og Randers Fjord', 'kattegat', 56.41, 10.88, 56.40, 11.05),
  a('Østjylland', 'aarhus', 'Aarhus Bugt og Mols', 'baelt', 56.16, 10.21, 56.10, 10.40),
  a('Østjylland', 'horsens', 'Horsens Fjord og Juelsminde', 'baelt', 55.71, 10.01, 55.75, 10.20),
  a('Sydjylland', 'lillebaelt', 'Vejle Fjord og Lillebælt', 'baelt', 55.57, 9.75, 55.45, 9.80),
  a('Sydjylland', 'als', 'Als og Flensborg Fjord', 'baelt', 54.91, 9.79, 54.85, 10.00),
  a('Fyn', 'nordfyn', 'Nordfyn og Fyns Hoved', 'baelt', 55.55, 10.30, 55.65, 10.55),
  a('Fyn', 'sydfyn', 'Sydfyn og Øhavet', 'baelt', 55.06, 10.61, 54.95, 10.80),
  a('Sjælland', 'isefjorden', 'Isefjorden og Roskilde Fjord', 'kattegat', 55.80, 11.85, 55.85, 11.82),
  a('Sjælland', 'nordkysten', 'Nordkysten (Hundested–Gilleleje)', 'kattegat', 56.12, 12.31, 56.15, 12.10),
  a('Sjælland', 'oeresund', 'Øresund og København', 'baelt', 55.68, 12.57, 55.75, 12.75),
  a('Sjælland', 'koege', 'Køge Bugt og Stevns', 'baelt', 55.46, 12.18, 55.40, 12.45),
  a('Sjælland', 'vestsjaelland', 'Vestsjælland og Storebælt', 'baelt', 55.33, 11.14, 55.35, 10.95),
  a('Sjælland', 'lolland-falster', 'Møn, Lolland og Falster', 'baelt', 54.77, 11.87, 54.65, 12.10),
  a('Bornholm', 'bornholm', 'Bornholm', 'bornholm', 55.10, 14.90, 55.10, 15.20),
];

// Season-data fish name -> rules species + water. null = no single rule (handled with a note).
const FISH: Record<string, { slug: string | null; water: 'salt' | 'fersk'; href: string; note?: string }> = {
  'Havørred': { slug: 'havoerred', water: 'salt', href: '/guide-til-fisk/havorredfiskeri/' },
  'Torsk': { slug: 'torsk', water: 'salt', href: '/guide-til-fisk/torskefiskeri/' },
  'Sild': { slug: 'sild', water: 'salt', href: '/guide-til-fisk/sildefiskeri/' },
  'Makrel': { slug: 'makrel', water: 'salt', href: '/guide-til-fisk/makrelfiskeri/' },
  'Hornfisk': { slug: 'hornfisk', water: 'salt', href: '/guide-til-fisk/hornfisk/' },
  'Fladfisk': { slug: null, water: 'salt', href: '/guide-til-fisk/fladfisk-fiskeri/', note: 'Ingen fredning. Mindstemålet afhænger af arten.' },
  'Regnbueørred': { slug: null, water: 'fersk', href: '/fiskepladser/put-and-take/', note: 'Put and take: søens egne regler gælder.' },
  'Aborre': { slug: 'aborre', water: 'fersk', href: '/guide-til-fisk/aborrefiskeri/' },
  'Gedde': { slug: 'gedde', water: 'fersk', href: '/guide-til-fisk/geddefiskeri/' },
};

export type FishStatus = {
  name: string; href: string; checkHref: string | null;
  tone: 'ok' | 'no' | 'check';
  label: string;   // short status, e.g. "Må fanges"
  detail: string;  // one line, e.g. "Mindst 40 cm"
  water: 'salt' | 'fersk';
};

const shorten = (s: string) => s.replace(/^(Ja|Nej),?\s*/, '');

export function fishToday(
  data: { species: Species[]; zones: any[]; areas: Record<string, string> },
  month: MonthEntry,
  area: Area,
  date: Date,
): FishStatus[] {
  return month.fish.map((name) => {
    const m = FISH[name];
    if (!m) return { name, href: '/saesonguide/', checkHref: null, tone: 'ok', label: 'I sæson', detail: '', water: 'salt' };
    if (!m.slug) return { name, href: m.href, checkHref: null, tone: 'ok', label: 'Må fanges', detail: m.note ?? '', water: m.water };
    const hvor = m.water === 'salt' ? area.zone : area.fresh;
    const r = evaluate(data, { art: m.slug, hvor, date });
    const min = r.facts[0]?.[1]?.match(/^(\d+) cm/)?.[1];
    let label: string, detail: string;
    if (r.showState) { label = 'Kun blanke fisk'; detail = r.facts[1]?.[1] ?? 'Farvede fisk skal ud igen.'; }
    else if (r.tone === 'no') { label = /forbudt/i.test(r.why) ? 'Forbudt her' : 'Fredet nu'; detail = r.facts[1]?.[1] ?? shorten(r.why); }
    else if (r.tone === 'check') { label = 'Særlige regler'; detail = 'Tjek reglerne, før du tager fisken med.'; }
    else { label = 'Må fanges'; detail = min ? `Mindst ${min} cm` : shorten(r.verdict); }
    return {
      name, href: m.href, tone: r.tone === 'ok' ? 'ok' : r.showState ? 'check' : r.tone, label, detail, water: m.water,
      checkHref: `/fiskeguide/mindstemaal-og-fredningstider/?art=${m.slug}&hvor=${hvor}#tjek`,
    };
  });
}

export type Weather = { air: number; wind: number; gust?: number; dir: number; cloud: number; rain: number; sea?: number; time?: string };

const DIRS = ['N', 'NØ', 'Ø', 'SØ', 'S', 'SV', 'V', 'NV'];
export const windDir = (deg: number) => DIRS[Math.round(((deg % 360) + 360) % 360 / 45) % 8];

// Rules of thumb, worded from advice already on udeogfiske.dk (havørred guides, October/November mails).
export function weatherTips(w: Weather, fish: string[]): string[] {
  const tips: string[] = [];
  if (w.wind >= 10) tips.push(`Det blæser kraftigt (${Math.round(w.wind)} m/s). Find en kyst i læ, eller vælg en fjord eller en put and take sø i dag.`);
  if (w.air <= 0) tips.push('Frostvejr gør fiskene sløve. Fisk langsomt, og brug de lyseste timer midt på dagen.');
  if (fish.includes('Havørred') && w.wind >= 2 && w.wind < 10 && w.cloud >= 60)
    tips.push('Let vind og gråvejr er godt havørredvejr. Fisk gerne den kyst, hvor vinden står ind mod land.');
  if (w.cloud < 30 && w.wind < 3)
    tips.push('Klart og stille vejr gør fiskene sky. Tidlig morgen og skumringen er dit bedste bud.');
  return tips.slice(0, 2);
}

export function nearestArea(lat: number, lng: number): Area {
  const d = (a: Area) => (a.lat - lat) ** 2 + ((a.lng - lng) * Math.cos((lat * Math.PI) / 180)) ** 2;
  return [...AREAS].sort((a, b) => d(a) - d(b))[0];
}
