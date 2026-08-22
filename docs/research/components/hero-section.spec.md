# HeroSection Specification

## Overview

- **Target file:** `src/components/miniwars/hero-section.tsx`
- **Screenshot:** `docs/design-references/miniwars-desktop-1440-hero.png`
- **Interaction model:** static + hover on CTAs / S-tier rows

## Computed Styles (key)

- H1: Black Ops One, 72px desktop (text-7xl), tracking-wider, sand-100, leading 1.05
- "Crush": text-ember-500
- "neighbors": text-stroke-ember (−webkit-text-stroke 1px #e85d3a, transparent fill)
- CTAs: .btn-tactical / .btn-ghost
- Right panel: .hud-frame.clip-corner with ember corner brackets
- Scan line: animate-scan gradient line
- Background: grid-bg + ember blur orb + camo gradient

## Assets

- Lucide: Radio, ArrowRight, Building, Crosshair
- No raster images

## Text Content

See live extract in `docs/research/header-hero-text.json` heroText field.
