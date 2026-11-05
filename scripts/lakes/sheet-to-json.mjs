// Reads the put & take master sheet and writes src/data/lakes.json for the site.
// Run from the repo root with: npm run lakes
//
// Rules (see marketing/put-and-take-roadmap.md §3-4):
// - Only the "Søer" tab is read. Rows with Niveau listing/page/visited are exported;
//   skip, empty Niveau and Type "ikke relevant" are left out.
// - A page/visited lake must have prices, species, hours, a source URL, a check date
//   and a text file src/content/lakes/{slug}.md, otherwise the script stops.
// - Besøgt = Ja + Niveau page => level "visited" (gets the "Mit besøg" section).
//
// Cell formats Claude uses when filling facts:
//   Priser:       "2 timer: 150 kr; Dagskort: 400 kr; Børn u. 12: 75 kr"
//   Fiskearter:   "regnbueørred, laks, stør"
//   Faciliteter:  "toilet, rensebord, shelter"
//   Kilde (URL):  one or more URLs separated by spaces or ";"
import readXlsxFile from 'read-excel-file/node';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SHEET = path.join(ROOT, 'marketing/put-and-take/put-and-take-soeer.xlsx');
const OUT = path.join(ROOT, 'src/data/lakes.json');
const TEXTS = path.join(ROOT, 'src/content/lakes');

const REGIONS = ['nordjylland', 'vestjylland', 'midtjylland', 'sydjylland', 'fyn', 'sjaelland', 'bornholm'];
const LEVELS = ['listing', 'page', 'visited'];

const rows = await readXlsxFile(SHEET, { sheet: 'Søer' });
const header = rows[0].map((h) => String(h ?? '').trim());
const col = (name) => {
  const i = header.indexOf(name);
  if (i === -1) throw new Error(`Column "${name}" not found in sheet`);
  return i;
};
const C = Object.fromEntries(
  ['ID', 'Navn', 'Besøgt', 'Niveau', 'Type', 'Region', 'By', 'Postnr', 'Adresse', 'Hjemmeside', 'Telefon',
    'Google Maps', 'Anmeldelser', 'Søgninger/md', 'Priser', 'Fiskearter', 'Udsætning', 'Åbningstider', 'Sæson',
    'Antal søer', 'Børnesø', 'Flue/C&R-sø', 'Faciliteter', 'Regler', 'Kilde (URL)', 'Sidst tjekket', 'Slug',
    'Lat', 'Lng', 'Maps CID'].map((n) => [n, col(n)]),
);

const text = (v) => (v === null || v === undefined ? '' : String(v).trim());
const list = (v) => text(v).split(/[,;]\s*/).map((s) => s.trim()).filter(Boolean);
const yesNo = (v) => {
  const t = text(v).toLowerCase();
  return t === 'ja' ? true : t === 'nej' ? false : null;
};
const date = (v) => {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  const t = text(v);
  return /^\d{4}-\d{2}-\d{2}$/.test(t) ? t : '';
};
const prices = (v) =>
  text(v).split(';').map((p) => p.trim()).filter(Boolean).map((p) => {
    const m = p.match(/^(.*?):\s*([\d.,]+)\s*kr\.?(.*)$/i);
    return m ? { label: m[1].trim(), kr: Number(m[2].replace(/\./g, '').replace(',', '.')), note: m[3].trim() } : { label: p, kr: null, note: '' };
  });
// "Hove Put And Take ApS" -> "Hove Put and Take"; "X v/Navn" -> "X"
const displayName = (n) =>
  text(n).replace(/\s+ApS$/i, '').replace(/\s+v\/.*$/i, '').replace(/put\s*and\s*take/i, 'Put and Take').replace(/put\s*&\s*take/i, 'Put & Take').trim();

const errors = [];
const lakes = [];
const slugs = new Set();

for (const r of rows.slice(1)) {
  const name = text(r[C.Navn]);
  if (!name) continue;
  const level0 = text(r[C.Niveau]).toLowerCase();
  const type = text(r[C.Type]);
  if (!LEVELS.includes(level0) || type === 'ikke relevant') continue;

  const visited = yesNo(r[C['Besøgt']]) === true;
  const level = level0 === 'page' && visited ? 'visited' : level0;
  const slug = text(r[C.Slug]);
  const region = text(r[C.Region]).toLowerCase();
  const where = `row ${r[C.ID]} "${name}"`;

  if (!slug || !/^[a-z0-9-]+$/.test(slug)) errors.push(`${where}: bad slug "${slug}"`);
  if (slugs.has(slug)) errors.push(`${where}: duplicate slug "${slug}"`);
  slugs.add(slug);
  if (!REGIONS.includes(region)) errors.push(`${where}: unknown region "${region}"`);

  const lake = {
    id: Number(r[C.ID]) || null,
    slug,
    name: displayName(name),
    mapsName: name,
    level,
    visited,
    type,
    region,
    town: text(r[C.By]),
    zip: text(r[C.Postnr]),
    address: text(r[C.Adresse]),
    lat: Number(r[C.Lat]) || null,
    lng: Number(r[C.Lng]) || null,
    website: text(r[C.Hjemmeside]),
    phone: text(r[C.Telefon]),
    mapsUrl: text(r[C['Maps CID']]) ? `https://www.google.com/maps?cid=${text(r[C['Maps CID']])}` : '',
    reviews: Number(r[C.Anmeldelser]) || 0,
    searchVolume: Number(r[C['Søgninger/md']]) || 0,
    prices: prices(r[C.Priser]),
    species: list(r[C.Fiskearter]),
    stocking: text(r[C['Udsætning']]),
    hours: text(r[C['Åbningstider']]),
    season: text(r[C['Sæson']]),
    lakesCount: Number(r[C['Antal søer']]) || null,
    kidsLake: yesNo(r[C['Børnesø']]),
    flyLake: yesNo(r[C['Flue/C&R-sø']]),
    facilities: list(r[C.Faciliteter]),
    rules: text(r[C.Regler]),
    sources: text(r[C['Kilde (URL)']]).split(/[\s;]+/).filter((u) => /^https?:\/\//.test(u)),
    lastChecked: date(r[C['Sidst tjekket']]),
  };

  if (level !== 'listing') {
    const missing = [];
    if (!lake.prices.length) missing.push('Priser');
    if (!lake.species.length) missing.push('Fiskearter');
    if (!lake.hours) missing.push('Åbningstider');
    if (!lake.sources.length) missing.push('Kilde (URL)');
    if (!lake.lastChecked) missing.push('Sidst tjekket (YYYY-MM-DD)');
    if (!fs.existsSync(path.join(TEXTS, `${slug}.md`))) missing.push(`text file src/content/lakes/${slug}.md`);
    if (missing.length) errors.push(`${where} is "${level}" but is missing: ${missing.join(', ')}`);
  }
  lakes.push(lake);
}

if (errors.length) {
  console.error(`\n${errors.length} problem(s) — lakes.json NOT written:\n- ` + errors.join('\n- '));
  process.exit(1);
}

lakes.sort((a, b) => a.name.localeCompare(b.name, 'da'));
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(lakes, null, 1) + '\n');
const count = (lvl) => lakes.filter((l) => l.level === lvl).length;
console.log(`Wrote ${path.relative(ROOT, OUT)}: ${lakes.length} lakes (${count('visited')} visited, ${count('page')} page, ${count('listing')} listing)`);
