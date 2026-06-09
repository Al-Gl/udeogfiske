// One-shot crawler for udeogfiske.dk. BFS from the homepage, follows
// internal <a href> links (not sitemap.xml), polite 400 ms delay between
// fetches, depth cap 5, URL cap 500. Writes the sorted URL set to
// _live-urls.json. /en/* paths are crawled but tagged so we can report
// them in a separate deferred bucket.
//
// Usage:
//   node _crawl.cjs
//
// Output: content/_live-urls.json
//   {
//     crawled_at: ISO timestamp,
//     start: "https://udeogfiske.dk/",
//     da: [ "/", "/fiskeguide/", ... ],
//     en: [ "/en/", "/en/seatrout-fishing/", ... ],
//     skipped: { reason: count, ... }
//   }

const fs = require('fs');
const path = require('path');
const https = require('https');

const ORIGIN = 'https://udeogfiske.dk';
const START = ORIGIN + '/';
const MAX_DEPTH = 5;
const MAX_URLS = 500;
const DELAY_MS = 400;

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'da,en-US;q=0.7,en;q=0.3',
  'Accept-Encoding': 'identity',
};

const SKIP_PREFIXES = [
  '/wp-admin/', '/wp-content/', '/wp-includes/', '/wp-json/',
  '/feed/', '/comments/', '/search/',
  '/tag/', '/author/', '/category/',
  '/link-out/', // affiliate redirector — template-injection bug generates infinite self-referential URLs
];

const MAX_PATH_LEN = 250; // real WP URLs aren't this long; longer = template/injection garbage

const SKIP_EXT = /\.(pdf|jpg|jpeg|png|webp|gif|svg|zip|xml|css|js|ico|mp4|mp3|woff2?|ttf|eot)(\?.*)?$/i;

const skipped = {
  external: 0,
  fragment_only: 0,
  query_string: 0,
  wp_path: 0,
  file_ext: 0,
  mailto_tel: 0,
  too_long: 0,
};

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function get(u, redirects = 0) {
  return new Promise((resolve, reject) => {
    https.get(u, { headers, timeout: 20000 }, (res) => {
      if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location && redirects < 5) {
        const next = new URL(res.headers.location, u).toString();
        res.resume();
        return resolve(get(next, redirects + 1));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} from ${u}`));
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve({ finalUrl: u, body: Buffer.concat(chunks).toString('utf8') }));
    }).on('error', reject).on('timeout', () => reject(new Error(`timeout ${u}`)));
  });
}

// Normalise a discovered href to a canonical path on the udeogfiske.dk origin,
// or null if it should be skipped. Returned form is always pathname with
// trailing slash, no query, no fragment.
function normalise(href, baseUrl) {
  if (!href) return null;
  href = href.trim();
  if (!href) return null;
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
    skipped.mailto_tel++;
    return null;
  }
  if (href.startsWith('#')) {
    skipped.fragment_only++;
    return null;
  }

  let parsed;
  try {
    parsed = new URL(href, baseUrl);
  } catch {
    return null;
  }

  if (parsed.host.toLowerCase() !== 'udeogfiske.dk') {
    skipped.external++;
    return null;
  }

  if (parsed.search) {
    skipped.query_string++;
    return null;
  }

  let p = parsed.pathname;
  if (p.length > MAX_PATH_LEN) {
    skipped.too_long++;
    return null;
  }
  if (SKIP_EXT.test(p)) {
    skipped.file_ext++;
    return null;
  }
  for (const pref of SKIP_PREFIXES) {
    if (p.startsWith(pref)) {
      skipped.wp_path++;
      return null;
    }
  }

  // Canonical trailing slash form
  if (!p.endsWith('/')) p = p + '/';
  return p;
}

function extractLinks(html, baseUrl) {
  const out = new Set();
  // Greedy match keeps perf reasonable on ~100 KB pages
  const re = /<a\s+[^>]*href\s*=\s*["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const norm = normalise(m[1], baseUrl);
    if (norm) out.add(norm);
  }
  return out;
}

(async () => {
  const visited = new Set();
  const queue = [{ path: '/', depth: 0 }];
  visited.add('/');

  let fetched = 0;
  let failed = 0;
  const failures = [];

  console.log(`crawl start :: ${START}  (depth<=${MAX_DEPTH}, max=${MAX_URLS}, delay=${DELAY_MS}ms)`);

  while (queue.length && visited.size <= MAX_URLS) {
    const { path: p, depth } = queue.shift();
    const fullUrl = ORIGIN + p;

    let body;
    try {
      const r = await get(fullUrl);
      body = r.body;
      fetched++;
      console.log(`  [${visited.size}/${MAX_URLS}] d=${depth} ${p}  (${body.length}b)`);
    } catch (err) {
      failed++;
      failures.push({ path: p, error: err.message });
      console.log(`  FAIL d=${depth} ${p} :: ${err.message}`);
      await sleep(DELAY_MS);
      continue;
    }

    if (depth < MAX_DEPTH) {
      const links = extractLinks(body, fullUrl);
      for (const link of links) {
        if (!visited.has(link) && visited.size < MAX_URLS) {
          visited.add(link);
          queue.push({ path: link, depth: depth + 1 });
        }
      }
    }

    await sleep(DELAY_MS);
  }

  const all = Array.from(visited).sort();
  const da = all.filter((p) => !p.startsWith('/en/'));
  const en = all.filter((p) => p.startsWith('/en/'));

  const out = {
    crawled_at: new Date().toISOString(),
    start: START,
    config: { MAX_DEPTH, MAX_URLS, DELAY_MS },
    stats: {
      total_seen: visited.size,
      fetched_ok: fetched,
      fetched_failed: failed,
      da_count: da.length,
      en_count: en.length,
      skipped,
    },
    da,
    en,
    failures,
  };

  const outPath = path.join(__dirname, '_live-urls.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));

  console.log('');
  console.log(`done. ${visited.size} URLs discovered (${fetched} fetched ok, ${failed} failed)`);
  console.log(`      DA=${da.length}  EN=${en.length}`);
  console.log(`      saved=${outPath}`);
  console.log(`      skipped: ${JSON.stringify(skipped)}`);
})();
