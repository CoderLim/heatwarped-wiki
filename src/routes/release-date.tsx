import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/heatwarped-page-route';
import { HeatwarpedReleaseDatePage } from '@/components/heatwarped/pages/heatwarped-release-date-page';

export const Route = createFileRoute('/release-date')(
  heatwarpedPageRouteOptions({
    path: '/release-date',
    title: 'Heatwarped Release Date - TBA Status, Demo & Timeline',
    description:
      'Heatwarped release date is still TBA. Check the official Steam status, August 2026 reveal and demo timeline, FAQs, and where to follow future launch updates.',
    Page: HeatwarpedReleaseDatePage,
  })
);
