import { useState } from 'react';
import { Crosshair, Menu, Search, X } from 'lucide-react';

import { Link, usePathname } from '@/core/i18n/navigation';
import { cn } from '@/lib/utils';

export type MiniWarsNavItem = {
  href: string;
  label: string;
};

export function MiniWarsHeader({
  navItems,
  searchLabel,
}: {
  navItems: MiniWarsNavItem[];
  searchLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="border-camo-800/70 bg-bunker-950/85 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="border-camo-900/80 bg-bunker-900/70 border-b">
        <div className="text-camo-300 mx-auto flex max-w-7xl items-center justify-between px-4 py-1 font-mono text-[11px] tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="animate-blink bg-signal-500 h-1.5 w-1.5 rounded-full" />
              <span>HEATWARPED · LIVE</span>
            </span>
            <span className="text-bunker-500 hidden sm:inline">//</span>
            <span className="hidden sm:inline">OPEN-WORLD STREET RACING</span>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <span>DEMO AVAILABLE</span>
            <span className="text-bunker-500">//</span>
            <span>UNOFFICIAL WIKI</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link className="group flex items-center gap-3" href="/">
          <div className="border-ember-500 bg-bunker-900 clip-corner-sm relative flex h-10 w-10 items-center justify-center border">
            <Crosshair className="text-ember-500 h-5 w-5 transition-transform group-hover:rotate-90" />
            <div className="bg-ember-500/0 absolute inset-0 animate-pulse" />
          </div>
          <div className="leading-none">
            <div className="font-display text-sand-100 text-xl tracking-[0.2em] uppercase">
              Heatwarped
            </div>
            <div className="text-camo-400 font-mono text-[10px] tracking-[0.3em] uppercase">
              · Street Racing Wiki ·
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                className={cn(
                  'font-display relative px-3 py-2 text-sm tracking-widest uppercase transition-colors',
                  active
                    ? 'text-ember-400'
                    : 'text-bunker-200 hover:text-sand-100'
                )}
                href={item.href}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            className={cn(
              'group border-camo-700 bg-bunker-900/70 clip-corner-sm flex h-10 items-center gap-2 border px-3 transition-colors',
              isActive('/search')
                ? 'border-ember-500 text-ember-400'
                : 'text-camo-300 hover:border-ember-500 hover:text-ember-400'
            )}
            href="/search"
          >
            <Search className="h-4 w-4" />
            <span className="hidden font-mono text-xs tracking-widest uppercase sm:inline">
              {searchLabel}
            </span>
          </Link>
          <button
            type="button"
            className="border-camo-700 bg-bunker-900/70 text-camo-200 clip-corner-sm flex h-10 w-10 items-center justify-center border lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-camo-900 bg-bunker-950/95 border-t lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  className={cn(
                    'border-camo-900/70 font-display border-b py-3 text-base tracking-widest uppercase',
                    active
                      ? 'text-ember-400'
                      : 'text-bunker-200 hover:text-ember-400'
                  )}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
