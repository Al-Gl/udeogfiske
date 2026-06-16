# SEO Action Plan — udeogfiske.dk
**Generated:** 2026-06-16 | Based on FULL-AUDIT-REPORT.md

---

## CRITICAL — Fix before next deployment

### C1. Deploy pending local commits
**Issue:** `/fiskeudstyr/byg-dit-fiskesaet/` returns 404 on live site but is listed in `sitemap.xml`. Google will crawl and log a 404 URL from the sitemap.  
**Fix:** Push local branch to GitHub → Cloudflare auto-deploys.  
**Impact:** Fixes 404, unlocks 65 product set pages, new affiliate revenue surface.  
**Effort:** 5 min (git push)

### C2. Remove or fix WebSite SearchAction in schema
**Issue:** `MainLayout.astro` line ~86 emits a `SearchAction` pointing to `/search?q=` which does not exist. This invalid structured data can confuse Google's indexer.  
**Fix (simple):** Remove the `potentialAction` block from the WebSite schema node.  
**Fix (proper):** Build a `/search/` page with real search functionality (can be a simple static results page using a JS search index like Pagefind).  
**File:** `src/layouts/MainLayout.astro` line ~83–89  
**Impact:** Removes invalid schema warning. A working site search also improves UX + dwell time.  
**Effort:** 10 min (remove) or 2–4 hours (implement Pagefind)

---

## HIGH — Fix within 1 week

### H1. Update stale "2025" in 4 page titles
**Issue:** Title tags contain "2025" — wrong year, reduces CTR for users searching in 2026.  
**Files to change:**
- `src/pages/guide-til-fisk/torskefiskeri/index.astro` line 115 → change "2025" to "2026"
- `src/pages/guide-til-fisk/makrelfiskeri/index.astro` line 117 → change "2025" to "2026"
- `src/pages/guide-til-fisk/regnbueorredfiskeri/index.astro` line 115 → change "2025" to "2026"
- `src/pages/guide-til-fisk/sildefiskeri/index.astro` line 116 → change "2025" to "2026"

While updating: trim torsk (83 chars) and regnbueørred (89 chars) titles — remove "Alt hvad du skal vide for at" and similar filler.  
**Effort:** 15 min

### H2. Fix om-mig page title
**Issue:** `src/pages/om-mig/index.astro` title is "Kontakt | Ude og Fiske" — wrong keyword target, search engines see it as a Contact page.  
**Fix:** Change title to "Om Aldin Glavas – Grundlægger af Ude og Fiske" and description to author-focused text.  
**E-E-A-T impact:** Helps Google attribute site content to a real credentialed author.  
**Effort:** 5 min

### H3. Add set-builder card to /fiskeudstyr/ overview
**Issue:** `/fiskeudstyr/` has zero entry points to the new set-builder page (confirmed: no link on live page).  
**Fix:** Add a featured card at the top of `/fiskeudstyr/index.astro` with a brief description and link to `/fiskeudstyr/byg-dit-fiskesaet/`.  
**Impact:** Zero internal PageRank flowing to a 65-page affiliate tool — this is the highest-value new page on the site.  
**Effort:** 15 min

### H4. Add set-builder link on homepage
**Issue:** Homepage has no path to the set-builder.  
**Fix:** Add the set-builder to the existing guides section or as a featured CTA card ("Byg dit fiskesæt →").  
**Effort:** 20 min

### H5. Shorten over-length titles
**Pages exceeding ~65 chars:**
- Torsk: 83 chars → trim to "Torskefiskeri | Komplet guide til at fange torsk i 2026 | Ude og Fiske" (72 chars)
- Regnbueørred: 89 chars → trim to "Regnbueørred fiskeri | Guide til Put & Take 2026 | Ude og Fiske" (63 chars)
- Gedde: 88 chars → trim to "Geddefiskeri | Tips og teknikker til at fange gedde i Danmark | Ude og Fiske" (77 chars → still long, trim further)
- Aborre: 78 chars → trim to "Aborrefiskeri | Guide til fiskeri efter aborre | Ude og Fiske" (62 chars)

---

## MEDIUM — Fix within 1 month

### M1. Fix fiskestænger H1 ↔ title mismatch
**Issue:** H1 is "Køb af fiskestænger" (commercial intent) while the title positions it as a guide. Mixed signals confuse crawlers.  
**Fix:** Change H1 to "Fiskestænger – Valg af den rigtige stang" to align with the title's guide framing.  
**File:** `src/pages/fiskeudstyr/fiskestaenger/index.astro`

### M2. Rewrite thin meta descriptions
**Pages with generic/weak descriptions:**
- `fladfisk-fiskeri`: "Fang flere fladfisk med denne guide... se hvad du skal bruge" → rewrite to mention skrubbe, rødspætte, fladfiskeforfang specifically
- `aborrefiskeri`: very long generic description → trim and add specific species/technique keywords

