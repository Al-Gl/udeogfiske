# Ude og Fiske — Migration Architecture
**Migration: WordPress → Astro**
**Domain:** udeogfiske.dk
**Language:** Dansk (da-DK)
**Focus:** SEO-first static site

---

## Platform Decision

### Anbefaling: Astro ✅

**Astro er det rigtige valg** for dette projekt. Her er hvorfor sammenlignet med alternativer:

| Platform | Core Web Vitals | SEO-kontrol | Build-tid | Vedligehold |
|----------|----------------|-------------|-----------|-------------|
| **Astro** | ⭐⭐⭐⭐⭐ | Fuld kontrol | Hurtig | Lav |
| Next.js | ⭐⭐⭐⭐ | God | Medium | Moderat |
| Hugo | ⭐⭐⭐⭐⭐ | God | Meget hurtig | Lav |
| Eleventy | ⭐⭐⭐⭐⭐ | Fuld kontrol | Hurtig | Lav |
| WordPress | ⭐⭐ | Begrænset | N/A | Høj |

**Astro vinder fordi:**
- Sender 0 KB JavaScript som standard — perfekte Core Web Vitals (LCP, FID, CLS)
- Fuldt statisk HTML = øjeblikkelig indeksering af Google
- Komplet kontrol over Schema markup, canonical tags, meta, og hreflang
- Ingen database = ingen serverresponstid
- Billig hosting (Cloudflare Pages, Vercel, Netlify — alle gratis tiers)
- Nemt at tilføje affiliate-links og produkt-kort uden plugin-overhead
- Bygger på det samme mønster som det eksisterende Astronomy-projekt

---

## SEO-strategi for migrationen

### Hvad WordPress koster dig i dag:
- Langsom TTFB (Time to First Byte) pga. PHP + database
- Plugin-oppustet JavaScript (Elementor, WooCommerce widgets, etc.)
- Ingen kontrol over HTML-output
- Core Web Vitals lider → Google ranker dig lavere

### Hvad Astro giver dig:
- Statisk HTML = Google crawler behøver ikke rendere JS
- Præcis Schema.org markup (FAQ, Article, BreadcrumbList, Product)
- Fuld kontrol over `<head>` og meta per side
- Automatisk sitemap.xml + robots.txt
- Image optimization (WebP, lazy loading) ud af boksen
- Perfekt til affiliate-link tracking via datadrevne komponenter

---

## Nuværende Side-Arkitektur (udeogfiske.dk)

Baseret på sitemap.xml (36 sider) + navigation-analyse.

### 1. Fiskeguides (`/fiskeguide/`)
Teknik-guides til forskellige fiskeformer.

| Side | URL | Status |
|------|-----|--------|
| Fiskeguide oversigt | `/fiskeguide/` | Eksisterer |
| Put & Take fiskeri | `/fiskeguide/put-take-fiskeri/` | Eksisterer |
| Spinnefiskeri i Put & Take | `/fiskeguide/put-take-fiskeri/spinnefiskeri/` | I nav |
| Fiskeri i å | `/fiskeguide/fiskeri-i-aa/` | Eksisterer |
| Fiskeri på mole | `/fiskeguide/fiskeri-paa-mole/` | Eksisterer |
| Fiskeri på kysten | `/fiskeguide/fiskeri-paa-kysten/` | Eksisterer |
| Fluefiskeri | `/fiskeguide/fluefiskeri/` | I nav |
| Fluefiskeri i Put & Take | `/fiskeguide/fluefiskeri/put-take/` | I nav |
| **Diverse sub-sider:** | | |
| Rens af ørred | `/rens-af-orred/` | Eksisterer |
| UL Fiskeri | `/fiskeguide/ul-fiskeri/` | I nav |
| Fiskeri for børn | `/fiskeguide/fiskeri-for-born/` | I nav |
| Fisketegn | `/fiskeguide/fisketegn/` | I nav |
| Bombarda fiskeri | `/fiskeguide/bombarda-fiskeri/` | I nav |
| Fiskebøger | `/fiskeguide/fiskeboger/` | I nav |
| Fiskeri fra båd | `/fiskeguide/fiskeri-fra-baad/` | I nav |
| Catch and Release | `/fiskeguide/catch-and-release/` | I nav |

---

