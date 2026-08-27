import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/heatwarped-page-route';
import { HeatwarpedMultiplayerPage } from '@/components/heatwarped/pages/heatwarped-multiplayer-page';

export const Route = createFileRoute('/multiplayer')(
  heatwarpedPageRouteOptions({
    path: '/multiplayer',
    title: 'Heatwarped Multiplayer - Online Challenges Status',
    description:
      'Does Heatwarped have multiplayer? Official site advertises online challenges; Steam still lists Single-player. What is known and what remains undocumented.',
    Page: HeatwarpedMultiplayerPage,
  })
);
