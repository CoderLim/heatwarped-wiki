# Heatwarped Wiki Pages Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename all `miniwars` branding to `heatwarped`, correct/enhance core wiki pages from the approved research facts, create race-modes/map/customization/multiplayer/performance pages with hosted official or video-frame imagery, and leave cars page content untouched.

**Architecture:** Keep the existing thin-route + JSX page pattern (`heatwarpedPageRouteOptions` + page component under `src/components/heatwarped/pages/`). Evidence is layered in copy (Official / Current Demo verified / Hands-on observation / Unknown). Discovery surfaces (header, footer, sitemap, llms) stay the single source of nav truth.

**Tech Stack:** TanStack Start file routes, React 19, TypeScript, existing Heatwarped wiki page chrome (PageIntro/H2/SourceBox patterns from demo/release-date), Steam/official media hosted in `public/imgs/` or `static.heatwarped.wiki`, `pnpm build` as primary verification (no page unit-test suite in this repo).

**Spec:** `docs/superpowers/specs/2026-08-27-heatwarped-wiki-pages-design.md`  
**Research facts:** `/Users/coderlim/Downloads/heatwarped-wiki-page-research-plan.md`  
**SEO:** `gen-seo-content` skill (one H1, Title 50–60, Description 150–160, intent-first intro, anti-templating)

---

## File structure map

| Path | Responsibility |
|---|---|
| `src/components/heatwarped/` (renamed from `miniwars/`) | Shell, header/footer UI, page-route helper, media embeds, all wiki pages |
| `src/blocks/heatwarped-header.tsx` / `heatwarped-footer.tsx` | Nav + footer guide lists |
| `src/styles/heatwarped-fonts.css` | Font faces (comment must not say miniwars.art) |
| `src/routes/<slug>.tsx` | Thin SEO route wrappers |
| `public/imgs/guides/` | New guide stills (Steam / Media Kit / video frames) with descriptive filenames |
| `src/routes/sitemap[.]xml.ts`, `llms[.]txt.ts`, `llms-full[.]txt.ts` | Discovery indexes |
| `messages/{en,zh}.json` | Delete unused `miniwars.*` keys |
| `docs/research/` | Rename `miniwars-*.css` research dumps |
| **Do not edit body of** `heatwarped-cars-page.tsx` | Import path only if rename requires it |

**Dead code to remove after migrate:** unused exports `HeatwarpedReleaseDatePage` / `HeatwarpedDemoPage` / `HeatwarpedSystemRequirementsPage` / `HeatwarpedGameplayPage` inside old monolith once home is split out; delete unused `src/types/miniwars.ts` (nothing imports it).

---

### Task 1: Rename `miniwars` → `heatwarped` (runtime)

**Files:**
- Rename: `src/components/miniwars/` → `src/components/heatwarped/`
- Rename: `src/blocks/miniwars-header.tsx` → `src/blocks/heatwarped-header.tsx`
- Rename: `src/blocks/miniwars-footer.tsx` → `src/blocks/heatwarped-footer.tsx`
- Rename: `src/styles/miniwars-fonts.css` → `src/styles/heatwarped-fonts.css`
- Modify: all imports listed below
- Delete: `src/types/miniwars.ts` (unused)
- Modify: `messages/en.json`, `messages/zh.json` (remove `miniwars.*` keys)
- Rename: `docs/research/miniwars-main.css` → `docs/research/clone-source-main.css`
- Rename: `docs/research/miniwars-main-fresh.css` → `docs/research/clone-source-main-fresh.css`

- [ ] **Step 1: Baseline — confirm hits exist**

```bash
rg -i 'miniwars' src --glob '*.{ts,tsx,css}' | head
```

Expected: multiple hits under `src/components/miniwars`, blocks, styles, routes.

- [ ] **Step 2: Move directories/files with git**

