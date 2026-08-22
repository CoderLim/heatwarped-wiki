import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/page-route';
import { CarsPage } from '@/components/heatwarped/pages/cars-page';

export const Route = createFileRoute('/cars')(
  heatwarpedPageRouteOptions({
    path: '/cars',
    title: 'Heatwarped Cars: Car List, Customization & Roster Status',
    description:
      'Heatwarped cars guide with the verified car roster status, customization, rare parts, demo verification notes and source-backed answers.',
    Page: CarsPage,
  })
);
