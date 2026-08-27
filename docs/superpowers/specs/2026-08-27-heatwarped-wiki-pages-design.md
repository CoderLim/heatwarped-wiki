# Heatwarped Wiki Pages — Design Spec

> Date: 2026-08-27  
> Status: Approved for planning  
> Source research: `/Users/coderlim/Downloads/heatwarped-wiki-page-research-plan.md` (authoritative for this round)  
> SEO format: `gen-seo-content` skill  
> Implementation approach: **A** — independent page files (same pattern as demo / release-date)

---

## 1. Goal

Use the research plan’s verified facts to:

1. Correct and deepen existing core wiki pages.
2. Create new pages that currently have enough evidence.
3. Remove all `miniwars` / `MiniWars` branding from runtime code and filenames (full rename).
4. Leave the **cars page content** unchanged (mechanical import renames only).

Principle from research:

> Prefer clear evidence layers over long unverified copy. Official facts, Demo-verified facts, hands-on observations, and unknowns must stay distinct.

---

## 2. Scope

### 2.1 Enhance (existing)

| URL | Action | Notes |
|---|---|---|
| `/` | Correct + expand guide links | Storage/recommended specs, Online wording, Reveal Trailer; Core Guides cards for new pages; do not invent car roster |
| `/release-date/` | Light verify | Already mature; fix SteamDB “first detected ≠ announced” wording if needed |
| `/system-requirements/` | Rewrite as independent file | Full Steam Min + Rec + 1 GB storage; Authentic/Enhanced; CPU-dependent; remove “recommended not published” |
| `/demo/` | Incremental enhance | What’s Included: 4 race modes, NOS, one fictional car, map/customization observations; link new pages |
| `/gameplay/` | Rewrite as independent file | PDA, respect, Online, NOS, Demo race modes; remove “Multiplayer not confirmed” |

### 2.2 Create (new)

| URL | Role |
|---|---|
| `/race-modes/` | Official “many race modes” + Demo-verified Circuit/Sprint/Time Trial/Drift + NOS / Forward-Reverse |
| `/map/` | Ratfield official description + Demo observation layers |
| `/customization/` | Deep customization / rare parts + Demo subsystems |
| `/multiplayer/` | Short: official site Online vs Steam Single-player |
| `/performance/` | Light skeleton: official targets + CPU-dependent only; no invented FPS table |

### 2.3 Explicitly out of scope

- Do **not** change cars page content, SEO, or structure (`heatwarped-cars-page.tsx` body untouched).
- Do **not** create `/soundtrack/`, `/platforms/`, `/trailer/`.
- Do **not** treat third-party car identity guesses as official roster.
- Do **not** invent release dates, full map size, online mode details, soundtrack track lists, or FPS numbers from video “feel”.

### 2.4 Full `miniwars` removal (option A)

Runtime code, filenames, symbols, and comments must not contain `miniwars` / `MiniWars`. Rename to `heatwarped` / `Heatwarped`.

| Current | Target |
|---|---|
| `src/components/miniwars/` | `src/components/heatwarped/` |
| `MiniWarsPageShell` / `MiniWarsHeader` / `MiniWarsFooter` / related types | `HeatwarpedPageShell` / `HeatwarpedHeader` / `HeatwarpedFooter` / … |
| `src/blocks/miniwars-header.tsx` | `src/blocks/heatwarped-header.tsx` |
| `src/blocks/miniwars-footer.tsx` | `src/blocks/heatwarped-footer.tsx` |
| `src/styles/miniwars-fonts.css` | `src/styles/heatwarped-fonts.css` (+ `globals.css` import) |
| `src/types/miniwars.ts` | `src/types/heatwarped.ts` (if still referenced) |
| `@/components/miniwars/...` imports | `@/components/heatwarped/...` |

**Cars exception:** content zero-diff; only import path / symbol updates required by the rename.

**i18n:** `messages/en.json` + `messages/zh.json` — remove unused `miniwars.*` / “Mini Wars” strings; if leftover clone routes still reference them, rename or disconnect then delete so the live site never surfaces Mini Wars branding.

**Research docs:** rename or relocate `docs/research/*miniwars*` so the repo does not keep advertising that brand in filenames; historical note allowed inside files if needed.

**Acceptance:** `rg -i miniwars src` → 0 hits.

---

## 3. Evidence layers (writing rules)

