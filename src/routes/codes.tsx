import { createFileRoute } from '@tanstack/react-router';

import { redirectToHome } from '@/lib/legacy-redirect';

export const Route = createFileRoute('/codes')({
  beforeLoad: () => redirectToHome(),
});
