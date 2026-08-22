import { createFileRoute } from '@tanstack/react-router';

import { miniWarsPageRouteOptions } from '@/components/miniwars/mini-wars-page-route';
import { HomePage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/')(
  miniWarsPageRouteOptions({
    path: '/',
    key: 'home',
    Page: HomePage,
  })
);
