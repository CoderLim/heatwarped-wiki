import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/heatwarped-page-route';
import { HeatwarpedPerformancePage } from '@/components/heatwarped/pages/heatwarped-performance-page';

export const Route = createFileRoute('/performance')(
  heatwarpedPageRouteOptions({
    path: '/performance',
    title: 'Heatwarped Performance - Official Targets & PC Notes',
    description:
      'Heatwarped performance targets from Steam: 1080p 30 FPS Authentic minimum, 1080p 60 FPS Enhanced recommended, plus CPU-dependent notes. No unofficial FPS table yet.',
    Page: HeatwarpedPerformancePage,
  })
);
