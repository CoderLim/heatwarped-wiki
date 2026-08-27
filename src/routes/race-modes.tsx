import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/heatwarped-page-route';
import { HeatwarpedRaceModesPage } from '@/components/heatwarped/pages/heatwarped-race-modes-page';

export const Route = createFileRoute('/race-modes')(
  heatwarpedPageRouteOptions({
    path: '/race-modes',
    title: 'Heatwarped Race Modes - Circuit, Sprint, Drift & More',
    description:
      'Heatwarped race modes: official many-modes status plus Demo-verified City Circuit, Sprint, Time Trial, Drift, NOS, and route direction variants.',
    Page: HeatwarpedRaceModesPage,
  })
);
