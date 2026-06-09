# Ude og Fiske — Build Progress

**Last updated:** 2026-05-02 (Session 11 — Season cards redesigned as editorial spreads → horizontal carousel)
**Status:** 25 pages built. Havørredfiskeri page is now the showcase template — has SeasonCalendar + AuthorProfile + DifficultyMeter + 4 affiliate product cards + a 6-image food-items photo grid + a structured prey table + a 4-season horizontal carousel.

**Session 11 (2026-05-02 evening):** Iterated on the seasons section twice. First pass: replaced the 2×2 cards with editorial "magazine spread" full-width row cards — tinted hero panel left (display title, month-range pill, large translucent watermark icon, "Aktuel sæson" pulsing badge on the season matching today's date computed from `new Date().getMonth()`), white content panel right (lead + 2-col `<dl>` facts). Per-season palette via CSS custom properties. Second pass: turned that into a **horizontal carousel** using native CSS scroll-snap (`scroll-snap-type: x mandatory`) — cards `flex: 0 0 100%`, smooth swipe on touch, prev/next nav buttons that auto-disable at edges, dot indicators in season colours that stretch to a 28px pill when active, ~50 lines of inline JS to wire button/dot clicks and read scroll position. Initial scroll position is the current season's card (jumps via `requestAnimationFrame` after first paint). Buttons hide on screens ≤760px so swipe is the primary affordance.

**Session 10 (2026-05-02):** Built a full affiliate system on the havørred page using Fiskegrej.dk's product feed. New `src/lib/feed.ts` reads `data/fiskegrej-feed.xml` (21,352 products, moved out of `public/` for security) and exposes `getProduct(productId)` + `formatPrice()`. New `src/components/Affiliate.astro` is a refined product card ("Jeg anbefaler" tag, dark teal CTA → amber on hover, optional `image` + `photo` props for custom hero images). Four products placed contextually: **Abu Sölv AG1** (after Spinnestang H3), **Savage Gear Line Thru Sandeel** (after gennemløb favourites — uses user's `sandeel_preview.jpg` in photo mode), **Hansen SD Stripper** (end of Det Klassiske Blink), **Vision Meri** (end of Fluestang H3). All 4 carry `partnerid=29395`. Also restyled the "Havørredens fødeemner" section with a 6-card photo grid + responsive stacked-on-mobile prey table, and rebuilt "Hvordan opfører havørreden sig året rundt?" as 4 colour-coded season cards (spring=green, summer=amber, autumn=rust, winter=teal) with icon + month range + lead + `<dl>` facts.

**Next session focus:** Roll the new components onto the other 6 species pages — `<AuthorProfile>` on all (needs verbatim per-species testimonial from saved HTML), `<SeasonCalendar>` on Makrel + Hornfisk only (no live source for the others), `<DifficultyMeter>` where the live page has the Elementor widget. Then build remaining `/fiskeudstyr/` (6) → `/fisketure/` (3) → `/fiskepladser/` (3) sub-pages. Affiliate cards can be added to species pages where rod/lure recommendations make editorial sense.

---

## Completed Files

### Core
- `src/layouts/MainLayout.astro` — sticky header (3px primary top bar, logo + amber dot, nav, CTA), dark footer (`#071520`) with affiliate disclosure and 3-col grid, mobile nav toggle, `<head>` with canonical + OG + Schema.org `WebSite` JSON-LD
- `src/components/AdsenseBanner.astro` — "Annonce"-labeled `<ins class="adsbygoogle">` block

