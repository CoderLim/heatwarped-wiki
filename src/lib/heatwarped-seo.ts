/** SEO metadata for English-only Heatwarped guide routes. */
export const HEATWARPED_GUIDE_PATHS = [
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
] as const;

/** Static MDX pages with full en + zh translations. */
export const LOCALIZED_STATIC_PATHS = [
  '/about',
  '/contact',
  '/source-policy',
  '/privacy-policy',
  '/terms-of-service',
] as const;

type HeatwarpedPageSeo = {
  lastModified: string;
  ogImage?: string;
};

/** Per-path OG image + lastmod for guides (keyed by locale-free path). */
export const HEATWARPED_PAGE_SEO: Record<string, HeatwarpedPageSeo> = {
  '/': { lastModified: '2026-08-27' },
  '/release-date': { lastModified: '2026-08-26' },
  '/system-requirements': { lastModified: '2026-08-27' },
  '/demo': {
    lastModified: '2026-08-27',
    ogImage: '/imgs/guides/demo-open-world.webp',
  },
  '/gameplay': {
    lastModified: '2026-08-27',
    ogImage: '/imgs/guides/ratfield-city-night.webp',
  },
  '/race-modes': {
    lastModified: '2026-08-27',
    ogImage: '/imgs/guides/race-hud-circuit.webp',
  },
  '/map': {
    lastModified: '2026-08-27',
    ogImage: '/imgs/guides/pda-map.webp',
  },
  '/customization': {
    lastModified: '2026-08-27',
    ogImage: '/imgs/guides/garage-body-kit.webp',
  },
  '/multiplayer': { lastModified: '2026-08-27' },
  '/performance': { lastModified: '2026-08-27' },
  '/cars': {
    lastModified: '2026-08-27',
    ogImage: '/imgs/cars/muira-garage.jpg',
  },
};

export function heatwarpedPathKey(path: string): string {
  if (!path || path === '/') return '/';
  return path.replace(/\/+$/, '');
}

export function getHeatwarpedPageSeo(path: string): HeatwarpedPageSeo {
  const key = heatwarpedPathKey(path);
  return (
    HEATWARPED_PAGE_SEO[key] ?? {
      lastModified: '2026-08-27',
    }
  );
}
