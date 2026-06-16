# SEO Audit Report — udeogfiske.dk
**Audit date:** 2026-06-16  
**Auditor:** Claude Fable 5 (automated + source-code inspection)  
**Pages crawled:** 20 live pages + full source-code review (81 built pages, 91 sitemap URLs)

---

## Executive Summary

**Overall SEO Health Score: 73 / 100**

| Category | Weight | Raw Score | Weighted |
|---|---|---|---|
| Technical SEO | 25% | 72/100 | 18.0 |
| Content Quality | 25% | 76/100 | 19.0 |
| On-Page SEO | 20% | 68/100 | 13.6 |
| Schema / Structured Data | 10% | 78/100 | 7.8 |
| Performance | 10% | 70/100 | 7.0 |
| Images | 5% | 75/100 | 3.75 |
| AI Search Readiness | 5% | 82/100 | 4.1 |
| **TOTAL** | | | **73.25** |

**Business type detected:** Danish fishing blog & affiliate content site. Solo operator (Aldin Glavas, CVR 43131168). Primary revenue model: affiliate links (fiskegrej.dk, PriceRunner). Informational content targeting recreational anglers in Denmark.

### Top 5 Critical / High Issues
1. `/fiskeudstyr/byg-dit-fiskesaet/` is **404 on live site** but listed in sitemap.xml — page not deployed
2. `WebSite.SearchAction` in schema points to `/search?q=` which doesn't exist
3. 4 page titles still say "2025" (torsk, makrel, regnbueørred, sild) — stale, may hurt CTR
4. `/fiskeudstyr/` does not link to the set-builder page (zero entry points on live site)
5. `om-mig/` title is "Kontakt | Ude og Fiske" — wrong keyword, misses E-E-A-T author-page opportunity

### Top 5 Quick Wins
1. Push pending local commits → deploy set-builder + design polish (fixes 404 + zero internal links)
2. Update 4 "2025" titles to "2026"
3. Fix om-mig title to "Om Aldin Glavas – Grundlægger | Ude og Fiske"
4. Remove or fix `WebSite.SearchAction` (points to non-existent /search/)
5. Add set-builder card to `/fiskeudstyr/` overview and front page featured section

---

## 1. Technical SEO

### 1.1 Crawlability & Indexability

| Check | Status | Notes |
|---|---|---|
| robots.txt | ✅ Pass | Allows all, references sitemap + llms.txt |
| Sitemap present | ✅ Pass | `/sitemap.xml` — 91 URLs |
| Sitemap vs live | ❌ Fail | `/fiskeudstyr/byg-dit-fiskesaet/` is in sitemap but returns 404 |
| Canonical tags | ✅ Pass | All pages set canonical via MainLayout |
| noindex anywhere | ✅ Pass | No noindex detected on any page |
| 404 page | ✅ Pass | Custom 404 with navigation shortcuts |
| `www` → apex redirect | ⚠️ Unverified | Cloudflare rule required; not testable without access |

### 1.2 Security Headers

| Header | Status | Value |
|---|---|---|
| Strict-Transport-Security | ✅ | `max-age=31536000; includeSubDomains` |
| X-Frame-Options | ✅ | `SAMEORIGIN` |
| X-Content-Type-Options | ✅ | `nosniff` |
| Referrer-Policy | ✅ | `strict-origin-when-cross-origin` |
| Permissions-Policy | ✅ | geolocation, microphone, camera off |
| Content-Security-Policy | ❌ Missing | No CSP header detected |

All major security headers present. CSP is the only gap — complex to implement without breaking inline scripts.

### 1.3 Caching

| Asset type | Cache-Control |
|---|---|
| Images (`/images/*`) | `Cache-Control: public, max-age=604800` (7 days) ✅ |
| JS/CSS (`/_astro/*`) | Should be `immutable` per `public/_headers` |
| HTML pages | `max-age=0, must-revalidate` (Cloudflare DYNAMIC) |

HTML pages are not edge-cached. Cloudflare Pages serves them dynamically which is correct for Astro static output (fresh on each deployment).

### 1.4 HTTPS & Protocol
- All resources served over HTTPS ✅
- HSTS enforced ✅
- HTTP/3 (alt-svc: h3) active ✅

---

## 2. Content Quality

### 2.1 E-E-A-T Assessment

**Expertise:** Author (Aldin Glavas) has decades of fishing experience, specialized in sea trout fly fishing. Credentials clearly stated on `/om-mig/`. CVR registered business. ✅

**Experience:** Direct first-person voice throughout ("jeg", "min"), personal fishing stories, own photographs used. ✅

