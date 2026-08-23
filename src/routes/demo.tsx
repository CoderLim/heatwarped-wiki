import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/miniwars/heatwarped-page-route';
import { OfficialHeatwarpedMedia } from '@/components/miniwars/official-heatwarped-media';
import { HeatwarpedDemoPage } from '@/components/miniwars/pages/heatwarped-content-pages';

function HeatwarpedDemoWithMedia() {
  return (
    <>
      <HeatwarpedDemoPage />
      <OfficialHeatwarpedMedia variant="demo" />
    </>
  );
}

export const Route = createFileRoute('/demo')(
  heatwarpedPageRouteOptions({
    path: '/demo',
    title: 'Heatwarped Demo - Free Steam Download & Install Guide',
    description:
      'Heatwarped demo is free on Steam. Learn where to download it, how to install and launch it, what is officially confirmed, and which PC specs you need.',
    Page: HeatwarpedDemoWithMedia,
  })
);