### Pages
- `src/pages/index.astro` — hero (92vh, `forside_hero.jpg`, animated pulse badge), 6 equal photo-background cards in 3x2 grid (260px height), single-card season guide that auto-highlights the current month via `new Date().getMonth()`
- `src/pages/fiskeguide/index.astro` — 11 articles (Put & Take, Fiskeri i å, På mole, På kysten, Fluefiskeri, UL-fiskeri, For børn, Fisketegn, Bombarda, Fra båd, Catch and Release)
- `src/pages/fiskeudstyr/index.astro` — 6 articles (Fiskestænger, Fiskehjul, Fiskeline, Agn og blink, Waders, Fiskenet)
- `src/pages/guide-til-fisk/index.astro` — Saltvand group (Torsk, Havørred, Fladfisk, Makrel, Sild, Hornfisk) + Ferskvand group (Regnbueørred), Adsense between groups
- `src/pages/fisketure/index.astro` — hero + answer capsule + 3 destination cards (Stevns, Isefjorden, Roskilde Fjord), photo-only overlay cards matching `/guide-til-fisk/`
- `src/pages/fiskepladser/index.astro` — 3 locations (København, Isefjorden, Mariager Fjord)

### Fiskeguide sub-pages (Session 3, 2026-04-22)
- `src/pages/fiskeguide/put-take-fiskeri/index.astro` — hero + answer capsule + article body (spinnere, powerbait, valg af sø), mid-article Adsense, "Læs også" row
- `src/pages/fiskeguide/fiskeri-paa-kysten/index.astro` — hero + capsule + long-form body with 5 species H3 sub-sections cross-linked to `/guide-til-fisk/` pages
- `src/pages/fiskeguide/fiskeri-i-aa/index.astro` — hero + capsule + body on åfiskeri, fisketegn og regler
- `src/pages/fiskeguide/fiskeri-paa-mole/index.astro` — hero + capsule + body with fladfisk (H3), torsk/sej, sild/hornfisk sections, cross-linked to 4 species guides

### Fiskeguide sub-pages (Session 4, 2026-04-22)
- `src/pages/fiskeguide/fluefiskeri/index.astro` — hero (reuses `fluefiskeri_card.jpg`) + capsule + article with H2s for flueliner, fluestænger, fluehjul, fluer, kasteøvelse + H3s for regnbueørred- og havørredfluefiskeri

### Fiskeguide sub-pages (Session 5, 2026-04-23) — secondary set complete
- `src/pages/fiskeguide/ul-fiskeri/index.astro` — hero `ul_fiskeri_hero.png` + capsule + article on UL stænger/hjul/liner + havørred/regnbueørred på UL grej
- `src/pages/fiskeguide/fiskeri-for-born/index.astro` — hero `born_hero.png` + capsule + article on nemmeste fiskeri for børn, børne fiskesæt, børn og naturen
- `src/pages/fiskeguide/fisketegn/index.astro` — hero `fisketegn_hero.png` + capsule + article on hvem skal have fisketegn, undtagelser, hvad pengene bruges til
- `src/pages/fiskeguide/bombarda-fiskeri/index.astro` — hero `bombarda_hero.png` + capsule + article on bombarda fiskemetode, agn, valg af flåd, kasteteknik, tips
- `src/pages/fiskeguide/fiskeri-fra-baad/index.astro` — hero `baad_hero.png` + capsule + article on fordele ved bådfiskeri, fladfisk fra skib, valg af agn
- `src/pages/fiskeguide/catch-and-release/index.astro` — hero `cnr_hero.png` + capsule + article on hvorfor C&R, DTU Aqua 2023 undersøgelse, bedste praksis, balance mellem bevaring og fiskeri

### Fluefiskeri promoted to featured card (2026-04-23)
- `src/pages/fiskeguide/index.astro` — Fluefiskeri moved from secondary mini-row to 5th featured photo card (chip "Teknik"). Answer capsule updated from "fire" → "fem mest populære fiskeformer".

### Inline species list → photo cards (2026-04-23)
- `src/pages/fiskeguide/fiskeri-fra-baad/index.astro` — the 6-item `<ul>` of catchable species replaced with a 3×2 photo card grid (4:3 aspect, photo bg + dark gradient overlay + title + arrow). Reuses existing `*_card.{png,jpeg}` images. Responsive 3 → 2 → 1 cols.

