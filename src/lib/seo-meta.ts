import { envConfigs } from '@/config';
import { baseLocale, locales, localizeUrl } from '@/paraglide/runtime.js';

/** Default social card image (raster poster — better than SVG for crawlers). */
export const DEFAULT_OG_IMAGE = '/videos/heatwarped-hero-bg-poster.jpg';

/** Meta tags for authenticated / dashboard routes that should not be indexed. */
export const NOINDEX_META = [
  { name: 'robots', content: 'noindex, nofollow' },
] as const;

/** Canonical + hreflang alternates (including x-default) for a locale-free path. */
export function hreflangLinks(path: string, locale: string) {
  const urlFor = (loc: string) =>
    localizeUrl(`${envConfigs.app_url}${path === '/' ? '/' : path}`, {
      locale: loc as (typeof locales)[number],
    }).href;

  return [
    { rel: 'canonical' as const, href: urlFor(locale) },
    ...locales.map((loc) => ({
      rel: 'alternate' as const,
      hrefLang: loc,
      href: urlFor(loc),
    })),
    {
      rel: 'alternate' as const,
      hrefLang: 'x-default',
      href: urlFor(baseLocale),
    },
  ];
}

export function absoluteUrl(path: string): string {
  const base = envConfigs.app_url.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  return path.startsWith('http')
    ? path
    : `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function socialMetaTags({
  title,
  description,
  url,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
}) {
  const imageUrl = absoluteUrl(image);
  return [
    { property: 'og:type', content: type },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: imageUrl },
    { property: 'og:site_name', content: envConfigs.app_name },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl },
  ];
}
