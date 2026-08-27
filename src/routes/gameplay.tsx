import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/heatwarped-page-route';
import { HeatwarpedGameplayPage } from '@/components/heatwarped/pages/heatwarped-content-pages';

export const Route = createFileRoute('/gameplay')(
  heatwarpedPageRouteOptions({
    path: '/gameplay',
    title: 'Heatwarped Gameplay - Open-World Street Racing Guide',
    description:
      'Heatwarped gameplay centers on open-world street racing in a 2000s setting. Learn what is officially confirmed about driving, customization, and the demo.',
    Page: HeatwarpedGameplayPage,
  })
);
