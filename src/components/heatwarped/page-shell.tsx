import type { ReactNode } from 'react';

import { HeatwarpedFooterBlock } from '@/blocks/heatwarped-footer';
import { HeatwarpedHeaderBlock } from '@/blocks/heatwarped-header';
import { SiteOverlays } from '@/components/heatwarped/site-overlays';

export function HeatwarpedPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground relative flex min-h-screen flex-col">
      <SiteOverlays />
      <HeatwarpedHeaderBlock />
      <main className="relative z-10 flex-1">{children}</main>
      <HeatwarpedFooterBlock />
    </div>
  );
}
