import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/miniwars/heatwarped-page-route';
import { HomePage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/')(
  heatwarpedPageRouteOptions({
    path: '/',
    title: 'Heatwarped - Open-World Street Racing Game, Demo & Info',
    description:
      'Heatwarped is an open-world street racing game set in the 2000s. Find the official Steam demo, current release status, PC requirements, and gameplay details.',
    Page: HomePage,
  })
);
