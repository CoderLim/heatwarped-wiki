import { createFileRoute } from '@tanstack/react-router';

import { heatwarpedPageRouteOptions } from '@/components/heatwarped/heatwarped-page-route';
import { HeatwarpedCustomizationPage } from '@/components/heatwarped/pages/heatwarped-customization-page';

export const Route = createFileRoute('/customization')(
  heatwarpedPageRouteOptions({
    path: '/customization',
    title: 'Heatwarped Customization - Body Kits, Vinyls & Parts',
    description:
      'Heatwarped customization covers deep visual tuning, rare car parts, and Demo-observed body kits, vinyls, underglow, and performance upgrades.',
    Page: HeatwarpedCustomizationPage,
  })
);
