import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/miniwars/heatwarped-page-route';
import { OfficialHeatwarpedMedia } from '@/components/miniwars/official-heatwarped-media';
import { HomePage } from '@/components/miniwars/pages';

function HeatwarpedHomeWithMedia() {
  return (
    <>
      <HomePage />
      <OfficialHeatwarpedMedia variant="home" />
    </>
  );
}

export const Route = createFileRoute('/')(
  heatwarpedPageRouteOptions({
    path: '/',
    title: 'Heatwarped Game - Open-World Street Racing | Demo, Release Date & PC Specs',
    description:
      'Heatwarped is an open-world street racing game set in the 2000s. Find the official Steam demo, current release status, PC requirements, and gameplay details.',
    Page: HeatwarpedHomeWithMedia,
  })
);
