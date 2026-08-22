import { createFileRoute } from '@tanstack/react-router';

import { miniWarsPageRouteOptions } from '@/components/miniwars/mini-wars-page-route';
import { FaqPage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/faq')(
  miniWarsPageRouteOptions({
    path: '/faq',
    key: 'faq',
    Page: FaqPage,
  })
);