**Authority:** 91 pages of topical depth covering 9 fish species × multiple techniques × multiple locations. Cites DTU Aqua (2023) research on C&R mortality. Monthly breakdowns for sea trout (12 pages). ✅

**Trustworthiness:** Affiliate disclosure on every product page ("Affiliate-link — køber du via linket, får jeg en lille kommission. Det koster dig ikke ekstra."). GDPR cookie consent. Business contact info. ✅

**Weakness:** `om-mig/` page title says "Kontakt" — search engines see this as a Contact page, not an Author/About page. Misses the E-E-A-T author-credibility signal for "who wrote this site."

### 2.2 Content Depth by Section

| Section | Est. words | Assessment |
|---|---|---|
| Havørredfiskeri | 8,000–9,000 | ✅ Excellent flagship content |
| Sæsonguide | 2,500–3,000 | ✅ Strong |
| Gedde, Makrel, Torsk | 2,500–3,200 | ✅ Good |
| Catch and Release | 2,800 | ✅ Good (cites research) |
| Fluefiskeri | 2,200–2,500 | ✅ Good |
| Fiskepladser (Isefjorden etc.) | 2,200 | ✅ Good |
| Endegrej | 2,200–2,400 | ✅ Good |
| Fiskeudstyr (index) | 450–500 | ⚠️ Thin for a hub page |
| Fisketure (index) | ~320 | ❌ Very thin, 2022 trip reports |
| Guide-til-fisk (index) | 450–500 | ⚠️ Thin for hub page |
| Fiskeguide (index) | ~650 | ⚠️ Thin |
| Homepage | ~1,200 | ⚠️ Below average for competitive head term |

### 2.3 Duplicate Content
No duplicate content detected. All pages have unique focus and titles. Monthly sea trout guides (12 pages) differentiate by monthly conditions — risk of thin content but they appear to have unique advice.

---

## 3. On-Page SEO

### 3.1 Title Tags

| Page | Title | Length | Issue |
|---|---|---|---|
| Homepage | "Ude og Fiske – Inspiration til din fisketur" | 44 | ✅ |
| Havørredfiskeri | "Havørredfiskeri – Fiskeri efter havørred på kyst og fjord | Ude og Fiske" | 73 | ⚠️ Long |
| Torskefiskeri | "Torskefiskeri \| Alt hvad du skal vide for at fange flere torsk i **2025** \| Ude og Fiske" | 83 | ❌ Too long + stale year |
| Makrelfiskeri | "Makrelfiskeri \| Guide til at fange flere makrel i **2025** \| Ude og Fiske" | 72 | ❌ Stale year |
| Regnbueørred | "Regnbueørred fiskeri \| Guide til at fange flere regnbueørreder i **2025** \| Ude og Fiske" | 89 | ❌ Too long + stale year |
| Sildefiskeri | "Sildefiskeri \| Guide til at fange flere sild i **2025** \| Ude og Fiske" | 69 | ❌ Stale year |
| Geddefiskeri | "Geddefiskeri \| Tips og teknikker til at fange din næste store gedde i Danmark \| Ude og Fiske" | 88 | ❌ Too long |
| Aborrefiskeri | "Fiskeri efter Aborre — Tips, Teknikker og Bedste Fiskesteder \| Ude og Fiske" | 78 | ⚠️ Long, mixed case |
| Om mig | "Kontakt \| Ude og Fiske" | 22 | ❌ Wrong title for author page |
| Byg dit fiskesæt | (local only, not live) | — | ❌ Not deployed |

**Recommended max:** 60 characters to avoid truncation in SERPs.

### 3.2 Meta Descriptions

All major pages have unique meta descriptions set in source code. Key quality notes:
- Aborrefiskeri description is very long and generic ("Bliv mester i fiskeri...") — needs rewrite
- Fladfisk description generic ("Fang flere fladfisk... se hvad du skal bruge") — thin
- Most others are acceptable

### 3.3 H1 Tags

| Page | H1 | Matches title? |
|---|---|---|
| Homepage | "Fiskeri for begyndere og alle andre" | No (intentional) |
| Fiskestænger | "Køb af fiskestænger" | ❌ Mismatch — title says "Guide til valg" |
| Havørredfiskeri | "Havørredfiskeri – Fiskeri efter havørred på kyst og fjord" | ✅ Close match |
| Sæsonguide | "Sæsonguide - Hvornår fanger du hvilke fisk?" | ✅ |

The fiskestænger H1 "Køb af fiskestænger" is commercial intent ("buy"), while the title emphasizes guide content — inconsistency.

### 3.4 Internal Linking

**Gaps:**
- `/fiskeudstyr/` → no link to `/fiskeudstyr/byg-dit-fiskesaet/` ❌
- Homepage → no direct link to set-builder ❌
- `/fisketure/` index doesn't prominently display trip report cards ⚠️

