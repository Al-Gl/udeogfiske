# ▶ RESUME HERE — Next session checkpoint (paused 2026-05-25 after Session 48)

## Site state at pause

- **78 source pages + 30 redirect stubs** (latest `npm run build` 2026-05-25, ~4.3 s, clean).
- **30 active 301 redirects** (unchanged).
- **New reusable component this round: `src/components/GuideLink.astro`** — styled internal-link CTA card (book icon + title + descriptor + arrow, teal→amber hover). Props: `href`, `title`, `desc`. Use it instead of plain inline "Læs X guiden" links at the end of sections.
- **Three guide pages enriched this session (2026-05-25):**
  - `/fiskeguide/fiskeri-paa-mole/` — removed AdsenseBanner; bait list → 3-col table (Agn / Bedst til / Hvorfor).
  - `/fiskeguide/fiskeri-paa-kysten/` — species `<ul>` → 8 image cards (`.fish-grid`, 6 linked + sej/laks static, new `sej_card.png`/`laks_card.png`); kastevægt 50-100 → 20-80 g; added Westin W3 Powercast Affiliate (503715); 5 end-of-section links → `<GuideLink>`.
  - `/fiskeguide/fluefiskeri/` — full SEO pass (Session 48, see below). Now a 2nd flagship "complete guide" template alongside fiskeri-paa-mole.
- **`prey-table` CSS pattern** now lives on 3 pages (havorredfiskeri, fiskeri-paa-mole, fluefiskeri) + a compact `.fish-grid` on kysten. Candidate to promote to a shared stylesheet later (same note as `.art-figure`).
- **nano-banana fish-free images added:** `sej_card`, `laks_card`, `fluefiskeri_kast`, `fluefiskeri_flueboks`, `fluefiskeri_hjul`. Source PNGs still in `nanobanana-output/` (safe to prune).

## Top of stack — pick one to resume

1. Replicate the fluefiskeri/mole treatment on `/fiskeguide/fiskeri-i-aa/` — still text-only, no tables/components/affiliates.
2. Consider removing the empty `<AdsenseBanner>` from fluefiskeri (still renders grey "Annonce" box; no `ca-pub` ID wired site-wide).
3. Promote `.art-figure` + `.prey-table` CSS to a shared stylesheet (duplicated on 3-4 pages now).
4. Reuse `<GuideLink>` on the mole page + species guides for a consistent internal-link look.

---

# Plan — Session 48 (SEO optimisation of /fiskeguide/fluefiskeri/, 2026-05-25) — DONE ✓ (see review.md)

Goal: turn the text-only beginner fluefiskeri guide into a scannable, component-rich,
internally-linked page optimised for search + AI Overviews. Keep all existing Danish prose
meaning; only restructure + enrich. First-person voice throughout.

## A. Structure & on-page SEO
- [ ] Reformat plain H2s → natural Danish question H2s (per [[feedback_uof_qa_h2_format]]):
  - "Fluestænger" → "Hvilken fluestang skal du vælge?"
  - "Fluehjul" → "Hvor vigtigt er fluehjulet?"
  - "Fluer til fluefiskeri" → "Hvordan vælger du de rigtige fluer?"
  - "Starte med fluefiskeri" → "Hvordan kommer du i gang med fluefiskeri?"
  - (keep the 2 that are already questions)
- [ ] Expand MainLayout `faq` prop 1 → 4 Q&As (linetype for begyndere, klasse for begyndere, er det svært).

## B. Tables (scannability + featured snippets) — reuse `prey-table` CSS
- [ ] **Flueline-tabel** replaces the 3-bullet list + 4 description paragraphs:
  Linetype | Sådan ligger den i vandet | Bedst til  (Floating / Intermediate / Sinking).
  Keep the "jeg fisker intermediate på kysten" nuance as a TipBox.
- [ ] **Fluestang-klasse-tabel**: Klasse | Type & længde | Bedst til  (1–4 / 6–7 begynder / 8–10).

## C. Interactive / rich components (all exist already)
- [ ] `DifficultyMeter` value ~70 near the top — sets learning expectations.
- [ ] `TipBox` — practise the cast on a field first + watch your bagkast.
- [ ] `DidYouKnow` — "du kaster linens vægt, ikke fluen" / fanget fladfisk på flue.
- [ ] 3 anchored `Affiliate` (validated in feed, in stock):
  - Flueline section → Guideline Coastal Classic WF Slow Intermediate (504374, 749 kr)
  - Fluestang section → Pool 12 Powerfly Combo (505505, 1299 kr) — begynder all-round
  - Fluer section → Unique Kyst Fluesortiment 1 (504673, 149 kr)
- [ ] `GuideLink` internal links:
  - Fluestang → /fiskeudstyr/fiskestaenger/fluefiskestang/ ("guide til valg af fluestænger")
  - regnbueørred → /guide-til-fisk/regnbueorredfiskeri/ + /fiskeguide/fluefiskeri/fluefiskeri-i-put-take/
  - havørred → /guide-til-fisk/havorredfiskeri/

## D. Images (nano-banana, FISH-FREE per [[feedback_uof_nano_banana_no_fish]])
- [ ] Angler fly-casting silhouette on the Danish coast (loop of line, no fish)
- [ ] Open fly box with colourful coastal flies
- [ ] Fly reel + WF line detail
  → inline `<figure>` with descriptive alt + first-person figcaption.

## E. Wrap-up
- [ ] Add prey-table + figure CSS to page <style>. Build (expect 78 pages). Review entry.

---

# ▶ RESUME HERE — Next session checkpoint (paused 2026-05-24 after Session 47)

## Site state at pause

