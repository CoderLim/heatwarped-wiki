import { envConfigs } from '@/config';
import { baseLocale, locales, localizeUrl } from '@/paraglide/runtime.js';

/** Default social card image — red tuner + night city (shows a car in SERP). */
export const DEFAULT_OG_IMAGE = '/imgs/guides/demo-open-world.webp';

/** Meta tags for authenticated / dashboard routes that should not be indexed. */
export const NOINDEX_META = [
  { name: 'robots', content: 'noindex, nofollow' },
] as const;

type LocaleCode = (typeof locales)[number];

export type HreflangOptions = {
  /** Locales with real translated content for this path. Defaults to all project locales. */
  locales?: readonly LocaleCode[];
};

/** Canonical + hreflang alternates (including x-default) for a locale-free path. */
export function hreflangLinks(
  path: string,
  locale: string,
  options?: HreflangOptions
) {
  const alternateLocales = options?.locales ?? locales;
  const canonicalLocale = alternateLocales.includes(locale as LocaleCode)
    ? (locale as LocaleCode)
    : baseLocale;

  const urlFor = (loc: string) =>
    localizeUrl(`${envConfigs.app_url}${path === '/' ? '/' : path}`, {
      locale: loc as LocaleCode,
    }).href;

  return [
    { rel: 'canonical' as const, href: urlFor(canonicalLocale) },
    ...alternateLocales.map((loc) => ({
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

/** hreflang for English-only pages (guides without zh translations). */
export const ENGLISH_ONLY_HREFLANG: HreflangOptions = {
  locales: [baseLocale],
};

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
