# Full SEO Audit — udeogfiske.dk

**Audit date:** 2026-07-16
**Pages crawled:** 88 discovered by BFS from homepage (85 × 200 OK, 3 × 404)
**Method:** Full-site crawl with per-page on-page extraction, robots/sitemap/redirect probes, local-repo source cross-referencing. DataForSEO enrichment (backlinks, ranked keywords, Lighthouse) was unavailable this session (API returned 403), so SERP/backlink/Core Web Vitals lab data are not included. No screenshots taken.

---

## Executive Summary

**SEO Health Score: 85 / 100** — a technically clean, content-strong static Astro site. On-page fundamentals (titles, descriptions, canonicals, H1s, schema) are near-perfect across all 85 pages. The score is held back by one **critical, systemic redirect failure** and a handful of smaller technical items.

**Business type detected:** Niche content/affiliate publisher (Danish recreational fishing guides), monetized via Partner-ads and PriceRunner affiliate links.

### Top issues (severity order)

1. **CRITICAL — the legacy 301 map is broken for trailing-slash URLs.** All 26 `_redirects` rules written without a trailing slash (lines 5–51 of `public/_redirects`) only match the no-slash request form. Old WordPress URLs were indexed *with* trailing slashes, so virtually every legacy inbound link, bookmark, and stale Google index entry hits a 404 instead of the intended 301. Verified live: `/bombardafiskeri` → 301 ✓ but `/bombardafiskeri/` → 404 ✗; same for `/fluefiskeri/`, `/fiskeudstyr/waders-og-stovler/`, `/fisketure/havorredfiskeri-pa-stevns/`, etc. The Session-34 rules written *with* slashes (e.g. `/cookies/`) work correctly — confirming the exact-match behavior.
2. **HIGH — two broken internal links** in [spinnefiskeri-havorred/index.astro](../src/pages/guide-til-fisk/havorredfiskeri/spinnefiskeri-havorred/index.astro#L113-L120): hrefs point to old WordPress URLs *with* trailing slashes (`/fiskeudstyr/kob-af-fiskestaenger/spinnestaenger/`, `/fiskeudstyr/koeb-af-fiskehjul/`) which 404 because of issue #1.
3. **HIGH — `www.udeogfiske.dk` serves 200 instead of 301** to the apex domain. The canonical tag correctly points to non-www (mitigates duplicate indexing), but a host-level 301 is the proper fix and consolidates all signals.
4. **MEDIUM — `/fiskeboger/` is an orphan page**: live (200) and in the sitemap, but zero internal links point to it from anywhere on the site.
5. **MEDIUM — 26 article pages have 2 inline figure images without `width`/`height`** (CLS risk). These are raw `<img>` tags written directly in page files (e.g. [havorredfiskeri-april/index.astro:122](../src/pages/guide-til-fisk/havorredfiskeri/havorredfiskeri-april/index.astro#L122)), unlike the components (Affiliate, AuthorProfile etc.) which all set dimensions correctly.

### Top quick wins

1. Add trailing-slash variants for all 26 no-slash `_redirects` rules (one-file fix, recovers all legacy link equity).
2. Fix the two hrefs in `spinnefiskeri-havorred` to point directly at `/fiskeudstyr/fiskestaenger/spinnestaenger/` and `/fiskeudstyr/fiskehjul/`.
3. Add a Cloudflare redirect rule: `www.udeogfiske.dk/*` → `https://udeogfiske.dk/$1` (301).
4. Link `/fiskeboger/` from a relevant hub (e.g. `/fiskeguide/` or the footer).
5. Trim the 9 meta descriptions over 170 chars (worst: 213 chars on `/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-sommer/`).

---

## Technical SEO — 72/100

| Check | Result |
|---|---|
| robots.txt | ✅ 200, allows all, references sitemap + llms.txt |
| XML sitemap | ✅ 200, 87 URLs, `<lastmod>` + `<priority>`, no stale/missing entries |
| HTTPS + HSTS | ✅ `strict-transport-security: max-age=31536000; includeSubDomains` |
| http → https | ✅ single 301 hop |
| www → apex | ❌ **www serves 200, no redirect** (canonical mitigates) |
| Legacy 301 map | ❌ **26/31 rules dead for trailing-slash requests** (see Critical #1) |
| 404 handling | ✅ real 404 status (no soft-404) |
| Broken internal links | ⚠️ 2 (plus 1 Cloudflare `/cdn-cgi/l/email-protection` artifact — harmless) |
| Orphan pages | ⚠️ 1 (`/fiskeboger/`) |
| Security headers | ✅ nosniff, SAMEORIGIN, referrer-policy, permissions-policy; ⚠️ no CSP (low priority for a static site) |
| Crawl depth | ✅ max depth 4, only 2 pages that deep; 96% within 3 clicks |
| Redirect chains | ✅ none found in internal navigation |
| noindex / x-robots-tag | ✅ none (nothing accidentally blocked) |
| URL structure | ✅ clean, lowercase, hyphenated, logical hierarchy, consistent trailing slash |

The trailing-slash redirect failure is the single most damaging finding: WordPress permalinks canonically end in `/`, so links earned over the site's WordPress lifetime — plus Google's memory of the old URL set — resolve to 404s. The Session-33 gap-analysis work that produced those rules is being silently defeated by Cloudflare Pages' exact-path matching.

## Content Quality — 92/100

- **Word counts are excellent**: median 1,600 words, p25 = 1,315, max 6,840. Only real outlier is `/fiskepladser/` (301 words) — thin for a hub page that anchors a whole category; `/fisketure/` (375 words) is borderline.
- **E-E-A-T signals are strong**: consistent first-person expert voice, `Person` schema on all 85 pages, author profile component, dated trip reports as first-hand experience evidence.
- **Q&A-formatted H2s** across guides — well-suited for AI Overviews / LLM citation.
- **No duplicate titles, no duplicate meta descriptions** across 85 pages — remarkable.
- Danish-only (`html lang="da"` everywhere), no hreflang — correct while multilingual rollout is deferred.

## On-Page SEO — 88/100

- **Titles:** 0 missing, 0 duplicates. ⚠️ 33 pages exceed 65 chars (will truncate in SERPs) — mostly from appending "| Ude og Fiske" to already-long titles. Worst: 81 chars. 1 short title (`/cookiepolitik/`, fine as-is).
- **Meta descriptions:** 0 missing, 0 duplicates, 0 too short. ⚠️ 9 pages over 170 chars.
- **H1s:** exactly one per page on all 85 pages. ✅
- **Canonicals:** present and self-referencing on all 85 pages, zero mismatches. ✅
- **Internal linking:** healthy — 18 to 64 internal links per page, no dead-end pages.
- **Open Graph:** og:title, og:description, og:image on all pages. ✅

## Schema / Structured Data — 95/100

All 85 pages carry valid JSON-LD (zero parse errors): `Organization` + `Person` + `WebSite` sitewide, `BreadcrumbList` on 84, `Article` on 71, `FAQPage` on 73, `CollectionPage`/`ItemList` on hubs, `AboutPage` on `/om-mig/`. This is comprehensive coverage. Note: Google now rarely shows FAQ rich results for non-authority sites, but the markup still helps entity understanding and AI answer engines — keep it. Possible addition: `Product`/`Review` markup on gear-review pages, and `HowTo` where guides are stepwise.

## Performance — ~80/100 (estimated; no lab data)

Lighthouse/CWV could not be run this session. Structural indicators are good:

- Static Astro on Cloudflare — no origin/server bottleneck, HTML median 50 KB.
- 794 of 880 images lazy-loaded (90%).
- ⚠️ 26 pages with 2 dimension-less inline figures each → layout-shift (CLS) risk.
- ⚠️ `/fiskeudstyr/byg-dit-fiskesaet/` is 368 KB of HTML (7× the median) — likely inline product data; worth checking what's embedded.
- ⚠️ `cache-control: public, max-age=0, must-revalidate` + `cf-cache-status: DYNAMIC` on HTML — pages aren't edge-cached; consider a Cloudflare cache rule for HTML with a short TTL if TTFB matters.

## Images — 85/100

- Alt text: 879/880 images have alt attributes; 1 missing on `/guide-til-fisk/havorredfiskeri/`. Alt texts observed are descriptive and keyword-relevant.
- 90% lazy-loaded.
- Missing `width`/`height` on the recurring inline figures (26 pages) as noted above. Non-ASCII filename `/images/havørred_hero2.jpeg` works but ASCII-safe names are more robust across proxies/tools.

## AI Search Readiness — 95/100

- ✅ `llms.txt` present (8.3 KB, well-structured site description in Danish), referenced from robots.txt.
- ✅ robots.txt allows all agents — AI crawlers not blocked.
- ✅ Q&A H2 format + FAQPage schema + first-person experience = highly citable passages.
- ✅ Clean semantic HTML (static, no JS-rendering dependency).

---

## Scoring breakdown

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 25% | 72 | 18.0 |
| Content Quality | 25% | 92 | 23.0 |
| On-Page SEO | 20% | 88 | 17.6 |
| Schema | 10% | 95 | 9.5 |
| Performance | 10% | 80 | 8.0 |
| Images | 5% | 85 | 4.25 |
| AI Search Readiness | 5% | 95 | 4.75 |
| **Total** | | | **85.1 → 85/100** |

*Raw crawl data: session scratchpad `seo_crawl_results.json` / `seo_analysis.txt` (temporary files).*