```bash
cd /Users/coderlim/Projects/heatwarped-wiki
git mv src/components/miniwars src/components/heatwarped
git mv src/blocks/miniwars-header.tsx src/blocks/heatwarped-header.tsx
git mv src/blocks/miniwars-footer.tsx src/blocks/heatwarped-footer.tsx
git mv src/styles/miniwars-fonts.css src/styles/heatwarped-fonts.css
git mv docs/research/miniwars-main.css docs/research/clone-source-main.css
git mv docs/research/miniwars-main-fresh.css docs/research/clone-source-main-fresh.css
git rm src/types/miniwars.ts
```

- [ ] **Step 3: Symbol + import rewrite**

In all files under `src/` apply:

| From | To |
|---|---|
| `@/components/miniwars/` | `@/components/heatwarped/` |
| `@/blocks/miniwars-header` | `@/blocks/heatwarped-header` |
| `@/blocks/miniwars-footer` | `@/blocks/heatwarped-footer` |
| `./miniwars-fonts.css` | `./heatwarped-fonts.css` |
| `MiniWarsPageShell` | `HeatwarpedPageShell` |
| `MiniWarsHeaderBlock` | `HeatwarpedHeaderBlock` |
| `MiniWarsFooterBlock` | `HeatwarpedFooterBlock` |
| `MiniWarsHeader` | `HeatwarpedHeader` |
| `MiniWarsFooter` | `HeatwarpedFooter` |
| `MiniWarsNavItem` | `HeatwarpedNavItem` |
| `MiniWarsFooterLink` | `HeatwarpedFooterLink` |

`src/styles/globals.css` — change import to `./heatwarped-fonts.css` and comment text to remove miniwars wording.

`src/styles/heatwarped-fonts.css` — change file header comment to remove `miniwars.art`; keep font-face blocks.

If any CSS class literally contains `miniwars` (for example `miniwars-shell`), rename the class in CSS + JSX so `rg -i miniwars src` is empty.

`src/components/heatwarped/page-shell.tsx` must import `HeatwarpedHeaderBlock` / `HeatwarpedFooterBlock` and export `HeatwarpedPageShell`.

`src/blocks/heatwarped-header.tsx`:

```tsx
import { HeatwarpedHeader } from '@/components/heatwarped/site-header';

export function HeatwarpedHeaderBlock() {
  const navItems = [
    { href: '/release-date', label: 'Release Date' },
    { href: '/system-requirements', label: 'System Requirements' },
    { href: '/demo', label: 'Demo' },
    { href: '/gameplay', label: 'Gameplay' },
    { href: '/cars', label: 'Cars' },
  ];

  return <HeatwarpedHeader navItems={navItems} searchLabel="Search" />;
}
```

(Nav expansion for new pages happens in Task 10 — keep cars link.)

Update `src/components/heatwarped/heatwarped-page-route.tsx` to use `HeatwarpedPageShell`.

Update route imports (cars included — **import path only**):

- `src/routes/index.tsx`
- `src/routes/release-date.tsx`
- `src/routes/system-requirements.tsx`
- `src/routes/demo.tsx`
- `src/routes/gameplay.tsx`
- `src/routes/cars.tsx`

Keep cars `title` / `description` / page body strings exactly as they are today.

- [ ] **Step 4: Remove unused i18n keys**

Delete every key starting with `miniwars.` from `messages/en.json` and `messages/zh.json` (43 keys each). They are unused (`rg "m\['miniwars" src` is empty).

- [ ] **Step 5: Verify rename**

```bash
rg -i 'miniwars' src
pnpm build
```

Expected: `rg` prints nothing. Build succeeds.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
Rename miniwars runtime paths and symbols to heatwarped.

EOF
)"
```

---

### Task 2: Collect and host guide imagery

**Files:**
- Create: `public/imgs/guides/`
- Create: `public/imgs/guides/SOURCES.md`

- [ ] **Step 1: Preferred downloads**

Attempt in order:

1. Official Media Kit from https://heatwarped.com/ (Media Kit link)
2. Steam store screenshots / capsule assets for app `4846360` (download binaries; host locally — do not hotlink)
3. If a needed UI is missing: grab frames from:
   - Reveal Trailer `https://youtu.be/q7t6_ff8mlg`
   - MSX review `https://www.youtube.com/watch?v=-EQWpdzdopw`

