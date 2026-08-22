import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/page-route';
import { DemoPage } from '@/components/heatwarped/pages/demo-page';

export const Route = createFileRoute('/demo')(
  heatwarpedPageRouteOptions({
    path: '/demo',
    title: 'Heatwarped Demo: Download, Features, Cars & PC Guide',
    description:
      'Heatwarped demo guide covering the official Steam download, confirmed features, PC requirements, save questions and what still needs verification.',
    Page: DemoPage,
  })
);
