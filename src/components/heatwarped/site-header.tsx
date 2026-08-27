import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

import { Link, usePathname } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { cn } from '@/lib/utils';

export type HeatwarpedNavLink = {
  href: string;
  label: string;
};

export type HeatwarpedNavItem = HeatwarpedNavLink & {
  children?: HeatwarpedNavLink[];
};

/** Scroll distance (px) over which the header fades from transparent → solid. */
const SCROLL_FADE_RANGE = 96;

function linkIsActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavDropdown({
  item,
  pathname,
}: {
  item: HeatwarpedNavItem;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const childActive = item.children?.some((child) =>
    linkIsActive(pathname, child.href)
  );

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(
          'font-display inline-flex items-center gap-1 px-3 py-2 text-sm tracking-widest uppercase transition-colors',
          childActive || open
            ? 'text-ember-400'
            : 'text-bunker-200 hover:text-sand-100'
        )}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 transition-transform',
            open && 'rotate-180'
          )}
        />
      </button>
      {open ? (
        <div
          id={menuId}
          role="menu"
          className="border-camo-800 bg-bunker-950/95 absolute top-full left-0 z-50 min-w-[13rem] border py-2 shadow-lg backdrop-blur-md"
        >
          {item.children?.map((child) => {
            const active = linkIsActive(pathname, child.href);
            return (
              <Link
                key={child.href}
                role="menuitem"
                className={cn(
                  'font-display block px-4 py-2.5 text-sm tracking-widest uppercase transition-colors',
                  active
                    ? 'bg-bunker-900/80 text-ember-400'
                    : 'text-bunker-200 hover:bg-bunker-900/60 hover:text-sand-100'
                )}
                href={child.href}
                aria-current={active ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function HeatwarpedHeader({
  navItems,
  searchLabel: _searchLabel,
}: {
  navItems: HeatwarpedNavItem[];
  /** Kept for callers; search UI is temporarily hidden. */
  searchLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
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

  useEffect(() => {
    setOpen(false);
    setMobileSection(null);
  }, [pathname]);

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
              if (item.children?.length) {
                return (
                  <NavDropdown
                    key={item.label}
                    item={item}
                    pathname={pathname}
                  />
                );
              }

              const active = linkIsActive(pathname, item.href);
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
              if (item.children?.length) {
                const sectionOpen = mobileSection === item.label;
                const childActive = item.children.some((child) =>
                  linkIsActive(pathname, child.href)
                );
                return (
                  <div key={item.label} className="border-camo-900/70 border-b">
                    <button
                      type="button"
                      className={cn(
                        'font-display flex w-full items-center justify-between py-3 text-left text-base tracking-widest uppercase',
                        childActive || sectionOpen
                          ? 'text-ember-400'
                          : 'text-bunker-200'
                      )}
                      aria-expanded={sectionOpen}
                      onClick={() =>
                        setMobileSection((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          sectionOpen && 'rotate-180'
                        )}
                      />
                    </button>
                    {sectionOpen ? (
                      <div className="pb-2 pl-3">
                        {item.children.map((child) => {
                          const active = linkIsActive(pathname, child.href);
                          return (
                            <Link
                              key={child.href}
                              className={cn(
                                'font-display block py-2.5 text-sm tracking-widest uppercase',
                                active
                                  ? 'text-ember-400'
                                  : 'text-bunker-300 hover:text-ember-400'
                              )}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              aria-current={active ? 'page' : undefined}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              }

              const active = linkIsActive(pathname, item.href);
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
