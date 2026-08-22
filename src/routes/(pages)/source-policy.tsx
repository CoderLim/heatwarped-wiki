import { createFileRoute } from '@tanstack/react-router';

import { staticPageRouteOptions } from './-static-page';

export const Route = createFileRoute('/(pages)/source-policy')(
  staticPageRouteOptions('source-policy')
);