Suggested filenames (adjust if assets differ):

```text
public/imgs/guides/ratfield-city-night.webp
public/imgs/guides/pda-map.webp
public/imgs/guides/race-hud-circuit.webp
public/imgs/guides/garage-body-kit.webp
public/imgs/guides/demo-open-world.webp
```

Each image: meaningful name, WebP preferred, known dimensions, descriptive alt planned in later tasks.

- [ ] **Step 2: Write provenance log**

`public/imgs/guides/SOURCES.md`:

```markdown
# Guide image provenance

| File | Source | Notes |
|---|---|---|
| ratfield-city-night.webp | Steam screenshot / trailer frame @MM:SS | Night city |
| ... | ... | ... |
```

- [ ] **Step 3: Verify files exist**

```bash
ls -la public/imgs/guides/
```

Expected: at least 3–5 stills covering map / race / customization / city. If Media Kit/Steam download fails, capture from trailer/MSX before continuing page tasks that need art. Pages that are text-first (multiplayer, performance) may proceed without stills.

- [ ] **Step 4: Commit**

```bash
git add public/imgs/guides
git commit -m "$(cat <<'EOF'
Add hosted Heatwarped guide stills with provenance notes.

EOF
)"
```

---

### Task 3: Rewrite `/system-requirements` as independent page

**Files:**
- Create: `src/components/heatwarped/pages/heatwarped-system-requirements-page.tsx`
- Modify: `src/routes/system-requirements.tsx`

- [ ] **Step 1: Write route TDK**

`src/routes/system-requirements.tsx`:

```tsx
import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/heatwarped-page-route';
import { HeatwarpedSystemRequirementsPage } from '@/components/heatwarped/pages/heatwarped-system-requirements-page';

export const Route = createFileRoute('/system-requirements')(
  heatwarpedPageRouteOptions({
    path: '/system-requirements',
    title: 'Heatwarped System Requirements - Min & Recommended Specs',
    description:
      'Heatwarped system requirements from Steam: minimum and recommended PC specs, Authentic vs Enhanced targets, storage size, and CPU notes for the demo.',
    Page: HeatwarpedSystemRequirementsPage,
  })
);
```

Count Title/Description characters; trim to ~50–60 / ~150–160 if over.

- [ ] **Step 2: Implement page with full Steam table**

Create `heatwarped-system-requirements-page.tsx` using the same local helpers pattern as `heatwarped-demo-page.tsx` (`ExternalSource`, `H2`, `Paragraph`, `PageIntro`, FAQ + JSON-LD).

**Required table data (Official — Steam):**

| | Minimum | Recommended |
|---|---|---|
| OS | Windows 10 64-bit | Windows 11 64-bit |
| CPU | AMD FX 8320 / Intel Core i5-3570K | Ryzen 5 5500 / i5-12400F |
| RAM | 4 GB | 8 GB |
| GPU | GTX 960 / Radeon HD 7970 | GTX 1070 / RX 5600 XT |
| DirectX | 11 | 11 |
| Storage | 1 GB | 1 GB |
| Target | 1080p / 30 FPS, Authentic | 1080p / 60 FPS, Enhanced |

Must include Steam note: game is **heavily processor-dependent**.

**Forbidden:** “Not officially published” for recommended/storage; default Vulkan/DirectX API as SEO lead.

**Sections (H2):** Minimum vs Recommended → Authentic vs Enhanced → CPU dependency → Can I run Heatwarped? → Try the Demo → FAQ → Sources  
`Last verified`: August 27, 2026  
Link internally to `/demo` and `/performance`.

Include SoftwareApplication or VideoGame JSON-LD with the published requirements.

Optional: one still only if it clearly shows settings/Authentic-Enhanced; otherwise table-first.

- [ ] **Step 3: Verify**

```bash
rg -n 'Not officially published' src/components/heatwarped/pages/heatwarped-system-requirements-page.tsx
rg -n '1 GB|Ryzen 5 5500|Authentic|Enhanced|processor-dependent' src/components/heatwarped/pages/heatwarped-system-requirements-page.tsx
```

Expected: first command empty; second hits present.

