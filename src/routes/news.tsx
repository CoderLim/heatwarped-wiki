import { createFileRoute } from '@tanstack/react-router';

import { miniWarsPageRouteOptions } from '@/components/miniwars/mini-wars-page-route';
import { NewsPage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/news')(
  miniWarsPageRouteOptions({
    path: '/news',
    key: 'news',
    Page: NewsPage,
  })
);
