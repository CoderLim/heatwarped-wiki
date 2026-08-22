import { createFileRoute } from '@tanstack/react-router';

import { miniWarsPageRouteOptions } from '@/components/miniwars/mini-wars-page-route';
import { StrategyPage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/strategy')(
  miniWarsPageRouteOptions({
    path: '/strategy',
    key: 'strategy',
    Page: StrategyPage,
  })
);
