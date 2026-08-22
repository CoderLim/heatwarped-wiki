import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/page-route';
import { SystemRequirementsPage } from '@/components/heatwarped/pages/system-requirements-page';

export const Route = createFileRoute('/system-requirements')(
  heatwarpedPageRouteOptions({
    path: '/system-requirements',
    title: 'Heatwarped System Requirements: Minimum & Recommended PC Specs',
    description:
      'Official Heatwarped system requirements for 1080p 30 FPS and 1080p 60 FPS, including CPU, GPU, RAM, storage and DirectX requirements.',
    Page: SystemRequirementsPage,
  })
);
