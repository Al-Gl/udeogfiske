// Extract clean body text from the saved udeogfiske.dk HTML
// Usage: node _extract.cjs "<input.html>"
const fs = require('fs');
const path = require('path');

const file = process.argv[2];
if (!file) {
  console.error('pass path to html file');
  process.exit(1);
}
let html = fs.readFileSync(file, 'utf8');

// Drop script/style/noscript blocks entirely
html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
html = html.replace(/<style[\s\S]*?<\/style>/gi, '');
html = html.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');

// Decode common entities
function decode(s) {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '…')
    .replace(/&#038;/g, '&')
    .replace(/&hellip;/g, '…')
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&oslash;/g, 'ø')
    .replace(/&Oslash;/g, 'Ø')
    .replace(/&aring;/g, 'å')
    .replace(/&Aring;/g, 'Å')
    .replace(/&aelig;/g, 'æ')
    .replace(/&AElig;/g, 'Æ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
}

// Extract headings, paragraphs, list items in order
const tokens = [];
const re = /<(h[1-3]|p|li|ul|\/ul|ol|\/ol)([^>]*)>([\s\S]*?)<\/\1>/gi;

// Simpler: walk the HTML in source order
const blockRe = /<(h[1-3]|p|li)([^>]*)>([\s\S]*?)<\/\1>/gi;
let m;
while ((m = blockRe.exec(html)) !== null) {
  const tag = m[1].toLowerCase();
  const attr = m[2] || '';
  // skip elements inside very obvious nav/footer/menu
  // we'll filter by position later
  const raw = m[3];
  // strip inner tags but preserve basic emphasis markers
  const text = decode(
    raw
      .replace(/<(strong|b)[^>]*>/gi, '**')
      .replace(/<\/(strong|b)>/gi, '**')
      .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, t) => `[${t}](${href})`)
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  );
  if (!text) continue;
  tokens.push({ tag, offset: m.index, text, attr });
}

// Write tokens with offsets so I can see what's in scope
tokens.forEach((t) => {
  console.log(`[${t.offset}] <${t.tag}> ${t.text}`);
});
