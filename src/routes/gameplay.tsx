import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/heatwarped-page-route';
import { HeatwarpedGameplayPage } from '@/components/heatwarped/pages/heatwarped-gameplay-page';

export const Route = createFileRoute('/gameplay')(
  heatwarpedPageRouteOptions({
    path: '/gameplay',
    title: 'Heatwarped Gameplay - Open-World Street Racing Guide',
    description:
      'Heatwarped gameplay covers open-world arcade racing in Ratfield, race modes, PDA forum, respect, customization, nitrous, and online challenges status.',
    Page: HeatwarpedGameplayPage,
  })
);