| Layer | Visible label | Sources | Allowed use |
|---|---|---|---|
| L1 | **Official** | Steam, heatwarped.com, official Reveal Trailer, official X | Primary facts |
| L2 | **Current Demo verified** | Speedrun.com categories; multi-source Demo UI facts | Mark as current Demo; do not extrapolate to final game |
| L3 | **Hands-on observation** | The Drive, Out of Games, MSX, etc. | Attribute; never list as Official |
| L4 | **Unknown / unconfirmed** | — | State as unknown; do not invent |

### Mandatory corrections vs current site

- **Online:** Do not write “Multiplayer is not confirmed.” Write: official site advertises online challenges against other players; Steam Features still show Single-player; exact online structure undocumented.
- **PDA / Respect:** Official (Steam). Do not invent levels or formulas.
- **Race modes:** Official = many race modes. Specific Circuit / Sprint / Time Trial / Drift = Current Demo verified.
- **Cars (cross-page mentions):** “one currently observed playable fictional car” OK. Do not claim Nissan 240SX / Lexus SC as official. Visual resemblance only with hands-on attribution.
- **Playtime:** Do not write “exactly one hour.” Reviewer-reported ~1 hour of race content, varies.
- **SteamDB dates:** “first detected in Steam metadata” ≠ “officially announced.”
- **Graphics API:** Do not SEO-lead with Vulkan/DirectX as default API until re-verified on live Steam copy.

### Shared page chrome

Each guide page (home may be slightly lighter):

1. Exactly one H1 containing the full word `Heatwarped`.
2. Visible **Last verified** — for pages updated this round: `August 27, 2026` / `dateModified: 2026-08-27`.
3. Source box + link to Source policy.
4. Unique Title / Description per SEO rules below.
5. Schema per section 5.
6. Fast-changing pages keep a short visible changelog where already patterned (release-date, demo, sysreq, multiplayer).

---

## 4. SEO content format (`gen-seo-content`)

| Rule | Application |
|---|---|
| One H1 per page; keyword in H1 | Required |
| H2/H3 carry related / long-tail keywords naturally | No “Chapter 1” style headings |
| Title ~50–60 characters; primary keyword first | Unique per page |
| Description ~150–160 characters | Keyword + value + CTA; no stuffing |
| First paragraph answers search intent | Information / navigational / hybrid as appropriate |
| 哥飞：分门别类罗列 | Official / Demo-verified / Observation / Unknown blocks |
| Anti-templating | Different section order, FAQs, and CTAs per intent — no keyword-swap clones |
| Internal links 2–5 descriptive anchors | Cross-link related guides |
| Schema JSON-LD | Continue existing in-page pattern + types in §5 |
| Forbidden | Keyword stuffing, AI filler openings, empty H2s, unverifiable claims |

Site shell (canonical, OG, robots) remains via the page-route helper after rename.

---

## 5. Page content skeletons

### `/` — enhance (navigational)

- H1: Heatwarped  
- Hero: one-line positioning + Steam/Demo CTAs + official trailer  
- Game at a Glance table  
- What is Heatwarped  
- Key Features (correct Online wording)  
- Core Guides cards (include new pages; keep existing cars nav entry if present — do not edit cars page)  
- Sources  
- Schema: WebSite (+ VideoGame if already present)

### `/system-requirements/` — independent rewrite (informational)

- Title direction: `Heatwarped System Requirements - Min & Recommended Specs`  
- Answer-first intro → full Min vs Rec table → Authentic vs Enhanced → heavily processor-dependent → Can I run? (no fake benchmarks) → Demo CTA → FAQ → Sources  
- Align with Steam: complete recommended tier + Storage 1 GB  
- Schema: SoftwareApplication / VideoGame-related specs

### `/demo/` — incremental (hybrid)

- Keep download CTA + HowTo above the fold  
- Add What’s Included (4 modes / NOS / fictional car / map / customization with layers)  
- Links to `/race-modes`, `/map`, `/customization`  
- Keep HowTo + FAQPage + WebPage schemas

### `/gameplay/` — independent rewrite (informational)

- Trailer → What kind of game → Ratfield (→ map) → Race modes (→ race-modes) → Driving & NOS → PDA forum → Build respect → Customization (→ customization) → Online (correct wording → multiplayer) → Soundtrack atmosphere (no track list) → Demo CTA  
- Remove outdated “not confirmed” cards for PDA / Multiplayer  
- Schema: WebPage (+ FAQPage if FAQ block added)

### `/race-modes/` — new

