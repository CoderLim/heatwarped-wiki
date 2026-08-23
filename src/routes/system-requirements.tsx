import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/miniwars/heatwarped-page-route';
import { HeatwarpedSystemRequirementsPage } from '@/components/miniwars/pages/heatwarped-content-pages';

export const Route = createFileRoute('/system-requirements')(
  heatwarpedPageRouteOptions({
    path: '/system-requirements',
    title: 'Heatwarped System Requirements - Minimum PC Specs Guide',
    description:
      'Heatwarped system requirements on Steam list Windows 10 64-bit, AMD FX 8320 or Intel i5-3570K, 4 GB RAM, and a DirectX 11-capable GPU for the PC demo.',
    Page: HeatwarpedSystemRequirementsPage,
  })
);
