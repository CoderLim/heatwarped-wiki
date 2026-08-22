# Mini Wars (miniwars.art) — Page Topology

Target: `https://miniwars.art/` (homepage only)
Viewport reference: desktop 1440×900, tablet 768, mobile 390
Page scroll height ≈ 5554px (desktop)

## Overall Layout

```
body.min-h-screen.flex.flex-col
├── div.fixed.inset-0.grid-bg.opacity-40          (z-0, pointer-events-none)
├── div.fixed.inset-0.scanlines.opacity-30       (z-0, pointer-events-none)
├── header.sticky.top-0.z-50                     (sticky overlay)
├── main.relative.z-10.flex-1
│   ├── [0] Hero
│   ├── [1] What Is Mini Wars
│   ├── [2] Choose Your Doctrine
│   ├── [3] Top Strategies (+ nested: Patch Notes strip, Must-Build Picks)
│   ├── [4] Buildings You Cannot Skip
│   ├── [5] Featured Strategies
│   ├── [6] Latest Mini Wars News
│   ├── [7] Latest Guides
│   ├── [8] Meta Guide + At a Glance
│   └── [9] New to Mini Wars (CTA)
└── footer.relative.z-10
```

No Lenis / Locomotive Scroll. Native scroll.
No `<img>` / `<video>` on homepage — visual atmosphere is CSS (grid, scanlines, radial gradients) + Lucide SVG icons.

## Sections (top → bottom)

| #   | Name                      | Interaction                  | Approx height | Notes                                      |
| --- | ------------------------- | ---------------------------- | ------------- | ------------------------------------------ |
| —   | Signal strip + Header     | sticky; mobile click menu    | ~91px         | Utility bar + nav; hamburger `<lg`         |
| 0   | Hero                      | static + hover on cards/CTAs | ~730px        | H1 with ember fill + outline stroke word   |
| 1   | What Is Mini Wars         | static + link hover          | ~474px        | Intro copy + system chips + quick links    |
| 2   | Choose Your Doctrine      | click → route; hover         | ~428px        | 8 doctrine cards grid                      |
| 3   | Top Strategies            | static + hover               | ~551px        | Strategy cards + nested patch + must-build |
| 4   | Buildings You Cannot Skip | static + hover               | ~460px        | 3 building feature cards                   |
| 5   | Featured Strategies       | static + hover               | ~488px        | 3 strategy deep cards                      |
| 6   | Latest News               | static + hover               | ~439px        | 3 news cards                               |
| 7   | Latest Guides             | static + hover               | ~438px        | 3 guide cards                              |
| 8   | Meta Guide + At a Glance  | static                       | ~678px        | Long SEO copy + FAQ-style glance           |
| 9   | New to Mini Wars CTA      | static + CTA hover           | ~370px        | Closing CTA                                |
| —   | Footer                    | link hover                   | ~313px        | Codex / Players columns + disclaimer       |

## Fixed / Sticky Layers

1. **Grid overlay** — `position: fixed; inset: 0; z-index: 0; opacity: 0.4`
2. **Scanlines overlay** — `position: fixed; inset: 0; z-index: 0; opacity: 0.3`
3. **Header** — `position: sticky; top: 0; z-index: 50; backdrop-filter: blur(12px)`
4. **Main/Footer** — `z-index: 10` flow content

## Dependencies

- Header overlays all sections (sticky).
- Global overlays sit behind content.
- Mobile menu is click-driven overlay/panel from header (not scroll-driven).

## Screenshots

- `docs/design-references/miniwars-desktop-1440-full.png`
- `docs/design-references/miniwars-desktop-1440-hero.png`
- `docs/design-references/miniwars-mobile-390-full.png`
- `docs/design-references/miniwars-mobile-390-hero.png`
- `docs/design-references/miniwars-tablet-768-hero.png`
- `docs/design-references/miniwars-mobile-menu-open.png`
