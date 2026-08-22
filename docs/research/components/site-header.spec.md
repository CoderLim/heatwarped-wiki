# MiniWarsHeader Specification

## Overview

- **Target file:** `src/components/miniwars/site-header.tsx`
- **Screenshot:** `docs/design-references/miniwars-desktop-1440-hero.png`, `miniwars-mobile-menu-open.png`
- **Interaction model:** sticky + click (mobile menu)

## DOM Structure

- Signal strip (mono 11px, camo-300)
- Main bar: logo (crosshair + Mini War / Combat Codex) | desktop nav | Search + hamburger
- Mobile panel: stacked nav links when open; X icon when open

## Computed Styles

- Header: sticky top-0 z-50, border-camo-800/70, bg-bunker-950/85, backdrop-blur-md, height ~90.5px
- No scroll-triggered style change
- Logo icon: group-hover:rotate-90 transition
- Signal dot: animate-blink bg-signal-500

## States & Behaviors

- Mobile menu: click Toggle menu → panel `lg:hidden border-t border-camo-900 bg-bunker-950/95`
- Icon swaps Menu ↔ X

## Responsive

- Desktop lg+: full nav
- <lg: hamburger + mobile panel
