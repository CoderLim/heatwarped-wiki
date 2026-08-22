# Mini Wars — Behaviors Bible

Source: live interaction sweep on https://miniwars.art/ (2026-08-15)

## Global

| Behavior                    | Finding                                             |
| --------------------------- | --------------------------------------------------- |
| Smooth scroll library       | **None** (no Lenis / Locomotive)                    |
| Page scroll-snap            | **None**                                            |
| Global overlays             | Fixed `grid-bg` + `scanlines` always on             |
| Scroll animations into view | **None observed** — sections are statically visible |
| Dark/light theme toggle     | **None** — always dark tactical theme               |

## Header

- **INTERACTION MODEL:** sticky overlay + click (mobile menu)
- Position sticky `top: 0`, `z-index: 50`
- Background `rgba(10, 12, 10, 0.85)` + `backdrop-filter: blur(12px)` always
- **Scroll state:** No visual change between scrollY=0 and scrollY=600 (same height ~90.5px, same border/bg)
- Desktop (`lg+`): horizontal nav links visible; Search button + no hamburger
- Mobile (`<lg`): Search icon link + **Toggle menu** button
- Logo crosshair icon: `transition-transform` + `group-hover:rotate-90`
- Live signal radio icon: `animate-blink` (1.6s step-end infinite)

### Mobile menu

- **Trigger:** click `button[aria-label="Toggle menu"]`
- **Effect:** reveals full nav link list (Buildings, Strategy, Systems, Tier List, Guides, Codes, News, Patch, FAQ)
- Screenshot: `docs/design-references/miniwars-mobile-menu-open.png`

## Hero

- **INTERACTION MODEL:** static layout + hover on CTAs and S-tier rows
- Primary CTA `.btn-tactical` — ember filled button
- Secondary CTA `.btn-ghost` — camo bordered transparent
- S-tier meta card rows: hover shifts crosshair `text-camo-500` → `text-ember-500`
- Radio / live indicators use `animate-blink`

## Cards / links (all content sections)

- **INTERACTION MODEL:** click navigates to internal routes; hover border/text color shifts toward ember/camo
- Common hover patterns from CSS:
  - `hover:border-ember-500` / `hover:border-ember-500/60`
  - `hover:text-ember-300` / `hover:text-ember-400`
  - `hover:bg-bunker-900/40` / `hover:bg-bunker-900/70`
  - `hover:text-sand-100`
- No tabbed content on homepage
- No carousels / auto-play

## Keyframe animations

```css
@keyframes blink {
  0%,
  60% {
    opacity: 1;
  }
  70%,
  100% {
    opacity: 0.2;
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@keyframes scan {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
```

Utility: `.animate-blink { animation: blink 1.6s step-end infinite; }`

## Responsive breakpoints (observed)

| Width | Layout notes                                                                     |
| ----- | -------------------------------------------------------------------------------- |
| 1440  | Full nav; hero 2-column (copy left, S-tier panel right); multi-column card grids |
| 768   | Nav collapses toward mobile pattern; grids tighten                               |
| 390   | Hamburger menu; stacked hero; single-column cards; Search icon only              |

Approx nav collapse: Tailwind `lg` (~1024px) — desktop nav is `hidden lg:flex`.

## Click sweep summary

All primary interactive elements are **links** to wiki routes (`/buildings`, `/strategy`, `/tier-list`, `/guides`, `/codes`, `/news`, `/patch-notes`, `/faq`, `/search`, and detail pages). Homepage itself has no modals, tabs, or in-page state machines beyond the mobile nav toggle.
