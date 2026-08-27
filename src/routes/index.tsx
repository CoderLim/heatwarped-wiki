import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/miniwars/heatwarped-page-route';
import { HomePage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/')(
  heatwarpedPageRouteOptions({
    path: '/',
    title: 'Heatwarped — Free Demo Download & Release Date (PC)',
    description:
      'Download the Heatwarped demo on Steam. Open-world arcade street racing game. Check PC system requirements, gameplay details, and the latest release date updates.',
    Page: HomePage,
  })
);