- [ ] **Step 4: Commit**

```bash
git add src/routes/system-requirements.tsx src/components/heatwarped/pages/heatwarped-system-requirements-page.tsx
git commit -m "$(cat <<'EOF'
Rewrite Heatwarped system requirements with full Steam Min/Rec specs.

EOF
)"
```

---

### Task 4: Rewrite `/gameplay` as independent page

**Files:**
- Create: `src/components/heatwarped/pages/heatwarped-gameplay-page.tsx`
- Modify: `src/routes/gameplay.tsx`

- [ ] **Step 1: Route TDK**

```tsx
title: 'Heatwarped Gameplay - Open-World Street Racing Guide',
description:
  'Heatwarped gameplay covers open-world arcade racing in Ratfield, race modes, PDA forum, respect, customization, nitrous, and online challenges status.',
```

- [ ] **Step 2: Implement page**

Required H2 flow (different from demo — no HowTo download block):

1. Official Reveal Trailer (`OfficialHeatwarpedMedia` variant)
2. What Kind of Game Is Heatwarped?
3. Ratfield Open World → link `/map`
4. Race Modes → official many modes + Demo Circuit/Sprint/Time Trial/Drift → link `/race-modes`
5. Driving and Nitrous → NOS as Current Demo verified
6. PDA Racing Forum → **Official** (Steam: meet racers via PDA racing forum, compete, build respect)
7. Build Respect → official concept; levels/unlocks unknown
8. Customization → link `/customization`
9. Online Play — **mandatory wording:**

```text
Online challenges against other players are advertised on the official Heatwarped website,
while Steam's current feature list still shows Single-player. Exact online modes remain undocumented.
```

Link `/multiplayer`.

10. Soundtrack / Atmosphere — exists as sell; no track list
11. Demo CTA → `/demo`
12. Sources

**Must not appear:**

- “Multiplayer is not confirmed”
- PDA listed only under “not confirmed”

Optional stills: driving + PDA if available from Task 2.

- [ ] **Step 3: Verify**

```bash
rg -n 'Multiplayer is not confirmed|not claim multiplayer' src/components/heatwarped/pages/heatwarped-gameplay-page.tsx
rg -n 'PDA racing forum|build respect|online challenges|City Circuit|NOS' src/components/heatwarped/pages/heatwarped-gameplay-page.tsx
```

Expected: first empty; second hits present.

- [ ] **Step 4: Commit**

```bash
git add src/routes/gameplay.tsx src/components/heatwarped/pages/heatwarped-gameplay-page.tsx
git commit -m "$(cat <<'EOF'
Rewrite Heatwarped gameplay with PDA, respect, Online, and Demo modes.

EOF
)"
```

---

### Task 5: Create `/race-modes`

**Files:**
- Create: `src/routes/race-modes.tsx`
- Create: `src/components/heatwarped/pages/heatwarped-race-modes-page.tsx`

- [ ] **Step 1: Route**

```tsx
import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/heatwarped-page-route';
import { HeatwarpedRaceModesPage } from '@/components/heatwarped/pages/heatwarped-race-modes-page';

export const Route = createFileRoute('/race-modes')(
  heatwarpedPageRouteOptions({
    path: '/race-modes',
    title: 'Heatwarped Race Modes - Circuit, Sprint, Drift & More',
    description:
      'Heatwarped race modes: official many-modes status plus Demo-verified City Circuit, Sprint, Time Trial, Drift, NOS, and route direction variants.',
    Page: HeatwarpedRaceModesPage,
  })
);
```

- [ ] **Step 2: Page content**

H1: `Heatwarped Race Modes`  
Sections:

- Official Race Mode Status (heatwarped.com: many race modes)
- City Circuit / City Sprint / City Time Trial / City Track Drift (each H3) — label **Current Demo verified** (Speedrun.com + hands-on)
- NOS vs No NOS; Forward vs Reverse — Demo verified categories
- Ranked races — hands-on observation; final progression unknown
- Will Heatwarped Have Drag Racing? — not confirmed; absence in Demo ≠ final absence
- Links: `/demo`, `/gameplay`

