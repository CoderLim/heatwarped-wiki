import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/page-route';
import { ReleaseDatePage } from '@/components/heatwarped/pages/release-date-page';

export const Route = createFileRoute('/release-date')(
  heatwarpedPageRouteOptions({
    path: '/release-date',
    title: 'Heatwarped Release Date: Latest Official Status',
    description:
      'Latest official Heatwarped release date status, confirmed platform information, demo availability and a source-first launch tracker with no guessed dates.',
    Page: ReleaseDatePage,
  })
);
