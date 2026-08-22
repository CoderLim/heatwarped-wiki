import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/miniwars/heatwarped-page-route';
import { HeatwarpedReleaseDatePage } from '@/components/miniwars/pages/heatwarped-content-pages';

export const Route = createFileRoute('/release-date')(
  heatwarpedPageRouteOptions({
    path: '/release-date',
    title: 'Heatwarped Release Date - Latest Status & Demo Info',
    description:
      'Heatwarped release date is still TBA. See the current official status, free Steam demo availability, reveal timeline, and how to follow future launch updates.',
    Page: HeatwarpedReleaseDatePage,
  })
);