### Session 6 — "Læs også" redesign (2026-04-23, partial)
- `src/components/RelatedRow.astro` — new shared component. Photo-overlay cards (4:3, dark gradient, chip top-left, title + description bottom, white arrow circle). Emits its own `<section>` with subtle `#f8fafc` top-bordered background and `5rem` bottom padding so it stands apart from the article and the footer. Reuses existing images in `public/images/` — no new generation.
- `src/pages/fiskeguide/put-take-fiskeri/index.astro` — proof-of-concept. Related items now carry `image` + `alt` + `chip` fields, inline `.rel-grid` markup + ~70 lines of CSS removed, `<RelatedRow items={related} />` rendered outside `.pg-body`.

### Session 9 — Slug rename + SeasonCalendar/AuthorProfile components (2026-04-30)
- **Slug rename:** `/guide-til-fisk/havorred/` → `/guide-til-fisk/havorredfiskeri/` to match the live udeogfiske.dk URL. Renamed the directory and updated all 5 internal references (`src/pages/index.astro`, `src/pages/guide-til-fisk/index.astro`, `src/pages/guide-til-fisk/fladfisk/index.astro`, `src/pages/fiskeguide/fiskeri-fra-baad/index.astro`, `src/pages/fiskeguide/ul-fiskeri/index.astro`, `src/pages/fiskeguide/fiskeri-paa-kysten/index.astro`) plus the page's own canonical URL.
- **`src/components/SeasonCalendar.astro`** (new) — reusable 12-month season grid component. Props: `species` (str), `seasons` (`Array<'peak'|'good'|'poor'>` length 12), `note?`, `title?`, `subtitle?`. Modern data-viz design: white card with 3-color gradient strip on top edge, calendar SVG icon in a teal→indigo rounded square, pill-shaped legend chips, 12-column grid of cells (each shows month abbrev + 3-bar intensity meter + status text), auto-highlights the current month via `new Date().getMonth()` with amber ring + "Nu" pill in the corner, soft slate footer note with info icon. Responsive: 12 cols → 6 → 4. All scoped CSS.
- **`src/components/AuthorProfile.astro`** (new) — reusable byline card component. Props: `quote` (required, verbatim Danish testimonial from live page), with defaults `name="Aldin Glavas"`, `role="Lystfisker"`, `image="/images/aldin_glavas.png"`, `href="/om-mig/"`. Design: white card with vertical teal→amber gradient stripe on left edge, decorative amber quote-mark glyph, italic quote in dark slate, byline row with 52px circular avatar (double-ring shadow), name + uppercase role, chevron arrow. Whole byline row hovers → translates 2px right, name turns teal, arrow turns amber.
- **`public/images/aldin_glavas.png`** — author photo, 300×300, 137 KB. Pulled the WordPress thumbnail variant `1-13-300x300.png` (original was 5.6 MB, too heavy for a profile photo).
- **`src/pages/guide-til-fisk/havorredfiskeri/index.astro`** updated: imports both components, declares `havorredSeasons` array, renders `<AuthorProfile>` then `<SeasonCalendar>` between the answer capsule and the article body. Verbatim quote pulled from the live `<div class="elementor-testimonial-content">` block (the "kystens sølv" / "leopardbund" testimonial). Removed ~180 lines of dead inline calendar CSS now that the component owns those styles.
- **Verified season data extracted** via regex `[...html.matchAll(/<td class="(poor|good|peak)">/g)]` against each fetched HTML file. Only 3 of 7 species have the modern fish-calendar widget on the live site:
  - **Havørred:** poor poor good peak peak good poor poor good peak good poor
  - **Makrel:** poor poor poor poor good peak peak peak good poor poor poor
  - **Hornfisk:** poor poor poor good peak peak peak good poor poor poor poor
  - Torsk, Fladfisk, Sild, Regnbueørred have no live calendar source — do NOT fabricate; ship those pages without `<SeasonCalendar>`.
