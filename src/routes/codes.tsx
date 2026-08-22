import { createFileRoute } from '@tanstack/react-router';

import { miniWarsPageRouteOptions } from '@/components/miniwars/mini-wars-page-route';
import { CodesPage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/codes')(
  miniWarsPageRouteOptions({
    path: '/codes',
    key: 'codes',
    Page: CodesPage,
  })
);
