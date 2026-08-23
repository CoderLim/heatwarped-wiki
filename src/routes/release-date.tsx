import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/miniwars/heatwarped-page-route';
import { OfficialHeatwarpedMedia } from '@/components/miniwars/official-heatwarped-media';
import { HeatwarpedReleaseDatePage } from '@/components/miniwars/pages/heatwarped-content-pages';

function HeatwarpedReleaseDateWithMedia() {
  return (
    <>
      <HeatwarpedReleaseDatePage />
      <OfficialHeatwarpedMedia variant="release-date" />
    </>
  );
}

export const Route = createFileRoute('/release-date')(
  heatwarpedPageRouteOptions({
    path: '/release-date',
    title: 'Heatwarped Release Date - Latest Status & Demo Info',
    description:
      'Heatwarped release date is still TBA. See the current official status, free Steam demo availability, reveal timeline, and how to follow future launch updates.',
    Page: HeatwarpedReleaseDateWithMedia,
  })
);
