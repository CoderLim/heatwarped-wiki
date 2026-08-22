import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { HeatwarpedHome } from '@/blocks/heatwarped-home';

export const Route = createFileRoute('/')({
  loader: () => {
    const locale = getLocale();
    return {
      locale,
      title: m['heatwarped.seo.title']({}, { locale }),
      description: m['heatwarped.seo.description']({}, { locale }),
    };
  },
  head: ({ loaderData }) => {
    const locale = loaderData?.locale ?? 'en';
    const canonical = localizeUrl(`${envConfigs.app_url}/`, {
      locale: locale as 'en' | 'zh',
    }).href;
    return {
      meta: loaderData
        ? [
            { title: loaderData.title },
            { name: 'description', content: loaderData.description },
            { property: 'og:title', content: loaderData.title },
            { property: 'og:description', content: loaderData.description },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: canonical },
            { name: 'twitter:card', content: 'summary_large_image' },
          ]
        : [],
      links: [
        { rel: 'canonical', href: canonical },
        ...locales.map((loc) => ({
          rel: 'alternate',
          hrefLang: loc,
          href: localizeUrl(`${envConfigs.app_url}/`, { locale: loc }).href,
        })),
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: localizeUrl(`${envConfigs.app_url}/`, { locale: 'en' }).href,
        },
      ],
    };
  },
  component: HeatwarpedHome,
});
