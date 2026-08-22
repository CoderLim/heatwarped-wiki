import { createFileRoute } from '@tanstack/react-router';

import { miniWarsPageRouteOptions } from '@/components/miniwars/mini-wars-page-route';
import { PatchNotesPage } from '@/components/miniwars/pages';

export const Route = createFileRoute('/patch-notes')(
  miniWarsPageRouteOptions({
    path: '/patch-notes',
    key: 'patch_notes',
    Page: PatchNotesPage,
  })
);
