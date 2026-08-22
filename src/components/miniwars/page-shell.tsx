import type { ReactNode } from 'react';

import { MiniWarsFooterBlock } from '@/blocks/miniwars-footer';
import { MiniWarsHeaderBlock } from '@/blocks/miniwars-header';
import { SiteOverlays } from '@/components/miniwars/site-overlays';

export function MiniWarsPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground relative flex min-h-screen flex-col">
      <SiteOverlays />
      <MiniWarsHeaderBlock />
      <main className="relative z-10 flex-1">{children}</main>
      <MiniWarsFooterBlock />
    </div>
  );
}
