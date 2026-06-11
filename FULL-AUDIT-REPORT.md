# Full SEO Audit — udeogfiske.dk

**Date:** 2026-06-11
**Pages analyzed:** 79 (static Astro site, Cloudflare Pages)
**Business type:** Content / affiliate publisher — Danish recreational-fishing guide (lystfiskeri). Editorial guides + gear recommendations (affiliate), no e-commerce/login.

---

## Executive Summary

### Overall SEO Health Score: **72 / 100**

A genuinely strong editorial foundation — original Danish content, excellent on-page hygiene, rich structured data — held back by a handful of **deployment-level** problems that are high-impact but cheap to fix.

| Category | Score | Weight |
|---|---|---|
| Technical SEO | 62 | 25% |
| Content Quality | 85 | 25% |
| On-Page SEO | 82 | 20% |
| Schema / Structured Data | 90 | 10% |
| Performance (CWV) | 45 | 10% |
| Images | 50 | 5% |
| AI Search Readiness | 55 | 5% |

### Top 5 critical issues
1. **Soft 404s** — every non-existent URL returns **HTTP 200 with the homepage content** (no real 404 page exists). This is the single biggest issue: it lets Google index unlimited duplicate pages.
2. **Massive unoptimized images** — e.g. `put_take_fiskeri_card.png` is **7.6 MB** (it's on the homepage), `aldin_profile.png` 5.4 MB, hero JPEGs 3.5–5.3 MB. Destroys LCP, especially on mobile.
3. **AI crawlers are blocked** in the live robots.txt (Cloudflare "Managed robots"/AI Crawl Control): `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`, `Bytespider`, `Applebot-Extended`, `meta-externalagent` all `Disallow: /`, plus `Content-Signal: ai-train=no`. This **directly contradicts the GEO/llms.txt work** — AI answer engines can't read the site.
4. **Broken default `og:image`** — points to `/images/hero.jpg`, which does not exist (the 200 you'd see is the soft-404 serving HTML). Social/link previews break on pages that don't set their own image.
5. **`www` does not redirect to apex** — `https://www.udeogfiske.dk/` returns 200 instead of 301→apex (duplicate-host; mitigated only by canonical tags).

### Top 5 quick wins
1. Point the default `ogImage` in `MainLayout.astro` to a real file (1-line).
2. Add `src/pages/404.astro` so Astro emits a real `dist/404.html`.
3. Trim the ~10 meta descriptions over 160 characters.
4. Remove the leftover **AdsenseBanner** placeholder from the homepage (renders an empty "Annonce" box + a script referencing undefined `adsbygoogle`).
5. Shorten the ~20 page titles over 60 characters.

---

## Technical SEO — 62/100

**Good**
- HTTPS enforced; `http://` → `https://` is a **301**.
- Brotli compression on HTML (`content-encoding: br`); `Vary: accept-encoding`.
- `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.
- `robots.txt`, `sitemap.xml` (79 URLs), and `llms.txt` all present and served (200).
- Legacy URLs redirect correctly as **301** via `public/_redirects` (verified `/vadejakke` → `/fiskeudstyr/beklaedning/vadejakke/`).
- Self-referencing canonicals on every page, pointing to the apex.

**Issues**
- 🔴 **Soft 404 (Critical):** unknown URLs return `200` + homepage HTML. No `404.astro` exists, and Cloudflare Pages is serving `index` for unmatched routes. Fix: add `src/pages/404.astro`; confirm Pages `not_found_handling` is the default (serve `404.html` with a 404 status), not SPA mode.
- 🟠 **`www` not canonicalized (High):** add a redirect `www.udeogfiske.dk` → `udeogfiske.dk` (Cloudflare Redirect Rule or bulk redirect).
- 🟡 **Missing security headers (Medium):** no `Strict-Transport-Security`, `X-Frame-Options`/`frame-ancestors`, or a CSP. Add a `public/_headers` file.
- 🟡 **Sitemap lacks `<lastmod>` (Low):** add lastmod, or migrate to `@astrojs/sitemap` to auto-generate (it's currently hand-maintained and will drift).

---

## Content Quality — 85/100

**Good**
- Original, experience-based Danish content — not translated filler. Strong **E-E-A-T**: named author (Aldin Glavas), `Person` schema, `/om-mig/` page, first-person field experience referenced in guides.
- **79/79 meta descriptions are unique.** No duplicate-content patterns.
- No thin pages — smallest rendered page is ~26 KB and that's mostly real content; guides are long-form.
- Good supporting formats: FAQ blocks, "Kort fortalt" answer capsules, season calendars, comparison tables.

**Issues**
- 🟡 Mixed first-person voice: site still uses team-voice "vi/vores" in places (sweep in progress) while the author is a solo operator.
- 🟢 Minor factual drift: homepage intro says "syv komplette art-guider" but there are 9 species guides.

---

## On-Page SEO — 82/100

**Good**
- **Exactly one `<h1>` on every one of the 79 pages.** Clean heading hierarchy.
- Titles and descriptions are unique and descriptive; keyword-aligned to Danish search intent.
- Strong internal linking — 26–30 internal links per page; breadcrumbs sitewide.

**Issues**
- 🟡 ~20 titles exceed ~60 characters (e.g. "Catch and Release – Guide til skånsom genudsætning af fisk | Ude og Fiske" = 77) and will truncate in SERPs. Consider dropping "| Ude og Fiske" on the longest, or tightening.
- 🟡 ~10 meta descriptions exceed 160 characters (longest: a gennemløbsblink page at 218). Trim to ≤155.

---

## Schema / Structured Data — 90/100

**Good** — among the strongest parts of the site. The JSON-LD `@graph` in `MainLayout.astro` includes: `Organization`, `Person` (author), `WebSite` + `SearchAction`, `WebPage`/`Article` with `datePublished`/`dateModified`, `BreadcrumbList`, `FAQPage`, `ItemList`, and `speakable`.

**Opportunities**
- 🟢 Gear pages recommend specific products — add `Product`/`Offer` (and `Review`/`AggregateRating` only if genuine) schema to qualify for rich results.
- 🟢 Trip reports could use `Article` with a real `image` (see og:image fix).

---

## Performance (Core Web Vitals) — 45/100

Not measured with Lighthouse here, but the image weight makes the LCP verdict obvious.

**Issues**
- 🔴 **Unoptimized images (Critical for LCP):**
  - `put_take_fiskeri_card.png` — **7.6 MB** (homepage bento card)
  - `aldin_profile.png` — 5.4 MB
  - `havørred_hero2.jpeg` — 5.3 MB · `havørred_hero1.jpeg` — 3.5 MB
  - `logo_new.png` — 4.3 MB · `tilbehor.png` / `aafiskeri_hero.png` — 2.1 MB · plus many 1.5–2 MB files
- 🟠 **No modern formats** — 42 PNG + 39 JPG/JPEG, **zero WebP/AVIF**. No responsive `srcset`.
- 🟠 Static `<img>` tags aren't run through Astro's image optimizer.

**Good**
- Static site on Cloudflare CDN → fast TTFB. Minimal JS (no framework runtime). Brotli on HTML.

**Targets:** card images ≤150 KB, hero ≤250 KB, logo ≤30 KB. Convert to WebP/AVIF + resize to displayed dimensions. This alone should lift the Performance score 30–40 points.

---

## Images — 50/100

- 🟢 **Alt text:** all 110 `<img>` tags in source carry `alt` — good accessibility/SEO.
- 🔴 File sizes (see Performance).
- 🟠 No `loading="lazy"` strategy review for below-fold; no `srcset`.

---

## AI Search Readiness — 55/100

**Good** — the structure is excellent for AI citation: `llms.txt` (curated, 7.2 KB), `FAQPage` schema, answer capsules, `speakable`, clean semantic HTML, consent-gated analytics.

**Issue**
- 🔴 **The live robots.txt blocks the major AI crawlers** (`GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`, `PerplexityBot` via managed list, etc.) and sets `Content-Signal: ai-train=no`. This is Cloudflare's **AI Crawl Control / Managed robots** feature, injected ahead of your own robots.txt. The brilliant llms.txt + FAQ work is wasted while these bots are disallowed. **Decision needed:** if you want AI visibility (you clearly invested in it), disable "Block AI scrapers and crawlers" / AI Crawl Control in the Cloudflare dashboard for this site. If you'd rather protect content from AI training, the current setup is correct — but then the llms.txt is moot.

---

## What's already excellent (don't touch)
- Structured data graph, canonical strategy, 1-H1-per-page discipline, unique titles/descriptions, internal linking, HTTPS/redirects/compression, llms.txt + sitemap + robots infrastructure (your own layer).
