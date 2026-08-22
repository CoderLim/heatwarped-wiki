import type { ComponentType } from 'react';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { MiniWarsPageShell } from '@/components/miniwars/page-shell';

export type MiniWarsPageKey =
  | 'home'
  | 'buildings'
  | 'strategy'
  | 'systems'
  | 'tier_list'
  | 'guides'
  | 'codes'
  | 'news'
  | 'patch_notes'
  | 'faq'
  | 'search';

function pageCopy(key: MiniWarsPageKey, locale: ReturnType<typeof getLocale>) {
  const opt = { locale };
  switch (key) {
    case 'home':
      return {
        title: m['miniwars.home.title']({}, opt),
        description: m['miniwars.home.description']({}, opt),
      };
    case 'buildings':
      return {
        title: m['miniwars.buildings.title']({}, opt),
        description: m['miniwars.buildings.description']({}, opt),
      };
    case 'strategy':
      return {
        title: m['miniwars.strategy.title']({}, opt),
        description: m['miniwars.strategy.description']({}, opt),
      };
    case 'systems':
      return {
        title: m['miniwars.systems.title']({}, opt),
        description: m['miniwars.systems.description']({}, opt),
      };
    case 'tier_list':
      return {
        title: m['miniwars.tier_list.title']({}, opt),
        description: m['miniwars.tier_list.description']({}, opt),
      };
    case 'guides':
      return {
        title: m['miniwars.guides.title']({}, opt),
        description: m['miniwars.guides.description']({}, opt),
      };
    case 'codes':
      return {
        title: m['miniwars.codes.title']({}, opt),
        description: m['miniwars.codes.description']({}, opt),
      };
    case 'news':
      return {
        title: m['miniwars.news.title']({}, opt),
        description: m['miniwars.news.description']({}, opt),
      };
    case 'patch_notes':
      return {
        title: m['miniwars.patch_notes.title']({}, opt),
        description: m['miniwars.patch_notes.description']({}, opt),
      };
    case 'faq':
      return {
        title: m['miniwars.faq.title']({}, opt),
        description: m['miniwars.faq.description']({}, opt),
      };
    case 'search':
      return {
        title: m['miniwars.search.title']({}, opt),
        description: m['miniwars.search.description']({}, opt),
      };
  }
}

type MiniWarsPageDef = {
  path: string;
  key: MiniWarsPageKey;
  Page: ComponentType;
};

export function miniWarsPageRouteOptions({ path, key, Page }: MiniWarsPageDef) {
  return {
    loader: () => {
      const locale = getLocale();
      const copy = pageCopy(key, locale);
      return {
        locale,
        title: copy.title,
        description: copy.description,
      };
    },
    head: ({
      loaderData,
    }: {
      loaderData?: { locale: string; title: string; description: string };
    }) => {
      const locale = loaderData?.locale ?? 'en';
      const urlFor = (loc: string) =>
        localizeUrl(`${envConfigs.app_url}${path === '/' ? '/' : path}`, {
          locale: loc as 'en' | 'zh',
        }).href;
      return {
        meta: loaderData
          ? [
              { title: loaderData.title },
              { name: 'description', content: loaderData.description },
            ]
          : [],
        links: [
          { rel: 'canonical', href: urlFor(locale) },
          ...locales.map((loc) => ({
            rel: 'alternate',
            hrefLang: loc,
            href: urlFor(loc),
          })),
          ...(path === '/'
            ? [
                {
                  rel: 'alternate' as const,
                  hrefLang: 'x-default',
                  href: urlFor('en'),
                },
              ]
            : []),
        ],
      };
    },
    component: function MiniWarsRoutedPage() {
      return (
        <MiniWarsPageShell>
          <Page />
        </MiniWarsPageShell>
      );
    },
  };
}