Schema: WebPage + ItemList of the four Demo modes.

Image: race HUD still with alt describing what is visible, not inventing mode rules.

- [ ] **Step 3: Smoke check**

```bash
test -f src/routes/race-modes.tsx && test -f src/components/heatwarped/pages/heatwarped-race-modes-page.tsx && echo OK
```

- [ ] **Step 4: Commit**

```bash
git add src/routes/race-modes.tsx src/components/heatwarped/pages/heatwarped-race-modes-page.tsx
git commit -m "$(cat <<'EOF'
Add Heatwarped race modes guide from official and Demo-verified sources.

EOF
)"
```

---

### Task 6: Create `/map`

**Files:**
- Create: `src/routes/map.tsx`
- Create: `src/components/heatwarped/pages/heatwarped-map-page.tsx`

- [ ] **Step 1: Route**

```tsx
path: '/map',
title: 'Heatwarped Map - Ratfield Open World Guide',
description:
  'Heatwarped map guide to Ratfield: official city and outskirts description, Demo PDA map notes, Ashtray observation, secrets, and what is still unknown.',
```

- [ ] **Step 2: Page content**

H1: `Heatwarped Map`  
Layers:

- **Official:** Ratfield; huge environments; sparkling city; wide outskirts; underground racing scene; secrets
- **Hands-on / Demo:** Ashtray neighborhood (The Drive); PDA map / messages / photo mode / find events; pickups; shop observed; only part of city in Demo
- **Unknown:** full size, district count, full street list, fast travel, full shop list

H2s: What is Ratfield? → City → Outskirts → Known Locations → PDA Map → Secrets and Pickups → Is the Full Map Available?  
Image: city night + optional PDA map frame.  
Links: `/gameplay`, `/demo`.

- [ ] **Step 3: Commit**

```bash
git add src/routes/map.tsx src/components/heatwarped/pages/heatwarped-map-page.tsx
git commit -m "$(cat <<'EOF'
Add Heatwarped Ratfield map guide with evidence layers.

EOF
)"
```

---

### Task 7: Create `/customization`

**Files:**
- Create: `src/routes/customization.tsx`
- Create: `src/components/heatwarped/pages/heatwarped-customization-page.tsx`

- [ ] **Step 1: Route**

```tsx
path: '/customization',
title: 'Heatwarped Customization - Body Kits, Vinyls & Parts',
description:
  'Heatwarped customization covers deep visual tuning, rare car parts, and Demo-observed body kits, vinyls, underglow, and performance upgrades.',
```

- [ ] **Step 2: Page content**

- Official: deep customization (Steam); rare car parts (official site)
- Demo observation: body kits, vinyls, underglow neon, performance upgrades; body kit name **Ab-Smug** only as attributed observation
- Do not invent full parts catalog
- Image: garage / body kit still
- Links: `/gameplay`, `/demo`  
Schema: WebPage

- [ ] **Step 3: Commit**

```bash
git add src/routes/customization.tsx src/components/heatwarped/pages/heatwarped-customization-page.tsx
git commit -m "$(cat <<'EOF'
Add Heatwarped customization guide for official and Demo features.

EOF
)"
```

---

### Task 8: Create `/multiplayer` and `/performance` (short)

**Files:**
- Create: `src/routes/multiplayer.tsx`, `src/components/heatwarped/pages/heatwarped-multiplayer-page.tsx`
- Create: `src/routes/performance.tsx`, `src/components/heatwarped/pages/heatwarped-performance-page.tsx`

- [ ] **Step 1: Multiplayer page (short, FAQ-heavy)**

```tsx
path: '/multiplayer',
title: 'Heatwarped Multiplayer - Online Challenges Status',
description:
  'Does Heatwarped have multiplayer? Official site advertises online challenges; Steam still lists Single-player. What is known and what remains undocumented.',
```

Lead answer in first paragraph (exact conflict). Known: online challenges vs other players (official site). Steam Features: Single-player. Unknown list: player count, matchmaking, co-op, PvP structure, lobby, online free roam, cross-play. FAQPage schema. No fake lobby screenshot.