- Title: `Heatwarped Race Modes - Circuit, Sprint, Drift & More`  
- Official status → four modes → NOS / Forward-Reverse → Ranked (observation) → Drag? unconfirmed → links to demo/gameplay  
- Schema: WebPage + ItemList

### `/map/` — new

- Title: `Heatwarped Map - Ratfield Open World Guide`  
- What is Ratfield → City / Outskirts → Known locations (Ashtray = observation) → PDA map → Secrets/pickups → Full map available? No  
- Schema: WebPage

### `/customization/` — new

- Title: `Heatwarped Customization - Body Kits, Vinyls & Parts`  
- Official overview → Visual → Performance → Rare parts → Demo scope → Known names only when verified (e.g. Ab-Smug as observation)  
- Schema: WebPage

### `/multiplayer/` — new, short

- Title: `Heatwarped Multiplayer - Online Challenges Status`  
- Direct answer to the official-site vs Steam conflict → known / unknown lists → FAQ → link gameplay  
- Do not pad for word count  
- Schema: WebPage + FAQPage

### `/performance/` — new, light skeleton

- Title: `Heatwarped Performance - Official Targets & PC Notes`  
- Official 1080p/30 Authentic + 1080p/60 Enhanced → CPU-dependent note → “community FPS table not ready” → links to sysreq + demo  
- No guessed FPS from YouTube feel  
- Schema: WebPage

### `/release-date/` — light verify

- Keep structure; verify SteamDB wording and any Online-related FAQ if present

---

## 6. Engineering

### 6.1 File / route pattern

New and rewritten pages:

- `src/routes/<slug>.tsx` + page-route helper `{ path, title, description, Page }`
- `src/components/heatwarped/pages/heatwarped-<slug>-page.tsx` (after rename)

Move `system-requirements` and `gameplay` out of the monolith. Delete dead duplicate release-date/demo exports from the old content file if still present.

### 6.2 Discovery surfaces to update

1. `heatwarped-header` nav  
2. `heatwarped-footer` Guides list  
3. `sitemap.xml` `STATIC_PATHS`  
4. `llms.txt` / `llms-full.txt`  
5. Home Core Guides cards  
6. Cross-links between related pages  

Existing cars nav links may remain; cars page body unchanged.

### 6.3 Schema summary

| Page | Schema |
|---|---|
| `/` | WebSite |
| `/release-date/` | WebPage + FAQPage |
| `/system-requirements/` | SoftwareApplication / VideoGame |
| `/demo/` | HowTo + FAQPage + WebPage |
| `/gameplay/` | WebPage (± FAQPage) |
| `/race-modes/` | WebPage + ItemList |
| `/map/` | WebPage |
| `/customization/` | WebPage |
| `/multiplayer/` | WebPage + FAQPage |
| `/performance/` | WebPage |

### 6.4 Implementation order

1. Full `miniwars` → `heatwarped` rename (mechanical + i18n cleanup).  
2. Rewrite `system-requirements` as independent page.  
3. Rewrite `gameplay` as independent page.  
4. Create `race-modes` → `map` → `customization`.  
5. Create short `multiplayer` + light `performance`.  
6. Enhance `demo` + light-verify `release-date`.  
7. Enhance home + nav / sitemap / llms / cross-links.  
8. `pnpm build` verification.

### 6.5 Acceptance criteria

- Mandatory correction sentences landed (Online, PDA, Respect, full recommended specs, Demo four modes with layers).  
- Five new pages reachable and in sitemap.  
- Cars content file has no substantive diff (imports only).  
- No invented FPS / car roster / release predictions.  
- `rg -i miniwars src` is empty.  
- Titles/Descriptions within SEO length targets; one H1 per page; intent answered in first paragraph.  
- `pnpm build` passes.

---

## 7. Non-goals / future

- `/performance/` community hardware table waits for 5–10 sourced FPS rows.  
- `/cars/` content expansion waits for in-game official names (page already exists; not edited this round).  
- `/soundtrack/` waits for official track list.  
- Shared UI primitive extraction (`H2`, `SourceBox`, etc.) deferred; duplicate local helpers OK to match demo/release-date.

---

## 8. Decisions log

| Decision | Choice |
|---|---|
| Scope tier | **C** — P0 enhance + P1 pages + multiplayer + light performance |
| Implementation style | **A** — independent page files |
| SEO format | `gen-seo-content` skill |
| MiniWars branding | **A** — full rename/removal |
| Cars | Do not touch content |
| Research plan | Authoritative for facts this round |
