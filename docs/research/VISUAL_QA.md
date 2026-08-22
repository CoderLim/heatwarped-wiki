# Visual QA — Mini Wars Clone

Date: 2026-08-16
Clone URL: http://localhost:3001/
Original: https://miniwars.art/

## Desktop 1440

| Check                                   | Result |
| --------------------------------------- | ------ |
| Header sticky + signal strip            | Pass   |
| Logo + nav + search                     | Pass   |
| Hero H1 typography (Black Ops One 72px) | Pass   |
| CRUSH ember fill + NEIGHBORS stroke     | Pass   |
| CTAs btn-tactical / btn-ghost           | Pass   |
| Stats 21/7/7/8                          | Pass   |
| S-tier HUD panel                        | Pass   |
| Grid + scanline overlays                | Pass   |
| 10 main sections present                | Pass   |
| Footer + BuiltWithShipAny               | Pass   |

## Mobile 390

| Check                    | Result              |
| ------------------------ | ------------------- |
| Hamburger + search icons | Pass                |
| Stacked hero             | Pass                |
| Mobile menu toggle       | Implemented (click) |

## Known gaps / non-blockers

1. **Sub-pages not cloned** — `/buildings`, `/strategy`, etc. are links only; homepage scope per skill defaults.
2. **H1 line-height** — clone ~75.6px vs original computed 72px (both use ~`leading-[1.05]`); visually negligible.
3. **Google Fonts CDN** — used instead of self-hosted woff2 (npm registry proxy blocked `@fontsource/*`).
4. Floating island badge in screenshots is a browser extension overlay, not part of the site.

## Build

- `npx tsc --noEmit` — pass
- `pnpm build` — pass