- [ ] **Step 2: Performance page (skeleton)**

```tsx
path: '/performance',
title: 'Heatwarped Performance - Official Targets & PC Notes',
description:
  'Heatwarped performance targets from Steam: 1080p 30 FPS Authentic minimum, 1080p 60 FPS Enhanced recommended, plus CPU-dependent notes. No unofficial FPS table yet.',
```

Content: official targets only; heavily processor-dependent; state that community FPS table is not ready; link `/system-requirements` and `/demo`. **Do not** invent FPS numbers from YouTube.

- [ ] **Step 3: Commit**

```bash
git add src/routes/multiplayer.tsx src/routes/performance.tsx \
  src/components/heatwarped/pages/heatwarped-multiplayer-page.tsx \
  src/components/heatwarped/pages/heatwarped-performance-page.tsx
git commit -m "$(cat <<'EOF'
Add short Heatwarped multiplayer status and performance target pages.

EOF
)"
```

---

### Task 9: Enhance `/demo`, light-verify `/release-date`, split homepage, clean monolith

**Files:**
- Modify: `src/components/heatwarped/pages/heatwarped-demo-page.tsx`
- Modify: `src/components/heatwarped/pages/heatwarped-release-date-page.tsx`
- Create: `src/components/heatwarped/pages/heatwarped-home-page.tsx`
- Modify: `src/components/heatwarped/pages/home-page.tsx`
- Modify or delete: `heatwarped-content-pages.tsx`

- [ ] **Step 1: Demo — add What’s Included**

Insert after download/HowTo (keep HowTo above the fold):

- Single-player events (hands-on)
- City Circuit / Sprint / Time Trial / Drift (Demo verified) → link `/race-modes`
- Open-world city chunk; Ashtray observation → link `/map`
- One currently observed playable fictional car (do not name as Nissan)
- Customization preview → link `/customization`
- Nitrous / NOS
- Reviewer ~1 hour race content caveat (not “exactly one hour”)
- Optional Demo still image

- [ ] **Step 2: Release-date light verify**

Search for any “announced on June 12” style claim; ensure SteamDB first-seen wording is “first detected in Steam metadata”. Do not rewrite the whole page.

- [ ] **Step 3: Home page independent file**

Move `HeatwarpedHomePage` into `heatwarped-home-page.tsx`, then:

- Fix storage / recommended specs claims to match Steam (1 GB; recommended exists)
- Fix Online / Single-player wording to match Task 4
- Ensure Reveal Trailer / official media is present if missing
- Expand Core Guides cards: release-date, system-requirements, demo, gameplay, race-modes, map, customization, multiplayer, performance, cars (cars card OK — does not edit cars page)
- `Last verified` → August 27, 2026

`home-page.tsx`:

```tsx
export { HeatwarpedHomePage as HomePage } from './heatwarped-home-page';
```

- [ ] **Step 4: Delete dead monolith exports**

Remove unused dead exports from the old content monolith. If the file becomes empty of exports, delete it.

- [ ] **Step 5: Commit**

```bash
git add src/components/heatwarped/pages src/routes
git commit -m "$(cat <<'EOF'
Enhance demo and home guides; verify release-date SteamDB wording.

EOF
)"
```

---

### Task 10: Navigation, sitemap, llms, cross-links

**Files:**
- Modify: `src/blocks/heatwarped-header.tsx`
- Modify: `src/blocks/heatwarped-footer.tsx`
- Modify: `src/routes/sitemap[.]xml.ts`
- Modify: `src/routes/llms[.]txt.ts`
- Modify: `src/routes/llms-full[.]txt.ts`

- [ ] **Step 1: Header nav**

```tsx
const navItems = [
  { href: '/release-date', label: 'Release Date' },
  { href: '/demo', label: 'Demo' },
  { href: '/gameplay', label: 'Gameplay' },
  { href: '/race-modes', label: 'Race Modes' },
  { href: '/map', label: 'Map' },
  { href: '/customization', label: 'Customization' },
  { href: '/cars', label: 'Cars' },
  { href: '/system-requirements', label: 'PC Specs' },
];
```

