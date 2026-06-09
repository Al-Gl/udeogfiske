// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://udeogfiske.dk',
  redirects: {
    // Session 22 (2026-05-13): area guides moved from /fisketure/ (live) → /fiskepladser/ (local)
    '/fisketure/havorredfiskeri-pa-stevns': '/fiskepladser/stevns/',
    '/fisketure/havorredfiskeri-i-isefjorden': '/fiskepladser/isefjorden/',
    '/fisketure/roskilde-fjord': '/fiskepladser/roskilde-fjord/',
    // Session 23 (2026-05-13): sub-pages where local route diverges from live URL.
    '/fluefiskeri/fluefiskeri-i-put-take': '/fiskeguide/fluefiskeri/fluefiskeri-i-put-take/',
    '/fiskeudstyr/waders-og-stovler/waders-til-havorredfiskeri': '/fiskeudstyr/beklaedning/waders-og-stovler/waders-til-havorredfiskeri/',
    // Session 24 (2026-05-13): fiskepladser sub-pages with shortened local slugs.
    '/fiskepladser/fiskeri-i-koebenhavn': '/fiskepladser/koebenhavn/',
    '/fiskepladser/havoerredfiskeri-i-mariager-fjord': '/fiskepladser/mariager-fjord/',
    // Session 27 (2026-05-13): trip-reports flattened — live had them nested under their fiskepladser parents.
    '/fisketure/havorredfiskeri-pa-stevns/bogeskoven-15-januar-2022': '/fisketure/bogeskoven-15-januar-2022/',
    '/fisketure/roskilde-fjord/salvadsparken-16-juli-2022': '/fisketure/salvadsparken-16-juli-2022/',
    // Session 31 (2026-05-15): Ørsted Ørredvand moved from /fisketure/ (live) → /fiskepladser/put-and-take/ (local Put & Take category).
    '/fisketure/oersted-oerredvand-marts': '/fiskepladser/put-and-take/oersted-oerredvand/',
    // Session 33 (2026-05-21): 20 slug-divergent live URLs from fresh crawl gap analysis.
    // — Top-level legacy URLs (pre-permalink-change on live):
    '/bombardafiskeri': '/fiskeguide/bombarda-fiskeri/',
    '/bornefiskeri': '/fiskeguide/fiskeri-for-born/',
    '/catch-and-release': '/fiskeguide/catch-and-release/',
    '/fiskeri-fra-baad': '/fiskeguide/fiskeri-fra-baad/',
    '/fisketegn': '/fiskeguide/fisketegn/',
    '/fluefiskeri': '/fiskeguide/fluefiskeri/',
    '/polaroid-briller': '/fiskeudstyr/beklaedning/polaroid-briller/',
    '/ul-fiskeri': '/fiskeguide/ul-fiskeri/',
    '/vadejakke': '/fiskeudstyr/beklaedning/vadejakke/',
    // — /fiskeguides/* (plural) family on live → /fiskeguide/* (singular) local:
    '/fiskeguides/fiskeri-paa-mole': '/fiskeguide/fiskeri-paa-mole/',
    '/fiskeguides/put-take-fiskeri': '/fiskeguide/put-take-fiskeri/',
    // — /fiskepladser/* legacy long-form slug:
    '/fiskepladser/havoerredfiskeri-i-isefjorden': '/fiskepladser/isefjorden/',
    // — /fiskeudstyr/* divergent flat slugs → categorised local routes:
    '/fiskeudstyr/fangstnet': '/fiskeudstyr/tilbehor/fangstnet/',
    '/fiskeudstyr/fiskesaet-for-begyndere': '/fiskeudstyr/tilbehor/fiskesaet-for-begyndere/',
    '/fiskeudstyr/waders-og-stovler': '/fiskeudstyr/beklaedning/waders-og-stovler/',
    '/fiskeudstyr/koeb-af-fiskehjul': '/fiskeudstyr/fiskehjul/',
    '/fiskeudstyr/kob-af-fiskestaenger': '/fiskeudstyr/fiskestaenger/',
    '/fiskeudstyr/kob-af-fiskestaenger/fiskestang-til-havet': '/fiskeudstyr/fiskestaenger/fiskestang-til-havet/',
    '/fiskeudstyr/kob-af-fiskestaenger/fluefiskestang': '/fiskeudstyr/fiskestaenger/fluefiskestang/',
    '/fiskeudstyr/kob-af-fiskestaenger/spinnestaenger': '/fiskeudstyr/fiskestaenger/spinnestaenger/',
  },
});
