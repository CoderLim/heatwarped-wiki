import { createFileRoute, Outlet } from '@tanstack/react-router';

import { NOINDEX_META } from '@/lib/seo-meta';

export const Route = createFileRoute('/(auth)')({
  head: () => ({
    meta: [...NOINDEX_META],
  }),
  component: () => <Outlet />,
});
