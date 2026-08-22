import { Crosshair } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { BuiltWithShipAny } from '@/components/built-with-shipany';

export type MiniWarsFooterLink = {
  href: string;
  label: string;
};

export function MiniWarsFooter({
  blurb,
  disclaimer,
  codexTitle,
  playersTitle,
  codexLinks,
  playerLinks,
  copyright,
  builtWith,
}: {
  blurb: string;
  disclaimer: string;
  codexTitle: string;
  playersTitle: string;
  codexLinks: MiniWarsFooterLink[];
  playerLinks: MiniWarsFooterLink[];
  copyright: string;
  builtWith: string;
}) {
  return (
    <footer className="border-camo-900 bg-bunker-950/95 relative z-10 mt-24 border-t">
      <div className="stencil-line" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="border-ember-500 bg-bunker-900 clip-corner-sm flex h-9 w-9 items-center justify-center border">
              <Crosshair className="text-ember-500 h-4 w-4" />
            </div>
            <div>
              <div className="font-display text-sand-100 text-lg tracking-[0.2em] uppercase">
                Mini War Wiki
              </div>
              <div className="text-camo-400 font-mono text-[10px] tracking-[0.3em] uppercase">
                Combat Codex
              </div>
            </div>
          </div>
          <p className="text-bunker-300 mt-4 max-w-md text-sm leading-7">
            {blurb}
          </p>
          <p className="text-bunker-500 mt-4 font-mono text-[11px] tracking-widest uppercase">
            {disclaimer}
          </p>
        </div>
        <div>
          <h4 className="font-display text-ember-500 mb-3 text-sm tracking-widest uppercase">
            {codexTitle}
          </h4>
          <ul className="text-bunker-300 space-y-2 text-sm">
            {codexLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-sand-100" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-ember-500 mb-3 text-sm tracking-widest uppercase">
            {playersTitle}
          </h4>
          <ul className="text-bunker-300 space-y-2 text-sm">
            {playerLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-sand-100" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-camo-900/80 border-t">
        <div className="text-bunker-500 mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 font-mono text-[11px] tracking-widest uppercase md:flex-row">
          <span>{copyright}</span>
          <span>{builtWith}</span>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-6">
        <BuiltWithShipAny />
      </div>
    </footer>
  );
}
