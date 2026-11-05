// Put & take lakes: data from src/data/lakes.json (built from the master sheet with
// `npm run lakes`) plus our own text per lake in src/content/lakes/{slug}.md.
import fs from 'node:fs';
import path from 'node:path';
import lakesData from '../data/lakes.json';

export type Price = { label: string; kr: number | null; note: string };
export type Lake = {
  id: number | null; slug: string; name: string; mapsName: string;
  level: 'listing' | 'page' | 'visited'; visited: boolean; type: string;
  region: RegionSlug; town: string; zip: string; address: string;
  lat: number | null; lng: number | null; website: string; phone: string; mapsUrl: string;
  reviews: number; searchVolume: number; prices: Price[]; species: string[];
  stocking: string; hours: string; season: string; lakesCount: number | null;
  kidsLake: boolean | null; flyLake: boolean | null; facilities: string[];
  rules: string; sources: string[]; lastChecked: string;
};
export type RegionSlug = 'nordjylland' | 'vestjylland' | 'midtjylland' | 'sydjylland' | 'fyn' | 'sjaelland' | 'bornholm';

export const lakes = lakesData as Lake[];
export const BASE = '/fiskepladser/put-and-take';

// Region pages. Bornholm has no page of its own (< 3 lakes): its lakes are shown on Sjælland.
export const REGIONS: { slug: RegionSlug; name: string; page: RegionSlug }[] = [
  { slug: 'sjaelland', name: 'Sjælland', page: 'sjaelland' },
  { slug: 'fyn', name: 'Fyn', page: 'fyn' },
  { slug: 'sydjylland', name: 'Sydjylland', page: 'sydjylland' },
  { slug: 'vestjylland', name: 'Vestjylland', page: 'vestjylland' },
  { slug: 'midtjylland', name: 'Midtjylland', page: 'midtjylland' },
  { slug: 'nordjylland', name: 'Nordjylland', page: 'nordjylland' },
  { slug: 'bornholm', name: 'Bornholm', page: 'sjaelland' },
];
export const regionName = (slug: string) => REGIONS.find((r) => r.slug === slug)?.name ?? slug;
export const regionUrl = (slug: string) => `${BASE}/${REGIONS.find((r) => r.slug === slug)?.page ?? slug}/`;

export const hasPage = (l: Lake) => l.level === 'page' || l.level === 'visited';
export const lakeUrl = (l: Lake) => `${BASE}/${l.slug}/`;
export const pageLakes = () => lakes.filter(hasPage);
export const lakesInRegion = (region: string) =>
  lakes.filter((l) => REGIONS.find((r) => r.slug === l.region)?.page === region);

// Lake texts: frontmatter (summary, tip, faq) + Markdown body.
type LakeText = {
  frontmatter: { summary: string; tip?: string; faq?: { question: string; answer: string }[] };
  Content: any;
};
const texts = import.meta.glob<LakeText>('../content/lakes/*.md', { eager: true });
export const lakeText = (slug: string) => texts[`../content/lakes/${slug}.md`];
// Display name: the text file may override the Google Maps name (e.g. "Drive In Fiskepark").
export const lakeName = (l: Lake) => (lakeText(l.slug)?.frontmatter as any)?.name ?? l.name;

// Website link we can show (never a competitor's directory page).
export const ownWebsite = (l: Lake) => (l.website && !/fiskesoerdanmark\.dk/i.test(l.website) ? l.website : '');
export const websiteLabel = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

// Adult hourly tickets: labels like "3 timer".
const hourTickets = (l: Lake) =>
  l.prices.filter((p) => p.kr && /^\d+\s*timer$/i.test(p.label.trim()))
    .map((p) => ({ hours: parseInt(p.label, 10), kr: p.kr as number }));
export const cheapestTicket = (l: Lake) => {
  const t = hourTickets(l).sort((a, b) => a.hours - b.hours)[0];
  return t ? `${t.kr} kr. / ${t.hours} t.` : '';
};

const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
};
// Price for a given ticket length across the lakes we have checked.
export function priceStats(hours: number, from: Lake[] = pageLakes()) {
  const xs = from.flatMap((l) => hourTickets(l).filter((t) => t.hours === hours).map((t) => t.kr));
  if (!xs.length) return null;
  return { hours, n: xs.length, min: Math.min(...xs), max: Math.max(...xs), median: median(xs) };
}

export function distanceKm(a: { lat: number | null; lng: number | null }, b: { lat: number | null; lng: number | null }) {
  if (a.lat == null || a.lng == null || b.lat == null || b.lng == null) return Infinity;
  const r = (x: number) => (x * Math.PI) / 180;
  const h = Math.sin(r(b.lat - a.lat) / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(r(b.lng - a.lng) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}
export const nearest = (l: Lake, n = 3) =>
  lakes.filter((o) => o.slug !== l.slug)
    .map((o) => ({ lake: o, km: distanceKm(l, o) }))
    .sort((a, b) => a.km - b.km)
    .slice(0, n);

// Images: drop a real photo in public/images/put-and-take/{slug}.jpg (and optionally
// {slug}-wide.jpg for the page header) and it is used automatically. Until then each lake
// gets one of six placeholder photos (picked from the slug, so it never changes), shown
// with an "illustrationsfoto" caption so it isn't presented as the lake itself.
const IMG_DIR = path.join(process.cwd(), 'public/images/put-and-take');
const hasFile = (f: string) => fs.existsSync(path.join(IMG_DIR, f));
const placeholderNo = (slug: string) => ([...slug].reduce((s, c) => s + c.charCodeAt(0), 0) % 6) + 1;
export function lakeImage(l: { slug: string }, wide = false) {
  if (hasFile(`${l.slug}.jpg`)) {
    const file = wide && hasFile(`${l.slug}-wide.jpg`) ? `${l.slug}-wide.jpg` : `${l.slug}.jpg`;
    return { src: `/images/put-and-take/${file}`, placeholder: false };
  }
  return { src: `/images/put-and-take/placeholder-${placeholderNo(l.slug)}${wide ? '-wide' : ''}.jpg`, placeholder: true };
}

export const formatDate = (iso: string) =>
  iso ? new Date(iso).toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
export const yesNo = (v: boolean | null) => (v === true ? 'Ja' : v === false ? 'Nej' : '–');