**Strengths:**
- Waders page links to havørred-specific waders guide ✅
- Most species pages have "Læs også" cross-link sections ✅
- Category hub pages link to all subpages ✅

---

## 4. Schema / Structured Data

### 4.1 Implementation (from MainLayout.astro source)

| Schema type | Present | Notes |
|---|---|---|
| Organization | ✅ | With logo, URL |
| Person (Aldin Glavas) | ✅ | jobTitle, worksFor, image |
| WebSite | ✅ | With SearchAction |
| Article / WebPage | ✅ | Per page via pageType prop |
| BreadcrumbList | ✅ | On pages that pass breadcrumbs prop |
| FAQPage | ✅ | On pages that pass faq prop |
| ItemList | ✅ | On hub pages |
| SpeakableSpecification | ✅ | On FAQ pages |

### 4.2 Schema Errors

| Error | Severity | Details |
|---|---|---|
| SearchAction target URL | ❌ High | Points to `/search?q=` — no search page exists. Invalid potentialAction. |
| Set-builder page schema | ❌ Not live | Page has schema in source (datePublished: 2026-06-11) but 404 on live |
| Article schema `image` | ⚠️ Medium | Relies on `articleData.image` prop — pages without this may emit incomplete Article nodes |

### 4.3 Recommendations
- Remove or stub out `WebSite.SearchAction` until a search page exists
- Verify BreadcrumbList and FAQPage are actually being passed to all article pages (can be checked in browser DevTools → Network tab → JSON-LD)

---

## 5. Performance

### 5.1 Resource Observations (headers-only audit)
- **Images:** Optimized (93MB → 24MB in previous pass). Served as JPEG with 7-day cache. ✅
- **Fonts:** Google Fonts (Inter) loaded via `<link rel="preconnect">` + stylesheet. Render-blocking risk minor (display=swap). ✅
- **Scripts:** GA4 deferred behind cookie consent (`type="text/plain"`). PriceRunner also consent-gated. ✅
- **Build output:** Astro 6.1.8 generates hashed `/_astro/*` bundles. Should have `immutable` cache headers per `public/_headers`.

### 5.2 Core Web Vitals
Not measurable in this audit (requires Lighthouse / PageSpeed Insights with live traffic). Recommend:
- Run PageSpeed Insights on `/guide-til-fisk/havorredfiskeri/` (most complex page)
- Check LCP candidate (hero image) is preloaded
- Verify `loading="lazy"` on below-fold images

---

## 6. Images

| Check | Status | Notes |
|---|---|---|
| File sizes | ✅ | Optimized, 24MB total |
| Caching | ✅ | 7-day Cache-Control |
| Alt text — hero images | ✅ | Descriptive alt text on major pages |
| Alt text — product images | ⚠️ | Gedde page: some product images with minimal alt text |
| Format | ⚠️ | JPEG only — WebP/AVIF would reduce 30-50% further |
| og:image | ✅ | `/images/forside_hero.jpg` (264KB, exists, 200 OK) |
| Twitter image | ⚠️ | No `twitter:image` tag — falls back to og:image, acceptable |

---

## 7. AI Search Readiness

| Signal | Status | Notes |
|---|---|---|
| llms.txt | ✅ | Comprehensive, all routes listed |
| robots.txt AI note | ✅ | References llms.txt |
| GPTBot / ClaudeBot allowed | ✅ | `Allow: /` for all bots |
| Speakable schema | ✅ | On FAQ pages |
| FAQPage schema | ✅ | On most content pages |
| Citations/sources | ✅ | DTU Aqua referenced in C&R page |
| Author credibility | ✅ | Aldin Glavas Person schema |
| Structured data for AI | ✅ | Article + BreadcrumbList on content pages |
| AI Crawl Control (Cloudflare) | ⚠️ | User should verify AI crawlers not blocked in CF dashboard |

The site is well-positioned for AI search citation. The breadth of Danish fishing content with clear author attribution, FAQ schema, and speakable spec gives it a strong GEO (Generative Engine Optimization) foundation.

---

## 8. Pending Items (from local branch, not yet live)

These exist in source code but are NOT on the live site:
1. `/fiskeudstyr/byg-dit-fiskesaet/` — interactive set-builder (65 product sets)
2. Design polish (wave motifs, gold H1, sea-foam tints, value-prop cards)
3. Updated homepage (stats block → value-prop cards, hero adjustments)
4. `/cookiepolitik/` — ✅ Already live (200 OK)
5. `/404` — ✅ Already live

Action required: push local commits to GitHub → Cloudflare auto-deploy.
