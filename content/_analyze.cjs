// Read _live-urls.json + build local-route set + parse 301 redirects.
// Produce content/_gap-report-2026-05-21.md with three buckets:
//   A. Live-only (real gaps) — on live, not local, no 301 covers them.
//   B. Redirect-covered — on live, no local route, but 301 maps to a local route.
//   C. Local-only — pages we have that live doesn't.
//   D. English (deferred) — /en/* paths, surfaced separately per project memory.
//
// Usage: node _analyze.cjs

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LIVE_PATH = path.join(__dirname, '_live-urls.json');
const ASTRO_CFG = path.join(ROOT, 'astro.config.mjs');
const NETLIFY_REDIRECTS = path.join(ROOT, 'public', '_redirects');
const REPORT_PATH = path.join(__dirname, '_gap-report-2026-05-21.md');

function withSlash(p) {
  if (!p.endsWith('/')) p = p + '/';
  return p;
}

// ---------- 1. Live URL set ----------
if (!fs.existsSync(LIVE_PATH)) {
  console.error(`missing ${LIVE_PATH} -- run _crawl.cjs first`);
  process.exit(2);
}
const live = JSON.parse(fs.readFileSync(LIVE_PATH, 'utf8'));
const liveDa = new Set(live.da.map(withSlash));
const liveEn = new Set(live.en.map(withSlash));

// ---------- 2. Local route set ----------
// Every src/pages/**/index.astro maps to a URL based on directory path.
// src/pages/index.astro -> "/"
function walk(dir, base = '') {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...walk(full, base + '/' + e.name));
    } else if (e.isFile() && e.name === 'index.astro') {
      out.push(base === '' ? '/' : base + '/');
    }
  }
  return out;
}
const local = new Set(walk(path.join(ROOT, 'src', 'pages')).map(withSlash));

// ---------- 3. Redirects ----------
// Parse astro.config.mjs object literal entries: '/from': '/to/'
const cfgText = fs.readFileSync(ASTRO_CFG, 'utf8');
const redirects = new Map(); // from-without-slash -> to
const cfgRe = /['"](\/[^'"]+)['"]\s*:\s*['"](\/[^'"]+)['"]/g;
let m;
while ((m = cfgRe.exec(cfgText)) !== null) {
  redirects.set(withSlash(m[1]), withSlash(m[2]));
}

// Parse public/_redirects (Netlify syntax): "/from   /to   301"
const netlifyText = fs.readFileSync(NETLIFY_REDIRECTS, 'utf8');
for (const line of netlifyText.split(/\r?\n/)) {
  const t = line.trim();
  if (!t || t.startsWith('#')) continue;
  const parts = t.split(/\s+/);
  if (parts.length >= 2 && parts[0].startsWith('/') && parts[1].startsWith('/')) {
    redirects.set(withSlash(parts[0]), withSlash(parts[1]));
  }
}

// ---------- 4. Diff ----------
const liveOnlyGap = []; // bucket A
const redirectCovered = []; // bucket B
for (const url of liveDa) {
  if (local.has(url)) continue; // exact local match -> not a gap
  if (redirects.has(url)) {
    const target = redirects.get(url);
    redirectCovered.push({ live: url, target });
  } else {
    liveOnlyGap.push(url);
  }
}

const localOnly = []; // bucket C
for (const url of local) {
  if (!liveDa.has(url)) localOnly.push(url);
}

liveOnlyGap.sort();
redirectCovered.sort((a, b) => a.live.localeCompare(b.live));
localOnly.sort();
const enList = Array.from(liveEn).sort();

// ---------- 5. Write report ----------
const today = new Date().toISOString().slice(0, 10);
let md = '';
md += `# Live-site crawl gap report — ${today}\n\n`;
md += `Crawl source: ${live.start}  \n`;
md += `Crawled at: ${live.crawled_at}  \n`;
md += `Crawler config: depth<=${live.config.MAX_DEPTH}, max=${live.config.MAX_URLS}, delay=${live.config.DELAY_MS}ms\n\n`;

md += `## Headline numbers\n\n`;
md += `| Bucket | Count |\n|---|---|\n`;
md += `| Live URLs (DA) | ${liveDa.size} |\n`;
md += `| Live URLs (EN, deferred) | ${liveEn.size} |\n`;
md += `| Local routes | ${local.size} |\n`;
md += `| Active 301 redirects | ${redirects.size} |\n`;
md += `| **A. Live-only (real gaps)** | **${liveOnlyGap.length}** |\n`;
md += `| B. Redirect-covered | ${redirectCovered.length} |\n`;
md += `| C. Local-only (our additions) | ${localOnly.length} |\n`;
md += `| Fetch failures during crawl | ${live.stats.fetched_failed} |\n\n`;

md += `## A. Live-only (real content gaps)\n\n`;
md += `Live URLs that have no local route and no 301 redirect. **These are the action items.**\n\n`;
if (liveOnlyGap.length === 0) {
  md += `_(none — every live URL is either built locally or covered by a 301)_\n\n`;
} else {
  for (const u of liveOnlyGap) {
    md += `- \`${u}\`\n`;
  }
  md += '\n';
}

md += `## B. Redirect-covered (informational)\n\n`;
md += `Live URLs already mapped to a different local slug via 301. No action needed.\n\n`;
if (redirectCovered.length === 0) {
  md += `_(none)_\n\n`;
} else {
  for (const r of redirectCovered) {
    md += `- \`${r.live}\` → \`${r.target}\`\n`;
  }
  md += '\n';
}

md += `## C. Local-only (our additions)\n\n`;
md += `Pages we have that the live site doesn't. Usually intentional — net-new monthly pages, Put & Take category, etc.\n\n`;
if (localOnly.length === 0) {
  md += `_(none)_\n\n`;
} else {
  for (const u of localOnly) {
    md += `- \`${u}\`\n`;
  }
  md += '\n';
}

md += `## D. English tree (deferred per project memory)\n\n`;
md += `Surfaced for visibility only. Not part of gap signal.\n\n`;
if (enList.length === 0) {
  md += `_(none)_\n\n`;
} else {
  for (const u of enList) {
    md += `- \`${u}\`\n`;
  }
  md += '\n';
}

if (live.failures && live.failures.length) {
  md += `## Crawl failures\n\n`;
  for (const f of live.failures) {
    md += `- \`${f.path}\` — ${f.error}\n`;
  }
  md += '\n';
}

fs.writeFileSync(REPORT_PATH, md);

console.log('');
console.log(`gap report written :: ${REPORT_PATH}`);
console.log(`  A. Live-only (gaps)   = ${liveOnlyGap.length}`);
console.log(`  B. Redirect-covered    = ${redirectCovered.length}`);
console.log(`  C. Local-only          = ${localOnly.length}`);
console.log(`  D. English (deferred)  = ${enList.length}`);
