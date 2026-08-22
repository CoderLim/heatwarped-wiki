import { createFileRoute } from '@tanstack/react-router';

import { miniWarsPageRouteOptions } from '@/components/miniwars/mini-wars-page-route';
import { TierListPage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/tier-list')(
  miniWarsPageRouteOptions({
    path: '/tier-list',
    key: 'tier_list',
    Page: TierListPage,
  })
);
