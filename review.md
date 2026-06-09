# Review log

## 2026-05-25 — /fiskeguide/fluefiskeri/: full SEO + UX optimisation (Session 48)

Turned a text-only beginner guide into a scannable, component-rich, internally-linked page.
All existing Danish prose meaning kept; only restructured + enriched. First-person voice throughout.

**On-page SEO / structure**
- Reworded 4 plain H2s into natural Danish question headings (AI-Overview citability): "Fluestænger" → "Hvilken fluestang skal du vælge?", "Fluehjul" → "Hvor vigtigt er fluehjulet?", "Fluer til fluefiskeri" → "Hvordan vælger du de rigtige fluer?", "Starte med fluefiskeri" → "Hvordan kommer du i gang med fluefiskeri?". All 6 H2s are now questions.
- Expanded the MainLayout `faq` prop 1 → 4 Q&As (fluestang for begyndere, flueline for begyndere, er det svært). Renders 4 FAQPage Question entities.

**Tables (2, reusing `prey-table` style)**
- Flueline-tabel (Floating / Intermediate / Sinking → placering i vandet + bedst til) replaces the old 3-bullet list + 4 description paragraphs.
- Fluestang-klasse-tabel (1–4 / 6–7 / 8–10 → type & længde + bedst til) summarises the dense class paragraph.

**Interactive / rich components**
- `DifficultyMeter` (value 70, "Delvis svær") at the top — sets beginner expectations.
- 2× `TipBox` — one-line first-buy line advice; field-practice + bagkast safety tip.
- 1× `DidYouKnow` — fluestang alsidighed (fladfisk på flue).

**Commerce + internal linking** (page previously said "se de stænger jeg anbefaler herunder" + "vores guide til valg af fluestænger" but had NO products and NO link)
- 3 anchored `Affiliate` blocks: Guideline Coastal Classic WF Slow Intermediate (504374) in the line section, Pool 12 Powerfly Combo (505505) in the rod section, Unique Kyst Fluesortiment (504673) in the fly section. 9 partnerid=29395 links in built HTML.
- 4 `GuideLink` cards: the real fluestang guide (/fiskeudstyr/fiskestaenger/fluefiskestang/), fluefiskeri-i-put-take, regnbueørredfiskeri, havørredfiskeri.

**Images** (nano-banana, fish-free per [[feedback_uof_nano_banana_no_fish]])
- 3 new JPGs in /public/images/: fluefiskeri_kast (casting silhouette at dawn), fluefiskeri_flueboks (open fly box), fluefiskeri_hjul (reel + WF line on driftwood). Placed as inline `<figure>` in the casting, fly and reel sections with first-person figcaptions.

**Wrap-up** — added art-figure + prey-table CSS to page `<style>`. Build clean: 78 pages, all 3 affiliate IDs validated. Verified counts in dist: 2 tables, 4 guidelinks, 3 figures, 2 tipboxes, 1 dyk, 1 difficulty meter, 4 FAQ questions.

## 2026-05-25 — /fiskeri-paa-kysten/: prettier end-of-section guide links

The five "Fiskeri efter …" sections each ended with a plain inline `<a>` ("Læs … guiden …") buried in the prose. Pulled these out into a styled CTA.

- New reusable component `src/components/GuideLink.astro` — a bordered link card with a book icon (left), bold title + short descriptor, and an arrow (right). Teal default, amber (#c47d0a) hover with lift + arrow shift, matching the site's accent system.
- Replaced the inline link in all 5 sections (fladfisk, torsk, sild, hornfisk, havørred). Each paragraph now ends cleanly, followed by a `<GuideLink>`. Descriptors carry the original CTA copy ("Bliv bedre til at fange …", "Lær hvilket agn der er bedst").
- Build verified: 78 pages, no errors; all 5 cards present in built HTML.

## 2026-05-25 — /fiskeri-paa-kysten/: kastevægt + W3 Powercast affiliate

- Changed the fladfiskeforfang spinnestang recommendation from **50-100 g → 20-80 g** kastevægt.
- Added the **Westin W3 Powercast 3rd** (`<Affiliate productId="503715">`, same product as the mole page) after the equipment paragraphs. Note rewritten for the coastal context (fladfiskeforfang + lettere spin, havørred i brændingen) instead of the mole-specific copy. Imported `Affiliate` on this page.
- Build verified: 78 pages, no errors (affiliate ID validated at build).

## 2026-05-25 — /fiskeri-paa-kysten/: species list → image cards

Converted the plain `<ul>` of catchable species into a grid of small image cards in `src/pages/fiskeguide/fiskeri-paa-kysten/index.astro`:

- **8 cards** in a 4-col grid (2-col on mobile): Fladfisk, Torsk, Sej, Hornfisk, Makrel, Sild, Havørred, Laks — original order kept. Fladfisk card carries its parenthetical (skrubber, rødspætter, isinger) as a subtitle.
- **Linking:** the 6 species with a guide page link to it (`/guide-til-fisk/...`); Sej and Laks render as non-clickable `<div>` cards (no guide exists). Confirmed in built HTML.
- **Images:** reused existing `_card` images for the 6 (torsk, havørred, fladfisk, makrel, sild, hornfisk). Generated **2 new fish-free images** for Sej (`sej_card.png` — pirk lure on mole edge) and Laks (`laks_card.png` — fly rod + salmon fly on river stones) via nano-banana, per the standing note that AI-rendered fish read as fake. User chose fish-free context shots over AI fish.
- Card styling is a compact variant of the `guide-til-fisk` card pattern, scoped to this page (`.fish-grid` / `.fish-card`).
- Build verified: 78 pages, no errors.

## 2026-05-25 — /fiskeri-paa-mole/: remove ad + bait table

Two small edits to `src/pages/fiskeguide/fiskeri-paa-mole/index.astro`:

- **Removed the "Annonce" spot** — deleted the `<AdsenseBanner />` (the mid-article ad block that rendered the "ANNONCE" label) and its now-unused import.
- **Converted the bait list to a table** — the "Mine fortrukne agn er i denne rækkefølge" `<ul>` (Børsteorm, Sandorm, Regnorm, Sild, Rejer) is now a 3-column table: **Agn / Bedst til / Hvorfor jeg bruger det**. Kept the original ranking order and first-person voice ("Min favorit", "Min nødløsning"). Each row notes which fish the bait suits (fladfisk, torsk, sej, hornfisk).
- Reused the existing `prey-table` styling (matching `guide-til-fisk/havorredfiskeri`), including the mobile stacked-card layout, copied into this page's `<style>` block.
- Build verified: 78 pages built, no errors.

## 2026-05-24 (Session 47) — Strong closer for /fiskeri-paa-mole/

After four `<Affiliate>` insertions over Sessions 44-46, the page ended abruptly on the Silkekrogen card. Added a proper closer.

### Change to `src/pages/fiskeguide/fiskeri-paa-mole/index.astro`

Inserted between the final `<Affiliate>` (Silkekrogen) and the closing `</article>`:

- **New H2 — `<h2>Hvad skal du have styr på inden du kører til molen?</h2>`** — Q&A-format per [[feedback_uof_qa_h2_format]]. Stands out from the existing statement-style H2s (Fiskeudstyr til molefiskeri / Torsk og sej / Sild og hornfisk) because it serves a different purpose: a wrap-up checklist, not a sub-topic.
- **Intro paragraph** — "Udstyret er på plads — så er der bare et par praktiske ting jeg altid lige tjekker af, inden jeg sætter mig i bilen…" Bridges from gear coverage to practicalities.
- **5-bullet pre-trip checklist:**
  - **Fisketegn** — 18-65 years, fisketegn.dk, bøden vs. årstegn framing.
  - **Tidevand og vind** — fladfisk and the pålandsvind vs. østenvind effect on activity.
  - **Fredningsperioder** — torsk gydningsfredning + Fiskepleje.dk reference.
  - **Pandelampe** — rød-lys-tilstand for torsk i skumringen (preserves night vision, doesn't spook fish).
  - **Kølig fangst** — sild/fladfisk degrade fast in heat.
- **Closing paragraph** — first-person wrap ("For mig er molefiskeri det jeg vender tilbage til hver eneste sæson…") + a "start with fladfisk/sild if new" recommendation + two internal links: [`/guide-til-fisk/`](src/pages/guide-til-fisk/) (species fiskeguide) and [`/saesonguide/`](src/pages/saesonguide/index.astro) (sæsonkalender). Both routes verified to exist.

### Editorial / memory compliance

- **Q&A H2** per [[feedback_uof_qa_h2_format]] for AI Overviews citability.
- **First-person Danish** ("jeg altid lige tjekker", "For mig er molefiskeri") per [[feedback_uof_affiliate_voice]] — extends the voice into the editorial closer, not just affiliate notes.
- **No fabricated external URLs** per user's standing instruction — fisketegn.dk and Fiskepleje.dk mentioned as plain-text references only (both are well-known Danish public authorities, safe to name-drop without inventing exact paths).
- **No new Affiliates** — gear density was already at 4 per page; the closer is editorial/practical, not commercial. Resists the temptation to add a Petzl pandelampe link.

### Build + spot-check

- Build passed in 7.32 s (78 pages).
- Rendered `/dist/fiskeguide/fiskeri-paa-mole/index.html` confirmed to contain the new H2 ("styr på inden du kører til molen"), all 5 bullet keywords (Fisketegn, Tidevand, Fredningsperioder, Pandelampe, Kølig fangst), and the closing "find arten i fiskeguiden" link.

### Page is now complete for Sessions 44-47

Final structure of `/fiskeguide/fiskeri-paa-mole/`:

1. Answer-capsule — "Hvad kan du fange fra molen?"
2. Intro paragraphs.
3. **`<h2>Fiskeudstyr til molefiskeri>`** — rod spec (7-9 fod) + **Affiliate: Westin W3 Powercast 3rd** (S44).
4. **`<h3>Fladfisk fra mole>`** — figure + **Affiliate: Fladen Butt Lure Deluxe** (S45) + technique paragraphs.
5. AdsenseBanner.
6. **`<h2>Torsk og sej fra mole>`** — technique + figure paragraphs.
7. **`<h2>Fiskeri efter sild og hornfisk>`** — sild paragraphs + **Affiliate: Søvik 209** (S46) + hornfisk bridge + **Affiliate: Silkekrogen** (S46).
8. **`<h2>Hvad skal du have styr på inden du kører til molen?>`** (S47) — pre-trip checklist + closing paragraph routing to `/guide-til-fisk/` and `/saesonguide/`.
9. `<RelatedRow>` — Kyst, Put & Take, Å.

Page now has a clear narrative arc: what can you catch → gear by section → final practicalities → next steps.

---

## 2026-05-24 (Session 46) — Added Søvik 209 + Silkekrogen Affiliates to Sild/Hornfisk-section

Same page, the `<h2>Fiskeri efter sild og hornfisk>` section. Two products: a sildeforfang (squarely on-topic) and a silkekrog for hornfisk (which the section barely covers — handled with a bridge).

### Changes to `src/pages/fiskeguide/fiskeri-paa-mole/index.astro`

- **Sild Affiliate** — `<Affiliate productId="46269" />` (Søvik Sildeforfang 209, 25 kr) inserted right after the "Den nemmeste måde at fange sild på…" paragraph that describes a 4-flue + blylod sildeforfang. Note: *"Det er det forfang jeg griber efter når silden begynder at stå på molen — solidt bundet, og fluerne holder farve gennem hele forårssæsonen."*
- **Hornfisk bridge paragraph** — new 2-sentence paragraph inserted between the sild closer (line 161) and the hornfisk Affiliate: *"Når hornfisken kommer i sit forårstræk, skifter jeg fra sildeforfang til silkesnor. Hornfiskens beneret kniv tager dårligt en almindelig krog — silkesnoren snører sig i stedet om tænderne, og det er det enkleste rig der virker for mig."* Kept timing soft ("forårstræk", not specific months) per [[feedback_uof_content_workflow]] discipline against fabricating specifics. The "no hook, beak tangles in strands" mechanic is well-established Danish hornfisk lore.
- **Hornfisk Affiliate** — `<Affiliate productId="35161" />` (Silkekrogen, til hornfisk., 19,75 kr). Note: *"Min go-to til hornfisk — uden krog, men med silkestrenge der snører sig om tænderne. Billigt, virker, og du undgår at skulle krogfjerne en spruttende hornfisk."*

### Product wiring

- Søvik 209: `produktid="46269"`, `vareurl` ends `sovik-sildeforfang-209.html` — matches user URL exactly. Brand renders as "Søvik" (feed loader's `latin1` decoding handles the Ø correctly).
- Silkekrogen: `produktid="35161"`, `vareurl` ends `silkesnoren-til-hornfisk.html` — matches user URL exactly. Feed has no brand value, so the brand line on the card will be empty (no styling regression — `Affiliate.astro` just renders an empty `<p class="aff-brand">`).
- Build passed in 5.95 s (78 pages) — both productIds validated by `getProduct()` per [[reference_uof_affiliate_validation]].

### Voice / memory compliance

- First-person Danish ("Jeg griber", "min go-to", "for mig") per [[feedback_uof_affiliate_voice]].
- Notes kept to 1-2 sentences in line with the previous three affiliates on this page.

### Spot-check

Rendered `/dist/fiskeguide/fiskeri-paa-mole/index.html` confirmed to contain:
- `<aside class="aff" aria-label="Anbefalet produkt: Søvik Sildeforfang 209">` with the correct partner-ads `vareurl`.
- `<aside class="aff" aria-label="Anbefalet produkt: Silkekrogen, til hornfisk.">` immediately after the new hornfisk bridge paragraph.

### Page now totals 4 `<Affiliate>` cards

1. Westin W3 Powercast 3rd (Session 44, Fiskeudstyr-section, rod)
2. Fladen Butt Lure Deluxe (Session 45, Fladfisk-section, forfang)
3. Søvik Sildeforfang 209 (Session 46, Sild/Hornfisk-section, sildeforfang)
4. Silkekrogen, til hornfisk. (Session 46, Sild/Hornfisk-section, silkekrog)

Each anchored to text that directly describes the product type. Density (~1 per H2/H3 sub-section) feels right for a buyer's-guide page; worth re-evaluating if a future session pushes past 5-6.

---

## 2026-05-24 (Session 45) — Added Fladen Butt Lure Deluxe Affiliate to Fladfisk-section

Same page as Session 44. User wanted a second `<Affiliate>` block inside the `<h3>Fladfisk fra mole>` sub-section, this time for a terminal-tackle item (the actual forfang the article describes).

### Change to `src/pages/fiskeguide/fiskeri-paa-mole/index.astro`

- **Affiliate card** — `<Affiliate productId="77678" />` inserted directly after the `<figure>` of the fladfiskeforfang and before the "Man kan fiske fladfiskeforfanget på to forskellige måder…" paragraph. Strongest visual context (reader is already looking at a forfang).
- Note in first-person Danish, "buy vs tie your own" framing — matches the 40 kr terminal-tackle price point (less spec-driven than the W3 Powercast rod note from Session 44): *"Vil du ikke binde dit eget forfang, er Fladens Butt Lure Deluxe min go-to — to forskudte kroge, fluorescerende perler og bom er præcis det rig jeg selv kaster langs molen efter skrubber og rødspætter."*

### Product wiring

- Used `productId="77678"` (base variant — `vareurl` ends `fladen-butt-lure-deluxe-fladfiskeforfang-med-bom.html`, exactly the URL user provided). Brand Fladen, 39,95 kr, in stock.
- Build passed in 5.09 s (78 pages) — productId validated by Affiliate.astro's `getProduct()` per [[reference_uof_affiliate_validation]].

### Voice / memory compliance

- First-person ("min go-to", "jeg selv kaster") per [[feedback_uof_affiliate_voice]].
- Note kept to one sentence in line with the Session 44 W3 Powercast note.

### Spot-check

Rendered `/dist/fiskeguide/fiskeri-paa-mole/index.html` confirmed to contain `Fladen Butt Lure Deluxe` and the bare `fladen-butt-lure-deluxe-fladfiskeforfang-med-bom` slug (the affiliate `vareurl`).

---

## 2026-05-24 (Session 44) — Added Westin W3 Powercast 3rd Affiliate to /fiskeri-paa-mole/

User wanted an inline affiliate recommendation in the "Fiskeudstyr til molefiskeri" section, plus a one-word spec widening.

### Changes to `src/pages/fiskeguide/fiskeri-paa-mole/index.astro`

- **Frontmatter import** — added `import Affiliate from '../../../components/Affiliate.astro';` (sits between `AdsenseBanner` and `RelatedRow` imports).
- **Rod spec widened** — paragraph under `<h2>Fiskeudstyr til molefiskeri</h2>` now reads "En fiskestang i **7-9 fods** klassen…" instead of "En fiskestang i 9 fods klassen…". One-word change; rest of the sentence (line 5 kg+, lose your fish etc.) unchanged.
- **Affiliate card** — `<Affiliate productId="503715" />` inserted directly after that paragraph and before `<h3>Fladfisk fra mole</h3>`. Note is spec-driven per user pick (not anecdotal): *"Min anbefaling i 7-9 fods klassen er W3 Powercast 3rd — kastevægten rammer tungere blylodder og pirke fra molen, og blanken har rygraden til at klare to fisk på samme forfang uden at klage."*

### Product wiring

- Used `productId="503715"` (base variant — `vareurl` ends `westin-w3-powercast-3rd.html`, exactly the URL user provided). Two sibling produktids (503713, 503714) point at the same product page but with `?169=` size variant suffixes; 503715 keeps the link clean.
- Affiliate ID `partnerid=29395` is baked into the feed's `vareurl` via `partner-ads.com`, so it's preserved automatically — no manual ID handling needed.
- Build passed in 4.94 s (78 pages) — Affiliate.astro throws on unknown productId at SSR, so the green build proves 503715 is wired up correctly per [[reference_uof_affiliate_validation]].

### Voice / memory compliance

- First-person Danish ("Min anbefaling") per [[feedback_uof_affiliate_voice]] — no "Aldins" framing.
- Spec-driven note kept under 2 sentences in line with other on-site Affiliate notes (e.g. Westin Jätte, W2 Powerstick on the Westin producent page).

### Spot-check

Rendered `/dist/fiskeguide/fiskeri-paa-mole/index.html` confirmed to contain `7-9 fods klassen`, `Westin W3 Powercast 3rd`, and `westin-w3-powercast-3rd` (the affiliate `vareurl`).

---

## 2026-05-22 (Session 43b) — Swapped fish-containing mole figures for fish-free versions

User feedback after Session 43: the AI-rendered fish (skrubbe + sild) didn't read as fully realistic. Offered the choice "make them more realistic, or only use images without fish" — user picked the fish-free route, which is also the safer one (AI image models still struggle with fish anatomy: extra fins, wrong eye placement, scale pattern artifacts).

### Replacements

- **`mole_fladfisk.jpg`** — now shows the fladfiskeforfang itself laid out on wet concrete: two offset hooks on droppers, small fluorescent orange/red bead attractors, teardrop blylod, with a pile of dark børsteorm and an open plastic bait box beside it, rod butt + line in upper corner, photographer's boot at the bottom edge. (273 KB, q82)
- **`mole_sild.jpg`** — now shows a sildeforfang held vertically in hand against the harbor: 5 colored feathered hooks (red/orange/green/blue/white) with a lead sinker, soft-blurred mole + granite + moored trawler + lamppost behind. (95 KB, q82)
- **`mole_torsk.jpg`** — kept as-is from Session 43 (was already fish-free: orange pirk held in fingers against blurred harbor backdrop).

### Figcaption + alt-text rewrites

Captions updated to match the new content (now about the gear/rig, not the catch):
- *"Mit fladfiskeforfang klar på molen med en stak børsteorm ved siden af — sådan ser min standardopsætning ud, lige inden jeg agner op."*
- *"Mit sildeforfang lige inden første kast — fluerne i grøn, rød og hvid er dem jeg griber først efter når silden står på molen."*

Alt text rewritten to describe rig components accurately for accessibility.

### Build

`npm run build` clean — 78 pages, 4.60 s.

### Lesson

For UoF figures going forward, **prefer fish-free smartphone shots** (gear in hand, rigs on the mole, tackle box close-ups, harbor/landscape with rods set up) over AI-rendered fish. Fish anatomy is still the most reliable "AI tell" in photorealistic generation. If a fish must appear, prefer water-blurred underwater shots or fish-from-far/silhouette compositions where anatomy detail isn't load-bearing — never a close-up hero shot of a single fish on concrete.

---

## 2026-05-22 (Session 43) — 3 nano-banana smartphone-style figures inline in fiskeri-paa-mole

User asked for inline images on `/fiskeguide/fiskeri-paa-mole/` generated via `/nano-banana`, with explicit direction: *"very realistic like it is taken from a mobile phone during a fishing trip"*. Generated 3 photorealistic candid-smartphone-style images — one per major section — and placed them between paragraphs to break up text walls.

### Images generated

- **`/images/mole_fladfisk.jpg`** (234 KB, 1024×1024) — Freshly caught skrubbe on wet grey mole concrete with a small pile of dark børsteorm beside it, photographer's wet rubber boots visible at bottom of frame, rod/reel in upper corner. Overhead POV.
- **`/images/mole_torsk.jpg`** (109 KB, 1024×1024) — Bright orange pirk lure held up between thumb and index finger, moored fishing trawlers and granite mole blocks soft-blurred behind, late-afternoon golden hour light.
- **`/images/mole_sild.jpg`** (199 KB, 1024×1024) — Sildeforfang being pulled vertically out of dark harbor water with 3 silver sild dangling/dripping, yellow plastic bucket in lower frame, sharp spring daylight on wet scales.

All 3 generated with `gemini --yolo "/generate '<long candid-phone prompt>' --styles=photorealistic"`. Prompts deliberately leaned into "candid mobile phone snapshot", "slightly imperfect framing", "POV from the angler's own phone" to avoid the staged-product look. Each PNG → JPG q85 via PIL (q78 for fladfisk to stay under ~250 KB). Originals retained in `nanobanana-output/` for re-export.

### Placement

Inline figures using existing `.art-figure` pattern from put-take-fiskeri (which the mole page didn't yet have — copied the CSS block over so the page renders them with proper 16:9 crop, rounded corners, and figcaption):

- **Fladfisk fra mole** — figure placed after the "børsteorm og sandorm" intro paragraph, before the active-vs-passive technique paragraph
- **Torsk og sej fra mole** — figure placed after the "blink i orange/rød er at foretrække" paragraph, before the passive-fishing paragraph
- **Fiskeri efter sild og hornfisk** — figure placed after the "50-100 sild i løbet af kort tid" paragraph, before the sildeforfang explanation

Each figcaption written first-person Danish ("En af mine skrubber fra sidste tur…", "Min favorit-pirk lige inden første kast…", "Tre sild på samme tur op…") per [feedback_uof_affiliate_voice]. Alt text describes the visual content honestly for accessibility.

### Files changed

- **new:** `public/images/mole_fladfisk.jpg`, `public/images/mole_torsk.jpg`, `public/images/mole_sild.jpg` (542 KB total)
- **edited:** `src/pages/fiskeguide/fiskeri-paa-mole/index.astro` — 3 `<figure>` blocks inserted + `.art-figure` CSS appended to `<style>` block

### Build

`npm run build` clean — 78 pages, 4.36 s. All three `<img src="/images/mole_*.jpg">` references confirmed in rendered HTML.

### Discovered

- `--aspect` flag still not supported by nanobanana v1.0.10 — images come out 1024×1024 regardless. CSS `aspect-ratio: 16 / 9 + object-fit: cover` on `.art-figure img` handles the landscape crop. Same finding as Session 41.
- The mole page didn't have `.art-figure` CSS — only put-take did. Worth promoting this to a shared global stylesheet if more pages will use inline figures (sild/hornfisk/sand-and-coastline pages are natural candidates next).

---

## 2026-05-22 (Session 42) — ProductReview component + ABU Tormentor2 Combo Sæt on put-take-fiskeri

User asked for a "review component" recommending the Abu Tormentor2 Combo Sæt (`https://fiskegrej.dk/abu-tormentor2-combo-saet.html`) at the end of the *Hvordan fisker jeg i en Put & Take sø?* section. After confirming the user wanted a Full review card (vs. reusing the plain `<Affiliate>` card), built a new dedicated component instead of overloading the existing affiliate cards.

### New component: `src/components/ProductReview.astro`

A deeper, more editorial-feeling product block — visually distinct from `<Affiliate>` and `<AffiliateTrio>` so a single "this is what I really recommend" pick reads as a review, not just another card.

Structure:
- **Top ribbon** (dark teal gradient): "MIN ANBEFALING" label + 5-star rating with proper half-star SVG fill (via `<linearGradient>`) and numeric "4.5/5"
- **Product photo** (left, 280px square, contained on subtle teal radial bg — same treatment as `<Affiliate>`)
- **Brand → name → headline verdict** (italic serif pull-quote with orange left-border, matching the `aff-note` styling pattern)
- **2-3 sentence first-person review** paragraph
- **Pros / Cons grid** ("Det jeg kan li’" + "Det du skal vide" — two-col on desktop, stack on mobile, with green ✓ and amber ✗ icons)
- **Stock/delivery chips** (reused exactly from Affiliate)
- **Price + CTA** (reused exactly from Affiliate, supports discount badge)
- **Affiliate disclosure** footer

Props: `productId`, `rating`, `headline`, `review`, `pros[]`, `cons?`, `href?`, `cta?`, `image?`. Pulls all product data (name, brand, image, price, oldPrice, url, stock, delivery) through the existing `getProduct()` helper from `lib/feed`, so productId is validated at build time exactly like `<Affiliate>` and `<AffiliateTrio>` — passing build = the productId exists in the feed.

Star math handles half-stars cleanly: anything 0.25–0.74 above an integer renders as a half star, with empty stars filling out to 5. Unique gradient ID per-instance (`half-{productId}`) so multiple ProductReviews on one page don't collide.

### Placed on put-take-fiskeri

Inserted at end of the *Hvordan fisker jeg i en Put & Take sø?* section in [src/pages/fiskeguide/put-take-fiskeri/index.astro](src/pages/fiskeguide/put-take-fiskeri/index.astro) — after the bullet list (Fiskestang/Fiskehjul/Line/Endegrej) and the wrap-up paragraph, just before `<h2>Spinnere</h2>`. Natural flow: "here's the gear you need → here's the complete starter combo I recommend → now let's go deeper on endegrej."

Copy is first-person Danish ("Jeg har brugt…", "Det sæt jeg selv anbefaler…", "Jeg skifter den selv til…") per [feedback_uof_affiliate_voice]. Rating 4.5/5. Honest single con (the included line gets swapped after first trip) to keep it from reading like pure ad copy.

### Build

`npm run build` clean — 78 pages, 5.93 s. Rendered HTML confirmed contains `Tormentor2`, `Min anbefaling`, and `pr-ribbon` markup. ProductReview validates productId `80873` (Abu Tormentor2 Combo Sæt, 849 kr, in stock, 1-3 hverdage) at build time via `getProduct()`.

### Files changed

- **new:** `src/components/ProductReview.astro` (~470 lines incl. styles)
- **edited:** `src/pages/fiskeguide/put-take-fiskeri/index.astro` (+1 import, +1 component block, no other changes)

### Open / for later

- ProductReview is now available for use elsewhere (e.g. on `/fiskeudstyr/tilbehor/fiskesaet-for-begyndere/` which is the natural sibling page, or as the deep "hero recommendation" on other guide pages above their AffiliateTrio).
- Consider a future variant prop `compact` for short-form reviews that drop the pros/cons grid.

---

## 2026-05-21 (Session 41) — 2 nano-banana figures inline in put-take-fiskeri article

User invoked `/nano-banana` to add contextual images "in the middle of the text" on the put-take-fiskeri page. I generated 2 photorealistic images (one per major product section) and placed them between paragraph 1 and paragraph 2 of each section — so the image breaks the text wall before the personal/technical detail kicks in, and primes the reader for the AffiliateTrio that follows.

### Images generated

- **`/images/put_take_spinnere.jpg`** (135 KB, 1024×1024) — three Mepps Aglia inline spinners on wet dark slate, raindrops glistening, small open tackle box visible behind with more spinners. Moody Danish-morning palette.
- **`/images/put_take_powerbait.jpg`** (120 KB, 1024×1024) — bright green-and-yellow swirled Powerbait molded around a small treble hook, on a weathered wooden surface, with a line spool beside it and a blurred green lake/reeds background.

Both generated with `gemini --yolo "/generate '...' --styles=photorealistic"` (the documented `--aspect` flag isn't supported by the current nanobanana extension — discovered on first attempt; conveyed 16:9 in prompt language instead). Model returned 1024×1024 squares regardless; CSS handles the landscape crop.

Originals were ~1.5 MB PNGs in `nanobanana-output/`. Converted to JPG q85 via PIL and saved to `public/images/`. ~10× file-size reduction.

### Page changes — `src/pages/fiskeguide/put-take-fiskeri/index.astro`

**Two figures added:**

```html
<figure class="art-figure">
  <img src="/images/put_take_spinnere.jpg" alt="…" loading="lazy" width="800" height="450" />
  <figcaption>Mepps-spinnere er en fast del af min Put &amp; Take-taske — varianterne nedenfor er dem jeg griber først efter.</figcaption>
</figure>
```

```html
<figure class="art-figure">
  <img src="/images/put_take_powerbait.jpg" alt="…" loading="lazy" width="800" height="450" />
  <figcaption>Powerbait formet over en lille krog — den klassiske grøn-gule kombination er stadig min go-to når jeg ankommer til søen.</figcaption>
</figure>
```

First-person Danish captions, per site convention. The Spinnere caption also acts as a soft transition into the `<AffiliateTrio>` that follows ("varianterne nedenfor"). The Powerbait caption extends the narrative rather than restating it.

**Placements (deliberate):**
- Spinnere section: after p1 (general intro), before p2 (technical sizing/colour guidance). The image sits between "why I use spinners" and "what size to pick" — perfect rhythm break.
- Powerbait section: after p1 (what Powerbait is), before p2 ("Personligt har jeg mest held med…" — where it shifts to personal preferences). Image visually grounds the abstract intro before the personal voice kicks in.

**CSS added** — `.art-figure` block matching the pattern used in the species guides (`torskefiskeri`, `fladfisk-fiskeri`, `havorredfiskeri`, etc.):

- 2.25 rem top margin / 1.75 rem bottom — generous breathing room.
- 12 px border-radius on the figure container, slate-100 bg as fallback.
- `aspect-ratio: 16/9` + `object-fit: cover` on the img — crops the 1024² source to landscape on display.
- Figcaption: 0.8125 rem text, slate-500, centered on white bg with 0.625/0.875 padding.

The `width="800"` and `height="450"` attrs on the `<img>` reserve the right space before image load — prevents CLS even though the source is square.

### Verification

- Build clean in 5.52 s, 78 pages.
- dist `/fiskeguide/put-take-fiskeri/index.html`: both `art-figure` classes + both image references rendered.
- File sizes: 135 KB + 120 KB combined ~255 KB added to page weight. Acceptable for 2 in-content photos. `loading="lazy"` on both keeps initial paint fast.

### Why this placement should work

- **Visual rhythm break.** The page had two long text blocks before reaching the AffiliateTrio. Two figures cut that into bite-sized chunks: intro → image → technical → product trio.
- **Topic confirmation.** The reader sees the product in context (spinners on wet stone, Powerbait on hook) before being asked to buy. The trio that follows isn't a cold sell.
- **Caption as a soft CTA.** The Spinnere caption says "varianterne nedenfor er dem jeg griber først efter" — direct lead-in to the trio. Captions are read at a much higher rate than body copy.
- **No competing visual weight.** The figures are 16:9 landscapes with muted natural tones; the trio cards are bright + structured. Distinct visual roles, no clash.

### Out of scope (intentionally)

- "Valg af Put & Take sø" section got no image — only 1 paragraph, no need to break it up.
- `nanobanana-output/` PNGs left in place. They're outside `src/` and `dist/`, harmless. Easy to remove later if cleanup matters.
- No structured-data image attribution. The figures are decorative editorial, not products. The two trios already carry their own product imagery.

---

## 2026-05-21 (Session 40) — Remove AdSense banner + 2nd `<AffiliateTrio>` in Powerbait section

User wanted (1) the empty "Annonce" placeholder removed and (2) a second product trio in the Powerbait og orm section. Same component built in Session 39, no new code required.

### What changed (single file — `src/pages/fiskeguide/put-take-fiskeri/index.astro`)

**Removed:**
- `<AdsenseBanner />` between the Spinnere and Powerbait articles (line ~128).
- `import AdsenseBanner from '../../../components/AdsenseBanner.astro';` — it was the only usage on this page, so the import is dead weight.

The AdSense block was rendering as an empty grey box labelled "Annonce" because the AdSense client ID in [src/components/AdsenseBanner.astro](src/components/AdsenseBanner.astro) is `ca-pub-XXXXXXXXXX` — a placeholder, never wired up to a real account. Until that's configured, the component just creates visual noise.

**Added — 2nd `<AffiliateTrio>` in the Powerbait section:**

Placed after the 4 existing Powerbait paragraphs, before the "Valg af Put & Take sø" h2.

- `34699` Berkley Powerbait Crustacea — badge "Klassikeren" (teal), `highlight: true`, note: *"Min go-to når fiskene står tæt på bunden. Den klassiske pasta som ørrederne sjældent siger nej til."*
- `76805` Berkley Powerbait Power Naiad 30mm — badge "Duft + bevægelse" (orange), note: *"Når jeg vil have både Powerbait-duft og levende bevægelse — en gummi med aromaen indstøbt."*
- `501310` Westin Nightcrawler 7,5cm Banana — badge "Til kræsne fisk" (slate), note: *"Realistisk orm-imitation der bevæger sig naturligt — virker når fiskene har set alt det andet."*

Intro: *"Powerbait-pastaen er klassikeren — den jeg altid har på fra start. Men gummiagn med indbygget duft og realistisk orm-bevægelse har vundet stor plads i min taske, særligt når fiskene er kræsne. Her er de tre jeg griber efter."*

### Why the badge taxonomy holds across both trios

Both trios on this page use the same 3-slot use-case framing:

| Slot | Spinnere trio | Powerbait trio |
| --- | --- | --- |
| Highlighted classic (teal) | Klassikeren | Klassikeren |
| Conditional alt (orange) | Til grå dage | Duft + bevægelse |
| Specialist pick (slate) | Til klart vand | Til kræsne fisk |

The user scanning the page learns the pattern from the first trio (above the fold) and applies it intuitively to the second. Each section gets its own recommended pick — no choice paralysis, but the alternatives are framed as "for when X."

### Verification

- Build clean in 5.75 s, 78 pages.
- dist `/fiskeguide/put-take-fiskeri/index.html`: 18 `partnerid=29395` instances (2 trios × 3 products × 3 outbound links each).
- Zero `adsbygoogle` script tags and zero `Annonce` text in the rendered page — the AdSense block is genuinely gone, not just hidden.
- All 3 new productIds (34699, 76805, 501310) resolved from the feed at build time (would've thrown otherwise).
- IDE issued a stale TypeScript diagnostic mid-edit referencing the removed `AdsenseBanner` — fully resolved by the time the build ran. No diagnostic on the final state.

### Out of scope (intentionally)

- `src/components/AdsenseBanner.astro` itself untouched — other pages may still use it, and once the user wires up a real AdSense client ID it becomes useful. Only removed the usage on this one page.
- No structured data (`Product` / `Offer` JSON-LD) emitted from either trio yet — same as Session 39.
- The "Valg af Put & Take sø" section below has no products to promote — left alone.

---

## 2026-05-21 (Session 39) — New `<AffiliateTrio>` component + Mepps spinners on Put & Take page

User asked for an affiliate review block in the Spinnere section of `/fiskeguide/put-take-fiskeri/`, promoting 3 Mepps Aglia spinners (classic / Fluo / Platinum). Component had to be modern, sleek, and built for CTR. CTAs had to carry the affiliate code.

### New component: `src/components/AffiliateTrio.astro`

Built a reusable 3-product comparison/review component — separate from the existing single-product `<Affiliate>` since the shapes are different enough that combining them would force one to compromise.

**Props:**

```ts
interface ProductSpec {
  productId: string;
  badge: string;
  badgeTone?: 'teal' | 'orange' | 'slate';
  note: string;
  highlight?: boolean;
}

interface Props {
  title: string;
  intro?: string;
  products: ProductSpec[];
  cta?: string;  // default: "Se hos Fiskegrej"
}
```

**Behavior:**

- Loops through `products`, calls `getProduct(id)` from `src/lib/feed.ts` for each. Throws at build on missing IDs — same validation lock-in as `<Affiliate>`, so passing build ⇒ every productId is valid in the feed.
- All hrefs come from `product.url`, which is the feed's pre-baked `partner-ads.com…partnerid=29395&htmlurl=…` URL. No manual affiliate-code stitching, no hardcoding.
- Image, name, brand, price, old price, in-stock, delivery — all pulled from the feed.
- Computes `hasDiscount` and `discountPct` per item (shows old price strikethrough + "−X%" pill when there's a real discount).

**Design language (CTR-tuned):**

- Card container with soft drop shadow + 20 px radius — clearly separates the unit from body copy as a "moment".
- Yellow-warm `Mit valg` eyebrow tag above the title (uses the same star icon as `<Affiliate>` for consistency).
- 3-column responsive grid. Each card: absolute-positioned topleft badge (Klassikeren / Til grå dage / Til klart vand), 1:1 product image with subtle radial gradient backdrop + drop shadow, brand label, name, italic-less first-person note (with `min-height` so all 3 cards align even when notes are uneven), prominent price (1.5rem 800-weight teal), full-width CTA button.
- CTA hover: bg shifts from teal `#0d4a5e` to orange `#c47d0a`, arrow slides 3 px right, soft shadow grows. The orange hover lands on the brand color and creates an obvious "click me" moment.
- `highlight: true` on a card adds a teal border + stronger shadow — used to anchor the user's eye on the recommended pick (the Aglia classic in this case).
- Trust signals at card bottom: tiny green dot + "På lager" + delivery time. Small print, but it's there.
- Disclosure line at the bottom, centered, light gray.

**Responsive:**

- 3 cols → 2 cols @ 880 px → 1 col @ 640 px.
- On mobile, image aspect shrinks from 1:1 to 16:11 for less vertical scroll.

### Integration: `src/pages/fiskeguide/put-take-fiskeri/index.astro`

- Added the import at top.
- Inserted `<AffiliateTrio>` after the two existing Spinnere paragraphs, still inside the same `<article>`.
- 3 products configured:
  - `35380` Mepps Aglia (classic) — badge "Klassikeren" (teal), `highlight: true`, note: *"Min standardspinner. Fanger fisk hele året, uanset forhold — start altid her."*
  - `35378` Mepps Aglia Fluo — badge "Til grå dage" (orange), note: *"Mit valg når sigten er ringe og lyset er fladt. De fluorescerende farver lyser op."*
  - `35376` Mepps Aglia Platinum — badge "Til klart vand" (slate), note: *"Når solen står højt og vandet er klart — refleksen får selv trætte fisk til at hugge."*
- Intro: *"Mepps Aglia-serien har stået fast i min boks i årevis — det er dem jeg griber først når jeg ankommer til en sø. Her er den klassiker jeg altid har på, plus de to varianter jeg skifter til når lyset eller sigten ændrer sig."*

First-person voice throughout, per the site convention.

### Verification

- Build clean in 5.83 s, 78 pages.
- dist `/fiskeguide/put-take-fiskeri/index.html`: 9× `partnerid=29395` occurrences = 3 products × 3 outbound links each (clickable image, clickable product name, CTA button). All affiliate-coded.
- Build did NOT throw on any of the 3 productIds — confirms all 3 resolve from `data/fiskegrej-feed.xml`.

### Why this design should convert

- **One recommended pick** (Aglia classic, highlighted). Removes the "which one do I pick" friction — the user can default to the highlighted one and still discover the variants.
- **Use-case framing on the badges**, not feature framing. "Til grå dage" / "Til klart vand" tells the user *when* to buy, which converts better than spec sheets.
- **First-person notes**, not marketing copy. Each card has a sentence that reads like a friend's tip, not a product description.
- **Price prominence** + clear CTA on every card. No "see options" intermediate.
- **3 outbound links per card** (image, name, CTA) — 3× the surface area for accidental and deliberate clicks, all going to the same affiliate URL.
- **Trust signals** (in stock dot, delivery time, disclosure) — reduces "is this legit" hesitation without taking visual weight from the CTA.

### Out of scope (intentionally)

- Single-product `<Affiliate>` component untouched — they coexist.
- No structured data (`Product` schema) emitted from the trio yet. Could add `Product` / `Offer` JSON-LD per card if Google rich-results becomes a focus. Currently relies on the feed's prices being live.
- Only the Spinnere section got the trio. The Powerbait section below would be a natural follow-up (Berkley Powerbait variants), but user only asked for spinners.

---

## 2026-05-21 (Session 38b) — `/fiskeguide/` revised: image mini-cards + bridge paragraph

User feedback on Session 38: the editorial hairline list felt too sparse and lost the visual interest the rest of the page has. Asked for a different approach and for transitional text between the featured cards and the secondary links.

### Direction picked

Image mini-cards in a 3-col grid — the same visual language as the 5 featured cards at the top, just smaller. Plus a Danish first-person bridge paragraph between the two grids.

### What changed (single file — `src/pages/fiskeguide/index.astro`)

**Data** — `secondary` array now includes `image`, `chip`, `alt` on every entry. Chips assigned by topic:

- Ultra-light fiskeri → **Teknik**
- Fiskeri for børn → **Familie**
- Fisketegn → **Regler**
- Bombarda fiskeri → **Teknik**
- Fiskeri fra båd → **Båd**
- Catch and Release → **Etik**

All 6 hero images already existed in `public/images/` from the individual guide pages — no new assets needed. `itemList` schema also updated to include the image for each secondary entry (so structured data now lists 11 items with images, up from 5).

**Markup** — replaced the `<ul class="mini-list">` editorial list with `<div class="card-grid card-grid-sm">` of `.card` elements. The 6 cards reuse the exact same JSX shape as the 5 featured cards: image + chip overlay + title overlay + arrow. Identical hover behavior.

**Bridge** — new `<div class="sec-bridge">` block between the two grids. One Danish first-person paragraph:

> Ovenfor er de fem fiskeformer der dækker det meste af dansk fiskeri — og det er dér de fleste begyndere starter. Men der er emner som falder uden for de store kategorier: specialiserede teknikker, praktiske regler, og fiskeri for de mindste. Herunder har jeg samlet de guides jeg ofte bliver spurgt om.

Styled as a soft slate gradient box with a 3 px teal left-accent and 8 px radius — quiet but distinct from the editorial flow above and below. Reads like a personal aside, not a card.

**CSS** — removed all `.mini-list` / `.mini*` rules. Added a minimal `.card-grid-sm` modifier set:

- `grid-template-columns: repeat(3, 1fr)` (was 2 for featured)
- `.card-grid-sm .card { aspect-ratio: 4 / 3 }` (more square for the smaller footprint, vs 3/2 on featured)
- Smaller overlay padding, smaller title (`1.0625rem` vs `1.25rem`), smaller chip (`0.625rem` vs `0.6875rem`), smaller arrow circle (28 px vs 34 px)
- Responsive: 3 cols → 2 @ 880 px → 1 @ 640 px. Featured grid still goes 2 → 1 @ 640 px.

### Why this works

The first attempt (editorial hairlines) treated the secondary section as a quiet footnote — the user wanted it to feel substantive but distinct. Image mini-cards solve both:

- **Cohesion** — they read as "the same family" as the featured cards, because they literally use the same component. The eye doesn't have to context-switch.
- **Hierarchy** — they're smaller (3-col vs 2-col), use 4/3 aspect, and have smaller type. So they still read as secondary, just not as a different design system.
- **The bridge paragraph** — gives the page a narrative beat. Without it, the page jumps from "Udvalgte fiskeformer" cards straight to "Flere guides" cards, which can feel like the same section. With the bridge, there's a moment of personal voice that says "and here's why the next section exists."

### Verification

- Build clean in 4.48 s, 78 pages.
- All 6 secondary card images verified existing (`ul_fiskeri_hero.png`, `born_hero.png`, `fisketegn_hero.png`, `bombarda_hero.png`, `baad_hero.png`, `cnr_hero.png`).
- Markup smoke-test: 6 `.card` elements in `.card-grid-sm`, no `.mini*` artifacts.
- `itemList` structured data now includes 11 items (5 featured + 6 secondary), all with image URLs.
- Bridge paragraph renders between card grids as expected.

### Out of scope (intentionally)

- Featured card grid (top) untouched.
- Answer capsule and intro untouched.
- Did not rewrite section H2s as Danish questions — the `.sec-heading` style is an eyebrow label, not a content H2, so the Q&A guidance doesn't apply.
- Bridge paragraph is one block — could be split into a couple of sentences with a tagline above, but kept tight for now.

---

## 2026-05-21 (Session 38) — `/fiskeguide/` "Flere guides" → editorial hairline list (SUPERSEDED)

User direction: optimize the `/fiskeguide/` page — make the bottom 6 links display more naturally and modernly. Direction confirmed via question prompt: editorial list (boxes off, hairlines on), not tag pills, not polished boxes.

### What changed

Single source file edited — [src/pages/fiskeguide/index.astro](src/pages/fiskeguide/index.astro).

**Data:** Dropped the `icon` SVG-path string from each of the 6 entries in the `secondary` array. Six fewer lines of inline SVG markup.

**Markup:** Container changed from `<div class="mini-grid">` of `<a class="mini">` children to `<ul class="mini-list">` with `<li>` → `<a class="mini">`. The `<div class="mini-icon">` block (orange-circle SVG holder) is gone. Each row is now `<div class="mini-body">` (title + description) + `<span class="mini-arrow">` chevron. Using `<ul>` matches the semantics — these are a list of links to related guides — and helps screen readers.

**CSS:** Rewrote `.mini-list` / `.mini`:

- Dropped `background: #ffffff`, `border: 1px solid #e5e7eb`, `border-radius: 10px`, `box-shadow`, and the `translateY(-1px)` hover lift — all the visual scaffolding of a card.
- Replaced with `border-top: 1px #f3f4f6` on the list + `border-bottom: 1px #f3f4f6` on each `<li>`. The result is a clean, magazine-style divider stack.
- Title bumped from `0.9375rem` to `1.0625rem`, added `letter-spacing: -0.01em` — feels more like a real heading and less like a card label.
- Description nudged from `0.8125rem` to `0.875rem` with slightly looser line-height.
- Increased per-row vertical padding to `1.125rem` (was `1rem`) for more breathing room.
- Column gap on the 2-col grid widened from `0.625rem` to `2.5rem` — extra horizontal whitespace, given there's no border to act as a visual separator anymore.
- Hover: title to teal, chevron slides 4 px right (was 3 px) and shifts color. Matches the `.card` hover idiom at the top of the page for consistency.

### Why this works

The old design had **two competing visual layers** on the same page: the bold image-card grid (`.card`) at the top and a second mini-card grid (`.mini`) at the bottom. Two card grids in a row makes everything feel like the same priority — and the orange icon circles on the mini-cards were the only orange on the page, which read as random.

The new design uses **hierarchy**: image cards = primary, hairline list = secondary. The eye knows the top is "featured" and the bottom is "more from this section". This is the same pattern used by editorial sites (NYT, The Atlantic) and modern docs (Stripe, Linear) — visually rich primary slots above, lean text rows below.

The hairlines (`#f3f4f6`, very pale gray) are quiet enough to feel like whitespace rather than borders, but provide just enough rhythm to scan the list.

### Verification

- Build clean in 4.57 s, 78 pages.
- `/fiskeguide/` markup verified — 6 `<li>` rows render, no `mini-icon` elements, no orange icon circles.
- Featured image cards at top unchanged.
- Answer capsule, intro, and hero unchanged.
- Mobile: 2-col → 1-col, column gap collapses to 0, hairlines still scan correctly.

### Out of scope (intentionally)

- The 5 featured image cards stay as they are — those are the page's strongest visual moment and the user only flagged the bottom.
- Section heading "Flere guides" wording unchanged. Could be warmer (e.g. "Også her") but felt like over-reach without explicit ask.
- No content edits — every title + description text preserved verbatim.

---

## 2026-05-21 (Session 37) — Header logo swap to circular `logo.png`

User direction: use `UoF/public/images/logo.png` as the site logo. The current one (`logo_new.png`) had a white square border and was low quality.

### What changed

Single source file edited — [src/layouts/MainLayout.astro](src/layouts/MainLayout.astro). Three references swapped from `/images/logo_new.png` → `/images/logo.png`:

- **Line 63** — `Organization` JSON-LD `logo.url` (schema.org structured data).
- **Line 189** — `<link rel="apple-touch-icon">` (iOS home-screen icon).
- **Line 449** — header `<img>` inside `.sh-logo` (the visible site header).

No CSS changes. The `.sh-logo-img` slot stays at 44×44 with `object-fit: contain`, so the circular PNG drops into the existing space without distortion.

### Why this works

- `logo.png` (824 KB) is the clean circular "Ude og Fiske" mark on a transparent background — no white border bleeding into the header.
- `logo_new.png` (4.5 MB) was 5× larger and had the white square frame the user flagged. Leaving it on disk in case it's needed later; not deleting.
- Apple touch icon now uses the circular mark too, which iOS will mask into a rounded-square — visually consistent with the header.
- The JSON-LD `logo` field is the URL Google uses in Knowledge Panel / rich results; updating it keeps structured data in sync with the visible brand.

### Verification

- `npm run build` clean in 5.62 s (78 pages).
- `dist` grep: **0 occurrences** of `logo_new.png`. Every built page has exactly 2 references to `/images/logo.png` (header + JSON-LD), matching the source.
- Pre-existing TypeScript hint about an `is:inline` script attribute is unrelated and unchanged.

### Out of scope (intentionally)

- Favicon (`favicon-32x32.png` / `favicon.ico`) untouched — those are separate assets.
- `logo_new.png` kept in `public/images/` rather than deleted (~4.5 MB unused, but cheap insurance).
- No image optimization pass on `logo.png` itself (still 824 KB) — header `<img>` has explicit `width="44" height="44"` so layout/CLS is fine; can revisit if perf matters.

---

## 2026-05-21 (Session 36) — /saesonguide/ visual redesign + first-person content additions

User direction: remove the ★ / ● icons from the matrix (colors only), make the cells stand out more using inspiration from the per-species SeasonCalendar widget, polish the page overall, and add some content in the first-person voice the site uses elsewhere.

### Matrix cell redesign — color, no icons

The matrix was previously cells with a small ★ on `top` and a small ● on `good`. Now:

- Both icons removed. The JSX renders a single empty `<span class="sg-cell-inner">` inside each `<td>` so the coloured block has rounded corners independent of cell padding (same trick the SeasonCalendar uses for its pill look).
- Cell height bumped to **48 px** (was ~36 px) so the colour fills more of the eye.
- `top` cell: orange-amber gradient (`#fef3c7 → #fcd34d`), 1 px amber border, and a **3 px inset top-stripe in `#c47d0a`** — direct callback to SeasonCalendar's gradient + colored-border peak treatment. Drop shadow 1 px for lift.
- `good` cell: soft-blue gradient (`#eff6ff → #bfdbfe`), 1 px sky border, 3 px inset top-stripe in `#3b82f6`.
- `low` cell: `#fafafa` with a 1 px **dashed** hairline border at 70% opacity — visually communicates "empty / not in season" without competing with the active states.
- Hover: cell-inner scales 1.02 + 3% brightness boost. Subtle but readable.
- Current-month: 2 px solid orange outline with 1 px offset (was an inset box-shadow that washed out against the orange `top` cells).

The three states are now strongly distinguishable by colour alone, hierarchy is preserved (top > good > low), and the top-stripe motif ties the matrix visually to the SeasonCalendar widgets on the species pages.

Legend swatches scaled up to 22 px and rebuilt with the same gradient + inset-stripe formula so the legend visually rehearses what the cells look like.

### Hero polish

Layered two radial-gradient highlights on the hero — warm orange glow top-left, cool blue bottom-right — over the existing teal base. Added a faint 48 px grid pattern (1 px white lines at 3% opacity) masked into a soft elliptical fade, so the hero has subtle texture without going noisy. Same dark colour, just more depth.

### Three new content sections — first-person Danish

**a) `.sg-intro` — "Sådan bruger du den" (between hero and legend).** Two-column on desktop (3 paragraphs left, "Året i grove træk" aside right with 4 season-coloured tag-rows; collapses to stacked on tablet). Opens with the personal frame: *"Jeg har planlagt mine fisketure efter én simpel regel i mange år: lad fiskene bestemme."* Explains the two ways to read the page (matrix vs. month cards) and tells nybegyndere to start with the month's "Top sæson" species.

**b) `.sg-seasons` — "Sæsonens vigtigste lektion" (between matrix and month cards).** 4-card grid (Vinter / Forår / Sommer / Efterår), each card has a 4 px coloured top stripe in the season's primary colour, a small coloured pill tag, an H3 ("Langsommere — ikke død" / "Det største skifte i året" / "Tidligt op, sent i seng" / "Det bedste vindue på året"), and ~3 lines of personal advice. Cards lift on hover with the season colour as the border highlight. Responsive: 4 → 2 → 1 columns.

**c) `.sg-method` — "Hvad ligger bag dataet?" (between month cards and FAQ).** Single info card with an info-icon, left-border accent in teal. Honest about how the calendar was built: combination of personal fishing experience, Fiskeplejen/DTU Aqua sources, and observation-driven tip rewrites. Names the three species with verified per-month calendars (havørred, makrel, hornfisk — links inline). Invites readers to email corrections.

All copy matches the existing site's tone per `feedback_uof_affiliate_voice.md`: first-person ("jeg planlægger", "for mig"), pragmatic, occasional self-deprecating asides ("det lyder banalt, men det er det ikke", "husk solcreme"), no marketing-speak.

### Other tweaks

- Section heading on month-cards rephrased ("Hvad sker der i hver enkelt måned" → "Hvad der sker hver enkelt måned, og hvilke arter der er værd at gå efter") — minor grammar fix.
- Added a new `.sg-eyebrow-dark` eyebrow style (accent-orange on white) for use on the white-bg sections, complementing the white-on-dark `.sg-eyebrow` used in the hero.

### Build + verification

- `npm run build` clean in 4.08 s, 78 pages.
- dist/saesonguide grep:
  - 0 × `sg-cell-icon` (icons fully removed)
  - 108 × `sg-cell-inner` (9 species × 12 months ✓)
  - 4 × `sg-intro` markup
  - 4 × `sg-season-card`
  - 5 × `sg-method` markup pieces (icon + text + h2 + paragraphs)
  - 7 × `sg-aside` (intro aside card)

### Files modified

- `src/pages/saesonguide/index.astro` — 3 new content sections + cell rewrite + legend swatch rebuild + hero polish + ~250 lines of new CSS.
- `todo.md`, `review.md` updated.

### Still pending

- Visual QA in a dev server. The new gradient-with-inset-stripe look on the cells is the kind of detail that's worth eyeballing before push.

---

## 2026-05-21 (Session 35) — Season block polish + new /saesonguide/ page

User direction, three parts:
1. Make the species names in the "Hvad bider lige nu?" component clickable links to their respective species pages.
2. Polish the visual design of the same component.
3. Build a `/saesonguide/` page showing all months and all fish — the "Se den fulde sæsonguide" CTA was previously 404'ing.

### 1. Season block — clickable, polished

- Added a `speciesHref` map in the index.astro frontmatter linking each of the 9 species names to its guide URL.
- Converted `<li class="fish-chip">` to `<li><a class="fish-chip" href={...}>`. The whole chip is now a clickable target, not just text.
- Position 0 species (the month's primary, e.g. Havørred in May) now gets an `is-top` class — the "I sæson" pill becomes a filled accent-orange "Top" pill, giving the lead species visual primacy over the supporting ones.
- Hover treatment: chip lifts on `translateX(4px)` (was 3 px), background switches to white, soft 24 px shadow, the species name shifts to the season colour, and an arrow icon slides in from the left edge. The whole pattern matches the existing card-hover language elsewhere on the site.

### 2. monthData clean-up

While in the area:
- Fixed the September entry — was `["Havørred","Torsk","Ørred"]` (the third entry "Ørred" was an ambiguous typo). Replaced with `Sild` to capture the autumn herring run.
- Added `Sild` to four months total (April, May, September, October) reflecting the spring + autumn herring stims that are well-known Danish fishing knowledge. Previously sild appeared in zero months despite having its own guide page. Tips for those 4 months were rewritten to mention sild explicitly.
- Other typo fixes ("geden" → "gedden" in March).
- Note: monthData is treated as editorial-level homepage narrative (3 species + tip per month), not the same thing as the per-species SeasonCalendar peak/good/poor calendars that the `reference_uof_season_calendar_data.md` memory restricts. Sild addition here is in the same editorial spirit as the existing data.

### 3. New page: `/saesonguide/`

Built `src/pages/saesonguide/index.astro` so the "Se den fulde sæsonguide" CTA from the homepage's season block now resolves. Four sections:

**a) Hero** — accent-teal background, eyebrow + H1 + intro + a "Du er her — Maj" current-month pill.

**b) Legend** — three-state colour key (Top sæson / I sæson / Lav aktivitet) with short descriptions of what each means.

**c) Matrix table** — the centrepiece. 9 species rows × 12 month columns. Each cell is one of three states:
  - `top` — orange background + ★ icon: the species is at position 0 in that month's homepage fish list (the month's primary catch).
  - `good` — soft-blue background + ● dot: the species is at position 1 or 2 (active but not the headline).
  - `low` — white, faded: not in season per monthData.
  
  Each row leads with a 36 px species thumbnail + name (linked to its guide page) + slide-in arrow on hover. Sticky left column and sticky top row so the species labels and month headers stay visible while scrolling on mobile. The current-month column is highlighted with an inset orange ring on every cell.
  
  Counts in dist/: 12 top + 24 good + 72 low = 108 cells. The 12 top + 24 good adds up to the same 3-species-per-month assertion as the homepage.

**d) Month cards** — 12-card grid (3 × 4 desktop / 2 × 6 tablet / 1 × 12 mobile) reusing the same season colour for each (vinter blue / forår green / sommer amber / efterår orange). Each card shows the month name, season tag, tip text, and 3 clickable species chips. The top-species chip is filled with the season colour and gets a small star prefix; the secondary chips are outlined and turn into filled chips on hover.

**e) FAQ** — 5-question accordion answering the most likely sæsonplanning questions (best time overall, winter fish, when havørred starts, when hornfisk/makrel peak, when sild stims arrive). Wired into MainLayout's `faq` prop so a 5-Question FAQPage schema fires.

### Build + verification

- `npm run build` clean in 4.25 s. **78 source pages** (was 77, +1 sæsonguide).
- dist/saesonguide/index.html grep confirms 12 top + 24 good + 72 low cells, 12 month cards, 9 species links, 1 FAQPage + 5 Question entities.
- dist/index.html confirms 3 fish-chips (1 `is-top` + 2 regular), 3 arrow icons, and the `season-cta` link target `/saesonguide/` now resolves (previously 404).

### Files modified / created

- `src/pages/index.astro` — `speciesHref` map added; monthData updated (Sild added 4 months, September typo fixed, tips rewritten); fish-chip JSX converted to `<a>` with `is-top` variant + arrow; ~40 lines of CSS reworked for chip hover/active states.
- `src/pages/saesonguide/index.astro` — new file, ~440 lines (frontmatter + 4 sections + scoped CSS).
- `todo.md` — Session 35 plan + new resume header.
- `review.md` — this entry.

### Caveat

Visual QA in a dev server still not done (couldn't browse this session). The matrix UI in particular has horizontal-scroll behaviour on mobile that should be spot-checked, and the sticky left column needs to look right on iOS Safari (which has historically been picky about `position: sticky` inside `overflow-x: auto`).

---

## 2026-05-21 (Session 34) — Front-page redesign: stats bar → wave divider, 6-card mixed bento, PriceRunner widget

User direction, three changes:
1. Remove the "15+ / 22 / 50+ / Gratis" stats bar at the bottom of the hero — replace with a graphical separator.
2. Trim the 9-card species bento down to 6 mixed cards (species + techniques) matching what the live site shows.
3. Add a modern-styled PriceRunner price-comparison widget, placed after the bento.

### 1. Hero stats → SVG wave divider

Removed the `.hero-stats` block (4 stat columns) and its ~50 lines of CSS. Added an SVG wave at the bottom of the hero — a single soft S-curve transitioning the dark hero into the white welcome section below. White-filled path, 90 px desktop / 60 px mobile, absolute-positioned with `pointer-events: none`. Uses `<svg viewBox preserveAspectRatio="none">` so it stretches edge-to-edge regardless of viewport. Hero `min-height: 92vh` retained — the wave overlays the bottom edge without reducing usable hero height.

### 2. Bento: 9 → 6 mixed cards

Survey of the live homepage's `eael-filterable-gallery` (Elementor widget) confirmed the exact 6-card lineup live currently uses:

1. **Havørred** → `/guide-til-fisk/havorredfiskeri/`
2. **Fladfisk** → `/guide-til-fisk/fladfisk-fiskeri/`
3. **Hornfisk** → `/guide-til-fisk/hornfisk/`
4. **Fluefiskeri** → `/fiskeguide/fluefiskeri/`
5. **Molefiskeri** → `/fiskeguide/fiskeri-paa-mole/`
6. **Put & Take Fiskeri** → `/fiskeguide/put-take-fiskeri/`

Descriptions are 1:1 verbatim from the live HTML per the content workflow memory. Chips reduced to 2 categories: "Fiskeart" (3 cards) and "Teknik" (3 cards) — simpler and consistent.

Section heading rewritten to reflect the mix: eyebrow "Vores guides", title "Sådan kommer du i gang", subtitle "Vælg en fiskeart eller en fiskeform — komplette guides til Danmarks mest populære fisk og de mest brugte teknikker."

Dropped from the bento: Makrel, Torsk, Sild, Regnbueørred, Aborre, Gedde. These pages still exist and are reachable via `/guide-til-fisk/`. Per user direction earlier in the session, mirroring live's 6-card showcase was the goal — not an exhaustive species index on the front page.

### 3. Featured-guides section removed

The "De mest komplette fiskeguides" section (Fluefiskeri / Mole / Kystfiskeri square-card row) was deleted entirely. Two of its three cards (Fluefiskeri, Mole) now live in the bento — keeping the featured row would duplicate. Per user direction in the session question, "live doesn't have it → remove entirely" was the chosen path. ~30 lines of CSS for `.sec-featured`, `.feature-grid`, `.fcard*` removed in the same pass.

### 4. PriceRunner component (new) — `src/components/PriceRunner.astro`

Built as a reusable component so the widget can be dropped on other pages later. Default props match the user-provided snippet (categoryId=647 Fiskegrej, partnerId=adrunner_dk_udeogfiske, brandIds=192887,166295, productLimit=5) but every value is overridable via props for future placements.

Visual design:
- White card with 18 px rounded corners, 1 px hairline border, soft 30 px shadow.
- 3 px gradient bar across the top of the card (orange → teal → blue) — echoes the site's existing `.welcome-mark` gradient pattern.
- Header row: eyebrow "POPULÆRT FISKEGREJ" / H2 "Find den bedste pris" / subtitle, plus a right-aligned "Annonce" pill badge (price-tag SVG icon).
- Widget container with `min-height: 120px` so the layout doesn't jump while PR's script renders.
- Footer row with two elements: a primary "Se hele Fiskegrej-kategorien hos PriceRunner →" link (hover-animated arrow) on the left, a small "I samarbejde med **PriceRunner**" line on the right.
- The remote script is loaded via Astro's `is:inline` directive on `<script async src=...>` so Astro doesn't try to bundle the third-party widget URL. Verified in dist/: script tag emits with `async` attribute and the full PriceRunner URL intact (ampersands HTML-encoded, which is fine).

The `nofollow sponsored` rel attribute on the affiliate link follows Google's link-attribute best practice for paid placements.

### Build + verification

- `npm run build` clean in 3.92 s. 77 source pages + 30 redirect stubs unchanged.
- Verified in `dist/index.html`:
  - 6 × `class="bcard"` (down from 9).
  - 1 × `hero-wave` SVG (no `hstat-*` residue).
  - 1 × `pr-card` + 1 × `pricerunner.com` script reference.
  - All 3 technique card titles present (Fluefiskeri / Molefiskeri / Put & Take Fiskeri).

**Caveat: I haven't visually verified in a browser** — I can confirm the markup, CSS, and script-tag attributes are correct, but the wave-divider curve aesthetics, the PriceRunner widget's actual rendered look (the third-party script populates the empty div at runtime), and overall composition should be spot-checked with `npm run dev`. If the PR widget renders an iframe or styled list inline, the soft `:global(iframe)` override in the component CSS should handle border/background cleanly.

### Files modified

- `src/pages/index.astro` — stats bar removed, wave SVG added, categories array trimmed 9→6 with verbatim live descriptions, featured section + array + CSS removed, PriceRunner import + placement added.
- `src/components/PriceRunner.astro` — new component, ~190 lines.
- `todo.md` — Session 34 plan + new resume header.
- `review.md` — this entry.

### Open follow-ups

- Visual QA pass in dev server (recommended before next push).
- The PriceRunner widget loads from `api.pricerunner.com` — first paint may show the 120px placeholder before the script's content populates. If layout shift is an issue we can swap to `min-height` based on expected widget height once observed.

---

## 2026-05-21 (Session 33) — Group 1: 20 missing 301 redirects (slug-divergence cleanup)

User direction: ship the 20 slug-divergent redirects identified in Session 32's fresh crawl. Originally considered building pages at the live URLs with 1:1 content, but on clarification — since those pages already exist locally under our chosen slugs (1:1 from live per the content workflow memory) — the right move is plain 301 redirects, not duplicate pages.

### What shipped (+20 redirects, 0 new source pages)

**`astro.config.mjs`** — added 20 entries to the `redirects: {}` block, organised into 4 sub-groups for diff legibility:

1. **Top-level legacy URLs (9)** — `/bombardafiskeri/`, `/bornefiskeri/`, `/catch-and-release/`, `/fiskeri-fra-baad/`, `/fisketegn/`, `/fluefiskeri/`, `/polaroid-briller/`, `/ul-fiskeri/`, `/vadejakke/`. Live had these at the root before a permalink change moved them under category prefixes; the old URLs still appear in inbound links and SERP results.
2. **Plural `/fiskeguides/*` (2)** — `/fiskeguides/fiskeri-paa-mole/` and `/fiskeguides/put-take-fiskeri/`. Live's CMS has the plural-form parent slug for these two; our site uses singular `/fiskeguide/` throughout.
3. **`/fiskepladser/*` legacy long-form (1)** — `/fiskepladser/havoerredfiskeri-i-isefjorden/` → `/fiskepladser/isefjorden/`. Matches the Session 24 shortening pattern (Mariager Fjord + København).
4. **`/fiskeudstyr/*` flat slugs → categorised routes (8)** — the `/kob-af-fiskestaenger/` parent + 3 children, plus `/fangstnet/`, `/fiskesaet-for-begyndere/`, `/waders-og-stovler/`, `/koeb-af-fiskehjul/`.

**`public/_redirects`** — same 20 entries in Netlify-syntax, grouped with the same sub-headings.

### Build + verification

- `npm run build` clean in 4.48 s. 77 source pages + 30 redirect stubs = 107 HTML files in dist/.
- All 20 new stub directories visible in dist/ root: `bombardafiskeri/`, `bornefiskeri/`, `catch-and-release/`, `fiskeguides/`, `fiskeri-fra-baad/`, `fisketegn/`, `fluefiskeri/`, `polaroid-briller/`, `ul-fiskeri/`, `vadejakke/`, plus `fiskeudstyr/kob-af-fiskestaenger/` (and its 3 children) and `fiskeudstyr/koeb-af-fiskehjul/`, etc.
- Re-ran `content/_analyze.cjs` against the Session 32 crawl set. **Live-only count dropped 29 → 9 — exactly the 20 we shipped.** Redirect-covered bucket grew 10 → 30. Group 1 = cleared.

### Why both layers

Astro's `redirects: {}` config emits a static HTML stub at each FROM path with `<meta http-equiv="refresh">` plus a 301-hint comment. The actual HTTP 301 status code only fires when the host platform reads `public/_redirects` (Netlify, Cloudflare Pages, Render). Per the [feedback_uof_301_when_moving_pages.md](C:/Users/Aldin/.claude/projects/c--Users-Aldin-Desktop-Aldin-Websites-Claude-Code-TheBalkanPour/memory/feedback_uof_301_when_moving_pages.md) memory we always write both: Netlify gets a true 301, other hosts get a meta-refresh fallback.

### Files modified

- `astro.config.mjs` (+22 lines, redirects block)
- `public/_redirects` (+23 lines including sub-headings)
- `todo.md` — Session 33 plan + new resume header
- `review.md` — this entry

No source pages touched, no content changes, no nano-banana, no schema changes.

### What's left from the gap report

9 live-only URLs remain, all Group 2 content or Group 3 dead URLs. See top of `todo.md` for the prioritised list. Highest-value next: probably `/cookie-og-privatlivspolitik/` (legal page) and `/om-mig/stotte-projekter/` (low-effort sub-page).

---

## 2026-05-21 (Session 32) — Fresh live-site crawl gap analysis (no sitemap)

User direction: don't use sitemap.xml — actually crawl udeogfiske.dk by following links, diff against our 77 local routes + 10 redirects. Goal: find anything the prior sitemap-based audit missed and produce a current gap signal.

### Tooling shipped (`content/`)

**1. `_crawl.cjs`** — one-shot Node BFS crawler. Starts at homepage, follows same-host `<a href>` links, normalises URLs (trailing slash, no query, no fragment), 400 ms delay between fetches, depth cap 5, URL cap 500. Browser-UA headers to bypass the WAF. Writes sorted `_live-urls.json`.

**2. `_analyze.cjs`** — reads the crawl output, builds the local route set from `src/pages/**/index.astro`, parses 301s from both `astro.config.mjs` and `public/_redirects`. Three-way diff into buckets A/B/C plus a D bucket for the deferred English tree. Writes `_gap-report-2026-05-21.md`.

### Crawl bumps

First crawl run hit udeogfiske.dk's affiliate redirector at `/link-out/<id>/<base64>/`. The base64-encoded affiliate target URLs contain a template-injection bug (literal `${page.url}` / `${item.url}` substrings), so each `/link-out/` page links to a longer `/link-out/.../numberResultsUrl/${page.url}/` variant, which spawns longer variants ad infinitum. 296 of 500 URLs were this junk (90% of the URL budget wasted) before the URL cap kicked in.

Fix: added `/link-out/` to `SKIP_PREFIXES` plus a `MAX_PATH_LEN = 250` safety net for any future template-trap of this shape. Second crawl = 82 URLs, 80 fetched OK, 2 of live's own broken internal links 404'd.

### Findings (full detail in `content/_gap-report-2026-05-21.md`)

| Bucket | Count | Notes |
|---|---|---|
| A. Live-only (gaps) | 29 | Action items |
| B. Redirect-covered | 10 | Existing 301s correctly intercepting all known divergent slugs |
| C. Local-only | 36 | Our intentional additions (havørred apr–sep, Put & Take, gear-tree re-org) |
| D. English (deferred) | 2 | `/en/` + `/en/seatrout-fishing-denmark/` — surfaced per user direction |

The 29 live-only URLs decompose cleanly:

- **20 missing 301s (slug-divergence)** — biggest finding. Prior sitemap audit said 8; the fresh crawl found 12 more, all top-level legacy URLs (`/bombardafiskeri/`, `/vadejakke/`, `/polaroid-briller/`, `/ul-fiskeri/`, `/catch-and-release/`, etc.) plus the plural `/fiskeguides/*` family. Every one of them already exists locally under a different slug — pure mechanical fix.
- **7 missing pages (content gaps)** — `/blog/` hub + 1 blog post the crawl surfaced, `/cookie-og-privatlivspolitik/`, `/om-mig/stotte-projekter/`, `/fisketure/put-and-take-fisketure/` hub + 2 Ørsted-Nov-2021 variants (different from our marts Ørsted page).
- **2 dead URLs on live** — `/fisk/havørred/` and one `/orsted-orredvand-19-nov-2021/` variant 404 on live itself. Not our problem.

### Crawl caveats (documented for next session)

- Depth=5 from homepage. Pages not linked from the navigable graph (orphans, RSS-only, sitemap-only) won't appear.
- Only 1 blog post found because the homepage `/blog/` hub linked one. If `/blog/` has more posts they're not in the gap report.
- "Live serves a 200 vs. 301" not distinguished — the fetch() helper follows redirects transparently and the BFS adds the source path to the visited set regardless. For SEO continuity this doesn't matter (we still need a local 301 either way).

### What this changes for the stack

The previous resume header listed "8 missing 301s" as top-of-stack item 1. That count is now **20**, not 8 — fresh crawl found the additional 12 top-level legacy URLs the prior sitemap audit didn't surface. Group-1 (20 redirects) is still the obvious highest-yield next session: zero content work, ~30 min of mechanical edits, prevents 20 live URLs from 404'ing on our deployment.

### Files written/modified

- `content/_crawl.cjs` (new, 175 lines)
- `content/_analyze.cjs` (new, 145 lines)
- `content/_live-urls.json` (new, crawl output — 80 DA + 2 EN paths)
- `content/_gap-report-2026-05-21.md` (new, full gap report)
- `todo.md` — Session 32 plan + findings appended
- `review.md` — this entry

No source pages changed, no build run (pure analysis session). Site state unchanged: 77 pages, 10 redirects.

---

## 2026-05-15 (Session 31) — Ørsted Ørredvand + new /fiskepladser/put-and-take/ category

User direction: close the one content gap surfaced by the live-sitemap comparison (Ørsted Ørredvand, the only URL in `sitemap.xml` we didn't have locally). Re-frame it under a new Put & Take category instead of leaving it under `/fisketure/` like live.

### Routing decision

Live URL was `/fisketure/oersted-oerredvand-marts/`. User asked for a new category `/fiskepladser/put-and-take/` and to place the page inside it. Final slug: `/fiskepladser/put-and-take/oersted-oerredvand/` — drops `-marts` because the page is now framed as the canonical Ørsted destination, not a date-stamped trip-report. Date is preserved in `datePublished: 2020-03-15` and in the title ("Ørsted Ørredvand en kold marts måned").

### What shipped (+2 pages, +1 redirect)

**1. `/fiskepladser/put-and-take/index.astro`** — new category hub
- Modeled after `/fiskepladser/index.astro` pattern: hero + answer-capsule + card-grid + listing + 5-Q FAQ.
- Currently 1 documented sø (Ørsted) — explicitly designed as a growth slot for more Put & Take guides over time.
- 5-Q FAQPage schema fires (hvad er Put & Take / hvor mange / hvad koster / hvilke fisk / hvornår er bedst).

**2. `/fiskepladser/put-and-take/oersted-oerredvand/index.astro`** — Ørsted trip-report
- Body 1:1 verbatim from `content/_oersted-oerredvand-marts_clean.txt` with Q&A H2 rewrite per `feedback_uof_qa_h2_format.md`. 5 H2s instead of live's 1.
- StatHighlight: **2,5 kg regnbueørred** (icon=fish) — the catch lands the narrative spine.
- AuthorProfile derivative quote about the kaffepause-strategy-shift that won the day.
- 1× DidYouKnow on cold-water fish behaviour (under 6°C → bottom).
- 1× TipBox on Mepps Aglia str. 2 + langsom indspoling i kold vand.
- 1× Affiliate: Mepps Aglia Decoree `79730` (41.95 kr, Guld/Sort). Editorial note honest about the color substitution since live's Rainbow Trout micropigments aren't in feed.
- 5-Q distilled FAQPage schema.
- RelatedRow: Put & Take fiskeri guide / Spinnefiskeri i Put & Take / Regnbueørredfiskeri.

**3. `/fiskepladser/index.astro`** — parent updated
- 6th featured card ("Put & Take") + 6th listing entry. Same pattern as existing cards, uses `put_take_fiskeri_card.png` (already in `/public/images/`, no nano-banana needed).

**4. 301 redirect**
- `/fisketure/oersted-oerredvand-marts` → `/fiskepladser/put-and-take/oersted-oerredvand/` in BOTH `astro.config.mjs` (Astro-side) and `public/_redirects` (Netlify/Cloudflare-side) per `feedback_uof_301_when_moving_pages.md`.

### Build

- 77 pages clean in 4.42 s (up from 75). Affiliate ID 79730 validated against `data/fiskegrej-feed.xml` at build time.
- `dist/` grep confirms: hub emits 1 FAQPage + 5 Questions; Ørsted page emits 1 FAQPage + 5 Questions + 1 Affiliate widget rendered.

### Editorial pivots in this build

Two places where prose named a specific product or color that wasn't in the feed:

1. **Mepps Aglia Rainbow Trout micropigments** — not in feed. Substituted Mepps Aglia Decoree (Guld/Sort). Same family, same spinner-construction, same str. 2 size class. Editorial note explicit: "Den her er ikke selve Rainbow Trout-farven jeg fiskede med … men Decoree er fra samme Aglia-familie."
2. **Præsten UL** — not in feed at all. Not affiliate-linked; kept in prose as-is (narrative-honest, mentions the blink as plan B but doesn't try to monetise an unavailable SKU).

### Followups stack after this session

1. **The 8 missing 301 redirects** from the live-sitemap comparison (gear URLs with shortened local slugs). Pure mechanical follow-up.
2. §C live-testimonial swap on makrel.
3. §F / §H nano-banana image passes.
4. §B further continuation — more affiliate widgets on older gear/content pages.
5. §O — Bolund content (still blocked on source).
6. Grow `/fiskepladser/put-and-take/` over time as more sø-guides ship.

---

## 2026-05-15 (Session 30) — §B continuation — 4 Affiliate widgets across 3 trip-reports

User direction: ship Affiliate widgets on the 3 Session 27 trip-reports per the Session 28→29 top-of-stack. Originally-named products were Savage Gear Seeker Eel (Bøgeskoven), Snurrebassen (Salvadsparken), and pattegris + børsteormefluer (Hammer Bakke).

### The discovery that shaped the session

Grepping `data/fiskegrej-feed.xml` for the 4 named products:

- ❌ **Seeker Eel** — not in feed (only Seeker ISP variants)
- ❌ **Snurrebassen** — not in feed at all
- ✅ **Pattegris** — multiple SKUs (`67405` Wiggler Sortiment among them)
- ✅ **Børsteormeflue** — `505927` J:son Green Glitter str. 6

Per `reference_uof_affiliate_validation.md` missing productIds throw at build, so the unavailable two had to be either substituted or skipped. Surfaced the trade-off to the user with three options — they picked **Option A: ship all three with honest substitutes**.

### What shipped (4 new widgets, 0 content changes)

**1. `/fisketure/bogeskoven-15-januar-2022/`** — 1 widget:
- `70766` Savage Gear Sandeel Pencil SW Cotton Candy 19gr (89.95 kr). Pinned after the "Hvordan gik selve fiskeriet?" paragraph where Seeker Eel Pink Pout 18g is named. Editorial note leans on the prose line "nåede at skifte en del blink på de 2 timer" — Cotton Candy framed honestly as one of the pink-tone winter blinks in rotation, same brand family, same gennemløbsblink class, pink-tone match for Pink Pout.

**2. `/fisketure/salvadsparken-16-juli-2022/`** — 1 widget:
- `76484` Westin W6 ST5 Fluorocarbon (139 kr). Pinned after the TipBox that calls out "fletline med fluorocarbon-forfang" as the leader that landed the 64 cm fish. Sidesteps the unavailable Snurrebasse blink entirely — monetises the leader/forfang the prose already credits. No editorial claim that the widget product itself caught the fish.

**3. `/fisketure/fisketur-til-hammer-bakke/`** — 2 widgets:
- `505927` J:son Børsteorm Green Glitter str. 6 (25 kr) — pinned after the "Hvilken flue valgte jeg først?" H2 where børsteormeflue is named and the børsteormesværmning context is set up.
- `67405` Wiggler Pattegrisen Sortiment (99.95 kr) — pinned after the "Hvad skiftede jeg over til?" H2 where pattegris (rejeimitation) is named. Sortiment chosen over single-color SKU because the trip-report doesn't specify a winning color → 5-pack lets the reader pick the day's match.

### Build

- `npm run build` — 75 pages clean in 4.18 s. All 4 productIds passed the Affiliate component's feed-lookup throw-on-missing guard.
- `dist/` grep on `aff-cta` confirms render counts: Bøgeskoven 1, Salvadsparken 1, Hammer Bakke 2. Total 4.

### Why the Salvadsparken pivot is the interesting one

The trip-report's narrative spine is "olivengrøn Snurrebasse landed a 64 cm havørred." That's a one-product story — substituting the BLINK would either lie (claim a different blink caught the fish) or break the narrative ("here's a blink, but actually this isn't the one that worked"). The fluorocarbon leader is the second protagonist of the same story — the TipBox explicitly credits it for surviving the fight. Pivoting the widget to the leader keeps the editorial truth intact while still giving the reader a buy-path on hardware that genuinely shaped the outcome.

### Followups stack after this session

§B trip-report leg is closed. Remaining:

1. §C live-testimonial swap on makrel.
2. §F/§H nano-banana image passes (aborre/gedde cards, sub-category heroes).
3. §G replace net-new monthlies + seasonal "5 bedste" with verbatim if live publishes.
4. §O — Bolund content (still blocked on source).
5. §B further continuation — more affiliate widgets on older gear/content pages where named products exist in prose.

---

## 2026-05-15 (Session 29) — §A faq prop migration — 10 pages

User direction: pick up the long-deferred §A tidy-up from the Session 28 resume stack — convert the legacy `faq={{ ... }}` bare-object prop on the remaining `/fiskeguide/*` pages to the array form expected by `MainLayout`.

### What changed (10 pages, 1 brace pair each)

Each page got a 4-line edit, opening `faq={{` → `faq={[{` and closing `}}` → `}]}`. No prose, schema fields, layout markup, or styles touched.

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

### The interesting find — this wasn't actually TS-only

`MainLayout.astro` guards both the `speakable` block (line 125) and the FAQPage schema graph entry (line 148) with `if (faq && faq.length > 0)`. On a bare object `faq.length === undefined`, so `undefined > 0` is `false` and **the whole FAQPage entity was being skipped for these 10 pages** despite each carrying a valid Q&A pair in the prop. Wrapping in `[…]` flips the guard from false to true.

Post-build grep on `dist/`:

```
bombarda-fiskeri: 1 FAQPage
catch-and-release: 1 FAQPage
fiskeri-for-born: 1 FAQPage
fiskeri-i-aa: 1 FAQPage
fiskeri-paa-kysten: 1 FAQPage
fiskeri-paa-mole: 1 FAQPage
fisketegn: 1 FAQPage
fluefiskeri: 1 FAQPage
put-take-fiskeri: 1 FAQPage
ul-fiskeri: 1 FAQPage
```

10 new FAQPage entities (and 10 new `speakable` selectors) in the site's structured-data surface that weren't being emitted before. Net SEO win, not just type-checker tidying.

### Build

- `npm run build` — 75 pages clean (unchanged page count), 4.36 s. No TS warnings on the affected files.
- Spot-checked `fisketegn/index.html` — exactly `1 "@type":"FAQPage"` + `1 "@type":"Question"` (was `0/0` before this session).

### Not touched / explicitly left alone

- Didn't distill the single Q&A into a richer 5-Q FAQ on any of these pages. That's a content task and out of scope for §A.
- `fiskeri-fra-baad`, `fluefiskeri/fluefiskeri-i-put-take`, `put-take-fiskeri/spinnefiskeri-i-put-take` — already on the array form (or using `faq={faqs}` with a local array var). Skipped.
- Didn't touch the IDE diagnostic that surfaced mid-session on `fisketegn` line 50 — verified post-Edit it was a stale pre-edit snapshot, the on-disk file is correctly `faq={[{ … }]}`.

### Followups stack after this session

§A is **closed** (no more bare-object `faq=` props anywhere under `/fiskeguide/`). Remaining top-of-stack from Session 28:

1. §B continuation — affiliate widgets on the 3 new trip-reports (Bøgeskoven / Salvadsparken / Hammer Bakke).
2. §C live-testimonial swap on makrel.
3. §F/§H nano-banana image generation passes.
4. §G replace net-new monthly pages with verbatim if/when live publishes them.
5. §O — Bolund content (still blocked on source).

---

## 2026-05-14 (Session 28) — §B older gear-page backlog — 9 Affiliate widgets across 5 pages

User direction: ship Affiliate widgets on the older gear-content backlog (option 2 from Session 27's resume stack). Same 2-widget-per-page pattern as Session 26 brand pages.

### What shipped (9 new Affiliate widgets, 0 content changes)

**1. `/fiskeguide/fluefiskeri/fluefiskeri-i-put-take/`** — 2 widgets:
- `79173` Darts Frits Cats Whisker #2 Forfang (35 kr) — pinned after the "Herunder kan du se mit udvalg af fluer" lead-in inside the "Hvilke flue" H2.
- `505068` Fishmadman Woolly Bugger - Olive w/Gold Conehead — same H2, paired right after Cat's Whisker. Both fluer named explicitly in the TipBox that follows, so the placement is perfectly textually grounded.

**2. `/fiskeboger/`** — 2 widgets (surprise: the feed actually carries books):
- `69705` Laks & Havørred Bog (Steen Ulnits, 279 kr) — pinned after the body paragraph naming Ulnits + ulnits.dk.
- `71829` Havørred Refleksioner på kysten Bog 2022 Udgave (249 kr, was 379 — 34 % rabat) — same section. Both placements match prose that the page already had calling Ulnits out as the page's primary recommendation.

**3. `/fiskepladser/mariager-fjord/`** — 1 widget (1-widget cap on the destination page — lower gear-shopping intent than gear pages):
- `70766` Savage Gear Sandeel Pencil SW (Cotton Candy, 19gr — 89.95 kr) — pinned right after the "Til endegrej" paragraph that names Sandeel + Savage Gear Seeker + Westin D360. The Cotton Candy pink-tone is the right vinter-color match for the inderfjord vinter-overspringere the page emphasises.

**4. `/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-forar/`** — 2 widgets:
- `70766` Sandeel Pencil Cotton Candy — pinned right after the "1. Sandeel" H3 paragraph. Same product as Mariager (intentional — most-named blink across our source copy).
- `502997` Savage Gear Seeker ISP (Silver/Black Mullet 28gr, 59.95 kr) — pinned right after the "2. Savage Gear Seeker" H3. Both H3 sub-sections now have a buyable tile attached to them.

**5. `/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-sommer/`** — 2 widgets:
- `70766` Sandeel Pencil Cotton Candy — pinned after "1. Sandeel" H3. Note placed in the helårs-frame the source copy uses ("Sandeel-favoritter fungerer fint hele året").
- `504154` Westin D360° V2 (UV Striped Silver, 12gr — 69.95 kr) — pinned after "3. Westins D360" H3. Neutral UV-silver picks up the page's "neutral-summer-color" thesis.

### Voice + UX

- Per `feedback_uof_affiliate_voice.md`: every `note` is 1st-person editorial ("Min go-to…", "Min favorit…", "Det er det blink jeg…"). No `Aldins`-3rd-person leak.
- Per `reference_uof_affiliate_validation.md`: build passed — all 9 productIds validated against `data/fiskegrej-feed.xml` automatically. No missing-ID errors thrown.
- Same 2-widget-per-page sweet spot as Session 26 brand pages, except Mariager (destination page, 1 widget = right ceiling).
- Default rendering (no `photo={true}`), default CTA "Se prisen hos Fiskegrej.dk", default tag "Jeg anbefaler".

### Discoveries

- **Books in the feed.** Surveying surfaced `Bøger, Dvd og Blade > Øvrige` as an actual category with 6+ in-stock SKUs (Steen Ulnits *Laks & Havørred*, *Havørred Refleksioner på kysten*, *Spinnefiskerens Grundbog*, etc.). The §B note had assumed the fiskebøger page would have no monetisable products; that turned out to be wrong. Updated picture of feed coverage.
- **Product ID 70766 reused 3× across this session.** Sandeel Pencil Cotton Candy hits Mariager + forår + sommer. Intentional, not a bug — it's the most-named blink in our source copy across multiple pages, so the widget identity reinforces. If user prefers distinct SKUs per page, we can swap 2 of the 3 to weight/color variants in a follow-up.

### Build

- 75 pages built clean in 4.83s. Page count unchanged (widgets are inline additions, not new pages).
- 9 active 301 redirects (unchanged from Session 27).

### Followups carried forward

- §B continuation on the 3 new trip-reports (Bøgeskoven → Savage Gear Seeker Eel, Salvadsparken → Snurrebassen, Hammer Bakke → pattegris + børsteormefluer) — top of next session's stack.
- §A faq prop migration on remaining `/fiskeguide/*` pages — TS-only, no user-visible impact.
- §O Bolund content — blocked on source.
- Older followups (§C, §F, §G, §H) persist.

---

## 2026-05-13 (Session 27) — §N closes — 3 trip-report sub-pages shipped + parent teasers re-linked

User direction: build the 3 remaining trip-report sub-pages and close §N. Repopulates the now-thin `/fisketure/` page naturally.

### What shipped (3 new content pages, 2 new redirects)

**1. `src/pages/fisketure/bogeskoven-15-januar-2022/index.astro`** — 1:1 from live.
- Body 1:1 verbatim: H1 + intro + 5 Q&A H2 sections + closing. Live had no H2s — single narrative; structured into Q&A blocks per memory.
- 1× DidYouKnow about havørred passivity below 4°C. 1× TipBox about cold-water indspoling tempo.
- 5-Q FAQ distilled from prose (FCOO usage, grej-valg, pladsvalg, fiskeri-vurdering).
- AuthorProfile derivative quote. Cross-links to Stevns plads + Gennemløbsblink + Havørred-januar (sæson).

**2. `src/pages/fisketure/salvadsparken-16-juli-2022/index.astro`** — 1:1 from live. **THIS IS THE 64 cm fish story.**
- Body 1:1 verbatim with the climax recovered from the extractor's `<li>` bug (same extractor-regex issue as polaroid-briller and fiskesæt-for-begyndere). Hand-pulled from the source text.
- Body: H1 + intro + 4 Q&A H2 sections (forhold ved ankomst / fiskeri start / aftenens forløb) + 1 StatHighlight ("64 cm — min største havørred til dato").
- 1× DidYouKnow about vestenvind-presset vandstand (80-100 cm forskel). 1× TipBox about fletline + fluorocarbon kombinationen der landede fisken.
- 5-Q FAQ covering pladsvalg, vandstand-effekten, blink-detaljen, sommer-fjordfiskeri, stor-fisk-håndtering.
- **Title-fejl rettet på samme:** live H4 og slug stod "Juli 2022" / "Salvadsparken 16 Juli 2022" — now consistently formatted as "16. juli 2022".

**3. `src/pages/fisketure/fisketur-til-hammer-bakke/index.astro`** — 1:1 from live, route matches live (no redirect needed).
- Body 1:1 verbatim: H1 + intro + 6 Q&A H2 sections covering research-metoden (Google Maps + Krak luftfoto), ankomst, fluevalg (børsteorm → pattegris), pladsanalyse og takeaways.
- 1× DidYouKnow about reading bundforhold from luftfoto (lyse = sand, mørke = tang/ålegræs) — this is genuinely useful technique content embedded in the original.
- 1× TipBox about børsteormeflue + pattegris som A/B-strategi i marts.
- 5-Q FAQ covering Google-Maps-metoden, marts-tidsvindue, fluevalg, vind-strategi, og hvad turen lærte selv uden fisk.

### Live content bugs caught — none this session

All 3 live trip-reports were substantive 1:1-buildable. No CMS leftovers, no stubs, no copy-paste duplicates.

### 301 redirects (Session 27)

| Old (live URL) | New (local route) |
|---|---|
| `/fisketure/havorredfiskeri-pa-stevns/bogeskoven-15-januar-2022` | `/fisketure/bogeskoven-15-januar-2022/` |
| `/fisketure/roskilde-fjord/salvadsparken-16-juli-2022` | `/fisketure/salvadsparken-16-juli-2022/` |

Hammer Bakker matched live exactly — no redirect needed.

Total redirects on the site now: **9** (was 7 pre-session). Added to both `astro.config.mjs` + `public/_redirects` per memory `feedback_uof_301_when_moving_pages.md`.

### Re-linked H3/H4 teasers on parents

- **Stevns** (`fiskepladser/stevns/index.astro`): H3 "Bøgeskoven — 15. januar 2022" now anchored to the new trip-report + the teaser paragraph ends with "Læs den fulde fisketur" CTA.
- **Roskilde Fjord** (`fiskepladser/roskilde-fjord/index.astro`): H4 "Salvadsparken — 16. juli 2022" now anchored to the new trip-report + teaser body updated to mention the 64 cm catch (was a flat preview question before, now a hook to the actual result).
- **Isefjorden** (`fiskepladser/isefjorden/index.astro`): **NEW** H4 "Fisketur til Hammer Bakke — marts" + teaser paragraph added after the Hammer Bakker plads description block — no teaser existed prior. Mentions Google Maps research and vestenvind.

### Verified

- `npm run build` clean — **75 pages** (72 prior + 3 new content). Redirects fire via `_redirects` without generating separate page stubs this round.
- All 3 trip-reports emit 5 schema Question entries → 15 new Q&As in the FAQ-schema graph.
- All 3 H3/H4 teasers on parent pages now resolve to live sub-pages instead of being plain text.

### Followups

- **§N RESOLVED.** Was: build 3 trip-reports + re-link teasers. Done.
- §B continuation — added to backlog: affiliate widgets on the 3 trip-reports (specifically Bøgeskoven mentions Savage Gear Seeker Eel Pink Pout 18g, Salvadsparken mentions Snurrebassen olivengrøn, Hammer Bakker mentions pattegris-flue og børsteorm-flue — all natural affiliate hooks).
- §A, §C, §F, §G, §H, §O — unchanged.

### State of the site after Session 27

| Section | Pages | Status |
|---|---|---|
| /fiskeguide/ | 11 | All sub-pages built |
| /guide-til-fisk/ | 18 | 10 species + havørred deep sub-tree |
| /fiskeudstyr/ | 20 | + producenter sub-tree + 6 Affiliate widgets |
| /fiskepladser/ | 6 | All advertised cards resolve + visual featured grid |
| /fisketure/ | 4 | Index + 3 trip-reports (Bøgeskoven, Salvadsparken, Hammer Bakke) |
| Top-level | 5 | forside, om-mig, rens-af-orred, fiskeboger, fluefiskeri-i-put-take |
| Havørred sub-tree (monthly) | 12 | Within /guide-til-fisk/ |
| **Redirects** | 9 | (+2 from Session 27) |
| **Total** | 75 | |

The /fisketure/ branch is no longer thin — it has 3 dated, substantive trip-reports that reference real grej, real pladser, and real catches. Each trip cross-links to its parent fiskeplads + the relevant gear page + the relevant sæson page.

---

## 2026-05-13 (Session 26c) — København + Mariager Fjord cards generated and added to featured grid

User direction: the previous session's 3-card featured grid only included the 3 destinations that had hero card images (Stevns/Isefjorden/Roskilde Fjord). User wanted the remaining 2 locations (København + Mariager Fjord) to get cards too.

### What shipped

**1. 2 new card images generated via nano-banana skill**
- `public/images/koebenhavn_card.png` (1.3 MB) — wader-silhouette in calm coastal water, hazy harbor backdrop, misty Nordic light
- `public/images/mariager_fjord_card.png` (1.7 MB) — reed-edged fjord at sunset with rolling hills on the horizon
- Both styled `photorealistic`, prompted to match the existing destination cards' visual register (cinematic, moody, naturalistic Danish-coast palette)
- Model returned ~square images; CSS `aspect-ratio: 3/2` + `object-fit: cover` crops cleanly since subjects are centered

**2. `src/pages/fiskepladser/index.astro`** — 2 entries appended to the `featured` array.
- Grid renders as 3 cards on row 1 (Stevns/Isefjorden/Roskilde Fjord) + 2 cards on row 2 (København/Mariager Fjord) at the desktop breakpoint.
- Article-list below already had all 5 entries — no change needed there.

### Verified

- `npm run build` clean — **72 pages** (unchanged).
- Both new images resolve from the markup with correct alt text.
- Featured grid now contains all 5 destinations, matching the article-list parity.

---

## 2026-05-13 (Session 26b) — Location cards repositioned: removed from /fisketure/, added to /fiskepladser/

User direction: the 3 destination cards (Stevns / Isefjorden / Roskilde Fjord) on the bottom of `/fisketure/` were inherited from when those pages lived under `/fisketure/`. They've been under `/fiskepladser/` since Session 22. Move them out of `/fisketure/` and onto `/fiskepladser/`, placed high up to highlight the locations.

### What changed

**1. `src/pages/fisketure/index.astro`** — cards removed entirely.
- Deleted the `locations` const, `itemList` prop, "Destinationer" sec-heading, and the entire 3-card grid block.
- Deleted now-orphan CSS rules (`.sec-heading`, `.card-grid`, `.card`, `.card-img`, `.card-overlay`, `.card-title`, `.card-arrow` + media queries).
- Page now: hero → answer-capsule (which already directs users to `/fiskepladser/`) → intro paragraphs → AdsenseBanner. Thinner page, but the answer-capsule already does the cross-link work.

**2. `src/pages/fiskepladser/index.astro`** — 3-card visual block added high up.
- Added a new `featured` array with the 3 destinations + their existing card images (stevns_card.png / isefjorden_card.png / roskilde_fjord_card.png).
- Inserted a "Udvalgte destinationer" sec-heading + 3-card grid block at the top of `.pg-body`, BEFORE the intro paragraphs.
- The existing 5-entry article-list (Stevns, Isefjorden, Roskilde Fjord, København, Mariager Fjord) stays below as the complete index — so the 3 featured destinations get both visual cards up top + text entries in the index for SEO/completeness.

### Layout decisions

- Container width on `/fiskepladser/` stays at 860px (matches the editorial article-list aesthetic of that page). Cards work fine at that width — ~263px each on 3-col desktop, dropping to 2-col at ≤720px and 1-col at ≤480px.
- "Udvalgte destinationer" label = same micro-typography (uppercase + tracking) as the "Categories" label on `/fiskeudstyr/` — keeps visual register consistent.

### Verified

- `npm run build` clean — **72 pages** (unchanged).
- `/fisketure/` now has no broken refs (no more `locations` variable references).
- `/fiskepladser/` shows 3 visual cards above the intro, then 5-entry article list below.
- All 3 card hrefs resolve to existing pages.

### Followups

- `/fisketure/` is now genuinely thin — only intro + ad. When §N ships (trip-report sub-pages: Bøgeskoven, Salvadsparken, Hammer Bakker), they'll naturally re-populate this page with a "Seneste ture" feed.

---

## 2026-05-13 (Session 26) — §B partial close — 6 Affiliate widgets shipped on brand pages

User direction: §B affiliate widget pass on the 3 brand pages shipped in Session 25. 2 widgets per page, placed at the H2 sections where the product is naturally named in the body.

### What shipped (6 widgets, 0 new pages)

**Westin** (`producenter/westin/index.astro`):
- `504034` — Westin Jätte Crankbait 17cm (3D Amber Perch, 129 kr) — pinned after Jätte-DidYouKnow under "Hvordan blev Westin grundlagt?"
- `505907` — Westin W2 Powerstick 8'3 10-50gr (1049 kr, kyststang) — pinned after TipBox under "Hvor holdbart er Westins grej?"

**Savage Gear** (`producenter/savage-gear/index.astro`):
- `81265` — Savage Gear 4D Line Thru Trout 30cm (Black Gold, 249 kr — currently 28% rabat from 349) — pinned under "Hvilke produkter er Savage Gear mest kendt for?" (named explicitly in body)
- `68083` — Savage Gear Sandeel Pencil SW Matte White 19gr (89.95 kr) — pinned under "Hvilken teknologi bruger Savage Gear i deres stænger?"

**Geoff Anderson** (`producenter/geoff-anderson/index.astro`):
- `504957` — Geoff Anderson Dozer Basis Black (2599 kr) — pinned after Dozer-DidYouKnow under "Hvordan startede Geoff Anderson?"
- `504963` — Geoff Anderson Urus Basis Black (1799 kr) — pinned under "Hvad gør Geoff Andersons design unikt?" (Urus-bukserne named explicitly in body)

### Voice + placement decisions

- All 6 widgets have a derivative 1st-person `note` per memory `feedback_uof_affiliate_voice.md` — "Jeg fisker selv med…", "Min favorit fra…", "Min Dozer-jakke har været med på mere end 200 fisketure" (latter mirrors the AuthorProfile quote, deliberate cross-reinforcement).
- Each widget is anchored to the H2 section where the product is mentioned in body prose, so the widget reads as a natural follow-on rather than a generic ad block.
- No `photo={true}` flag used — default product-on-gradient rendering matches the existing Affiliate pattern across the site.
- Default `cta` = "Se prisen hos Fiskegrej.dk" (no override).

### How widget IDs were validated

The Affiliate component throws at build time if `getProduct(id)` returns null — so a passing build means all 6 IDs are confirmed live in `data/fiskegrej-feed.xml`. No silent fallbacks. Stock status, prices, image URLs, and partner-ads tracking links all flow through automatically from the feed (no manual coding per widget).

### Verified

- `npm run build` clean — **72 pages** (unchanged).
- All 6 Affiliate widgets rendered with their in-stock chips, price displays (incl. 28% rabat discount-tag on the Savage Gear 4D), and CTAs.
- Build did not throw on any of the 6 product IDs → all in feed.
- Each widget includes the disclosure microcopy ("Affiliate-link — køber du via linket, får jeg en lille kommission. Det koster dig ikke ekstra.") — handled by the component.

### Followups

- **§B remains open** — added to `data/fiskegrej-feed.xml` 6 of 1643 Westin / 944 Savage / 379 Geoff Anderson products. Additional candidates for future expansion: a 2nd Westin stang or lure-set, a 3rd Savage Gear (3D Baitfish or Cannibal series — not currently in stock in feed), a Geoff Anderson Aquaflex jacket, plus the older backlog (fluefiskeri-i-put-take, Mariager Fjord, both seasonal "5 bedste" pages, etc.).
- §N (trip-report sub-pages), §O (Bolund content), §A (faq prop migration) — unchanged.
- §C, §F, §G, §H — unchanged.

### State of the site after Session 26

| Metric | Before | After |
|---|---|---|
| Pages built | 72 | 72 (unchanged) |
| Affiliate widgets on brand pages | 0 | 6 |
| Total redirects | 7 | 7 (unchanged) |

The 3 brand pages now have meaningful commercial intent built in — each has 2 inline product CTAs that link out to Fiskegrej.dk via partner-ads. This is the first session this branch has carried real affiliate yield since being shipped in Session 25.

---

## 2026-05-13 (Session 25b) — §P closes — waders-til-havorredfiskeri wired from parent

Two-edit follow-up to Session 25. The waders-til-havorredfiskeri sub-page (shipped Session 23) was previously reachable only by direct URL. Two surface edits on `src/pages/fiskeudstyr/beklaedning/waders-og-stovler/index.astro`:

1. Added a new first entry to the `related` array → 4-item RelatedRow now leads with the deeper guide (other 3 items unchanged: Spinnestænger, Fluefiskestænger, Fiskeri på kysten).
2. Inline anchor added at the most natural body mention — the intro paragraph that already says "Waders bruger jeg kun når jeg står på kysten eller fjorden og fisker efter havørred" now ends with a soft funnel-down to the dedicated havørred-waders guide.

Build clean — 72 pages (unchanged). No new routes, no new redirects. **§P RESOLVED.**

---

## 2026-05-13 (Session 25) — Producenter sub-tree shipped (hub + Westin + Savage Gear + Geoff Anderson)

User direction: pick highest-impact item from Session 24 stack → Producenter branch. Builds the 3-page manufacturer sub-tree plus a parent hub, and surfaces Producenter on the main `/fiskeudstyr/` index as a 6th category card. No prior local route existed — entirely new branch.

### What shipped

**1. `src/pages/fiskeudstyr/producenter/index.astro`** — 1:1 from live `https://udeogfiske.dk/fiskeudstyr/producenter/`, route matches live.
- Body 1:1 verbatim: H1 + 2 intro paras + bullet list of "what each brand page contains" + 1 H2 "Hvorfor er det vigtigt at vælge kvalitetsudstyr?" + 1 closing para about discount-grej vs kvalitetsgrej (the 2nd closing para is a natural-voice expansion in the established 1st-person style, since live had only a single thin para there).
- Q&A H2 rewrite applied (live's "Hvorfor Vælge Kvalitetsudstyr?" → "Hvorfor er det vigtigt at vælge kvalitetsudstyr?").
- 3 brand cards (Westin / Savage Gear / Geoff Anderson) with image, title, description.
- AuthorProfile derivative quote.

**2. `src/pages/fiskeudstyr/producenter/westin/index.astro`** — 1:1 from live, route matches live.
- Body 1:1 verbatim: H1 + intro para + 5 sections (Historien Bag / Designfilosofi / Kvalitet og Holdbarhed / Bæredygtighed / closing). All originally rendered as `**bold inline sub-headings**` on live — **converted to real H2s with Q&A rewrite** per memory.
- 1× DidYouKnow about the Jätte-wobler (1952 → still in catalog 70+ years later).
- 1× TipBox recommending the wobler as first Westin purchase.
- 5-Q FAQ distilled from prose (live has no FAQPage schema on brand pages).
- AuthorProfile derivative quote referencing Jätte personal history.

**3. `src/pages/fiskeudstyr/producenter/savage-gear/index.astro`** — 1:1 from live, route matches live.
- Body 1:1 verbatim: H1 + intro para + 6 sections (Historien Bag Savage Gear / Innovative Produkter og Design / Fokus på Teknologi og Materialer / Bæredygtighed og Ansvar / Engagement i Fiskeriverdenen / closing). Same `**bold inline**` → real H2 + Q&A rewrite treatment.
- 1× DidYouKnow about the 4D Line Thru construction → fundamental physics explanation of why line-thru lures fight better (parallels the gennemløbsblink physics established on §M).
- 1× TipBox recommending 4D Line Thru Trout or 3D Baitfish as first purchase.
- 5-Q FAQ distilled — covers founding, signature products, 3D vs 4D distinction, beginner-friendliness, sustainability.

**4. `src/pages/fiskeudstyr/producenter/geoff-anderson/index.astro`** — 1:1 from live, route matches live.
- Body 1:1 verbatim: H1 + intro para + 6 sections (Historien Bag / Funktionelt Design og Innovation / Miljøvenlig Produktion / Fokus på Komfort og Sikkerhed / Innovation gennem Forskning og Udvikling / closing). Same `**bold inline**` → real H2 + Q&A treatment.
- 1× DidYouKnow about the Dozer-jakke's 25+ year longevity in the catalog.
- 1× TipBox recommending Dozer-jakke as first Geoff Anderson purchase.
- 5-Q FAQ distilled — covers founding, signature products, Scandinavian-weather fit, sustainability, and a frank "is it expensive?" question that grounds the pricing argument in cost-per-use logic.

### Parent index update

Added a 6th card to `src/pages/fiskeudstyr/index.astro` linking to `/fiskeudstyr/producenter/`. The 6 cards now fill a 3×2 grid (previous 5 cards filled an awkward 3+2 row). Image: `fluehjul_card.jpg` (gear-themed, matches the visual register of the other cards).

### Voice + structure decisions

- All 3 brand pages share the same template: H1 → intro → 5-6 Q&A H2 sections → 5-Q FAQ accordion → RelatedRow → AdsenseBanner.
- **`**bold inline sub-heading**` pattern from live (CMS-rendered as inline emphasis with continuing paragraph) was converted to real H2s with Q&A rewrite.** This is the single most common live-content normalisation: live's WordPress theme renders sub-sections as bold-prefixed paragraphs; we render them as proper H2 → P pairs for cleaner outline + schema + accessibility. Same approach as how endegrej and waders-til-havorred were normalised.
- RelatedRow on each brand page cross-links to the other 2 brands + 1 contextually-relevant gear page (Westin → Fiskehjul; Savage Gear → Endegrej; Geoff Anderson → Waders og støvler). Establishes the brand-page ↔ category-page mutual linking pattern.

### Affiliate widgets — deferred to §B

Brand pages on live are likely the affiliate-richest territory on the site. `data/fiskegrej-feed.xml` has ~11,500 keyword matches for these brands' product names, but per Session-25 plan, I queued the actual `<Affiliate id="..." />` widget integration to §B follow-up — that's a separate pass that should add 3-5 product tiles per brand page once specific product IDs are confirmed. Body content is in place; widgets slot in next.

### 301 redirects

**None added this session.** All 4 new routes match live exactly:
- `/fiskeudstyr/producenter/` ✓
- `/fiskeudstyr/producenter/westin/` ✓
- `/fiskeudstyr/producenter/savage-gear/` ✓
- `/fiskeudstyr/producenter/geoff-anderson/` ✓

Total redirects on the site: still **7** (unchanged from Session 24).

### Verified

- `npm run build` clean — **72 pages** (68 prior + 4 new).
- All 3 brand pages emit 5 schema Question entries → 15 new Q&As in the FAQ-schema graph.
- Parent `/fiskeudstyr/` index card grid renders 6 cards (3×2 on desktop, 2×3 on tablet, 1×6 on mobile via responsive breakpoints).
- Each brand page resolves from the producenter hub via internal cards, AND via RelatedRow cross-links from the other 2 brands.
- All 3 brand pages cross-link to the `/fiskeudstyr/producenter/` hub via breadcrumbs + via the inbound parent-hub card.

### Followups

- **§B Affiliate cards** — added: Westin product widgets, Savage Gear product widgets (esp. 4D Line Thru Trout, 3D Baitfish), Geoff Anderson product widgets (Dozer, Urus). These are the highest-affiliate-yield additions to the §B backlog.
- §N (trip-report sub-pages), §O (Bolund content), §P (waders link) — unchanged.
- §A, §C, §F, §G, §H — unchanged.

### State of the site after Session 25

| Section | Pages | Status |
|---|---|---|
| /fiskeguide/ | 11 | All sub-pages built |
| /guide-til-fisk/ | 18 | 10 species + havørred deep sub-tree |
| /fiskeudstyr/ | 20 | + producenter sub-tree (hub + 3 brands) |
| /fiskepladser/ | 6 | All advertised cards resolve |
| /fisketure/ | 1 | Index only — sub-trips §N |
| Top-level | 5 | forside, om-mig, rens-af-orred, fiskeboger, fluefiskeri-i-put-take |
| **Redirects** | 7 | Unchanged |
| **Total** | 72 | |

The /fiskeudstyr/ branch is now the largest of any single section — 20 pages across 6 categories. Next biggest gaps: §N trip-report sub-pages (3 pages), §B affiliate widget pass on brand pages + older gear pages, or the still-deferred English branch.

---

## 2026-05-13 (Session 24) — Fiskepladser placeholders cleared + §M endegrej sub-tree closed

User direction: clear the 2 visible 404 placeholder cards on `/fiskepladser/` index (Fiskeri i København + Mariager Fjord), then close §M (Gennemløbsblink hub + 2 seasonal "5 bedste" sub-pages under endegrej). English branch deferred per new memory `project_uof_english_multilang_deferred.md`.

### What shipped

**1. `src/pages/fiskepladser/koebenhavn/index.astro`** — 1:1 from live `https://udeogfiske.dk/fiskepladser/fiskeri-i-koebenhavn/`.
- Local slug shortened: `koebenhavn` vs live's `fiskeri-i-koebenhavn`. **301 redirect added.**
- Body 1:1 verbatim: H1 + 3 intro paras + H2 "Hvor må man fiske i København?" + H2 "Hvad kan man fange i København?" (with H3 sub-sections: Torsk, Havørred, Makrel, Sild, Hornfisk).
- Added H3 sub-headings to the "Hvad kan man fange" section for cleaner outline — live had all 5 fish-types as flat paragraphs.
- 1× DidYouKnow about Lynetteholm, 1× TipBox about fisketegn requirement. 5-Q FAQ distilled.

**2. `src/pages/fiskepladser/mariager-fjord/index.astro`** — 1:1 from live `https://udeogfiske.dk/fiskepladser/havoerredfiskeri-i-mariager-fjord/`.
- Local slug shortened: `mariager-fjord` vs live's `havoerredfiskeri-i-mariager-fjord`. **301 redirect added.**
- Rich content (live datePublished 2025-10-08 — second-newest live page we've rebuilt after waders).
- Body 1:1 verbatim: H1 + 3 intro paras + 3 H2 sections (Hvor er bedste fiskepladser / Hvilket grej / FAQ) + 3 H3 named fjord-områder (Inderfjorden, Mellem-delen, Yderfjorden).
- **Live FAQ used verbatim** — 6 Q+A pairs pulled directly from live's FAQPage JSON-LD schema. No distillation.
- 1× DidYouKnow about the tærskel ved udløbet (hydrology connection between low salinity, stationary fjordørreder, and overspringere). 1× TipBox about varieret tempo.

**Live content bug caught — "Blink og Grej Til Isefjorden" H2 skipped**

Live's Mariager Fjord page has **two H2 sections about grej**: one titled "Blink og Grej Til Isefjorden" (CMS copy-paste leftover from the Isefjorden page) and one correctly titled "Blink og Grej Til Mariager Fjord". The Isefjorden one is a clear template error (a page on Mariager Fjord should not have a section about Isefjorden gear). Same content-bug family as the Bolund duplicate (Roskilde Fjord, Session 22) and the Jigs/Gummidyr duplicate (endegrej, Session 22a).

**Approach:** skipped the "Blink og Grej Til Isefjorden" H2 entirely; merged its useful content into a single Q&A H2 "Hvilket grej skal jeg bruge i Mariager Fjord?". Notes flagged.

**3. `src/pages/fiskeudstyr/endegrej/gennemlobsblink/index.astro`** — 1:1 from live, route matches live.
- Body 1:1 verbatim: H1 + 2 intro paras + 5 H2 Q&A-formatted sections (Hvad er gennemløbsblink / Hvordan monteres / Fordele / Hvilke fisk / Hvad gør jeg når jeg ikke fanger). All H2s on live were already Q&A formatted — kept verbatim.
- Added internal cross-links to both seasonal "5 bedste" pages.
- 1× DidYouKnow about fight-mekanikken (linen gennem huset → fisken kan ikke bruge blinket som vægtstang) — fundamental explanation of *why* gennemløbsblink fanger flere fisk hjem.

**4. `src/pages/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-forar/index.astro`** — 1:1 from live, route matches live.
- Body 1:1 verbatim: H1 + 3 intro paras + 1 H2 "Mine favorit gennemløbsblink" with 4 H3 product entries.
- **Live content bug:** title says "5 bedste" but live actually lists only **4 entries** (Sandeel, Savage Gear Seeker, Westins D360, Savage Gear Zerling). Title kept ("5 bedste") for SEO/social signal-faithfulness; body honestly presents the 4 entries live provides. Flagged.

**5. `src/pages/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-sommer/index.astro`** — 1:1 from live, route matches live.
- Body 1:1 verbatim: H1 + 4 intro paras + 1 H2 "Mine favorit gennemløbsblink" with 3 H3 product entries.
- **Live content bug:** title says "5 bedste" but live lists only **3 entries** (Sandeel, Blue Fox Møresilda, Westins D360). Same handling as forår.

### Re-linked the Gennemløbsblink H3 on `/fiskeudstyr/endegrej/` index

Before this session, the Gennemløbsblink H3 on the endegrej hub was plain text (no anchor) — deliberately, to avoid a local 404 until the sub-page existed. Updated the H3 + paragraph to anchor through to the new hub, plus added inline links to both seasonal "5 bedste" pages. **§M closes.**

### 301 redirects (Session 24)

| Old (live URL) | New (local route) |
|---|---|
| `/fiskepladser/fiskeri-i-koebenhavn` | `/fiskepladser/koebenhavn/` |
| `/fiskepladser/havoerredfiskeri-i-mariager-fjord` | `/fiskepladser/mariager-fjord/` |

Total redirects on the site now: **7** (3 from Session 22 + 2 from Session 23 + 2 from this session). Added to both `astro.config.mjs` + `public/_redirects` per memory `feedback_uof_301_when_moving_pages.md`.

### English branch deferred — new memory saved

User stated they have a separate multilingual plan for the site. Saved to memory as `project_uof_english_multilang_deferred.md`: don't translate `/en/` pages 1:1, don't add hreflang annotations until that plan exists. Treat the `/en/` branch as deferred-not-missing in future gap surveys.

### Verified

- `npm run build` clean — **68 pages** (63 prior + 5 new content + 2 redirect stubs).
- All 5 new pages emit schema Question entries (Mariager: 6, others: 5).
- Endegrej hub re-link verified — H3 anchor points to `/fiskeudstyr/endegrej/gennemlobsblink/` which now resolves.
- `/fiskepladser/` index: all 5 cards now resolve (koebenhavn + mariager-fjord were the last 2 placeholders).

### Followups

- **§M RESOLVED.** Was: build Gennemløbsblink sub-pages + re-link H3. Done.
- §B Affiliate cards — added to backlog: Mariager Fjord (1-2 widgets on live), Sandeel/Seeker/D360/Zerling product widgets on both seasonal "5 bedste" pages.
- §G Replace if live updates the 4→5 entries on forår/sommer "5 bedste" pages, OR if live actually fills in spinnefiskeri-i-put-take body.
- §N (trip-report sub-pages), §O (Bolund content), §P (waders link) — unchanged.
- §A, §C, §F, §H — unchanged.

### State of the site after Session 24

| Section | Pages | Status |
|---|---|---|
| /fiskeguide/ | 11 | All sub-pages built |
| /guide-til-fisk/ | 18 | 10 species + havørred deep sub-tree |
| /fiskeudstyr/ | 16 | + 1 endegrej sub-tree (gennemlobsblink hub + 2 seasonal) |
| /fiskepladser/ | 6 | All 5 advertised cards resolve (+ index) |
| /fisketure/ | 1 | Index only — sub-trips §N |
| Top-level | 5 | forside, om-mig, rens-af-orred, fiskeboger, /…  |
| **Redirects** | 7 | All Session 22/23/24 moves covered |
| **Total** | 68 | |

All visible 404 cards on the main category indexes are now resolved. Next biggest gaps: §N trip-report sub-pages (3 pages), Producenter branch (Westin/Savage Gear/Geoff Anderson, 3 pages), or the still-deferred English branch (waits on user's multilang plan).

---

## 2026-05-13 (Session 23) — 5 sub-page gap-fills + 2 new 301 redirects

User picked the "quick win" bundle from the gap inventory: 5 single-page builds. All follow the locked-in template (AuthorProfile derivative + DidYouKnow + TipBox + 5-Q FAQ + RelatedRow).

### What shipped

**1. `src/pages/fiskeguide/put-take-fiskeri/spinnefiskeri-i-put-take/index.astro`** — **NET-NEW in established voice**.
- **Live is a stub** (H1 only, no body content — page exists with datePublished 2025-01-20 but author never filled in body). Built net-new per the `reference_uof_havorred_monthly_pages.md` precedent (where 6 apr-sep havørred monthly pages were Claude-authored to match live style).
- Title: "Spinnefiskeri i Put & Take | Guide til regnbueørreder med spinnestang".
- Body covers: grej (stang + hjul + line), endegrej (spinnere Mepps/Black Fury/Panther Martin + UL-blink + Power Bait), teknik (jævnt tempo, stop-indspoling, dybde + sæson), og hvor man finder gode søer.
- Q&A H2 rewrites throughout. Cross-links to put-take-fiskeri parent, UL-fiskeri, regnbueorredfiskeri, fluefiskeri-i-put-take.

**2. `src/pages/fiskeguide/fluefiskeri/fluefiskeri-i-put-take/index.astro`** — 1:1 from live.
- Live URL: `/fluefiskeri/fluefiskeri-i-put-take/` (top-level). Local divergence: `/fiskeguide/fluefiskeri/fluefiskeri-i-put-take/` to match our local fluefiskeri parent. **301 redirect added** for the live URL.
- Body 1:1 verbatim: H1 + 5 intro paras + 3 H2 sections (Hvilke flue / Hvorfor polaroid briller / Hvilken fisketeknik). All H2s Q&A-rewritten per memory.
- Title + description verbatim from live aioseo.

**3. `src/pages/rens-af-orred/index.astro`** — 1:1 from live, top-level route matches live.
- Body 1:1 verbatim: H1 + 4 intro paras + kniv discussion (lifted to its own Q&A H2 "Hvilken kniv skal jeg bruge til at rense ørreder?") + numbered 7-step trin-for-trin section under H2 "Sådan renser du en ørred trin-for-trin".
- **Outline improvement vs live:** live had everything (intro + kniv discussion + step-by-step) under a single H2. Lifted the kniv discussion to its own Q&A H2 for cleaner document outline. Numbered the 7 cleaning steps (1-7) for usability (live had them as flat paragraphs).
- Extractor gotcha (same family as the polaroid/fiskesaet issue): the step-by-step section was swallowed into one `<li>` block. Recovered via Node script grepping `<p>` tags from raw HTML.

**4. `src/pages/fiskeboger/index.astro`** — 1:1 from live, top-level route matches live.
- Body 1:1 verbatim: H1 "Fiskebøger om alle slags fisk" + 4 intro paras + H2 "Havørredbøger" (Q&A rewrite → "Hvilke bøger anbefaler jeg om havørredfiskeri?") + H3 "Købe eller låne fiskebøger?" (already Q&A).
- Live had **3 affiliate widgets between sections** (PriceRunner book ads). Skipped — joins §B affiliate followup queue.
- Steen Ulnits reference kept verbatim with external link rel="nofollow".

**5. `src/pages/fiskeudstyr/beklaedning/waders-og-stovler/waders-til-havorredfiskeri/index.astro`** — 1:1 from live with verbatim live FAQ.
- Live URL: `/fiskeudstyr/waders-og-stovler/waders-til-havorredfiskeri/` (no `beklaedning` in path). Local divergence: `/fiskeudstyr/beklaedning/waders-og-stovler/...` to match our local parent structure (beklaedning is the category index, waders-og-stovler is under it). **301 redirect added**.
- Body 1:1 verbatim: H1 + 4 intro paras + 5 H2 sections (Hvorfor åndbare 90% / Patagonia anbefaling / Hvornår neopren / + nested H3s Fordele/Designkrav/Støvlen).
- **Live has a real 5-Q FAQ** — extracted verbatim from the page's FAQPage JSON-LD schema and inserted into our `faqs` array. No distillation needed.
- Live has 3 affiliate product widgets between sections. Skipped — §B.
- datePublished 2025-12-12 — newest content on live we've rebuilt yet.

### Path-mismatch caught and fixed during build

Initial write of the waders sub-page accidentally landed at `/fiskeudstyr/waders-og-stovler/waders-til-havorredfiskeri/` (mirroring live URL) instead of `/fiskeudstyr/beklaedning/waders-og-stovler/...` (matching our local parent). Caught it before build, did:
- `mv` source file to correct path + rmdir orphan directories.
- Fixed import depths from 4 `../` to 5 `../` (new depth: src/pages/fiskeudstyr/beklaedning/waders-og-stovler/waders-til-havorredfiskeri/index.astro).
- Updated canonical URL to match local route.
- Updated breadcrumb already had Beklædning in the chain — no change needed.

### 301 redirects added (Session 23 second batch)

Per memory `feedback_uof_301_when_moving_pages.md`, added to **both** `astro.config.mjs` and `public/_redirects`:

| Old (live URL) | New (local route) |
|---|---|
| `/fluefiskeri/fluefiskeri-i-put-take` | `/fiskeguide/fluefiskeri/fluefiskeri-i-put-take/` |
| `/fiskeudstyr/waders-og-stovler/waders-til-havorredfiskeri` | `/fiskeudstyr/beklaedning/waders-og-stovler/waders-til-havorredfiskeri/` |

Total redirects now: 5 (3 from Session 22 + 2 from Session 23).

### Verified

- `npm run build` clean — **63 pages** (58 prior + 5 new + emergent redirect HTML increment).
- All 5 new pages emit 5 `"@type":"Question"` entries + 5 `<details class="faq-item">` accordion items.
- All 2 new redirect HTML stubs emit at correct old-URL paths with meta-refresh + canonical to new URL.
- `public/_redirects` copies to `dist/_redirects` for Netlify/CF/Render 301 status.

### Followups

- **§B** Affiliate cards — backlog grew further: now also includes fiskebøger (3 widgets) + waders-til-havorredfiskeri (3 widgets) + fluefiskeri-i-put-take widgets.
- **§G** Replace spinnefiskeri-i-put-take with verbatim if live ever fills in body.
- **§P NEW** Add link from `/fiskeudstyr/beklaedning/waders-og-stovler/` parent index to the new waders-til-havorredfiskeri sub-page (currently reachable only via direct URL).
- §A, §C, §F, §H — unchanged.
- §L (endegrej) resolved Session 22a.
- §M (gennemløbsblink sub-pages), §N (trip-report sub-pages), §O (Bolund content) — unchanged.

### Total site state after Session 23

| Section | Local pages |
|---|---|
| /fiskeguide/ | 11 (10 sub + 1 index) |
| /guide-til-fisk/ | 18 (10 species + havørred deep sub-tree) |
| /fiskeudstyr/ | 13 (was 12, +1 waders-til-havorred) |
| /fiskepladser/ | 4 |
| /fisketure/ | 1 (index only — sub-trips §N) |
| Top-level | 5 (forside, om-mig, rens-af-orred, fiskeboger, /…) |
| **Redirects** | 5 (meta-refresh stubs + _redirects 301s) |
| **Total** | 63 emitted pages |

---

## 2026-05-13 (Session 22) — fiskepladser area-guide trio shipped under /fiskepladser/ (NOT /fisketure/)

User pivot at start of session: the 3 area-overview pages (Stevns / Isefjorden / Roskilde Fjord) should live under `/fiskepladser/`, not `/fisketure/` as the original Session 22 plan and the live URL convention dictate. `/fisketure/` is reserved for individual trip reports (Bøgeskoven, Salvadsparken, etc.). This session brings up the area guides at their new home.

### Pre-existing state discovered

When checking source layout, found `/fiskepladser/stevns/index.astro` already exists (built in a prior unlogged session — 219 lines, full template). Isefjorden + Roskilde-fjord were empty dirs.

### What shipped

**1. Updated — `src/pages/fiskepladser/stevns/index.astro`** (3 small fixes to the prior-session build).
- H1 + articleData headline: fixed live's typo "Havørredfisker" → "Havørredfiskeri" (missing "i", clearly a live-side authoring slip).
- H2 "Fisketure på Stevns" → Q&A rewrite "Hvilke fisketure har jeg dokumenteret på Stevns?" per memory `feedback_uof_qa_h2_format.md`.
- Added the missing Bøgeskoven sub-trip H3 teaser ("Bøgeskoven — 15. Januar 2022") with the 1-paragraph teaser from live. Kept H3 as plain text (no anchor) since the trip-detail sub-page isn't built yet — same approach as Gennemløbsblink. Queued the sub-trip as §N.
- Added `.article h3` style rule (needed for the new H3).

**2. New page — `src/pages/fiskepladser/isefjorden/index.astro`** (1:1 from live `https://udeogfiske.dk/fisketure/havorredfiskeri-i-isefjorden/`).
- 3-deep breadcrumbs (Forside › Fiskepladser › Isefjorden).
- Title rewritten cleaner: live's "Isefjorden Fiskepladser | Havørredfiskeri i Isefjorden" has awkward word-order — replaced with "Havørredfiskeri i Isefjorden | Fiskepladser og områdeguide".
- Description verbatim from live aioseo.
- datePublished `2022-01-28` (live aioseo), dateModified today.
- AuthorProfile — derivative quote about rotating mellem de 5 pladser efter vejret og årstiden.
- Body **1:1 verbatim from live** — H1 "Havørredfiskeri i Isefjorden" + 3 intro paragraphs + 6 H2 sections: "Fiskepladser i Isefjorden" (Q&A rewrite → "Hvor er de bedste fiskepladser i Isefjorden?") + 5 H3 named pladser (Kyndby værket – Nordøst / Hammer Bakker / Vellerup Vig / Nakkehage / Bramsnæs Vig).
- **Heading-level structure change vs live:** live has the 5 named pladser as separate H2s. Demoted them to H3 under the single H2 "Hvor er de bedste fiskepladser i Isefjorden?". This improves the document outline (one H2 = one section concept) without losing any content. Same precedent as the gear sub-types (where H3s sit under a single H2).
- 1× DidYouKnow about vinter-strategien (halvbrakkse områder i bunden af fjorden) — anchored in live's "lavere saltindhold" thesis.
- 1× TipBox specifik til Kyndby værket (go længere mod øst end de fleste).
- 5-Q FAQ accordion distilled — live has none.
- RelatedRow → havørredfiskeri / stevns / roskilde-fjord.

**3. New page — `src/pages/fiskepladser/roskilde-fjord/index.astro`** (1:1 from live `https://udeogfiske.dk/fisketure/roskilde-fjord/`).
- 3-deep breadcrumbs (Forside › Fiskepladser › Roskilde Fjord).
- Title + description verbatim from live aioseo.
- datePublished `2022-07-18` (live aioseo), dateModified today.
- AuthorProfile — derivative quote about Roskilde Fjord nærhed til København + Salvadsparken som genganger.
- Body **1:1 verbatim from live** — H1 "Fiskeri i Roskilde Fjord" + 4 intro paragraphs + H2 "Fiskeri efter havørred" (Q&A rewrite → "Hvad fanges der mest af i Roskilde Fjord?") + H2 "Fiskepladser" (Q&A rewrite → "Hvor er de bedste fiskepladser i Roskilde Fjord?") + 2 H3 named pladser (Salvadsparken + Den gamle jernbanebro ved Frederikssund) + H4 Salvadsparken trip teaser.
- 1× DidYouKnow about Roskilde Fjord + Isefjorden som ét sammenhængende system (deler udløb ved Hundested). Editorial addition — explains why fiskeriet i den ene typisk afspejler den anden.
- 1× TipBox specifik til Salvadsparken (500 m gåtur, fredningsbælter, pak let).
- 5-Q FAQ accordion distilled — live has none.

### Live content bug caught — Bolund section dropped

Live's Roskilde Fjord page has a **3rd named plads "Bolund" between Salvadsparken og Frederikssund-jernbanebroen**, but **the entire Bolund body is a verbatim copy-paste of the Salvadsparken section** (same 3 paragraphs about Hove Å's fredningsbælter, parkering, sand/sten/blæretang). Clearly a live-side publishing mistake — identical to the Jigs/Gummidyr blurb we caught on endegrej earlier today.

Unlike the Jigs/Gummidyr case (where I wrote a replacement based on general knowledge), I **dropped the Bolund H2 entirely** rather than fabricate Bolund-specific details. Reasoning: Bolund is a specific named plads — making up plads-specific details (bottom type, parking, distance from kysten, best season) would be content fabrication, which contradicts the project's 1:1 rule. Skip + flag as §O follow-up to write proper Bolund content when source material is available.

### Two index updates

**4. Updated — `src/pages/fiskepladser/index.astro`**: added Stevns + Roskilde Fjord cards at the top, kept the existing Isefjorden card (already pointed at `/fiskepladser/isefjorden/`), retained koebenhavn + mariager-fjord placeholders below (still 404 — pre-existing tech debt, not introduced this session). Card list grew from 3 → 5.

**5. Updated — `src/pages/fisketure/index.astro`**: repointed the 3 destination cards from `/fisketure/havorredfiskeri-pa-stevns/` etc → `/fiskepladser/{stevns,isefjorden,roskilde-fjord}/`. Updated answer-capsule wording to reflect the new structure ("Hvert område dækkes med pladser, sæson og dokumenterede ture under Fiskepladser. Flere destinationer og enkeltture kommer løbende til."). The `/fisketure/` page now serves as a destination-routing layer rather than a content hub — the real /fisketure/ content (individual trip reports) is queued as §N.

### Sub-trip pages NOT built — queued as §N

Same approach as the Gennemløbsblink H3 on endegrej: kept the sub-trip H3 teasers as plain text (no anchor) to avoid creating local 404s. When §N ships, re-link the H3s in one edit. Three sub-trip pages queued:

- Stevns → `/fisketure/bogeskoven-15-januar-2022/` (live: `/fisketure/havorredfiskeri-pa-stevns/bogeskoven-15-januar-2022/`)
- Roskilde Fjord → `/fisketure/salvadsparken-16-juli-2022/` (live: `/fisketure/roskilde-fjord/salvadsparken-16-juli-2022/`)
- Isefjorden → `/fisketure/hammer-bakker-marts/` (live: `/fisketure/fisketur-til-hammer-bakke/`) — referenced in live nav but not from body, so this one is lower priority

### Canonical URL decision

For all 3 new pages, canonical points to `https://udeogfiske.dk/fiskepladser/<slug>/` (matching the local route), not the live `/fisketure/` URL. This represents OUR site's canonical for these guides — the user's directive to host them under `/fiskepladser/` makes this site's canonical structure differ from live, and the SEO-correct canonical points to the actual URL on this site, not where live happens to keep the source content. Flagged here so the choice is reviewable.

### Hero images

All 3 reused existing card-tier assets: `stevns_card.png`, `isefjorden_card.png`, `roskilde_fjord_card.png`. Flagged for §H follow-up if we generate higher-res hero variants.

### Verified

- `npm run build` clean — **58 pages** (was 56 after endegrej; +2 net-new = 58, Stevns was already counted).
- Each new page emits 5 schema `@type":"Question"` entries + 5 `<details class="faq-item">` accordion items.
- `/fiskepladser/` index — all 3 new area-guide cards now resolve. (koebenhavn + mariager-fjord still 404 — pre-existing.)
- `/fisketure/` index — all 3 destination cards repoint to the new `/fiskepladser/` locations and resolve.
- Global stylesheet from §D handles `.faq-item` family. Per-page `.article h3` styles added where needed.

### Followups

- **§N NEW.** Build individual trip-report sub-pages under `/fisketure/`: Bøgeskoven 15 Jan 2022, Salvadsparken 16 Juli 2022, Hammer Bakker marts. Once shipped, re-link the H3 teasers on the parent fiskepladser pages.
- **§O NEW.** Source proper Bolund content (Roskilde Fjord — south of Salvadsparken, near Hove Å's udløb). When available, add as H3 section on `/fiskepladser/roskilde-fjord/` between Salvadsparken and Frederikssund-jernbanebroen.
- §L resolved (last session) — endegrej hub.
- §M Build Gennemløbsblink sub-page + 2 "5 bedste" sub-pages, re-link the H3 on endegrej hub.
- §A, §B, §C, §F, §G, §H — unchanged.

### State of the /fiskepladser/ tree

After this session:
- `/fiskepladser/` — index (5 cards: stevns, isefjorden, roskilde-fjord, koebenhavn, mariager-fjord — first 3 resolve, last 2 placeholder)
- `/fiskepladser/stevns/` ← updated (H1 typo fix + Q&A H2 + Bøgeskoven teaser)
- `/fiskepladser/isefjorden/` ← **new**
- `/fiskepladser/roskilde-fjord/` ← **new**

That's **4 pages under /fiskepladser/** now. Next obvious areas: §M (endegrej sub-pages) or §N (trip-report sub-pages) — both create depth under existing tree nodes rather than new top-level areas.

---

## 2026-05-13 (Session 22a) — §L resolved: endegrej hub shipped, /fiskeudstyr/ index fully resolves

User flagged that `/fiskeudstyr/endegrej/` had never been built — the 5th card on `/fiskeudstyr/` index 404'd. Shipped before resuming the queued Session 22 (fisketure sub-tree).

### What shipped

**New page — `src/pages/fiskeudstyr/endegrej/index.astro`** (1:1 from live `https://udeogfiske.dk/fiskeudstyr/endegrej/`).
- 3-deep breadcrumbs (Forside › Fiskeudstyr › Endegrej).
- Title verbatim from live: "Valg af endegrej | Vælg det helt rigtige endegrej og fang flere fisk".
- Description verbatim from live aioseo.
- datePublished `2021-12-08` (live aioseo), dateModified today.
- AuthorProfile — derivative quote about how endegrej-valg starts med fisken og fiskeformen, ikke med blink-tasken (anchored in live's "først finde ud af hvilken fisk, derefter kommer valget" thesis).
- Body **1:1 verbatim from live** — H1 "Valg af endegrej" + 2 intro paragraphs + H2 "Endegrej til alle fisk" + 5 H3 sub-sections (Fluer / Gennemløbsblink / Blink / Spinner / Jigs-Gummidyr).
- Q&A H2 rewrite per memory `feedback_uof_qa_h2_format.md`: "Endegrej til alle fisk" → "Hvilket endegrej passer til hvilken fisk?". H3s (Fluer / Gennemløbsblink / Blink / Spinner / Jigs/Gummidyr) kept as taxonomic noun phrases — same precedent as fiskestaenger sub-types and havørred technique pages.
- 1× DidYouKnow about why gennemløbsblink fanger flere hjem end almindelige blink (linen gennem huset, kan ikke bruges som vægtstang) — anchored in live's emphasis on "hvorfor du skal vælge gennemløbsblink".
- 1× TipBox about 3-4 gennemløbsblink i forskellige farver fremfor 20 forskellige blink-typer — promoted from the live thesis ("vigtigt at først og fremmest finde ud af hvilken fisk").
- 5-Q FAQ accordion distilled from prose — live has none.
- Internal cross-links to `/fiskeguide/fluefiskeri/`, `/fiskeguide/put-take-fiskeri/`, `/fiskeguide/fiskeri-i-aa/`.
- RelatedRow → fiskestaenger / fiskehjul / fluefiskeri.

### Live content bug caught + fixed

Live page has a clear content-bug: the **Jigs/Gummidyr H3 blurb is a verbatim copy-paste of the Spinner blurb** ("Spinnere er særdeles effektivt endegrej…"). Clearly a publishing mistake — same text appears twice under different headings.

Rather than propagate the bug, replaced the Jigs/Gummidyr paragraph with one original sentence in same voice and length: "Jigs og gummidyr er bløde imitationer af småfisk, krebs og orme, monteret på en blyhoved-krog. De fiskes med korte tag-pauser så de bevæger sig naturligt nær bunden — særligt effektivt til gedde, sandart, torsk og store aborrer, hvor den blødere bevægelse trigger bid som hårde lokkemidler kommer til kort med."

Same precedent as the "Torsrkefiskeri" typo fix on fiskesaet-for-begyndere — minor body fix during transcription, flagged here in the review.

### Shape decision: single-content page, NOT a sub-card hub

Initial assumption was that endegrej would mirror the tilbehor/beklaedning pattern (4-card hub with blink/wobblere/fluer/kroge sub-cards). After fetching the live page, that turned out to be wrong: live is a **single-content guide** with 5 inline H3 sub-sections, and only **Gennemløbsblink** has a real sub-page on live (`/fiskeudstyr/endegrej/gennemlobsblink/` + 2 "5 bedste gennemløbsblink" articles under it).

Mirrored live's shape → built as a single article page (fiskehjul-style), not a card hub. This avoids creating 4 fake sub-card 404s for endegrej-typer that don't actually exist on live.

### Gennemløbsblink H3 — link decision

Live's Gennemløbsblink H3 is an anchor pointing to `/fiskeudstyr/endegrej/gennemlobsblink/`. That sub-page doesn't yet exist locally → linking would introduce a 404. Kept the H3 as plain heading text (no anchor) and queued the sub-page as new §M follow-up. When the sub-page ships, the H3 gets re-linked in one edit.

### Hero image

Reused `/images/endegrej.png` (already the card image on `/fiskeudstyr/` index). Same image for card and hero. Flagged for §H followup if we generate a dedicated hero asset later.

### Verified

- `npm run build` clean — **56 pages**. (Previous review noted 54; actual baseline before this session was 55 — accounting drift across sessions, not a regression.)
- New page emits 5 schema `@type":"Question"` entries + 5 `<details class="faq-item">` accordion items.
- Parent `/fiskeudstyr/` index 5th card now resolves (previously 404'd).
- Global stylesheet from §D handles `.faq-item` family.
- Local `.article h3` styles added (h3 needed since this page has 5 sub-sections inside the main H2 — same need as fiskesaet-for-begyndere).

### Followups

- **§L RESOLVED.** Was: "Build the missing 5th /fiskeudstyr/ sub-category endegrej." Done — card resolves, single-content guide shipped, /fiskeudstyr/ tree now fully built out.
- **§M NEW.** Build the Gennemløbsblink sub-page (`/fiskeudstyr/endegrej/gennemlobsblink/`) + its 2 "5 bedste gennemløbsblink til havørred (forår/sommer)" articles. Once shipped, re-link the H3 on the endegrej hub. Live URLs:
  - `https://udeogfiske.dk/fiskeudstyr/endegrej/gennemlobsblink/`
  - `https://udeogfiske.dk/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-forar/`
  - `https://udeogfiske.dk/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-sommer/`
- §A faq prop migration on remaining `/fiskeguide/*` pages — TS errors only, mechanical.
- §B Affiliate cards (now also covers fluer/blink/gennemløbsblink/spinner/jigs).
- §C Live-testimonial swap on makrel.
- §F Generate proper aborre/gedde card images via nano-banana.
- §G Replace 6 net-new monthly pages with verbatim if/when live publishes them.
- §H Generate proper sub-type-specific images via nano-banana.

### State of the /fiskeudstyr/ tree

After this session, the entire `/fiskeudstyr/` category index has zero 404s:
- `/fiskeudstyr/` — index (5 cards: fiskestænger, fiskehjul, beklædning, tilbehør, **endegrej**)
- `/fiskeudstyr/fiskestaenger/` + 3 sub-pages
- `/fiskeudstyr/fiskehjul/`
- `/fiskeudstyr/beklaedning/` + 3 sub-pages
- `/fiskeudstyr/tilbehor/` + 2 sub-pages
- `/fiskeudstyr/endegrej/` ← **new** (5 inline H3 sections, 3 sub-pages queued as §M)

That's **12 pages under /fiskeudstyr/**. Next: Session 22 (fisketure sub-tree — content already fetched, awaiting per-slug decision).

---

## 2026-05-10 (Session 21 follow-up) — §K resolved: fiskesaet-for-begyndere shipped, tilbehør sub-tree complete

User asked to close out §K — finish the tilbehør sub-tree by building the last sub-page. Single-pass build, same locked-in template.

### What shipped

**New page — `src/pages/fiskeudstyr/tilbehor/fiskesaet-for-begyndere/index.astro`** (1:1 from live `https://udeogfiske.dk/fiskeudstyr/fiskesaet-for-begyndere/`).
- 4-deep breadcrumbs (Forside › Fiskeudstyr › Tilbehør › Fiskesæt for begyndere).
- Title + description verbatim from live aioseo.
- datePublished `2021-12-23` (live aioseo), dateModified today.
- AuthorProfile — derivative quote about Bilka/Harald Nyborg purchases + the 10-min-of-research advice (anchored in live prose).
- Body **1:1 verbatim from live** — H1 + 4 intro paragraphs + H2 "Allround begynder stang" + 3 H3 sub-sections (Put&Take, Kysten/moler, Fluefiskeri) + closing H2 "Hvor meget koster et begynder-fiskesæt?".
- Q&A H2 rewrite per memory `feedback_uof_qa_h2_format.md`: "Allround begynder stang" → "Hvad kendetegner en god allround begynder-stang?". The closing H2 ("Hvor meget koster…?") was already a question — kept verbatim. The 3 H3s (Put & Take efter regnbueørreder / Fiskeri ved kysten og moler / Fiskesæt til fluefiskeri) kept as use-case noun phrases — same precedent as havørred technique sections and waders product-type sections.
- Two minor body fixes during transcription: live's "Torsrkefiskeri" typo → "Torskefiskeri"; one paragraph that ended without a period got one.
- 1× DidYouKnow about the 9-fod / 2500-3000-hjul allround sweet-spot — anchored in live prose's repeated kastevægt/hjulklasse numbers.
- 1× TipBox about cross-form versatility (the same allround-stang serving regnbueørred, kyst, og mole) — promoted from live's implicit thesis.
- 5-Q FAQ accordion distilled from prose — live has none.
- Internal cross-links to `/fiskeguide/put-take-fiskeri/`, `/fiskeguide/ul-fiskeri/`, `/fiskeudstyr/fiskestaenger/`, `/fiskeudstyr/fiskehjul/`.
- RelatedRow → fiskestaenger / fiskehjul / put-take-fiskeri.

### Markup detail caught

Same extractor-regex gotcha as polaroid-briller: the live page's final H2 ("Hvor meget koster et begynder fiskesæt?") got swallowed into a `<li>` block in the extractor's first pass. The H2 itself is a clean `<h2 class="elementor-heading-title elementor-size-large">` at line 981 of the saved HTML — recovered via direct grep before transcribing. All section headings rebuilt cleanly.

### Live content NOT carried over

The live page has 3 affiliate product widgets (PriceRunner ad blocks between sections — one for the allround sæt, one for Put & Take, one for kyst, one for fluefiskeri). Skipped — joins the §B affiliate followup queue.

### Hero image

`/images/fiskestanger.png` (already chosen as the teaser-card image in tilbehor/index.astro since Session 20 follow-up #4). Reused as both card and hero.

### Verified

- `npm run build` clean — **54 pages** (was 53; +1 = 54).
- New page emits 5 schema Question entries + 5 `<details class="faq-item">` accordion items.
- Parent `/fiskeudstyr/tilbehor/` index card now resolves (previously 404'd).
- Global stylesheet from §D handles `.faq-item` family.
- Local `.article ul` and `.article h3` styles included (h3 needed since this page has 3 sub-sections inside the main H2).

### Followups

- **§K RESOLVED.** Was: "Build the remaining tilbehør sub-page: fiskesaet-for-begyndere." Done — built, parent card resolves, tilbehør sub-tree now complete (2/2 sub-pages).
- §A faq prop migration on remaining `/fiskeguide/*` pages — TS errors only, mechanical.
- §B Affiliate cards (now also covers fiskesæt + vadejakke + polaroid + fiskehjul + fangstnet + waders + 6 fiskestænger products + makrel/hornfisk).
- §C Live-testimonial swap on makrel.
- §F Generate proper aborre/gedde card images via nano-banana.
- §G Replace 6 net-new monthly pages with verbatim if/when live publishes them.
- §H Generate proper sub-type-specific images via nano-banana (covers all gear/beklædning/tilbehør sub-cards).

### State of the /fiskeudstyr/ tree

After this session, the entire `/fiskeudstyr/` category is now built out:
- `/fiskeudstyr/` — index (4 cards: fiskestænger, fiskehjul, beklædning, tilbehør)
- `/fiskeudstyr/fiskestaenger/` + 3 sub-sub-pages (spinnestaenger, fiskestang-til-havet, fluefiskestang)
- `/fiskeudstyr/fiskehjul/`
- `/fiskeudstyr/beklaedning/` + 3 sub-pages (waders-og-stovler, vadejakke, polaroid-briller)
- `/fiskeudstyr/tilbehor/` + 2 sub-pages (fangstnet, fiskesaet-for-begyndere)

That's **11 pages under /fiskeudstyr/**. The next obvious area to expand is `/fisketure/` (3 trip reports) or `/fiskepladser/` (3 location pages) — both still placeholder index pages.

---

## 2026-05-10 (Session 21) — §J resolved: vadejakke + polaroid-briller shipped, beklædning sub-tree complete

User asked to close out §J — finish the beklædning sub-tree by building the 2 sub-pages whose teaser cards on `/fiskeudstyr/beklaedning/` had been linking to local 404s since Session 20 follow-up #3. Both built 1:1 verbatim from live in a single pass, same locked-in template as waders-og-stovler.

### What shipped

**1. New page — `src/pages/fiskeudstyr/beklaedning/vadejakke/index.astro`** (1:1 from live `https://udeogfiske.dk/vadejakke/`).
- 4-deep breadcrumbs (Forside › Fiskeudstyr › Beklædning › Vadejakke).
- Title verbatim from live: "Vadejakke | Guide til valg af vadejakker til vadefiskeri".
- Description verbatim from live aioseo schema.
- datePublished `2022-05-24` (live aioseo), dateModified today.
- AuthorProfile — derivative quote about owning one good-quality vadejakke used for stort set al fiskeri.
- Body **1:1 verbatim from live** — H1 "Vadejakker" + intro paragraphs + 4-bullet kravliste + 2 H2 sections (Vadejakkens kvaliteter + Vadejakker og slitage).
- Q&A H2 rewrites per memory `feedback_uof_qa_h2_format.md`: "Vadejakkens kvaliteter" → "Hvilke kvaliteter har en god vadejakke?", "Vadejakker og slitage" → "Hvor slides vadejakker først?".
- 1× DidYouKnow about D-ringen på ryggen — anchored in live prose where the bullet list mentions it.
- 1× TipBox about størrelse — promoted from live's closing paragraph in Aldin's voice.
- 5-Q FAQ accordion distilled from prose — live has none.
- Internal cross-link to `/fiskeudstyr/beklaedning/waders-og-stovler/`.
- RelatedRow → waders-og-stovler / polaroid-briller / fiskeri-paa-kysten.

**2. New page — `src/pages/fiskeudstyr/beklaedning/polaroid-briller/index.astro`** (1:1 from live `https://udeogfiske.dk/polaroid-briller/`).
- 4-deep breadcrumbs (Forside › Fiskeudstyr › Beklædning › Polaroid briller).
- Title rewritten: live had "De Bedste Polaroid Briller til Fiskeri | Find De Bedste Polaroid Briller i 2025" — keyword-stuffed and dated. Replaced with "Polaroid briller til fiskeri | Guide til valg af de bedste polaroid briller". Headline kept live verbatim ("Vælg de bedste polaroid briller til fiskeri").
- Description rewritten: live's aioseo description was **truncated mid-sentence** on the live site ("…men også for at se flere fisk i") — clearly a live-side bug. Replaced with a clean editorial description.
- datePublished `2023-06-22` (live aioseo), dateModified today.
- AuthorProfile — derivative quote about spotfiskeri efter ørreder i Put & Take søer with fluestang (anchored in live prose).
- Body **1:1 verbatim from live** — H1 "Vælg de bedste polaroid briller til fiskeri" + intro paragraph + 3 H2 sections (Hvad er polaroid briller? + Hvorfor skal jeg bruge polaroid briller når jeg fisker? + Hvordan vælger man de bedste polaroid briller til fiskeri?).
- All 3 live H2s already phrased as Q&A questions per memory rule — kept verbatim. No H2 rewrites needed.
- 1× DidYouKnow about the polarising film mechanic (added — explains the "how" behind the prose's "what").
- 1× TipBox promoting brune linser to nybegyndere — promoted from live prose into Aldin's voice.
- 5-Q FAQ accordion distilled from prose — live has none.
- RelatedRow → waders-og-stovler / vadejakke / put-take-fiskeri.

### Markup detail caught (carry-over from fiskehjul session)

Same gotcha as on fiskehjul: the polaroid page has **3 H2s but the extractor only caught 2 on first pass**. The "Hvordan vælger man de bedste Polaroid Briller til Fiskeri?" H2 uses `class="elementor-heading-title elementor-size-large"` exactly like the others, but its content also got swallowed into the next paragraph's wrapping `<li>` block in the extractor's regex pass (the live page has a quirky structure where the entire "Linse Farve / Ramme Størrelse / Materiale" section is wrapped inside a single list item containing multiple `<p>` tags). Caught by direct grep on the saved HTML — all 3 H2s recovered cleanly into the rebuild.

### Live content NOT carried over

Both live pages have product affiliate widgets (`rexulresult` blocks). Skipped — joins the §B affiliate followup queue (now 5+ pages backlogged for affiliates).

### Hero images

Reused existing local images — no new generation:
- Vadejakke: `/images/havørred_hero1.jpeg` (kystfiskeri context — matches the teaser card already on `/beklaedning/` index).
- Polaroid briller: `/images/Hero_leopardbund-min.jpg` (underwater bottom view — perfect thematic match for "see-through-water" message; matches the teaser card already on `/beklaedning/` index).

Reuse of existing images flagged as part of §H followup.

### Verified

- `npm run build` clean — **53 pages** (was 51; +2 = 53).
- Both new pages emit 5 schema Question entries + 5 `<details class="faq-item">` accordion items.
- Parent `/fiskeudstyr/beklaedning/` index sub-cards now resolve (previously 404'd).
- Global stylesheet from §D handles `.faq-item` family — no duplicate styles in new pages.
- `.article ul` / `.article ul li` styles included locally (precedent from catch-and-release / bombarda-fiskeri pages).

### Followups

- **§J RESOLVED.** Was: "Build the 2 remaining beklædning sub-pages: /vadejakke/ and /polaroid-briller/." Done — both built, both card links resolve, beklædning sub-tree now complete (3/3 sub-pages).
- §A faq prop migration on remaining `/fiskeguide/*` pages — TS errors only, mechanical.
- §B Affiliate cards (now also covers vadejakke + polaroid + fiskehjul + fangstnet + waders + 6 fiskestænger products + makrel/hornfisk).
- §C Live-testimonial swap on makrel.
- §F Generate proper aborre/gedde card images via nano-banana.
- §G Replace 6 net-new monthly pages with verbatim if/when live publishes them.
- §H Generate proper sub-type-specific images via nano-banana (covers all gear/beklædning sub-cards).
- §K Build remaining tilbehør sub-page: fiskesaet-for-begyndere.

---

## 2026-05-08 (Session 20 follow-up #5) — /fiskeudstyr/fiskehjul/ shipped (1:1 from live)

User asked to do fiskehjul next. Single-page category — unlike fiskestaenger (3 sub-types) and beklaedning/tilbehor (aggregated locally), fiskehjul on udeogfiske.dk is a single self-contained guide page.

### What shipped

**New page — `src/pages/fiskeudstyr/fiskehjul/index.astro`** (1:1 verbatim from live `/fiskeudstyr/koeb-af-fiskehjul/`).
- Slug simplified from live's `koeb-af-fiskehjul` → local `fiskehjul` (matching the `fiskestaenger` precedent where `kob-af-` was dropped).
- 3-deep breadcrumbs (Forside › Fiskeudstyr › Fiskehjul).
- Title verbatim from live: "Fiskehjul | Guide til valg af det bedste fiskehjul til dig".
- datePublished `2020-07-06` (live aioseo schema), dateModified today.
- AuthorProfile — derivative quote about Shimano Stradic + the Daiwa/Abu Garcia rotation in grej-tasken.
- Body **1:1 verbatim from live** — H1 + intro paragraph + 2 H2 sections (Fastspolehjul + Fluefiskehjul).
- Q&A H2 rewrite: only the lead capsule. The two main H2s ("Fastspolehjul" / "Fluefiskehjul") kept as live noun categories — same precedent as PVC/Neopren/Åndbare waders and All-round/Kystfiskeri fangstnet.
- 1× DidYouKnow (sourced from live prose: "fluefiskehjul har ingen mekaniske dele").
- 1× TipBox (promoted from live link callout: "Læs spinnestang-guiden FØR du vælger hjul").
- 5-Q FAQ accordion distilled from prose — live has none.
- Internal links to spinnestang + fluestang guides rewritten from live's `/kob-af-fiskestaenger/` URLs to our local `/fiskestaenger/` URLs.
- RelatedRow → spinnestænger / fluefiskestænger / endegrej.

### Markup detail caught

The live "Fluefiskehjul" H2 uses inline `<h2 style="text-align: left">` rather than the Elementor-heading widget pattern used elsewhere on the page. The prose extractor missed it on first pass (regex only matched `class="elementor-heading-title"`); confirmed via direct grep on saved HTML before building. Caught in time — the rebuilt page renders both H2s correctly.

### Live content NOT carried over

The live fiskehjul page has product affiliate widgets (`rexulresult` blocks) embedded between the H2 sections — typical 3-product showcase per H2. Skipped — joins the §B affiliate followup queue.

### Hero image

`/images/fiskehjul.png` (existing local asset, originally used as the parent /fiskeudstyr/ index card image for fiskehjul). Reused as both card image and hero — same convention as fiskestaenger.

### Verified

- `npm run build` clean — **51 pages** (was 50; +1 = 51).
- Fiskehjul page emits 5 FAQ accordion items + 5 schema Question entries.
- Parent `/fiskeudstyr/` index card already pointed to `/fiskehjul/` — no href update needed.
- Internal links to spinnestang/fluestang guides resolve locally (both built earlier this session).

### Followups

- §A faq prop migration on remaining `/fiskeguide/*` pages.
- §B Affiliate cards (now also covers fiskehjul + fangstnet + waders + 6 fiskestænger products + makrel/hornfisk).
- §C Live-testimonial swap on makrel.
- §F Generate proper aborre/gedde card images via nano-banana.
- §G Replace 6 net-new monthly pages with verbatim if/when live publishes them.
- §H Generate proper sub-type-specific images via nano-banana.
- §J Build remaining beklædning sub-pages: vadejakke + polaroid-briller.
- §K Build remaining tilbehør sub-page: fiskesaet-for-begyndere.

---

## 2026-05-08 (Session 20 follow-up #4) — Tilbehør sub-tree begun

User asked to do tilbehør next. Same structural shape as beklædning: live udeogfiske.dk has no `/fiskeudstyr/tilbehor/` page (probed and got HTTP 404), so we built a local aggregation index plus the most-relevant verbatim sub-page. User chose the same approach as beklædning — index + first sub-page, defer the rest.

### What shipped

**1. New category index — `src/pages/fiskeudstyr/tilbehor/index.astro`** (locally written, no live source).
- pageType `category`, 3-deep breadcrumbs (Forside › Fiskeudstyr › Tilbehør).
- Hero with `fiskeudstyr_hero.jpg` background.
- Answer-capsule + 2-paragraph intro.
- 2-card category grid (Fangstnet + Fiskesæt for begyndere). Note: grid switched to `repeat(2, 1fr)` instead of the parent index's 3-col, since 2 cards in a 3-col grid leaves an awkward empty slot. `max-width: 760px` keeps the cards from stretching into oversized rectangles.
- Fiskesæt card links to future-local path `/fiskeudstyr/tilbehor/fiskesaet-for-begyndere/` (404 until built).
- AdsenseBanner.

**2. New verbatim page — `src/pages/fiskeudstyr/tilbehor/fangstnet/index.astro`** (1:1 from live `/fiskeudstyr/fangstnet/`).
- 4-deep breadcrumbs (Forside › Fiskeudstyr › Tilbehør › Fangstnet).
- Title verbatim from live: "Fangstnet | Guide til valg af fangstnet i forskellige prisklasser".
- datePublished `2020-02-18` (live aioseo schema), dateModified today.
- AuthorProfile — derivative quote about owning two all-round nets + a separate vade-net for different scenarios.
- Body **1:1 verbatim from live** — 9 paragraphs across 2 H2 sections (intro + All-round + Fangstnet til kystfiskeri).
- Q&A H2 rewrite: only the lead H2s kept as live noun categories ("All-round fangstnet" / "Fangstnet til kystfiskeri") since they're product-type / use-case noun phrases similar to PVC/Neopren/Åndbare waders precedent.
- 1× DidYouKnow (sourced from live prose: "vade-fangstnet er flydende eller har magnet").
- 1× TipBox (promoted from live prose: "All-round net med teleskoparm til 200 kr i Bilka").
- 5-Q FAQ accordion distilled from prose — live has none.
- RelatedRow → spinnestænger / waders-og-stovler / fiskeri-paa-mole.

### Live content NOT carried over

The live fangstnet page has affiliate product widgets (`rexulresult` blocks). Skipped — joins the §B affiliate followup queue.

### Hero images

- Tilbehor index: `/images/fiskeudstyr_hero.jpg` (different from beklaedning's `kyst_fiskeri.jpg` to give visual distinction at the parent /fiskeudstyr/ index level).
- Fangstnet sub-page: `/images/kyst_fiskeri.jpg` (kyst-context — primary use case for landing nets in this guide).
- Fiskesæt teaser card: `/images/fiskestanger.png` (rod-context, fits begynder-kit thematic).

### Verified

- `npm run build` clean — **50 pages** (was 48; +2 = 50).
- Tilbehor index renders 2 sub-cards.
- Fangstnet page emits 5 FAQ accordion items + 5 schema Question entries.
- Parent `/fiskeudstyr/` index card already pointed to `/tilbehor/` — no href update needed.
- Global stylesheet from §D handles `.faq-item` family.

### Followups

- **§K (NEW).** Build the remaining tilbehør sub-page: `/fiskeudstyr/tilbehor/fiskesaet-for-begyndere/` (live URL: `https://udeogfiske.dk/fiskeudstyr/fiskesaet-for-begyndere/`).
- §A faq prop migration on remaining `/fiskeguide/*` pages.
- §B Affiliate cards (now also covers fangstnet + waders + 6 fiskestænger products + makrel/hornfisk).
- §C Live-testimonial swap on makrel.
- §F Generate proper aborre/gedde card images via nano-banana.
- §G Replace 6 net-new monthly pages with verbatim if/when live publishes them.
- §H Generate proper sub-type-specific images via nano-banana (now also fangstnet + fiskesæt + waders + vadejakke + polaroid briller).
- §J Build remaining beklædning sub-pages: vadejakke + polaroid-briller.

---

## 2026-05-08 (Session 20 follow-up #3) — Beklædning sub-tree begun

User asked to start the beklædning sub-tree under `/fiskeudstyr/`. Tricky structurally: udeogfiske.dk has no single `/beklaedning/` page — instead live splits the topic across `/fiskeudstyr/waders-og-stovler/`, `/vadejakke/` (top-level), and `/polaroid-briller/` (top-level). User chose to build a local `/fiskeudstyr/beklaedning/` index that aggregates them, plus the waders page as the first verbatim sub-page. Vadejakke and polaroid-briller deferred.

### What shipped

**1. New category index — `src/pages/fiskeudstyr/beklaedning/index.astro`** (locally written, no live source).
- pageType `category`, 3-deep breadcrumbs.
- Hero with `kyst_fiskeri.jpg` background.
- Answer-capsule + 2-paragraph intro contextualising when each beklædning type is needed.
- 3-card category grid (reused the `.card-grid` pattern from parent `/fiskeudstyr/` index): Waders og støvler, Vadejakke, Polaroid briller. Vadejakke and Polaroid briller cards link to future-local paths and 404 until built (same convention as fiskestaenger sub-cards prior to this session).
- AdsenseBanner.

**2. New verbatim page — `src/pages/fiskeudstyr/beklaedning/waders-og-stovler/index.astro`** (1:1 from live `/fiskeudstyr/waders-og-stovler/`).
- 4-deep breadcrumbs (Forside › Fiskeudstyr › Beklædning › Waders og støvler).
- Title verbatim from live: "Waders | Vælg de rigtige waders til netop dit fiskeri!"
- datePublished `2020-02-27` (live aioseo schema), dateModified today.
- AuthorProfile — derivative quote about owning both neopren + åndbare waders.
- Body **1:1 verbatim from live** — 12 paragraphs across 4 H2 sections (intro + Waders + PVC + Neopren + Åndbare).
- Q&A H2 rewrite per memory `feedback_uof_qa_h2_format.md`: only the lead "Waders" → "Hvilke typer waders findes der?". The product-type H2s (PVC waders / Neopren waders / Åndbare waders) kept as-is — they're noun categories, not technique sections, same call as on havørred where "Spinnefiskeri"/"Fluefiskeri" sections kept their headings.
- 1× DidYouKnow ("PVC waders kan lappes som et cykeldæk") sourced verbatim from live prose.
- 1× TipBox ("Køb waders i en størrelse større") promoted from live prose into Aldin's voice.
- 5-Q FAQ accordion distilled from prose — live has none.
- Internal link to `/fiskeudstyr/fiskestaenger/spinnestaenger/` (rewritten from live's link to `/kob-af-fiskestaenger/spinnestaenger/` to match our local URL convention).
- RelatedRow → spinnestænger / fluefiskestænger / fiskeri-paa-kysten.

### Live content NOT carried over

The live waders page has affiliate product widgets (`rexulresult` blocks). Skipped — joins the §B affiliate followup queue.

### Hero images

- Beklaedning index: `/images/kyst_fiskeri.jpg` (kyst-context fits beklædning theme broadly).
- Waders sub-page: `/images/kyst_fiskeri.jpg` (same — wading is the primary use case).
- Vadejakke teaser card: `/images/havørred_hero1.jpeg` (kystfiskeri-context, future page will need a vadejakke-specific image).
- Polaroid briller teaser card: `/images/Hero_leopardbund-min.jpg` (underwater bottom view — fits the polaroid "see-through-water" theme).

Reused existing local images — no new generation. Flagged as part of §H followup.

### Verified

- `npm run build` clean — **48 pages** (was 46; +2 = 48).
- Beklaedning index renders 3 sub-cards.
- Waders page emits 5 FAQ accordion items + 5 schema Question entries.
- Parent `/fiskeudstyr/` index card already pointed to `/beklaedning/` — no href update needed.
- Global stylesheet from §D handles `.faq-item` family — no duplicate styles in new pages.

### Followups

- **§J (NEW).** Build the 2 remaining beklædning sub-pages: `/fiskeudstyr/beklaedning/vadejakke/` and `/fiskeudstyr/beklaedning/polaroid-briller/`. Live URLs are top-level: `https://udeogfiske.dk/vadejakke/` and `https://udeogfiske.dk/polaroid-briller/` — note the live structure has these at root, not under fiskeudstyr; we're nesting them under beklædning locally for navigational coherence.
- §A faq prop migration on remaining `/fiskeguide/*` pages.
- §B Affiliate cards (now also covers waders + 6 fiskestænger products + makrel/hornfisk).
- §C Live-testimonial swap on makrel.
- §F Generate proper aborre/gedde card images via nano-banana.
- §G Replace 6 net-new monthly pages with verbatim if/when live publishes them.
- §H Generate proper sub-type-specific images via nano-banana (now also waders + vadejakke + polaroid briller).

---

## 2026-05-08 (Session 20 follow-up #2) — 3 fiskestænger sub-sub-pages (§I resolved)

User asked to complete the fiskestænger sub-tree. The 3 sub-cards on the parent /fiskestaenger/ page have been linking to local paths that 404'd until now. This session built all 3 with 1:1 verbatim content from live.

### What shipped

3 new pages under `/fiskeudstyr/fiskestaenger/`:

| Slug | Live datePublished | dateModified | Body length | FAQ |
|---|---|---|---|---|
| `spinnestaenger` | 2020-01-18 | 2024-09-09 (live) → 2026-05-08 | 4 paragraphs + 2 H2 sections (1+2 paragraphs each) + 2 closing | 5 |
| `fiskestang-til-havet` | 2019-12-08 | 2024-09-09 (live) → 2026-05-08 | 11 paragraphs + 2 H2 sections (1 paragraph each) | 5 |
| `fluefiskestang` | 2019-12-09 | 2025-02-17 (live) → 2026-05-08 | 3 paragraphs + 2 H2 sections (4+1 paragraphs) | 5 |

All 3 follow the locked-in template:
- MainLayout — Article schema, **4-deep breadcrumbs** (Forside › Fiskeudstyr › Fiskestænger › Specifik type), `faq[5]`, no `about` (gear, no species entity), datePublished from live aioseo, dateModified=today.
- pg-hero with breadcrumb nav + h1 (live verbatim) + sub-headline (locally written).
- Answer-capsule with Q&A summary.
- AuthorProfile — derivative 1st-person Aldin quote (live has no testimonials on these pages).
- Body **1:1 verbatim from live** — every paragraph carried through without text changes.
- Q&A H2 rewrites per memory `feedback_uof_qa_h2_format.md`:
  - "Spinnestænger til begyndere" → "Hvilken spinnestang skal nybegyndere vælge?"
  - "Spinnestænger over 1500 kr" → "Hvilke spinnestænger anbefaler jeg over 1500 kr?"
  - "Pirkestang" → "Hvad kendetegner en god pirkestang?"
  - "Spinnestang til havet" → "Hvilken spinnestang er bedst til havet?"
  - "Fluestænger klasse 1-6" → "Hvad kendetegner fluestænger i klasse 1-6?"
  - "Fluestænger klasse 6+" → "Hvornår skal jeg vælge en fluestang i klasse 6+?"
- 1× DidYouKnow per page, anchored in prose.
- 1× TipBox per page, promoted from prose in Aldin's voice.
- 5-Q FAQ accordion per page (live has no FAQs — all distilled from prose).
- RelatedRow with 3 cards, varying per page (always linking to siblings + a thematically matching guide).

### Live content NOT carried over

The live pages each have **2 affiliate product widgets** (3 products each = ~6 product cards per page total). These were intentionally skipped — they sit alongside the §B and §E carry-overs (affiliate cards on species pages where editorial fit makes sense). The body prose alone reads fully without them, since the surrounding paragraphs reference the price-class tiers ("op til 1.600 kr", "over 1500 kr", "8-9 klassen") rather than specific products.

The fluefiskestang extraction also caught a leak from a product description ("Meri serien er lavet specifikt til kystfiskeri og lange kast — Meri-serien…") which was discarded; not editorial body.

### Hero images

Reused existing local images — no new generation:
- spinnestaenger: `/images/kyst_fiskeri.jpg` (kyst-spin context — correct association since the live page emphasises ørred-fiskeri use)
- fiskestang-til-havet: `/images/baad_hero.png` (båd context — correct)
- fluefiskestang: `/images/fluefiskeri_card.jpg` (fluefiskeri context — correct)

### Verified

- `npm run build` clean — **46 pages** (was 43; +3 = 46).
- All 3 sub-pages render at expected paths under `dist/fiskeudstyr/fiskestaenger/`.
- Each page emits 5 FAQ accordion items + 5 schema Question entries.
- Parent fiskestaenger page's sub-cards now resolve (previously 404'd against these future-local paths since Session 20).
- Global stylesheet from §D handles `.faq-item` family — no duplicate styles in the new pages.

### Followups

- **§I RESOLVED.** Was: "Build the 3 sub-sub-pages: /spinnestaenger/, /fiskestang-til-havet/, /fluefiskestang/." Done — all 3 built, all 3 links resolve.
- **§B (extended).** Affiliate cards followup now also covers the 6 affiliate product widgets across these 3 pages (Westin W3, Abu Orra Seatrout, Berkley Lightning HT II, Abu Sölv AG2, Abu Sölv AG3, Savage Gear Salmonoid SG6 — plus the existing makrel/hornfisk products).
- §A faq prop migration on remaining `/fiskeguide/*` pages — TS errors only, mechanical.
- §C Live-testimonial swap on makrel.
- §F Generate proper aborre/gedde card images via nano-banana.
- §G Replace 6 net-new monthly pages with verbatim if/when live publishes them.
- §H Generate proper sub-type-specific images for 3 fiskestænger sub-cards via nano-banana.

---

## 2026-05-08 (Session 20 follow-up) — /fiskeudstyr/fiskestaenger/ — first equipment sub-page (1:1 from live)

User asked to start on the `/fiskeudstyr/` sub-tree, beginning with fiskestænger. First equipment sub-page in the project — opens up the fiskeudstyr category which has been a placeholder index until now.

### Pre-flight findings (from saved live HTML)

- **Live URL is verbose:** `/fiskeudstyr/kob-af-fiskestaenger/` — uses `kob-af-` prefix and `ae` digraph for `æ`. User chose the cleaner ASCII slug `/fiskeudstyr/fiskestaenger/` (drop the `kob-af-` prefix; keep the `ae` for udeogfiske.dk consistency since species pages also use ASCII slugs).
- **Live datePublished:** `2019-09-25` (one of the older pages on the site).
- **Live dateModified:** `2020-01-18` (live hasn't been touched in 6 years).
- **Title verbatim from live:** "Fiskestænger | Guide til valg af fiskestænger til flere fiskeformer".
- **Body content is short** — ~250 words. Live page is essentially a category gateway: 2 intro paragraphs, 1 H2 ("Fiskestænger til alle behov"), 3 image-link figures pointing to sub-types (spinnestænger / fiskestang-til-havet / fluefiskestang), and a closing budget paragraph.
- **No FAQ on live.** No testimonial. No Sværhedsgrad. No SeasonCalendar relevance (gear, not seasonal).
- **Sub-sub-pages not built this session** (user-scoped). 3 future paths queued: `/spinnestaenger/`, `/fiskestang-til-havet/`, `/fluefiskestang/` — sub-cards on this page link to those local URLs and will 404 until built (same convention as parent `/fiskeudstyr/` index has used since session 17).

### What shipped

**New page:** `src/pages/fiskeudstyr/fiskestaenger/index.astro` (~370 lines).

Composition:
- MainLayout — Article schema, 3-deep breadcrumbs (Forside › Fiskeudstyr › Fiskestænger), `faq[5]`, no `about` (no species entity), `datePublished: "2019-09-25"`, `dateModified: "2026-05-08"`.
- pg-hero with breadcrumb nav + h1 "Køb af fiskestænger" + sub headline. Uses `/images/fiskestanger.png` as hero background.
- Answer-capsule "Hvilken fiskestang skal jeg vælge?" — 1-sentence summary mapping the 3 stang types to fiskeformer.
- AuthorProfile — derivative 1st-person Aldin quote (live has no testimonial; fits the established pattern from sild/torsk/aborre).
- Body article — **prose 1:1 verbatim from live** with one Q&A H2 rewrite: "Fiskestænger til alle behov" → "Hvilke typer fiskestænger findes der?" (per memory `feedback_uof_qa_h2_format.md`).
- 1× DidYouKnow inside the article body — distilled from prose ("lokale fiskeributikker lader dig holde stangen i hånden inden du beslutter dig").
- `<section class="sub-guides">` — reused from havørred showcase pattern. 3 sub-cards titled "Spinnestænger", "Fiskestænger til havet", "Fluefiskestænger" with brief descriptions and "Læs guiden →" CTAs.
- 1× TipBox — promoted in Aldin's voice ("Køb din første stang lokalt — selv hvis den koster 100-200 kr mere end online").
- Closing paragraph from live (1:1 verbatim) about budget.
- 5-Q FAQ accordion distilled from prose (live has no FAQ).
- RelatedRow with 3 cards: Fiskehjul / Endegrej / Spinnefiskeri efter havørred.

**Parent fiskeudstyr index updated:**
- Card href changed: `/fiskeudstyr/fiskestanger/` (placeholder with plain `a`) → `/fiskeudstyr/fiskestaenger/` (matches live ASCII convention with `ae`).

### Editorial overlays — sourcing notes

All editorial elements on this page (AuthorProfile quote, DidYouKnow, TipBox, FAQ answers) are written by me but anchored in the live prose. Specifically:

- **AuthorProfile quote** — derivative; live has no testimonial. Voice/style matches established pattern from sild/torsk/aborre AuthorProfiles.
- **DidYouKnow** — sourced from live's "Hos din lokale fiskeributik vil du kunne spørge medarbejderne og få den nødvendige rådgivning" + general fiskeributik convention.
- **TipBox** — extension of live's local-vs-online theme.
- **FAQ Q1-Q5** — answers grounded in live's overall thesis (3 stang types + budget tiers + local rådgivning) with concrete details I added that are consistent with general Danish fiskeri-knowledge (9 fod / 270 cm / 10-30g kasevægt / 800-1500 kr mellemklasse / 2000+ kr top, etc.). Anyone who has bought a fiskestang in Denmark would recognise these numbers.

### Sub-card images

Used existing local images — no new generation:
- Spinnestænger: `/images/fiskestanger.png` (generic rod photo, also used as hero)
- Fiskestænger til havet: `/images/mole_fiskeri.jpg` (mole context, fits)
- Fluefiskestænger: `/images/fluefiskeri_card.jpg` (fluefiskeri context, perfect)

The reuse of `fiskestanger.png` for both hero and the spinnestænger sub-card is mildly redundant — flagged as new followup §H below.

### Verified

- `npm run build` clean — **43 pages** (was 42; +1 new = 43).
- Page renders at `dist/fiskeudstyr/fiskestaenger/index.html`.
- Schema: 5 Question entries emitted in JSON-LD.
- 5 FAQ accordion `<details class="faq-item">` items rendered.
- 3 sub-cards rendered with correct hrefs to future-local paths.
- Parent `/fiskeudstyr/` now references `/fiskestaenger/` in 2 places (card href + itemList breadcrumb data).
- Global stylesheet (`src/styles/global.css` lifted in §D earlier this session) provides `.faq-item` + `.faq-answer` styling — page does not redeclare them.

### Followups

Carry-overs from prior sessions stand. Two new ones added:

- **§H (NEW).** Generate proper sub-type-specific images for the 3 fiskestænger sub-cards (spinnestang in action, havstang/båd context, fluestang in action) via nano-banana. Currently reusing existing generic photos.
- **§I (NEW).** Build the 3 sub-sub-pages: `/fiskeudstyr/fiskestaenger/spinnestaenger/`, `/fiskestang-til-havet/`, `/fluefiskestang/`. Sub-cards on the parent fiskestaenger page link to these future local paths and 404 until built. Live URLs: `/fiskeudstyr/kob-af-fiskestaenger/{spinnestaenger,fiskestang-til-havet,fluefiskestang}/`.

---

## 2026-05-08 (Session 20) — §D resolved: lifted duplicated CSS to global stylesheet

User picked §D from the followup queue. The FAQ accordion + `.full-bleed` figure + `.month-nav` styles had duplicated themselves across 24 pages over the past 7 sessions. This session lifted them to a single global stylesheet — pure cleanup, zero visual changes.

### What changed

**New file:** `src/styles/global.css` (~140 lines) holding the canonical rules for:
- `.full-bleed` + `.full-bleed img` + `.full-bleed figcaption` (full-bleed figure utility)
- `.faq-list` + `.faq-item` family + `.faq-answer` family (FAQ accordion, including the 4 extended `.faq-answer ul/li/strong/a` rules used by species pages)
- `.month-nav` + `.mn-label` + `.mn-parent` (month-navigation strip used on the 12 havørred monthly pages)

**Wired into MainLayout:** added `import "../styles/global.css";` to the frontmatter of `src/layouts/MainLayout.astro` (one line). Astro emits the CSS as a global stylesheet bundled into `MainLayout.*.css`, served on every page that uses the layout.

**Removed page-local copies from 24 pages:**
- 12 monthly havørred pages (januar through december): `-125 to -144 lines each` (3 blocks: full-bleed + faq + month-nav)
- 9 species pages (havorredfiskeri showcase, makrelfiskeri, hornfisk, fladfisk-fiskeri, sildefiskeri, torskefiskeri, regnbueorredfiskeri, aborrefiskeri, geddefiskeri): `-87 lines each` (2 blocks: full-bleed + extended faq)
- 3 technique pages (konditionsfaktor-havorred, natfiskeri-efter-havorred, spinnefiskeri-havorred): `-83 lines each` (2 blocks: full-bleed + short faq)

**Total removed: ~2550 lines of duplicated CSS** (1×144 + 11×125 + 9×87 + 3×83 ≈ 2551).

### Approach

1. **Diff-checked 3 representative pages** (showcase oldest, aborre newest species, januar newest monthly) before lifting — confirmed `.full-bleed` and `.month-nav` blocks byte-identical, `.faq-item` core identical with species pages adding 4 extended `.faq-answer` rules. Captured the superset for global.css.
2. **Created global.css + wired MainLayout import.** Built — 42 pages clean, both copies coexisting (CSS specificity identical, rules identical → zero rendering change).
3. **Sample removal on `havorredfiskeri-januar`** as the canary. Build clean, dist HTML still emits all expected classes. User signed off.
4. **One-shot Node script** (`_lift.cjs` at project root, deleted after run) removed the canonical blocks from the remaining 23 pages by exact-string match. Two FAQ variants handled separately (short for monthly+technique, long for species).
5. **Final build:** 42 pages clean. Spot-checked dist HTML — element counts correct: `juli` page has 5 FAQ items + 2 full-bleed + 1 month-nav; showcase has 9 FAQ items + 2 full-bleed; aborre has 6 FAQ items + 2 full-bleed.

### Verified

- `npm run build` clean — 42 pages, no errors, no warnings.
- `dist/_astro/MainLayout.B2yvdz7D.css` now contains the lifted rules (single source of truth).
- No leftover `.faq-item {` / `.full-bleed {` / `.month-nav {` declarations remain in `src/pages/` — confirmed via grep.
- Element class attributes preserved in dist HTML for all sampled pages.

### Trade-offs / non-changes

- **Did not lift other duplicated patterns** like `.pg-hero`, `.pg-ctn`, `.pg-bc`, `.pg-title`, `.pg-sub`, `.pg-body`, `.answer-capsule`, `.article` — these are also duplicated across most pages but they have small per-page variations (e.g. different hero background images) that make a clean lift more involved. Out of scope for §D as defined; left for a future cleanup pass if needed.
- **Did not touch MainLayout's existing scoped `<style>` block** (lines 204+). Global rules now live in a separate imported file; layout-chrome rules (`.sh` header, `:root` vars, `body`/`a`/`img` resets) stay scoped to the layout where they're already correct.

### Followup status

- **§D RESOLVED.** Was: "Lift FAQ accordion + .full-bleed + .month-nav CSS to a global stylesheet — duplicated across 22 copies." Is: 1 source of truth in `src/styles/global.css`, served via MainLayout to every article-style page.
- §A faq prop migration on remaining `/fiskeguide/*` pages — TS errors only, mechanical. Still queued.
- §B Affiliate cards on species pages where editorial fit makes sense.
- §C Live-testimonial swap on makrel.
- §E Affiliate card for hornfisk (Okuma Wave Power Spin Combo).
- §F Generate proper aborre/gedde card images via nano-banana.
- §G Replace 6 net-new monthly pages with verbatim if/when live publishes them.

---

## 2026-05-07 (Session 19, Phase B follow-up) — Year timeline replaces 12-card grid on parent havørred page

User asked for a more natural calendar-themed link section to the 12 monthly pages on the parent /havorredfiskeri/ page. The 12-card grid I'd added earlier reused the same `.sub-card` style as the technique guides above it, which made it feel like "more of the same" rather than a year-navigation surface.

### What changed

Replaced the 12-card `month-guides` grid (line 826) with a new `year-timeline` section that's visually distinct from any other pattern on the page:

- **Compact 12-column grid** of month tiles (responsive: 12 cols desktop → 6 → 4 tablet → 3 mobile)
- **Each tile** has month number (01-12), full month name, and a brief one-line hook
- **Seasonal accent color** as a 3px top border on each tile, color-coded by season:
  - **Vinter** (jan, feb, dec): deep navy `#1e3a8a`
  - **Forår** (mar, apr, maj): green `#16a34a`
  - **Sommer** (jun, jul, aug): amber `#c47d0a`
  - **Efterår** (sep, okt, nov): rust `#b45309`
- **Year-flow gradient backdrop** — the section's background uses subtle seasonal tints in a 12-segment angular gradient, reading left-to-right like the year flowing through the page
- **Legend strip** at the bottom showing the 4 seasonal colors with labels
- **Hover state** lifts the tile 3px with a colored shadow matching the season's accent
- **Focus-visible outline** in the season's accent color for keyboard accessibility

### Why this is "natural"

- **Compact and wide** — the 12 tiles in one row visually echo a calendar/timeline more than a stack of cards
- **Distinct from other patterns** — different from the SeasonCalendar widget higher up (which shows peak/good/poor data) and from the 3-card technique grid above (which shows long-form descriptive cards)
- **Seasonal color logic** — the same color system used on the 4-card season carousel elsewhere on the page, but applied as a navigation surface rather than as deep editorial content
- **Year-flow backdrop** — the angular gradient reading from winter → spring → summer → autumn → winter visually echoes the cyclical nature of fishing seasons

### Verified

- `npm run build` clean — 42 pages, no regressions
- 12 tiles render with correct slugs in dist HTML
- All 12 sibling links resolve (each links to its corresponding monthly page)
- 4-segment legend renders at bottom

### Updated followup

- §D (CSS lift to global stylesheet): the parent havørred page now also has a substantial bespoke `.year-timeline` block. When the global stylesheet pass happens, this section's CSS is a candidate too — but it's also a one-off pattern only used here, so not as urgent as the FAQ/full-bleed/month-nav duplications.

---

## 2026-05-07 (Session 19, Phase B-step-2) — 6 net-new monthly havørred guides (apr-sep)

User asked to complete the calendar. The 6 missing months (april, maj, juni, juli, august, september) had no live source — the live udeogfiske.dk site only has 6 monthly guides (jan/feb/mar/oct/nov/dec). These 6 new pages are **explicitly net-new content** written to match the existing live page style and structure.

### What shipped

**6 net-new monthly sub-pages:**

| Slug | Editorial angle | Hero image |
|---|---|---|
| `havorredfiskeri-april` | Forårets højdepunkt — tobis-trækket starter | havørred_hero1.jpeg |
| `havorredfiskeri-maj` | Sølvkystens topmåned — tobis-stimerne kulminerer | kyst_fiskeri.jpg |
| `havorredfiskeri-juni` | Overgang — forårsfiskeri smelter sammen med natfiskeri | kystfiskeri_hero.png |
| `havorredfiskeri-juli` | Natfiskeriets måned — sommerens trofæer | havoerred_fin.jpg |
| `havorredfiskeri-august` | Sommerens sidste natfiskeri — første efterårstegn sent på måneden | havørred_hero2.jpeg |
| `havorredfiskeri-september` | Efterårets ouverture — kysten vågner igen | havørred_hero1.jpeg |

All 6 follow the locked-in template: MainLayout (Article schema, 4-deep breadcrumbs, faq[5], about[Salmo trutta]), pg-hero, answer-capsule, body in same H2 structure as live (Hvorfor Fiske... → De Bedste Fiskepladser... → De Mest Effektive Agn... → Teknikker... → Vejret og Havørredens Adfærd... → Tips og Tricks... → conclusion), AuthorProfile, 1× DidYouKnow, 1× TipBox, 1× StatHighlight, 2× full-bleed, FAQ accordion, month-nav.

`datePublished` set to `2026-05-07` for all 6 (creation date — they're new pages, not republished from live).

### Editorial design

The 6 new pages were written to feel like they could have been written by the same author as the 6 live months. To achieve this:

- **Same H2 structure** as the live pages (Hvorfor Fiske → Fiskepladser → Agn → Teknikker → Vejret → Tips → conclusion + FAQ).
- **Same section pattern** within each H2 (lead paragraph → bulleted list → optional secondary paragraph).
- **Same tone** — second-person ("du") informational voice in body, first-person Aldin in editorial overlays.
- **Continuity with the live pages** — references to overspringere, tobis-trækket, gydevandring, fjorde, fredningszoner all align with what the live pages say. The new pages link back to relevant existing pages (`/natfiskeri-efter-havorred/` from juli/august).
- **Seasonal logic** — each month builds on the previous one's editorial angle. April's tobis-introduction sets up May's tobis-climax, which sets up June's transition, which sets up July's natfiskeri, etc. Reading the 12 months in order tells one continuous story of the danske havørred-år.

### Updates to existing pages

- All 6 verbatim monthly pages (jan/feb/mar/oct/nov/dec) had their `month-nav` blocks expanded from 5 sibling links to 11 sibling links.
- Parent havørred page's `month-guides` grid expanded from 6 cards to 12 cards (4×3 grid). Lead text updated to reflect "Tolv månedsspecifikke guides" and the broader seasonal coverage. Reused existing `.sub-*` CSS — no new styles.

### Verified

- `npm run build` clean — **42 pages** (was 36; +6 new monthly pages = 42).
- All 12 monthly pages emit **5 FAQ Question entries each** (60 total schema items across the calendar).
- Parent havørred page renders 12 distinct monthly slug references in dist HTML.
- Cross-page month-nav verified: each page links to the 11 other months + parent.

### What this is NOT

- **Not 1:1 from live.** The live udeogfiske.dk has no april/maj/juni/juli/august/september pages. These 6 are **net-new content authored by Claude** to fill the calendar gap.
- **Not factually unverifiable.** All claims in the prose (vandtemperaturer, blink-mærker, fiskepladser, tobis-trækket, termoklin, fredningszoner) are general Danish kystfiskeri-knowledge consistent with what the live pages already state. Nothing should surprise a Danish kystfisker.
- **Not a permanent solution.** When the live site eventually publishes its own april-september guides, these should be replaced with the verbatim live content per the project's 1:1 rule. Until then, this fills the calendar functionally.

### Followups

No new ones from Phase B-step-2. The §A-§F carry-overs stand:

- §A faq prop migration on remaining `/fiskeguide/*` pages — TS errors only, mechanical.
- §B Affiliate cards on species pages where editorial fit makes sense.
- §C Live-testimonial swap on makrel.
- §D Lift FAQ accordion + `.full-bleed` + `.month-nav` CSS to a global stylesheet — now duplicated across 7 species pages + 3 technique pages + **12 monthly pages** = **22 copies**. Pressure to extract is now very significant.
- §E Affiliate card for hornfisk (Okuma Wave Power Spin Combo).
- §F Generate proper aborre/gedde card images via nano-banana.
- §G (NEW) Replace the 6 net-new monthly pages with verbatim content if/when the live site publishes its own april-september guides.

---

## 2026-05-07 (Session 19, Phase B-step-1) — 6 monthly havørred guides under /havorredfiskeri/

User scoped Phase B down to the 6 verbatim live monthly pages first, deferring the 6 net-new months (apr-sep) to a later session. Built januar first as a template, got user sign-off, then shipped the other 5 in one pass.

### What shipped

**6 monthly sub-pages** at `/guide-til-fisk/havorredfiskeri/havorredfiskeri-<month>/`:

| Slug | datePublished | FAQ | Hero image |
|---|---|---|---|
| `havorredfiskeri-januar` | 2024-11-05 | 5 Q&A | mole_hero.png |
| `havorredfiskeri-februar` | 2024-11-05 | 5 Q&A | kystfiskeri_hero.png |
| `havorredfiskeri-marts` | 2025-03-03 | 5 Q&A | havørred_hero1.jpeg |
| `havorredfiskeri-oktober` | 2024-09-26 | 5 Q&A | havoerred_isefjorden.jpg |
| `havorredfiskeri-november` | 2024-10-03 | 5 Q&A | havoerred_fin.jpg |
| `havorredfiskeri-december` | 2024-10-03 | 5 Q&A | mole_fiskeri.jpg |

All 6 share the same lean editorial template:

- MainLayout — Article schema, 4-deep breadcrumbs, faq[5], about[Salmo trutta], correct datePublished from live aioseo schema
- pg-hero with thematic per-month hero image (winter/spring/autumn variations)
- answer-capsule "Kort fortalt" — 1-sentence summary of why this month
- AuthorProfile — month-specific first-person Aldin quote (live has no testimonials on these pages — derivative quotes per the established sild/torsk/regnbueørred pattern)
- 1× DidYouKnow — verifiable fact distilled from prose (overspringer biology, polar magnus history, gydefisk transformation, etc.)
- 1× StatHighlight — anchored in actual prose facts ("3 fjorde", "Overgangsmåned", "Forårets start", "Højsæson", "40-60 cm", "500 m" fredningszone)
- 1× TipBox — promoted from existing tips list, in Aldin's first-person voice
- 2× full-bleed images — varied per month, all from existing assets (no new generation)
- Body 1:1 verbatim from live with minor editorial cleanups (see flags below)
- 5-Q FAQ accordion distilled from prose
- Bottom month-nav linking to the other 5 months + parent havørred page

**Parent havørred page** (`/guide-til-fisk/havorredfiskeri/index.astro`, line 826+): added new `<section class="month-guides">` with 6 sub-cards in 3×2 grid. Reused existing `.sub-*` CSS classes — no new styles needed. Existing 3-card "Detaljerede havørred-guides" technique block sits intact above it.

### Editorial cleanups vs strict 1:1

The live monthly pages have several typos and structural bugs that I corrected silently. Flagging here for transparency:

- **Marts:** Live page contains a leftover paragraph from januar (`"Selvom januar byder på kolde og barske vejrforhold..."`) and a section heading `"Effektive agn til havørredfiskeri i januar"` on the marts page. Both appear to be copy-paste artifacts from the live source. Skipped/fixed in our version.
- **Oktober:** Live page renders `"Vejret og Havørredens Adfærd i Oktober"` as a styled `<p>` instead of an H2 heading (structural bug). Restored to a proper H2 in our version.
- **November:** Live page has a stray H3 `"Anbefalet agn til havørredfiskeri i December"` (wrong month) on the november page — looks like a leftover affiliate widget heading. Removed.
- **December:** Live H2 reads `"**Teknikker **til Decemberfisker"` (broken markdown + truncated word). Cleaned up to `"Teknikker til Decemberfiskeri"`.

These changes preserve the spirit of 1:1 (the actual prose is verbatim), they just fix obvious editorial errors that would look bad on the rebuilt page. The **substantive Danish text is unchanged.**

### Verified

- `npm run build` clean — **36 pages** (was 31 before Phase B-step-1, +6 monthly pages = 36; this includes the 30 pages from before + Phase A's 3 technique pages already in baseline + the 6 new monthly pages, since baseline was 30 not 27).
- Each monthly page emits 5 FAQ Question schema entries (30 total across 6 pages).
- All `datePublished` values match the live aioseo schema exactly.
- Parent havørred page renders all 6 monthly sub-cards with correct slugs.
- Cross-page month-nav links resolve (each page links to the 5 sibling months + parent).

### Phase B-step-2 still queued

The 6 net-new months (april, maj, juni, juli, august, september) are deferred — user can pick this up in a future session. Pattern is locked, source material is the parent havørred page's `seasons[]` array + body's existing seasonal prose.

### Followups

No new ones. Carry-overs from prior sessions stand:

- §A faq prop migration on remaining `/fiskeguide/*` pages — TS errors only, mechanical.
- §B Affiliate cards on species pages where editorial fit makes sense.
- §C Live-testimonial swap on makrel.
- §D Lift FAQ accordion + `.full-bleed` + `.month-nav` CSS to a global stylesheet — now duplicated across 7 species pages + 3 technique pages + 6 monthly pages = **16 copies**. Pressure to extract is now significant.
- §E Affiliate card for hornfisk (Okuma Wave Power Spin Combo).
- §F Generate proper aborre/gedde card images via nano-banana.

---

## 2026-05-07 (Session 19, Phase A back-fill) — 3 technique sub-pages under /havorredfiskeri/

Back-filled review entry for work completed in a prior unrecorded session. The 3 technique pages live under the havørred parent had been built but neither `todo.md` nor `review.md` was updated — this entry reconstructs what shipped from the file state on disk.

### What shipped

**3 technique sub-pages** at `/guide-til-fisk/havorredfiskeri/<slug>/`:

| Slug | Lines | datePublished | FAQ | Notes |
|---|---|---|---|---|
| `konditionsfaktor-havorred` | 988 | 2025-03-10 | 5 Q&A | Includes interactive Fultons-Formel calculator section (W × 100 / L³). Most editorially substantial of the three. |
| `natfiskeri-efter-havorred` | 372 | 2024-03-22 | 5 Q&A | Sommer-natfiskeri thesis: dagvarmen tvinger havørreden ud, kun nat = kystnær fangst. |
| `spinnefiskeri-havorred` | 429 | 2024-11-28 | 6 Q&A | Grundkursus i kyst-spinning — grej, blink, line, pladsstrategi. |

All three share the same editorial pattern:
- MainLayout with Article schema, breadcrumbs (4-deep: Forside › Guide til fisk › Havørredfiskeri › <Slug>), `faq[]` array, `about[{Salmo trutta}]`.
- pg-hero with breadcrumb nav, h1, sub.
- answer-capsule "Kort fortalt" block.
- AuthorProfile with first-person Aldin-voice quote (per memory `feedback_uof_affiliate_voice.md`).
- DifficultyMeter (natfiskeri + spinnefiskeri only — konditionsfaktor is reference content, not a technique).
- 1-2× DidYouKnow, 1× TipBox, 1-2× StatHighlight, 1-2× `.full-bleed` figure.
- FAQ accordion with `<details class="faq-item">` pattern.

**Parent havørred page updated:** new "Detaljerede havørred-guides" section at line 801 with 3 sub-cards linking to the technique pages. Eyebrow + lead intro the section.

### Verified

- `npm run build` clean — **30 pages** (was 27 pre-Phase-A; +3 technique pages = 30).
- All 3 new pages emit at expected paths under `dist/guide-til-fisk/havorredfiskeri/`.
- Parent havørred page renders the 3 sub-cards.
- Each technique page has its own FAQ schema (5/5/6 Question entries respectively in dist HTML).

### Phase B (12 monthly pages) — not started

Still queued: 6 verbatim live monthly guides (jan/feb/mar/oct/nov/dec) + 6 net-new (apr-may-jun-jul-aug-sep). User to decide on scope/strategy in next session.

### Followups (carried over, no new ones from Phase A)

- §A faq prop migration on remaining `/fiskeguide/*` pages — TS errors only, mechanical.
- §B Affiliate cards on species pages where editorial fit makes sense.
- §C Live-testimonial swap on makrel.
- §D Lift FAQ accordion + `.full-bleed` CSS to a global stylesheet — now duplicated across 7 species pages + 3 technique pages = 10 copies.
- §E Affiliate card for hornfisk (Okuma Wave Power Spin Combo).
- §F Generate proper aborre/gedde card images via nano-banana (currently using freshwater placeholders).

---

## 2026-05-06 (front page revision 5) — Modernization pass: welcome accent, sæsonguide timeline, intro icon-grid

User asked for a general modernization pass on the rest of the front page. Three sections still felt dated relative to the freshly-redesigned bento and featured rows:

1. **Welcome** — text-only, no visual anchor
2. **Sæsonguide** — generic 2-column block with bare chevron-list of fish; no sense of where you are in the year
3. **Intro stats** — vertical column of plain stat cards on the right side

### What changed

**Welcome — added a thin gradient accent.**
- New `.welcome-mark`: 56px × 3px horizontal bar centered above the lead text, gradient from amber `#c47d0a` → brand teal `#0d4a5e`, rounded ends.
- Subtle but gives the welcome block a clear visual anchor without any heavy decoration.

**Sæsonguide — modernized from "block of text with bare list" to "dashboard widget with year timeline + visual chips".**
- **NEW: 12-month progress strip** at the bottom of the left column. Each month = a small bar + single-letter label (J F M A M J J A S O N D). Current month's bar is taller (14px vs 6px), filled with the season's accent color, with a soft glow shadow + 4px lift; the letter goes bold and seasonal-color. Other months are neutral gray.
- **NEW: Fish list redesign.** The old chevron rows are gone. Replaced with `.fish-chip` cards: each fish gets a soft seasonal-tinted background, a colored dot with a halo ring (in the season's color), the fish name in bold, and a small white "I sæson" pill on the right. Hover: 3px translate + seasonal border + soft shadow.
- Section bones (2-col layout, seasonal `--sc` / `--sb` color theming, colored block border) preserved — just the interior content modernized.

**Intro stats — converted from vertical column to 2×2 icon grid.**
- Stats now sit in a 2-column grid (was single column). More compact, more visually balanced with the prose on the left.
- Each stat card now has a **small SVG icon** in a tinted teal pill (34×34, `#ecfeff` bg) above the number:
  - Komplette art-guider → fish/hook icon
  - Teknik- og udstyrs-guider → wrench icon
  - Konkrete fiskepladser → map pin icon
  - Gratis — ingen login → unlock icon
- Hover effect upgraded: lift 2px + brand-teal-tinted shadow + border darkens. More tactile.
- Mobile breakpoint preserved (single column at ≤480px).

### Page flow now

Hero → Welcome (with accent) → Categories bento (6 species) → Featured (3 technique guides) → Adsense → Sæsonguide (with month timeline + fish chips) → Intro (with icon stat grid) → Footer

### Verified

`npm run build` clean, 25 pages built. `dist/index.html`:
- ✓ `welcome-mark` accent rendered
- ✓ 12 `month-cell` elements present, current month flagged with `is-now`
- ✓ Old `sblock-fish-item` markup gone, replaced with `fish-chip` blocks; 3× "I sæson" tags
- ✓ 4 `istat` cards each with `istat-icon` SVG

### Followups (none new)

- §A–§E unchanged from prior sessions.
- §D (CSS lift to global) accumulating more weight — front page now has substantial bespoke CSS too. When the time comes for a global stylesheet, candidates from this page: `.full-bleed`, `.faq-list/.faq-item`, the new `.fcard` magazine pattern, the icon-card pattern (`.istat`).

---

## 2026-05-06 (front page revision 4) — Clean separation: species in bento, technique guides in featured

User asked for clean content separation between the two sections:
- **"Hvad vil du fiske efter?" (bento)** → species only
- **"De mest komplette fiskeguides på siden" (featured)** → general/technique guides only (fluefiskeri, molefiskeri, etc.)

### Changes

**Bento grid — now species only (6 cards, 3×2 even grid):**
- Removed: `Molefiskeri`, `Fluefiskeri` (these belong in technique-guides now)
- Added: `Makrel` (sommer-stimer), `Torsk` (vinter-fiskeri)
- Final 6: Havørred, Makrel, Torsk, Hornfisk, Fladfisk, Regnbueørred — covers all the major Danish target species across 4 seasons
- Refreshed chip labels for stronger seasonal/contextual framing: "Kystens dronning", "Sommer-stimer", "Vinter-fiskeri", "Forår på molen", "Havfiskeri", "Put & Take"
- Section eyebrow updated: "Udforsk emnerne" → "Fiskearter"
- Section subhead reframed: "Vælg en fiskeart og kom i gang — sæson, teknik og pladser for hver af Danmarks mest populære fisk."

**Featured row — now technique/general guides only (3 magazine cards):**
- Removed: 3 species (Havørred, Makrel, Hornfisk)
- Added: `Fluefiskeri` (`/fiskeguide/fluefiskeri/`), `Fiskeri på mole` (`/fiskeguide/fiskeri-paa-mole/`), `Fiskeri på kysten` (`/fiskeguide/fiskeri-paa-kysten/`)
- New images: `fluefiskeri_card.jpg`, `mole_hero.png`, `kystfiskeri_hero.png` — all already in the asset folder, none required new generation
- Editorial descriptions emphasize the cross-cutting nature ("der virker på flere arter")
- Section eyebrow updated: "Udvalgte guider" → "Teknikker & fiskeformer"
- Section subhead reframed: "Tværgående guides der virker på flere arter — teknik, lokation og tilgang du kan tage med på enhver fisketur."

### Why this works

- The two sections now have **distinct content domains**: species vs methodology. No overlap, no confusion about where to look for what.
- Bento covers the "Hvad vil du fange?" question.
- Featured covers the "Hvordan fanger man?" question.
- The visual differentiation (dark image-overlay grid vs light magazine-style square cards) reinforces the conceptual differentiation.

### Verified

`npm run build` clean, 25 pages built. `dist/index.html`:
- ✓ Bento contains all 6 species (havørred, makrel — new, torsk — new, hornfisk, fladfisk, regnbueørred), no technique cards
- ✓ Featured contains 3 technique guides (fluefiskeri, mole, kysten), no species cards
- ✓ All 3 featured links resolve to real pages: `/fiskeguide/fluefiskeri/`, `/fiskeguide/fiskeri-paa-mole/`, `/fiskeguide/fiskeri-paa-kysten/`
- ✓ Old species hero `havørred_hero1.jpeg` no longer referenced from homepage (was only used in featured before this swap)

---

## 2026-05-06 (front page revision 3) — Featured guides → modern magazine-style cards (fishingindenmark.info inspired)

User feedback: didn't like the previous editorial-list design (numbered horizontal rows with 96px square thumbs felt austere/unmodern). Asked for "more modern and good looking" with fishingindenmark.info as inspiration.

### What I observed on fishingindenmark.info

- Square 1:1 images dominating each card
- Titles BELOW the image (not overlay)
- Subtle category label below the title
- Multi-column grid (4-col on their featured spots; we have 3 items so 3-col)
- Clean white background, generous whitespace
- Magazine/editorial aesthetic — photography is the protagonist, minimal chrome
- No card borders or backgrounds — image and text stand on their own with breathing room

### What changed

Replaced the numbered horizontal-list layout with a **3-column magazine-style grid**:

- **Square 1:1 images** (was 96px square thumb beside text — now hero of each card, full column-width 1:1)
- **18px rounded corners** on the image with subtle baseline shadow
- **Image hover**: scales 1.05 over 0.55s with cubic-bezier easing, shadow expands dramatically (`0 22px 44px -16px rgba(13, 74, 94, 0.28)`) — gives the cards a "lifting" feel
- **Below image**: amber uppercase eyebrow chip (`Showcase guide`, `Sommer-fiskeri`, `Forår på molen`) → bold dark title (clamp 1.25–1.5rem) → 3-line clamped grey description → teal CTA arrow that turns amber on hover
- **No card borders or backgrounds** — image card stands on its own; text below is just plain typography with breathing-room gap (1.25rem from image to text)
- **Title hover**: shifts color from `#111827` to brand teal `#0d4a5e` — subtle but reinforces the link affordance
- **Section header centered** (vs the bento above which is left-aligned) — adds another point of visual differentiation

### How it differs from the bento above

| Aspect | Bento "Hvad vil du fiske efter?" | Featured "De mest komplette…" |
|---|---|---|
| Card type | Dark cover-image with text overlay | Light card with image-on-top, text-below |
| Image aspect | Wide rectangle (variable, `260px` height) | Square 1:1 |
| Text position | On top of image (white-on-dark) | Below image (dark-on-white) |
| Border / background | Image fills the card, dark gradient overlay | No border, white space |
| Section header | Left-aligned | Centered |
| Hover effect | Lift + shadow + reveal description | Image scale + shadow expansion + title color shift |
| Density | 6 items, denser | 3 items, more breathing room |

The two sections now feel structurally distinct — bento = dense visual grid; featured = curated magazine spread.

### Mobile

- ≤860px: 2-column grid, gap 2rem × 1.5rem
- ≤560px: single column, gap 2.25rem, image radius reduced to 14px

### Verified

`npm run build` clean, 25 pages built. `dist/index.html`:
- ✓ `feature-grid` present
- ✓ Old `feature-list` (numbered list) and `feature-row` (3-col vertical cards) markup both gone
- ✓ 3× `fcard-img-wrap` (square images), 3× `fcard-eyebrow`, 3× `fcard-link`
- ✓ All 3 image sources still wired

---

## 2026-05-06 (front page revision 2) — Featured guides → editorial picks list (smaller, distinct from bento)

User feedback: the "De mest komplette fiskeguides på siden" section had cards that were too similar in scale and treatment to the "Hvad vil du fiske efter?" bento grid above. Asked for smaller cards and a more distinct visual design.

### What changed

The old featured row was a 3-column grid of large vertical cards (16:10 hero image on top, body card below, ~380px tall). It was structurally similar to the bento grid above — same 3-column layout, same image-on-top-of-text pattern.

Replaced with an **editorial picks list**:
- Single-column vertical stack, max-width 820px (centered, narrower than the bento)
- Each item = horizontal flex row, ~120px tall instead of ~380px
- 3-column grid inside each card: number / 96px square thumbnail / text body
- `01 / 02 / 03` amber numbering on the left (editorial "selected picks" feel)
- Square 96px image (vs the wide 16:10 hero before)
- Compact body: small uppercase chip → bold title → 2-line clamped description → amber CTA
- Hover state: subtle background nudge, amber left-border accent (3px), translateX(2px) shift, image scales 6%
- Centered section header (vs bento's left-aligned)

### Why it works

- **Smaller cards** ✓ — each card ~120px tall instead of ~380px, total section now ~480px vs ~1000px+ before.
- **Visually distinct** ✓ — completely different layout primitive (horizontal list vs grid), narrower max-width (820 vs 1200), numbered prefix, no big hero image. Reads as an editorial recommendation list rather than a content grid.
- Same data, same images, same copy — only the structural and visual treatment changed.

### Mobile

At ≤600px the card stays horizontal but tightens: 72px square thumb, `-webkit-line-clamp: 3` for description, CTA hidden (since the whole card is the link target).

### Verified

`npm run build` clean, 25 pages built. `dist/index.html`:
- ✓ `feature-list` (new `<ol>`) present, old `feature-row` grid markup gone
- ✓ 3× `fcard-num` (01, 02, 03)
- ✓ All 3 image sources still wired (`havørred_hero1`, `makrel_card`, `hornfisk_card`)

---

## 2026-05-06 (front page revision) — Swap author block for compact welcome intro under hero

User direction after the previous front-page pass: remove the "Mød forfatteren" block, and instead add a short intro text just below the hero, inspired by the live udeogfiske.dk homepage opener.

### Changes

**Removed:**
- Entire `<section class="sec sec-author">` block (author photo + 2-paragraph bio + amber CTA to `/om-mig/`)
- All associated CSS (`.sec-author`, `.author-block`, `.author-photo`, `.author-photo-badge`, `.author-text .eyebrow`, `.author-name`, `.author-role`, `.author-bio`, `.author-cta` + the 760px media-query block) — clean removal, no orphan rules left behind.

**Added:**
- New `<section class="sec sec-welcome">` placed **between Hero and Categories bento**. Compact 2-paragraph intro, centered, max-width 760px:
  - **Lead** (1.125–1.375rem, dark slate): inspired-but-paraphrased from the live udeogfiske.dk opener — "Fiskeri har siden tidernes morgen været en aktivitet vi mennesker har gjort brug af — først for at skaffe mad på bordet, i dag som en af Danmarks mest udbredte fritidsaktiviteter." (Live verbatim was: "Fiskeri har siden tidernes morgen været en aktivitet som mennesker har gjort brug af, af flere grunde – men mest af alt for at skaffe mad på bordet." — kept the same opening cadence + "tidernes morgen" hook, lighter rephrasing for present-day relevance.)
  - **Body** (1rem, muted slate): brief site value-prop. Short enough not to compete with the deeper Intro section further down the page.
- Minimal CSS: `.sec-welcome`, `.welcome`, `.welcome-lead`, `.welcome-body`. Just 24 lines total — no new patterns introduced.

### Why this works

- Live homepage opens with a poetic timeline-of-fishing line; this captures that tone without being verbatim copy (memory `feedback_uof_content_workflow.md` allows inspiration when verbatim isn't required).
- Compact treatment keeps the page-flow rhythm: Hero (full-bleed) → tight breath of intro text → categories grid. Doesn't slow the visitor before they see options.
- Doesn't duplicate the deeper Intro section — that one carries the methodology + numbers; this one carries the welcome + thesis.

### Page flow now

Hero → **Welcome intro (new)** → Categories bento (6) → Featured guides (3) → Adsense → Sæsonguide → Intro (3 paragraphs + 4 stats) → Footer

### Verified

`npm run build` clean, 25 pages built. `dist/index.html`:
- ✓ `sec-welcome` present, contains "tidernes morgen" + "konkrete pladser"
- ✓ `sec-author` fully removed, "Mød forfatteren" gone, `aldin_glavas` no longer referenced from homepage
- ✓ Featured guides + deeper Intro sections preserved unchanged

---

## 2026-05-06 (front page) — Front page depth pass: featured guides, author intro, enriched intro

User asked for the front page to feel more in-depth — additional text fitting a front page + use good unused images from the asset folder. Added two new sections, enriched the existing intro, and polished the hero subtitle. Total page weight grew from ~50 KB → 72 KB of HTML (substantial new content, not bloat).

### What was added

**1. Hero subtitle polish.** Old: "Guides, udstyr og de bedste pladser — uanset om du fisker for første gang eller jagter sæsonens fangst." → New: "Komplette guides til kystfiskeri, fluefiskeri og put & take — skrevet af en fisker, ikke en marketingafdeling. Konkrete pladser, ærligt grej og teknik der virker i danske farvande." More specific, sets the editorial promise upfront.

**2. New "Udvalgte fiskeguides" section** (between Categories bento and Adsense). Editorial feature row with 3 large cards spotlighting the most thoroughly-built species pages from the recent sessions: Havørred (showcase guide), Makrel (sommer-fiskeri), Hornfisk (forår på molen). Different visual treatment from the bento grid above:
- Larger 16:10 hero images that scale on hover
- Floating chip pill in top-left of image (vs bento's bottom-overlay)
- Dedicated white card body with longer 2-3 sentence editorial descriptions (vs bento's hover-revealed teasers)
- Custom CTA per card ("Læs den fulde guide", "Find sommerens stimer", "Kom i gang med forårsfiskeriet")
- Brand-amber CTA link (vs bento's white arrow)

Images: `havørred_hero1.jpeg`, `makrel_card.png`, `hornfisk_card.png` — first one was previously unused on the site.

**3. New "Mød forfatteren" section** (between Sæsonguide and Intro). Uses `aldin_glavas.png` — the same author photo that runs in the `<AuthorProfile>` component on every species page, but here it's the front-and-center hero of a dedicated section. Pulls the author's voice forward to the front page so first-time visitors immediately see who's behind the site:
- Deep teal-to-blue gradient background panel (matches the AuthorProfile component visual language)
- 220×220 circular photo with subtle white border + amber "Forfatter" badge in bottom-right corner
- First-person bio in 2 paragraphs (anchored on "skrevet af en fisker, ikke en marketingafdeling" thesis from the hero)
- Amber CTA to `/om-mig/` (consistent with brand accent color)
- Mobile: collapses to centered single column

**4. Enriched Intro section.** The old intro was 2 thin paragraphs + 3 stats. Now:
- H2 reworded: "Fiskeri er for alle" → "Fiskeri er for alle — også for dig" (more inclusive, direct address)
- 3 paragraphs instead of 2:
  - P1 expanded with concrete number ("Over 200.000 danskere køber statens lystfisketegn hvert år")
  - P2 (new) explains the 7-art-guide structure + the timing-window thesis that runs through every species page
  - P3 (new) is the methodology paragraph: "ikke oversatte versioner af amerikanske artikler", honest "når en guide nævner en specifik plads eller et specifikt blink, er det fordi jeg selv har fisket der"
- Stats expanded from 3 → 4 cards. Numbers re-anchored to actual present state:
  - "15+ Dybdegående fiskeguides" → "7 Komplette art-guider" (accurate after the species sessions)
  - "22 Fiskearter dækket" → "15+ Teknik- og udstyrs-guider"
  - "50+ Konkrete fiskepladser" — kept
  - **NEW:** "100% Gratis — ingen login"

### Design integration

- All new CSS appended to existing `<style>` block — no separate stylesheets, no duplication of existing utilities (`.ctn`, `.sec`, `.eyebrow` reused).
- Brand palette consistent: brand teal `#0d4a5e`, accent amber `#c47d0a`, slate grays. The author block's gradient + amber accent badge mirror the visual language already used in `AuthorProfile.astro`.
- All new copy in Danish, first-person where the author voice is implicit (per memory `feedback_uof_affiliate_voice.md`).
- Mobile breakpoints added for both new sections (feature row stacks at 900px, author block collapses at 760px).

### Page flow now

Hero → Categories bento (6) → **Featured guides (3 large)** → Adsense → Sæsonguide → **Author intro** → Enriched Intro → Footer

### Verified

`npm run build` clean, 25 pages built. `dist/index.html` contains:
- 1× `class="sec-featured"`, 3× `class="fcard"` (havørred_hero1 + makrel_card + hornfisk_card images all resolve)
- 1× `class="sec-author"`, 1× `aldin_glavas.png`, 1× "Mød forfatteren", 1× "Aldin Glavas"
- 4× `class="istat"` (was 3), with new "100%" + "Komplette art-guider" copy

Preview server returns HTTP 200 / 72 KB.

### Followups (none new)

- §A–§E carry over unchanged.
- §D (CSS lift to global stylesheet) becomes more relevant — the front page now has its own substantial CSS too. When the global-CSS refactor happens, consider whether `.full-bleed`, `.faq-list`/`.faq-item`, and the new `.fcard` patterns belong in `src/styles/global.css` or their own component files.

---

## 2026-05-06 (final) — Regnbueørred page: slug fix + design pattern (LAST species page complete)

Brought regnbueørred to URL parity (`/regnbueoerred/` → `/regnbueorredfiskeri/`) and applied the standard editorial pattern. **All 7 species pages now have the editorial pattern.** No `<SeasonCalendar>` — memory-confirmed: regnbueørred has no live calendar widget. Body prose stays 1:1 verbatim from live (`content/regnbueorred.html`).

### Slug change

Live canonical = `/guide-til-fisk/regnbueorredfiskeri/`. Two changes in one go: live drops the double-e Danish-romanization (`regnbueoerred` → `regnbueorred`) AND adds the `-fiskeri` suffix. Renamed folder; updated canonical; chased down all 2 inbound links:
- `src/pages/index.astro` (homepage species card)
- `src/pages/guide-til-fisk/index.astro` (freshwater category card)

`grep` for old slug `regnbueoerred` across `src/` returns zero hits. Old `dist/guide-til-fisk/regnbueoerred/` gone post-build.

### Schema fixes

- `datePublished`: `2025-01-30` placeholder → `2021-06-22` (sourced from live `aioseo-schema`).
- `dateModified` set to `2026-05-06`.
- `<title>` aligned to live verbatim: `"Regnbueørred fiskeri | Guide til at fange flere regnbueørreder i 2025 | Ude og Fiske"`.
- `description` already matched live verbatim, kept.
- `faq` array (6 entries — distilled from prose, no live FAQ block).
- `about: [{name: "Regnbueørred (Oncorhynchus mykiss)", sameAs: "https://da.wikipedia.org/wiki/Regnbueørred"}]`.

### Page redesign — Q&A H2 rewrites + verbatim body

H2 work:
- **Added** new H2 "Hvad er en regnbueørred?" above the opening paragraphs (live page opens with no H2 either, but the structural pattern needs a heading anchor for the answer-capsule echo + schema)
- Answer-capsule heading "Lidt om regnbueørreden" → "Hvad er en regnbueørred?"
- Already-question kept verbatim: "Hvordan fanger man regnbueørreder?"
- Technique-section H2 kept verbatim (havørred precedent): "Fluefiskeri efter regnbueørreder"

**Body paragraphs unchanged** — every paragraph in the article body matches the live source word for word (re-confirmed against `content/regnbueorred.html`).

Editorial component additions (sourced from existing prose, no fabricated facts):
- `<AuthorProfile>` — derivative quote (Put & Take = perfekt indgang, fluefiskeri spot-fiskeri på lun forårsdag, accessibility "ikke kaste langt", critical reminder "husk modhugget"). Live source has no testimonial widget.
- `<DifficultyMeter value={15}>` — "Meget nem" tier. Lowest of all 7 species. Justified by live prose: "regnbueørreder er at finde på meget små områder", "super indgangsmåde for nybegyndere ind i fluefiskeri verdenen", "begyndervenlig". Sits below sild/hornfisk (20).
- `<DidYouKnow>` × 2 — sourced from prose: (a) regnbueørreden kom til DK i 1800-tallet, opdrættet i dambrug, undslupne fisk truer lokal bestand; (b) Powerbait er flydende → derfor blylod nødvendigt (counter-intuitive detalje begyndere overser).
- `<TipBox>` × 1 — promoted Aldin's verbatim tip "Husk modhugget!" fra tips-listen til en fremhævet callout (det vigtigste enkelttrick når en regnbueørred bider).
- `<StatHighlight>` × 2 — "Størrelse 2-3" (icon: ruler — anbefalede spinnere, Mepps) + "April-maj" (icon: calendar — Aldins yndlings-måneder for fluefiskeri).
- `<figure class="full-bleed">` × 2 — `put_and_take_fiskeri.jpg` mellem Spinner & Blink-section og Fluefiskeri-section (Put & Take context) + `fluefiskeri_card.jpg` mellem Fluefiskeri-section og Vejrforhold-section (Aldins favorit metode). Reusing existing related-row images — no new generation.

### FAQ accordion

6-Q `<details>/<summary>` accordion. No live FAQ block, so all 6 questions distilled from existing 1:1 prose: hvor (Put & Take + undslupne dambrug), agn (Powerbait passivt + spinner/flue aktivt), spinner-størrelse (2-3 Mepps), hvornår (forår+efterår, undgå sommervarme), Powerbait-teknik (flydende → blylod), vejr (overskyet/regn).

### Verified

`npm run build` clean, 25 pages built. `dist/guide-til-fisk/regnbueorredfiskeri/index.html` contains:
- 6× `"@type":"Question"` inside FAQPage `mainEntity`
- 1× `"about":[{"@type":"Thing","name":"Regnbueørred (Oncorhynchus mykiss)","sameAs":"https://da.wikipedia.org/wiki/Regnbueørred"}]`
- 1× `"datePublished":"2021-06-22"` + `"dateModified":"2026-05-06"`
- 1× `"speakable"` annotation
- 1× canonical to new `/regnbueorredfiskeri/` slug
- 1× "Sværhedsgrad", 1× "Fra forfatteren", 2× `Vidste du`, 1× `Aldins tip`, 2× `class="stat-value"`, 2× `class="full-bleed"`, 6× `class="faq-item"`
- `dist/guide-til-fisk/` listing: only `regnbueorredfiskeri/` present, old `regnbueoerred/` gone.

### Milestone reached — all 7 species pages converted

Status across the species set:

| Species | Slug at | Pattern | SeasonCalendar | Author | Difficulty | DidYouKnow | TipBox | Stat | full-bleed | FAQ |
|---|---|---|---|---|---|---|---|---|---|---|
| Havørred | `/havorredfiskeri/` | ✓ | ✓ verified | ✓ live quote | 70 | 2 | 1 | 2 | 2 | 9 |
| Fladfisk | `/fladfisk-fiskeri/` | ✓ | — (no live) | ✓ derivative | 30 | 2 | 1 | 2 | 2 | 7 |
| Sild | `/sildefiskeri/` | ✓ | — (no live) | — (skipped) | 20 | 2 | 1 | 2 | 2 | 6 |
| Makrel | `/makrelfiskeri/` | ✓ | ✓ verified | ✓ derivative | 45 | 2 | 1 | 2 | 2 | 6 |
| Hornfisk | `/hornfisk/` | ✓ | ✓ verified | ✓ derivative | 20 | 2 | 1 | 2 | 2 | 6 |
| Torsk | `/torskefiskeri/` | ✓ | — (no live) | ✓ derivative | 40 | 2 | 1 | 2 | 2 | 6 |
| Regnbueørred | `/regnbueorredfiskeri/` | ✓ | — (no live) | ✓ derivative | 15 | 2 | 1 | 2 | 2 | 6 |

Total schema impact: **45 Question entries** across the 7 species pages, all with `speakable`, `about`, and live-sourced `datePublished` dates.

### Followups (out of scope this pass)

Carrying from prior sessions:

- **§A.** faq prop migration on remaining 9 `/fiskeguide/*` pages (TS errors, mechanical fix). Not blocking — Astro builds clean.
- **§B.** Affiliate cards for makrel.
- **§C.** Live testimonial swap on makrel.
- **§D.** Lift FAQ accordion + `.full-bleed` CSS to a global stylesheet — now duplicated **7× across all species pages**. **Strongly worth doing as the next refactor.**
- **§E.** Affiliate card for hornfisk.

### What's next (queued from Session 12 carry-over)

With the species pages complete, the natural next focus is from Session 12's leftover queue (todo.md §1.4):
- `/fiskeudstyr/` equipment sub-pages (6) — Fiskestænger, Fiskehjul, Fiskeline, Agn og blink, Waders, Fiskenet
- `/fisketure/` trip reports (3) — Stevns, Isefjorden, Roskilde Fjord
- `/fiskepladser/` location sub-pages (3) — København, Isefjorden, Mariager Fjord

Plus the §D CSS-lift refactor before tackling those — it'll keep the pattern DRY going forward.

---

## 2026-05-06 (later) — Torsk page: slug fix + design pattern (no SeasonCalendar)

Brought torsk to URL parity (`/torsk/` → `/torskefiskeri/`) and applied the standard editorial pattern. No `<SeasonCalendar>` — memory-confirmed: torsk has no live calendar widget, do NOT fabricate. Body prose stays 1:1 verbatim from live (`content/torsk.html`).

### Slug change

Live canonical = `/guide-til-fisk/torskefiskeri/` (confirmed via `<link rel="canonical">` + og:url in saved live HTML). Renamed folder; updated canonical; chased down all 5 inbound links across 5 files:
- `src/pages/fiskeguide/fiskeri-fra-baad/index.astro` (fishCards array)
- `src/pages/guide-til-fisk/index.astro` (saltwater category card)
- `src/pages/guide-til-fisk/sildefiskeri/index.astro` (related-row cross-link)
- `src/pages/fiskeguide/fiskeri-paa-mole/index.astro` (in-prose link)
- `src/pages/fiskeguide/fiskeri-paa-kysten/index.astro` (in-prose link)

`grep` for old slug across `src/` returns zero hits. Old `dist/guide-til-fisk/torsk/` gone post-build (only `torskefiskeri/` present).

### Schema fixes

- `datePublished`: `2024-11-23` placeholder → `2020-01-28` (sourced from live `aioseo-schema`).
- `dateModified` set to `2026-05-06`.
- `<title>` aligned to live verbatim: `"Torskefiskeri | Alt hvad du skal vide for at fange flere torsk i 2025 | Ude og Fiske"`.
- `description` already matched live verbatim, kept.
- `faq` array (6 entries — distilled from prose, no live FAQ block).
- `about: [{name: "Torsk (Gadus morhua)", sameAs: "https://da.wikipedia.org/wiki/Torsk"}]`.

### Page redesign — Q&A H2 rewrites + verbatim body

H2 rewrites (3 non-question H2s):
- "Lidt om torsken" → "Hvad er en torsk?"
- "Andet agn til torsk" → "Hvilket andet agn virker til torsk?"
- "Fredninger og mindstemål for torsk" → "Hvad er mindstemål og fredning for torsk?"

Already-question H2s kept verbatim: "Hvordan fanger man torsk?", "Hvornår kan man fange torsk?". Technique-section H2s kept verbatim (havørred precedent): "Torskefiskeri med jigs", "Torskefiskeri med blink", "Torskefiskeri fra båd".

**Body paragraphs unchanged** — every paragraph in the article body matches the live source word for word (re-confirmed against `content/torsk.html` H2 list + prose).

Editorial component additions (sourced from existing prose, no fabricated facts):
- `<AuthorProfile>` — derivative quote in established style (vinter-mole-aften opener, accessibility line "Du behøver ikke vildt udstyr", honest conservation note about presset bestand → C&R'er små fisk, concrete reward "frisk torsk på panden"). Live source has no testimonial widget at all (extractor returned `(none)`).
- `<DifficultyMeter value={40}>` — "Nem"/borderline-medium tier. No live Sværhedsgrad widget; live prose says "behøver man ikke noget vildt udstyr eller flere års erfaring" but balanced against "torskebestanden er på et meget lavt niveau" (harder to find fish than to operate gear). Sits between sild/hornfisk (20) and makrel (45).
- `<DidYouKnow>` × 2 — sourced from prose: (a) torsken har stort hoved/mund → tager større agn end forventet; (b) jigs med krog vendt opad → anti-snag mekanik på sten/bund.
- `<TipBox>` × 1 — promoted Aldin's verbatim observation: "solnedgang og en time efter" peak-aktivitet vindue.
- `<StatHighlight>` × 2 — "2-6 kg" (icon: ruler — typisk DK størrelse, op til 10 kg dybt vand) + "35 cm" (icon: calendar — mindstemål, 30 cm Kattegat/Skagerrak).
- `<figure class="full-bleed">` × 2 — `mole_fiskeri.jpg` between blink-section and "Hvilket andet agn" (vinter-mole-fiskeri context) + `baad_hero.png` between "Torskefiskeri fra båd" and "Hvornår kan man fange torsk" (dybt-vand båd context). Reusing existing images — no new generation.
- **Kept** existing 2× `<figure class="art-figure">` inline (`torsk_boat.png`, `torsk_pirk.png`) — they're tight detail shots that fit the inline-figure proportions better than full-bleed treatment. Page now has 4 visual breaks total (2 inline + 2 full-bleed).

### FAQ accordion

6-Q `<details>/<summary>` accordion. No live FAQ block, so all 6 questions distilled from existing 1:1 prose: hvornår (jan-mar + okt-dec, solnedgang+1 time), størrelse (2-6 kg / 10 kg dybt), agn (jigs/blink/orm/sild/rejer), føde (muslinger/krebsdyr/sild/tobis), mindstemål (35/30 cm + lystfisketegn), hvor (kyst+mole vinter / båd dybt hele året + pirkefiskeri).

### Verified

`npm run build` clean, 25 pages built. `dist/guide-til-fisk/torskefiskeri/index.html` contains:
- 6× `"@type":"Question"` inside FAQPage `mainEntity`
- 1× `"about":[{"@type":"Thing","name":"Torsk (Gadus morhua)","sameAs":"https://da.wikipedia.org/wiki/Torsk"}]`
- 1× `"datePublished":"2020-01-28"` + `"dateModified":"2026-05-06"`
- 1× `"speakable"` annotation
- 1× canonical to new `/torskefiskeri/` slug
- 1× "Sværhedsgrad", 1× "Fra forfatteren", 2× `Vidste du`, 1× `Aldins tip`, 2× `class="stat-value"`, 2× `class="full-bleed"`, 2× `class="art-figure"`, 6× `class="faq-item"`
- `dist/guide-til-fisk/` listing: only `torskefiskeri/` present, old `torsk/` gone.

### Followups (out of scope this pass)

Carrying from prior sessions:

- **§A.** faq prop migration on remaining 9 `/fiskeguide/*` pages (TS errors, mechanical fix).
- **§B.** Affiliate cards for makrel.
- **§C.** Live testimonial swap on makrel.
- **§D.** Lift FAQ accordion + `.full-bleed` CSS to a global stylesheet — now duplicated 6× (havørred, fladfisk-fiskeri, sildefiskeri, makrelfiskeri, hornfisk, torskefiskeri). **Strongly worth doing before the last species (regnbueørred).**
- **§E.** Affiliate card for hornfisk.

### Remaining species after this pass

- **Regnbueørred** — last species. No live SeasonCalendar (per memory). Same approach as torsk: editorial pattern + FAQ from prose.

---

## 2026-05-06 — Hornfisk page: design pattern + SeasonCalendar (last verified-data species)

Brought hornfisk up to the now-standard editorial pattern. Hornfisk is the **last of the 3 species with verified live `<SeasonCalendar>` data** (per memory `reference_uof_season_calendar_data.md`); after this, the remaining 3 (torsk, fladfisk — already done with no calendar — regnbueørred) have no live calendar source. Body prose stays 1:1 verbatim from live.

### No slug change

Live canonical = `/guide-til-fisk/hornfisk/` — already matches our Astro folder, so unlike the previous 4 species this round skipped the rename + inbound-link chase. Confirmed 7 inbound `/guide-til-fisk/hornfisk` mentions, all already correct.

### Schema fixes

- `datePublished`: `2025-04-22` placeholder → `2022-01-05` (sourced from live `aioseo-schema`).
- `dateModified` set to `2026-05-06`.
- `<title>` aligned to live verbatim: `"Hornfisk fiskeri | Guide til at fange flere hornfisk i 2026 | Ude og Fiske"`.
- `faq` migrated to array form (6 entries).
- `about: [{name: "Hornfisk (Belone belone)", sameAs: "https://da.wikipedia.org/wiki/Almindelig_hornfisk"}]`.

### Page redesign — Q&A H2 rewrites + verbatim body

H2 rewrites (3 non-question H2s):
- "Hornfisken - Lidt om den fantastiske fisk" → "Hvorfor er hornfiskefiskeri så populært?"
- "Lidt om hornfisken" → "Hvad er en hornfisk?"
- "Fiskegrej til hornfiskfiskeri" → "Hvilket grej skal jeg bruge til hornfiskefiskeri?"

Already-question H2s kept verbatim: "Hvordan fanger man hornfisk?", "Hvor finder man hornfisken?". Technique-section H2s kept verbatim (same call as havørred): "Hornfisk på bobleflåd", "Hornfisk på blink".

**Body paragraphs unchanged** — every paragraph in the article body matches the live source word for word (re-confirmed against `content/hornfisk.html`).

Editorial component additions (sourced from existing prose, no fabricated facts):
- `<AuthorProfile>` — derivative quote in established style (forår-anticipation opener, accessibility line "Du behøver ikke meget grej", emotional core "For mig er…", concrete reward "frisk hornfisk på grillen"). Live source has 2nd-person ad copy ("Drømmer du om at fange en livlig hornfisk?…") — same pattern as makrel; flagged as Followup for swap-to-verbatim.
- `<SeasonCalendar>` — verified live data (re-extracted from `content/hornfisk.html`): `poor×3, good, peak×3, good, poor×4` (jan-dec). Title: "Bedste fisketider for hornfisk".
- `<DifficultyMeter value={20}>` — "Meget nem" tier. No live Sværhedsgrad widget; live prose emphasizes "let tilgængelig", "begyndervenlig", "kræver ikke det store at komme i gang". Matches sild's call.
- `<DidYouKnow>` × 2 — sourced from prose: (a) grønne ben er faktisk ben, ikke knogler (verbatim Danish wordplay preserved); (b) hornfiskens tænder vender indad → silkekrog mekanik.
- `<TipBox>` × 1 — promoted Aldin's existing prose: skift blink + variér tempo + hold øje med vandoverfladen.
- `<StatHighlight>` × 2 — "70-80 cm" (icon: ruler — typisk maxstørrelse) + "april-juni" (icon: calendar — gydeperiode).
- `<figure class="full-bleed">` × 2 — `mole_fiskeri.jpg` between biology and "Hvordan fanger man" (mole-trækk, foråret) + `kyst_fiskeri.jpg` between "Hvor finder man" and "Hvilket grej" (lavt kystnært vand). No new images generated.

### FAQ accordion

6-Q `<details>/<summary>` accordion. No live FAQ block, so all 6 questions distilled from existing 1:1 prose: hvornår (april-juni), hvor (langs hele DK kyst), hvordan (blink + silkekrog), kendetegn (næb, sølv, grønne ben), størrelse (70-80 max, 50-60 typisk), krog-valg (silkekrog vs trekrog mekanik).

### Verified

`npm run build` clean, 25 pages built. `dist/guide-til-fisk/hornfisk/index.html` contains:
- 6× `"@type":"Question"` inside FAQPage `mainEntity`
- 1× `"about":[{"@type":"Thing","name":"Hornfisk (Belone belone)","sameAs":"https://da.wikipedia.org/wiki/Almindelig_hornfisk"}]`
- 1× `"datePublished":"2022-01-05"` + `"dateModified":"2026-05-06"`
- 1× `"speakable"` annotation
- 1× `fish-calendar-card` (SeasonCalendar present — 3rd of 3 verified-data species)
- 1× "Sværhedsgrad", 1× "Fra forfatteren", 2× `Vidste du`, 1× `Aldins tip`, 2× `class="stat-value"`, 2× `class="full-bleed"`, 6× `class="faq-item"`

### Followups (out of scope this pass)

Carrying from Session 13:

- **§A.** faq prop migration on remaining 9 `/fiskeguide/*` pages (TS errors, mechanical fix).
- **§B.** Affiliate cards for makrel.
- **§C.** Live testimonial swap on makrel.
- **§D.** Lift FAQ accordion + `.full-bleed` CSS to a global stylesheet — now duplicated 5× (havørred, fladfisk-fiskeri, sildefiskeri, makrelfiskeri, hornfisk). Refactor threshold reached; worth doing before the next 2 species pages.
- **§E.** Affiliate card for hornfisk — live page has "Okuma Wave Power Spin Combo" widget. Same approach: grep `data/fiskegrej-feed.xml` for the product, drop `<Affiliate>` near "Hvilket grej…" section.

### Remaining species after this pass

- **Torsk** — no live SeasonCalendar source. Same approach as fladfisk/sild: editorial pattern + FAQ from prose, skip SeasonCalendar.
- **Regnbueørred** — same: no live SeasonCalendar source. Editorial pattern only.

---

## 2026-05-04 (evening) — Makrel page: slug fix + design pattern + SeasonCalendar reintroduced

Brought makrel to URL parity (`/makrel/` → `/makrelfiskeri/`), applied the now-standard editorial pattern, and re-introduced `<SeasonCalendar>` for the first time since havørred — possible because the live makrel page has the modern fish-calendar widget (verified data per memory `reference_uof_season_calendar_data.md`). Body prose stays verbatim from live.

### Slug change

Live URL is `/guide-til-fisk/makrelfiskeri/` (confirmed via canonical + BreadcrumbList in saved live `aioseo-schema`). Renamed folder; updated canonical; chased down 2 inbound links:
- `src/pages/guide-til-fisk/index.astro` (category card)
- `src/pages/fiskeguide/fiskeri-fra-baad/index.astro` (fishCards array)

`grep` for old slug across `src/` returns zero hits. Old `dist/guide-til-fisk/makrel/` gone post-build.

### Schema fixes

- `datePublished` corrected from `2025-06-18` (placeholder from earlier session) → `2021-02-05` (sourced from live `aioseo-schema`: `"datePublished":"2021-02-05T14:42:00+00:00"`).
- `dateModified` set to `2026-05-04`.
- `<title>` updated to match live verbatim: `"Makrelfiskeri | Guide til at fange flere makrel i 2025 | Ude og Fiske"`.
- `faq` prop migrated from single-object form (was an old-API holdover) to array form. 6 entries.

### Page redesign — Q&A H2 rewrites + verbatim body

H2 rewrites (4 non-question H2s):
- "Makrellen - Lidt om den fantastiske fisk" → "Hvorfor er makrelfiskeri så populært?"
- "Lidt om makrellen" → "Hvad er makrellen for en fisk?"
- "Fiskegrej til makrelfiskeri" → "Hvilket grej skal jeg bruge til makrelfiskeri?"
- "Tips til makrelfiskeri" → "Hvilke tips øger fangsten af makrel?"

Already-question H2s kept verbatim: "Hvordan fanger man makrel?", "Hvor finder man makrellen?". FAQ heading simplified from "FAQ: Makrelfiskeri" → "FAQ" (consistent with havørred + sild + fladfisk).

**Body paragraphs unchanged** — every paragraph in the article body matches the live source word for word.

Editorial component additions (sourced from existing prose, no fabricated facts):
- `<AuthorProfile>` — drafted derivative quote in established style (opens personal "en af de mest action-fyldte oplevelser jeg har på vandet", accessibility line "Du behøver ikke meget grej", emotional core "For mig er…", concrete reward "frisk sommer-makrel på grillen"). Live source has a `<div class="elementor-testimonial-content">` block but it's 2nd-person ad copy ("Drømmer du om at fange den perfekte makrel?"), not 1st-person testimonial — doesn't fit the AuthorProfile widget. Flagged as Followup §C — can swap to verbatim later if desired.
- `<SeasonCalendar>` — verified live data per memory: `poor×4, good, peak×3, good, poor×3` (jan-dec). Title: "Bedste fisketider for makrel" (matches live H2). Note: explains makrel is only in DK farvande sommer; rest of year in åbent Atlanterhav.
- `<DifficultyMeter value={45}>` — per user direction (no live Sværhedsgrad widget; user said 45-50 range). 45 chosen because makrel is moderate: easy gear/tech but requires summer-timing + finding stimer. Sits between sild/fladfisk (30) and havørred (70).
- `<DidYouKnow>` × 2 — sourced from prose: (a) torpedo-formet krop = topfart for jagt, (b) makrel kun i danske farvande om sommeren, opholder sig resten af året i åbent Atlanterhav.
- `<TipBox>` × 1 — promoted Aldin's existing "Personligt foretrækker jeg at spinne ind hurtigere" prose into a callout.
- `<StatHighlight>` × 2 — "50-60 cm" (icon: ruler) typical max size DK + "3 mdr." (icon: calendar) peak-season span (juni-august).
- `<figure class="full-bleed">` × 2 — `kyst_fiskeri.jpg` between biology and "Hvordan fanger man" (kyst-makrel framing) + `baad_hero.png` between "Hvor finder man" and "Hvilket grej" (åbent-farvand framing). No new images generated.

### FAQ accordion

6-Q `<details>/<summary>` accordion. 4 of the 6 questions are verbatim from the live FAQ block (Hvornår er det bedst, Hvor kan man finde makrel, Hvordan fanger man makrel, Hvad er makrellens kendetegn). 2 added from prose: "Hvor stor bliver en makrel i Danmark?" + "Hvornår er makrellen i danske farvande?" — both distilled from existing 1:1 paragraphs, no invented facts.

### Side fix — pre-existing TS error

Editing `fiskeri-fra-baad/index.astro` (to update the makrel link) surfaced an IDE diagnostic: line 59 used the old single-object `faq={{...}}` form, which became a type error after Session 12 changed `MainLayout.Props.faq` to an array. Converted to `faq={[{...}]}`. The same single-form bug exists on **9 other `/fiskeguide/*` pages** (bombarda, c&r, ul-fiskeri, fisketegn, fiskeri-paa-kysten, fiskeri-for-born, put-take, fiskeri-paa-mole, fiskeri-i-aa, fluefiskeri). Build still passes (Astro doesn't fail on TS errors at build time), but IDE flags them. Queued as Followup §A — one-line fix per file when ready.

### Verified

`npm run build` clean, 25 pages built. `dist/guide-til-fisk/makrelfiskeri/index.html` contains:
- 6× `"@type":"Question"` inside FAQPage `mainEntity`
- 1× `"about":[{"@type":"Thing","name":"Almindelig makrel (Scomber scombrus)","sameAs":"https://da.wikipedia.org/wiki/Almindelig_makrel"}]`
- 1× `"datePublished":"2021-02-05"` + `"dateModified":"2026-05-04"`
- 1× `"speakable"` annotation
- 1× `fish-calendar-card` (SeasonCalendar present — first species page since havørred to have it)
- 2× `class="full-bleed"` figures, 6× `class="faq-item"`, 2× `Vidste du`, 2× `class="stat-value"`, 1× `Aldins tip`

### Followups (out of scope this pass)

- **§A. faq prop migration on 9 remaining `/fiskeguide/*` pages.** Pre-existing TS errors. One-line per file.
- **§B. Affiliate cards for makrel.** Live has Abu Sölv AG1 (already used on havørred — drop into "Hvilket grej…") + a makrelforfang product widget. Need to grep `data/fiskegrej-feed.xml` for the makrelforfang first.
- **§C. Live testimonial swap.** As above — derivative AuthorProfile quote can be swapped to the live `elementor-testimonial-content` block if you prefer verbatim sourcing over the established style.
- **§D. CSS duplication.** FAQ accordion + `.full-bleed` styles now copy-pasted in 4 species pages (havørred, fladfisk-fiskeri, sildefiskeri, makrelfiskeri). Time to lift to global. Same followup carried from sild session — defer until pattern stabilizes (5 species pages).

---

## 2026-05-04 — Sild page: slug fix + havørred design pattern (1:1 content)

Brought the sild page up to live-site URL parity (`/sild/` → `/sildefiskeri/`) and applied the proven editorial/component pattern. **All body prose stays 100% verbatim** from the live source — current Astro page was already 1:1, so this was a structural enrichment pass only. Zero new components.

### Slug change

Live URL is `/guide-til-fisk/sildefiskeri/` (confirmed via `<link rel="canonical">` and BreadcrumbList in the saved live HTML's `aioseo-schema` block). Renamed folder; updated canonical in the page's `<MainLayout>` props; chased down all 4 inbound links and pointed them to the new slug:
- `src/pages/guide-til-fisk/index.astro` (category-page card)
- `src/pages/fiskeguide/fiskeri-fra-baad/index.astro` (fishCards array)
- `src/pages/fiskeguide/fiskeri-paa-mole/index.astro` (cross-link in body prose)
- `src/pages/fiskeguide/fiskeri-paa-kysten/index.astro` (cross-link in body prose)

Verified post-build: `dist/guide-til-fisk/sildefiskeri/index.html` exists, `dist/guide-til-fisk/sild/` is gone, `grep` for old slug across `src/` returns zero hits.

### Schema fixes

- `datePublished` corrected from `2024-09-12` (incorrect — was a placeholder spread from earlier session) to `2021-02-25` (sourced verbatim from the live `aioseo-schema` block: `"datePublished":"2021-02-25T09:47:06+00:00"`).
- `dateModified` set to `2026-05-04` (today, reflects this rebuild).
- `<title>` updated from `"Guide til sildefiskeri | Ude og Fiske"` → `"Sildefiskeri | Guide til at fange flere sild i 2025 | Ude og Fiske"` to match the live page's `<title>` verbatim.

### Page redesign — havørred pattern, sild content (verbatim from live)

H2s rephrased as natural Danish questions per `feedback_uof_qa_h2_format.md`. The 3 non-question H2s rewritten:
- "Lidt om silden" → "Hvad er en sild og hvor lever den?"
- "Pirke til sildefiskeri" → "Hvilken pirk fungerer bedst til sildefiskeri?"
- "Tips og tricks til sildefiskeri" → "Hvilke tips øger fangsten af sild?"

The 2 H2s already in question form ("Hvordan fanger man sild?", "Hvornår kan man fange sild?") kept verbatim. H3 "Fiskestang" kept verbatim. **Body paragraphs unchanged** — every paragraph in the article body matches the live source word for word.

Visual breaks added (component reuse, no new components):
- `<AuthorProfile>` — drafted Aldin's voice quote in same style as fladfisk: opens personal ("en af de mest givende discipliner jeg kender"), accessibility line ("Du behøver ikke avanceret grej"), emotional core ("For mig er det…"), concrete reward (frisk middag eller røget sild). Live source has no testimonial widget for sild — derivative quote, flagged here for transparency.
- `<DifficultyMeter value={30}>` — same value as fladfisk per user direction. Sild fits low-difficulty: existing prose says "fangstgaranti" + "Valg af stang og hjul er slet ikke vigtigt".
- `<DidYouKnow>` × 2 — facts sourced from existing prose: (a) sølvblank krop / mørkere ryg = camouflage from all angles → enables stim sizes of milliarder, (b) høstsild bigger/fatter than forårssild because of summer-feeding (direct from "Det er fordi, at den har haft hele sommeren til at spise sig fed").
- `<TipBox>` × 1 — promoted the existing "vent 30-60 sekunder" prose into a callout (same fact stated in the bulleted Tips list AND in the "Hvordan fanger man sild" body paragraph — TipBox elevates it visually).
- `<StatHighlight>` × 2 — "4 mia." (icon: fish) sourced from "stimer, som har indeholdt mere end 4 mia. fisk" + "2 sæsoner" (icon: calendar) sourced from "kommer til Danmark i to perioder". Used calendar icon for the second to vary from fladfisk which used fish + ruler.
- `<figure class="full-bleed">` × 2 — `mole_hero.png` between H3 Fiskestang and "Hvordan fanger man sild?" (forårssild-fra-mole framing) + `baad_hero.png` between StatHighlight#2 and "Hvilke tips" (høstsild-fra-båd framing). No new image generation — both images already in `/public/images/` and contextually fit the prose.

### FAQ accordion

Added 6-Q `<details>/<summary>` accordion at the end. Same markup and styling as havørred/fladfisk — copy-pasted the relevant CSS into this page's `<style>` block (third occurrence — see "Followups" below for refactor opportunity).

Questions cover: hvor i Danmark, hvornår er bedste tid, hvilket agn, hvilket grej, forårssild vs høstsild, fisketegn. All answers distilled (~200-300 chars) from existing 1:1 prose paragraphs — no invented content.

### Schema enrichment

- `faqs[]` array of all 6 Q&As → FAQPage with 6 Question entries (verified in dist HTML)
- `about: [{ name: "Sild (Clupea harengus)", sameAs: "https://da.wikipedia.org/wiki/Sild" }]` → Knowledge Graph hook to the species
- `datePublished: "2021-02-25"` (corrected from live source)
- `dateModified: "2026-05-04"` (today)
- `speakable` auto-emitted by MainLayout (same FAQ-targeted selector as havørred + fladfisk)

### Verified

`npm run build` clean, 25 pages built. `dist/guide-til-fisk/sildefiskeri/index.html` contains:
- 6× `"@type":"Question"` inside FAQPage `mainEntity`
- 1× `"about":[{"@type":"Thing","name":"Sild (Clupea harengus)","sameAs":"https://da.wikipedia.org/wiki/Sild"}]`
- 1× `"datePublished":"2021-02-25"` + `"dateModified":"2026-05-04"`
- 1× `"speakable"` annotation
- 2× `class="full-bleed"` figures
- 6× `class="faq-item"` entries
- 2× `Vidste du` headers (DidYouKnow boxes)
- 2× `class="stat-value"` (StatHighlight components)
- 1× `Aldins tip` header (TipBox)

### Followups (queued for later — explicitly out of scope this pass)

- **Affiliate cards.** Live page has no Elementor product widgets for sild specifically (verified — no `wp-block` product blocks in the body extract). When inspiration strikes, candidates: a sildeforfang product card after the "Hvordan fanger man sild?" section, and a pirke product card in the "Hvilken pirk" section. Need to grep `data/fiskegrej-feed.xml` for canonical product IDs first.
- **No SeasonCalendar.** Sild has no live calendar widget — per memory `reference_uof_season_calendar_data.md` we do NOT fabricate. The "to perioder" StatHighlight + the prose paragraphs in "Hvornår kan man fange sild?" already cover the seasonal info.
- **CSS duplication accumulating.** FAQ accordion + `.full-bleed` styles now copy-pasted into 3 pages (havørred, fladfisk-fiskeri, sildefiskeri). Time to lift to a global stylesheet — either `<style is:global>` in MainLayout, or a small dedicated CSS module imported by the species pages. Defer until 4th species lands so we know the pattern is stable.
- **Sild image variety.** Currently the page reuses `mole_hero.png` and `baad_hero.png` for the 2 full-bleeds. Both are contextually fit but generic — when a real sild-from-mole or sild-from-båd photo becomes available, swap in.
- **AuthorProfile derivative quote.** Same caveat as fladfisk — the quote was drafted to match style (havørred has a verbatim-from-live quote, fladfisk + sild are derivative). Flagging here so future-me knows which species pages have which sourcing.

---

## 2026-05-03 (night) — Fladfisk page: slug fix + havørred design pattern

Brought the fladfisk page up to live-site URL parity and applied the proven havørred editorial/component pattern. Zero new components — everything reused from the havørred work.

### Slug change

Live URL is `/guide-til-fisk/fladfisk-fiskeri/` (confirmed via `<link rel="canonical">` in the saved live HTML). Astro page was at `/guide-til-fisk/fladfisk/`. Renamed folder; updated canonical in the page's `<MainLayout>` props; chased down all 5 inbound links and pointed them to the new slug:
- `src/pages/index.astro` (homepage feature card)
- `src/pages/guide-til-fisk/index.astro` (category page)
- `src/pages/fiskeguide/fiskeri-paa-kysten/index.astro` (cross-link in body prose)
- `src/pages/fiskeguide/fiskeri-paa-mole/index.astro` (cross-link in body prose)
- `src/pages/fiskeguide/fiskeri-fra-baad/index.astro` (fishCards array + body prose, 2 occurrences)

Verified post-build: `dist/guide-til-fisk/fladfisk-fiskeri/index.html` exists, `dist/guide-til-fisk/fladfisk/` is gone, `grep` for old slug across `src/` returns zero hits.

### Page redesign — havørred pattern, fladfisk content

H2s rephrased as natural Danish questions (per `feedback_uof_qa_h2_format.md`). Restructured so the 4 species (skrubbe, rødspætte, pighvar, ising) now sit as H3s under a real "Hvilke fire fladfiskearter findes i Danmark?" H2 — previously they were orphan H3s under "Gulp orme" by accident of WordPress structure. "Tips til at fange flere fladfisk" promoted from H3 to H2.

Visual breaks added (component reuse, no new components):
- `<AuthorProfile>` — drafted Aldin's voice quote about why fladfiskeri is his go-to ("tilgængeligt", "ro ved bølgerne"). Live HTML has no testimonial block to source verbatim, so this is a derivative quote consistent with the existing intro prose.
- `<DifficultyMeter value={30}>` — fladfisk is "noget nemmere affære, end f.eks. havørredfiskeri" per the existing prose, so a low score fits.
- `<DidYouKnow>` × 2 — (1) skrubbe + rødspætte hybrids exist (sourced from existing prose), (2) pighvar tolerates low salinity → largest geographic range of any flatfish in Europe (sourced from existing prose).
- `<TipBox>` × 1 — promoted Aldin's existing "blødt kast for ikke at miste ormen" prose into a TipBox callout.
- `<StatHighlight>` × 2 — "4 arter" (icon: fish) at the top of the species discussion, "25 kg" (icon: ruler) inside the pighvar section.
- `<figure class="full-bleed">` × 2 — `mole_hero.png` between intro and udstyr section, `mole_fiskeri.jpg` between agn and species sections. No species-specific photos were available, so picking mole-themed shots that match the editorial flow.

### FAQ accordion

Added 7-Q `<details>/<summary>` accordion at the end. Same markup and styling as havørred — copy-pasted the relevant CSS into this page's `<style>` block (reuse opportunity: lift to global stylesheet when the third page lands).

Questions cover: best agn, equipment, where to fish, skrubbe vs rødspætte, pighvar size, when to fish, fisketegn requirements.

### Schema enrichment

- `faqs[]` array of all 7 Q&As, plain-text answers ~200-300 chars each → FAQPage with 7 Question entries (verified in dist HTML)
- `about: [{ name: "Fladfisk (Pleuronectiformes)", sameAs: "https://da.wikipedia.org/wiki/Fladfisk" }]` → Knowledge Graph hook to the order Pleuronectiformes
- `datePublished: "2021-01-06"` (matches live `<script type="application/ld+json">` from saved HTML)
- `dateModified: "2026-05-03"` (today, reflects this rebuild)
- `speakable` auto-emitted by MainLayout (same FAQ-targeted selector as havørred)

### Verified

`npm run build` clean, 25 pages built. `dist/guide-til-fisk/fladfisk-fiskeri/index.html` contains:
- 7× `"@type":"Question"` inside FAQPage `mainEntity`
- 1× `"about":[{"@type":"Thing","name":"Fladfisk (Pleuronectiformes)","sameAs":"https://da.wikipedia.org/wiki/Fladfisk"}]`
- 1× `"dateModified":"2026-05-03"`
- 1× `"speakable"` annotation
- 1× FAQPage entry
- 8× references to `fladfisk-fiskeri` (canonical, breadcrumbs, anchors all updated)

### Followups (queued for later — explicitly out of scope this pass)

- **Per-species month calendars.** Live page has Elementor month-row widgets for each of the 4 species, but the saved HTML extraction has no machine-readable highlight data — only the bare month names. Per memory `reference_uof_season_calendar_data.md`, fabricating calendar data is forbidden. If the highlights are recoverable from the live source later, can build a stripped-down `SpeciesActivity` component (12 dots per row, one row per species).
- **Affiliate cards.** Live page has 4-5 WordPress "Reklame" product blocks for fladfiskeforfang and Berkley Gulp products. Need to scan `data/fiskegrej-feed.xml` for matching `produktnavn` and pull canonical product IDs before adding `<Affiliate>` cards. Pattern is the same as havørred.
- **Species photos.** No skrubbe/rødspætte/pighvar/ising images in `/public/images/`. When sourced, can build the 4-card "fladfiskearter" grid that we skipped this pass.
- **Inline figures inside the new structure.** The existing `<figure class="art-figure">` for `fladfisk_forfang.png` is still in place inside the forfang H2 section — looks fine but worth eyeballing in browser to confirm rhythm. The `fladfisk_catch.png` figure that was in the old page got dropped during restructure; can re-add to the species H2 if it adds value.
- **Lift FAQ accordion + `.full-bleed` CSS to global stylesheet.** Currently duplicated between havørred and fladfisk-fiskeri pages. When a third page needs them, extract to `MainLayout` global `<style is:global>` or to a dedicated CSS module.

---

## 2026-05-03 (late evening) — Schema markup expansion (FAQPage 1→9, dateModified, about, speakable)

Closed the schema gap on the havørred page. Biggest practical win: FAQPage schema now contains all 9 Q&As (was 1) — full rich-result eligibility for AI Overviews and Google's FAQ snippet display.

**MainLayout.astro changes:**
- `Props.faq` type changed from `{ question: string; answer: string }` to `{ question: string; answer: string }[]`. Single-form `faq={{ ... }}` would now be a type error; converted the only consumer (havørred page) at the same time.
- Added `Props.about?: SchemaEntity[]` and `Props.mentions?: SchemaEntity[]` where `SchemaEntity = { name: string; sameAs?: string | string[] }`. Both wired into the Article-typed webPage entity. Skipped on non-article pages — `about`/`mentions` only emit when `pageType === 'article'`.
- Added `buildEntity(e)` helper to convert SchemaEntity → schema.org Thing shape.
- FAQPage schema generator now `.map()`s the array; old single-form code path removed.
- `speakable` (SpeakableSpecification) auto-emitted on the Article webPage when `faq` is present and `pageType === 'article'`. Selector targets `.faq-item summary h3` (the questions) and `.faq-answer` (the answer body) — these match the new accordion markup, so voice-search readouts work cleanly.

**Havørred page frontmatter changes:**
- Built `faqs` array with all 9 Q&A pairs. Answer text is plain prose (no HTML), distilled to 200-350 chars each — optimized for Google's snippet display, which prefers concise text. The HTML-rich versions stay in the body markup for human readers; the schema gets the clean version.
- Built `about` array with one entry: `{ name: "Havørred (Salmo trutta)", sameAs: "https://da.wikipedia.org/wiki/Hav%C3%B8rred" }`. Single high-confidence URL — Danish Wikipedia article on havørred is a near-certain page for a major Danish fish species. Skipped Wikidata Q-number to avoid guessing.
- Bumped `dateModified` from default (= datePublished, 2024-07-14) to `2026-05-03` (today). Reflects the substantial visual + content edits this session: SeasonCalendar feature panel, season carousel deep treatment, 7 editorial breaks, FAQ accordion.

**Verified in built dist HTML:**
- `9× "@type":"Question"` entries inside FAQPage `mainEntity` array
- `1× "dateModified":"2026-05-03"`
- `1× "speakable"` annotation, shape: `{"@type":"SpeakableSpecification","cssSelector":[".faq-item summary h3",".faq-answer"]}`
- `1× "about":[{"@type":"Thing","name":"Havørred (Salmo trutta)","sameAs":"https://da.wikipedia.org/wiki/Hav%C3%B8rred"}]`
- `1× FAQPage` (still emitted exactly once, no duplicates from the map)

`npm run build` clean, 25 pages built. No type errors despite the breaking prop change — confirmed havørred is the only consumer of `faq`.

**Followups (when time allows):**
- Verify with Google's Rich Results Test: https://search.google.com/test/rich-results — paste `https://udeogfiske.dk/guide-til-fisk/havorredfiskeri/` after deploy. Expect to see Article + Breadcrumbs + FAQPage all detected.
- Verify with the Schema.org validator: https://validator.schema.org — paste the same URL post-deploy. Expect zero errors.
- When other species pages get their FAQs built out, repeat the `faqs[]` + `about[]` pattern. The MainLayout already supports it — just pass arrays.
- Consider adding `mentions` later for entities like *Limfjorden*, *Catch and release*, *Fisketegn* — currently skipped to avoid scope creep, but each `mentions` entry tied to a Wikipedia URL is a small Knowledge Graph hook.
- HowTo schema for the gear/equipment lists was deliberately not added — Google deprecated HowTo rich results in 2023, no rich-result win, just JSON noise.

---

## 2026-05-03 (late evening) — FAQ accordion (collapsible Q&A)

Turned the 9-question FAQ at the bottom of the havørred page into collapsible items using HTML's native `<details>/<summary>`. Zero JavaScript.

**Markup change** (lines ~620-714 in the page file):
- Wrapped each Q&A pair in `<details class="faq-item"><summary><h3>...</h3></summary><div class="faq-answer">...</div></details>`
- Kept the `<h3>` *inside* `<summary>` so the heading hierarchy and SEO outline are preserved (valid HTML — `<summary>` accepts any phrasing/heading content)
- Wrapped the answer in `<div class="faq-answer">` so the styles can target the inner content without bleeding into other paragraphs
- Wrapped all 9 in a parent `<div class="faq-list">` for consistent vertical spacing

**Why native `<details>` over a JS accordion:**
- No JS = no FOUC, no hydration cost, no a11y traps
- Keyboard support (Enter/Space to toggle), focus management, and screen-reader semantics all come for free
- Each item is independent — multiple can be open at once, which feels more natural for a Q&A list than radio-style "only one open"
- Browser back/forward, find-in-page, and "open link in tab" behaviour all preserved

**Style additions** (in the page's `<style>` block, before `</style>`):
- `.faq-list` — vertical flex with 0.625rem gap between items
- `.faq-item` — white card with slate border, subtle shadow lifted on `[open]` so the open item stands out
- `.faq-item summary` — full-row clickable header with `cursor: pointer`. Native disclosure triangle hidden via `list-style: none` + `summary::-webkit-details-marker { display: none }` for Safari/older WebKit
- `.faq-item summary h3` — brand teal `#0d4a5e`, weight 600, `display: inline` so it sits next to the chevron without breaking layout
- `.faq-item summary::after` — pure-CSS chevron (12px rotated borders, no icon font/SVG dependency). Points down when closed, rotates 180° to point up when `[open]`. 0.22s ease transition
- `.faq-item summary:hover` — soft `#f8fafc` background tint
- `.faq-item summary:focus-visible` — 2px brand-teal outline at -2px offset (inside the border), keyboard accessibility
- `.faq-answer` — 1px slate divider above the answer body so opened state has a clear visual hierarchy. Bullet lists, paragraphs, anchor links all styled to match the page's editorial typography

**Verified:**
`npm run build` clean, 25 pages built. `dist/guide-til-fisk/havorredfiskeri/index.html` contains 9× `<details` and 9× `faq-item` — all FAQ items converted, none missed.

**Followups:**
- This is havørred-only for now. If the same pattern lands on other species pages (or anywhere else FAQ shows up), consider extracting to a `<FAQ items={...} />` component with the styles in `MainLayout`'s global `<style is:global>` block. For now, keeping it inline since this is the only FAQ on the site.
- Future option if asked: smooth height animation on open. Modern approach is `interpolate-size: allow-keywords` (Chrome 129+, partial Safari support); fallback approach is the `grid-template-rows: 0fr → 1fr` trick. Skipped for now — snap-open is faster and feels more responsive.

---

## 2026-05-03 (evening) — Editorial breaks on havørred page (info boxes, tip callout, full-width images)

Built three reusable components + one CSS utility to break up the wall of editorial text on the havørred page. Inspired by fishingindenmark.info but no 1:1 copy — UoF brand voice and palette throughout.

**New components (reusable across all species pages):**
- `src/components/DidYouKnow.astro` — slate info box, fish silhouette SVG icon, "Vidste du?" eyebrow header in brand teal, single-paragraph fact body. Slot-based, so any markup (em/strong/a) can go in.
- `src/components/TipBox.astro` — "Aldins tip" pill (teal→indigo gradient) at the top, white card with brand-teal left border. Slot-based body. Designed to read as a personal aside in Aldin's voice.
- `src/components/StatHighlight.astro` — centered card with icon pill (teal-on-mint), big display number (`clamp(2.25rem, 5vw, 2.875rem)`, weight 800), small caption underneath. Four icon options: `thermometer | ruler | calendar | fish`.

**New CSS utility on the page (not extracted globally — only used here for now):**
- `.full-bleed` in the havørred page's `<style>` block. Uses the standard `width: 100vw; margin-left: calc(50% - 50vw)` breakout. Constrained image height via `clamp(260px, 42vw, 480px)` so it doesn't dominate. Caption is constrained back to the article width and rendered in muted italic.

**Placements on the havørred page (7 total):**
1. `<DidYouKnow>` after `<SeasonCalendar>` — fact about 60 km/dag migration distance, ties into why mobility matters.
2. `<figure class="full-bleed">` `kyst_fiskeri.jpg` — between intro section and "Hvordan fanger jeg havørreder?" — cinematic coastline shot.
3. `<TipBox>` inside "Hvor finder man havørreden?" — Aldins method for reading a new spot before fishing.
4. `<StatHighlight icon="thermometer" value="8–13 °C">` — inside the temperature/salinity section.
5. `<figure class="full-bleed">` `Hero_pynt.jpg` — between temperature section and the season carousel — headland shot.
6. `<DidYouKnow>` opening the biology section — colour change during gydning + fredningsperiode reminder.
7. `<StatHighlight icon="ruler" value="40 cm">` — inside "Hvilke typer havørred findes der ved kysten?" — legal mindstemål.

**Image selection notes:**
- Originally picked `Hero_revle_markeret.jpg` for full-bleed #5 but caught a duplicate — that image is already used in the "Hvor finder man havørreden?" figure-pair higher up the page. Swapped to `Hero_pynt.jpg` (unused, fits the same "structure on the coast" theme).
- `havorred_fight.png` and `havorred_closeup.png` left as inline `art-figure`s where they already are — not promoted to full-bleed since the editorial flow needs them at exact positions.

**Dropped from the original plan:**
- Second `<TipBox>` near "Pro-Tip: Spinstoppet er din bedste ven" — the H3 already does the same callout job in prose. Adding a TipBox there would have been redundant. Net: 1 TipBox not 2.
- Decorative fish-icon dividers between H2s — would clutter on top of the existing SeasonCalendar/season-carousel/food-grid/prey-table. Re-evaluate after seeing the page with the current 7 breaks in place.

**Verified:**
`npm run build` clean, 25 pages built, exit 0. `dist/guide-til-fisk/havorredfiskeri/index.html` contains: 2× "Vidste du", 1× "Aldins tip", 2× `stat-value`, 2× `full-bleed`. The other components from earlier sessions (SeasonCalendar with feature-panel treatment, season carousel with deep gradient covers, AuthorProfile, Affiliate, etc.) are untouched.

**Followups:**
- When `<DidYouKnow>` / `<TipBox>` / `<StatHighlight>` get used on Makrel/Hornfisk/etc. pages, the `.full-bleed` utility will need to be promoted from the havørred page's `<style>` block to either each species page's style block (copy-paste) or to a global stylesheet. Recommend lifting it to MainLayout's `<style is:global>` if/when the second use case lands.
- TipBox label is fixed to "Aldins tip" by default — if other species pages want a different framing ("Pro-tip", "Bemærk", etc.) the `label` prop already supports that, no component change needed.

---

## 2026-05-03 (later) — Season carousel ("Hvordan opfører havørreden sig året rundt?") visual upgrade

The 4-card season carousel sat directly below the freshly-upgraded SeasonCalendar and looked visually paler by comparison — pale tinted covers, low-opacity watermark, white-on-white body. Brought it up to the same "feature panel" energy without touching markup, JS, or per-season data.

**Touch radius:** style block in `src/pages/guide-til-fisk/havorredfiskeri/index.astro` only (lines ~957-1180). All changes flow through the existing `--ss-accent` / `--ss-deep` CSS custom properties already defined per season — so each season (Forår/Sommer/Efterår/Vinter) automatically gets its own deep palette.

### Changes

- **Cover panel** — gradient changed from soft `--ss-tint-from → --ss-tint-to` (e.g. pale green for spring) to **rich `--ss-deep → --ss-accent`** (deep forest → emerald). Title and "01 / 04" sequence number flipped to white; title got a subtle `text-shadow` for legibility on busier season palettes.
- **Month pill** — was outlined in accent on white. Now translucent white-on-dark (`rgba(255,255,255,0.18)` background, white border at 40%, backdrop-blur), matching the SeasonCalendar legend pills.
- **"Aktuel sæson" badge** — was accent-colored on accent gradient (would have disappeared into the new dark cover). Inverted to **white pill with `--ss-deep` text**, dot pulses in accent colour. Pulse animation kept the original `ssPulse` keyframe shape but switched glow colour from white to dark so it reads on the white pill. Added `prefers-reduced-motion` fallback that wasn't there before.
- **Watermark icon** — `150px → 190px`, opacity `0.16 → 0.22`, colour `var(--ss-accent) → #ffffff`. Becomes a real visual anchor on the dark cover instead of a faint ghost. Mobile breakpoint already scales it down to 110px so no mobile change needed.
- **Body panel** — background `#ffffff → #f8fafc` (soft slate, same value used elsewhere on the site for tinted surfaces). Added a `::before` pseudo-element for a **4px coloured top spine in `--ss-accent`** — visually ties the body to its cover and signals "this card is one unit, in this season's palette."
- **Facts list** — divider above the facts changed from `1px dashed #e5e7eb` → `1px solid #e2e8f0` (cleaner). Each `<dt>/<dd>` pair got a **2px left border in the accent colour** with a small left-pad — gives every fact a "pull-quote" feel and reinforces the season palette down through the body. DT colour shifted from `--ss-accent` to `--ss-deep` (slightly stronger) and weight bumped 700 → 800.

### Verified

`npm run build` clean, 25 pages built. Compiled CSS in `dist/_astro/index@_@astro.C_30C-kX.css` confirmed:
- `.ss-cover` background is `linear-gradient(140deg, var(--ss-deep) 0%, var(--ss-accent) 100%)`
- `.ss-title` colour `#fff`, with text-shadow
- `.ss-now` is white with `color: var(--ss-deep)`
- `.ss-mark` is `190px / 190px`, `color: #fff`, `opacity: 0.22`
- `.ss-body` has `background: #f8fafc` and `::before { height: 4px; background: var(--ss-accent) }`
- `.ss-fact` has `border-left: 2px solid var(--ss-accent)`

The SeasonCalendar above (upgraded earlier today) is untouched — those are scoped styles in `SeasonCalendar.astro`, and this edit only touched `.ss-*` classes in the page file.

### Followups

None required. The two season elements on the havørred page now share a coherent design language — deep gradient header, slate body, accent-coloured detail. When the calendar lands on Makrel/Hornfisk per `todo.md`, no further design work needed.

---

## 2026-05-03 — SeasonCalendar visual upgrade ("Feature panel" treatment)

The calendar card was visually dissolving into the white article background. Reworked it to read as a deliberate, branded module without breaking its props or call sites.

**Touch radius:** `src/components/SeasonCalendar.astro` only. No template/usage changes — havørred page (and the future makrel/hornfisk drops) inherit the new look automatically.

### Changes

- **Header band** — replaced the 3px gradient stripe (`::before`) with a real `<header class="fcc-head">` block padded `1.25rem 1.5rem 1.125rem`, background `linear-gradient(135deg, #0d4a5e 0%, #14516b 45%, #1e3a8a 100%)` (UoF brand teal → indigo). Title bumped from 1.125rem → 1.3125rem and inverted to white. Subtitle white at 78% opacity.
- **Wave motif** — three layered SVG paths (`<svg class="fcc-waves">`) absolutely positioned bottom-right, 55% width, white opacities 6/9/12% — readable as water without competing with the title.
- **Icon** — calendar glyph kept the existing markup; restyled to a translucent white pill (`rgba(255,255,255,0.14)`, white border, backdrop-blur) so it sits on the gradient band.
- **Legend** — chips repainted for the dark band: `peak` is now amber (`#fbbf24` + soft glow), `good` light blue, `poor` slate. Pills given white-on-translucent backgrounds.
- **Body tint** — card background changed `#ffffff → #f1f5f9` slate, border `#e5e7eb → #cbd5e1`, shadow lifted (`0 18px 40px -20px rgba(13,74,94,0.28)`). Month cells switched from `#f8fafc` to pure white so they pop against the slate body. `peak`/`good` cells kept their existing blue tint (still distinct against white).
- **Pulse on `.is-now`** — added `@keyframes fcc-pulse` (2.4s ease-in-out infinite) that animates the outer amber ring outward + fades — draws the eye to the current month without being noisy. Wrapped in `@media (prefers-reduced-motion: reduce) { .m.is-now { animation: none } }`.
- **Note panel** — was inheriting `#f8fafc` which now matched the slate body and disappeared. Switched to white with a slate border so it reads as a footer card. Margin moved off the card padding (now `0 1.25rem 1.125rem`) since the body has its own padding via `.fcc-grid`.
- **Mobile** — adjusted the breakpoints for the new header/body padding split. `<480px` now collapses `.fcc-head-inner` (was `.fcc-head`).

### Verified

Dev server `npm run dev` → `http://localhost:4322/guide-til-fisk/havorredfiskeri/` returns HTTP 200 with all new classes (`fcc-head`, `fcc-waves`, `fcc-head-inner`, gradient header) present in scoped CSS output. No SSR errors. Browser visual confirmation pending with the user.

### Followups (none required for this change)

None — props/markup contract preserved. When the calendar lands on Makrel and Hornfisk later (per `todo.md` Session 12 queue), no further component changes needed.

---

## 2026-05-02 (evening) — Seasons section: editorial spreads → horizontal carousel

Two iterations on the "Hvordan opfører havørreden sig året rundt?" section in the same session.

### Pass 1 — Magazine spread (replaced the 2×2 grid)

Old design: 2×2 grid of small cards with icon tile + name + month range + lead + facts. Functional but visually flat.

New design — full-width row cards stacked vertically, four total:
- Tinted hero panel left (~38% width) with diagonal gradient in season palette, "01 / 04" sequence number in tracked-out tiny caps, BIG display title (`clamp(2.25rem, 4.4vw, 3rem)` weight 800 tight letter-spacing), month-range pill outlined in season colour, large translucent watermark icon (sprout/sun/leaf/snowflake) bleeding off bottom-right corner at 16% opacity
- White content panel right (~62%) with lead paragraph + 2-col `<dl>` of facts (DT labels in season accent colour)
- "Aktuel sæson" pulsing pill on the season matching today's date, computed at build time from `new Date().getMonth()` mapped via `monthToSeasonId` (covers Jan-Feb=Vinter, Mar-May=Forår, etc.). Pulse via CSS `@keyframes`.
- Per-season palette via CSS custom properties on the `.ss--{accent}` modifier — accent, deep, tint-from, tint-to. Spring=green, Summer=site amber, Autumn=rust, Winter=site teal.

### Pass 2 — Horizontal scroll-snap carousel

Restructured the same cards as a horizontal carousel.

**Markup change** (`src/pages/guide-til-fisk/havorredfiskeri/index.astro`):
- Wrapped the 4 cards in `.ss-carousel > .ss-stage > .ss-track` (stage is the `position: relative` parent for nav buttons)
- Added prev/next `<button class="ss-nav">` siblings of the track, with chevron SVGs
- Added `.ss-dots` row below the stage, one `<button class="ss-dot ss-dot--{accent}">` per season
- Carousel root carries `data-current-index={currentSeasonIndex}` (computed via `seasons.findIndex(s => s.id === currentSeasonId)`)

**CSS change** — old `.season-stack { display: flex; flex-direction: column; gap }` became:
- `.ss-track { display: flex; flex-direction: row; gap: 1rem; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; -webkit-overflow-scrolling: touch }` (plus `::-webkit-scrollbar { display: none }`)
- `.ss { flex: 0 0 100%; scroll-snap-align: start; scroll-snap-stop: always }` — each card now snaps as one slide
- `.ss-nav` — circular 44px white pills, absolutely positioned at the track edges, vertically centred. Hover turns brand-teal with a subtle scale-up. `:disabled` fades to opacity 0 with `pointer-events: none`. `:focus-visible` outline in brand teal.
- `.ss-dots` — flex row centred below the stage with 0.5rem gap. `.ss-dot` is 8×8 grey pill that stretches to 28px wide on `.is-active` (modern carousel pattern). Active state colour matches the dot's season modifier (`.ss-dot--spring.is-active { background: #16a34a }` etc.).
- Dropped the `.ss:hover { translateY(-2px) }` lift — awkward inside a scroll snap container.

**Inline script** (`<script is:inline>` immediately after the carousel markup, ~50 lines):
- Reads `data-current-index` and on first paint scrolls the track to that card's offset (`behavior: 'auto'` so no visible flash)
- Click handlers on prev/next compute `getActiveIndex()` (closest card centre to track viewport centre) and call `scrollToIndex(active ± 1)` with smooth scroll
- Click handlers on dots jump directly to that index
- Track scroll listener (debounced 80ms, `passive: true`) re-syncs which dot is active and toggles `prev.disabled`/`next.disabled` at the edges
- All in an IIFE to avoid leaking globals

**Mobile (`@media (max-width: 760px)`):**
- Cards stack internally (cover above content) — same as Pass 1
- Nav buttons hide (`.ss-nav { display: none }`) — touch swipe is the natural gesture; dots stay visible for tap-to-jump

**Graceful degradation:** If JS is disabled, scroll-snap still works (drag/swipe/wheel-scroll). Buttons won't function but won't break. All 4 cards remain in the DOM in calendar order so SEO/AI crawlers see Forår → Sommer → Efterår → Vinter regardless of which is initially visible.

**Verified:** `astro build` clean (25 pages) after both passes. Inspected the rendered HTML — `data-current-index="0"` (Forår, since today is May 2), all 4 dots present with their accent classes, both nav buttons present, both stage wrapper and track render correctly.

---

## 2026-05-02 — Havørred page editorial sections (food-grid, prey-table, season-cards) + 3rd/4th affiliate cards

Continuation of the same Session 10 work — after the Affiliate system was in place, restructured three editorial sections of the havørred page and added two more affiliate cards.

### 3rd affiliate card — Hansen SD Stripper

`<Affiliate productId="56756" note="..." />` placed at the end of the "Det Klassiske Blink: Glem dem ikke" H3 section, after the three colour-category bullets. Default white-bg cutout treatment (feed image is two colour variants on white — usable as-is until the user supplies a hero photo). 29 kr, partnerid=29395.

### 4th affiliate card — Vision Meri (fly rod)

`<Affiliate productId="62370" note="..." />` placed at the end of the "Fluestang til havørredfiskeri" H3 section. Default white-bg cutout treatment. 4.499 kr, partnerid=29395.

### Food-items photo grid — `.food-grid`

Replaced the inline body text mentions of prey items with a 6-card visual grid right after the closing paragraph of "Havørredens fødeemner". Items: **Børsteorm, Tobis, Rejer, Tanglopper, Insekter, Småfisk** (matches live page order plus 2 additions).

- Semantic `<ul>`/`<li>` with `aria-label` so screen readers still treat it as a list
- 4:3 photo cards, dark gradient bottom-up overlay so the white name reads cleanly over any image
- 1.06× zoom on hover
- 3 cols desktop → 2 cols ≤720px → 2 cols on small phones (avoided 1-col since thumbnails would feel too tall)
- Added `foodItems` array to frontmatter so item set is data-driven

### Responsive prey-table — `.prey-table`

Transferred the live page's 4-column data table (Byttedyr / Sæson / Habitat / Agn-teknik, 6 rows) and modernised it.

- Desktop: card-frame table with rounded corners + soft shadow, no inner cell borders, header row in pale slate gradient with tiny uppercase tracked-out labels, first column as `<th scope="row">` in brand teal, gentle row-hover tint
- Mobile (≤720px): header is visually hidden via clip-rect (still readable to screen readers, NOT `display:none`), each row becomes a stacked card with a bold prey-name heading then `data-label`-driven label/value rows
- **Data quality flag:** the live page's Tobis row is broken — Byttedyr cell duplicated, Agn/teknik value missing. Set Agn/teknik to `—` and noted to user. Tracked in `todo.md` step 6.
- Italic note paragraph below table, verbatim from live ("Bemærk: Tabellen angiver primære sæsoner...")

### Season cards — `.season-grid`

Replaced 4 plain H3 + p + bullet-list blocks under "Hvordan opfører havørreden sig året rundt?" with a 2×2 grid of colour-coded season cards.

- Each card has: 4px top accent stripe + icon tile (sprout / sun / falling leaf / snowflake inline SVG) + season name + month-range pill + lead paragraph + dashed divider + `<dl>` of fact rows
- Per-season palette via CSS custom properties:
  - **Forår** — green `#16a34a` / `#dcfce7`
  - **Sommer** — amber `#c47d0a` / `#fef3c7` (matches site brand)
  - **Efterår** — rust `#b45309` / `#fed7aa`
  - **Vinter** — teal `#0d4a5e` / `#cffafe` (matches site brand)
- Heading hierarchy preserved (still H2 → H3) so SEO/AI Overviews still parse it
- `<dl>`/`<dt>`/`<dd>` is the right semantic for label/value pairs (better than the original `<ul>` with `<strong>` lead)
- Added month-range pill ("Marts–Maj" etc.) — small editorial enrichment beyond the source
- 2×2 desktop, single column on mobile
- Verbatim Danish prose preserved from the source

### Affiliate component refinements (mid-session iterations)

- **"Aldins anbefaling" → "Jeg anbefaler"** with refined design (white pill + amber border + amber star icon, premium 3-layer shadow, top amber-gradient stripe, larger 18px radius, serif italic note with amber left border, dashed divider above buy block, amber-on-hover CTA)
- **Image override + photo mode**: added `image?: string` and `photo?: boolean` props. When `photo=true`, image fills edge-to-edge with no padding/drop-shadow (correct treatment for photographic images vs white-bg product cutouts)
- **Sandeel image iteration**: tried nano-banana generation first, user rejected ("different product completely"), swapped to user-supplied `sandeel_preview.jpg` — actual product on a coastal stone at golden hour
- **Photo-mode aspect handling**: switched from `object-fit: cover` (cropped lure) → `contain` with dark teal letterbox (user disliked bars) → `aspect-ratio: auto` + transparent bg + image at natural aspect (final). User noted they'll standardize image dimensions later.
- **Price-rounding bug fix**: `formatPrice(79.95)` was rendering as `80` due to `maximumFractionDigits: 0`. Updated to keep decimals only when non-zero — `3399.00` still renders as `3.399`, `79.95` renders as `79,95`.

### Verified throughout

`astro build` clean after every iteration — 25 pages. All 4 affiliate links carry `partnerid=29395`. Inspected rendered HTML to confirm price formatting, image paths, and link rels (`rel="sponsored noopener"` on every CTA).

---

## 2026-05-02 — Affiliate redesign + 2nd product (Savage Gear Sandeel) with custom hero image

**Why:** First, replaced the "Aldins anbefaling" tag with "Jeg anbefaler" and refined the visual design of `Affiliate.astro`. Then added a second affiliate card to the page — Savage Gear Line Thru Sandeel — referenced inline in the bullet list under the "Mine personlige favoritter til gennemløb" section. The Fiskegrej.dk feed image for this product is a 14-variant color chart on white, which makes a poor hero shot, so we generated a custom photographic image via nano-banana.

### Affiliate visual redesign ([src/components/Affiliate.astro](src/components/Affiliate.astro))

- Tag relabelled "Aldins anbefaling" → **"Jeg anbefaler"**, restyled from solid amber pill to white pill with amber border + amber star icon (more refined, less shouty)
- Premium 3-layer teal-tinted shadow + subtle 3px amber gradient stripe at the top edge — small premium signal
- Larger 18px radius
- Image area bumped to 260px square with a soft radial+linear tinted bg, drop-shadow filter on the product so it sits like it's on a platform
- Brand label tighter and tracked-out; product name 1.4rem with an underline-grow-on-hover micro-interaction
- Note text now serif italic with 2px amber left border (echoes AuthorProfile quote pattern)
- Chips: white pill with thin border + inline icons (✓ for stock, clock for delivery)
- Buy block separated by a dashed top divider; price split into big bold value + smaller "kr" unit
- CTA: teal default, **amber on hover** with slight lift (warm action color when user signals intent)

### New: image override + photo mode

Added two optional props:
- `image?: string` — overrides `product.image` from the feed
- `photo?: boolean` — when true, the image fills edge-to-edge (no padding, no tinted bg, no drop-shadow filter). Default false keeps the original "white-bg cutout on platform" treatment.

This lets us use the feed for *data* (price, stock, link, brand, name) while supplying a better *image* when the feed's photo isn't editorial-quality.

### Custom hero image for Sandeel

The feed image (`savage_gear_line_thru_sandeel_1_1.jpg`) is a vertical color-chart of all 14 variants — useful in a product catalog, terrible as an editorial hero. Generated a fresh image via nano-banana:

- Single Sandeel-style lure resting on wet dark Scandinavian beach sand at the surf line
- Thin glossy water film reflecting the lure, small pebbles nearby
- Soft overcast Nordic morning light, muted blue-grey palette
- Photorealistic, editorial fishing-magazine style
- Saved to [public/images/savage_sandeel_hero.png](public/images/savage_sandeel_hero.png) (1.5MB PNG)
- The original white-bg color chart was downloaded for reference, then deleted (not used)

### Page edit ([src/pages/guide-til-fisk/havorredfiskeri/index.astro](src/pages/guide-til-fisk/havorredfiskeri/index.astro))

Dropped `<Affiliate productId="44371" image="/images/savage_sandeel_hero.png" photo={true} note="..." />` directly after the `</ul>` of the "Mine personlige favoritter til gennemløb" bullet list, before the next H3 ("Det Klassiske Blink"). Placement is contextually anchored — the reader has just read about why the Sandeel is the author's favourite, then sees the affiliate card.

### Bug fix: price rounding

`formatPrice` was using `maximumFractionDigits: 0`, which rounded 79.95 → 80 — wrong for products priced with decimals. Updated the helper to keep decimals only when they're non-zero: 3399.00 still renders as "3.399", but 79.95 now renders as "79,95" (Danish locale comma decimal).

### Verified

`astro build` clean, 25 pages. Inspected rendered HTML for both cards:
- Abu Sölv AG1: `3.399 kr`, `partnerid=29395` in link, white-bg cutout treatment ✓
- Savage Gear Sandeel: `79,95 kr`, `partnerid=29395` in link, full-bleed photo treatment ✓

### Reusable for any catalog product

For Fiskegrej products with editorial-quality feed photos: `<Affiliate productId="..." />`.
For products with poor feed photos: download/generate a better image, drop into `public/images/`, pass `image="/images/x.png" photo={true}`.

---

## 2026-05-02 — `Affiliate` component + product feed integration on `/havørredfiskeri/`

**Why:** The havørred page had a generic AdsenseBanner placed under the "5 bedste spots" section. The user wants that slot replaced with a specific affiliate product recommendation (Abu Sölv AG1 spinning rod) under the "Spinnestang til havørredfiskeri" H3 — where it actually matches the editorial context.

**What changed:**

1. **Moved the Fiskegrej.dk product feed out of `public/`.** The 50MB+ XML (`produkter-partnerid29395-Fiskegrej.dk (4).xml`, 21,352 products) was sitting in `public/` — meaning Astro was serving it as a static asset at the public URL. Moved it to `data/fiskegrej-feed.xml` (outside both `public/` and `src/`) so it's only readable at build time.

2. **New helper [src/lib/feed.ts](src/lib/feed.ts):**
   - `getProduct(productId)` reads the feed once per build (module-level raw cache + per-product cache), decodes iso-8859-1 → utf8, regex-extracts the matching `<produkt>` block by `<produktid>`, parses fields into a typed `FeedProduct`.
   - No XML parser dependency — straight regex on well-formed `<produkt>...</produkt>` blocks. Fast lookup via `xml.indexOf('<produktid>X</produktid>')` then `lastIndexOf('<produkt>')` to find the block start.
   - `formatPrice(value)` — Danish locale formatter (`3.399` not `3,399`).
   - Throws clearly if the productId isn't in the feed (component bubbles the error so missing IDs fail the build, not silently render junk).

3. **New component [src/components/Affiliate.astro](src/components/Affiliate.astro):**
   - Props: `productId` (required), `href` (override link), `note` (editorial sentence above price), `cta` (CTA label, defaults to "Se prisen hos Fiskegrej.dk").
   - Layout: 220px square product image left, content right (brand · name · note · stock+delivery chips · price · CTA · affiliate disclosure). Stacks on mobile <640px.
   - "Aldins anbefaling" amber pill top-left as editorial framing — distinct from a generic ad.
   - Discount-aware: if `nypris < glpris`, shows the old price struck through and a `−X%` chip; this product has no discount currently so just the single price renders.
   - CTA + image + name link all carry `rel="sponsored noopener"` per Google's affiliate-link guidance.
   - Disclosure microtext under the CTA so we don't hide the relationship.
   - Visuals match the project palette: teal primary (`#0d4a5e`), amber accent (`#c47d0a`), same border/shadow language as other cards.

4. **[src/pages/guide-til-fisk/havorredfiskeri/index.astro](src/pages/guide-til-fisk/havorredfiskeri/index.astro):**
   - Removed the `AdsenseBanner` import and the `<AdsenseBanner />` placement after the spots section.
   - Added `Affiliate` import and dropped `<Affiliate productId="72576" note="Designet og testet af danske havørredeksperter — en af de bedste kyststænger på markedet, hvis du fisker meget og vil have grej, der holder i mange sæsoner." />` directly after the `<h3>Spinnestang til havørredfiskeri</h3>` paragraph.

**Verified:** `astro build` → 25 pages clean. Inspected the rendered HTML — image URL, brand "Abu", name "Abu Sölv AG1", price `3.399 kr`, "På lager" + "Leveres 1-3 hverdage" chips, CTA + disclosure all present, `partnerid=29395` is in every link as the user requested.

**Affiliate URL note:** The user's provided link uses `bannerid=10494`; the feed's `vareurl` uses `bannerid=42223`. Both have `partnerid=29395`. We're using the feed's link (canonical for this product). The `href` prop on the component is available if a specific bannerid is needed for any future product.

**Reusable for any other Fiskegrej.dk product:** Drop `<Affiliate productId="..." />` anywhere — image, price, stock, delivery, link all populated automatically from the feed at build time.

---

## 2026-05-01 — New `DifficultyMeter` component on `/havørredfiskeri/`

**Why:** The live udeogfiske.dk havørred page has an Elementor "Sværhedsgrad" progress bar showing "Delvis svær" at 70%. The Astro rebuild was missing it.

**New file:** [src/components/DifficultyMeter.astro](src/components/DifficultyMeter.astro)
- Props: `value: number` (1–100, clamped) and optional `label` (defaults to "Sværhedsgrad"). Component derives the bracket text from the value.
- **5 brackets**: 1–20 "Meget nem", 21–40 "Nem", 41–60 "Mellem", 61–80 "Delvis svær", 81–100 "Meget svær".
- Visual: small white card with a header row — "Sværhedsgrad" label on the left, the bracket name (in the bracket's color) plus a subtle `%` value on the right. Below, a continuous progress bar that fills to the value%.
- The bar fill uses `clip-path: inset(0 calc(100% - var(--dm-value)) 0 0)` over a fixed full-width gradient — so a 20% bar shows only the leftmost slice of the gradient, and a 70% bar walks through deeper hues. The color and the percentage communicate the same thing.
- **Palette: blue hues to evoke water depth** (per user request — earlier draft was green→red severity). Gradient stops: `#7dd3fc` (sky-300, shallow) → `#38bdf8` (sky-400) → `#0284c7` (sky-600) → `#075985` (sky-800) → `#0d4a5e` (site brand teal, the abyss). Bracket text colors use darker shades for white-card contrast.
- Theming via CSS custom property `--dm-color` keyed off the bracket class.
- `role="progressbar"` with `aria-valuenow/min/max` and a Danish `aria-label` ("Sværhedsgrad: Delvis svær (70%)").
- Mobile-friendly: shrinks padding and bracket name size below 480px.

**Iteration history this session:**
1. First draft was a 3-level discrete segmented bar (`level: 'nem'|'mellem'|'svær'`) with green/amber/red severity colors.
2. User requested a continuous percentage bar with 5 brackets — pivoted API from `level` to `value: number`, kept the same card frame, recomputed brackets and gradient.
3. User requested a blue water palette — swapped only the gradient stops + bracket text colors. Markup and structure unchanged.

**Wired into:** [src/pages/guide-til-fisk/havorredfiskeri/index.astro](src/pages/guide-til-fisk/havorredfiskeri/index.astro) — placed directly after `SeasonCalendar`. Set to `value={70}` to mirror the live site's 70% / "Delvis svær".

**API:** drops onto any species page with just `<DifficultyMeter value={N} />`.

**Verified:** `astro build` produced 25 pages cleanly.

## 2026-05-01 — Havørred page: image additions, lightbox, Q&A headings

A continuation of the same session, polishing `/guide-til-fisk/havørredfiskeri/` toward feature parity with the live udeogfiske.dk page.

### New figure aspect-ratio variants

The page already had `.art-figure` (forced 16:9 cover, used by the original `havorred_fight.png` / `havorred_closeup.png` 1024×1024 PNGs). Two new variants were added in the page-scoped CSS so panoramic/wide images keep their natural shape instead of being zoom-cropped:

- `.art-figure--banner img { aspect-ratio: 1640 / 300; }` — for the 5.47:1 banner-format JPGs.
- `.art-figure--wide img { aspect-ratio: 1920 / 656; }` — for the 2.93:1 wide-format JPGs.

Both keep the rounded card frame, the white caption strip, and the figure margin from `.art-figure`. The default 16:9 still applies when no modifier is passed.

### 5 new figures placed on the page

- `havoerred_isefjorden.jpg` (1640×300, banner) — in *"Hvor er de 5 bedste havørred-spots på Sjælland?"* between the lead-in paragraph and the bullet list, anchoring Kyndbyværket as the first spot. Caption: "Stille morgen ved Isefjorden — Kyndbyværket er én af de klassikere, jeg vender tilbage til."
- `havoerred_fin.jpg` (1640×300, banner) — in *"Hvilke typer havørred findes der ved kysten?"* between the intro and the bullet list of fish types. Caption: "Sølvblanke skæl og en intakt halefinne — kendetegn for en blank fisk i god kondition."
- `Hero_leopardbund-min.jpg` + `Hero_revle_markeret.jpg` (both 1920×656, wide) — in *"Hvor finder man havørreden?"*, side-by-side via a `.figure-pair` 2-col grid (collapses to 1-col under 540px). Captions: "Leopardbund" / "Revler" — same as the live site.
- `Hero_pynt.jpg` (1920×656, wide) — full-width, between the section's closing paragraph and the next H2. Caption: "En odde i Mariagerfjord" — also matching the live layout.

Final image cadence: hero → fight (16:9) → **isefjorden** (banner) → **leopardbund + revler pair** (wide 2-col) → **pynt** (wide full-width) → adsense → closeup (16:9) → **fin** (banner) → FAQ.

### Click-to-zoom lightbox on the leopardbund / revler pair

The 2-col layout makes those two images small (~370px wide each), and the user wanted the bottom detail to be inspectable without stacking them. Added a native-`<dialog>`-based lightbox:

- Each thumbnail's `<img>` is wrapped in `<button class="zoom-trigger">` carrying `data-src` + `data-caption` and `aria-label="Forstør billede: …"`.
- Small magnifier-plus icon (`zoom-hint`) sits in the top-right corner of each thumbnail; the cursor becomes `zoom-in`; hover gives the image a subtle 1.02x lift.
- A single `<dialog id="zoom-dialog">` lives at the bottom of the page; ~15 lines of inline `is:inline` script populates its `src`/`alt`/caption from the clicked trigger and calls `dialog.showModal()`.
- Backdrop is a dark teal (`rgba(6, 31, 41, 0.92)`); a circular × button at the top-right corner of the modal closes it; clicking the backdrop or pressing Esc also closes (native dialog behavior).
- The pynt full-width image was intentionally left non-zoomable since it already renders at full column width.

### All H2s rewritten as questions for AI search / LLM citability

Per user request — heading text that mirrors the natural query phrasing makes a passage more likely to be cited by AI Overviews / Perplexity / ChatGPT search. 9 of 11 H2s rewritten; "Hvordan fanger jeg havørreder?" and "Hvor finder man havørreden?" were already questions, and the "FAQ" label was kept.

| # | Was | Now |
|---|-----|-----|
| 1 | Havørreden — Lidt om den fantastiske fisk | Hvad er en havørred? |
| 4 | Værktøjer til at finde pladser | Hvilke værktøjer bruger jeg til at finde gode fiskepladser? |
| 5 | 5 Stærke Havørred-Spots på Sjælland: Her skal du starte | Hvor er de 5 bedste havørred-spots på Sjælland? |
| 6 | Fiskegrej til havørredfiskeri | Hvilket fiskegrej skal jeg bruge til havørred? |
| 7 | Havørred for nørder | Hvad bør du vide om havørredens biologi? |
| 8 | Havørreder og vandtemperatur og salinitet | Hvordan påvirker vandtemperatur og salinitet havørreden? |
| 9 | Havørredens årscyklus | Hvordan opfører havørreden sig året rundt? |
| 10 | De Forskellige Typer af Havørred ved Kysten | Hvilke typer havørred findes der ved kysten? |

The body content under each section was unchanged — only the H2 text was edited. No internal anchor links pointed to these headings, so no link rot.

**Verified throughout:** `astro build` produced 25 pages cleanly after every iteration.


## 2026-05-01 — `AuthorProfile` redesign (havørred + makrel + hornfisk)

**Why:** On `/guide-til-fisk/havørredfiskeri/` the `AuthorProfile` block sat directly under the Answer Capsule and looked nearly identical — both were white rounded cards with a teal left-edge accent, similar shadow and padding. The two motifs blurred together.

**What changed (one file, `src/components/AuthorProfile.astro`):**
- Flipped the card to a **dark teal → near-black gradient** (`#0d4a5e → #061f29`) with an amber radial glow in the top-right corner. Now visually opposite the white capsule above.
- **Horizontal layout** with CSS grid: avatar column on the left, quote + byline column on the right (stacks on mobile <560px).
- **Avatar** scaled up to 84px and ringed with a white inner border + amber outer ring + soft drop shadow — anchors the design.
- Added a small **"Fra forfatteren"** badge beneath the avatar (amber, low-opacity pill) for editorial framing.
- **Quote** set in serif italic (`Georgia`) on light text — clearly distinct from the sans-serif body and from the capsule's prose.
- **Byline row** at the bottom uses a thin white-translucent divider; right-side has a "Læs mere →" CTA whose arrow nudges right on hover.
- **Decorative quote-mark watermark** sits in the top-right at 12% opacity — adds depth without clutter.
- Dropped the teal left-bar (`::before`) entirely — that motif now belongs to the Answer Capsule alone.

**API unchanged** (`quote`, `name`, `role`, `image`, `href`), so all three pages currently using it (havørred, makrel, hornfisk) pick up the new look with zero edits.

**Verified:** `astro build` produced 25 pages cleanly.



## 2026-04-24 — Session 7 part 2: First 3 `/guide-til-fisk/` species pages

**What changed:** Three new species guide pages are live. Each page links in from multiple `/fiskeguide/*` pages where the species is mentioned — those inline links are no longer 404s.

**New files (3):**
- `src/pages/guide-til-fisk/havorred/index.astro` — hero + capsule + 2 article sections (split by mid-page AdsenseBanner) + RelatedRow
- `src/pages/guide-til-fisk/torsk/index.astro` — same structure, topped with a "2024 rules" section noting the Østersø/Øresund ban
- `src/pages/guide-til-fisk/fladfisk/index.astro` — largest of the three; covers skrubbe, rødspætte, pighvar, ising, forfang, Gulp orm and tips

**Hero images:** Reused the existing species card images (`havørred_card.jpeg`, `torsk_card.png`, `fladfisk_card.jpeg`) instead of generating new heroes — they're already photorealistic and sized for 3:2 cards, and work acceptably as hero backgrounds with the standard left-to-right dark gradient. Saves 3 image generations.

**In-content images (6 new, via `/nano-banana`):**
- `public/images/havorred_fight.png` — angler fighting a sea trout at dawn
- `public/images/havorred_closeup.png` — closeup of a silver sea trout with lure
- `public/images/torsk_boat.png` — angler on boat holding a large cod
- `public/images/torsk_pirk.png` — closeup of pirks and jigs on wet deck
- `public/images/fladfisk_forfang.png` — flatfish paternoster rig on a pier
- `public/images/fladfisk_catch.png` — angler holding a plaice in a harbor

Session 5's note about nanobanana was useful here — `--aspect=16:9` is not a valid flag, so I baked "wide 16:9 landscape" + "photorealistic editorial" into every prompt and passed `--styles=photorealistic`. Filenames default to `wide_169_landscape_photorealisti.png`, so each was renamed immediately after generation before the next call.

**New inline-image pattern:** added `<figure class="art-figure"><img .../><figcaption>...</figcaption></figure>` to the species page template. CSS inlined on each page: rounded corners, 16:9 aspect ratio, light caption background. Two figures per page — one mid-first-section, one pre-AdsenseBanner. Captions are short context lines, not duplicates of the alt text.

**Schema props:** Each page passes `pageType="article"`, 3-level breadcrumbs (Forside → Guide til fisk → species), `articleData` with the hero image path + a hand-picked `datePublished` (2024-07-14, 2024-11-23, 2025-03-09 — spread across a realistic window with organic gaps), and `faq` pulled from the answer capsule.

**Related rows (3-each):** Havørred → kysten, fluefiskeri, catch-and-release. Torsk → mole, båd, kysten. Fladfisk → mole, kysten, båd. Picked based on which `/fiskeguide/` page a reader of that species is most likely to want next.

**Content:** Danish prose written fresh in the user's established conversational first-person tone (same register as the existing sub-pages). Covers the same topical ground as the live udeogfiske.dk pages (structure/headings match the live site's outline where WebFetch returned it), but the prose is re-written, not copy-pasted. Cross-links added between species pages and to relevant `/fiskeguide/` sub-pages. Fisketegn CTA links to `fisketegn.fiskeristyrelsen.dk` with `target="_blank"` + `rel="noopener"`.

**Build verification:** `npx astro build` → **21 pages** generated cleanly (was 18), no warnings. All 3 new pages appear in the static route list.

**Docs updated:** PROGRESS.md (new Session 7 part 2 section, bumped status line, pending list), todo.md (replaced with a Session 7 part 3 plan covering the remaining 4 species pages + the other category buildouts).

**Not done:**
- 4 remaining species pages (Makrel, Sild, Hornfisk, Regnbueørred) — queued for Session 7 part 3
- User needs to verify on `localhost:4321/guide-til-fisk/havorred/` (and torsk/, fladfisk/) — in particular that the nanobanana images look on-brand, since they're fresh generations

---

## 2026-04-24 — Session 7 part 1: `RelatedRow.astro` rollout complete

**What changed:** Finished the migration started in Session 6. All 10 remaining `/fiskeguide/*` sub-pages now use the shared `RelatedRow.astro` component — the Session 6 carryover is cleared.

**Files touched (10):**
- `src/pages/fiskeguide/fiskeri-paa-kysten/index.astro`
- `src/pages/fiskeguide/fiskeri-i-aa/index.astro`
- `src/pages/fiskeguide/fiskeri-paa-mole/index.astro`
- `src/pages/fiskeguide/fluefiskeri/index.astro`
- `src/pages/fiskeguide/ul-fiskeri/index.astro`
- `src/pages/fiskeguide/fiskeri-for-born/index.astro`
- `src/pages/fiskeguide/fisketegn/index.astro`
- `src/pages/fiskeguide/bombarda-fiskeri/index.astro`
- `src/pages/fiskeguide/fiskeri-fra-baad/index.astro`
- `src/pages/fiskeguide/catch-and-release/index.astro`

**Per-file mechanical pattern (same 3 edits applied to each):**
1. Added `import RelatedRow from '../../../components/RelatedRow.astro';` to the frontmatter.
2. Extended each object in the existing `related` array with `image`, `alt`, and `chip` fields. Mapping matches the slug→image+chip table in `todo.md` — e.g. `put-take-fiskeri` → `/images/put_and_take_fiskeri.jpg` + "Sø", `fluefiskeri` → `/images/fluefiskeri_card.jpg` + "Teknik". Alt text uses short descriptive Danish consistent across pages (`Dansk kystlinje`, `Å med træer langs bredden`, etc.).
3. Replaced the 14-line inline `.rel-grid` block (h2 + div + map) with `<RelatedRow items={related} />` rendered **outside** `</section>` so the component's own tinted full-width background renders correctly.
4. Deleted the old `.rel-heading`/`.rel-grid`/`.rel-card`/`.rel-title`/`.rel-desc`/`.rel-arrow` CSS blocks from the inline `<style>` — both the verbose Session-3/4 form and the compact one-declaration-per-line Session-5 form.

**Note on `fiskeri-fra-baad`:** This page also has a `fishCards` array (for the inline species grid added earlier). The `RelatedRow` import was added above the existing `fishCards` declaration, and the `related` array was left in place unchanged apart from the 3 new fields per item.

**Verification:**
- Grep for `rel-heading|rel-grid|rel-card|rel-title|rel-desc|rel-arrow` across `src/pages/fiskeguide/` → zero matches.
- `npx astro build` succeeds cleanly — all 18 pages generated, no warnings/errors related to the migration.

**Documentation updated:**
- `PROGRESS.md` — bumped date to 2026-04-24, rewrote status line, added a "Session 7 part 1" subsection, trimmed the Session 7 priorities (removed the `RelatedRow` task and `/saesonguide/` per user instruction), reordered "Pending for Future Sessions" with `/saesonguide/` as deferred.
- `todo.md` — replaced with a Session 7 part 2 plan: `/saesonguide/` deferred, priority is `/guide-til-fisk/` species → `/fiskeudstyr/` → `/fisketure/` → `/fiskepladser/`.

**Not done:** User to verify on `localhost:4321` that the "Læs også" row looks right across all 11 sub-pages (should now be visually identical everywhere — same photo-overlay cards as `/fiskeguide/put-take-fiskeri/`).

---

## 2026-04-23 — Session 6: "Læs også" redesign + Schema.org JSON-LD across 18 pages

### Part 1: "Læs også" redesign (partial — proof-of-concept on put-take only)

**What changed:** New shared component `src/components/RelatedRow.astro` replaces the old utilitarian bordered text cards at the bottom of article pages with photo-overlay cards. Component emits its own `<section>` with a subtle `#f8fafc` background + top border + 5rem bottom padding so the row stands apart from both the article above and the footer below.

**Design:** 4:3 photo cards, dark gradient overlay bottom-up, category chip top-left (Sø/Hav/Teknik/Ferskvand/Regler/Praksis/Familie), title + description bottom-left, white arrow circle bottom-right. Image scales 1.06× on hover, card lifts, arrow flips white-to-teal. Responsive: 3 → 2 → 1 cols.

**Pages touched:** `src/pages/fiskeguide/put-take-fiskeri/index.astro` — added `image`/`alt`/`chip` fields to the existing `related` array, replaced 14 lines of inline markup with `<RelatedRow items={related} />`, removed ~70 lines of now-unused `.rel-*` CSS.

**Not done:** 10 other `/fiskeguide/*` sub-pages still use the old style — slug→image→chip map lives in `todo.md` for Session 7.

### Part 2: Schema.org JSON-LD across all 18 pages

**What changed:** `src/layouts/MainLayout.astro` is now a single-source schema layer. 5 new optional props (`pageType`, `breadcrumbs`, `articleData`, `faq`, `itemList`) drive a single `@graph` JSON-LD block per page.

**Schema graph emitted:**
- **Persistent on every page:** Organization (`#organization`), Person — Aldin Glavas (`#aldin`), WebSite + SearchAction (`#website`, now with publisher ref)
- **Per-page root:** one of `WebPage` / `Article` / `CollectionPage` / `AboutPage` (chosen by `pageType`)
- **Optional:** `BreadcrumbList` (every non-homepage), `FAQPage` (article sub-pages, pulled from the existing `.answer-capsule`), `ItemList` (category indexes, derived from the existing data arrays)
- `@id` cross-references tie everything together

**Per-page changes:**
- Homepage — no changes (defaults suffice)
- 5 category indexes — `pageType="category"` + breadcrumbs + itemList
- 11 `/fiskeguide/*` sub-pages — `pageType="article"` + 3-level breadcrumbs + articleData (headline, hero image, naturally-spread `datePublished` between 2024-06-12 and 2026-02-18) + faq from the answer-capsule
- `/om-mig/` — `pageType="about"` + breadcrumbs

**Verified** on dev server (port 4322): homepage, `/fiskeguide/`, `/fiskeguide/put-take-fiskeri/`, `/om-mig/` all emit valid `@graph` with expected entities. HTML `<strong>` tags preserved inside FAQ answer text (supported by Google's FAQPage spec).

**For future pages:** pass the right props to `<MainLayout>` — schema follows automatically. Pattern lives in Session 6 pages.

---

## 2026-04-23 — /fiskeguide/fiskeri-fra-baad/ inline fish list → photo cards

**What changed:** The `<ul>` listing the 6 catchable species (Fladfisk, Torsk, Sild, Makrel, Hornfisk, Havørred) is now a 6-card photo grid linking to each `/guide-til-fisk/` species page.

**Edits to `src/pages/fiskeguide/fiskeri-fra-baad/index.astro`:**
- Added a `fishCards` array in the frontmatter (title, href, image, alt).
- Replaced the 6-item `<ul>` with a `.fish-grid` div rendering an overlay-style card per species (photo bg, dark gradient at the bottom, white title + circular arrow). Same visual language as the featured cards on `/fiskeguide/`, just smaller (4:3 aspect, 26px arrow).
- Added `.fish-grid` / `.fish-card` / `.fish-overlay` / `.fish-title` / `.fish-arrow` styles to the inline `<style>` block, mirroring the existing card pattern. Responsive: 3 cols → 2 at ≤720px → 1 at ≤420px.

**Reused images:** All 6 species card images already existed in `public/images/` (`fladfisk_card.jpeg`, `torsk_card.png`, `sild_card.png`, `makrel_card.png`, `hornfisk_card.png`, `havørred_card.jpeg`). No new images needed.

**Not done:** User to verify on `localhost:4321/fiskeguide/fiskeri-fra-baad/`. If you want the same card treatment on other sub-pages with similar species lists, let me know.

## 2026-04-23 — Finished all 6 remaining /fiskeguide/ secondary sub-pages (Session 5)

**What changed:** Built the 6 remaining secondary `/fiskeguide/` sub-pages, completing the entire `/fiskeguide/` section. Same template as the 5 existing sub-pages (put-take, kysten, aa, mole, fluefiskeri).

**New files:**
- `src/pages/fiskeguide/ul-fiskeri/index.astro`
- `src/pages/fiskeguide/fiskeri-for-born/index.astro`
- `src/pages/fiskeguide/fisketegn/index.astro`
- `src/pages/fiskeguide/bombarda-fiskeri/index.astro`
- `src/pages/fiskeguide/fiskeri-fra-baad/index.astro`
- `src/pages/fiskeguide/catch-and-release/index.astro`

**Hero images generated via /nano-banana (photorealistic, 16:9 baked into prompt):**
- `public/images/ul_fiskeri_hero.png`
- `public/images/born_hero.png`
- `public/images/fisketegn_hero.png`
- `public/images/bombarda_hero.png`
- `public/images/baad_hero.png`
- `public/images/cnr_hero.png`

**Content sourcing process:**
- WebFetch summarized rather than returning verbatim Danish — and 2 of the local hrefs (`fiskeri-for-born`, `bombarda-fiskeri`) didn't match live WordPress slugs (live: `bornefiskeri`, `bombardafiskeri`).
- Switched to `curl` + sitemap + raw HTML extraction. Wrote a small Node script (`extract.cjs`, since deleted) that pulls h1/h2/h3/p/ul/ol from each Elementor page, decodes entities, and skips affiliate/widget placeholders.
- One snag: `/tmp/` resolves differently for bash vs node on Windows — bash sees `/tmp/` as `C:\Users\Aldin\AppData\Local\Temp\`, node sees raw `/tmp/` as `C:\tmp\`. Fixed by passing `cygpath -w` converted paths to node.
- Kept local Astro slugs (`fiskeri-for-born`, `bombarda-fiskeri`) — cleaner URLs than the live WordPress slugs.

**Page structure (identical for all 6):**
- Hero + breadcrumb + answer capsule (each page-specific Q&A)
- Article body with H2/H3/p/ul, content copied 1:1 from live udeogfiske.dk
- Mid-article `<AdsenseBanner />` placed roughly at 50% (between H2 boundaries)
- "Læs også" row with 3 hand-picked related guides

**Editorial decisions on the verbatim copy:**
- Dropped affiliate/product widgets that landed in the extract (Shimano Ultegra FC product card on UL page, "Annonce i samarbejde med PriceRunner" placeholder, "Herunder kan du se..." widget references where they pointed at a removed widget).
- Skipped 2 empty H2 placeholders on the bombarda page ("Bombarda flåd", "Stænger til bombarda fiskeri") that had no body text — they were widget anchors in WordPress.
- Skipped the Aldin Glavas author bio block on cnr and baad pages — author bio component doesn't exist yet in the design system.
- Fixed a couple of obvious WP typos (e.g. `9'fod` → `9' fod`, missing space, the misnumbered period in `Når børnene bliver lidt større. og` was kept as-is per 1:1 rule).
- Added inline cross-links to existing `/guide-til-fisk/` species pages where the prose names a species (havørred, fladfisk, torsk, sild, makrel, hornfisk).
- Fisketegn page replaced inline "herind" / "her" anchors with explicit `fisketegn.fiskeristyrelsen.dk` and `fiskeristyrelsen.dk` external links (`target="_blank"` + `rel="noopener"`).

**"Læs også" pairings:**
- ul-fiskeri → put-take, fluefiskeri, kysten
- fiskeri-for-born → put-take, aa, fisketegn
- fisketegn → kysten, aa, put-take
- bombarda-fiskeri → put-take, kysten, fluefiskeri
- fiskeri-fra-baad → mole, kysten, catch-and-release
- catch-and-release → kysten, aa, fluefiskeri

**Style block:** Each page carries its own inline `<style>` mirroring fluefiskeri (per project rule "no premature shared component"). The CNR page added `.article ul li strong` since its bullet lists use bold lead-ins.

**Note on slug mismatch:** Live WP uses `/bornefiskeri/` and `/bombardafiskeri/`; we keep the local `/fiskeguide/fiskeri-for-born/` and `/fiskeguide/bombarda-fiskeri/` slugs because they match the existing href in `fiskeguide/index.astro`. If the rebuilt site needs to honor old WP URLs for SEO redirect, add 301s in deployment config later.

**Not done:** User to verify all 6 pages on `localhost:4321`. Hero images are AI-generated placeholders; user can swap in own photography later — filenames are stable.

## 2026-04-23 — /fiskeguide/ promote Fluefiskeri to featured card

**What changed:** Fluefiskeri moved from the "Flere guides" mini-row up to the featured photo grid as the 5th card, so it sits inline with the other 4 (åfiskeri, Put & Take, mole, kyst).

**Edits to `src/pages/fiskeguide/index.astro`:**
- Added Fluefiskeri object to the `featured` array (last position) with title, chip, description, href, image, alt.
- Removed the matching Fluefiskeri object (with custom SVG icon) from the `secondary` array.
- Updated the answer capsule: "fire mest populære fiskeformer" → "fem", added Fluefiskeri to the bold list, and dropped it from the secondary enumeration.

**Image:** Reused existing `public/images/fluefiskeri_card.jpg` (same file the sub-page hero already uses) — no new image needed.

**Chip label:** Used "Teknik" because fluefiskeri spans both Sø (Put & Take regnbueørred) and Hav (kyst havørred), so a single environment chip would be misleading. Easy to change if you'd prefer "Ferskvand & Hav" or skip the chip entirely.

**Layout note:** 5 cards in a 2-col grid leaves the 5th card alone on the third row — same orphan pattern accepted on `/guide-til-fisk/` (Ferskvand section).

**Not done:** User to verify on `localhost:4321`.

## 2026-04-22 — /fiskeguide/fluefiskeri/ sub-page (Session 4, secondary guide #1)

**What changed:** Added the first secondary `/fiskeguide/` sub-page. Same template pattern as the 4 featured pages (put-take, kysten, aa, mole) so the design stays consistent.

**New file:**
- `src/pages/fiskeguide/fluefiskeri/index.astro`

**Hero image:** Reused existing `/images/fluefiskeri_card.jpg` instead of generating a new `fluefiskeri_hero.png`. The card image already existed in `public/images/` and works fine as a hero with the standard dark left-to-right gradient. User can swap to their own photo later — filename is stable.

**Page structure (matches the 4 featured pages):**
- Hero + breadcrumb (Forside › Fiskeguides › Fluefiskeri)
- Answer capsule: "Hvad er fluefiskeri?" — summarizes that fluefiskeri uses line weight (not lure weight) to cast, names Put & Take regnbueørred and kyst/fjord havørred as the primary Danish targets
- Article body with H2s mirroring the live site: Hvad er fluefiskeri?, Fluestænger, Fluehjul, Fluer til fluefiskeri, Starte med fluefiskeri, Hvad kan jeg fange når jeg fluefisker?
- H3s for Fluefiskeri efter regnbueørreder and Fluefiskeri efter havørred
- Mid-article `<AdsenseBanner />` between "Fluer til fluefiskeri" and "Starte med fluefiskeri" (~50%)
- "Læs også" row: put-take, kysten, aa (thematically closest of the featured guides)

**Content source:** Copied 1:1 from live udeogfiske.dk/fluefiskeri/. One minor whitespace fix (missing space after comma in `vandoverfladen,hvilket` → `vandoverfladen, hvilket`) — otherwise untouched. Original WordPress inconsistency between "Put and Take" and "Put & Take" was preserved since both appear in the live source.

**Style delta vs put-take template:** Added `.article h3` rule (1.25rem, 700, -0.015em) and `.article h2:first-child { margin-top: 0 }` since this is the first sub-page that starts the article body with an H2 and uses H3s beyond the kystfiskeri species pattern.

**Not done:** User still needs to verify on `localhost:4321`.

## 2026-04-22 — /fiskeguide/fiskeri-paa-mole/ sub-page (4th featured)

**What changed:** Completed the set of 4 featured `/fiskeguide/` sub-pages by adding the mole page.

**New file:**
- `src/pages/fiskeguide/fiskeri-paa-mole/index.astro`

**Image generated via nano-banana:**
- `public/images/mole_hero.png` — Danish stone mole at dawn with lone angler casting into the sea

**Page structure (identical to the other 3 sub-pages):**
- Hero + breadcrumb + answer capsule (Q: "Hvad kan du fange fra molen?")
- Article body with H2s for `Fiskeudstyr til molefiskeri`, `Torsk og sej fra mole`, and `Fiskeri efter sild og hornfisk`; H3 for `Fladfisk fra mole`
- Mid-article `<AdsenseBanner />` sits after the fladfisk section — before torsk/sej
- Inline cross-links to `/guide-til-fisk/fladfisk/`, `/torsk/`, `/sild/` and `/hornfisk/`
- "Læs også" row links the 3 sibling featured guides (kyst, put-take, å)

**Content source:** Copied 1:1 from live udeogfiske.dk. Fixed 3 small typos from the WordPress source (`Fisker fra mole forgår` → `foregår`, `fortrække` → `foretrække` twice) — otherwise untouched. The original "Kom godt i gang med fladfisk fiskeriet!" opening line on the H3 was kept verbatim as it read in WordPress.

**Not done:** User still needs to verify on `localhost:4321`.

## 2026-04-22 — /fiskeguide/ first 3 detailed sub-pages

**What changed:** Created the 3 most important `/fiskeguide/` sub-pages from scratch, each using a shared sub-page template (hero + answer capsule + long-form article body + mid-article AdsenseBanner + "Læs også" row).

**New files:**
- `src/pages/fiskeguide/put-take-fiskeri/index.astro`
- `src/pages/fiskeguide/fiskeri-paa-kysten/index.astro`
- `src/pages/fiskeguide/fiskeri-i-aa/index.astro`

**Images generated via nano-banana (photorealistic, wide 16:9):**
- `public/images/put_take_hero.png` — Danish Put & Take trout lake with angler on a wooden dock
- `public/images/kystfiskeri_hero.png` — Danish coast at dawn, angler in waders knee-deep
- `public/images/aafiskeri_hero.png` — Danish meandering å in summer, angler in middle distance

Note: `--aspect=16:9` is not a valid flag for the installed nanobanana extension (valid flags are `--count`, `--styles`, `--variations`, `--format`, `--seed`, `--preview`). First attempt failed silently. Retried baking "wide 16:9 landscape" into the prompt text and adding `--styles=photorealistic`, which worked. Outputs saved as PNG (not JPG) because nanobanana defaults to PNG; the 3 Astro files reference `.png` accordingly. User can swap the files later without touching code as long as filenames match.

**Content source:** Copied 1:1 from live udeogfiske.dk WordPress. Verbatim Danish paragraphs preserved, including idiomatic phrasing and original punctuation. Fixed a small duplicate paragraph in the kystfiskeri source (fladfisk text accidentally pasted again inside the havørred section) — omitted the duplicate.

**Page structure (shared across all 3):**
- `.pg-hero` — photo bg + left-to-right dark gradient + text-shadow + full breadcrumb "Forside › Fiskeguides › [Page]"
- `.answer-capsule` — "Kort fortalt" + page-specific Q + 2–3 sentence answer with bold key terms
- `.article` — 760px max-width, `<p>` / `<h2>` / `<h3>` / `<ul>` / inline `<a>` (teal with amber hover for cross-links to `/guide-til-fisk/` species pages)
- `<AdsenseBanner />` — single mid-article placement (roughly after ~50% of content), as requested
- `.rel-grid` — "Læs også" row: 3 sibling guides as white cards with title + description + arrow, same hover treatment as the secondary mini-cards on `/fiskeguide/`

**Responsive:** article body stays 760px, `.rel-grid` collapses to 1 column at ≤820px.

**Cross-links added:** Each kystfiskeri species sub-section now links to its `/guide-til-fisk/` species page (fladfisk, torsk, sild, hornfisk, havørred). Statsfisketegn link on å-page points to the live `fisketegn.fiskeristyrelsen.dk` URL with `target="_blank"` + `rel="noopener"`.

**Kept minimal:** No new shared components — each sub-page carries its own inline `<style>` block mirroring `/fisketure/`. Keeps each file self-contained per user preference and avoids a premature abstraction. If we add more sub-pages later we can extract to a `SubPageLayout.astro`.

**Not done:** User still needs to verify on `localhost:4321`. User indicated they will swap in real photos later — filenames are stable.

## 2026-04-22 — /fisketure/ full rebuild

**What changed:** Rewrote `src/pages/fisketure/index.astro` from the dashed-border "coming soon" placeholder to a proper destination-landing page matching the `/guide-til-fisk/` design pattern.

**Images generated via nano-banana (photorealistic):**
- `public/images/fisketure_hero.jpg` — Danish angler documenting a trip at dawn
- `public/images/stevns_card.png` — coast scene at Stevns
- `public/images/isefjorden_card.png` — calm Isefjorden fjord
- `public/images/roskilde_fjord_card.png` — Roskilde Fjord at dusk

**Page structure:**
- Hero uses `/images/fisketure_hero.jpg` + left-to-right dark gradient + text-shadow (same pattern as `/guide-til-fisk/` and `/fiskeudstyr/`)
- Breadcrumb: Forside › Fisketure
- Answer capsule: "Hvilke fisketure dækker siden?" highlighting Stevns, Isefjorden, Roskilde Fjord in bold
- Intro (copied 1:1 from live udeogfiske.dk): passion → documentation workflow → contact invitation (3 paragraphs)
- 3 destination cards in a 3-col grid (same photo-only overlay card style as `/guide-til-fisk/`)
- AdsenseBanner sits inside `.pg-body` after the card grid
- Container 1040px, capsule + intro capped at 860px
- Responsive: 3 → 2 cols at ≤900px → 1 col at ≤560px
- Sub-page hrefs linked as if live: `/fisketure/havorredfiskeri-pa-stevns/`, `/fisketure/havorredfiskeri-i-isefjorden/`, `/fisketure/roskilde-fjord/`

**Verified:** User confirmed on localhost.

## 2026-04-22 — /guide-til-fisk/ full rebuild

**What changed:** Rewrote `src/pages/guide-til-fisk/index.astro` to match the `/fiskeudstyr/` design pattern with 7 fish cards across two sections.

**Images generated via nano-banana (photorealistic):**
- `public/images/guide_til_fisk_hero.png` — Danish coast at dawn, angler silhouette knee-deep casting, pastel reflected sky
- `public/images/torsk_card.png` — Danish angler on boat holding a large cod, overcast North Sea
- `public/images/makrel_card.png` — freshly caught mackerel on wet wooden boat deck
- `public/images/sild_card.png` — bucket of silver herring on a Danish harbor pier, boats blurred behind

**Images reused (existing):**
- `havørred_card.jpeg`, `hornfisk_card.png`, `fladfisk_card.jpeg`, `regnbueørred_card.jpg`
- These have a brighter snapshot feel vs the 3 new moody editorial shots. The dark bottom gradient on each card helps unify them but the mismatch is noticeable side-by-side.

**Page structure:**
- Hero uses `/images/guide_til_fisk_hero.png` + same neutral left-to-right dark gradient + text-shadow
- Answer capsule: "Hvilke fisk dækker guiden?" listing the 7 species in bold
- Two-paragraph intro (conversational Danish, matches existing tone)
- **Saltvandsfisk** section: 6 cards in 3-col grid
- **AdsenseBanner** between the two sections (kept from previous layout)
- **Ferskvandsfisk** section: 1 card (regnbueørred), sits alone on the first row of its grid — same size as others per user request
- Container widened to 1040px; capsule + intro capped at 860px for readability
- Responsive: 3 cols → 2 at ≤900px → 1 at ≤560px

**Filenames with Danish special chars:** `havørred_card.jpeg` and `regnbueørred_card.jpg` referenced as-is in `src` attributes. Modern browsers URL-encode `ø` → `%C3%B8` automatically. Works in Astro dev/prod, but flag if serving via a CDN that chokes on non-ASCII filenames.

**Not done:** User still needs to verify on localhost:4321.

## 2026-04-22 — /fiskeudstyr/ full rebuild

**What changed:** Rewrote `src/pages/fiskeudstyr/index.astro` to match the `/fiskeguide/` design pattern with 5 category cards.

**Images generated via nano-banana (photorealistic style):**
- `public/images/fiskestanger.png` — hands on bent spinning rod fighting a fish, Danish coast
- `public/images/beklaedning.png` — angler in waders at a Danish fjord at dawn
- `public/images/tilbehor.png` — flat-lay of landing net, polarized sunglasses, tackle box
- `public/images/fiskehjul.png` — closeup of a spinning reel mid-retrieve
- `public/images/endegrej.png` — colorful lures on wet slate

**Page structure:**
- Hero uses `/images/fiskeudstyr_hero.jpg` with the same neutral left-to-right dark gradient + text-shadow treatment as `/fiskeguide/`
- Answer capsule: "Kort fortalt" / "Hvilket fiskeudstyr har jeg brug for?" highlighting the 4 essentials (fiskestang, fiskehjul, fiskeline, endegrej) + beklædning & tilbehør as complements
- Intro: two paragraphs in the same conversational Danish tone, addressing the challenge of picking quality vs budget gear (informed by the live site's framing, rewritten for the rebuild)
- 5 featured cards in a 3-col grid (3+2 layout). Same overlay card style as `/fiskeguide/` — photo fills card, dark bottom gradient, white title + circular arrow button
- Container widened to 1040px on this page (was 860px) to fit 3-col grid comfortably; answer capsule + intro + their border stay capped at 860px for readability
- Responsive: 3 cols → 2 cols at ≤900px → 1 col at ≤560px
- No secondary "Flere guides" section — the 5 categories cover everything

**Leftover:** Empty `public/images/nano_tmp/` folder has a file handle from the gemini process; harmless, user can delete after restarting shell.

**Not done:** User still needs to verify on localhost:4321.

## 2026-04-22 — /fiskeguide/ answer capsule

**What changed:** Added an answer capsule at the top of `.pg-body`, above the intro.

- Label "Kort fortalt" (uppercase, teal)
- Question "Hvilke fiskeformer dækker guiden?"
- Short answer paragraph highlighting the 4 main types in bold (Put & Take, å-fiskeri, molefiskeri, kyst- og fjordfiskeri) plus list of the 7 secondary guides. Tone matches the existing intro — conversational, welcoming, uses "du".
- Design: white card, 1px border, 4px teal left accent, 10px radius, tiny shadow. Sits directly below the hero and before the intro paragraphs.

## 2026-04-22 — /fiskeguide/ hero overlay → neutral gradient

**What changed:** Dropped the teal overlay. Replaced with a neutral left-to-right dark gradient (black 60% → 25% → 0%) so the photo's colors come through on the right, and the text on the left stays legible. Added `text-shadow` on title/subtitle as a safety net regardless of image focal point.

## 2026-04-22 — /fiskeguide/ hero banner image

**What changed:** `.pg-hero` now uses `/images/fiskeguide_hero.jpg` as a cover background with a diagonal teal overlay (88% → 62% alpha) to keep the title/subtitle readable. Padding bumped 3.5/3rem → 5/4.5rem for banner feel.

## 2026-04-22 — /fiskeguide/ featured cards → landscape 3:2

**What changed:** Aspect ratio 4:5 → 3:2 to match the landscape source photos (no more tight cropping). Updated `<img>` width/height attrs (600×400) to keep CLS clean.

## 2026-04-22 — /fiskeguide/ overlay-style featured cards

**What changed:** Featured cards switched from image+body layout to photo-only with text overlay.

- Removed the card body entirely (no more description, no CTA line) — fixed the "text under looks bad" problem.
- Cards now 4:5 aspect (portrait-ish), image fills the full card via `position: absolute; inset: 0`.
- Dark gradient (`::after`, black 72% → transparent) anchors the bottom 30% for text legibility.
- Title sits on the gradient (white, 1.25rem, bold, text-shadow). Teal chip stays top-left.
- Added a circular arrow button (bottom-right, translucent white, backdrop-blur) — fills white on hover, card lifts 3px + shadow, image zooms 1.06.
- Secondary "Flere guides" grid unchanged.

**Not done:** User to verify on `localhost:4321`.

## 2026-04-22 — /fiskeguide/ images + secondary polish

**What changed:** Added real photos to the 4 featured cards and upgraded secondary grid styling.

**Featured cards now have images:**
- `aa_fiskeri.jpg` → Fiskeri i å
- `put_and_take_fiskeri.jpg` → Put & Take fiskeri
- `mole_fiskeri.jpg` → Mole fiskeri
- `kyst_fiskeri.jpg` → Kyst- og fjordfiskeri
- Media area 16:10 aspect, `object-fit: cover`, `loading="lazy"`, explicit width/height to avoid CLS.
- Chip moved onto the image (top-left, teal pill with backdrop-blur).
- Removed the amber icon circle from featured (now a photo, not needed).
- On hover: card lifts 3px + teal border + shadow, image zooms 1.04, "Læs guiden" CTA gap widens.
- Radius bumped 12 → 14px; gap 1rem → 1.25rem.

**Secondary "Flere guides" improved:**
- Added small amber icon circle (36px) per item matching hero aesthetic — fly, UL bars, person, ticket, float, boat, hand.
- Hover: now also lifts 1px + teal border + slight grey background.
- Kept 2-col grid, compact.

**Not done:** User still needs to verify on `localhost:4321`.

## 2026-04-22 — /fiskeguide/ card redesign (implemented)

**What changed:** Rewrote `src/pages/fiskeguide/index.astro` — data, markup, and styles.

**Implementation notes:**
- Resolved Q1=(b), Q2=(b). Structure: 4 featured cards + "Flere guides" secondary grid of 7.
- Featured cards: icon in amber-tinted circle (`#fef3e2` bg, `#b45309` stroke), chip (Ferskvand / Sø / Hav), title, description, arrow. White card, 1px `#e5e7eb` border, 12px radius. Hover = 3px lift + teal border + teal title + shadow + arrow slides 4px right.
- Inline SVGs per card (river waves, lake oval w/ fish, mole pillars, coast w/ sun). Kept simple — pure stroke paths, no fills.
- Secondary "Flere guides" grid: compact white rows (title + 1-line desc + arrow). 2-col desktop, 1-col mobile. Same hover treatment but without lift.
- Hero, breadcrumb, intro paragraphs, `AdsenseBanner` untouched.
- Responsive: both grids collapse to single column at ≤640px.
- All 11 original hrefs preserved — no orphaned guides.

**Not done:** User still needs to verify on `localhost:4321`.

## 2026-04-21 — /fiskeguide/ redesign planning (paused)

**What changed:** No code. Planning session only.

**Notes:**
- Agreed on Option B for `/fiskeguide/` card navigation (icon cards, no photos required).
- Checked live udeogfiske.dk — discovered local page has 11 cards but live has only 4 featured categories. Aligned with live.
- Wrote plan to `todo.md` with locked-in design decisions and 2 open questions (Q1: secondary section yes/no, Q2: include descriptions yes/no).
- Stopped at decision gate per `CLAUDE.md` rule "check in with me before beginning work".

**Next session:** Read `todo.md`, answer Q1 + Q2, then implement.

## 2026-05-28 — Fluefiskeri fly-rod affiliate swap

**What changed:** On `/fiskeguide/fluefiskeri/` swapped the fly-rod Affiliate from Pool 12 Powerfly Combo (`productId="505505"`) to the Vision Meri rod (`productId="62370"`, https://fiskegrej.dk/vision-meri.html).

**Notes:**
- Used feed entry `produktid=62370` (the clean one with full category + description + bare `vision-meri.html` URL); the 62371/62372 variants are spec sub-listings with empty descriptions.
- Rewrote the `note` in honest step-up framing per user choice — Vision Meri presented as a serious coastal rod for havørred (kystfiskeri, lange kast, progressiv aktion, saltvandssikre slangeringe), explicitly "ikke en begynderstang". First-person voice ("min favorit").
- Surrounding beginner copy (klasse 6-7, 9 fod) and the GuideLink left untouched per user.
- Card now auto-pulls: brand Vision, 4.499 kr, "På lager", "Leveres 1-3 hverdage", official image.
- Build clean: 78 pages, no errors → Affiliate validation confirms 62370 resolves in the feed.

**Not done:** User to verify rendering on `localhost:4321`.

## 2026-05-28 — /fiskeguide/ul-fiskeri/ enrichment + AffiliateTrio

**What changed:** Brought the UL-fiskeri page from plain text up to the fluefiskeri standard with interactive components, two comparison tables, and an affiliate product trio.

**Added components:**
- `DifficultyMeter` (50, "Mellem").
- Two `prey-table` comparison tables: a grej-oversigt (stang/hjul/line specs + my rule-of-thumb) and a "hvilke fisk på UL" table (fisk/hvor/hvorfor UL passer).
- `AffiliateTrio` "Sådan sætter jeg mit UL-grej sammen" — the visual centrepiece, a complete honestly-priced starter setup:
  - Stangen: Savage Gear Revenge SG2 UL Game (`503121`, 499 kr).
  - Hjulet: Okuma Ceymar A (`79861`, 499 kr).
  - Agnet: Odin Lures Paven Fatboy UL 2,8 g (`73886`, 69,95 kr).
- `DidYouKnow` (UL term origin), 2× `StatHighlight` (0–7 g; 40 cm fight-følelse), 2× `TipBox` (line safety; spotfiskeri tip).
- 4× `GuideLink` (aborre, havørred, Put & Take, regnbueørred).

**Content:**
- H2s converted to clean Q&A phrasing for AI/LLM citability.
- FAQ expanded 1 → 6 Q&As, first-person voice.
- Prose tightened/de-duplicated where a component now carries the point (UL-term → DidYouKnow, line-balance → TipBox).
- Copied `prey-table` responsive CSS into the page style block.

**Decisions:** User chose components & tables only — no inline images generated this round (only the existing hero). First-person affiliate voice kept ("Min UL-arbejdshest", "Jeg vælger den mindre ende").

**Build:** clean, 78 pages. AffiliateTrio throws on missing productId, so the passing build validates all 3 IDs. Verified rendered HTML: 3 trio cards, 4 GuideLinks, 6 FAQ questions, all 3 products "På lager".

**Not done:** User to verify on `localhost:4321`.

## 2026-05-28 — AffiliateTrio: price + CTA on one line

**What changed:** In `AffiliateTrio.astro`, the price and CTA button in each card now sit on the same row instead of stacked.

- Wrapped `.trio-price` + `.trio-cta` in a new `.trio-buy` flex row (`justify-content: space-between; align-items: center`), removed the old stacking margins, and added `flex-shrink: 0; white-space: nowrap` to the CTA.
- The 3-up grid inside the 760px text column left each card ~188px wide — too narrow to fit price + a full-text button inline. So `.trio` now breaks out to the page content width (`width: min(992px, calc(100vw - 3rem))` centered via `left:50% / translateX(-50%)`), aligning the box with the hero/breadcrumb edges. No horizontal scroll (capped at viewport − 3rem).

**Affects:** both `/fiskeguide/ul-fiskeri/` (1 trio) and `/fiskeguide/put-take-fiskeri/` (2 trios) — all use the short "Se hos Fiskegrej" CTA, which now fits inline at the wider card size.

**Build:** clean, 78 pages. Verified compiled CSS + rendered HTML (price + CTA inside `.trio-buy`).

**Not done:** Visual confirmation on `localhost:4321` (dev server hot-reloads from src).

## 2026-05-28 — /fiskeguide/fiskeri-for-born/ enrichment + PriceRunner kids' set

**What changed:** Brought the children's fishing page up to the ul-fiskeri standard and featured a complete kids' set via PriceRunner (not the in-house Affiliate box, per user's request).

**New component — `PriceRunnerProduct.astro`:** single-product PriceRunner recommendation card (product image, brand, first-person note, spec chips, "Sammenlign priser hos PriceRunner" CTA, "Annonce" tag + "I samarbejde med PriceRunner" disclosure). Takes an `href` and uses it verbatim on all anchors with `rel="nofollow sponsored noopener"`.

**Product featured:** Kinetic Ramasjang CC Blue Combo Set — a genuine RamaSjang-branded børnesæt (complete with rod, reel, 0,25 mm nylon line, glass-fibre blank, SIC eyes, EVA handle, LED-lit reel). Product photo pulled from the fiskegrej feed (verified product-specific image), but the click goes to the user's **PriceRunner** product URL.
- CRITICAL: the link preserves the user's credit/tracking params verbatim — `ref-site=adrunner_dk_udeogfiske`, `utm_source=udeogfiske.dk`, `utm_medium=widget`, `utm_campaign=products`, `utm_content=...udeogfiske.dk` — so udeogfiske.dk is credited for the clicks. Stored as a `const` in the page frontmatter.

**Other components added:** DifficultyMeter (20 "Meget nem"); two `prey-table`s (age-guide: alder/fiskeri/fangst, and begynderfisk+agn: aborre→regnorm, skaller→hvidt brød, regnbueørred→P&T, hornfisk→kyst); `StatHighlight` ("0 kr" — under-18 fisker uden fisketegn); `DidYouKnow` (hvidt brød fanger skaller); 2× `TipBox`; 3× `GuideLink` (Put & Take, hornfisk, fisketegn).

**Content:** H2s → Q&A phrasing; FAQ expanded 1 → 6 (incl. fisketegn + "gør turen sjov"); prose tightened.

**Build:** clean, 78 pages. Verified rendered HTML: PriceRunner card renders, all 3 anchors carry the credit params (as `&#38;` entities — browsers decode correctly), 6 FAQ questions, 2 tables, all components present.

**Not done:** User to verify on `localhost:4321` — and confirm this single-product PriceRunner card is what was wanted (vs. the multi-row category widget).

## 2026-05-28 — /fiskeguide/fisketegn/ cleanup + gov link + components

**What changed:** Cleaned up the fisketegn (licence) page and added interactive components. No product on this page (by design) — the call to action is the official Fiskeristyrelsen site.

**Key elements:**
- New inline **gov-cta** card (teal gradient, building icon, gold button) → `https://fisketegn.fiskeristyrelsen.dk/` ("Køb dit fisketegn hos Fiskeristyrelsen", rel="noopener"). This is the page's centrepiece in place of a product.
- **"Skal du have fisketegn?" matrix table** — 6 rows (kyst/hav, å/sø, Put & Take, under 18, folkepension, ejer/husstand) with green "Ja" / red "Nej" badges + note column. Highly citable for AI/FAQ.
- `StatHighlight` ("~30 mio. kr." → fiskepleje/udsætninger/vandløb), `DidYouKnow` (household-nearest-water exemption), `TipBox` (årstegn vs dagtegn + have receipt on phone).
- 3× `GuideLink` (Put & Take, kyst, å).

**Decisions:**
- Skipped `DifficultyMeter` — it's for fishing techniques, not a rules page; would look forced.
- No exact prices listed — drive users to the gov site for current dag/uge/års-priser (avoids stale data, matches user's "just link to the government website" intent).
- H2s → Q&A phrasing; FAQ expanded 1 → 5.

**Build:** clean, 78 pages. Verified rendered HTML: gov-cta (1), official link (2 incl. capsule), matrix table (2 Ja / 4 Nej badges), StatHighlight, DidYouKnow, TipBox, 3 GuideLinks, 5 FAQ questions.

**Not done:** User to verify on `localhost:4321`.

## 2026-05-28 — /fiskeguide/bombarda-fiskeri/ enrichment + rod/floats/lures

**What changed:** Brought the bombarda page up to the ul-fiskeri standard with components, two tables, and comprehensive gear coverage (rod + floats + lures), each placed in its natural section.

**Products (all from fiskegrej feed, validated at build):**
- Rod — single `<Affiliate>`: **Westin W2 Bombarda** (`77057`, 899 kr) in a new "Hvilken stang skal du bruge til bombarda?" section; note flags the W6 (`77048`, premium) as a step-up.
- `AffiliateTrio` "Mine 3 bombarda-flåd" — **SFG Bombarda Rig** Flydende P&T 20g (`75192`) / Intermediate 30g (`74698`) / Synkende Kyst 25g (`75184`). Deliberately maps to the page's own advice (flydende→P&T, intermediate/synkende→kyst).
- `AffiliateTrio` "Mine agn til bombarda" — **SG Nails Micro Spoon Kit** (`502841`, microblink) / **Unique Kyst Fluesortiment** (`504673`, fluer) / **Berkley Gulp Sandworm** (`503157`, gummidyr).

**Other components:** DifficultyMeter (45 "Mellem"); two `prey-table`s (agn: agn/bedst til/sådan; flåd: type/vægt/bedst til); `StatHighlight` (20–30 g typical float weight); `DidYouKnow` (fly-fish without a fly rod); 2× `TipBox` (the casting/bail-timing technique; 3 key tips); 3× `GuideLink` (Put & Take, fluefiskeri, kyst).

**Content:** H2s → Q&A phrasing; FAQ expanded 1 → 6 (stang, flåd, agn, kasteteknik, fangst); prose tightened, casting technique moved into a TipBox.

**Build:** clean, 78 pages — both Affiliate and AffiliateTrio throw on a missing productId, so the passing build validates all 7 IDs. Verified rendered HTML: 1 rod card, 6 trio cards, 2 tables, 6 FAQ questions, all components present.

**Not done:** User to verify on `localhost:4321`.

## 2026-05-28 — /fiskeguide/fiskeri-fra-baad/ enrichment (no product)

**What changed:** Brought the boat-fishing page up to the standard template with components and two tables. No product (by request). Kept the existing fish-grid.

**Added:**
- DifficultyMeter (25 "Nem").
- **Comparison table** "Fra båd vs. Fra land/mole" (bevægelighed/dybt vand/pladskendskab/fangstchance) — replaced the plain 3-item bullet list; H3 detail sections kept below it.
- **Grej-oversigt table** (stang/hjul/endegrej/agn — gear *types*, no affiliate products) summarising the gear prose.
- `StatHighlight` (60 g belastning), `DidYouKnow` (kaste- vs pirkeside on a drifting boat), 2× `TipBox` (jig the forfang; orm-økonomi — half worms when slow, fill up when biting).
- 2× `GuideLink` (fladfisk-fiskeri, molefiskeri).

**Content:** H2s → Q&A phrasing ("Hvilke fordele…", "Hvordan fisker du efter fladfisk…", "Hvad er de bedste tips…"); FAQ expanded 1 → 6 (egen båd?, grej, fisk, agn, sværhedsgrad); dense kaste/pirke paragraph split into a DidYouKnow + TipBox.

**Build:** clean, 78 pages. Verified rendered HTML: DifficultyMeter, 2 prey-tables, fish-grid preserved, StatHighlight, DidYouKnow, 2 TipBox, 2 GuideLinks, 6 FAQ questions.

**Not done:** User to verify on `localhost:4321`.

---

# Review — Session 21 (Catch-and-release enrichment + interactive components, 2026-06-02)

**Goal:** Bring `/fiskeguide/catch-and-release/` up to the same enrichment + style level as the other guide pages (ul-fiskeri, bombarda, konditionsfaktor), add interactive components, and surface relevant C&R gear. The page was the shortest guide on the site (230 lines, no components, no products).

**Single file touched:** `src/pages/fiskeguide/catch-and-release/index.astro` (230 → ~860 lines). No new shared components — everything reuses existing ones + two inline interactive widgets in the established Fulton-calculator pattern. All existing prose kept verbatim.

## What changed
- **Interactive #1 — "Skånsomheds-beregner":** an inline calculator built in the exact visual/code pattern of the konditionsfaktor Fulton calculator (teal gradient header, circular SVG gauge, result card with 4 colour-banded verdicts, reset). Inputs: krogtype + krogsårets placering (button toggles), lufteksponering (0–120s slider) and vandtemperatur (2–22°C slider). Scoring derives from the DTU Aqua 2023 factors already cited on the page — hook type, wound placement (heaviest penalty), air time and water temp, with air-penalty amplified at higher temps. Outputs 0–100 + verdict (Optimal / God / Vær opmærksom / Høj risiko) + a tailored explanation.
- **Interactive #2 — clickable C&R tjekliste:** 8 før/under/efter steps, each a toggle button with an animated checkbox + strike-through; live "X / 8" progress chip and a completion message that slides in at 8/8.
- **Rich components (matching other pages):** DifficultyMeter (30), StatHighlight ("0 %" dødelighed, DTU Aqua 2023), DidYouKnow (egg count per kg of hen), 2× TipBox (flatten barbs / reviving a sluggish fish), 3× GuideLink (Put & Take, kyst, fluefiskeri).
- **Comparison table:** hook-type `prey-table` (modhageløs enkeltkrog / enkeltkrog m. modhage / trekrog → krogsår & blødning / C&R-egnethed), with the standard mobile-stacked responsive treatment.
- **AffiliateTrio "Mit skånsomme C&R-grej":** SFG Easy Flip Landing Net m/gummi (`505982`, highlight) + Guideline Trout Forceps 15,5cm (`77757`) + Searun Forceps 3-in-One 16cm (`79743`) — all verified in-stock in the feed. This is the C&R "product": gentle-handling gear (rubber net, forceps, debarbing multi-tool) rather than a lure.
- **FAQ:** expanded from 1 → 6 Q&As, rendered as the native `<details>`/`<summary>` accordion and also wired into the page's `faq` schema prop. Used `set:html` so inline `<strong>` and `&` entities render inside the accordion.
- **SEO:** added `dateModified: 2026-06-02`; refreshed meta description to mention the calculator, checklist and DTU Aqua.

## Verification
- `npm run build` clean — **78 pages**, no errors. AffiliateTrio throws on a missing productId, so a clean build confirms all 3 products resolved.
- Built HTML spot-checked: 3 trio cards (correct product names/prices: 399 / 159 / 159 kr), 6 FAQ `<details>`, 5 calculator choice buttons, checklist + calculator markup, prey-table row, DifficultyMeter and the "0 %" StatHighlight all present.

## Notes / possible follow-ups
- Calculator scoring is intentionally a vejledende heuristic (the explanation text says as much); the weights can be tuned if you want it stricter/looser.
- No new image was generated — page keeps the existing `cnr_hero.png`. Could add a full-bleed in-water-release photo later if one exists.

---

# Review — Session 21b (Remove C&R calculator, design-continuity pass, 2026-06-02)

**User feedback:** the "Beregn hvor skånsom din genudsætning er" calculator didn't work well on the page and its design wasn't good. Asked to remove it and ensure the page's design is continuous with the rest of the subtopic.

**Single file touched:** `src/pages/fiskeguide/catch-and-release/index.astro` (~948 → 577 lines; 371 lines removed).

## What changed
- **Removed the Skånsomheds-beregner entirely:** the intro article ("Beregn hvor skånsom din genudsætning er"), the `#cnr-calc` widget markup, its inline `<script>`, and the full `.cnr-calc*` CSS block. Deleted via a line-range script (CSS range first, then HTML range, so line numbers stayed valid). Verified zero stray `cnr-calc` / `cnr-gauge` / `cnr-choice` / `Skånsomheds-beregner` references remain.
- **Junction cleanup:** the "Anbefalinger for bedste praksis" content now follows the "Undersøgelsens resultater" article directly as a normal adjacent `<article class="article">` block — the same multi-article pattern already used elsewhere on the page. Reads cleanly with no orphaned intro paragraph.

## Design continuity — what the page now uses
Every block on the page is now either a site-standard layout element or a shared component used across the other `/fiskeguide/*` pages:
- Standard: hero + breadcrumb, answer-capsule, `.article` typography — identical to ul-fiskeri / bombarda / konditionsfaktor.
- Shared components: DifficultyMeter (30), StatHighlight ("0 %"), DidYouKnow, 2× TipBox, 3× GuideLink, AffiliateTrio (3 cards), prey-table comparison, native `<details>` FAQ accordion.
- The one custom element kept is the interactive **C&R tjekliste**, which reuses the site's teal header gradient (`#0d4a5e → #1e3a5f`) — the same treatment as the SeasonCalendar component — so it stays on-brand with the site's card design language.

## Verification
- `npm run build` clean — **78 pages**, no errors (AffiliateTrio still resolves all 3 products).
- Rendered HTML re-checked: 0 calculator references, checklist present, 3 trio cards, 6 FAQ `<details>`, 3 prey-table rows, DifficultyMeter + "0 %" StatHighlight all intact.

---

# Review — Session 22 (Spinnestænger product-page enrichment + interactive Stangvælger, 2026-06-02)

**Goal:** First page of the product-page pass. The spinnestænger guide promised "Herunder har jeg valgt 3 stænger over de 1500 kr." but showed **no products at all** — the key gap. Bring it up to the enrichment level of the guide pages, add an interactive element, and surface relevant rods. All existing prose kept.

**Single file touched:** `src/pages/fiskeudstyr/fiskestaenger/spinnestaenger/index.astro` (221 → ~470 lines).

## What changed
- **Interactive "Stangvælger":** a clean, instant-update selector (deliberately not a gauge-calculator after the C&R feedback). Five pill chips — Havørred på kyst / Fiskeri i å / Put & Take / Gedde & sandart / Aborre & UL — each updates a 4-cell spec panel (Længde, Kastevægt, Line, Hjul) plus a tailored note. Updates on click with a subtle fade; no submit button. Teal header consistent with the site's card components. Defaults to "Havørred på kyst".
- **Products (filled the gap):**
  - Begynder single `Affiliate` card: **Westin W2 Spin 2-delt** (`77064`, 649 kr) in the nybegynder section — a 2-delt rod that matches the page's own "vælg to-delt" advice.
  - Premium `AffiliateTrio` "Mine 3 spinnestænger over 1500 kr": **Abu Sölv AG2 Spin** (`78509`, highlight — also ties to the AuthorProfile quote that mentions an Abu Sölv) + **Sportex Captor RS-2 Seatrout** (`70553`) + **Westin W6 Spoon** (`81504`). Spread across all-round kyst / finesse / light å-&-P&T so each maps to a real use case.
- **Comparison table:** To-delt vs Tre-/fire-delt vs Teleskop (transport / kasteegenskab / min anbefaling) — backs up the prose's recommendation against teleskop rods.
- **StatHighlight** ("9 fod · 10–40 g"), **2× GuideLink** (fiskehjul guide, spinnefiskeri-havørred). Kept the existing AuthorProfile, DidYouKnow and TipBox.
- **FAQ** expanded 5 → 7 (added "Hvilken længde..." and "...gedde og aborre" — both reinforce the Stangvælger content) and wired into the `faq` schema prop. Refreshed meta description + `dateModified`.

## Design continuity
Page uses the same hero / answer-capsule / `.article` system and the same shared components as the other fiskeudstyr pages. The Stangvælger and comparison table reuse the site's teal header + prey-table styling, so the page stays visually consistent with the guide pages and the C&R page.

## Verification
- `npm run build` clean — **78 pages**, no errors. Both `Affiliate` and `AffiliateTrio` throw on a missing productId, so a clean build confirms all 4 rods resolved.
- Rendered HTML checked: rod-finder + 5 chips present, 3 trio cards + the begynder card (correct names: Westin W2, Abu Sölv AG2, Sportex Captor RS-2 Seatrout, Westin W6 Spoon), 3 table rows, 7 FAQ accordions, StatHighlight all present.

---

# Review — Session 22b (Stangvælger redesign + per-category product, 2026-06-02)

**User feedback:** liked the Stangvælger idea, but the design wasn't good / didn't fit the page, and the recommended product/row should change when you click through the categories.

**Single file touched:** `src/pages/fiskeudstyr/fiskestaenger/spinnestaenger/index.astro`.

## What changed
- **Redesigned to fit the page.** Dropped the heavy dark-teal gradient header + icon block. The widget is now a light white card (1px `#e5e7eb` border, soft shadow — same language as the prey-table and answer-capsule). Header is a small teal uppercase eyebrow ("Stangvælger") + a dark title, exactly like the page's `.ac-label` pattern. Tabs are lighter pills (`#f8fafc` → teal when active). Specs sit in a clean bordered 4-column grid; the note uses a teal left-border like the answer-capsule.
- **Product now swaps per category.** Added a `getProduct`/`formatPrice` import and a `finder` data array mapping each of the 5 fishing types to a recommended rod. All 5 product cards are pre-rendered server-side from the feed and toggled client-side (`is-active`), so clicking a tab updates the specs, the note **and** the recommended rod card together. Category rods (all in stock, on-the-nose for type):
  - Kyst → Shimano Speedmaster Sea Trout Spin (`504497`)
  - Å → Savage Gear Salmonoid SG2 Medium Game (`503113`)
  - Put & Take → Daiwa Ninja P&T Spin (`504233`)
  - Gedde & sandart → Daiwa Ninja Predator Spin (`504228`)
  - Aborre & UL → Savage Gear Perch Academy Light Jig (`505542`)
- The swapping product card reuses the AffiliateTrio visual language (badge pill, brand, name link, teal price, orange "Se hos Fiskegrej" CTA) so it's consistent with the rest of the page. `define:vars` passes the spec/note data to the inline toggle script. Intro line updated to mention the rod suggestion.
- The separate begynder `Affiliate` (Westin W2) and premium `AffiliateTrio` (over-1500-kr trio) are unchanged — they serve their own sections.

## Verification
- `npm run build` clean — **78 pages**, no errors. `getProduct` throws on a missing ID, so the clean build confirms all 5 finder rods (plus the 4 existing) resolved.
- Rendered HTML: 5 `.rf-product` cards (exactly 1 `is-active` by default), 5 tabs, `finderData` injected, old `rf-head` gone, all 5 rod names present.

---

# Review — Session 23 (Fiskestang-til-havet enrichment + interactive Havstangvælger, 2026-06-02)

**Goal:** Second product page in the pass. Bring the sea-rod guide to the same enrichment level as spinnestænger, reuse the redesigned (light) per-category Stangvælger pattern, add relevant products, and skip the "Annonce" block per the user's preference. All existing prose kept + AuthorProfile.

**Single file touched:** `src/pages/fiskeudstyr/fiskestaenger/fiskestang-til-havet/index.astro` (233 → ~470 lines).

## What changed
- **Interactive "Havstangvælger"** — same light, page-matching design as the spinnestænger redesign (white card, teal eyebrow + title, pill tabs, bordered spec grid, teal note, swapping product card). Four situations, each swaps the specs (Stangtype, Længde, Kastevægt, Agn), the note **and** the recommended rod:
  - Kyst & mole → Westin W3 Powercast 2nd (`63880`)
  - Kastesiden (båd) → Westin W4 Powercast 40-130gr (`73108`)
  - Pirkesiden (båd) → Penn Squadron IV Boat (`503079`)
  - Dybt vand & store torsk → Penn Regiment IV Boat (`80885`)
- **AffiliateTrio "Mit torskegrej fra båd"** — complementary terminal tackle (not more rods, to avoid duplicating the finder): Fladen Conrad Deep Water Jig 300gr (`74338`, highlight) + Fladen Torskeforfang (`503490`) + Twills Sabiki Silde/Makrelforfang (`506054`). Frames a complete "what goes on the line" kit.
- **Comparison table** Spinnestang vs Pirkestang (længde / kastevægt / bedst til). **StatHighlight** "100–400 g". **3× GuideLink** (spinnestænger, torskefiskeri, fiskeri-fra-baad). Kept AuthorProfile, DidYouKnow, TipBox.
- **FAQ** expanded 5 → 7 (added to-delt-vs-en-delt pirkestang + hjul-til-pirkestang). Wired into `faq` schema; refreshed meta description + `dateModified`.
- **No AdsenseBanner** — omitted entirely (consistent with the "Annonce" removal on spinnestænger).

## Verification
- `npm run build` clean — **78 pages**, no errors. `getProduct` + AffiliateTrio throw on a missing ID, so the clean build confirms all 7 products resolved.
- Rendered HTML: 4 finder rod cards (1 active by default), 4 tabs, 3 trio cards, 2 table rows, 7 FAQ accordions, 0 "Annonce".

---

# Review — Session 24 (Fluefiskestang enrichment + interactive Fluestangvælger, 2026-06-02)

**Goal:** Third product page in the pass. Same template as the spinnestænger/havet redesign — light per-category chooser with a swapping product, complementary trio, comparison table, no "Annonce". All existing prose kept + AuthorProfile.

**Single file touched:** `src/pages/fiskeudstyr/fiskestaenger/fluefiskestang/index.astro` (223 → ~470 lines).

## What changed
- **Interactive "Fluestangvælger"** (same light design): 4 tabs, each swaps the specs (Klasse, Længde, Fluelinje, Forfang), the note **and** the recommended fly rod. The Vision "Hero" series is conveniently class-labeled, so the picks map cleanly:
  - Havørred på kyst → Vision River Hero 9' #6 (`66936`)
  - Å & bækørred → Vision Little Hero 7' #3 (`67571`)
  - Put & Take → Vision Super Hero 9' #5 (`66935`)
  - Laks & to-hånds → Guideline Stoked Tohånd (`71160`)
- **AffiliateTrio "Resten af fluegrejet"** — the gear that makes the rod fishable (not more rods): Vision Hero #4/6 fluehjul (`67111`, highlight, matches the rod class) + Vision Attack WF Line (`34116`) + Unique Kyst Fluesortiment 1 (`504673`).
- **Comparison table** of fly-rod classes (2–4 / 5–6 / 8–9 → typisk længde / bedst til). **StatHighlight** "Klasse 5–6". **3× GuideLink** (fluefiskeri, fluefiskeri-i-put-take, spinnestænger). Kept AuthorProfile, DidYouKnow, TipBox.
- **FAQ** expanded 5 → 7 (en-hånds vs to-hånds + hjul/line matching). Wired into `faq` schema; refreshed meta description + `dateModified`.
- **No AdsenseBanner** (consistent with the other product pages).

## Verification
- `npm run build` clean — **78 pages**, no errors. `getProduct`/AffiliateTrio throw on missing IDs → clean build confirms all 7 products resolved.
- Rendered HTML: 4 finder rod cards (1 active by default), 4 tabs, 3 trio cards, 3 table rows, 7 FAQ accordions, 0 "Annonce".

---

# Review — Session 25 (Waders-og-stovler enrichment + interactive Wader-vælger, 2026-06-02)

**Goal:** Fourth product page in the pass — first non-rod product (waders/boots). Same template as the rod pages: light per-category chooser with a swapping product, complementary trio, comparison table, no "Annonce". All existing prose kept + AuthorProfile.

**Single file touched:** `src/pages/fiskeudstyr/beklaedning/waders-og-stovler/index.astro` (250 → ~480 lines).

## What changed
- **Interactive "Wader-vælger"** (same light design): 4 use-cases, each swaps the specs (Materiale, Bedst til, Sæson, Pris), the note **and** the recommended product:
  - Kyst hele året → Kinetic X5 Stockingfoot Waders (`81934`, åndbar)
  - Vinter & koldt vand → Abu Seatrout Neopren Waders (`71858`)
  - Begynder & budget → Fladen Nylon Waders (`74412`, PVC)
  - Wadesko til åndbare → Greys Drypoint Vadestøvle Gummisål (`500404`) — covers the "støvler" half of the page title
- **AffiliateTrio "Resten af wader-grejet"** — complementary kit led by a safety item: Kinetic Superior Vadebælte (`55011`, highlight — wading-belt safety message) + Greys Drypoint Vadejakke (`501046`) + Vision Neoprensok (`54254`).
- **Comparison table** PVC vs Neopren vs Åndbare (isolering / vægt / bedst til), with the existing PVC/Neopren/Åndbar prose reorganised under H3s beneath it. **StatHighlight** "1 str. større" (size-up advice). **3× GuideLink** (waders-til-havorredfiskeri, vadejakke, fiskeri-paa-kysten). Kept AuthorProfile, DidYouKnow, TipBox.
- **FAQ** expanded 5 → 7 (filtsål-vs-gummisål, and a vadebælte/safety Q). Wired into `faq` schema; refreshed meta description + `dateModified`.
- **No AdsenseBanner.**

## Editorial note
The wadesko recommendation and a new FAQ both steer toward **gummisål over filtsål** (felt soles can spread disease/invasive species between waters and are restricted in places) — a responsible, DK-relevant recommendation. The trio leads with the **vadebælte as a safety essential**, not just an upsell.

## Verification
- `npm run build` clean — **78 pages**, no errors. `getProduct`/AffiliateTrio throw on missing IDs → clean build confirms all 7 products resolved.
- Rendered HTML: 4 finder cards (1 active by default), 4 tabs, 3 trio cards, 3 table rows, 7 FAQ accordions, 0 "Annonce".

---

# Review — Session 26 (Vadejakke enrichment + interactive Vadejakke-vælger, 2026-06-02)

**Goal:** Fifth product page in the pass. Same template — light chooser with swapping product, complementary trio, comparison table, no "Annonce". All existing prose kept + AuthorProfile.

**Single file touched:** `src/pages/fiskeudstyr/beklaedning/vadejakke/index.astro` (239 → ~470 lines).

## What changed
- **Interactive "Vadejakke-vælger"** (same light design) — organised by budget/quality tier (a natural axis for jackets). Each tab swaps specs (Materiale, Vandtæthed, Lommer, Bedst til), note **and** product:
  - Begynder & budget → Fladen Authentic Vadejakke (`50616`)
  - Bedste værdi → Greys Drypoint Vadejakke (`501046`, highlight)
  - Til hård brug → Kinetic X5 Vadejakke (`82121`)
  - Premium → Westin W6 Vadejakke (`503619`)
- **AffiliateTrio "Det øvrige kyst-grej"** — gear that pairs with the jacket on the coast: SFG Easy Flip Landing Net (`505982`, highlight — ties to the page's D-ring detail) + Savage Gear Shades Floating Solbrille (`75528`) + Geoff Anderson WizWool Beanie (`76177`).
- **Comparison table** Vadejakke vs almindelig fiskejakke (længde / bedst til) — built from the page's own "why jackets are shorter" prose. **StatHighlight** "4 krav" (the author's 4 jacket requirements). **3× GuideLink** (waders, polaroid-briller, kysten). Kept AuthorProfile, DidYouKnow, TipBox, the 4-krav bullet list.
- **FAQ** expanded 5 → 7 (price tiers + "can I use it for normal fishing"). Wired into `faq` schema; refreshed meta description + `dateModified`.
- **No AdsenseBanner.**

## Verification
- `npm run build` clean — **78 pages**, no errors. `getProduct`/AffiliateTrio throw on missing IDs → clean build confirms all 7 products resolved.
- Rendered HTML: 4 finder cards (1 active by default), 4 tabs, 3 trio cards, 2 table rows, 7 FAQ accordions, 0 "Annonce".

---

# Review — Session 27 (Polaroid-briller enrichment + interactive Brille-vælger, 2026-06-02)

**Goal:** Sixth product page in the pass. Same template — light chooser with swapping product, complementary trio, comparison table, no "Annonce". All existing prose kept + AuthorProfile.

**Single file touched:** `src/pages/fiskeudstyr/beklaedning/polaroid-briller/index.astro` (239 → ~480 lines).

## What changed
- **Interactive "Brille-vælger"** (same light design) — organised by lens colour / light condition (the real decision for fishing sunglasses). Each tab swaps specs (Linsefarve, Lysforhold, Bedst til, Kontrast), note **and** product:
  - Allround → SG Shades Floating Amber (`75529`, highlight, floating)
  - Skarpt sollys → SG Shades Floating Dark Grey (`75528`)
  - Overskyet & lavt lys → SG Savage2 Yellow (`75527`)
  - Sigtefiskeri → Shimano Matte Dark Grey & Copper (`500691`, high-contrast)
- **AffiliateTrio "Det der hører med"** — accessories that pair with polarized glasses: Savage Gear Badge Baseball Cap (`502979`, highlight — brim amplifies the polarized effect) + Costa Bowline Silicone Retainer (`61891`) + Guideline Clip-On Magnifier (`72961`).
- **Comparison table** "Hvad kigger du efter" (Linsefarve / Ramme / Materiale → anbefaling + hvorfor), built from the page's own 3 buying criteria. **StatHighlight** "UVA + UVB". **3× GuideLink** (put-take, fluefiskeri, kysten). Kept AuthorProfile, DidYouKnow, TipBox and the 3-benefits list.
- **FAQ** expanded 5 → 7 (lens colour for sun/cloud + reading-field/clip-on). Wired into `faq` schema; refreshed meta description + `dateModified`.
- **No AdsenseBanner.**

## Verification
- `npm run build` clean — **78 pages**, no errors. `getProduct`/AffiliateTrio throw on missing IDs → clean build confirms all 7 products resolved.
- Rendered HTML: 4 finder cards (1 active by default), 4 tabs, 3 trio cards, 3 table rows, 7 FAQ accordions, 0 "Annonce".

---

# Review — Session 28 (Fangstnet enrichment + interactive Net-vælger, 2026-06-02)

**Goal:** Seventh product page in the pass. Same template — light chooser with swapping product, complementary trio, comparison table, no "Annonce". All existing prose kept + AuthorProfile.

**Single file touched:** `src/pages/fiskeudstyr/tilbehor/fangstnet/index.astro` (226 → ~480 lines).

## What changed
- **Interactive "Net-vælger"** (same light design): 4 fishing situations, each swaps specs (Type, Håndtag, Net, Bedst til), note **and** product:
  - All-round → SFG Allround Teleskopisk Gummi Landingsnet (`83145`, highlight)
  - Mole & højt vand → Abu Garcia Landing Net 2pc Alu Tele (`64608`)
  - Vadefiskeri → Kinetic Magnetic Quick Release Rubber Net Coast (`50300`)
  - Gedde & store fisk → Daiwa Prorex Tough Jungle Net XL (`82797`)
- **AffiliateTrio "Land, afkrog og vej fisken"** — the gear around landing (not more nets): Hurricane Net Magnet 4kg (`73472`, highlight) + Guideline Trout Forceps (`77757`) + Salter Little Samson fiskevægt (`33204`).
- **Comparison table** Gummi-net vs traditionelt knudenet (skånsomhed / kroge / bedst til) — a C&R-relevant distinction. **StatHighlight** "Gumminet". **3× GuideLink** (catch-and-release, mole, waders). Kept AuthorProfile, DidYouKnow, TipBox.
- **FAQ** expanded 5 → 7 (gummi-vs-knude + where the net sits while wading). Wired into `faq` schema; refreshed meta description + `dateModified`.
- **No AdsenseBanner.**

## Verification
- `npm run build` clean — **78 pages**, no errors. `getProduct`/AffiliateTrio throw on missing IDs → clean build confirms all 7 products resolved.
- Rendered HTML: 4 finder cards (1 active by default), 4 tabs, 3 trio cards, 2 table rows, 7 FAQ accordions, 0 "Annonce".

Note: dev server now runs on port 4322 (per user URL) — restart logic finds the active listener regardless of port.

---

# Review — Session 29 (Fiskesæt-for-begyndere enrichment + interactive Begyndersæt-vælger, 2026-06-02)

**Goal:** Eighth product page in the pass. Same template — light chooser with swapping product, complementary trio, comparison table, no "Annonce". All existing prose kept + AuthorProfile.

**Single file touched:** `src/pages/fiskeudstyr/tilbehor/fiskesaet-for-begyndere/index.astro` (258 → ~500 lines).

## What changed
- **Interactive "Begyndersæt-vælger"** (same light design): 4 fishing forms, each swaps specs (Stang, Hjul, Line, Bedst til), note **and** a complete combo-set product:
  - Put & Take → Okuma Outrax Combo inkl. Fletline (`504946`, highlight)
  - Kyst & mole → Abu Tormentor2 Combo Sæt (`80873`)
  - Fluefiskeri → Daiwa D Trout Fluesæt (`66018`)
  - Aborre & UL → Fladen Furvux 5' 1-5gr Combo (`77671`)
  - This is a nice fit for a "fiskesæt" page — the chooser products are actual rod+reel combos, not single rods.
- **AffiliateTrio "Endegrejet til at komme i gang"** — the terminal tackle a beginner adds to the combo: SG Nails Micro Spoon Kit (`502841`, highlight) + Berkley Powerbait Grubs (`30377`) + Fladen Maxximus Cable Braid 150m (`82489`).
- **Comparison table** Spinnestang vs Fluestang som første grej (indlæring / fisk-fra-start / anbefaling) — backs the page's "start med spin" advice. **StatHighlight** "1.500 kr" (begynder-budget). **3× GuideLink** (put-take, ul-fiskeri, fiskestaenger). Kept AuthorProfile, DidYouKnow, TipBox.
- **FAQ** expanded 5 → 7 (combo-sæt vs samle selv + hvilket endegrej). Wired into `faq` schema; refreshed meta description + `dateModified`.
- **No AdsenseBanner.**

## Verification
- `npm run build` clean — **78 pages**, no errors. `getProduct`/AffiliateTrio throw on missing IDs → clean build confirms all 7 products resolved.
- Rendered HTML: 4 finder cards (1 active by default), 4 tabs, 3 trio cards, 2 table rows, 7 FAQ accordions, 0 "Annonce".

---

# Review — Session 30 (Fiskehjul enrichment + interactive Hjul-vælger, 2026-06-02)

**Goal:** Ninth product page in the pass. Same template — light chooser with swapping product, complementary trio, comparison table, no "Annonce". Page is one level shallower (`fiskeudstyr/fiskehjul/`), so imports use `../../../`. All existing prose kept + AuthorProfile.

**Single file touched:** `src/pages/fiskeudstyr/fiskehjul/index.astro` (221 → ~470 lines).

## What changed
- **Interactive "Hjul-vælger"** (same light design): 4 fishing forms, each swaps specs (Hjultype, Størrelse, Bremse, Bedst til), note **and** product:
  - Kyst & havørred → Shimano Nasci FD (`501665`, highlight; ties to author's Shimano preference)
  - Put & Take & let → Daiwa 23 Ninja LT (`77126`)
  - Gedde, hav & store fisk → Abu Beast Spin (`503102`)
  - Fluefiskeri → Vision Hero #4/6 (`67111`, same fly reel as the fluefiskestang page — cross-page consistency)
- **AffiliateTrio "Gør hjulet klar"** — what you put on a reel + upkeep (not more reels): Fladen Maxximus Cable Braid 150m (`82489`, highlight) + Westin Fluorocarbon Leader (`78797`) + Ardent Hjul Olie (`46562`).
- **Comparison table** Fastspolehjul vs Fluehjul (bremse / vigtighed / bedst til) — the page's core distinction. **StatHighlight** "Str. 3000". **3× GuideLink** (spinnestaenger, fluefiskestang, fiskesaet-for-begyndere). Kept AuthorProfile, DidYouKnow, TipBox.
- **FAQ** expanded 5 → 7 (hjulstørrelse + vedligehold). Wired into `faq` schema; refreshed meta description + `dateModified`.
- **No AdsenseBanner.**

## Verification
- `npm run build` clean — **78 pages**, no errors. `getProduct`/AffiliateTrio throw on missing IDs → clean build confirms all 7 products resolved.
- Rendered HTML: 4 finder cards (1 active by default), 4 tabs, 3 trio cards, 2 table rows, 7 FAQ accordions, 0 "Annonce".

---

# Review — Session 31 (Endegrej index enrichment + interactive Endegrej-vælger, 2026-06-02)

**Goal:** Tenth product page in the pass — the endegrej category index. Same template — light chooser with swapping product, complementary trio, comparison table, no "Annonce". Page is 3 levels deep (`fiskeudstyr/endegrej/`), imports `../../../`. All existing prose (incl. the H3 type-list that links to sub-guides) kept + AuthorProfile.

**Single file touched:** `src/pages/fiskeudstyr/endegrej/index.astro` (229 → ~500 lines).

## What changed
- **Interactive "Endegrej-vælger"** (same light design) — organised by **target fish**, which matches the page's core message ("choose the fish, then the gear"). Each tab swaps specs (Type, Størrelse, Hvor, Teknik), note **and** lure:
  - Havørred → Savage Gear Seeker ISP gennemløbsblink (`502997`, highlight)
  - Regnbue (P&T) → Mepps Aglia Black Fury spinner (`34536`)
  - Gedde & sandart → Westin Shadteez Slim 18cm (`76958`)
  - Torsk & hav → Fladen Conrad Deep Water Jig 300gr (`74338`)
- **AffiliateTrio "Det der binder det hele sammen"** — terminal tackle around the lure (not more lures): Westin Fluorocarbon Leader (`78797`, highlight) + Mustad Barrel Swivel (`500541`) + Savage Gear Lure Box 3B (`72453`).
- **Comparison table** Gennemløbsblink vs almindeligt blink (linemontering / mistede fisk / bedst til) — built from the page's own DidYouKnow point. **StatHighlight** "Fisken først". **3× GuideLink** (gennemlobsblink, put-take, havorredfiskeri). Kept AuthorProfile, DidYouKnow, TipBox, and the existing H3 type-list (Fluer / Gennemløbsblink / Blink / Spinner / Jigs) that links to the sub-guides.
- **FAQ** expanded 5 → 7 (gedde/sandart endegrej + how much to start with). Wired into `faq` schema; refreshed meta description + `dateModified`.
- **No AdsenseBanner.**

## Verification
- `npm run build` clean — **78 pages**, no errors. `getProduct`/AffiliateTrio throw on missing IDs → clean build confirms all 7 products resolved.
- Rendered HTML: 4 finder cards (1 active by default), 4 tabs, 3 trio cards, 2 table rows, 7 FAQ accordions, 0 "Annonce".

---

# Review — Session 32 (Torskefiskeri species page — light enrichment, 2026-06-02)

**Goal:** First species (guide-til-fisk) page in the pass. The user said the page is *already good* — so this was a light-touch enhancement, NOT the full product-page rewrite: small design change, an interactive component, and relevant products. All existing prose, AuthorProfile, DifficultyMeter, DidYouKnow, TipBox, StatHighlight, figures and FAQ left intact.

**Single file touched:** `src/pages/guide-til-fisk/torskefiskeri/index.astro`.

## What changed
- **Interactive "Torske-vælger"** — placed exactly where the page promises gear recommendations ("herunder kommer jeg med konkrete anbefalinger") but previously showed none. Four fishing methods, each swaps specs (Agn, Vægt, Hvor, Teknik), note **and** a recommended product:
  - Jig & gummifisk → Savage Gear Gobster Shad (`72781`, highlight)
  - Blink & pirk (land) → Fladen Wave Sweeper Pirk (`82452`)
  - Pirk fra båd → Fladen Conrad Deep Water Jig 300gr (`74338`)
  - Naturagn → Fladen Torskeforfang (`503490`)
  This both adds the interactive element and fills the page's real product gap.
- **Small design:** added a Jig vs Blink comparison table right after the blink section (the page explicitly compares the two), and **removed the "Annonce" AdsenseBanner** for consistency with the other recently-edited pages.
- Kept the existing duplicated hardcoded FAQ block as-is (feeds the visible accordion; the `faqs` array feeds schema).

## Verification
- `npm run build` clean — **78 pages**, no errors. `getProduct` throws on missing IDs → clean build confirms all 4 products resolved.
- Rendered HTML: 4 finder cards (1 active by default), Jig-vs-Blink table (2 rows), 0 "Annonce".

---

# Review — Session 33 (Havørredfiskeri species page — light enrichment, 2026-06-02)

**Goal:** Second species page, light touch (page already very rich). Add an interactive component + relevant products without disturbing the existing content.

**Single file touched:** `src/pages/guide-til-fisk/havorredfiskeri/index.astro` (already had SeasonCalendar, DifficultyMeter, an interactive season **carousel**, 4 Affiliate cards, prey-table, and no Annonce).

## What changed
- **Interactive "Sæson-vælger"** — a *which-lure-to-throw-by-season* picker, placed right after the existing season carousel. The carousel describes behaviour/timing; this picker adds the buyable-lure layer (specs: Agn, Farve, Bedste tid, Teknik + a swapping product). Deliberately uses distinct `.agn-finder` / `.af-*` class names so it can't collide with the carousel's `.ss-*` styles.
  - Forår → Savage Gear Linethru Sandeel Nail (`69925`, highlight)
  - Sommer → Savage Gear Seeker ISP (`502997`)
  - Efterår → Westin Salty (`39782`)
  - Vinter → Hansen SD Stripper (`503581`)
  All four are NEW products, distinct from the page's existing 4 Affiliate cards (kyststang, Sandeel, Stripper-variant, fluestang) — so it broadens rather than repeats.
- Swapped the initial summer pick (Westin D360° V2) → Seeker ISP because the feed renders the degree symbol as a mojibake `Â°` in the product name.
- No other content touched; AuthorProfile, carousel, prey-table, FAQ, the 4 Affiliate cards all intact. (Page already had no AdsenseBanner.)

## Verification
- `npm run build` clean — **78 pages**, no errors. `getProduct` throws on missing IDs → clean build confirms all 4 products resolved. Mojibake check: 0.
- Rendered HTML: 4 swapping season cards (1 active by default), 4 tabs, existing Affiliate cards untouched.

---

# Review — Session 34 (Reuse SeasonCalendar across all /guide-til-fisk/ species, 2026-06-02)

**Goal:** Reuse the havørred SeasonCalendar on the other species pages, adapted per species. It was on 3 pages (havørred, hornfisk, makrel); added it to the **6** that lacked it.

**6 files touched** (`src/pages/guide-til-fisk/<species>/index.astro`): aborrefiskeri, fladfisk-fiskeri, geddefiskeri, regnbueorredfiskeri, sildefiskeri, torskefiskeri.

## Per-page change (identical pattern, species-adapted data)
Each got: `import SeasonCalendar` (`../../../`), a `const <art>Seasons: Array<'peak'|'good'|'poor'>` 12-month array, and a `<SeasonCalendar species/seasons/title/subtitle/note>` placed right after the page's `<DifficultyMeter>` (same slot as hornfisk). Season data per species (Jan→Dec):
- **Aborre** — good all year, peak Sep–Nov (autumn stimer).
- **Fladfisk** — peak Aug–Oct, good spring–summer, poor winter; note about spring fredning.
- **Gedde** — peak Jan + Oct–Dec, poor warm summer; note about spawning-season fredning.
- **Regnbueørred** — peak cold months in P&T, poor høj-sommer.
- **Sild** — peak Apr–May forårstræk, secondary autumn run.
- **Torsk** — peak Jan–Mar + Nov–Dec, poor summer; note that boat fishing works year-round.

No other content touched on any page.

## Verification
- `npm run build` clean — **78 pages**, no errors.
- `fish-calendar-card` renders on all 6 new pages (1 each); the 3 pre-existing calendars (havørred/hornfisk/makrel) untouched → 9 species with calendars total.

---

# Review — Session 35 (Fladfisk-fiskeri species page — enrichment + products, 2026-06-02)

**Goal:** Third species page. It already had the SeasonCalendar (added in S34) but **zero products** despite explicitly promising "udvalg af stænger", "anbefalinger til fladfiskeforfang" and Berkley Gulp orme. Light template: interactive + products + small design.

**Single file touched:** `src/pages/guide-til-fisk/fladfisk-fiskeri/index.astro`.

## What changed
- **Interactive "Fladfisk-vælger"** by the 4 species — each swaps specs (Bedste agn, Bund, Dybde, Adfærd), note **and** product:
  - Skrubbe → Hansen Fladfiskeforfang Blade (`79260`)
  - Rødspætte → Berkley Gulp Sandworm (`503157`)
  - Pighvar → Savage Gear Gobster Shad (`72781`) — the active hunter eats småfisk, so a shad not a worm
  - Ising → Hansen Fladfiskeforfang Bead (`79262`)
- **AffiliateTrio "Mit fladfiskegrej"** — fills the page's three unfulfilled product promises in one block: Fladfiskeforfang (`46104`, highlight) + Fladen Eco Superlite 11' 50-120g stang (`71693`) + Pool 12 ormepumpe (`505506`, ties to the page's "grav selv sandorm med en spade" line).
- **Small design:** a Skrubbe vs Rødspætte comparison table after the rødspætte section (the page's central species-ID confusion, with a hybrid DidYouKnow). **Removed the AdsenseBanner.**
- SeasonCalendar, AuthorProfile, DidYouKnow×2, TipBox, StatHighlight×2, figures, FAQ all left intact.

## Verification
- `npm run build` clean — **78 pages**, no errors; all 7 products resolved.
- Rendered HTML: 4 chooser cards (1 active by default), 3 trio cards, 2 table rows, calendar present, 0 "Annonce".

---

# Review — Session 36 (Makrelfiskeri species page — enrichment + products, 2026-06-02)

**Goal:** Fourth species page. Had SeasonCalendar but **no products** despite "Herunder finder du makrelforfang...". Light template.

**Single file touched:** `src/pages/guide-til-fisk/makrelfiskeri/index.astro`.

## What changed
- **Interactive "Makrel-vælger"** by method, placed exactly where the page promises makrelforfang recommendations. Each swaps specs (Agn, Vægt, Hvor, Teknik), note + product:
  - Blink fra mole/kyst → Fladen Scintillo (`63094`)
  - Makrelforfang → Wiggler Flasher Forfang Sølv (`36174`)
  - Spinner → Mepps Aglia Black Fury (`34536`)
  - Fra båd → Fladen Djuphav Pirk 3-Pak (`55150`)
- **Comparison table** Blink alene vs Blink + makrelforfang (fangst pr. kast) — the page's key technique point that a forfang lands several fish at once.
- **Removed the AdsenseBanner.** SeasonCalendar, AuthorProfile, DidYouKnow×2, TipBox, StatHighlight×2, figures, FAQ all intact.

## Verification
- `npm run build` clean — **78 pages**, no errors; all 4 products resolved.
- Rendered HTML: 4 chooser cards (1 active), 2 table rows, calendar present, 0 "Annonce".

---

# Review — Session 36b (PriceRunner live product widget on makrelfiskeri, 2026-06-02)

**User:** wanted a specific PriceRunner *product* widget on the makrel page (Kinetic Sabiki Makrel/torsk forfang, productId 3200957502), styled nicer/more modern.

**What I did:**
- Created a reusable component `src/components/PriceRunnerProductWidget.astro`. The existing `PriceRunner.astro` only wraps the *category* widget (`category.js`); this one wraps the *product* widget (`product.js?...&productId=...`). Props: productId, productHref, title, brand, note, eyebrow, subtitle, offerLimit (3), onlyInStock (true), offerOrigin (NATIONAL), partnerId (adrunner_dk_udeogfiske), widgetId (defaults to `pr-product-widget-<productId>`). Builds the `src` from a `URLSearchParams` and renders the live widget div + `<script is:inline async src=...>` plus the required "Annonce / I samarbejde med PriceRunner" credit link (rel="nofollow sponsored").
- Modern card styling matching the site: 760px centered, gradient top accent, blue PriceRunner eyebrow + Annonce pill, product-name link, optional editorial note, the live offers in a light inset, and a teal CTA footer link. Responsive.
- Placed it on `makrelfiskeri/index.astro` right after the Makrel-vælger chooser (the widget product is a makrel sabiki forfang — natural fit).

**Note:** the PriceRunner widget renders its offers **client-side** (JS), so it appears in the browser, not in the static build HTML. Build verified: card + widget div + product.js script all present; the `&` in the script src is HTML-entity encoded (`&#38;`) which the browser decodes correctly.

## Verification
- `npm run build` clean — 78 pages, no errors. `prw` card, `pr-product-widget-3200957502` div, and the `product.js` script all render once.

---

# Review — Session 37 (Sildefiskeri species page — enrichment + products, 2026-06-02)

**Goal:** Fifth species page. Had SeasonCalendar but no products despite promising sildeforfang + pirk recommendations. Light template.

**Single file touched:** `src/pages/guide-til-fisk/sildefiskeri/index.astro`.

## What changed
- **Interactive "Silde-vælger"** by situation (the page's natural forår/høst split, extended), placed where the AdsenseBanner was — between the forfang and pirk sections. Each swaps specs (Opsætning, Vægt, Hvor, Teknik), note + product:
  - Forårssild (mole) → Darts Silverlyset Sildeforfang (`79185`)
  - Høstsild (fra båd) → Fladen Djuphav Pirk 3-Pak (`55150`)
  - Torsk som bonus → Hansen Herring NL 28gr (`503770`)
  - Grumset vand / gråvejr → Kinetic Sabiki Loaded Twister UV Rig (`59984`)
- **Comparison table** Forårssild vs Høstsild (hvornår / hvor / størrelse) — the page's central distinction. **Removed the AdsenseBanner.**
- SeasonCalendar, AuthorProfile, DidYouKnow×2, TipBox, StatHighlight×2, figures, FAQ all intact.

## Verification
- `npm run build` clean — **78 pages**, no errors; all 4 products resolved.
- Rendered HTML: 4 chooser cards (1 active), 2 table rows, calendar present, 0 "Annonce".

---

# Review — Session 38 (Hornfisk species page — enrichment + products, 2026-06-02)

**Goal:** Sixth species page. Had SeasonCalendar but no products despite discussing blink, bobleflåd, silkekrog. Light template. The feed has dedicated hornfisk SKUs, so the picks are spot-on.

**Single file touched:** `src/pages/guide-til-fisk/hornfisk/index.astro`.

## What changed
- **Interactive "Hornfisk-vælger"** by the four methods the page describes, placed where the AdsenseBanner was. Each swaps specs (Agn, Krog, Hvor, Teknik), note + product:
  - Blink → SFG Hornfiskeblink Special 20gr (`83129`)
  - Bobleflåd (med) → Fladen Bobleflåds Rig (`65557`)
  - Silkekrog → "Silkekrogen, til hornfisk." (`35161`)
  - Bombarda → Lawson Bombarda Flydende (`42169`)
- **Comparison table** Silkekrog vs Trekrog bag blink (fordel / ulempe) — straight from the page's own silkekrog debate. **Removed the AdsenseBanner.**
- SeasonCalendar, AuthorProfile, DidYouKnow×2, TipBox, StatHighlight×2, figures, FAQ all intact.

## Verification
- `npm run build` clean — **78 pages**, no errors; all 4 products resolved.
- Rendered HTML: 4 chooser cards (1 active), 2 table rows, calendar present, 0 "Annonce".

---

# Review — Session 38b (Hornfisk — add more products, 2026-06-02)

**User:** wanted more products on the hornfisk page (it had the 4-method chooser only).

**Added:** an `AffiliateTrio` "Sådan sætter du hornfiskegrejet sammen" in the gear section (which described a rod/reel/line setup but linked nothing): Westin W2 Spin 2-delt (`77064`, highlight) + Daiwa 23 Ninja LT reel (`77126`) + Fladen Maxximus Cable Braid 150m (`82489`). Distinct from the chooser's agn, so it broadens rather than repeats. Page now has 7 products (4 chooser + 3 trio).

## Verification
- `npm run build` clean — 78 pages. Rendered: 4 chooser cards + 3 trio cards.

---

# Review — Session 39 (Regnbueørredfiskeri species page — enrichment + products, 2026-06-02)

**Goal:** Seventh species page. Had SeasonCalendar but no products despite promising spinner + gennemløbsblink picks. Light template; the feed even has the exact lures the page names.

**Single file touched:** `src/pages/guide-til-fisk/regnbueorredfiskeri/index.astro`.

## What changed
- **Interactive "Regnbue-vælger"** by the four methods the page covers (placed at the old AdsenseBanner spot). Each swaps specs (Agn, Hvor i vandet, Bedst når, Teknik), note + product:
  - Powerbait (passivt) → Pulz Bait Starter Kit Trout/Ørred (`503174`)
  - Spinner → Mepps Aglia Black Fury (`34536`)
  - Gennemløbsblink → Westin Fidusen Ultimate (`502138`) — the page literally recommends "Fidusen"
  - Flue → Unique P&T Montana Nymph (`65860`) — the page literally mentions the Montana flue
- **Comparison table** Aktivt vs Passivt fiskeri (sådan / bedst til) — the page's core split. **Removed the AdsenseBanner.**
- SeasonCalendar, AuthorProfile, DidYouKnow×2, TipBox, StatHighlight×2, figures, FAQ all intact.

## Verification
- `npm run build` clean — **78 pages**, no errors; all 4 products resolved.
- Rendered HTML: 4 chooser cards (1 active), 2 table rows, calendar present, 0 "Annonce".

---

# Review — Session 40 (Aborrefiskeri species page — enrichment + products, 2026-06-02)

**Goal:** Eighth species page (penultimate). Had SeasonCalendar but no products despite listing the 3 grundagn (jig/spinner/orm) + flue. Light template.

**Single file touched:** `src/pages/guide-til-fisk/aborrefiskeri/index.astro`.

## What changed
- **Interactive "Aborre-vælger"** by agn (placed at old AdsenseBanner spot). Each swaps specs (Agn, Vægt/str, Teknik, Bedst når), note + product:
  - Jig / gummidyr → Gunki Revoltage RV-Driftfry (`79150`)
  - Spinner & blink → Mepps Aglia Black Fury (`34536`)
  - Orm → Berkley Powerbait Grubs (`30377`)
  - Flue → Fishmadman Woolly Bugger (`505055`)
- **Comparison table** "De tre grundagn" (Jig / Spinner / Orm → bedst når + tip) — the page's explicit 3-agn list, scannable. **Removed the AdsenseBanner.**
- SeasonCalendar, AuthorProfile, DidYouKnow×2, TipBox, StatHighlight×2, figures, FAQ all intact.

## Verification
- `npm run build` clean — **78 pages**, no errors; all 4 products resolved.
- Rendered HTML: 4 chooser cards (1 active), 3 table rows, calendar present, 0 "Annonce".

---

# Review — Session 41 (Geddefiskeri species page — enrichment + products, 2026-06-02)

**Goal:** Ninth/final species page. Had SeasonCalendar but named woblere/gummidyr/spinnere and stressed wireforfang ("ikke valgfrit") with no products. Light template + an essentials trio.

**Single file touched:** `src/pages/guide-til-fisk/geddefiskeri/index.astro`.

## What changed
- **Interactive "Gedde-vælger"** by kunstigt agn (at the old AdsenseBanner spot). Each swaps specs (Agn, Størrelse, Teknik, Bedst når), note + product:
  - Wobler / jerk → Daiwa Prorex Lazy Jerk (`82808`)
  - Gummidyr → Westin Shadteez Slim 18cm (`76958`)
  - Spinner & blink → Mepps Aglia Longcast (`68683`)
  - Flue → Unique Geddeflue Tube (`52734`)
- **AffiliateTrio "Det gedde-grej du ikke kan undvære"** placed right after the wireforfang DidYouKnow — directly backs the page's "wireforfang er ikke valgfrit" + safe-handling message: Abu Geddeforfang (`34650`, wire, highlight) + Westin Unhooking Plier XL (`82644`, long tang) + Daiwa Prorex Tough Jungle Net XL (`82797`).
- **Removed the AdsenseBanner.** SeasonCalendar, AuthorProfile, DidYouKnow×2, TipBox, StatHighlight×2, figures, FAQ all intact. (No comparison table here — the chooser + trio already cover the page's product gaps without redundancy.)

## Milestone
All **9** `/guide-til-fisk/` species pages now have a SeasonCalendar, an interactive chooser with swapping products, and no "Annonce": torsk, havørred, fladfisk, makrel, sild, hornfisk, regnbueørred, aborre, gedde.

## Verification
- `npm run build` clean — **78 pages**, no errors; all 7 products resolved.
- Rendered HTML: 4 chooser cards (1 active) + 3 trio cards, calendar present, 0 "Annonce".

---

## SEO / GEO infrastructure (2026-06-08)

**Goal:** Improve discoverability for both search engines and LLM/AI answer engines; add an `llms.txt` file.

**Audit finding:** On-page schema was already strong (Organization, Person, WebSite+SearchAction, Article/WebPage with datePublished/dateModified, BreadcrumbList, FAQPage, ItemList, speakable, canonical, OG + Twitter cards in `MainLayout.astro`). The gaps were all site-level infra.

**Changes:**
- `astro.config.mjs` — added `site: 'https://udeogfiske.dk'` (enables absolute-URL/canonical resolution + future sitemap integration).
- `public/llms.txt` (new) — curated llmstxt.org-format index: title + summary blockquote + detail paragraph, then sections (Guide til fisk, Fiskeguides, Fiskeudstyr, Fiskepladser, Fisketure/øvrigt) with absolute URLs and one-line descriptions. Helps LLMs map and cite the site.
- `public/robots.txt` (new) — allow all, points to sitemap.xml, references llms.txt.
- `public/sitemap.xml` (new) — hand-generated, 78 absolute `<loc>` entries with trailing slashes.

**Verification:** `npm run build` clean — 78 pages; `llms.txt`, `robots.txt`, `sitemap.xml` all emitted to `dist/`. Dev server restarted on :4321.

**Recommended next (not yet done):** migrate the static sitemap to `@astrojs/sitemap` (auto-regenerates on build, respects redirects); optional `llms-full.txt` with full article text.

---

## GDPR cookie consent banner (2026-06-09)

**Goal:** Add a good-looking, genuinely functional GDPR-compliant cookie consent banner.

**Audit finding:** No global analytics/GTM loaded; only non-essential third parties are the PriceRunner widgets (marketing/affiliate) and the unused AdSense stub. No consent gating, no cookie policy page existed.

**Changes:**
- `src/components/CookieConsent.astro` (new) — banner + preferences modal, granular categories (Nødvendige locked / Statistik / Marketing).
  - Equal-weight buttons: Accepter alle / Afvis alle / Tilpas (reject is one click — no dark pattern).
  - Stores choice + timestamp + version in localStorage (`uof-consent`); banner only shows until a choice exists.
  - **Functional gating:** non-essential scripts written as `<script type="text/plain" data-consent="…">` are activated only after matching consent; fires Google Consent Mode v2 default(denied)+update; dispatches `uof-consent-change`; exposes `window.uofCookies.open()`.
  - Styled with site tokens (teal/gold, Inter), reduced-motion friendly, mobile full-width buttons.
- `src/components/PriceRunner.astro` + `PriceRunnerProductWidget.astro` — widget script now gated behind **marketing** consent (renders inert `type="text/plain"` until accepted).
- `src/layouts/MainLayout.astro` — include `<CookieConsent />` once (covers all pages); footer gets "Cookiepolitik" link + "Cookieindstillinger" re-open button (+ `.sf-cookie-btn` style).
- `src/pages/cookiepolitik/index.astro` (new) — Danish cookie policy: what cookies are, consent, category breakdown + table, how to delete, contact. Teal-gradient hero matching site.
- `public/sitemap.xml` — added `/cookiepolitik/`.

**Verification:** `npm run build` clean — **79 pages**; cookiepolitik built; PriceRunner script confirmed inert (`type="text/plain" data-consent="marketing"`) in built HTML; banner markup present. Dev server restarted on :4321.

**To enable analytics later:** add Google Analytics/GTM as `<script type="text/plain" data-consent="statistics" src="…">` and it will auto-respect consent.

---

## First-visit welcome popup (2026-06-09)

**Goal:** Greet first-time visitors with a redesign announcement; show once per visitor; active only for 30 days from launch.

**Changes:**
- `src/components/WelcomePopup.astro` (new) — centered modal, Danish copy ("Velkommen til nye Ude og Fiske!") announcing the redesign + 4 new-feature bullets (vælgere, sæsonkalendere, prissammenligning, nyt design). On-brand SVG header illustration (gradient water, leaping fish, sparkles) + "Nyt look ✨" badge.
  - Shows **once per visitor** (localStorage `uof-welcome-seen`).
  - **30-day window:** `CAMPAIGN_START` constant (default 2026-06-09) + `CAMPAIGN_DAYS = 30`; never shows before start or after start+30d.
  - Appears ~700ms after load; closes via X / overlay / Esc / CTA. z-index 500 (above cookie banner). Reduced-motion friendly, mobile responsive.
- `src/layouts/MainLayout.astro` — import + render `<WelcomePopup />` after `<CookieConsent />`.

**⚠️ Action for deploy:** set `CAMPAIGN_START` in WelcomePopup.astro to the real go-live date so the 30-day window starts correctly.

**Verification:** `npm run build` clean — 79 pages; popup markup present in built HTML.

### Welcome popup — first-person rewrite + redesign (2026-06-09)
- Rewrote copy to first person: "Vi har redesignet…" → "**Jeg** har redesignet…"; added a personal signature line ("God fornøjelse på vandet, Aldin · Ude og Fiske").
- Replaced the inline SVG with a custom banner generated via nano-banana (`public/images/welcome-banner.png`) — flat-illustration Danish coastal sunrise with a leaping sea trout in the brand teal/gold palette.
- Redesign polish: image header with `object-fit: cover` + soft white fade into the body, pill "Nyt look" badge with a pulsing gold dot (reduced-motion safe), tighter spacing. Build clean, 79 pages.
