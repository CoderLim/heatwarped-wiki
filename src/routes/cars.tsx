import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/heatwarped-page-route';
import { HeatwarpedCarsPage } from '@/components/heatwarped/pages/heatwarped-cars-page';

export const Route = createFileRoute('/cars')(
  heatwarpedPageRouteOptions({
    path: '/cars',
    title: 'Heatwarped Car List: All Confirmed & Rumored Cars (Aug 2026)',
    description:
      "Every confirmed and rumored car in Heatwarped — the NFS Underground-inspired open-world racer. The demo's one playable car (Muira), NPC traffic cars, and every vehicle spotted in the trailer. Updated regularly.",
    Page: HeatwarpedCarsPage,
  })
);