- **Memory logged:** `reference_uof_season_calendar_data.md` captures component prop signatures, the verified season data table, the no-calendar guardrail list, and the regex one-liner for future extraction.
- **Verified `astro build`** → 25 pages clean, no warnings.

### Session 8 — All 7 species pages 1:1 + automated live fetch (2026-04-30)
- **Wrote `content/_fetch.cjs`** — small Node script using `https` + browser User-Agent (`Mozilla/5.0 ... Chrome/120`) + redirect handling. Saves live HTML to `content/<slug>.html` so the existing `_extract.cjs` can walk it. Tested on torsk: HTTP 200, full article body extracted cleanly. Workflow is now `node _fetch.cjs <url> <slug>` → `node _extract.cjs <slug>.html` → write Astro page.
- **Discovered canonical species URLs** by fetching `/guide-til-fisk/` and grep'ing nav: `torskefiskeri/`, `havorredfiskeri/`, `fladfisk-fiskeri/`, `makrelfiskeri/`, `sildefiskeri/`, `hornfisk/`, `regnbueorredfiskeri/`. Also: live site has `aborrefiskeri/` and `geddefiskeri/` that the local index doesn't reference — left out of scope for now.
- **Rewrote Torsk page** (`src/pages/guide-til-fisk/torsk/index.astro`) — replaced the Session 7 paraphrase with verbatim H1 "Guide til torskefiskeri" + 8 H2 sections (Lidt om torsken, Hvordan fanger man torsk?, Torskefiskeri med jigs, Torskefiskeri med blink, Andet agn til torsk, Torskefiskeri fra båd, Hvornår kan man fange torsk?, Fredninger og mindstemål for torsk). Dropped: my fabricated "Nye regler 2024" section, my fabricated FAQ, all "Annonce i samarbejde med PriceRunner" widget paragraphs.
- **Rewrote Fladfisk page** — verbatim H1 "Fladfisk Fiskeri" + intro paragraphs + H2 sections: Udstyr til fladfisk fiskeri (incl. H3 Fiskestang), Fladfiskeforfang, Agn til fiskeri efter fladfisk, Gulp orme, plus H3 species sub-sections Skrubbe, Rødspætte, Pighvar, Ising, Tips til at fange fladfisk. Dropped: Berkley/Fladen/Kinetic Elementor product widgets (4 of them) but kept the prose intros that frame each (per Session 5 rule).
- **Built Makrel page** (`makrel/index.astro`) — verbatim H1 "Fang en Makrel – Guide til makrelfiskeri" + 6 H2 sections + H2 FAQ (4 Q/As converted to H3+P pairs). FAQ schema fed to MainLayout. Dropped: "Bedste Fisketider for Makrel" calendar-only section, "Fiskestang til makrelfiskeri"/"Abu Sölv AG1" affiliate widget pair, Annonce paragraphs.
- **Built Sild page** — verbatim H1 "Guide til sildefiskeri" + lead paragraphs + H2 Lidt om silden + H3 Fiskestang + H2 Hvordan fanger man sild?, Pirke til sildefiskeri, Hvornår kan man fange sild?, Tips og tricks til sildefiskeri. Dropped Annonce paragraphs.
- **Built Hornfisk page** — verbatim H1 + 6 H2 sections (Hornfisken - Lidt om den fantastiske fisk, Lidt om hornfisken, Hvordan fanger man hornfisk?, Hvor finder man hornfisken?, Fiskegrej til hornfiskfiskeri, Hornfisk på bobleflåd, Hornfisk på blink) + H3 Silkekrog + H3 Tips. Dropped: "Bedste Fisketider" calendar, Fiskestang/Okuma Wave Power Spin Combo product widget pair, Annonce paragraphs.
- **Built Regnbueoerred page** (`regnbueoerred/index.astro`) — verbatim H1 "Guide til regnbueørred fiskeri" + intro + H2 Hvordan fanger man regnbueørreder? (downgraded from H1 in source — duplicate H1 was an SEO bug) + 5 H3 sub-sections (Passivt fiskeri, Powerbait, Aktivt fiskeri, Spinner & Blink) + H2 Fluefiskeri efter regnbueørreder + 4 seasonal sub-sections (vinter/forår/sommer/efterår) + H3 Tips. Dropped: Berkley Powerbait product widget block, image-caption-only paragraphs, embedded affiliate listings.
- **Verified `astro build`** → 25 pages built cleanly, no warnings.

