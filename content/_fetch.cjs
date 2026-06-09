// Fetch a live udeogfiske.dk page with a browser User-Agent (the WAF blocks
// curl/wget defaults). Saves the HTML to UoF/content/<slug>.html so the
// existing _extract.cjs can walk it.
//
// Usage:
//   node _fetch.cjs <url> [outname]
//   node _fetch.cjs https://udeogfiske.dk/guide-til-fisk/torskefiskeri/
//   node _fetch.cjs https://udeogfiske.dk/guide-til-fisk/torskefiskeri/ torsk
//
// Output: writes "<outname>.html" (or last URL segment if outname omitted)
//         and prints the first 40 H1/H2/H3/p blocks past byte offset 25000
//         so you can sanity-check the article body landed.
const fs = require('fs');
const path = require('path');
const https = require('https');

const url = process.argv[2];
if (!url) {
  console.error('usage: node _fetch.cjs <url> [outname]');
  process.exit(1);
}
const outname = process.argv[3] || (() => {
  const u = new URL(url);
  const seg = u.pathname.replace(/\/+$/, '').split('/').filter(Boolean).pop() || 'index';
  return seg;
})();

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'da,en-US;q=0.7,en;q=0.3',
  'Accept-Encoding': 'identity',
};

function get(u, redirects = 0) {
  return new Promise((resolve, reject) => {
    https.get(u, { headers }, (res) => {
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
      res.on('end', () => resolve({ url: u, body: Buffer.concat(chunks).toString('utf8') }));
    }).on('error', reject);
  });
}

(async () => {
  try {
    const { url: finalUrl, body } = await get(url);
    const outPath = path.join(__dirname, `${outname}.html`);
    fs.writeFileSync(outPath, body);
    console.log(`OK  ${finalUrl}`);
    console.log(`    bytes=${body.length}`);
    console.log(`    saved=${outPath}`);
    console.log(`    next: node _extract.cjs "${outPath}"`);
  } catch (err) {
    console.error(`FAIL ${url} :: ${err.message}`);
    process.exit(2);
  }
})();
