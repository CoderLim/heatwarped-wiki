import { createFileRoute } from '@tanstack/react-router';

import { miniWarsPageRouteOptions } from '@/components/miniwars/mini-wars-page-route';
import { SearchPage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/search')(
  miniWarsPageRouteOptions({
    path: '/search',
    key: 'search',
    Page: SearchPage,
  })
);
