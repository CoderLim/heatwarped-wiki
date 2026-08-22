import { createFileRoute } from '@tanstack/react-router';

import { miniWarsPageRouteOptions } from '@/components/miniwars/mini-wars-page-route';
import { GuidesPage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/guides')(
  miniWarsPageRouteOptions({
    path: '/guides',
    key: 'guides',
    Page: GuidesPage,
  })
);
