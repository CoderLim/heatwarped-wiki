import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/page-route';
import { HomePage } from '@/components/heatwarped/pages/home-page';

export const Route = createFileRoute('/')(
  heatwarpedPageRouteOptions({
    path: '/',
    title: 'Heatwarped Wiki: Cars, Demo, Release Date & Guides',
    description:
      'Heatwarped Wiki covering the official demo, cars, customization, release date, PC requirements, Ratfield and verified guides with first-party sources.',
    Page: HomePage,
  })
);
