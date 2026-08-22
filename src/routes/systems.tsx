import { createFileRoute } from '@tanstack/react-router';

import { miniWarsPageRouteOptions } from '@/components/miniwars/mini-wars-page-route';
import { SystemsPage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/systems')(
  miniWarsPageRouteOptions({
    path: '/systems',
    key: 'systems',
    Page: SystemsPage,
  })
);
