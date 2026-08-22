import type { ComponentType } from 'react';

import { envConfigs } from '@/config';
import { HeatwarpedShell } from '@/components/heatwarped/site';

type PageDef = {
  path: string;
  title: string;
  description: string;
  Page: ComponentType;
};

export function heatwarpedPageRouteOptions({ path, title, description, Page }: PageDef) {
  return {
    head: () => {
      const base = envConfigs.app_url || 'http://localhost:3000';
      const canonical = `${base.replace(/\/$/, '')}${path === '/' ? '/' : path}`;
      return {
        meta: [
          { title },
          { name: 'description', content: description },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { property: 'og:type', content: path === '/' ? 'website' : 'article' },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
        ],
        links: [{ rel: 'canonical', href: canonical }],
      };
    },
    component: function HeatwarpedRoutedPage() {
      return (
        <HeatwarpedShell>
          <Page />
        </HeatwarpedShell>
      );
    },
  };
}