### M3. Thicken hub page content
**Pages flagged as thin:**
- `/fiskeudstyr/` (450–500 words): Add an intro paragraph about choosing gear by species, plus a short table matching species → gear type
- `/guide-til-fisk/` (450–500 words): Add brief species comparison table (saltwater vs freshwater, skill level, season)
- `/fiskeguide/` (650 words): Add brief technique comparison

**Note:** Hub pages don't need to be 3,000 words — but 400 words for pages targeting "fiskeudstyr" or "fiskeguider" is thin. Aim for 800–1,200.

### M4. Implement Pagefind site search (removes C2 workaround)
Astro has an official Pagefind integration. Adds a `/search/` page, makes SearchAction valid, improves UX for long-tail content discovery.  
**Docs:** https://pagefind.app

### M5. Add `twitter:image` meta tag
**Issue:** No explicit `twitter:image` tag in MainLayout — falls back to og:image.  
**Fix:** Add `<meta name="twitter:image" content={ogImage} />` in MainLayout head.  
**Effort:** 2 min

### M6. Add WebP image variants
Current images are JPEG only. WebP would reduce file sizes 30–50% further.  
**Note:** Astro has built-in Image optimization — `<Image>` component auto-converts.  
**Caveat:** Requires migrating hardcoded `<img>` tags to `<Image>` — medium refactor effort.

### M7. Refresh fisketure section
**Issue:** 3 trip reports from 2022, no recent trips.  
**Fix:** Either write 2 new trip reports (easy content for a regular fisher), or reframe the section as a field-notes format and add new content.  
**SEO impact:** Freshness signals help. Old dated content with no updates is a weak signal.

---

## LOW — Backlog

### L1. Consider Content-Security-Policy header
No CSP detected. Not required, but the strongest security posture has it. Complex to implement without breaking inline GA4 / PriceRunner / cookie consent scripts. Use report-only mode first if pursuing this.

### L2. Audit monthly sea trout guides for thin content
12 monthly sub-pages exist. Some months (February, December) may have very similar or thin tactical advice vs peak season months. Check word count and uniqueness — Google may treat very similar monthly pages as near-duplicate.

### L3. Add author bio to article pages
Currently the Person schema is site-wide. Adding a small "Om forfatteren" bio block at the bottom of each article page with a photo and link to `/om-mig/` strengthens E-E-A-T for individual pages — search engines connect author identity to specific content.

### L4. Verify Cloudflare AI Crawl Control is OFF
From Cloudflare dashboard → check that "AI Crawl Control" / managed robots.txt is not blocking GPTBot, ClaudeBot, Google-Extended. This would override robots.txt and cut GEO visibility entirely.

### L5. Add `og:type: article` to content pages
Currently only `pageType === 'article'` gets `og:type: article`. Verify that species guides and fishing technique pages are being passed `pageType="article"` so Open Graph metadata is correct when shared on social.

### L6. Add dateModified to article pages
Several content pages likely haven't had their `dateModified` updated after content changes. A stale `dateModified` (same as `datePublished`) can reduce perceived freshness. Update when significant content is refreshed.

---

## Priority Summary Table

| ID | Issue | Priority | Effort | Impact |
|---|---|---|---|---|
| C1 | Deploy pending commits (set-builder 404) | Critical | 5 min | High |
| C2 | Fix/remove invalid SearchAction schema | Critical | 10 min | Medium |
| H1 | Update 4 stale "2025" titles | High | 15 min | Medium |
| H2 | Fix om-mig title (Kontakt → Om Aldin) | High | 5 min | Medium |
| H3 | Link set-builder from /fiskeudstyr/ | High | 15 min | High |
| H4 | Link set-builder from homepage | High | 20 min | High |
| H5 | Trim over-length titles | High | 20 min | Low-Med |
| M1 | Fix fiskestænger H1 mismatch | Medium | 5 min | Low |
| M2 | Rewrite thin meta descriptions | Medium | 30 min | Low-Med |
| M3 | Thicken hub page copy | Medium | 2-3 hrs | Medium |
| M4 | Pagefind search integration | Medium | 2-4 hrs | Medium |
| M5 | Add twitter:image tag | Medium | 2 min | Low |
| M6 | WebP image conversion | Medium | 3-4 hrs | Medium |
| M7 | Refresh fisketure section | Medium | 2-4 hrs | Low-Med |
| L1 | Content-Security-Policy header | Low | 2-3 hrs | Low |
| L2 | Audit monthly sea trout guides | Low | 1 hr | Low |
| L3 | Author bio blocks on article pages | Low | 2 hrs | Medium |
| L4 | Verify CF AI Crawl Control | Low | 5 min (dashboard) | High if broken |
| L5 | og:type article on content pages | Low | 30 min | Low |
| L6 | dateModified updates | Low | 30 min | Low |
