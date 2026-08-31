import type { ComponentType } from 'react';

import { getHeatwarpedPageSeo } from '@/lib/heatwarped-seo';
import {
  ENGLISH_ONLY_HREFLANG,
  hreflangLinks,
  socialMetaTags,
} from '@/lib/seo-meta';
import { baseLocale, getLocale } from '@/paraglide/runtime.js';
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
  const pageSeo = getHeatwarpedPageSeo(path);

  return {
    loader: () => ({ locale: getLocale(), title, description }),
    head: ({
      loaderData,
    }: {
      loaderData?: { locale: string; title: string; description: string };
    }) => {
      const locale = loaderData?.locale ?? baseLocale;
      const canonical = hreflangLinks(path, locale, ENGLISH_ONLY_HREFLANG).find(
        (link) => link.rel === 'canonical'
      )!.href;

      return {
        meta: loaderData
          ? [
              { title: loaderData.title },
              { name: 'description', content: loaderData.description },
              ...socialMetaTags({
                title: loaderData.title,
                description: loaderData.description,
                url: canonical,
                image: pageSeo.ogImage,
              }),
            ]
          : [],
        links: hreflangLinks(path, locale, ENGLISH_ONLY_HREFLANG),
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
