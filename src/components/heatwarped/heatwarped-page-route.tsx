import type { ComponentType } from 'react';

import { envConfigs } from '@/config';
import { socialMetaTags } from '@/lib/seo-meta';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { HeatwarpedPageShell } from '@/components/heatwarped/page-shell';

type HeatwarpedPageDef = {
  path: string;
  title: string;
  description: string;
  Page: ComponentType;
};

export function heatwarpedPageRouteOptions({
  path,
  title,
  description,
  Page,
}: HeatwarpedPageDef) {
  return {
    loader: () => ({ locale: getLocale(), title, description }),
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
      const canonical = urlFor(locale);

      return {
        meta: loaderData
          ? [
              { title: loaderData.title },
              { name: 'description', content: loaderData.description },
              ...socialMetaTags({
                title: loaderData.title,
                description: loaderData.description,
                url: canonical,
              }),
            ]
          : [],
        links: [
          { rel: 'canonical', href: canonical },
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
    component: function HeatwarpedRoutedPage() {
      return (
        <HeatwarpedPageShell>
          <Page />
        </HeatwarpedPageShell>
      );
    },
  };
}