**Outstanding for next session:** Audit the existing category-index pages and `/fiskeguide/*` sub-pages for 1:1 fidelity — many were drafted before the verbatim rule was firmed up, so they likely need verification against fresh `_fetch.cjs` pulls.

### Session 7 part 2b — Havørred page rewritten 1:1 from live HTML (2026-04-24)
- User flagged the drafted havørred page didn't match udeogfiske.dk. Curl is firewalled and WebFetch summarizes, so the user saved the live page to `UoF/content/Havørredfiskeri i Danmark 2025 → Ultimativ Guide.html`.
- Wrote `UoF/content/_extract.cjs` (small node script): strips `<script>`/`<style>`/`<noscript>`, decodes entities, walks `<h1|h2|h3|p|li>` in source order and prints each block with its byte offset so nav/footer can be filtered out by range.
- `src/pages/guide-til-fisk/havorred/index.astro` rewritten so every article H2/H3 and paragraph is verbatim from the live page (Lidt om den fantastiske fisk, Hvordan fanger jeg havørreder?, Hvor finder man havørreden?, Værktøjer til at finde pladser incl. Google Maps / FCOO / Skråfoto, 5 Stærke Havørred-Spots på Sjælland, Fiskegrej, Blink & Gennemløbere, Fluestang, Havørred for nørder, Fødeemner, Vandtemperatur og salinitet, Årscyklus, De Forskellige Typer af Havørred ved Kysten, FAQ).
- H1 + hero subtitle updated to match the live page's framing ("Havørredfiskeri – Fiskeri efter havørred på kyst og fjord").
- Affiliate product widgets ("Abu Sölv AG1", "Vision Meri" Elementor cards) dropped — same rule Session 5 established.
- Astro design layer preserved: hero, answer capsule, mid-article `<AdsenseBanner />`, 2 `<figure class="art-figure">` nano-banana images at contextually relevant breaks, `<RelatedRow />`.
- Verified `astro build` → still 21 pages, no warnings.
- **Outstanding:** `torsk` + `fladfisk` still carry the Session 7 part 2 drafts and need the same 1:1 rewrite as soon as the user saves their live HTML to `UoF/content/`.

### Session 7 part 2 — First 3 `/guide-til-fisk/` species pages (2026-04-24)
- `src/pages/guide-til-fisk/havorred/index.astro` — hero (reuses `havørred_card.jpeg`) + capsule + article covering livscyklus, hvor findes havørreden, grej (spinnestang, fluestang, gennemløbsblink), fødeemner, årscyklus, vandtemperatur/salinitet, teknik, regler + mindstemål. `datePublished: 2024-07-14`.
- `src/pages/guide-til-fisk/torsk/index.astro` — hero (reuses `torsk_card.png`) + capsule + article covering 2024-reglerne (Østersø-forbud), om torsken, teknik med jigs/blink/naturligt agn, torsk fra båd (pirkefiskeri), sæson, fredning + mindstemål. `datePublished: 2024-11-23`.
- `src/pages/guide-til-fisk/fladfisk/index.astro` — hero (reuses `fladfisk_card.jpeg`) + capsule + article covering udstyr, fladfiskeforfang, agn (sandorm, børsteorm, Gulp), de 4 fladfiskearter (skrubbe, rødspætte, pighvar, ising) + tips. `datePublished: 2025-03-09`.
- **New inline-image pattern:** each page uses `<figure class="art-figure">` with 16:9 cover images + `<figcaption>`. Added `.art-figure` CSS to each page's inline `<style>`.
- **6 new images** generated via `/nano-banana` (photorealistic, 16:9 baked into prompt, PNG output):
  - `havorred_fight.png`, `havorred_closeup.png`
  - `torsk_boat.png`, `torsk_pirk.png`
  - `fladfisk_forfang.png`, `fladfisk_catch.png`