If header overflows, keep primary links in header and put `multiplayer` + `performance` in footer only (still in sitemap).

- [ ] **Step 2: Footer Guides**

Add: Race Modes, Map, Customization, Multiplayer, Performance (keep Cars).

- [ ] **Step 3: Sitemap `STATIC_PATHS`**

```ts
const STATIC_PATHS = [
  '',
  '/release-date',
  '/system-requirements',
  '/demo',
  '/gameplay',
  '/race-modes',
  '/map',
  '/customization',
  '/multiplayer',
  '/performance',
  '/cars',
  '/about',
  '/contact',
  '/source-policy',
  '/privacy-policy',
  '/terms-of-service',
];
```

- [ ] **Step 4: llms.txt + llms-full.txt**

Add matching `STATIC_PAGES` entries for the five new paths; refresh system-requirements description to mention recommended specs.

- [ ] **Step 5: Verify discovery**

```bash
rg -n "race-modes|/map|customization|multiplayer|performance" \
  src/blocks/heatwarped-header.tsx \
  src/blocks/heatwarped-footer.tsx \
  'src/routes/sitemap[.]xml.ts' \
  'src/routes/llms[.]txt.ts' \
  'src/routes/llms-full[.]txt.ts'
```

- [ ] **Step 6: Commit**

```bash
git add src/blocks/heatwarped-header.tsx src/blocks/heatwarped-footer.tsx \
  'src/routes/sitemap[.]xml.ts' 'src/routes/llms[.]txt.ts' 'src/routes/llms-full[.]txt.ts'
git commit -m "$(cat <<'EOF'
Wire new Heatwarped guides into nav, sitemap, and llms indexes.

EOF
)"
```

---

### Task 11: Final acceptance

- [ ] **Step 1: Spec checklist commands**

```bash
rg -i 'miniwars' src

rg -n 'online challenges against other players' src/components/heatwarped/pages
rg -n 'PDA racing forum' src/components/heatwarped/pages/heatwarped-gameplay-page.tsx
rg -n 'Ryzen 5 5500|1 GB' src/components/heatwarped/pages/heatwarped-system-requirements-page.tsx
rg -n 'City Circuit' src/components/heatwarped/pages/heatwarped-race-modes-page.tsx

rg -n 'Not officially published' src/components/heatwarped/pages/heatwarped-system-requirements-page.tsx
rg -n 'Multiplayer is not confirmed' src/components/heatwarped/pages
rg -n 'exactly one hour' src/components/heatwarped/pages

git diff origin/main -- src/components/heatwarped/pages/heatwarped-cars-page.tsx

ls src/routes/{race-modes,map,customization,multiplayer,performance}.tsx

pnpm build
```

Expected:

- `rg -i miniwars src` empty
- correction strings present; forbidden strings absent
- cars page diff empty or only Task 1 import-path rename
- build success

- [ ] **Step 2: Manual spot-check**

```bash
pnpm dev
```

Open `/`, `/system-requirements`, `/gameplay`, `/demo`, `/race-modes`, `/map`, `/customization`, `/multiplayer`, `/performance`, `/cars`.  
Check one H1 each, images load from local/R2 paths, cars page looks unchanged.

- [ ] **Step 3: Commit leftover fixes only if needed**

---

## Self-review (plan vs spec)

| Spec requirement | Task |
|---|---|
| Full miniwars rename + i18n cleanup | Task 1 |
| Imagery from official/video, hosted | Task 2 |
| system-requirements rewrite | Task 3 |
| gameplay rewrite | Task 4 |
| race-modes / map / customization | Tasks 5–7 |
| multiplayer + performance | Task 8 |
| demo enhance + release-date verify + home | Task 9 |
| nav/sitemap/llms | Task 10 |
| cars content untouched | Tasks 1 (import only), 11 (diff check) |
| gen-seo-content TDK / H1 / intent | Tasks 3–9 |
| Evidence layers | Tasks 3–9 |
| `pnpm build` | Tasks 1, 11 |

Verification uses `rg` + `pnpm build` because this repo has no page-level unit test harness.
