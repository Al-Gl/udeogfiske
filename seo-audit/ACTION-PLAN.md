# SEO Action Plan — udeogfiske.dk

Prioritized from the 2026-07-16 full audit (see [FULL-AUDIT-REPORT.md](FULL-AUDIT-REPORT.md)). Score: 85/100.

> **Status 2026-07-16 (same day):** items 1, 2, 4 and 7 are DONE in the local repo (pending deploy); item 3 documented below awaits a manual Cloudflare dashboard rule. Items 5, 6, 8, 9 + backlog remain open.

## 🔴 Critical — fix immediately

### 1. Repair the legacy 301 map (trailing-slash matching)
**File:** `public/_redirects` (lines 5–51)
**Problem:** Cloudflare Pages matches `_redirects` paths exactly. All 26 rules written without a trailing slash never fire for the trailing-slash form — which is how WordPress URLs were indexed and linked. Verified live: `/bombardafiskeri` 301s ✓, `/bombardafiskeri/` 404s ✗.
**Fix:** For every no-slash rule, add a duplicate rule with trailing slash (keep both forms). Example:

```
/bombardafiskeri     /fiskeguide/bombarda-fiskeri/   301
/bombardafiskeri/    /fiskeguide/bombarda-fiskeri/   301
```

**Verify after deploy:** re-run the slash-variant probes on a sample (e.g. `/fluefiskeri/`, `/fiskeudstyr/waders-og-stovler/`, `/fisketure/havorredfiskeri-pa-stevns/`) — all should 301.
**Impact:** recovers link equity from every pre-migration backlink and Google's stale index entries; stops 404 bleed.

## 🟠 High — fix within 1 week

### 2. Fix 2 broken internal links in spinnefiskeri guide
**File:** `src/pages/guide-til-fisk/havorredfiskeri/spinnefiskeri-havorred/index.astro` lines 113 and 120
**Fix:** point hrefs directly at the final URLs (don't rely on redirects):
- `/fiskeudstyr/kob-af-fiskestaenger/spinnestaenger/` → `/fiskeudstyr/fiskestaenger/spinnestaenger/`
- `/fiskeudstyr/koeb-af-fiskehjul/` → `/fiskeudstyr/fiskehjul/`

### 3. 301-redirect www → apex
**Where:** Cloudflare dashboard (Rules → Redirect Rules), not `_redirects` (host-level).
**Fix:** `www.udeogfiske.dk/*` → `https://udeogfiske.dk/${1}` (301, preserve path). Canonical tags currently mitigate, but the redirect consolidates crawl budget and signals.

### 4. De-orphan /fiskeboger/
Live and in the sitemap but has **zero** internal links. Add a GuideLink card from `/fiskeguide/` (and/or a footer link). Orphaned pages get crawled less and rank worse.

## 🟡 Medium — fix within 1 month

### 5. Add width/height to inline figure images (CLS)
26 article pages have 2 raw `<img>` tags each without `width`/`height` (e.g. `havorredfiskeri-april/index.astro:122`). Components already do this correctly — only page-inline figures are affected. Either add explicit dimensions or introduce a small `<Figure>` component and migrate.

### 6. Shorten 33 titles over 65 chars
They truncate in SERPs. Start with the highest-traffic pages (havørredfiskeri hub, fluefiskeri, put & take). Pattern: keep the primary keyword up front, drop "| Ude og Fiske" where the title is already long, or shorten the descriptive tail. Target ≤60 chars.

### 7. Trim 9 meta descriptions over 170 chars
Worst offender: `/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-sommer/` (213). Target 120–165 chars.

### 8. Beef up the /fiskepladser/ hub (301 words)
Thinnest page on the site and it anchors a whole category. Add region intro sections (per the established spot-page anatomy) to make it a real hub. `/fisketure/` (375 words) is second-thinnest.

### 9. Investigate /fiskeudstyr/byg-dit-fiskesaet/ page weight
368 KB HTML vs 50 KB site median — likely inline product/feed data. Check what's embedded and whether it can be trimmed or deferred.

## 🟢 Low — backlog

- **Edge-cache HTML:** `cf-cache-status: DYNAMIC` + `max-age=0` means every page view hits origin/Pages function. A Cloudflare cache rule for HTML (short TTL) would cut TTFB.
- **Content-Security-Policy header** — absent; low risk for a static site but cheap hardening via `public/_headers`.
- **Product/Review + HowTo schema** on gear-review and step-by-step guide pages — rich-result opportunities beyond current Article/FAQ coverage.
- **Rename `/images/havørred_hero2.jpeg`** to an ASCII slug for tool/proxy robustness.
- **/cdn-cgi/l/email-protection 404** — Cloudflare email-obfuscation artifact appearing as a crawlable link; harmless, disappears if email obfuscation is disabled or the address is rendered differently.

## Not covered this session

- Core Web Vitals lab/field data, live SERP positions, and backlink profile — DataForSEO API was unavailable (403). Re-run enrichment when access is restored.
- Screenshots / visual above-fold review.
