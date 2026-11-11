// "Hvad bider i dag?" — pure helpers, used by src/components/TodayBiting.astro in the
// browser and by scripts/test-fish-rules.mjs. No made-up scores: the fish list comes from
// the site's season data, the status from the official rules, and the weather tips are
// rules of thumb already written on the site.
import type { Species } from '../data/fiskeregler';
import type { MonthEntry } from '../data/season-data';
import { evaluate } from './fishRules.ts';

export type Area = { key: string; name: string; zone: string; fresh: string; lat: number; lng: number; seaLat: number; seaLng: number };

// Weather point = a town in the area; sea point = open water nearby (sea temperature only exists at sea).
export const AREAS: Area[] = [
  { key: 'nordjylland', name: 'Nordjylland', zone: 'kattegat', fresh: 'fersk', lat: 57.05, lng: 9.92, seaLat: 57.10, seaLng: 10.60 },
  { key: 'vestjylland', name: 'Vestjylland', zone: 'nordsoen', fresh: 'fersk', lat: 56.00, lng: 8.13, seaLat: 56.00, seaLng: 7.95 },
  { key: 'oestjylland', name: 'Østjylland og Djursland', zone: 'kattegat', fresh: 'fersk', lat: 56.16, lng: 10.21, seaLat: 56.15, seaLng: 10.40 },
  { key: 'sydjylland', name: 'Sydjylland og Lillebælt', zone: 'baelt', fresh: 'fersk', lat: 55.49, lng: 9.47, seaLat: 55.45, seaLng: 9.80 },
  { key: 'fyn', name: 'Fyn', zone: 'baelt', fresh: 'fersk', lat: 55.40, lng: 10.39, seaLat: 55.35, seaLng: 10.95 },
  { key: 'nordsjaelland', name: 'Nordsjælland og Isefjorden', zone: 'kattegat', fresh: 'fersk', lat: 55.85, lng: 11.80, seaLat: 56.10, seaLng: 11.90 },
  { key: 'koebenhavn', name: 'København og Øresund', zone: 'baelt', fresh: 'fersk', lat: 55.68, lng: 12.57, seaLat: 55.75, seaLng: 12.75 },
  { key: 'sydsjaelland', name: 'Syd- og Vestsjælland, Lolland-Falster', zone: 'baelt', fresh: 'fersk', lat: 55.25, lng: 11.76, seaLat: 55.05, seaLng: 11.60 },
  { key: 'bornholm', name: 'Bornholm', zone: 'bornholm', fresh: 'fersk-bornholm', lat: 55.10, lng: 14.90, seaLat: 55.10, seaLng: 15.20 },
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