- **Verified:** `astro build` → 21 pages generated cleanly, all 3 new pages render.

### Session 7 part 1 — `RelatedRow.astro` rollout complete (2026-04-24)
- Migrated the remaining 10 `/fiskeguide/*` sub-pages: `fiskeri-paa-kysten`, `fiskeri-i-aa`, `fiskeri-paa-mole`, `fluefiskeri`, `ul-fiskeri`, `fiskeri-for-born`, `fisketegn`, `bombarda-fiskeri`, `fiskeri-fra-baad`, `catch-and-release`.
- Per page: added `image` + `alt` + `chip` fields to each `related` item, imported `RelatedRow`, moved `<RelatedRow items={related} />` outside `</section>` so the component's full-width tinted background renders correctly, deleted the old `.rel-heading`/`.rel-grid`/`.rel-card`/`.rel-title`/`.rel-desc`/`.rel-arrow` CSS blocks.
- Slug→image+chip mapping matches the table in `todo.md`.
- **Verified:** `astro build` succeeds — all 18 pages generated, no `.rel-*` references remain anywhere in `src/pages/fiskeguide/`.

### Session 6 — Schema.org JSON-LD across 18 pages (2026-04-23)
- `src/layouts/MainLayout.astro` — extended with 5 new optional props: `pageType` (`'website'|'article'|'category'|'about'`), `breadcrumbs`, `articleData`, `faq`, `itemList`. Layout assembles a single `@graph` JSON-LD block combining persistent entities (`Organization`, `Person` for Aldin Glavas, `WebSite` + SearchAction) with per-page entities (`WebPage`/`Article`/`CollectionPage`/`AboutPage` + optional `BreadcrumbList`, `FAQPage`, `ItemList`). Absolute URL helper, `@id` cross-references throughout.
- `og:type` meta now derives from `pageType` (switches to `"article"` on sub-pages).
- **Per-page props added:**
  - Homepage — none (defaults suffice: Organization + Person + WebSite + WebPage)
  - 5 category indexes — `pageType="category"`, breadcrumbs, itemList (derived from existing arrays)
  - 11 `/fiskeguide/*` sub-pages — `pageType="article"`, 3-level breadcrumbs, `articleData` (headline + hero image + `datePublished` spread naturally across 2024-06 → 2026-02), `faq` pulled from the existing answer-capsule
  - `/om-mig/` — `pageType="about"`, breadcrumbs
- **Verified on dev server** — all 4 archetypes render correct `@graph`. Article page includes Article + BreadcrumbList (3 items) + FAQPage (1 Q/A with HTML `<strong>` preserved in answer text) linked to the shared Organization/Person/WebSite via `@id`.
- **For future pages:** pass the right props to `<MainLayout>` — schema follows automatically. No separate components to remember.