### 2. Fiskeudstyr (`/fiskeudstyr/`)
Udstyrguides og produktanmeldelser med affiliate-links.

| Side | URL | Status |
|------|-----|--------|
| Fiskeudstyr oversigt | `/fiskeudstyr/` | Eksisterer |
| Fiskestænger oversigt | `/fiskeudstyr/kob-af-fiskestaenger/` | Eksisterer |
| Spinnestænger | `/fiskeudstyr/kob-af-fiskestaenger/spinnestaenger/` | Eksisterer |
| Fiskestang til havet | `/fiskeudstyr/kob-af-fiskestaenger/fiskestang-til-havet/` | Eksisterer |
| Fluefiskestang | `/fiskeudstyr/kob-af-fiskestaenger/fluefiskestang/` | Eksisterer |
| Fangstnet | `/fiskeudstyr/fangstnet/` | Eksisterer |
| Fiskesæt for begyndere | `/fiskeudstyr/fiskesaet-for-begyndere/` | Eksisterer |
| Waders og støvler | `/fiskeudstyr/waders-og-stovler/` | Eksisterer |
| Fiskehjul | `/fiskeudstyr/koeb-af-fiskehjul/` | Eksisterer |
| Vadejakke | `/fiskeudstyr/vadejakke/` | I nav |
| Polaroid briller | `/fiskeudstyr/polaroid-briller/` | I nav |
| Endegrej oversigt | `/fiskeudstyr/endegrej/` | Eksisterer |
| Gennemløbsblink | `/fiskeudstyr/endegrej/gennemlobsblink/` | Eksisterer |
| Bedste gennemløbsblink hav. forår | `/fiskeudstyr/endegrej/bedste-gennemlobsblink-havorred-forar/` | Eksisterer |
| **Producent-sider:** | | |
| Westin | `/fiskeudstyr/producenter/westin/` | I nav |
| Savage Gear | `/fiskeudstyr/producenter/savage-gear/` | I nav |
| Geoff Anderson | `/fiskeudstyr/producenter/geoff-anderson/` | I nav |

---

### 3. Guide til Fisk (`/guide-til-fisk/`)
Artspecifikke fiskerguides — dette er sektionens SEO-kraftcenter.

| Side | URL | Indhold |
|------|-----|---------|
| Oversigt | `/guide-til-fisk/` | Eksisterer |
| Torskefiskeri | `/guide-til-fisk/torskefiskeri/` | Eksisterer |
| **Havørredfiskeri** | `/guide-til-fisk/havorredfiskeri/` | Eksisterer — vigtigste side |
| ↳ Januar | `/guide-til-fisk/havorredfiskeri/januar/` | I nav |
| ↳ Februar | `/guide-til-fisk/havorredfiskeri/februar/` | I nav |
| ↳ Marts | `/guide-til-fisk/havorredfiskeri/marts/` | I nav |
| ↳ April | `/guide-til-fisk/havorredfiskeri/april/` | I nav |
| ↳ Maj | `/guide-til-fisk/havorredfiskeri/maj/` | I nav |
| ↳ Juni | `/guide-til-fisk/havorredfiskeri/juni/` | I nav |
| ↳ Juli | `/guide-til-fisk/havorredfiskeri/juli/` | I nav |
| ↳ August | `/guide-til-fisk/havorredfiskeri/august/` | I nav |
| ↳ September | `/guide-til-fisk/havorredfiskeri/september/` | I nav |
| ↳ Oktober | `/guide-til-fisk/havorredfiskeri/oktober/` | I nav |
| ↳ November | `/guide-til-fisk/havorredfiskeri/november/` | I nav |
| ↳ December | `/guide-til-fisk/havorredfiskeri/december/` | I nav |
| Fladfisk fiskeri | `/guide-til-fisk/fladfisk-fiskeri/` | Eksisterer |
| Makrelfiskeri | `/guide-til-fisk/makrelfiskeri/` | Eksisterer |
| Sildefiskeri | `/guide-til-fisk/sildefiskeri/` | Eksisterer |
| Regnbueørredfiskeri | `/guide-til-fisk/regnbueorredfiskeri/` | Eksisterer |
| Hornfiskeri | `/guide-til-fisk/hornfisk/` | Eksisterer |
| Geddefiskeri | `/guide-til-fisk/geddefiskeri/` | I nav |
| Aborrefiskeri | `/guide-til-fisk/aborrefiskeri/` | I nav |