- **78 source pages + 30 redirect stubs in dist/** (latest `npm run build` 2026-05-24, 7.32 s).
- **30 active 301 redirects** (unchanged since Session 36).
- **`/fiskeguide/fiskeri-paa-mole/` is now a flagship "complete" guide page** — use as template when filling out other guide pages. Final structure:
  1. Answer-capsule (Hvad kan du fange).
  2. `<h2>Fiskeudstyr til molefiskeri>` — rod spec `7-9 fods` (was `9 fod`, widened S44) + **`<Affiliate productId="503715">`** Westin W3 Powercast 3rd (1.049 kr).
  3. `<h3>Fladfisk fra mole>` — figure + **`<Affiliate productId="77678">`** Fladen Butt Lure Deluxe (39,95 kr) + technique paragraphs.
  4. AdsenseBanner.
  5. `<h2>Torsk og sej fra mole>` — technique + figure.
  6. `<h2>Fiskeri efter sild og hornfisk>` — sild paragraphs + **`<Affiliate productId="46269">`** Søvik Sildeforfang 209 (25 kr) + new hornfisk bridge paragraph (silkesnor mechanic: beak tangles in strands, no hook) + **`<Affiliate productId="35161">`** Silkekrogen (19,75 kr).
  7. `<h2>Hvad skal du have styr på inden du kører til molen?>` (Q&A closer, S47) — 5-bullet pre-trip checklist (Fisketegn 18-65 → fisketegn.dk · Tidevand+vind · Fredningsperioder → Fiskepleje.dk · Pandelampe rød-lys · Kølig fangst) + closing paragraph routing to `/guide-til-fisk/` and `/saesonguide/`.
  8. `<RelatedRow>`.
- **`/fiskeguide/put-take-fiskeri/`** unchanged since Session 42 (2 AffiliateTrios + 2 figures + 1 ProductReview).

## New components / patterns

- No new components this round. Sessions 44-47 were pure usage of the existing `<Affiliate>` component on `fiskeri-paa-mole`.
- **NEW reusable template — "complete buyer's-guide page"**: see [[feedback_uof_buyers_guide_closer]]. Anchor each `<Affiliate>` to the paragraph that describes that product type; cap the page with a Q&A H2 + pre-trip checklist + closing paragraph that routes to species/season guides; do NOT add affiliates in the closer.

## Memory updates this round

- **NEW memory:** [[feedback_uof_buyers_guide_closer]] — anatomy of a finished UoF guide page (anchored affiliates + Q&A closer + checklist + internal routing, no closing affiliate density). Learned across Sessions 44-47.

## Open / nice-to-have for next session

- Replicate the same treatment on `/fiskeguide/fiskeri-i-aa/` and `/fiskeguide/fiskeri-paa-kysten/` — neither has `<AffiliateTrio>`/`<Affiliate>` blocks, inline figures, or a Q&A closer yet. `fiskeri-paa-mole` is now the working template.
- `<ProductReview>` can still be re-used on `/fiskeudstyr/tilbehor/fiskesaet-for-begyndere/` (natural sibling) or as a hero-recommendation above an AffiliateTrio.
- Consider promoting `.art-figure` CSS to a shared global stylesheet — duplicated between put-take-fiskeri and fiskeri-paa-mole. Will be needed on more pages.
- `nanobanana-output/` still holds 5 source PNGs (~8 MB) from Session 43/43b. Safe to delete the superseded v1 raws (mole_fladfisk_raw.png + mole_sild_raw.png) — JPGs in `public/images/` are the live versions.
- `<AdsenseBanner>` still renders empty grey boxes until a real `ca-pub-...` client ID is wired up.
- Powerbait trio's Westin gummi (productId 501310) — still pending verify on Fiskegrej that it's the right size/colour.

---

# Plan — Session 47 (Strong closer for /fiskeri-paa-mole/, 2026-05-24)

Page has had heavy gear additions (4 Affiliates) over Sessions 44-46. User asked for "good content to finish the page" after the last product placement.

## Approach

- One Q&A-style `<h2>` (per [[feedback_uof_qa_h2_format]]) — a practical pre-trip checklist that naturally caps the gear-heavy article. Lets readers walk away with a clear "what to pack/check" answer.
- One closing paragraph (no H2 — keeps heading count low) that wraps the personal angle and routes traffic to `/guide-til-fisk/` + `/saesonguide/`.
- No new Affiliates — gear density is already at 4 per page, more would feel like a shop.
- No fabricated external URLs per [user instruction] — mention fisketegn.dk and Fiskepleje.dk as plain references only.

## Steps

- [x] 1. Insert closing `<h2>Hvad skal du have styr på inden du kører til molen?</h2>` + intro + 5-bullet checklist + closing paragraph, after the last `<Affiliate>` and before `</article>`.
- [x] 2. `npm run build` — passed in 7.32 s, no syntax errors.
- [x] 3. Append Session 47 entry to `review.md`.

---

# Plan — Session 46 (Add Søvik 209 + Silkekrogen Affiliates to Sild/Hornfisk-section, 2026-05-24)

Continuation on the same page. User wants two more `<Affiliate>` blocks in the `<h2>Fiskeri efter sild og hornfisk>` section.

## Steps

- [x] 1. Look up produktids: Søvik Sildeforfang 209 → **46269** (25 kr), Silkekrogen til hornfisk → **35161** (19,75 kr).
- [x] 2. Insert sild Affiliate right after the "Den nemmeste måde at fange sild på…" paragraph — directly anchored to the sildeforfang description.
- [x] 3. Insert one short bridge paragraph about hornfisk + silkesnor (beak tangles in strands, no hook) AFTER the sild closer, then the hornfisk Affiliate.
- [x] 4. `npm run build` — passed in 5.95 s, both productIds (46269, 35161) validated.
- [x] 5. Append Session 46 entry to `review.md`.

---

# Plan — Session 45 (Add Fladen Butt Lure Deluxe Affiliate to Fladfisk-section, 2026-05-24)

Continuation of Session 44 on the same page (`/fiskeguide/fiskeri-paa-mole/`). User wants a second `<Affiliate>` block in the `<h3>Fladfisk fra mole</h3>` sub-section.

## Steps

- [x] 1. Look up `produktid` for `fladen-butt-lure-deluxe-fladfiskeforfang-med-bom.html` → **77678**, 39,95 kr, in stock, brand Fladen.
- [x] 2. Insert `<Affiliate productId="77678" note="..." />` inside the Fladfisk-section, right after the `<figure>` of the fladfiskeforfang — strongest visual context.
- [x] 3. Note in first-person Danish, "buy vs tie your own" framing (matches the 40 kr terminal-tackle price point).
- [x] 4. `npm run build` — passed in 5.09 s, productId 77678 validated.
- [x] 5. Append Session 45 entry to `review.md`.

---

# Plan — Session 44 (Add Westin W3 Powercast 3rd Affiliate to /fiskeri-paa-mole/, 2026-05-24)

User request: In the "Fiskeudstyr til molefiskeri" section on `/fiskeguide/fiskeri-paa-mole/`:
1. Change "En fiskestang i 9 fods klassen" → "En fiskestang i 7-9 fods klassen".
2. Add an `<Affiliate>` block for **Westin W3 Powercast 3rd** at the end of that section (before the `<h3>Fladfisk fra mole</h3>` sub-section).

## Steps

- [x] 1. Add `import Affiliate from '../../../components/Affiliate.astro';` to the frontmatter of `src/pages/fiskeguide/fiskeri-paa-mole/index.astro`.
- [x] 2. Edit the existing paragraph: `9 fods klassen` → `7-9 fods klassen`.
- [x] 3. Insert `<Affiliate productId="503715" note="..." />` after that paragraph, with a first-person Danish note matching site voice (spec-driven angle picked).
- [x] 4. Run `npm run build` — passed in 4.94 s, 78 pages, productId validation OK.
- [x] 5. Add a Session 44 review entry to `review.md`.

## Product details (verified in `data/fiskegrej-feed.xml`)

- `produktid`: **503715** (base variant — vareurl = `https://fiskegrej.dk/westin-w3-powercast-3rd.html`, exactly the URL user gave).
- Name: Westin W3 Powercast 3rd · Brand: Westin · Price: 1.049 kr · In stock.
- The slug `westin-w3-powercast-3rd` also exists as variants 503713/503714 with `?169=` size suffixes — we use 503715 (base) so the link matches the user's input verbatim.

---

# Plan — Session 43b (Swap fish-containing mole figures for fish-free versions, 2026-05-22) — DONE

User feedback: "Billederne er ikke så realistiske, kan du gøre dem mere realistiske, eller kun bruge billeder uden fisk." Picked fish-free.

## Steps
- [x] 1. Generate 2 new fish-free smartphone-style figures via `gemini --yolo /generate ... --styles=photorealistic` — fladfiskeforfang on mole + sildeforfang in hand against harbor
- [x] 2. Convert PNG → JPG q82 via PIL, replace existing `mole_fladfisk.jpg` (273 KB) + `mole_sild.jpg` (95 KB); keep `mole_torsk.jpg` (already fish-free)
- [x] 3. Rewrite figcaptions + alt text to describe rigs/gear instead of catch
- [x] 4. `npm run build` — clean, 78 pages, 4.60 s
- [x] 5. Append review entry to `review.md` + save lesson to memory ([feedback_uof_nano_banana_no_fish])

---

# Plan — Session 43 (3 nano-banana inline figures on fiskeri-paa-mole, 2026-05-22) — DONE (superseded by 43b for fladfisk + sild)

## Steps
- [x] 1. Generate 3 candid smartphone-style figures via `gemini --yolo /generate ... --styles=photorealistic`
- [x] 2. Convert PNG → JPG (q85/q78) via PIL, place in `public/images/`
- [x] 3. Insert 3 `<figure class="art-figure">` blocks in `src/pages/fiskeguide/fiskeri-paa-mole/index.astro` — one per major section, between paragraphs
- [x] 4. Append `.art-figure` CSS to page `<style>` (was missing on this page)
- [x] 5. `npm run build` — clean, 78 pages, 4.36 s
- [x] 6. Append review entry to `review.md`

---

# Plan — Session 42 (Add ProductReview component for ABU Tormentor2 Combo Sæt on put-take-fiskeri, 2026-05-22) — DONE

## Goal
Add a "Full review card" recommendation for **Abu Tormentor2 Combo Sæt** (productId `80873`, 849 kr, fiskegrej-feed entry confirmed) at the end of the `Hvordan fisker jeg i en Put & Take sø?` section on `/fiskeguide/put-take-fiskeri/`, just before the `<h2>Spinnere</h2>` heading.

## Design
A new dedicated component `src/components/ProductReview.astro` — visually distinct from the existing `<Affiliate>` / `<AffiliateTrio>` cards so a single deep recommendation reads as a "review," not just another product card.

Layout:
- Top ribbon: "MIN ANBEFALING" label + ½-star rating (e.g. 4.5/5)
- Product photo (left) + content (right)
- Brand + product name
- One-line headline verdict (italic, serif)
- 2-3 sentence personal review paragraph
- Pros (✓) and Cons (✗) two-column list — 3 pros / 1-2 cons
- Stock/delivery chips (reuse pattern from Affiliate)
- Price + CTA button (reuse Affiliate styling)
- Affiliate disclosure footer

Props: `productId`, `rating`, `headline`, `review`, `pros[]`, `cons[]`, `cta` — pulls product data (name, brand, image, price, oldPrice, url, stock, delivery) via existing `getProduct()` helper, so productId validation is automatic (build-fails on missing entry).

## Steps
- [x] 1. Create `src/components/ProductReview.astro` (modeled on `Affiliate.astro` styling + chip/price/CTA pattern, plus rating ribbon and pros/cons grid)
- [x] 2. Import + place `<ProductReview>` in `src/pages/fiskeguide/put-take-fiskeri/index.astro` after the `<ul>…</ul>` + wrap-up paragraph of the "Hvordan fisker jeg…" section, before `<h2>Spinnere</h2>`
- [x] 3. Write first-person Danish copy: headline, 2-3 sentence review, pros/cons (in voice of "Jeg anbefaler / Mit valg") — per [feedback_uof_affiliate_voice]
- [x] 4. `npm run build` to verify productId `80873` is valid in feed and no Astro errors — 78 pages, 5.93 s, clean
- [x] 5. Append review entry to `review.md`


---

# Plan — Session 41 (Add 2 nano-banana generated figures to put-take-fiskeri article, 2026-05-21) — DONE

## Goal

Generate 2 contextual images via `/nano-banana` and place them inline in the put-take-fiskeri article — one in the Spinnere section, one in the Powerbait og orm section. Match the site's existing `.art-figure` pattern used in the species guides.

## Steps taken

- [x] 1. Verified `gemini` CLI + nanobanana extension (v1.0.10) + `GEMINI_API_KEY` all working.
- [x] 2. Generated 2 photorealistic 1024×1024 PNGs in `nanobanana-output/` (first attempt failed on `--aspect` flag — not supported; succeeded with `--styles=photorealistic` and aspect conveyed in prompt language).
  - Spinners: 3 Mepps Aglia on wet dark slate, raindrops, tackle box behind.
  - Powerbait: bright green/yellow Powerbait molded on a small hook on weathered wood, blurred lake background, line spool beside.
- [x] 3. Converted both PNG → JPG quality 85 with PIL, saved to `public/images/put_take_spinnere.jpg` (135 KB) and `public/images/put_take_powerbait.jpg` (120 KB). Originals were ~1.5 MB each.
- [x] 4. Added `<figure class="art-figure">` blocks between paragraph 1 and paragraph 2 of each section. First-person Danish captions. Width/height attrs set to 800×450 (16:9) for CLS prevention since `.art-figure img` uses `aspect-ratio: 16/9` + `object-fit: cover`.
- [x] 5. Added `.art-figure` CSS block to the page style (matches the pattern in `torskefiskeri/index.astro` and other species guides — 12 px radius, white bg, centered figcaption in slate-500).
- [x] 6. Build clean in 5.52 s. dist verified: both `art-figure` classes + both image references rendered.

## Notes

- `nanobanana-output/` PNGs left in place (~3 MB total). Not in dist, not referenced. Easy to delete later if cleanup desired.
- The model ignored the 16:9 prompt hint and produced 1024×1024 squares. The `aspect-ratio: 16/9` + `object-fit: cover` CSS crops them to landscape on display. Both compositions survive the crop (subjects roughly centered).

---

---

# Plan — Session 40 (Remove AdSense, add 2nd `<AffiliateTrio>` to Powerbait section, 2026-05-21) — DONE

## Goal

(1) Remove the empty AdSense banner from `/fiskeguide/put-take-fiskeri/` (renders as a grey "Annonce" placeholder since the `ca-pub-XXXXXXXXXX` client is unconfigured). (2) Add a second `<AffiliateTrio>` in the Powerbait og orm section with 3 products (Berkley Powerbait Crustacea, Berkley Powerbait Power Naiad 30mm, Westin Nightcrawler Banana).

## Product IDs (verified — base entries with clean URLs)

- `34699` — Berkley Powerbait Crustacea, 39.00 kr, in stock
- `76805` — Berkley Powerbait Power Naiad 30mm, 59.95 kr, in stock
- `501310` — Westin Nightcrawler 7,5cm Banana, 49.95 kr, in stock

## Plan

- [x] 1. Removed `<AdsenseBanner />` (between Spinnere and Powerbait articles). Also removed the now-unused `import AdsenseBanner` since it was the only usage on this page.
- [x] 2. Added 2nd `<AffiliateTrio>` after the 4 Powerbait paragraphs, before the "Valg af Put & Take sø" h2. Same component as Session 39 — fully reusable.
- [x] 3. Badges: Klassikeren (teal, highlight) / Duft + bevægelse (orange) / Til kræsne fisk (slate) — consistent use-case framing across both trios on the page.
- [x] 4. Build clean in 5.75 s. dist verified: 18× `partnerid=29395` URLs (2 trios × 9 outbound links each), zero `adsbygoogle`/`Annonce` markup remaining.
- [x] 5. Session 40 review appended.

---

---

# Plan — Session 39 (Add `<AffiliateTrio>` to `/fiskeguide/put-take-fiskeri/` Spinnere section, 2026-05-21) — DONE

## Goal

Promote 3 Mepps Aglia spinners (classic, Fluo, Platinum) inside the Spinnere section using a new "review component" that's modern, sleek, and CTR-optimized. CTAs must use the affiliate-coded URLs from the feed (`partnerid=29395`).

## Product IDs (verified in feed)

- `35380` — Mepps Aglia (Classic), 19.95 kr, in stock
- `35378` — Mepps Aglia Fluo, 25.95 kr, in stock
- `35376` — Mepps Aglia Platinum, 24.95 kr, in stock

All 3 carry `partner-ads.com … partnerid=29395` URLs from the feed → `<Affiliate>`/`getProduct()` already use these without needing manual codes.

## Plan

- [x] 1. Built `src/components/AffiliateTrio.astro` — reusable 3-product review component. Props: `title`, `intro?`, `cta?`, `products: ProductSpec[]` (with `productId`, `badge`, `badgeTone`, `note`, `highlight?`).
- [x] 2. Uses `getProduct(id)` + `formatPrice` from `src/lib/feed.ts`. Throws at build on missing ID (matches `<Affiliate>` validation lock-in).
- [x] 3. Design: white card container with soft shadow + 20 px radius. Inside: 3 product cards in a 3-col grid, each with absolute-positioned topleft badge (teal/orange/slate tones), gradient-bg square image, brand label, name, one-line first-person note (`min-height` for alignment), price block (large teal numerals + "kr"), full-width teal CTA → orange on hover, tiny dot+meta line, single disclosure footer.
- [x] 4. Added to `src/pages/fiskeguide/put-take-fiskeri/index.astro` — import at top, component placed after the 2 Spinnere paragraphs, inside the same `<article>`. Highlight on the classic Aglia (`highlight: true`).
- [x] 5. Build clean in 5.83 s. dist verified: 9× `partnerid=29395` instances in put-take-fiskeri/index.html (3 products × 3 links each).
- [x] 6. Session 39 review appended.

## Out of scope

- Not touching other sections of put-take-fiskeri.
- Not extending the single-product `<Affiliate>` component — building a new one for the trio shape; they coexist.
- Not adding products beyond Mepps Aglia line.

---

# ▶ Previous checkpoint (paused 2026-05-21 after Session 38)

## Site state at pause

- **78 source pages + 30 redirect stubs = 108 HTML files in dist/** (latest `npm run build` 2026-05-21).
- **30 active 301 redirects** (unchanged).
- Header logo: circular `/images/logo.png`, 80×80 in header bar.
- `/fiskeguide/` "Flere guides" section restyled from boxed mini-cards to editorial hairline list.

---

# Plan — Session 38b (Revise `/fiskeguide/` "Flere guides" → image mini-cards + add bridge text, 2026-05-21) — DONE

User didn't like editorial hairline list — felt too sparse. New direction: image mini-cards (3-col, cohesive with featured cards' visual language but smaller). Also: add a first-person Danish bridge paragraph between featured cards and Flere guides.

## Plan

- [x] 1. Updated `secondary` array — added `image`, `chip`, `alt` to all 6 entries. Chips: Teknik / Familie / Regler / Teknik / Båd / Etik. Also propagated `image` into the `itemList` structured-data mapping.
- [x] 2. Replaced markup: `<div class="card-grid card-grid-sm">` of `.card` elements, same JSX shape as featured cards (image + chip overlay + title overlay + arrow).
- [x] 3. CSS: removed all `.mini*` rules. Added `.card-grid-sm` modifier — 3-col, aspect-ratio 4/3, smaller chip (0.625rem), smaller title (1.0625rem), tighter overlay padding, 28px arrow circle. Responsive: 3→2 cols @ 880px, 2→1 col @ 640px.
- [x] 4. Added `.sec-bridge` block: linear-gradient slate background, 3 px teal left-accent, 8 px radius, generous padding. Holds a single first-person Danish paragraph bridging the two card grids.
- [x] 5. Build clean in 4.48 s, 78 pages.
- [x] 6. Session 38b review appended.

# Plan — Session 38 (Restyle `/fiskeguide/` "Flere guides" to editorial list, 2026-05-21) — SUPERSEDED by 38b

## Goal

The 6 "Flere guides" items at the bottom of `/fiskeguide/` currently render as boxed mini-cards with orange icon circles. User wants something more natural and modern. Direction confirmed: editorial list, boxes off, hairlines on.

## Plan

- [x] 1. Dropped `icon` field from the 6 entries in `secondary` array.
- [x] 2. Removed `<div class="mini-icon">` block. Container changed from `<div class="mini-grid">` to semantic `<ul class="mini-list">` with `<li>` wrappers — better a11y for a list of links.
- [x] 3. Rewrote `.mini` / `.mini-list` CSS: dropped white box, border, border-radius, transform-on-hover. Added top + per-item bottom `1px #f3f4f6` hairline. Title bumped to 1.0625rem (was 0.9375rem). Vertical padding 1.125rem per row.
- [x] 4. Kept 2-col desktop / 1-col mobile. Added `column-gap: 2.5rem` between columns on desktop, collapsed to 0 on mobile.
- [x] 5. Hover idiom: title shifts to teal `#0d4a5e`, chevron slides 4 px right + color shift. Matches `.card` behavior at the top of the page.
- [x] 6. Build clean in 4.57 s.
- [x] 7. Session 38 review appended.

## Out of scope

- The 5 featured image cards at the top stay as they are.
- Not touching `.answer-capsule`, `.pg-intro`, or hero.

---

# Plan — Session 37 (Swap header logo to circular `logo.png`, 2026-05-21) — DONE

## Problem

Header currently uses `/images/logo_new.png` (4.5 MB, white square border, low quality). The existing `/images/logo.png` (824 KB) is the clean circular "Ude og Fiske" mark on a transparent background and should be used instead.

## Plan

- [x] 1. Edited `src/layouts/MainLayout.astro` — swapped all 3 `logo_new.png` references to `logo.png` (JSON-LD logo, apple-touch-icon, header `<img>`).
- [x] 2. Rebuilt clean in 5.62 s. 78 pages. dist grep: 0 occurrences of `logo_new.png`, every page has 2 `logo.png` refs (header + JSON-LD).
- [x] 3. Session 37 review appended.

## Out of scope

- Not touching favicon (already its own file).
- Not deleting `logo_new.png` from the repo — leaving it in place in case it's needed later.
- No CSS changes; `.sh-logo-img` uses `object-fit: contain` so a circular PNG fits the existing 44×44 slot.

---

# Plan — Session 36 (Sæsonguide redesign + first-person content, 2026-05-21) — DONE

## Goal

(1) Remove ★/● icons from the matrix cells — color-only. (2) Make cells stand out more, inspired by the SeasonCalendar widget on species pages. (3) Polish the page generally. (4) Add content in the site's first-person Danish voice.

## Plan

- [x] 1. Removed icon JSX from matrix cells. Each `<td>` now contains an empty `<span class="sg-cell-inner">` so the colour block can have rounded corners independent of cell padding.
- [x] 2. Rebuilt cell styling. `top` = orange-amber gradient + 3 px inset top-stripe (`#c47d0a`). `good` = soft-blue gradient + 3 px inset top-stripe (`#3b82f6`). `low` = `#fafafa` with dashed hairline border at 70% opacity. Cell height 48 px (was ~36 px). Hover: scale 1.02 + 3% brightness. Current-month: 2 px solid orange outline.
- [x] 3. Legend swatches scaled to 22 px and rebuilt with matching gradient + inset-stripe so they rehearse the cell look.
- [x] 4. Hero polish: layered radial-gradient highlights (orange top-left, blue bottom-right) over the teal base + a masked 48 px grid pattern at 3% opacity.
- [x] 5. Added `.sg-intro` section (between hero and legend) — two-column "Sådan bruger du den" intro with 3 first-person paragraphs + sidebar "Året i grove træk" with 4 season tag-rows.
- [x] 6. Added `.sg-seasons` section (between matrix and month cards) — 4 season callout cards (Vinter/Forår/Sommer/Efterår), each with coloured top stripe + tag + H3 + ~3 lines of personal lesson.
- [x] 7. Added `.sg-method` section (between month cards and FAQ) — methodology card with teal left-border + info icon, honest about data sources (Fiskeplejen/DTU Aqua + personal fishing experience), inline links to the 3 verified-calendar species pages.
- [x] 8. Build clean 4.08 s. dist grep: 0 icons, 108 cell-inners, 4 intro markers, 4 season cards, 5 method pieces, 7 aside elements.
- [x] 9. Session 36 review appended.

## Caveat

Visual QA in dev server still pending. The new gradient + inset-stripe cells are the kind of micro-detail that's worth eyeballing before push.

---

# Plan — Session 35 (Season-block polish + new /saesonguide/, 2026-05-21) — DONE

Site state previously: 77 pages, 30 redirects. Made front-page season chips clickable, polished the hover state, added Sild to monthData where it was missing, and built the new /saesonguide/ page (9×12 matrix + month cards + 5-Q FAQ). See Session 35 review for detail.

---

# Plan — Old Session 35 plan (superseded above)

---

# Plan — Session 35 (Season-block polish + new /saesonguide/, 2026-05-21) — DONE

## Goal

(1) Make species chips in the homepage "Hvad bider lige nu?" block clickable links. (2) Polish the visual design. (3) Build the `/saesonguide/` page so the existing "Se den fulde sæsonguide" CTA no longer 404s.

## Plan

- [x] 1. Added `speciesHref` map in index.astro frontmatter (9 species → guide URLs).
- [x] 2. Converted fish-chip `<li>` to `<li><a class="fish-chip">`. The whole chip is clickable.
- [x] 3. Primary species (position 0 in monthData) gets an `is-top` variant — filled accent-orange "Top" pill instead of "I sæson".
- [x] 4. Hover state: lift, background→white, name→season-colour, arrow slides in from left. ~40 lines CSS reworked.
- [x] 5. Fixed September "Ørred" typo → Regnbueørred; added Sild to 4 months (Apr/Maj/Sep/Okt) with tip rewrites so the herring stims show up.
- [x] 6. Built `/saesonguide/index.astro` — hero / legend / 9×12 matrix table / 12 month cards / 5-Q FAQ. Matrix uses 3-state cell colouring (top/good/low) derived from monthData by inverting it.
- [x] 7. Build clean in 4.25 s, 78 source pages (+1). dist/saesonguide grep: 12 top + 24 good + 72 low cells, 12 month cards, 9 species links, FAQPage + 5 Questions emitted. dist/index.html: 3 fish-chip anchors, 1 `is-top`, season-cta target resolves.
- [x] 8. Session 35 review appended.

## Caveat

Visual QA in dev server still pending — sticky left column on iOS Safari and horizontal-scroll behaviour of the matrix on mobile should be spot-checked.

---

# Plan — Session 34 (Front-page redesign, 2026-05-21) — DONE

Site state previously: 77 pages, 30 redirects. Three user-directed front-page changes (stats bar → wave divider, 9-card bento → 6 mixed cards matching live, new PriceRunner widget; featured section removed). See review.md Session 34 entry for full detail.

---

# Plan — Old Session 34 plan (superseded by new resume header above)

Original Session 34 plan content follows for archival reference.

## Recommended visual QA before next session

- `npm run dev` and visit `/` to verify the wave separator curve looks right, the 6-card bento renders all images, and the PriceRunner widget actually populates (the iframe loads at runtime from `api.pricerunner.com`).

---

# Plan — Session 34 (Front-page redesign, 2026-05-21) — DONE

## Goal

Three user-directed front-page changes: remove the stats bar / replace with graphical separator, cut bento from 9 species → 6 mixed cards matching live, add a modern-styled PriceRunner price-comparison widget.

## Plan

- [x] 1. Fetched + surveyed live homepage. Confirmed live's 6-card lineup (3 species + 3 techniques: Havørred/Fladfisk/Hornfisk/Fluefiskeri/Molefiskeri/Put & Take).
- [x] 2. Verified all 6 image assets exist in `public/images/`.
- [x] 3. Replaced `.hero-stats` block with SVG wave separator. Removed ~50 lines of `.hstat*` CSS, added 15 lines of `.hero-wave` CSS.
- [x] 4. Trimmed `categories` array 9 → 6 with 1:1 verbatim descriptions from live HTML. Updated section heading to reflect species/technique mix.
- [x] 5. Removed entire `.sec-featured` section (JSX + array + ~120 lines of CSS) — would have duplicated Fluefiskeri + Mole cards now in the bento.
- [x] 6. Built `src/components/PriceRunner.astro` — reusable component with prop defaults matching the user-provided widget snippet (categoryId=647, partnerId=adrunner_dk_udeogfiske, etc). Modern card design: 3 px gradient top stripe, "Annonce" pill, "I samarbejde med PriceRunner" footer disclosure, `nofollow sponsored` rel on the affiliate link, `is:inline` on the remote script so Astro doesn't try to bundle it.
- [x] 7. Imported + placed PriceRunner after the bento, before AdSense.
- [x] 8. Build clean in 3.92 s. Verified in dist/: 6 bcards, hero-wave, pr-card, pricerunner.com script reference all present; no `hstat-*` residue.
- [x] 9. Session 34 review appended.

## Not done this session

- **Visual QA** — markup + CSS + script-tag verified, but the rendered look should be spot-checked with `npm run dev` before next deploy.

---

# Plan — Session 33 (Group 1 — 20 missing 301 redirects, 2026-05-21) — DONE

## Top of stack — pick one to resume

The remaining 9 live-only URLs split into Group 2 (real content) and Group 3 (dead URLs on live):

1. **Group 2 — 7 content gaps to consider** (in priority order):
   - `/cookie-og-privatlivspolitik/` — legal/privacy page. Required for GDPR if site collects analytics/cookies. **Low effort, possibly required.**
   - `/om-mig/stotte-projekter/` — Støtte projekter sub-page of about. Low effort, 1:1 from live.
   - `/blog/` hub + `/blog/5-grunde-til-at-du-ikke-fanger-noget-i-put-take/` — full blog inventory unknown; only 1 post linked from homepage. Worth re-crawling deeper (`MAX_DEPTH=6`) or fetching `/blog/page/2/`, `/blog/page/3/` etc. before committing to a blog branch.
   - `/fisketure/put-and-take-fisketure/` hub + `/fisketure/havorredfiskeri-i-isefjorden/orsted-orredvand-19-nov-2021/` + `/fisketure/havorredfiskeri-i-isefjorden/orsted-orredvand/` — three Put-and-take/Ørsted variants on live. We already have `/fiskepladser/put-and-take/oersted-oerredvand/` (Session 31, the marts trip). Need to decide: 301 the 19-Nov-2021 trip to our existing Ørsted page, or build a separate trip-report for it?

2. **Group 3 — 2 dead URLs on live itself** — not actionable on our side.

3. **Older followups (carried)** — §C makrel testimonial swap, §F/§H nano-banana images, §B more affiliate widgets, §O Bolund content.

## Deferred (not "missing")

- **English branch** — `/en/` + `/en/seatrout-fishing-denmark/` per `feedback_uof_english_multilang_deferred.md`.

## Session 32 + 33 tooling (`content/`)

- `_crawl.cjs` — BFS link-crawler. Re-run with `node _crawl.cjs` whenever we want a fresh URL inventory.
- `_analyze.cjs` — reads `_live-urls.json` + builds local route set + parses both redirect files. Writes `_gap-report-<date>.md`.

---

# Plan — Session 33 (Group 1 — 20 missing 301 redirects, 2026-05-21) — DONE

## Goal

Ship the 20 slug-divergent 301 redirects surfaced by the Session 32 crawl gap analysis. Pure SEO-hygiene mechanical edit — no content work, no source pages changed.

## Plan

- [x] 1. Added 20 entries to `astro.config.mjs` `redirects: {}` block, organised into 4 sub-groups (top-level legacy / plural fiskeguides / fiskepladser long-form / fiskeudstyr divergent flat slugs).
- [x] 2. Added matching 20 entries to `public/_redirects` (Netlify syntax) per `feedback_uof_301_when_moving_pages.md`.
- [x] 3. Build clean — 77 source pages + 30 redirect stubs = 107 HTML files. Build 4.48 s.
- [x] 4. Re-ran `_analyze.cjs` — Group 1 cleared. Live-only count 29 → 9 (matches the 20 we shipped + 9 remaining Group 2/3).
- [x] 5. Session 33 review appended to review.md, resume header refreshed.

## Where Astro 301s emit

Astro's `redirects: {}` config emits a static HTML stub at each FROM path with `<meta http-equiv="refresh">` + a 301 hint. The actual HTTP 301 status code only fires when the host platform (Netlify, Cloudflare Pages, Render) reads `public/_redirects`. That's why we always write both layers — meta-refresh handles non-Netlify hosts as a fallback.

---

# Plan — Session 32 (Fresh live-site crawl gap analysis, 2026-05-21) — DONE

## Goal

Crawl udeogfiske.dk by following internal links (not sitemap.xml — explicit user direction). Diff the resulting URL set against our 77 local routes plus the 10 active 301 redirects. Surface any content gaps that have appeared since the prior comparison (2026-05-15) or that the sitemap-based audit missed.

## Pre-flight

- 77 local routes confirmed via `find src/pages -name 'index.astro'`.
- 10 redirects already documented in `astro.config.mjs` + `public/_redirects` — these "cover" live URLs that no longer need to map to a different local slug.
- Existing `_fetch.cjs` does single-URL pulls with a browser UA (WAF bypass). No existing crawler — need to build one.
- Curl firewalled per memory `feedback_uof_content_workflow.md`. WebFetch summarises (loses link list). So a Node.js BFS over the live HTML is the only viable approach.

## Approach

1. Build a one-shot CommonJS crawler `content/_crawl.cjs`:
   - Starts at `https://udeogfiske.dk/`.
   - BFS with depth cap 5, URL cap 500 (safety net — site has ~80-120 indexable pages so this is well above ceiling).
   - Follows only same-host `<a href>`. Skips fragments, query strings, mailto, tel, file ext (.pdf, .jpg, .png, .webp, .zip, .xml, .css, .js, .ico).
   - Skips WordPress noise paths: `/wp-admin/`, `/wp-content/`, `/wp-includes/`, `/wp-json/`, `/feed/`, `/tag/`, `/author/`, `/?`, `/search/`, `/?p=`, `/comments/`.
   - Normalises: lowercase host, strip trailing slash (then re-add for output consistency), drop hash + query.
   - 400 ms between fetches (polite).
   - Writes full sorted URL list to `content/_live-urls.json`.
2. Diff in same script (or follow-up): three buckets:
   - **A. Live-only (gap)** — on live, no local route, no 301 covers it. These are the actual content gaps.
   - **B. Live URL → 301 covered** — included for transparency; informational only.
   - **C. Local-only** — pages we have but live doesn't (our additions: the 6 net-new havørred monthly pages, /fiskepladser/put-and-take/, etc.). Informational.
3. Write gap report to `content/_gap-report-2026-05-21.md`.
4. Surface a top-of-stack summary to user — which gaps are worth shipping next.

## Plan

- [x] 1. Write Session 32 plan to todo.md.
- [x] 2. Check in with user on plan.
- [x] 3. Build `content/_crawl.cjs` — BFS link-follower with depth/URL cap + polite delays.
- [x] 4. Run crawler against udeogfiske.dk. First pass hit `/link-out/` template-injection trap (296/500 fails). Patched skip list + max-path-len safety; second pass = 80 DA + 2 EN, 2 fails (live's own broken links).
- [x] 5. Build local route set + parse existing 301s from astro.config.mjs + public/_redirects via `_analyze.cjs`.
- [x] 6. Gap report written to `content/_gap-report-2026-05-21.md`. Counts: 29 live-only, 10 redirect-covered, 36 local-only, 2 EN deferred.
- [x] 7. Summarised gaps to user — 3 actionable groups (see Session 32 findings below).
- [x] 8. Append Session 32 review to review.md.

## Session 32 findings — 29 live-only URLs break into 3 groups

**Group 1: 20 missing 301s (slug-divergence — we already have the content)**
These are the biggest yield — pure mechanical SEO hygiene. Live serves a URL we don't, but the same content exists locally under a different slug.

- `/bombardafiskeri/` → `/fiskeguide/bombarda-fiskeri/`
- `/bornefiskeri/` → `/fiskeguide/fiskeri-for-born/`
- `/catch-and-release/` → `/fiskeguide/catch-and-release/`
- `/fiskeri-fra-baad/` → `/fiskeguide/fiskeri-fra-baad/`
- `/fisketegn/` → `/fiskeguide/fisketegn/`
- `/fluefiskeri/` → `/fiskeguide/fluefiskeri/`
- `/polaroid-briller/` → `/fiskeudstyr/beklaedning/polaroid-briller/`
- `/ul-fiskeri/` → `/fiskeguide/ul-fiskeri/`
- `/vadejakke/` → `/fiskeudstyr/beklaedning/vadejakke/`
- `/fiskeguides/fiskeri-paa-mole/` → `/fiskeguide/fiskeri-paa-mole/`  (plural→singular)
- `/fiskeguides/put-take-fiskeri/` → `/fiskeguide/put-take-fiskeri/`  (plural→singular)
- `/fiskepladser/havoerredfiskeri-i-isefjorden/` → `/fiskepladser/isefjorden/`
- `/fiskeudstyr/fangstnet/` → `/fiskeudstyr/tilbehor/fangstnet/`
- `/fiskeudstyr/fiskesaet-for-begyndere/` → `/fiskeudstyr/tilbehor/fiskesaet-for-begyndere/`
- `/fiskeudstyr/waders-og-stovler/` → `/fiskeudstyr/beklaedning/waders-og-stovler/`
- `/fiskeudstyr/koeb-af-fiskehjul/` → `/fiskeudstyr/fiskehjul/`
- `/fiskeudstyr/kob-af-fiskestaenger/` → `/fiskeudstyr/fiskestaenger/`
- `/fiskeudstyr/kob-af-fiskestaenger/fiskestang-til-havet/` → `/fiskeudstyr/fiskestaenger/fiskestang-til-havet/`
- `/fiskeudstyr/kob-af-fiskestaenger/fluefiskestang/` → `/fiskeudstyr/fiskestaenger/fluefiskestang/`
- `/fiskeudstyr/kob-af-fiskestaenger/spinnestaenger/` → `/fiskeudstyr/fiskestaenger/spinnestaenger/`

Note: this is **20 missing 301s, not 8** as the previous sitemap audit indicated. The 12 extras are mostly top-level legacy URLs (pre-permalink-change) plus the plural `/fiskeguides/*` family.

**Group 2: 7 missing pages (content gaps — live has it, we don't)**
- `/blog/` — blog hub (existence confirmed; only 1 post found via crawl, but full inventory unknown — site may have more not linked from homepage)
- `/blog/5-grunde-til-at-du-ikke-fanger-noget-i-put-take/` — only blog post the crawl surfaced
- `/cookie-og-privatlivspolitik/` — legal/privacy page
- `/om-mig/stotte-projekter/` — Støtte projekter sub-page of /om-mig/
- `/fisketure/put-and-take-fisketure/` — Put-and-take fisketure hub on live (lives under /fisketure/ on live; we built /fiskepladser/put-and-take/ in Session 31 — overlap but different URL family)
- `/fisketure/havorredfiskeri-i-isefjorden/orsted-orredvand-19-nov-2021/` — Ørsted trip from Nov 2021 (different from our marts Ørsted page)
- `/fisketure/havorredfiskeri-i-isefjorden/orsted-orredvand/` — generic Ørsted page on live

**Group 3: 2 dead URLs on live (live's own broken links — informational)**
- `/fisk/hav%C3%B8rred/` — 404 on live itself
- `/fisketure/put-and-take-fisketure/orsted-orredvand-19-nov-2021/` — 404 on live (duplicate of Group 2 entry under a different path)

**Local-only count (36)** matches our intentional additions: 6 net-new havørred monthly pages (apr-sep), Put & Take category + Ørsted, all the gear-tree slug improvements, /fiskepladser/* re-org.

**Recommendation:** Group 1 is the highest-impact next session — 20 mechanical 301 edits, ~30 min, no content work, prevents 20 live URLs from 404'ing on our deployment.

---

## What this WON'T do this session

- Ship any new content pages. Pure analysis pass.
- Ship the 8 deferred 301s from the prior sitemap audit (separate top-of-stack item, will compare against fresh crawl first).
- Crawl `/en/` paths if they exist on live — multilang deferred per memory.

---

# ▶ Previous checkpoint (paused 2026-05-15 after Session 31)

## Site state at pause

- **77 pages built clean** (latest `npm run build` 2026-05-15 20:08, 4.42 s). +2 from Session 30.
- **10 active 301 redirects** (+1 for the Ørsted live→local route).
- New category branch `/fiskepladser/put-and-take/` shipped with 1 documented sø (Ørsted Ørredvand). Designed to grow.
- `/fiskepladser/` parent now has 6 featured cards + 6 listings (Put-and-take added).
- Live-sitemap gap closed: `/fisketure/oersted-oerredvand-marts/` now redirects to the new local route.

## Top of stack — pick one to resume

1. **Add the 8 missing 301 redirects** identified in the live-sitemap comparison — slug-divergent gear URLs (`/fiskeudstyr/kob-af-fiskestaenger/*`, `/fiskeudstyr/fangstnet/`, `/fiskeudstyr/fiskesaet-for-begyndere/`, `/fiskeudstyr/waders-og-stovler/`, `/fiskeudstyr/koeb-af-fiskehjul/`). Pure SEO hygiene, mechanical edit.
2. **§C — live-testimonial swap on makrel.** Targeted edit.
3. **§F / §H — nano-banana image generation** for aborre/gedde cards + sub-category hero images.
4. **§B further continuation** — affiliate widgets on more older content pages with named products.
5. **§O — Bolund content** — still blocked on source.

## Deferred (not "missing")

- **English branch** — see `feedback_uof_english_multilang_deferred.md`.

---

# Plan — Session 31 (Ørsted Ørredvand + new /fiskepladser/put-and-take/ category, 2026-05-15) — DONE

## Goal

Close the single content gap surfaced by the live-sitemap comparison. Build a new Put & Take category under `/fiskepladser/` and place the Ørsted Ørredvand trip-report inside it.

## Pre-flight

- **Source fetched:** `content/oersted-oerredvand-marts.html` (87 KB) + `_oersted-oerredvand-marts_clean.txt`. Body is **substantive** — H1 + ~12 paragraphs + 1 named affiliate widget. Buildable 1:1.
- **Live URL:** `/fisketure/oersted-oerredvand-marts/`. Local target: `/fiskepladser/put-and-take/oersted-oerredvand/` (drops `-marts` since this is the canonical Ørsted page under the new category). 301 needed.
- **Catch:** 2,5 kg regnbueørred on Meps Aglia size 2 (Rainbow Trout micropigments per prose) after spinnefiskeri-skift fra fluestang. Triggers StatHighlight.
- **Images already exist:** `put_take_hero.png`, `put_take_fiskeri_card.png`, `put_and_take_fiskeri.jpg`, `regnbueørred_card.jpg` — no nano-banana needed.
- **Affiliate:** Mepps Aglia Decoree `79730` (Guld/Sort, 41.95 kr) — closest in-feed Mepps Aglia variant. Rainbow Trout micropigments not in feed; Decoree is same family, same spinner-construction, same str. 2 size class. Honest editorial pivot.

## Routes (3 new)

1. `/fiskepladser/put-and-take/` — new hub
2. `/fiskepladser/put-and-take/oersted-oerredvand/` — Ørsted trip-report
3. **No new image generation** — reuse existing assets.

## 301 redirect

- Live `/fisketure/oersted-oerredvand-marts/` → local `/fiskepladser/put-and-take/oersted-oerredvand/`. Added to BOTH `astro.config.mjs` and `public/_redirects` per `feedback_uof_301_when_moving_pages.md`.

## Hub page content (`/fiskepladser/put-and-take/index.astro`)

- H1 + intro about Put & Take destinations.
- 5-Q FAQ about Put & Take søer in Denmark (distilled — what is a Put & Take, hvor mange er der, hvad koster det, hvilke fisk, hvornår er bedst).
- Listing block with 1 entry for now (Ørsted Ørredvand) — designed to grow as more Put & Take sø-guides ship.
- Reuses MainLayout pattern from `/fiskepladser/index.astro` (hero + sec-heading + card-grid + art-list).

## Ørsted page content (`/fiskepladser/put-and-take/oersted-oerredvand/index.astro`)

Body 1:1 verbatim from live extract, with Q&A H2 normalisation:

- AuthorProfile derivative first-person quote.
- StatHighlight: "2,5 kg regnbueørred" (`ruler` or `fish` icon — check what existing pages use).
- Q&A H2s: "Hvorfor valgte du Ørsted Ørredvand i marts?", "Hvilket grej startede du med?", "Hvilken spinner fangede regnbueørreden?" (Meps Aglia named), "Hvad skiftede du over til?", "Hvad lærte du af turen?".
- 1× DidYouKnow on koldt-marts-vand → fiskene går dybt (anchored in the prose's "fiskene gemte sig på bunden... lidt for dovne").
- 1× TipBox on Meps Aglia str. 2 + langsom indspoling i kold vand (echoes the prose advice).
- 1× Affiliate widget for Mepps Aglia Decoree `79730` — pinned after the "Hvilken spinner fangede regnbueørreden?" answer. Editorial note honest about color difference.
- 5-Q FAQ distilled from prose.
- RelatedRow: Put & Take fiskeri guide / Spinnefiskeri i Put & Take / Regnbueørredfiskeri.

## Plan

- [x] 1. Built `/fiskepladser/put-and-take/index.astro` (hub — answer-capsule + card-grid + 5-Q FAQ).
- [x] 2. Built `/fiskepladser/put-and-take/oersted-oerredvand/index.astro` (trip-report 1:1 + Q&A H2 + StatHighlight 2,5 kg + Affiliate Mepps Aglia 79730 + 5-Q FAQ).
- [x] 3. Updated `/fiskepladser/index.astro` — added Put-and-take card (6 featured) + list entry (6 listings).
- [x] 4. Added 301 redirect in BOTH `astro.config.mjs` and `public/_redirects`.
- [x] 5. Build clean — 77 pages in 4.42 s. Affiliate ID 79730 validated against feed.
- [x] 6. dist/ grep confirms: hub has 1 FAQPage + 5 Questions; Ørsted has 1 FAQPage + 5 Questions + 1 Affiliate widget rendered.
- [x] 7. §31 review section appended, resume header refreshed.

## Defaults (matching established voice)

- 1st-person editorial per `feedback_uof_affiliate_voice.md` — "Jeg fisker selv med…", "Min favorit fra Meps…".
- Q&A H2 rewrite per `feedback_uof_qa_h2_format.md`.
- 5-Q FAQ distilled (no live FAQPage schema on the source — checked the extract).

---

# ▶ RESUME HERE — Next session checkpoint (paused 2026-05-15 after Session 30)

## Site state at pause

- **75 pages built clean** (latest `npm run build` 2026-05-15 19:53, 4.18 s). Page count unchanged.
- **9 active 301 redirects** (unchanged).
- **4 new Affiliate widgets** across 3 trip-reports (Bøgeskoven 1 / Salvadsparken 1 / Hammer Bakke 2). All productIds validated against feed at build time.
- §B trip-report leg is closed.

## Top of stack — pick one to resume

1. **§C — live-testimonial swap on makrel.** Targeted edit, low effort.
2. **§F — generate aborre/gedde card images** via nano-banana.
3. **§H — dedicated hero images** for sub-category pages via nano-banana.
4. **§G** — replace net-new monthly pages (spinnefiskeri-i-put-take, forår/sommer "5 bedste") with verbatim if live ever publishes.
5. **§O — Bolund content** — still blocked on source.
6. **§B further continuation** — more affiliate widgets on older content pages that have specific named products in prose (Mariager Fjord could take 2nd widget, fluefiskeri-i-put-take has room for more flue picks, etc.).

## Deferred (not "missing")

- **English branch** — see `feedback_uof_english_multilang_deferred.md`.

---

# Plan — Session 30 (§B continuation — Affiliate widgets on 3 trip-reports, 2026-05-15) — DONE

## Goal

Ship Affiliate widgets on the 3 trip-reports shipped in Session 27. Each report already names specific products in prose — give the reader a direct buy-path while editorial copy stays intact.

## Discovery — 2 of 4 originally-named products are NOT in the feed

Per the Session 27→28 stack the user wanted: Bøgeskoven → **Savage Gear Seeker Eel**, Salvadsparken → **Snurrebassen**, Hammer Bakke → **pattegris + børsteormefluer**. Grepping `data/fiskegrej-feed.xml`:

- ❌ **Seeker Eel** — not in feed (only Seeker ISP variants exist)
- ❌ **Snurrebassen** — not in feed at all (no "snurre" matches)
- ✅ **Pattegris** — multiple SKUs (Wiggler + Unique)
- ✅ **Børsteormeflue** — J:son Green Glitter str. 6 in feed

Per `reference_uof_affiliate_validation.md`, missing productIds throw at build — so the unavailable two need editorial-honest substitutes or the page is skipped. User approved **Option A: ship all three with substitutes**.

## Product picks (all in-stock, IDs verified in feed)

**1. `/fisketure/bogeskoven-15-januar-2022/`** (1 widget):
- `70766` Savage Gear Sandeel Pencil SW Cotton Candy 19gr — 89.95 kr. Pin after "Hvordan gik selve fiskeriet?" H2 (right where the Seeker Eel Pink Pout is named). Editorial note honestly leans on the prose line "nåede at skifte en del blink på de 2 timer jeg fiskede" → Cotton Candy as one of the pink-tone winter blinks in rotation. Same brand family, same gennemløbsblink class, pink-to-pink color tonal match.

**2. `/fisketure/salvadsparken-16-juli-2022/`** (1 widget):
- `76484` Westin W6 ST5 Fluorocarbon — 139 kr. Pin after the TipBox about "fletline med fluorocarbon-forfang" — the prose explicitly credits this leader-line combo with landing the 64 cm fish. Sidesteps the unavailable Snurrebasse blink entirely; monetises the leader/forfang instead. Editorially clean — no claim that the widget product itself caught the fish.

**3. `/fisketure/fisketur-til-hammer-bakke/`** (2 widgets):
- `505927` J:son Børsteorm Green Glitter str. 6 — 25 kr. Pin after "Hvilken flue valgte jeg først?" H2 (børsteormeflue named explicitly + the børsteormesværmning context).
- `67405` Wiggler Pattegrisen Sortiment — 99.95 kr. Pin after "Hvad skiftede jeg over til?" H2 (pattegris named explicitly + rejeimitation explanation). Sortiment gives the reader 5 colors out of the box — good for a first-buy.

**Total: 4 new Affiliate widgets across 3 pages.**

## Plan

- [x] 1. Added Affiliate import + 1 widget to Bøgeskoven (70766 Sandeel Pencil Cotton Candy 19gr) after the Seeker Eel paragraph in "Hvordan gik selve fiskeriet?".
- [x] 2. Added Affiliate import + 1 widget to Salvadsparken (76484 Westin W6 ST5 Fluorocarbon) after the fletline+fluorocarbon TipBox.
- [x] 3. Added Affiliate import + 2 widgets to Hammer Bakke (505927 J:son Børsteorm after first-flue H2, 67405 Wiggler Pattegrisen Sortiment after switch-over H2).
- [x] 4. Build clean — 75 pages in 4.18 s. All 4 productIds validated against feed (no missing-id throws). dist/ grep confirms widgets render: Bøgeskoven 1, Salvadsparken 1, Hammer Bakke 2.
- [x] 5. §30 review section appended, resume header refreshed.

## Defaults (matches prior sessions)

- 1st-person editorial `note` per `feedback_uof_affiliate_voice.md` — "Jeg fisker selv med…", "Min favorit…".
- No `photo={true}` flag — default gradient-tile rendering.
- Default CTA "Se prisen hos Fiskegrej.dk".

---

# ▶ RESUME HERE — Next session checkpoint (paused 2026-05-15 after Session 29)

## Site state at pause

- **75 pages built clean** (latest `npm run build` 2026-05-15 19:40). Page count unchanged — §A was an in-place prop migration with no new routes.
- **9 active 301 redirects** (unchanged).
- **10 newly-emitting FAQPage entities** across `/fiskeguide/*` — pages that previously had Q&A defined in props but failed the `faq.length > 0` guard in `MainLayout` because the prop was a bare object.
- `/fiskeguide/*` is now fully clean of the legacy bare-object `faq=` shape. §A closes.

## Top of stack — pick one to resume

1. **§B continuation — Affiliate widgets on the 3 new trip-reports** — Bøgeskoven (Savage Gear Seeker Eel), Salvadsparken (Snurrebassen), Hammer Bakke (pattegris + børsteormefluer). Each trip-report already names products explicitly in prose; deep-funnel commercial yield. Medium effort.
2. **§C — live-testimonial swap on makrel.** Low effort, targeted edit.
3. **§F/§H — nano-banana image gen** for aborre/gedde cards + sub-category hero images.
4. **§G** — replace net-new monthly pages with verbatim if live publishes (spinnefiskeri-i-put-take, forår/sommer "5 bedste").
5. **§O — Bolund content** — still blocked on source.

## Deferred (not "missing")

- **English branch** — see `feedback_uof_english_multilang_deferred.md`.

---

# Plan — Session 29 (§A — faq prop migration on /fiskeguide/* pages, 2026-05-15) — DONE

## Goal

Convert the legacy `faq={{ question, answer }}` (bare-object) prop on 10 `/fiskeguide/*` pages to the array form `faq={[{ question, answer }]}` so they conform to MainLayout's `{ question; answer }[]` type.

## Why this matters more than a "TS-only" cleanup

`MainLayout.astro:125` + `:148` guard FAQ schema with `faq && faq.length > 0`. On a bare object `faq.length` is `undefined`, so **these 10 pages were emitting zero FAQPage schema** even though the Q&A was defined in the prop. Wrapping in `[…]` activates a 1-Q FAQPage entity for each — net SEO win, not just a type-checker fix.

## Pages migrated (10)

All under `src/pages/fiskeguide/`:

1. `bombarda-fiskeri/index.astro`
2. `catch-and-release/index.astro`
3. `fiskeri-for-born/index.astro`
4. `fiskeri-i-aa/index.astro`
5. `fiskeri-paa-kysten/index.astro`
6. `fiskeri-paa-mole/index.astro`
7. `fisketegn/index.astro`
8. `fluefiskeri/index.astro`
9. `put-take-fiskeri/index.astro`
10. `ul-fiskeri/index.astro`

Already on the array form (skipped): `fiskeri-fra-baad`, `fluefiskeri/fluefiskeri-i-put-take`, `put-take-fiskeri/spinnefiskeri-i-put-take`.

## Plan

- [x] 1. Edited all 10 pages (open `{{` → `{[{`, close `}}` → `}]}`, no prose changes).
- [x] 2. `npm run build` — 75 pages clean in 4.36 s. No TS warnings on the affected props.
- [x] 3. Spot-checked all 10 `dist/fiskeguide/<slug>/index.html` — each now contains exactly `1 "@type":"FAQPage"` (was `0` before).
- [x] 4. §29 review section appended.

---

# ▶ Previous checkpoint (paused 2026-05-14 after Session 28)

## Site state at pause

- **75 pages built clean** (latest `npm run build` 2026-05-14 13:02). Page count unchanged — widgets are inline additions.
- **9 active 301 redirects** (unchanged from Session 27).
- **9 new Affiliate widgets** added across 5 older gear-content pages. Brand pages (3) + trip-report widgets still pending.
- All Affiliate productIds validated automatically at build time per `reference_uof_affiliate_validation.md`.

## Top of stack — pick one to resume

1. **§B continuation — Affiliate widgets on the 3 new trip-reports** — Bøgeskoven → Savage Gear Seeker Eel, Salvadsparken → Snurrebassen, Hammer Bakke → pattegris + børsteormefluer. Each trip-report already names products explicitly in prose. Medium effort, high commercial-yield-per-widget since trip-reports are deep-funnel content.
2. **§A — faq prop migration** on remaining `/fiskeguide/*` pages. TS-errors only, no user-visible change.
3. **§O — Bolund content** — blocked on source.
4. Older followups: §C live-testimonial swap on makrel, §F aborre/gedde card images (nano-banana), §G replace where live updates (spinnefiskeri-i-put-take, forår/sommer "5 bedste"), §H dedicated hero images for sub-category pages.

## Deferred (not "missing")

- **English branch** — see `feedback_uof_english_multilang_deferred.md`.

---

# Plan — Session 28 (§B older gear-page backlog — Affiliate widgets, 2026-05-14) — DONE

## Goal

Add `<Affiliate id="..." />` tiles to 5 older gear-content pages identified in the §B backlog. Each page already mentions specific products by name in its prose — the widgets give the reader a direct buy-path while the editorial copy stays unchanged.

## Pre-flight observations

- `<Affiliate>` component throws at build if `productId` is missing from `data/fiskegrej-feed.xml` — so every ID below is verified in-feed before write (per `reference_uof_affiliate_validation.md`).
- Session 26 brand-pages used the **2-widgets-per-page** sweet spot. Same here for the 4 gear-heavy targets; **1 widget** for Mariager Fjord (destination page, lower gear-shopping intent).
- Per `feedback_uof_affiliate_voice.md`: `note` is 1st-person editorial ("Jeg fisker selv med…", "Min favorit…", "Det er det blink jeg…").
- Discovered while surveying: **feed actually carries fiskebøger** under `Bøger, Dvd og Blade > Øvrige`. Steen Ulnits' *Laks & Havørred* (69705) and *Havørred Refleksioner på kysten 2022* (71829) are both in stock — direct match for the fiskebøger page that explicitly recommends Ulnits.

## Product picks (all verified in-stock, IDs confirmed via grep)

**1. `/fiskeguide/fluefiskeri/fluefiskeri-i-put-take/`** (2 widgets):
- `79173` — Darts Frits Cats Whisker #2 Forfang — 35 kr. Pin after "Hvilke flue skal jeg bruge til at fange regnbueørreder?" H2 (Cat's Whisker named explicitly).
- `505068` — Fishmadman Woolly Bugger - Olive w/Gold Conehead. Pin after the "store haler" TipBox (Woolly Bugger named explicitly).

**2. `/fiskeboger/`** (2 widgets):
- `69705` — Laks & Havørred Bog (Steen Ulnits) — 279 kr. Pin after FAQ-related Ulnits answer / body section recommending Ulnits.
- `71829` — Havørred Refleksioner på kysten Bog 2022 Udgave — 249 kr (was 379, 34 % rabat). Pin after a havørred-bog body section.

**3. `/fiskepladser/mariager-fjord/`** (1 widget):
- `70766` — Savage Gear Sandeel Pencil SW (Cotton Candy, 19gr) — 89.95 kr. Pin after the "Er Mariager Fjord god om vinteren?" / "tunge blink i stærke farver" answer — pink is the perfect winter-color match.

**4. `/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-forar/`** (2 widgets):
- `70766` — Savage Gear Sandeel Pencil SW (Cotton Candy 19gr) — same ID as Mariager (different page = OK). Pin after "Hvilket gennemløbsblink skal jeg starte med?" FAQ (Sandeel named explicitly, pink-color = forår-match).
- `502997` — Savage Gear Seeker ISP (Silver/Black Mullet 28gr) — 59.95 kr. Pin after the same FAQ as the "kontrasterende farve" backup. Named explicitly in FAQ.

**5. `/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-sommer/`** (2 widgets):
- `504154` — Westin D360° V2 (UV Striped Silver, 12gr) — 69.95 kr. Pin after "Skal jeg skifte gennemløbsblink fra forår til sommer?" FAQ (Westin D360 named explicitly).
- `70766` — Savage Gear Sandeel Pencil SW (Cotton Candy 19gr) — also pinned. Same FAQ explicitly mentions Sandeel as helårs-grej.

**Total: 9 new Affiliate widgets across 5 pages.** ID 70766 appears on 3 pages — intentional, since it's the most-named blink in the source copy.

## Plan

- [x] 1. Added Affiliate import + 2× `<Affiliate>` to fluefiskeri-i-put-take (79173 Cat's Whisker + 505068 Woolly Bugger).
- [x] 2. Added Affiliate import + 2× `<Affiliate>` to fiskeboger (69705 Ulnits + 71829 Refleksioner).
- [x] 3. Added Affiliate import + 1× `<Affiliate>` to mariager-fjord (70766 Sandeel Pencil Cotton Candy).
- [x] 4. Added Affiliate import + 2× `<Affiliate>` to bedste-gennemlobsblink-havorred-forar (70766 Sandeel + 502997 Seeker ISP).
- [x] 5. Added Affiliate import + 2× `<Affiliate>` to bedste-gennemlobsblink-havorred-sommer (70766 Sandeel + 504154 Westin D360 V2).
- [x] 6. Build clean — 75 pages, 9 widgets rendered, no missing-feed-id errors.
- [x] 7. §28 review section appended.

## Defaults if you say "go ahead"

- 1st-person editorial `note` on every widget per memory.
- No `photo={true}` flag — default gradient-tile rendering matches Session 26 brand pages.
- Default CTA "Se prisen hos Fiskegrej.dk".

---

# ▶ RESUME HERE — Next session checkpoint (paused 2026-05-13 after Session 27)

## Site state at pause

- **75 pages built clean** (latest `npm run build` 2026-05-13 21:24).
- **9 active 301 redirects** (+2 from Session 27 for trip-reports flattened from live nesting).
- §N RESOLVED — 3 trip-report sub-pages shipped, all parent H3/H4 teasers re-linked.
- `/fisketure/` no longer thin — now hosts 3 substantive dated trip-reports.

## Top of stack — pick one to resume

1. **§B continuation** — affiliate widgets on the new trip-reports (Bøgeskoven mentions Savage Gear Seeker Eel; Salvadsparken mentions Snurrebassen; Hammer Bakke mentions pattegris + børsteormefluer). Also still backlog of older gear pages.
2. **§A — faq prop migration** on remaining `/fiskeguide/*` pages. TS-errors only, no user-visible change.
3. **§O — Bolund content** — blocked on source.
4. Other older followups (§C, §F, §G, §H).

## Deferred (not "missing")

- **English branch** — see `feedback_uof_english_multilang_deferred.md`.

---

# Plan — Session 27 (§N — Trip-report sub-pages, 2026-05-13) — DONE

## Goal

Build 3 trip-report sub-pages and re-link the H3/H4 teasers on the parent fiskepladser pages. Repopulates the now-thin `/fisketure/` page naturally and closes §N.

## Pre-flight observations

- 3 trip-reports to build:
  - Bøgeskoven 15 Jan 2022 (under Stevns) — live: `/fisketure/havorredfiskeri-pa-stevns/bogeskoven-15-januar-2022/`
  - Salvadsparken 16 Juli 2022 (under Roskilde Fjord) — live: `/fisketure/roskilde-fjord/salvadsparken-16-juli-2022/`
  - Hammer Bakker marts (under Isefjorden) — live: `/fisketure/fisketur-til-hammer-bakke/` (top-level)
- **Local target slugs** (flat under /fisketure/):
  - `/fisketure/bogeskoven-15-januar-2022/`
  - `/fisketure/salvadsparken-16-juli-2022/`
  - `/fisketure/fisketur-til-hammer-bakke/` (matches live slug)
- **Existing teasers on parents:**
  - Stevns page (line 133-134): H3 "Bøgeskoven — 15. Januar 2022" + 1 teaser paragraph (plain, no anchor). **Re-link.**
  - Roskilde Fjord page (line 139-140): H4 "Salvadsparken — Juli 2022" + 1 teaser paragraph (plain). **Re-link.** Title needs date correction: "Juli 2022" → "16. Juli 2022" to match live slug.
  - Isefjorden page: NO Hammer Bakker trip-teaser yet — just the plads description at line 132-137. Need to **add a new teaser block** after the Hammer Bakker plads section.
- **301 redirects needed (2):** Bøgeskoven and Salvadsparken (live URLs nested, our local routes flat). Hammer Bakker matches live exactly — no redirect.

## Plan

- [x] 1. Fetched all 3 URLs via `_fetch.cjs`.
- [x] 2. Extracted + surveyed. All 3 = substantive, 1:1 buildable. Salvadsparken had the extractor-`<li>` climax bug — recovered the 64 cm catch text by hand from the raw extract.
- [x] 3. Built all 3 trip-reports with Q&A H2 rewrite, AuthorProfile, 1× DidYouKnow + 1× TipBox each, distilled 5-Q FAQ. Salvadsparken got a StatHighlight ("64 cm — min største havørred til dato").
- [x] 4. Added 2 301 redirects to `astro.config.mjs` and `public/_redirects`.
- [x] 5. Re-linked Stevns H3 (Bøgeskoven) + Roskilde Fjord H4 (Salvadsparken — title also corrected from "Juli 2022" to "16. juli 2022").
- [x] 6. Added new Hammer Bakker H4 trip-teaser on Isefjorden page after the plads description.
- [x] 7. Build clean — 75 pages (72 prior + 3 new content; redirects fire via `_redirects` without separate page stubs).
- [x] 8. §27 review appended.

## Defaults if you say "go ahead after fetch"

- 1:1 verbatim from live unless any turns out to be a stub (per havørred-monthly precedent).
- Q&A H2 rewrite per memory.
- AuthorProfile derivative quote on each.
- 5-Q FAQ distilled IF the trip-report has enough content (could be 3-4 if thin — judgment call per slug).
- No DifficultyMeter on trip-reports (skip — not relevant).
- Affiliate widgets queued to §B continuation, not this session.

---

# ▶ RESUME HERE — Next session checkpoint (paused 2026-05-13 after Session 26)

## Site state at pause

- **72 pages built clean**, **6 new Affiliate widgets** on the 3 brand pages (2 each).
- **7 active 301 redirects** (unchanged).
- All 6 affiliate product IDs validated at build time against `data/fiskegrej-feed.xml`.

## Top of stack — pick one to resume

1. **§N — Trip-report sub-pages (3)** — *medium impact, medium effort* — Bøgeskoven / Salvadsparken / Hammer Bakker, will re-link H3 teasers on the fiskepladser parents.
2. **§B continuation** — more Affiliate widgets on older gear pages (fluefiskeri-i-put-take, Mariager Fjord, both seasonal "5 bedste"). Brand pages now seeded (2 each); expand to species + lokation pages.
3. **§A — faq prop migration on remaining `/fiskeguide/*` pages** — TS-errors only, no user-visible impact.
4. **§O — Bolund content** — blocked on source.

## Deferred (not "missing")

- **English branch** — see `feedback_uof_english_multilang_deferred.md`.

## Older followups (carried)

- §C Live-testimonial swap on makrel.
- §F Generate aborre/gedde card images (nano-banana).
- §G Replace where live updates: spinnefiskeri-i-put-take, forår/sommer "5 bedste".
- §H Generate dedicated hero images for sub-category pages.

---

# Plan — Session 26 (§B — Affiliate widgets on brand pages, 2026-05-13) — DONE

## Goal

Add `<Affiliate id="..." />` tiles to the 3 brand pages (Westin / Savage Gear / Geoff Anderson) shipped in Session 25. Highest near-term affiliate yield since brand pages have the strongest gear-shopping intent of any pages on the site.

## Pre-flight observations

- `<Affiliate>` component already exists at `src/components/Affiliate.astro` — takes `productId` prop, pulls everything else from `data/fiskegrej-feed.xml` via `getProduct()`. Optional `note` for editorial caption.
- Feed inventory confirmed: **Westin 1643 products, Savage Gear 944, Geoff Anderson 379**. All have iconic in-stock SKUs.
- 2 widgets per brand page = sweet spot. The brand pages run ~6 H2 sections each — more than 2 widgets would feel spammy. Each widget gets a `note` that ties the product to the surrounding section context.

## Product picks (all in-stock, confirmed via grep)

**Westin:**
- `504034` — Westin Jätte Crankbait 17cm (3D Amber Perch) — 129 kr. Pin after "Hvordan blev Westin grundlagt?" H2 (Jätte is the founder product from 1952).
- `505907` — Westin W2 Powerstick 8'3 10-50gr — 1049 kr (kyststang). Pin after "Hvor holdbart er Westins grej?" H2 (premium kvalitet section).

**Savage Gear:**
- `81265` — Savage Gear 4D Line Thru Trout 30cm (Black Gold) — 249 kr (28% rabat from 349). Pin after "Hvilke produkter er Savage Gear mest kendt for?" H2 (named explicitly in body).
- `68083` — Savage Gear Sandeel Pencil SW Matte White 19gr — 89.95 kr. Pin after "Hvilken teknologi bruger Savage Gear i deres stænger?" H2 (lighter / kystfiskeri-relevant option).

**Geoff Anderson:**
- `504957` — Geoff Anderson Dozer Basis Black — 2599 kr. Pin after "Hvordan startede Geoff Anderson?" H2 (Dozer is the founder product from 1998).
- `504963` — Geoff Anderson Urus Basis Black — 1799 kr (wading-bukser). Pin after "Hvad gør Geoff Andersons design unikt?" H2 (named explicitly alongside Dozer).

## Plan

- [x] 1. Surveyed Affiliate component + feed format.
- [x] 2. Identified 6 in-stock SKUs across 3 brands.
- [x] 3. Checked in with user on product picks + placement.
- [x] 4. Added 2× `<Affiliate>` to Westin page (Jätte 504034 + W2 Powerstick 505907).
- [x] 5. Added 2× `<Affiliate>` to Savage Gear page (4D Line Thru Trout 81265 + Sandeel Pencil 68083).
- [x] 6. Added 2× `<Affiliate>` to Geoff Anderson page (Dozer Basis 504957 + Urus Basis 504963).
- [x] 7. Build clean — 72 pages, all 6 widgets rendered.
- [x] 8. §26 review appended.

## Defaults if you say "go ahead"

- 1st-person editorial `note` on each widget per memory `feedback_uof_affiliate_voice.md` ("Jeg fisker selv med…", "Min favorit fra Westin er…").
- No `photo={true}` flag (default rendering = product-on-gradient look, matches existing Affiliate usage).
- Default CTA "Se prisen hos Fiskegrej.dk".

---

# ▶ RESUME HERE — Next session checkpoint (paused 2026-05-13 after Session 25)

## Site state at pause

- **72 pages built clean** (latest `npm run build` 2026-05-13 13:59).
- **7 active 301 redirects** (unchanged from Session 24).
- Producenter sub-tree shipped (hub + 3 brand pages: Westin, Savage Gear, Geoff Anderson).
- `/fiskeudstyr/` parent now has 6 cards (3×2 grid).
- Build command: `npm run build`. Dev: `npm run dev`.

## Top of stack — pick one to resume

1. **§N — Trip-report sub-pages (3 pages)** — *medium impact, medium effort*
   Bøgeskoven 15 Jan 2022 / Salvadsparken 16 Juli 2022 / Hammer Bakker marts. When shipped, re-link the H3 teasers on the 3 fiskepladser parent pages.

2. **§B Affiliate widget pass on brand pages** — *high commercial impact, mid effort*
   Add `<Affiliate id="..." />` tiles to Westin / Savage Gear / Geoff Anderson pages using IDs from `data/fiskegrej-feed.xml`. Highest near-term affiliate yield.

3. **§O — Bolund content for `/fiskepladser/roskilde-fjord/`** — *low effort, blocked on source*

4. **§A — faq prop migration on remaining `/fiskeguide/*` pages** — *TS-errors only, no user-visible impact*

*(§P closed in Session 25b — waders-til-havorred now reachable from parent via inline link + RelatedRow.)*

## Deferred (not "missing")

- **English branch** — see `feedback_uof_english_multilang_deferred.md`.

## Older followups (lower priority, persistent)

- §B Affiliate cards — large backlog: fluefiskeri-i-put-take, fiskebøger, waders-til-havorred, Mariager Fjord, both seasonal "5 bedste" pages, plus older fiskestang/fiskehjul/etc., AND brand pages from Session 25.
- §C Live-testimonial swap on makrel.
- §F Generate aborre/gedde card images (nano-banana).
- §G Replace where live updates: spinnefiskeri-i-put-take, forår/sommer "5 bedste".
- §H Generate dedicated hero images for sub-category pages.

## Key memories in play (auto-loaded each session)

- 1:1 content workflow + extractor pattern (`feedback_uof_content_workflow.md`)
- Q&A H2 rewrite rule (`feedback_uof_qa_h2_format.md`)
- First-person voice across all editorial copy (`feedback_uof_affiliate_voice.md`)
- 301 redirects on every route change, both layers (`feedback_uof_301_when_moving_pages.md`)
- English/multilang deferred (`project_uof_english_multilang_deferred.md`)
- Havørred monthly net-new precedent (`reference_uof_havorred_monthly_pages.md`)

---

# Plan — Session 25 (Producenter branch: Westin / Savage Gear / Geoff Anderson, 2026-05-13) — DONE

## Goal

Build the 3-page Producenter sub-tree under `/fiskeudstyr/producenter/`. Each is a manufacturer brand page (gear-shopping intent, affiliate-heavy on live). Closes the highest-impact remaining gap from the Session 24 stack.

## Pre-flight observations

- No `/producenter/` folder exists yet in `src/pages/fiskeudstyr/`. Need to create the directory + a parent hub (`producenter/index.astro`) + 3 sub-pages.
- Parent `/fiskeudstyr/index.astro` currently has 5 cards (Fiskestænger, Beklædning, Tilbehør, Fiskehjul, Endegrej). Need to add a 6th "Producenter" card so the branch is reachable from the main hub.
- Live URLs to fetch:
  - `https://udeogfiske.dk/fiskeudstyr/producenter/`
  - `https://udeogfiske.dk/fiskeudstyr/producenter/westin/`
  - `https://udeogfiske.dk/fiskeudstyr/producenter/savage-gear/`
  - `https://udeogfiske.dk/fiskeudstyr/producenter/geoff-anderson/`
- Template precedent: `fiskeudstyr/fiskehjul/index.astro` + `fiskestaenger/spinnestaenger/index.astro` are the closest analogues (gear-page editorial template). Single H1 + intro + 3-5 H2 sections + 5-Q FAQ + AuthorProfile derivative quote + 1-2 DidYouKnow/TipBox.
- Per `feedback_uof_affiliate_voice.md`: any product mention/recommendation goes in 1st person ("Jeg fisker selv med…", "Min favorit fra Westin er…"). Per `feedback_uof_qa_h2_format.md`: rewrite H2s to Q&A form where reasonable.
- Affiliate widgets via `<Affiliate id="..." />` if the brand has products in `data/fiskegrej-feed.xml` — quick check needed; otherwise queue to §B.
- 3 of these will be new `/producenter/<brand>/` routes that match live exactly → **no new 301 redirects needed** unless slugs diverge.

## Plan

- [x] 1. Fetched all 4 URLs via `_fetch.cjs`.
- [x] 2. Extracted + surveyed. All 4 substantive (no stubs). Brand pages use live's `**bold inline**` sub-heading pattern instead of real H2s → normalized to real H2 + Q&A rewrite per memory.
- [x] 3. Classified — all 4 = (a) build 1:1 verbatim.
- [x] 4. Affiliate feed has 11.5k brand-keyword matches but specific IDs not researched this session → queued to §B follow-up.
- [x] 5. Built `src/pages/fiskeudstyr/producenter/index.astro` (hub).
- [x] 6. Built `src/pages/fiskeudstyr/producenter/westin/index.astro`.
- [x] 7. Built `src/pages/fiskeudstyr/producenter/savage-gear/index.astro`.
- [x] 8. Built `src/pages/fiskeudstyr/producenter/geoff-anderson/index.astro`.
- [x] 9. Added 6th "Producenter" card to parent `/fiskeudstyr/index.astro`.
- [x] 10. Build clean — 72 pages. Each brand page emits 5 schema Question entries (15 new Q&As total).
- [x] 11. §25 review section appended.

## Defaults if you say "go ahead"

- AuthorProfile derivative 1st-person quote on each brand page.
- Q&A H2 rewrite applied (per memory).
- 5-Q FAQ distilled from prose unless live ships a real FAQPage schema (then use verbatim like Mariager Fjord).
- No DifficultyMeter on gear/brand pages (skip — not relevant).
- Affiliate widgets only where product IDs exist in feed; otherwise queue to §B.

---

# ▶ RESUME HERE — Next session checkpoint (paused 2026-05-13 after Session 24)

## Site state at pause

- **68 pages built clean** (latest `npm run build` 2026-05-13 09:41).
- **7 active 301 redirects** in `astro.config.mjs` + `public/_redirects` (all from Sessions 22-24 route divergences).
- All visible 404 cards on main category indexes are now resolved.
- Build command: `npm run build`. Dev: `npm run dev`. Node ≥22.12.

## Top of stack — pick one to resume

Listed by impact. Each is a self-contained session (~3-5 pages or one focused topic).

1. **§N — Trip-report sub-pages (3 pages)** — *medium impact, medium effort*
   Bøgeskoven 15 Jan 2022 / Salvadsparken 16 Juli 2022 / Hammer Bakker marts. These are the trip-detail pages whose H3 teasers on the 3 fiskepladser pages (Stevns, Roskilde Fjord, Isefjorden) currently sit as plain text (no anchor — avoiding local 404s). When shipped, re-link the H3s.
   Live URLs:
   - `https://udeogfiske.dk/fisketure/havorredfiskeri-pa-stevns/bogeskoven-15-januar-2022/`
   - `https://udeogfiske.dk/fisketure/roskilde-fjord/salvadsparken-16-juli-2022/`
   - `https://udeogfiske.dk/fisketure/fisketur-til-hammer-bakke/`
   Local target: `/fisketure/<slug>/` (probably matches live for first two; Hammer Bakker may need slug decision).

2. **Producenter branch (3 pages)** — *higher impact for gear-shopping intent, more affiliate-heavy*
   Westin / Savage Gear / Geoff Anderson. Live URLs under `/fiskeudstyr/producenter/`. These are manufacturer brand pages — typically heavy on product widgets (§B affiliate-queue territory).

3. **§O — Bolund content for `/fiskepladser/roskilde-fjord/`** — *low effort, blocked on source*
   Bolund H2 was dropped in Session 22 because live had it as a verbatim copy-paste of Salvadsparken text. Needs proper source content for a Roskilde Fjord plads near Hove Å. Only takes 15 min once content exists.

4. **§P — Wire waders-til-havorred link from parent index** — *trivial, 1-line edit*
   The new waders-til-havorredfiskeri sub-page (shipped Session 23) is reachable only by direct URL. Add a teaser link from `/fiskeudstyr/beklaedning/waders-og-stovler/` parent.

5. **§A — faq prop migration on remaining `/fiskeguide/*` pages** — *TS errors only, no user-visible impact*
   Mechanical conversion of older `faq` prop shape to the array form. Listed as a tidying followup since Session 13.

## Deferred (not "missing")

- **English branch** (`/en/...`, including Seatrout Fishing in Denmark) — user has a separate multilingual plan. Don't translate 1:1 or add hreflang annotations yet. See `feedback_uof_english_multilang_deferred.md`.

## Older followups (lower priority, persistent)

- §B Affiliate cards — large backlog: fluefiskeri-i-put-take, fiskebøger, waders-til-havorred, Mariager Fjord, both seasonal "5 bedste" pages, plus older fiskestang/fiskehjul/etc.
- §C Live-testimonial swap on makrel.
- §F Generate aborre/gedde card images (nano-banana).
- §G Replace where live updates: spinnefiskeri-i-put-take (currently net-new in our voice — live is stub), forår/sommer "5 bedste" (live has 4/3 entries despite "5 bedste" title).
- §H Generate dedicated hero images for sub-category pages.

## Key memories in play (auto-loaded each session)

- 1:1 content workflow + extractor pattern (`feedback_uof_content_workflow.md`)
- Q&A H2 rewrite rule (`feedback_uof_qa_h2_format.md`)
- First-person voice across all editorial copy (`feedback_uof_affiliate_voice.md`)
- 301 redirects on every route change, both layers (`feedback_uof_301_when_moving_pages.md`)
- English/multilang deferred (`project_uof_english_multilang_deferred.md`)
- Havørred monthly net-new precedent (`reference_uof_havorred_monthly_pages.md`) — applies when live has a stub

## Quick orientation commands

- `npm run build` — clean build, should report 68 pages.
- `cat review.md | head -100` — last few session reviews.
- `ls src/pages/` — top-level page tree.
- Fetch new content: `cd content && node _fetch.cjs <live-url> <slug>` then `node _extract.cjs <slug>.html`.

---

# Plan — Session 24 (Fiskepladser placeholders + §M Gennemløbsblink trio, 2026-05-13) — DONE

- [x] 1. Batch-fetched all 5 (koebenhavn, mariager-fjord, gennemlobsblink, gennemlobsblink-forar, gennemlobsblink-sommer).
- [x] 2. Surveyed: Mariager Fjord has 6-Q live FAQ (verbatim usable) + CMS bug ("Blink og Grej Til Isefjorden" H2 copy-paste leftover). Forår "5 bedste" has only 4 entries; sommer only 3.
- [x] 3. Built all 5 with locked-in template. Skipped bogus "Isefjorden" H2 on Mariager rebuild.
- [x] 4. Added 2 301 redirects for shortened local slugs (koebenhavn, mariager-fjord).
- [x] 5. Re-linked Gennemløbsblink H3 on `/fiskeudstyr/endegrej/` — **§M closes**.
- [x] 6. Build clean — 68 pages.
- [x] 7. §24 review section appended.

**Saved new memory:** `project_uof_english_multilang_deferred.md`.

---

# Plan — Session 22a (close §L — build /fiskeudstyr/endegrej/, 2026-05-13) — DONE

- [x] 1. Fetched live → `content/endegrej.html` (76 KB).
- [x] 2. Extracted body → live is **single-content page** with 5 inline H3s (Fluer/Gennemløbsblink/Blink/Spinner/Jigs-Gummidyr). Only Gennemløbsblink has a sub-page on live.
- [x] 3. Shape decision: single-content guide (fiskehjul template) — NOT a sub-card hub. Avoids creating 4 fake sub-card 404s.
- [x] 4. Built `src/pages/fiskeudstyr/endegrej/index.astro`. Body 1:1 verbatim with one fix: Jigs/Gummidyr blurb on live duplicates the Spinner blurb (content bug) → replaced with one original sentence in same voice. Q&A H2 rewrite, AuthorProfile derivative, 1× DidYouKnow, 1× TipBox, 5-Q FAQ.
- [x] 5. Build clean — 56 pages. 5 schema Question entries + 5 accordion items emitted.
- [x] 6. §L review section appended.

**Sub-pages NOT built this session — queued as §M:**
- `/fiskeudstyr/endegrej/gennemlobsblink/`
- `/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-forar/`
- `/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-sommer/`

Once §M ships, re-link the Gennemløbsblink H3 on endegrej hub.

---

# Plan — Session 23 (5 sub-page gap-fills, 2026-05-13) — DONE

- [x] 1. Batch-fetched all 5.
- [x] 2. Extracted + surveyed. **Spinnefiskeri P&T turned out to be a stub on live** (H1 only, no body) — built net-new per `reference_uof_havorred_monthly_pages.md` precedent. **Waders til havørred** has a real live FAQ (5 Qs) — used verbatim.
- [x] 3. Built all 5: spinnefiskeri-i-put-take (net-new), fluefiskeri-i-put-take (1:1), rens-af-orred (1:1, top-level), fiskeboger (1:1, top-level), waders-til-havorredfiskeri (1:1 with verbatim live FAQ).
- [x] 4. Added 301 redirects for 2 divergent URLs (Fluefiskeri P&T + Waders til havørred) in both astro.config.mjs and public/_redirects.
- [x] 5. Discovered + fixed path mismatch: initial waders sub-page write landed under wrong parent `/fiskeudstyr/waders-og-stovler/` (live URL shape) instead of correct local `/fiskeudstyr/beklaedning/waders-og-stovler/`. Moved file, fixed import depths (5 `../`), updated canonical.
- [x] 6. Build clean — 63 pages (added 5 new content + 2 redirect stubs; total redirects now 5). All 5 pages emit 5 schema Question entries.
- [x] 7. §23 review section appended.

---

---

# Plan — Session 22 (fiskepladser area-guide trio, 2026-05-13) — DONE

**Pivot at session start:** user directed that these 3 pages live under `/fiskepladser/` not `/fisketure/` (live URL convention differs from our site's chosen structure).

- [x] 1. Skipped re-fetch — content already cached in prior pass.
- [x] 2. Surveyed all 3 extracts.
- [x] 3. Classification — all 3 = (a) build 1:1 verbatim. No (b)s, no (c)s.
- [x] 4. Discovered Stevns already partially built in prior unlogged session. Updated it: H1 typo fix ("Havørredfisker" → "Havørredfiskeri"), Q&A H2 rewrite, Bøgeskoven H3 teaser added.
- [x] 5. Built Isefjorden 1:1 — H1 + 3 intro + 1 H2 hub + 5 H3 named pladser. Heading-level normalized (live's 5 separate H2s → 5 H3s under 1 H2 for cleaner outline).
- [x] 6. Built Roskilde Fjord 1:1 with Bolund H2 dropped (live had Bolund body verbatim-copied from Salvadsparken — content bug, would require fabrication to rebuild → queued as §O).
- [x] 7. Updated `/fiskepladser/index.astro` — added Stevns + Roskilde Fjord cards (5 cards total now).
- [x] 8. Updated `/fisketure/index.astro` — repointed 3 destination cards from /fisketure/... → /fiskepladser/..., adjusted answer-capsule copy.
- [x] 9. Build clean — 58 pages. Each new page emits 5 schema Question + 5 accordion items.
- [x] 10. §22 review section appended to review.md.

**Sub-pages NOT built — queued as §N:** Bøgeskoven 15 Jan 2022, Salvadsparken 16 Juli 2022, Hammer Bakker marts. Will live under /fisketure/<slug>/ when built. Once shipped, re-link the H3 teasers on the parent fiskepladser pages.

**Content-fix queued as §O:** Source proper Bolund content (Roskilde Fjord plads between Salvadsparken og Frederikssund-jernbanebroen).

---

The `/fisketure/` index has 3 cards — Stevns, Isefjorden, Roskilde Fjord. All 3 currently link to local 404s. This session brings them up. Per user direction (Session 22 kickoff): **fetch all 3 candidates first, decide per-slug** whether to build 1:1 from live, build net-new in established voice, or drop the card.

### Pre-flight

- Local target slugs (from `fisketure/index.astro`):
  - `/fisketure/havorredfiskeri-pa-stevns/`
  - `/fisketure/havorredfiskeri-i-isefjorden/`
  - `/fisketure/roskilde-fjord/`
- Live URL convention varies (top-level vs nested). Per the vadejakke/polaroid precedent, live often hosts these top-level under root (e.g. `/havorredfiskeri-pa-stevns/`). Will try `/fisketure/<slug>/` first, fall back to top-level `/<slug>/` on 404.
- No saved HTML yet — fetch via `_fetch.cjs`. Curl is firewalled per memory.
- Hero images already chosen on the parent index: `stevns_card.png`, `isefjorden_card.png`, `roskilde_fjord_card.png`. Reuse for sub-pages too.
- Template precedent: the 3 havørred technique pages (konditionsfaktor / natfiskeri / spinnefiskeri) are the closest analogues — single-author trip-report-ish prose, deeper-funnel, ~350-450 lines. Apply that lean editorial pattern.

### Plan

- [ ] 1. Fetch all 3 live URLs via `_fetch.cjs`. Try `/fisketure/<slug>/` first; on 404 try top-level `/<slug>/`. Save under `content/<slug>.html`.
- [ ] 2. Run `_extract.cjs` on each. Survey: H2 structure, FAQ presence (likely none — gear pages had none), testimonial blocks, datePublished from aioseo, affiliate widgets.
- [ ] 3. **Per-slug decision point (pause for user sign-off).** For each of the 3 slugs, classify:
  - **(a)** Live exists with substantive content → build 1:1 verbatim, lean template (AuthorProfile derivative quote, 1-2× DidYouKnow/TipBox, 5-Q FAQ distilled, 1-2× full-bleed image, RelatedRow).
  - **(b)** Live exists but is thin / off-topic → flag, propose net-new in established voice.
  - **(c)** Live doesn't exist → propose removing the card from `fisketure/index.astro` (cleanest — no fabrication).
- [ ] 4. Build the pages that fell into (a) and/or (b). One Astro file per slug at `src/pages/fisketure/<slug>/index.astro`.
- [ ] 5. If any (c) cases: remove those entries from `fisketure/index.astro` `locations` array + update the answer-capsule text accordingly.
- [ ] 6. Build & verify — page count should rise by however many (a)+(b) we shipped. Confirm all card hrefs resolve. Each new page emits FAQ schema entries.
- [ ] 7. Review section appended to `review.md`.

### Open questions before I start step 4

1. **AuthorProfile** — derivative 1st-person quote (default, per memory `feedback_uof_affiliate_voice.md`)?
2. **Q&A H2 rewrite** — apply per memory (default), or keep H2s strict-verbatim?
3. **Difficulty meter** — most fisketure pages won't have a "Sværhedsgrad" widget; skip unless live has one?

Default if you just say "go ahead after fetch": derivative AuthorProfile, Q&A rewrite, no DifficultyMeter (skip unless live has one), 5-Q FAQ distilled from prose.

---

# Plan — Session 21 follow-up (close §K — fiskesaet-for-begyndere, 2026-05-10) — DONE

## Goal: finish the tilbehør sub-tree

The `/fiskeudstyr/tilbehor/` index has 2 sub-cards. Fangstnet shipped in Session 20 follow-up #4. Fiskesæt-for-begyndere has been linking to a local 404 since then. Single page to build, same locked-in template.

- [x] 1. Fetched live page → `content/fiskesaet-for-begyndere.html` (89 KB).
- [x] 2. Extracted body → `_fiskesaet-for-begyndere_clean.txt`. Same extractor-regex gotcha as polaroid (final H2 swallowed into a `<li>`); recovered via direct grep.
- [x] 3. Built `src/pages/fiskeudstyr/tilbehor/fiskesaet-for-begyndere/index.astro`. Body 1:1 verbatim, two minor fixes, Q&A H2 rewrite, AuthorProfile derivative quote, 1× DidYouKnow, 1× TipBox, 5-Q FAQ.
- [x] 4. Build clean — 54 pages.
- [x] 5. Review section appended to `review.md`.

---

# Plan — Session 21 (close §J — vadejakke + polaroid-briller, 2026-05-10) — DONE

## Goal: finish the beklædning sub-tree

- [x] 1. Fetched vadejakke + polaroid-briller (84 KB + 90 KB).
- [x] 2. Extracted bodies. Both have no FAQ on live.
- [x] 3. Built `src/pages/fiskeudstyr/beklaedning/vadejakke/index.astro` — Q&A H2 rewrite, DidYouKnow D-ring, TipBox størrelse, 5-Q FAQ.
- [x] 4. Built `src/pages/fiskeudstyr/beklaedning/polaroid-briller/index.astro` — H2s already Q&A, kept verbatim. DidYouKnow polarising film, TipBox brune linser, 5-Q FAQ. Title + description rewritten (live's were keyword-stuffed / truncated).
- [x] 5. Build clean — 53 pages.
- [x] 6. Review section appended.

---

# Plan — Session 20 (CSS lift, 2026-05-08) — DONE

## Goal: §D — lift duplicated CSS to a global stylesheet — RESOLVED

22 pages each carried their own copy of FAQ accordion + `.full-bleed` figure + `.month-nav` styles. Pure cleanup pass.

- [x] 1-2. Created `src/styles/global.css` (~140 lines) with all canonical rules.
- [x] 3. Imported from MainLayout.astro frontmatter.
- [x] 4-5. Build & verify pre-removal + sample removal on havorredfiskeri-januar.
- [x] 6-8. Swept all 23 remaining pages — used one-shot `_lift.cjs` script (deleted after run). ~2551 lines removed total.
- [x] 9-10. Final build — 42 pages clean.

---

# Plan — Session 19 (havørredfiskeri sub-tree, 2026-05-07) — DONE

## Phase A — 3 technique pages
- [x] Built konditionsfaktor-havorred / natfiskeri-efter-havorred / spinnefiskeri-havorred. Full editorial pattern. Parent page got "Detaljerede havørred-guides" sub-card block.

## Phase B step 1 — 6 verbatim live monthly pages
- [x] Built havorredfiskeri-{januar,februar,marts,oktober,november,december}/index.astro using the lean monthly template. Parent havørred page got a `month-guides` section with 6 sub-cards. 36 pages clean.

## Phase B step 2 — 6 net-new monthly pages (apr-sep)
- [x] Built apr/maj/juni/juli/august/september. Explicitly net-new (no live source). 42 pages clean.

---

# Plan — Session 18 (Aborre + Gedde + Sild bento, 2026-05-06) — DONE

- [x] Built `src/pages/guide-til-fisk/aborrefiskeri/index.astro` (6-Q FAQ, DifficultyMeter=15).
- [x] Built `src/pages/guide-til-fisk/geddefiskeri/index.astro` (live has real 5-Q FAQ, used verbatim; DifficultyMeter=50).
- [x] Updated homepage bento: 6 → 9 species (3×3 grid).
- [x] Updated /guide-til-fisk/ category index — added Aborre + Gedde to freshwater.
- [x] 25 → 27 pages.

---

# Plan — Session 17 (Front page depth pass, 2026-05-06) — DONE

- [x] Added "Udvalgte fiskeguides" section (3 large editorial cards).
- [x] Added "Mød forfatteren" section (uses `aldin_glavas.png`).
- [x] Enriched Intro section + hero subtitle polish.

---

# Plan — Session 16 (Regnbueørred — final species page, 2026-05-06) — DONE

- [x] Renamed `/regnbueoerred/` → `/regnbueorredfiskeri/`. Updated 2 inbound links.
- [x] Title aligned to live verbatim. datePublished 2021-06-22.
- [x] Q&A H2 rewrites + new H2 "Hvad er en regnbueørred?".
- [x] AuthorProfile, DifficultyMeter=15, 2× DidYouKnow, 1× TipBox, 2× StatHighlight, 2× full-bleed.
- [x] 6-Q FAQ distilled from prose. 25 pages, 6 Question entries verified.

---

# Plan — Session 15 (Torsk, 2026-05-06) — DONE

- [x] Renamed `/torsk/` → `/torskefiskeri/`. Updated 6 inbound links.
- [x] datePublished 2020-01-28. Title aligned to live.
- [x] Q&A H2 rewrites. AuthorProfile derivative, DifficultyMeter=40, 2× DidYouKnow, 1× TipBox, 2× StatHighlight, 2× full-bleed.
- [x] 6-Q FAQ. 25 pages.

---

# Plan — Session 14 (Hornfisk + SeasonCalendar, 2026-05-06) — DONE

- [x] datePublished 2022-01-05. Title aligned to live.
- [x] SeasonCalendar with verified live data.
- [x] Q&A H2 rewrites. AuthorProfile derivative, DifficultyMeter=20, 2× DidYouKnow, 1× TipBox, 2× StatHighlight, 2× full-bleed.
- [x] 6-Q FAQ. 25 pages.

---

# Plan — Session 13 (Makrel + Sild — 2 species + faq prop migration, 2026-05-04) — DONE

- [x] Renamed `/makrel/` → `/makrelfiskeri/`. Updated 2 inbound links. SeasonCalendar reintroduced (verified live data).
- [x] Renamed `/sild/` → `/sildefiskeri/`. Updated 4 inbound links.
- [x] Both pages got full editorial pattern + 6-Q FAQ.
- [x] Side fix: `fiskeguide/fiskeri-fra-baad` faq prop converted to array form.

---

# Plan — Session 12 (Fladfisk + schema expansion + FAQ accordion + editorial overlays, 2026-05-03) — DONE

- [x] Fladfisk: rename `/fladfisk/` → `/fladfisk-fiskeri/`. Q&A H2 rewrites + 7-Q FAQ.
- [x] Schema: FAQPage 1 → 9 Q&As. Added `about` + `speakable` + `dateModified` to MainLayout.
- [x] FAQ accordion: native `<details>/<summary>` pattern.
- [x] Editorial overlays: DidYouKnow + TipBox + StatHighlight + `.full-bleed` utility.
- [x] Season carousel polish (deep gradient cover, watermark icon, slate body, soft pulse animation on `.is-now`).

---

## Followups queue (carried across sessions)

- **§A.** faq prop migration on remaining 9 `/fiskeguide/*` pages — TS errors only.
- **§B.** Affiliate cards (fiskesæt + vadejakke + polaroid + fiskehjul + fangstnet + waders + 6 fiskestænger products + makrel/hornfisk).
- **§C.** Live-testimonial swap on makrel.
- **§F.** Generate proper aborre/gedde card images via nano-banana.
- **§G.** Replace 6 net-new monthly pages with verbatim if/when live publishes them.
- **§H.** Generate proper sub-type-specific images via nano-banana.

---

# Plan — Session 15 (Fluefiskeri fly-rod affiliate swap, 2026-05-28) — DONE

- [x] Swap fly-rod Affiliate on `/fiskeguide/fluefiskeri/` from Pool 12 Powerfly Combo (`productId="505505"`) → Vision Meri (`productId="62370"`).
- [x] Rewrite the `note` in honest step-up framing: serious coastal rod for havørred (kystfiskeri, lange kast, progressiv aktion, saltvandssikker). First-person voice ("min favorit").
- [x] Leave surrounding beginner copy (klasse 6-7, 9 fod) and the GuideLink untouched.
- [x] Verify build passes (Affiliate throws if productId not in feed → confirms 62370 valid). 78 pages, no errors.
- [x] Add review.md entry.

---

# Plan — Session 16 (UL-fiskeri page enrichment + AffiliateTrio, 2026-05-28) — DONE

Goal: bring `/fiskeguide/ul-fiskeri/` up to the fluefiskeri standard — less text-heavy, interactive components, affiliate products.

- [x] Add imports: AffiliateTrio, TipBox, DidYouKnow, DifficultyMeter, StatHighlight, GuideLink.
- [x] DifficultyMeter (50 "Mellem") at top of article.
- [x] Convert H2s to clean Q&A phrasing.
- [x] Grej-oversigt table (stang 0-7g / hjul 500-2000 / line fletline+FC).
- [x] "Hvilke fisk på UL" table (fisk / hvor / hvorfor UL passer).
- [x] AffiliateTrio "Sådan sætter jeg mit UL-grej sammen": rod 503121 + reel 79861 + lure 73886.
- [x] DidYouKnow (UL-term origin), 2 StatHighlight (0-7g + 40cm), 2 TipBox callouts.
- [x] GuideLinks: aborre, havørred, Put & Take, regnbueørred.
- [x] Expand FAQ 1 → 6 Q&As, first-person voice.
- [x] Copy prey-table CSS into page style block (art-figure not needed — no figures).
- [x] User chose components & tables only — no nano-banana images this round.
- [x] Build clean: 78 pages, no errors → AffiliateTrio validated all 3 productIds. Verified rendered HTML (3 trio cards, 4 GuideLinks, 6 FAQ Qs).

---

# Plan — Session 17 (Fiskeri-for-børn enrichment + kids' set via PriceRunner, 2026-05-28) — DONE

Goal: bring `/fiskeguide/fiskeri-for-born/` up to the ul-fiskeri standard; recommend one complete beginner set for children.

DECISION: User rejected the Affiliate review box. Feature the Kinetic Ramasjang CC Blue Combo Set (a real RamaSjang-branded børnesæt — complete with stang/hjul/0,25mm line + LED reel) via PriceRunner, linking to the user's PriceRunner product URL with credit params preserved.

- [x] New component `PriceRunnerProduct.astro` — single-product PriceRunner card (image + note + spec chips + "Sammenlign priser" CTA, "Annonce" + PriceRunner disclosure). Honors a passed-in href verbatim.
- [x] Imports: PriceRunnerProduct, TipBox, DidYouKnow, DifficultyMeter, StatHighlight, GuideLink.
- [x] DifficultyMeter (20 "Meget nem").
- [x] Q&A H2 phrasing.
- [x] Age-guide table (alder / fiskeri / hvad de fanger).
- [x] Begynderfisk + agn table (aborre/skaller/regnbueørred/hornfisk).
- [x] PriceRunnerProduct card for Kinetic Ramasjang CC Blue in "Hvilket fiskesæt" section. Image from fiskegrej feed (real product photo), CTA → user's PriceRunner URL with ref-site=adrunner_dk_udeogfiske + utm_source=udeogfiske.dk preserved.
- [x] DidYouKnow (hvidt brød → skaller), StatHighlight ("0 kr" under-18 fisketegn), 2 TipBox.
- [x] GuideLinks: Put & Take, hornfisk, fisketegn.
- [x] FAQ 1 → 6 Q&As, first-person.
- [x] Copy prey-table CSS into page style block.
- [x] Build clean: 78 pages. Verified credit params survive in all 3 anchors (rel="nofollow sponsored"), 6 FAQ Qs, 2 tables, all components render.

---

# Plan — Session 18 (Fisketegn page cleanup + gov link + components, 2026-05-28)

No product. Goal: cleaner page, interactive components, prominent link to the official Fiskeristyrelsen site. — DONE

- [x] Imports: TipBox, DidYouKnow, StatHighlight, GuideLink. (No DifficultyMeter — doesn't fit a rules page; no Affiliate.)
- [x] Inline "gov-cta" card → https://fisketegn.fiskeristyrelsen.dk/ (Køb dit fisketegn), rel="noopener".
- [x] "Skal du have fisketegn?" matrix table (kyst/å/P&T/under-18/pension/husstand → Ja/Nej + note), with ft-yes/ft-no badges.
- [x] StatHighlight "~30 mio. kr." (fiskepleje), DidYouKnow (husstand-undtagelse), TipBox (årstegn-tip).
- [x] GuideLinks: Put & Take, kyst, å.
- [x] Q&A H2 phrasing; FAQ 1 → 5 (no exact kr — link to gov site for current priser).
- [x] prey-table + gov-cta + ft-badge CSS into style block (row-header white-space:normal for long labels).
- [x] Build clean: 78 pages. Verified gov-cta + matrix (2 Ja / 4 Nej) + components + 5 FAQ Qs render.

---

# Plan — Session 19 (Bombarda-fiskeri enrichment + rod/floats/lures, 2026-05-28)

Same template as ul-fiskeri. Products: a rod, the bombarda floats (accessory), and lures. — DONE

- [x] Imports: Affiliate, AffiliateTrio, TipBox, DidYouKnow, DifficultyMeter, StatHighlight, GuideLink.
- [x] DifficultyMeter (45 "Mellem").
- [x] Q&A H2 phrasing.
- [x] Single Affiliate: Westin W2 Bombarda rod (`77057`, 899 kr) in new "Hvilken stang" section (note mentions W6 `77048` premium).
- [x] AffiliateTrio "Mine 3 bombarda-flåd": SFG Flydende P&T 20g (`75192`) + Intermediate 30g (`74698`) + Synkende Kyst 25g (`75184`) — maps to page advice.
- [x] AffiliateTrio "Mine agn til bombarda": SG Nails Micro Spoon Kit (`502841`) + Unique Kyst Fluesortiment (`504673`) + Berkley Gulp Sandworm (`503157`).
- [x] Flåd table (type/vægt/bedst til) + agn table (agn/bedst til/tip).
- [x] DidYouKnow (fluer på spinnestang), StatHighlight (20–30 g), 2 TipBox (kasteteknik + 3 vigtigste tips).
- [x] GuideLinks: Put & Take, fluefiskeri, kyst.
- [x] FAQ 1 → 6, first-person.
- [x] prey-table CSS into style block. Build clean: 78 pages, all 7 productIds validated. Verified 1 Affiliate + 6 trio cards + 2 tables + 6 FAQ Qs.

---

# Plan — Session 20 (Fiskeri-fra-båd enrichment, no product, 2026-05-28)

Same template. No product. Page already has a fish-grid (keep it). — DONE

- [x] Imports: TipBox, DidYouKnow, DifficultyMeter, StatHighlight, GuideLink.
- [x] DifficultyMeter (25 "Nem").
- [x] Q&A H2 phrasing.
- [x] Comparison table: Fra båd vs. Fra land/mole (bevægelighed/dybde/pladskendskab/fangstchance) — replaced the plain bullet list.
- [x] Grej-oversigt table (stang/hjul/endegrej/agn — gear types, no products).
- [x] StatHighlight (60 g belastning), DidYouKnow (kaste- vs pirkeside på drivende båd), 2 TipBox (jig forfanget; orm-økonomi).
- [x] GuideLinks: fladfisk, mole.
- [x] FAQ 1 → 6, first-person.
- [x] prey-table CSS into style block. Build clean: 78 pages. Verified 2 tables + fish-grid kept + components + 6 FAQ Qs.

---

# Plan — Session 21 (Catch-and-release enrichment + interactive components, 2026-06-02)

Bring catch-and-release/index.astro up to the same enrichment level as ul-fiskeri etc.
The page is currently short (230 lines, no interactive components). Keep all existing prose.
Products: C&R is gentle-handling gear — rubber landing net, forceps/krogløser.

- [x] Imports: AffiliateTrio, TipBox, DidYouKnow, DifficultyMeter, StatHighlight, GuideLink (kept AdsenseBanner + RelatedRow).
- [x] DifficultyMeter (value 30 — "korrekt C&R er lettere end de fleste tror").
- [x] NEW interactive component #1: "Skånsomheds-beregner" — inline calculator (Fulton pattern).
      Inputs: krogtype + krogsårets placering (button toggles), lufteksponering (slider 0–120s), vandtemp (slider 2–22°C).
      → 0–100 score + circular gauge + verdict (Optimal/God/Vær opmærksom/Høj risiko) + explanation. Logic from DTU Aqua 2023 factors; air-penalty amplified by temp.
- [x] NEW interactive component #2: clickable C&R tjekliste (8 trin), live X/8 progress + completion message.
- [x] prey-table: krogtype-sammenligning (3 rows → krogsår/blødning/C&R-egnethed).
- [x] StatHighlight ("0 %" dødelighed, DTU Aqua 2023), DidYouKnow (æg pr. kg hun), 2x TipBox (modhager / genoplivning).
- [x] AffiliateTrio "Mit skånsomme C&R-grej": SFG Easy Flip Landing Net m/gummi (505982, highlight) + Guideline Trout Forceps (77757) + Searun Forceps 3-in-One 16cm (79743).
- [x] GuideLinks: Put & Take, kyst, fluefiskeri.
- [x] FAQ accordion (details/summary) expanded 1 → 6 Qs (set:html for inline strong/&-entities).
- [x] Added calculator + checklist + prey-table + FAQ CSS into style block. Build clean: 78 pages, all 3 productIds resolved (3 trio cards, 6 FAQ, 5 choice buttons rendered).

---

# Plan — Session 22 (Spinnestænger product-page enrichment + interactive Stangvælger, 2026-06-02)

First product page in the new pass. Page promises "3 stænger over 1500 kr" but shows NO products — fill that gap. Add interactive + premium/begynder rods. Keep all existing prose + AuthorProfile.

- [x] Imports add: AffiliateTrio, Affiliate, StatHighlight, GuideLink.
- [x] NEW interactive "Stangvælger": instant-update selector (5 chips: kyst/å/P&T/gedde-sandart/aborre-UL) → 4-cell spec panel (længde, kastevægt, line, hjul) + note. No calculate button; subtle fade on change. Teal header, consistent with site.
- [x] StatHighlight ("9 fod · 10–40 g" typical kyst spec).
- [x] Comparison table: 2-delt vs 3/4-delt vs teleskop (transport / kasteegenskab / min anbefaling).
- [x] Begynder single Affiliate: Westin W2 Spin 2-delt (77064, 649 kr).
- [x] Premium AffiliateTrio "Mine 3 spinnestænger over 1500 kr": Abu Sölv AG2 Spin (78509, highlight) + Sportex Captor RS-2 Seatrout (70553) + Westin W6 Spoon (81504).
- [x] GuideLinks: fiskehjul, spinnefiskeri-havørred.
- [x] FAQ expand 5 → 7 (added længde + gedde/aborre Qs).
- [x] Added Stangvælger + table CSS into style block. Build clean: 78 pages, all 4 productIds resolved (rod-finder + 5 chips + 3 trio cards + begynder card + table + 7 FAQ rendered).

---

# Plan — Session 23 (Fiskestang-til-havet enrichment + interactive Havstangvælger, 2026-06-02)

Same template as spinnestænger (redesigned light Stangvælger w/ per-category swapping product). No AdsenseBanner (removed per user pref). Keep all prose + AuthorProfile.

- [x] Imports: RelatedRow, AuthorProfile, DidYouKnow, TipBox, StatHighlight, GuideLink, AffiliateTrio, getProduct/formatPrice. Dropped AdsenseBanner.
- [x] NEW interactive "Havstangvælger" (light design, swapping product): 4 tabs — Kyst & mole / Kastesiden (båd) / Pirkesiden (båd) / Dybt vand & store torsk → specs (Stangtype, Længde, Kastevægt, Agn) + note + recommended rod card.
      Rods: 63880 Westin W3 Powercast (kyst) · 73108 Westin W4 Powercast 40-130gr (kaste) · 503079 Penn Squadron IV Boat (pirk) · 80885 Penn Regiment IV Boat (dybt).
- [x] StatHighlight (100–400 g pirke).
- [x] Comparison table: Spinnestang vs Pirkestang (længde / kastevægt / bedst til).
- [x] AffiliateTrio "Mit torskegrej fra båd": Fladen Conrad Deep Water Jig 300gr (74338, highlight) + Fladen Torskeforfang (503490) + Twills Sabiki Silde/Makrelforfang (506054).
- [x] GuideLinks: spinnestænger, torskefiskeri, fiskeri-fra-baad.
- [x] FAQ expand 5 → 7 (added to-delt + hjul Qs).
- [x] Build clean: 78 pages, all 7 productIds resolved (4 finder + 1 active + 3 trio + 2-row table + 7 FAQ rendered, no Annonce).

---

# Plan — Session 24 (Fluefiskestang enrichment + interactive Fluestangvælger, 2026-06-02)

Same template as havet (light chooser w/ per-category swapping product, trio, table, no Annonce). Keep all prose + AuthorProfile.

- [x] Imports: RelatedRow, AuthorProfile, DidYouKnow, TipBox, StatHighlight, GuideLink, AffiliateTrio, getProduct/formatPrice. No AdsenseBanner.
- [x] NEW interactive "Fluestangvælger": 4 tabs — Havørred på kyst / Å & bækørred / Put & Take / Laks & to-hånds → specs (Klasse, Længde, Fluelinje, Forfang) + note + swapping rod card.
      Rods: 66936 Vision River Hero 9' #6 (kyst) · 67571 Vision Little Hero 7' #3 (å) · 66935 Vision Super Hero 9' #5 (P&T) · 71160 Guideline Stoked Tohånd (laks).
- [x] StatHighlight (Klasse 5–6).
- [x] Comparison table: klasse 2–4 / 5–6 / 8–9 (typisk længde / bedst til).
- [x] AffiliateTrio "Resten af fluegrejet": Vision Hero #4/6 fluehjul (67111, highlight) + Vision Attack WF Line (34116) + Unique Kyst Fluesortiment 1 (504673).
- [x] GuideLinks: fluefiskeri, fluefiskeri-i-put-take, spinnestænger.
- [x] FAQ expand 5 → 7 (en-hånds vs to-hånds + hjul/line).
- [x] Build clean: 78 pages, all 7 productIds resolved (4 finder + 1 active + 3 trio + 3-row table + 7 FAQ, no Annonce).

---

# Plan — Session 25 (Waders-og-stovler enrichment + interactive Wader-vælger, 2026-06-02)

Same template (light chooser w/ per-category swapping product, trio, table, no Annonce). Keep all prose + AuthorProfile.

- [x] Imports: RelatedRow, AuthorProfile, DidYouKnow, TipBox, StatHighlight, GuideLink, AffiliateTrio, getProduct/formatPrice. No AdsenseBanner.
- [x] NEW interactive "Wader-vælger": 4 tabs — Kyst hele året / Vinter & koldt vand / Begynder & budget / Wadesko til åndbare → specs (Materiale, Bedst til, Sæson, Pris) + note + swapping product.
      Products: 81934 Kinetic X5 Stockingfoot (åndbar) · 71858 Abu Seatrout Neopren (vinter) · 74412 Fladen Nylon Waders (PVC) · 500404 Greys Drypoint Vadestøvle Gummisål (wadesko).
- [x] StatHighlight ("1 str. større" — size-up advice).
- [x] Comparison table: PVC vs Neopren vs Åndbar (isolering / vægt / bedst til).
- [x] AffiliateTrio "Resten af wader-grejet": Kinetic Superior Vadebælte (55011, highlight/safety) + Greys Drypoint Vadejakke (501046) + Vision Neoprensok (54254).
- [x] GuideLinks: waders-til-havorredfiskeri, vadejakke, fiskeri-paa-kysten.
- [x] FAQ expand 5 → 7 (filtsål vs gummisål + vadebælte/sikkerhed).
- [x] Build clean: 78 pages, all 7 productIds resolved (4 finder + 1 active + 3 trio + 3-row table + 7 FAQ, no Annonce).

---

# Plan — Session 26 (Vadejakke enrichment + interactive Vadejakke-vælger, 2026-06-02)

Same template (light chooser w/ per-tier swapping product, trio, table, no Annonce). Keep all prose + AuthorProfile.

- [x] Imports: RelatedRow, AuthorProfile, DidYouKnow, TipBox, StatHighlight, GuideLink, AffiliateTrio, getProduct/formatPrice. No AdsenseBanner.
- [x] NEW interactive "Vadejakke-vælger": 4 tabs — Begynder & budget / Bedste værdi / Til hård brug / Premium → specs (Materiale, Vandtæthed, Lommer, Bedst til) + note + swapping product.
      Products: 50616 Fladen Authentic (begynder) · 501046 Greys Drypoint (værdi, highlight) · 82121 Kinetic X5 (hård) · 503619 Westin W6 (premium).
- [x] StatHighlight ("4 krav" — author's jacket requirements).
- [x] Comparison table: Vadejakke vs almindelig fiskejakke (længde / bedst til).
- [x] AffiliateTrio "Det øvrige kyst-grej": SFG Easy Flip Landing Net m/gummi (505982, highlight, D-ring tie-in) + Savage Gear Shades Floating Solbrille (75528) + Geoff Anderson WizWool Beanie (76177).
- [x] GuideLinks: waders-og-stovler, polaroid-briller, fiskeri-paa-kysten.
- [x] FAQ expand 5 → 7 (pris + alm. fiskeri-brug).
- [x] Build clean: 78 pages, all 7 productIds resolved (4 finder + 1 active + 3 trio + 2-row table + 7 FAQ, no Annonce).

---

# Plan — Session 27 (Polaroid-briller enrichment + interactive Brille-vælger, 2026-06-02)

Same template (light chooser w/ per-category swapping product, trio, table, no Annonce). Keep all prose + AuthorProfile.

- [x] Imports: RelatedRow, AuthorProfile, DidYouKnow, TipBox, StatHighlight, GuideLink, AffiliateTrio, getProduct/formatPrice. No AdsenseBanner.
- [x] NEW interactive "Brille-vælger": 4 tabs by lens/light — Allround / Skarpt sollys / Overskyet & lavt lys / Sigtefiskeri → specs (Linsefarve, Lysforhold, Bedst til, Kontrast) + note + swapping product.
      Products: 75529 SG Shades Floating Amber (allround, highlight) · 75528 SG Shades Floating Dark Grey (sol) · 75527 SG Savage2 Yellow (overskyet) · 500691 Shimano Copper (spotting).
- [x] StatHighlight ("UVA + UVB" — UV protection).
- [x] Comparison table: hvad kigger du efter (Linsefarve / Ramme / Materiale → anbefaling + hvorfor).
- [x] AffiliateTrio "Det der hører med": Savage Gear Badge Baseball Cap (502979, highlight) + Costa Bowline Silicone Retainer (61891) + Guideline Clip-On Magnifier (72961).
- [x] GuideLinks: put-take-fiskeri, fluefiskeri, fiskeri-paa-kysten.
- [x] FAQ expand 5 → 7 (linsefarve til sol/gråvejr + læsefelt/clip-on).
- [x] Build clean: 78 pages, all 7 productIds resolved (4 finder + 1 active + 3 trio + 3-row table + 7 FAQ, no Annonce).

---

# Plan — Session 28 (Fangstnet enrichment + interactive Net-vælger, 2026-06-02)

Same template (light chooser w/ per-category swapping product, trio, table, no Annonce). Keep all prose + AuthorProfile.

- [x] Imports: RelatedRow, AuthorProfile, DidYouKnow, TipBox, StatHighlight, GuideLink, AffiliateTrio, getProduct/formatPrice. No AdsenseBanner.
- [x] NEW interactive "Net-vælger": 4 tabs — All-round / Mole & højt vand / Vadefiskeri / Gedde & store fisk → specs (Type, Håndtag, Net, Bedst til) + note + swapping product.
      Products: 83145 SFG Allround Teleskopisk Gummi (allround, highlight) · 64608 Abu Garcia 2pc Alu Tele (mole) · 50300 Kinetic Magnetic Quick Release Rubber Net Coast (vade) · 82797 Daiwa Prorex Tough Jungle Net XL (gedde).
- [x] StatHighlight ("Gumminet" — slime-layer/C&R friendly).
- [x] Comparison table: Gummimasker vs traditionelt knudenet (skånsomhed / kroge / bedst til).
- [x] AffiliateTrio "Land, afkrog, vej": Hurricane Net Magnet 4kg (73472, highlight) + Guideline Trout Forceps (77757) + Salter Little Samson fiskevægt (33204).
- [x] GuideLinks: catch-and-release, fiskeri-paa-mole, waders-og-stovler.
- [x] FAQ expand 5 → 7 (gummi vs knude + hvor sidder nettet ved wading).
- [x] Build clean: 78 pages, all 7 productIds resolved (4 finder + 1 active + 3 trio + 2-row table + 7 FAQ, no Annonce).

---

# Plan — Session 29 (Fiskesæt-for-begyndere enrichment + interactive Begyndersæt-vælger, 2026-06-02)

Same template (light chooser w/ per-category swapping product, trio, table, no Annonce). Keep all prose + AuthorProfile.

- [x] Imports: RelatedRow, AuthorProfile, DidYouKnow, TipBox, StatHighlight, GuideLink, AffiliateTrio, getProduct/formatPrice. No AdsenseBanner.
- [x] NEW interactive "Begyndersæt-vælger": 4 tabs — Put & Take / Kyst & mole / Fluefiskeri / Aborre & UL → specs (Stang, Hjul, Line, Bedst til) + note + swapping combo.
      Products: 504946 Okuma Outrax Combo (P&T, highlight) · 80873 Abu Tormentor2 Combo Sæt (kyst) · 66018 Daiwa D Trout Fluesæt (flue) · 77671 Fladen Furvux 1-5gr Combo (UL).
- [x] StatHighlight ("1.500 kr" — begynder-budget).
- [x] Comparison table: Spinnestang vs Fluestang som første grej (indlæring / anbefaling).
- [x] AffiliateTrio "Endegrejet til at komme i gang": SG Nails Micro Spoon Kit (502841, highlight) + Berkley Powerbait Grubs (30377) + Fladen Maxximus Cable Braid 150m (82489).
- [x] GuideLinks: put-take-fiskeri, ul-fiskeri, fiskestaenger.
- [x] FAQ expand 5 → 7 (combo-sæt vs samle selv + hvilket endegrej).
- [x] Build clean: 78 pages, all 7 productIds resolved (4 finder + 1 active + 3 trio + 2-row table + 7 FAQ, no Annonce).

---

# Plan — Session 30 (Fiskehjul enrichment + interactive Hjul-vælger, 2026-06-02)

NOTE: page is 3 levels deep (fiskeudstyr/fiskehjul/) → imports use ../../../ (not ../../../../).
Same template (light chooser w/ per-category swapping product, trio, table, no Annonce). Keep all prose + AuthorProfile.

- [x] Imports (../../../): RelatedRow, AuthorProfile, DidYouKnow, TipBox, StatHighlight, GuideLink, AffiliateTrio, getProduct/formatPrice. No AdsenseBanner.
- [x] NEW interactive "Hjul-vælger": 4 tabs — Kyst & havørred / Put & Take & let / Gedde, hav & store fisk / Fluefiskeri → specs (Hjultype, Størrelse, Bremse, Bedst til) + note + swapping product.
      Products: 501665 Shimano Nasci FD (kyst, highlight) · 77126 Daiwa 23 Ninja LT (P&T) · 503102 Abu Beast Spin (gedde) · 67111 Vision Hero #4/6 (flue).
- [x] StatHighlight ("Str. 3000" — allround kyst size).
- [x] Comparison table: Fastspolehjul vs Fluehjul (bremse / vigtighed / bedst til).
- [x] AffiliateTrio "Gør hjulet klar": Fladen Maxximus Cable Braid 150m (82489, highlight) + Westin Fluorocarbon Leader (78797) + Ardent Hjul Olie (46562).
- [x] GuideLinks: spinnestaenger, fluefiskestang, fiskesaet-for-begyndere.
- [x] FAQ expand 5 → 7 (hjulstørrelse + vedligehold).
- [x] Build clean: 78 pages, all 7 productIds resolved (4 finder + 1 active + 3 trio + 2-row table + 7 FAQ, no Annonce).

---

# Plan — Session 31 (Endegrej index enrichment + interactive Endegrej-vælger, 2026-06-02)

NOTE: 3 levels deep (fiskeudstyr/endegrej/) → imports ../../../. Same template. Keep all prose (incl. the H3 type-list) + AuthorProfile. No Annonce.

- [x] Imports (../../../): RelatedRow, AuthorProfile, DidYouKnow, TipBox, StatHighlight, GuideLink, AffiliateTrio, getProduct/formatPrice.
- [x] NEW interactive "Endegrej-vælger": 4 tabs by fish — Havørred / Regnbue (P&T) / Gedde & sandart / Torsk & hav → specs (Type, Vægt, Hvor, Teknik) + note + swapping lure.
      Products: 502997 SG Seeker ISP (havørred, highlight) · 34536 Mepps Aglia Black Fury (regnbue) · 76958 Westin Shadteez Slim 18cm (gedde) · 74338 Fladen Conrad Deep Water Jig 300gr (torsk).
- [x] StatHighlight ("Fisken først" — choose fish→form→endegrej).
- [x] Comparison table: Gennemløbsblink vs almindeligt blink (linemontering / mistede fisk / bedst til).
- [x] AffiliateTrio "Det der binder det hele sammen": Westin Fluorocarbon Leader (78797, highlight) + Mustad Barrel Swivel (500541) + Savage Gear Lure Box 3B (72453).
- [x] GuideLinks: gennemlobsblink, put-take-fiskeri, havorredfiskeri.
- [x] FAQ expand 5 → 7 (gedde/sandart endegrej + hvor meget at starte med).
- [x] Build clean: 78 pages, all 7 productIds resolved (4 finder + 1 active + 3 trio + 2-row table + 7 FAQ, kept H3 type-list, no Annonce).

---

# Plan — Session 32 (Torskefiskeri species page — light enrichment, 2026-06-02) — DONE

User: page is already good — just small design changes + interactive + relevant products. NOT a full rewrite. 3 levels deep (../../../).

- [x] Imports: dropped AdsenseBanner; added getProduct/formatPrice. Kept all existing components/prose.
- [x] NEW interactive "Torske-vælger" (by method): Jig / Blink & pirk / Pirk fra båd / Naturagn → specs (Agn, Vægt, Hvor, Teknik) + note + swapping product. Placed where page promises gear recs.
      Products: 72781 SG Gobster Shad (jig, highlight) · 82452 Fladen Wave Sweeper Pirk (blink) · 74338 Fladen Conrad Deep Water Jig 300gr (båd) · 503490 Fladen Torskeforfang (naturagn).
- [x] Small design: Jig vs Blink comparison table after the blink section; removed the "Annonce" AdsenseBanner.
- [x] Added finder + prey-table CSS to style block. Build clean: 78 pages, all 4 productIds resolved.

---

# Plan — Session 33 (Havørredfiskeri species page — light enrichment, 2026-06-02) — DONE

Page already rich (SeasonCalendar, DifficultyMeter, season carousel, 4 Affiliate cards, prey-table, no Annonce). Light touch: add interactive + relevant products. 3 levels deep.

- [x] Added getProduct/formatPrice import + agnFinder data. Kept everything else.
- [x] NEW interactive "Sæson-vælger" (agn by season) — uses distinct .agn-finder/.af-* classes to avoid clash with the existing .ss-* season carousel. Placed right after the carousel. Tabs Forår/Sommer/Efterår/Vinter → specs (Agn, Farve, Bedste tid, Teknik) + note + swapping lure.
      Products (all NEW, distinct from page's existing 4): 69925 SG Linethru Sandeel Nail (forår, highlight) · 502997 SG Seeker ISP (sommer) · 39782 Westin Salty (efterår) · 503581 Hansen SD Stripper (vinter).
- [x] Swapped sommer 72030 Westin D360° V2 → 502997 Seeker ISP to avoid feed mojibake (Â°) in product name.
- [x] Added .agn-finder/.af-* CSS. Build clean: 78 pages, all 4 productIds resolved, 0 mojibake.

---

# Plan — Session 34 (Reuse SeasonCalendar across all /guide-til-fisk/ species, 2026-06-02)

User: reuse the havørred calendar on the other species pages, adapted per species. Add to the 6 that lack it.

- [x] aborrefiskeri — peak Sep–Nov, good rest (year-round predator).
- [x] fladfisk-fiskeri — peak Aug–Oct, good spring–summer, poor winter.
- [x] geddefiskeri — peak Jan + Oct–Dec, poor warm summer / spring fredning.
- [x] regnbueorredfiskeri — peak cold months (P&T), poor høj-sommer.
- [x] sildefiskeri — peak Apr–May forårstræk + autumn run.
- [x] torskefiskeri — peak Jan–Mar + Nov–Dec, poor summer.
- [x] For each: imported SeasonCalendar (../../../), added const <art>Seasons[12], placed <SeasonCalendar> after the DifficultyMeter with species title/subtitle/note.
- [x] Build clean: 78 pages, fish-calendar-card renders on all 6 (+ existing havørred/hornfisk/makrel = 9 total).

---

# Plan — Session 35 (Fladfisk-fiskeri species page — enrichment + products, 2026-06-02) — DONE

Species page; had SeasonCalendar (added S34) but NO products despite promising stænger/forfang/agn. Same light template.

- [x] Imports: dropped AdsenseBanner; added AffiliateTrio + getProduct/formatPrice.
- [x] NEW interactive "Fladfisk-vælger" (by art): Skrubbe / Rødspætte / Pighvar / Ising → specs (Bedste agn, Bund, Dybde, Adfærd) + note + swapping product.
      Products: 79260 Hansen Fladfiskeforfang Blade (skrubbe) · 503157 Berkley Gulp Sandworm (rødspætte) · 72781 SG Gobster Shad (pighvar) · 79262 Hansen Fladfiskeforfang Bead (ising).
- [x] AffiliateTrio "Mit fladfiskegrej" (fills the 3 promises): 46104 Fladfiskeforfang (highlight) + 71693 Fladen Eco Superlite 11' stang + 505506 Pool 12 ormepumpe.
- [x] Small design: Skrubbe vs Rødspætte comparison table; removed AdsenseBanner.
- [x] Added rod-finder + prey-table CSS. Build clean: 78 pages, all 7 productIds resolved.

---

# Plan — Session 36 (Makrelfiskeri species page — enrichment + products, 2026-06-02) — DONE

Had SeasonCalendar; promised makrelforfang but showed no products. Same light template.

- [x] Imports: dropped AdsenseBanner; added getProduct/formatPrice.
- [x] NEW interactive "Makrel-vælger" (by metode): Blink / Makrelforfang / Spinner / Fra båd → specs (Agn, Vægt, Hvor, Teknik) + note + swapping product. Placed where page promises makrelforfang.
      Products: 63094 Fladen Scintillo (blink) · 36174 Wiggler Flasher Forfang (forfang) · 34536 Mepps Aglia Black Fury (spinner) · 55150 Fladen Djuphav Pirk 3-Pak (båd).
- [x] Small design: "Blink alene vs Blink + makrelforfang" table; removed AdsenseBanner.
- [x] Added rod-finder + prey-table CSS. Build clean: 78 pages, all 4 productIds resolved.

---

# Plan — Session 37 (Sildefiskeri species page — enrichment + products, 2026-06-02) — DONE

Had SeasonCalendar; promised sildeforfang/pirk but no products. Same light template.

- [x] Imports: dropped AdsenseBanner; added getProduct/formatPrice.
- [x] NEW interactive "Silde-vælger" (by situation): Forårssild (mole) / Høstsild (båd) / Torsk-bonus / Grumset vand → specs (Opsætning, Vægt, Hvor, Teknik) + note + swapping product. Placed where AdsenseBanner was (between forfang + pirk sections).
      Products: 79185 Darts Silverlyset Sildeforfang (forår) · 55150 Fladen Djuphav Pirk 3-Pak (høst/båd) · 503770 Hansen Herring NL 28gr (torsk-bonus) · 59984 Kinetic Sabiki Loaded Twister UV Rig (UV).
- [x] Small design: Forårssild vs Høstsild comparison table; removed AdsenseBanner.
- [x] Added rod-finder + prey-table CSS. Build clean: 78 pages, all 4 productIds resolved.

---

# Plan — Session 38 (Hornfisk species page — enrichment + products, 2026-06-02) — DONE

Had SeasonCalendar; promised blink/silkekrog/flåd but no products. Same light template. Feed has dedicated hornfisk SKUs.

- [x] Imports: dropped AdsenseBanner; added getProduct/formatPrice.
- [x] NEW interactive "Hornfisk-vælger" (by metode): Blink / Bobleflåd (med) / Silkekrog / Bombarda → specs (Agn, Krog, Hvor, Teknik) + note + swapping product. Placed where AdsenseBanner was.
      Products: 83129 SFG Hornfiskeblink Special (blink) · 65557 Fladen Bobleflåds Rig (flåd) · 35161 Silkekrogen til hornfisk (silke) · 42169 Lawson Bombarda Flydende (bombarda).
- [x] Small design: Silkekrog vs Trekrog comparison table; removed AdsenseBanner.
- [x] Added rod-finder + prey-table CSS. Build clean: 78 pages, all 4 productIds resolved.

---

# Plan — Session 39 (Regnbueørredfiskeri species page — enrichment + products, 2026-06-02) — DONE

Had SeasonCalendar; promised spinner/gennemløbsblink but no products. Same light template. On-the-nose products (page names Fidusen + Montana).

- [x] Imports: dropped AdsenseBanner; added getProduct/formatPrice.
- [x] NEW "Regnbue-vælger" (by metode): Powerbait(passivt) / Spinner / Gennemløbsblink / Flue → specs (Agn, Hvor i vandet, Bedst når, Teknik) + note + product. Placed at AdsenseBanner spot.
      Products: 503174 Pulz Bait Starter Kit Trout/Ørred · 34536 Mepps Aglia Black Fury · 502138 Westin Fidusen Ultimate · 65860 Unique P&T Montana Nymph.
- [x] Small design: Aktivt vs Passivt fiskeri table; removed AdsenseBanner.
- [x] Added rod-finder + prey-table CSS. Build clean: 78 pages, all 4 productIds resolved.

---

# Plan — Session 40 (Aborrefiskeri species page — enrichment + products, 2026-06-02) — DONE

Had SeasonCalendar; lists 3 agn (jig/spinner/orm) + flue but no products. Same light template.

- [x] Imports: dropped AdsenseBanner; added getProduct/formatPrice.
- [x] NEW "Aborre-vælger" (by agn): Jig/gummidyr / Spinner & blink / Orm / Flue → specs (Agn, Vægt/str, Teknik, Bedst når) + note + product. Placed at AdsenseBanner spot.
      Products: 79150 Gunki Revoltage RV-Driftfry · 34536 Mepps Aglia Black Fury · 30377 Berkley Powerbait Grubs · 505055 Fishmadman Woolly Bugger.
- [x] Small design: "De tre grundagn" table (Jig/Spinner/Orm → bedst når); removed AdsenseBanner.
- [x] Added rod-finder + prey-table CSS. Build clean: 78 pages, all 4 productIds resolved.

---

# Plan — Session 41 (Geddefiskeri species page — enrichment + products, 2026-06-02) — DONE. SPECIES SET COMPLETE.

Last species page. Had SeasonCalendar; named agn types + stressed wireforfang but no products.

- [x] Imports: dropped AdsenseBanner; added AffiliateTrio + getProduct/formatPrice.
- [x] NEW "Gedde-vælger" (by kunstigt agn): Wobler/jerk / Gummidyr / Spinner & blink / Flue → specs (Agn, Størrelse, Teknik, Bedst når) + note + product. At AdsenseBanner spot.
      Products: 82808 Daiwa Prorex Lazy Jerk · 76958 Westin Shadteez Slim 18cm · 68683 Mepps Aglia Longcast · 52734 Unique Geddeflue Tube.
- [x] AffiliateTrio "Det gedde-grej du ikke kan undvære" after the wireforfang DidYouKnow: 34650 Abu Geddeforfang (wire, highlight) + 82644 Westin Unhooking Plier XL (tang) + 82797 Daiwa Prorex Tough Jungle Net XL.
- [x] Removed AdsenseBanner. Added rod-finder CSS. Build clean: 78 pages, all 7 productIds resolved.

ALL 9 /guide-til-fisk/ species pages now have: SeasonCalendar + a chooser + products, no Annonce.

## SEO / GEO infrastructure (2026-06-08) — DONE
- [x] Audit on-page schema (already strong: Org/Person/WebSite/Article/Breadcrumb/FAQ/ItemList/speakable/canonical/OG)
- [x] Add `site: 'https://udeogfiske.dk'` to astro.config.mjs
- [x] Create public/llms.txt (curated llmstxt.org index, absolute URLs)
- [x] Create public/robots.txt (allow all, points to sitemap + llms.txt)
- [x] Create public/sitemap.xml (78 absolute URLs, trailing slashes)
- [x] Build clean (78 pages, all 3 files in dist/), dev server restarted on :4321

### Open / next session
- [ ] Migrate static sitemap → @astrojs/sitemap (auto-regenerates on build) — RECOMMENDED
- [ ] Optional: llms-full.txt (full article text dump)
- [ ] Reminder: sitemap.xml + llms.txt are hand-maintained — update on any route change
