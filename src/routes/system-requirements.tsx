import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/heatwarped-page-route';
import { HeatwarpedSystemRequirementsPage } from '@/components/heatwarped/pages/heatwarped-system-requirements-page';

export const Route = createFileRoute('/system-requirements')(
  heatwarpedPageRouteOptions({
    path: '/system-requirements',
    title: 'Heatwarped System Requirements - Min & Recommended Specs',
    description:
      'Heatwarped system requirements from Steam: minimum and recommended PC specs, Authentic vs Enhanced targets, storage size, and CPU notes for the demo.',
    Page: HeatwarpedSystemRequirementsPage,
  })
);