---

### 4. Fisketure (`/fisketure/`)
Trip-rapporter og fiskeoplevelser.

| Side | URL | Status |
|------|-----|--------|
| Fisketure oversigt | `/fisketure/` | Eksisterer |
| Havørred på Stevns | `/fisketure/havorredfiskeri-pa-stevns/` | Eksisterer |
| ↳ Bøgeskoven 15. jan 2022 | `/fisketure/havorredfiskeri-pa-stevns/bogeskoven-15-januar-2022/` | Eksisterer |
| Fisketur til Hammer Bakke | `/fisketure/fisketur-til-hammer-bakke/` | Eksisterer |
| Ørsted Ørredvand marts | `/fisketure/oersted-oerredvand-marts/` | Eksisterer |
| Isefjorden turer | `/fisketure/isefjorden/` | I nav |
| Roskilde Fjord turer | `/fisketure/roskilde-fjord/` | I nav |
| Put & Take turer | `/fisketure/put-take/` | I nav |

---

### 5. Fiskepladser (`/fiskepladser/`)
Lokationsguides med kort og praktisk info.

| Side | URL | Status |
|------|-----|--------|
| Fiskepladser oversigt | `/fiskepladser/` | Eksisterer |
| Fiskeri i København | `/fiskepladser/fiskeri-i-koebenhavn/` | Eksisterer |
| Havørred i Isefjorden | `/fiskepladser/havorredfiskeri-isefjorden/` | I nav |
| Havørred i Mariager Fjord | `/fiskepladser/havorredfiskeri-mariager-fjord/` | I nav |

---

### 6. Statiske sider

| Side | URL |
|------|-----|
| Forside | `/` |
| Om mig | `/om-mig/` |
| Kontakt | `/kontakt/` |
| Blog/Nyheder | `/blog/` |
| Privatlivspolitik | `/privatlivspolitik/` |
| Cookie-politik | `/cookies/` |
| Støt projektet | `/stoet-projektet/` |

---

## Ny Astro-Projekt Struktur