### Images in `public/images/`
- `forside_hero.jpg` (homepage hero)
- Species cards: `havørred_card.jpeg`, `fladfisk_card.jpeg`, `regnbueørred_card.jpg`, `hornfisk_card.png`, `torsk_card.png`, `sild_card.png`, `makrel_card.png`
- Featured-guide cards: `molefiskeri_card.jpg`, `fluefiskeri_card.jpg`, `aa_fiskeri.jpg`, `put_and_take_fiskeri.jpg`, `mole_fiskeri.jpg`, `kyst_fiskeri.jpg`
- Featured sub-page heroes: `put_take_hero.png`, `kystfiskeri_hero.png`, `aafiskeri_hero.png`, `mole_hero.png`
- Secondary sub-page heroes (Session 5): `ul_fiskeri_hero.png`, `born_hero.png`, `fisketegn_hero.png`, `bombarda_hero.png`, `baad_hero.png`, `cnr_hero.png`

---

## Design System

**Colors**
- Primary (teal/deep ocean): `#0d4a5e`
- Accent (warm amber): `#c47d0a`
- Text: `#111827`
- Muted: `#6b7280`
- Surface: `#f8fafc`
- Border: `#e5e7eb`
- Footer bg: `#071520`

**Typography**
- Font: Inter, system-ui, sans-serif
- Page title (`.pg-title`): `clamp(2rem, 5vw, 3rem)`, weight 700, letter-spacing `-0.03em`
- Subtitle (`.pg-sub`): `1.0625rem`, weight 300
- Article title (`.art-title`): `1.125rem`, weight 600

**Category index template pattern (reuse for every new index page)**
- `.pg-hero` teal bg `#0d4a5e`, padding `3.5rem 0 3rem`
- `.pg-ctn` max-width 860px, padding `0 1.5rem`
- `.pg-bc` breadcrumb ("Forside › Section")
- `.pg-intro` with 1:1 WordPress Danish text, bottom border divider
- `.art-list` with `.art-item` rows, `.art-link` containing title + desc + meta + arrow SVG
- Hover: `padding-left` slides 0.5rem, arrow shifts `translateX(4px)`, title color → primary
- `<AdsenseBanner />` placed at the end (or mid-page for long lists)

---

## Next Session (Session 7 part 3) — Priorities

1. **Finish the last 4 `/guide-til-fisk/` species pages:** Makrel, Sild, Hornfisk, Regnbueørred. Same page pattern as havørred/torsk/fladfisk (schema props + RelatedRow + 2 nano-banana in-content images + reuse existing `X_card.*` as hero).
2. **Continue building remaining pages** (`/saesonguide/` deferred): `/fiskeudstyr/` equipment (6) → `/fisketure/` trip reports (3) → `/fiskepladser/` location (3).
3. **Post-deploy:** validate schema via https://validator.schema.org and Google's Rich Results Test once the site is reachable on the public domain.

See `todo.md` for the full plan and breakdown.

---

## Pending for Future Sessions

- 4 remaining `/guide-til-fisk/` species sub-pages (Makrel, Sild, Hornfisk, Regnbueørred) — high inbound link value
- All 6 `/fiskeudstyr/` equipment sub-pages
- `/fisketure/` trip reports (3 sub-pages — currently the index links to non-existent slugs)
- All 3 `/fiskepladser/` location sub-pages
- `/saesonguide/` landing — deferred (homepage CTA still 404s)
- `english` content — intentionally excluded for now, revisit later

---

## How to Resume

```bash
cd "c:/Users/Aldin/Desktop/Aldin/Websites/Claude Code/UoF"
npm run dev
```
Open `localhost:4321` and check the homepage + all 5 category indexes render correctly.

**Content rule:** always reference the live WordPress site (udeogfiske.dk) and copy Danish text 1:1. Do not paraphrase.

**Template rule:** when building new sub-pages, start from an existing category-index file and adapt — keeps design consistent.

---

## User Preferences (do not forget)

- **No glassmorphism, no heavy gradients.** Clean, modern, minimalist.
- **Simple changes only.** Per `CLAUDE.md`: each change should impact as little code as possible.
- **Short high-level explanations** after each change.
- Leave out any `english` WordPress pages for now.
- Build for SEO (Core Web Vitals target ~100) — inline CSS, no external CSS files, no unnecessary JS.
