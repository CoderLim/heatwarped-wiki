import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/heatwarped-page-route';
import { HeatwarpedMapPage } from '@/components/heatwarped/pages/heatwarped-map-page';

export const Route = createFileRoute('/map')(
  heatwarpedPageRouteOptions({
    path: '/map',
    title: 'Heatwarped Map - Ratfield Open World Guide',
    description:
      'Heatwarped map guide to Ratfield: official city and outskirts description, Demo PDA map notes, Ashtray observation, secrets, and what is still unknown.',
    Page: HeatwarpedMapPage,
  })
);