```
udeogfiske/
├── src/
│   ├── layouts/
│   │   ├── MainLayout.astro          # Hoved-layout (nav, footer, SEO head)
│   │   ├── ArticleLayout.astro       # Guide-sider (TOC, breadcrumbs, FAQ)
│   │   └── CategoryLayout.astro     # Oversigts-sider
│   │
│   ├── components/
│   │   ├── SEO/
│   │   │   ├── Schema.astro          # JSON-LD schema markup
│   │   │   └── Breadcrumbs.astro    # BreadcrumbList component
│   │   ├── ProductCard.astro         # Affiliate produkt-kort
│   │   ├── SeasonTable.astro         # Sæson-aktivitetstabel
│   │   ├── FAQ.astro                 # FAQ med FAQPage schema
│   │   ├── NavMenu.astro             # Hoved navigation
│   │   └── TableOfContents.astro    # TOC sidebar
│   │
│   └── pages/
│       ├── index.astro               # Forside
│       ├── om-mig.astro
│       ├── kontakt.astro
│       ├── fiskeguide/
│       │   ├── index.astro
│       │   ├── put-take-fiskeri/
│       │   │   └── index.astro
│       │   ├── fiskeri-i-aa/
│       │   │   └── index.astro
│       │   ├── fiskeri-paa-mole/
│       │   │   └── index.astro
│       │   ├── fiskeri-paa-kysten/
│       │   │   └── index.astro
│       │   └── fluefiskeri/
│       │       └── index.astro
│       ├── fiskeudstyr/
│       │   ├── index.astro
│       │   ├── kob-af-fiskestaenger/
│       │   │   ├── index.astro
│       │   │   ├── spinnestaenger/
│       │   │   │   └── index.astro
│       │   │   └── ...
│       │   └── endegrej/
│       │       └── index.astro
│       ├── guide-til-fisk/
│       │   ├── index.astro
│       │   ├── havorredfiskeri/
│       │   │   ├── index.astro       # Hoved hav-ørred guide
│       │   │   ├── januar.astro
│       │   │   ├── februar.astro
│       │   │   └── ...               # 12 månedssider
│       │   ├── torskefiskeri/
│       │   │   └── index.astro
│       │   └── ...
│       ├── fisketure/
│       │   ├── index.astro
│       │   └── havorredfiskeri-pa-stevns/
│       │       └── index.astro
│       └── fiskepladser/
│           ├── index.astro
│           └── fiskeri-i-koebenhavn/
│               └── index.astro
│
├── public/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml                   # Auto-genereret af Astro
│
├── ARCHITECTURE.md                   # Denne fil
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## SEO-Komponenter (kritisk for migrationen)

### Schema Markup pr. sidetype

| Sidetype | Schema typer |
|----------|-------------|
| Forside | `WebSite`, `Organization` |
| Guide-sider | `Article`, `BreadcrumbList`, `FAQPage` |
| Udstyr/produkt-sider | `Article`, `BreadcrumbList`, `FAQPage`, `Product` |
| Fiskepladser | `Article`, `BreadcrumbList`, `Place` |
| Fisketure | `Article`, `BreadcrumbList` |
| Om mig | `Person`, `WebSite` |

### Meta pr. side (eksempel — havørredfiskeri)
```html
<title>Havørredfiskeri – Komplet guide til fiskeri efter havørred | Ude og Fiske</title>
<meta name="description" content="Lær alt om havørredfiskeri på kyst og fjord. Bedste årstid, udstyr, pletter og teknikker — komplet guide fra erfaren fisker.">
<link rel="canonical" href="https://udeogfiske.dk/guide-til-fisk/havorredfiskeri/" />
<html lang="da">
```

### URL-bevarelse (kritisk!)
Alle eksisterende WordPress URLs **skal bevares 1:1** for at undgå at miste eksisterende Google-rangering. Ingen URL-ændringer ved migrationen.

---

## Indholdsprioritering (hvad bygges først)

### Fase 1 — Kernesider (højest traffik)
1. Forside (`/`)
2. Havørredfiskeri (`/guide-til-fisk/havorredfiskeri/`) — største SEO-side
3. Fiskeudstyr oversigt (`/fiskeudstyr/`)
4. Fiskeguide oversigt (`/fiskeguide/`)

### Fase 2 — Artguides
5. Alle `/guide-til-fisk/` sider (9 artspecifikke sider)
6. De 12 havørred månedssider

### Fase 3 — Udstyr
7. Alle `/fiskeudstyr/` under-sider
8. Produkt-/affiliate sider

### Fase 4 — Lokationer og ture
9. Alle `/fiskepladser/` sider
10. Alle `/fisketure/` sider

### Fase 5 — Resterende
11. Fiskeguide under-sider
12. Statiske sider (om mig, kontakt, etc.)

---

## Affiliat-link Arkitektur

Det nuværende WordPress-site bruger `/go/` og `/recommend/` redirect-stier. I Astro:

```
public/
└── go/
    ├── westin/            → redirect til affiliat-URL
    ├── savage-gear/       → redirect til affiliat-URL
    └── ...
```

Brug Astro's `redirects` config eller Cloudflare redirect-regler for at bevare affiliate-tracking.

---

## Teknisk Stack Anbefaling

```
Framework:     Astro 5.x
Styling:       Tailwind CSS (utility-first, ingen overhead)
Hosting:       Cloudflare Pages (gratis, CDN globalt, hurtig)
Billeder:      Astro Image (automatisk WebP + lazy loading)
Sitemap:       @astrojs/sitemap (automatisk)
Analytics:     Google Analytics 4 (via Partytown for 0 impact på score)
```

---

## Migrationsstrategi

1. **Byg nyt site** på `staging.udeogfiske.dk` eller lokalt
2. **Kopier indhold** side for side (start med Fase 1)
3. **Bevar alle URLs** præcist
4. **Test Core Web Vitals** med PageSpeed Insights inden launch
5. **Launch** — skift DNS til Cloudflare Pages
6. **Submit opdateret sitemap** til Google Search Console
7. **Monitor** rankings i 30 dage

**Forventet forbedring:** Fra typisk WordPress score på ~50-70 til Astro score på ~95-100 i PageSpeed Insights.

---

*Oprettet: 2026-04-18 | Baseret på analyse af udeogfiske.dk*
