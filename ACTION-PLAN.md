# SEO Action Plan — udeogfiske.dk

Prioritized from the full audit. Score today: **72/100**. Fixing the Critical + High items should push it to ~88–90.

---

## 🔴 Critical — fix immediately

### 1. Fix soft 404s (unknown URLs return 200 + homepage)
- **Add `src/pages/404.astro`** (a real "Siden blev ikke fundet" page with links back to main sections).
- In **Cloudflare Pages → Settings → Build/Functions**, ensure **not_found_handling** is *not* set to "single-page-application". With a real `404.html`, Pages should return a **404 status** for unmatched routes.
- Verify: `curl -I https://udeogfiske.dk/does-not-exist/` returns **404**, not 200.
- *Owner: code + Cloudflare dashboard. Effort: low.*

### 2. Optimize images
- Compress + convert the heavy assets to **WebP/AVIF** and resize to displayed size. Worst offenders: `put_take_fiskeri_card.png` (7.6 MB), `aldin_profile.png` (5.4 MB), `havørred_hero1/2.jpeg`, `logo_new.png` (4.3 MB).
- Targets: cards ≤150 KB, heroes ≤250 KB, logo ≤30 KB.
- *Owner: assets + code. Effort: medium. Biggest CWV win.*

### 3. Decide on AI crawler access (GEO)
- The live robots.txt blocks `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`, etc. (Cloudflare AI Crawl Control).
- If you want AI visibility (recommended given the llms.txt investment): **Cloudflare dashboard → the domain → AI Crawl Control / "Block AI scrapers and crawlers" → turn OFF**, or allow the specific bots.
- *Owner: Cloudflare dashboard. Effort: low. Strategic decision.*

---

## 🟠 High — within 1 week

### 4. Fix the default `og:image`
- In `MainLayout.astro`, change the default `ogImage` from the non-existent `/images/hero.jpg` to a real file (e.g. `/images/forside_hero.jpg`) — ideally an optimized 1200×630 image.
- *Effort: 1 line.*

### 5. Redirect `www` → apex
- Add a Cloudflare Redirect Rule: `www.udeogfiske.dk/*` → `https://udeogfiske.dk/$1` (301).
- *Owner: Cloudflare dashboard. Effort: low.*

### 6. Add security headers via `public/_headers`
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```
- *Effort: low.*

---

## 🟡 Medium — within 1 month

### 7. Trim long titles & descriptions
- ~20 titles > 60 chars, ~10 descriptions > 160 chars (longest 218). Tighten for full SERP display.

### 8. Remove the leftover AdsenseBanner from the homepage
- `index.astro` still renders `<AdsenseBanner />` (placeholder `ca-pub-XXXXXXXXXX` + a script referencing undefined `adsbygoogle`) → an empty "Annonce" box. Remove it, or wire real AdSense behind marketing consent.

### 9. Finish the first-person ("jeg") voice sweep
- Replace remaining team-voice "vi/vores" (e.g. cookie banner/policy "Vi bruger cookies") — but only true site-voice instances, not general Danish "vi".

### 10. Add `Product` schema to gear pages
- The gear guides recommend specific products — `Product`/`Offer` markup can earn rich results. Add `Review`/`AggregateRating` only if genuinely sourced.

---

## 🟢 Low — backlog

11. Migrate `sitemap.xml` to `@astrojs/sitemap` (auto-generates, won't drift) and/or add `<lastmod>`.
12. Fix minor factual drift ("syv art-guider" → 9 species guides).
13. Review below-fold `loading="lazy"` and add `srcset` for responsive images.
14. Self-host Google Fonts (currently from Google CDN) to drop a third-party connection.

---

## Suggested order
1–2–3 (critical) → 4–5–6 (high, mostly 1-liners/dashboard) → 7–8–9 (medium) → backlog.
Items I can implement in-repo right now: **1 (404 page), 4 (og:image), 6 (_headers), 7 (titles/desc), 8 (remove Adsense)**. Items needing you in the Cloudflare dashboard: **1 (verify not_found_handling), 3 (AI crawlers), 5 (www redirect)**. Image optimization (2) needs an asset pass.
