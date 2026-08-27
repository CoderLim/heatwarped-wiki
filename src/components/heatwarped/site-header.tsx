import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Link, usePathname } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { cn } from '@/lib/utils';

export type HeatwarpedNavItem = {
  href: string;
  label: string;
};

/** Scroll distance (px) over which the header fades from transparent → solid. */
const SCROLL_FADE_RANGE = 96;

export function HeatwarpedHeader({
  navItems,
  searchLabel: _searchLabel,
}: {
  navItems: HeatwarpedNavItem[];
  /** Kept for callers; search UI is temporarily hidden. */
  searchLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrollProgress(Math.min(1, window.scrollY / SCROLL_FADE_RANGE));
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  // Force solid chrome when the mobile menu is open so links stay readable.
  const progress = open ? 1 : scrollProgress;
  const bgAlpha = 0.85 * progress;
  const borderAlpha = 0.7 * progress;
  const blurPx = 12 * progress;

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: `rgb(7 9 15 / ${bgAlpha})`,
        borderColor: `rgb(32 41 60 / ${borderAlpha})`,
        backdropFilter: blurPx > 0.1 ? `blur(${blurPx}px)` : undefined,
        WebkitBackdropFilter: blurPx > 0.1 ? `blur(${blurPx}px)` : undefined,
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link className="group flex items-center" href="/">
          <img
            src={envConfigs.app_logo || '/logo.png'}
            alt={envConfigs.app_name || 'Heatwarped Wiki'}
            className="h-10 w-auto transition-opacity group-hover:opacity-90 sm:h-12"
            width={334}
            height={80}
          />
        </Link>

        <div className="flex items-center gap-2">
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
