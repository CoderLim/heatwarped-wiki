import { createFileRoute } from '@tanstack/react-router';

import { miniWarsPageRouteOptions } from '@/components/miniwars/mini-wars-page-route';
import { BuildingsPage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/buildings')(
  miniWarsPageRouteOptions({
    path: '/buildings',
    key: 'buildings',
    Page: BuildingsPage,
  })
);
