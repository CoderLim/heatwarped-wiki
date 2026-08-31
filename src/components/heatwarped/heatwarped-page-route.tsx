import type { ComponentType } from 'react';

import { hreflangLinks, socialMetaTags } from '@/lib/seo-meta';
import { getLocale } from '@/paraglide/runtime.js';
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
      const canonical = hreflangLinks(path, locale).find(
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
              }),
            ]
          : [],
        links: hreflangLinks(path, locale),
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
