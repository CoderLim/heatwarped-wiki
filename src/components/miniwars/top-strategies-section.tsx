import { ArrowUpRight, Crown, Flag } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function TopStrategiesSection() {
  return (
    <section className="border-camo-900/70 bg-bunker-950/30 relative border-y py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
                  <span className="bg-ember-500 h-px w-6"></span>Doctrine
                </div>
                <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
                  Top Strategies
                </h2>
              </div>
              <Link
                className="group text-camo-300 hover:text-ember-400 flex items-center gap-1.5 font-mono text-xs tracking-widest whitespace-nowrap uppercase transition-colors"
                href="/strategy"
              >
                View All
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div className="space-y-2">
              <Link
                id="economy-first"
                className="hud-frame clip-corner-sm hover:border-ember-500/70 flex scroll-mt-24 items-center justify-between gap-3 p-3 transition-colors"
                href="/strategy#economy-first"
              >
                <div className="min-w-0">
                  <div className="font-display text-sand-100 truncate text-base tracking-wider uppercase">
                    Economy First
                  </div>
                  <div className="text-camo-400 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                    Economy First · Beginner
                  </div>
                </div>
                <Flag className="text-ember-500 h-4 w-4 shrink-0" />
              </Link>
              <Link
                id="air-rush"
                className="hud-frame clip-corner-sm hover:border-ember-500/70 flex scroll-mt-24 items-center justify-between gap-3 p-3 transition-colors"
                href="/strategy#air-rush"
              >
                <div className="min-w-0">
                  <div className="font-display text-sand-100 truncate text-base tracking-wider uppercase">
                    Air Rush · Black Hawk Strike
                  </div>
                  <div className="text-camo-400 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                    Military Rush · Intermediate
                  </div>
                </div>
                <Flag className="text-ember-500 h-4 w-4 shrink-0" />
              </Link>
              <Link
                id="turtle-defense"
                className="hud-frame clip-corner-sm hover:border-ember-500/70 flex scroll-mt-24 items-center justify-between gap-3 p-3 transition-colors"
                href="/strategy#turtle-defense"
              >
                <div className="min-w-0">
                  <div className="font-display text-sand-100 truncate text-base tracking-wider uppercase">
                    Turtle Defense
                  </div>
                  <div className="text-camo-400 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                    Turtle Defense · Intermediate
                  </div>
                </div>
                <Flag className="text-ember-500 h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
                  <span className="bg-ember-500 h-px w-6"></span>Latest Update
                </div>
                <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
                  Industrial Depth &amp; Stability Pass
                </h2>
              </div>
              <Link
                className="group text-camo-300 hover:text-ember-400 flex items-center gap-1.5 font-mono text-xs tracking-widest whitespace-nowrap uppercase transition-colors"
                href="/patch-notes"
              >
                View All
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div className="hud-frame clip-corner p-5">
              <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                May 06, 2026 · Live Build · May 2026
              </div>
              <ul className="mt-3 space-y-2">
                <li className="text-bunker-200 flex gap-2 text-sm">
                  <span className="bg-ember-500 mt-1.5 h-1.5 w-1.5 shrink-0"></span>
                  Oil Rig surfaced as a top-level Production building; Steel
                  Mill chain refreshed.
                </li>
                <li className="text-bunker-200 flex gap-2 text-sm">
                  <span className="bg-ember-500 mt-1.5 h-1.5 w-1.5 shrink-0"></span>
                  Bunker added to the defensive build menu — a hardened mid-tier
                  garrison structure.
                </li>
                <li className="text-bunker-200 flex gap-2 text-sm">
                  <span className="bg-ember-500 mt-1.5 h-1.5 w-1.5 shrink-0"></span>
                  Server stability significantly improved during peak hours.
                </li>
                <li className="text-bunker-200 flex gap-2 text-sm">
                  <span className="bg-ember-500 mt-1.5 h-1.5 w-1.5 shrink-0"></span>
                  Storage Center auto-collect radius and consistency tightened.
                </li>
                <li className="text-bunker-200 flex gap-2 text-sm">
                  <span className="bg-ember-500 mt-1.5 h-1.5 w-1.5 shrink-0"></span>
                  Workshop builder allocation now re-balances correctly when
                  buildings are sold.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
                  <span className="bg-ember-500 h-px w-6"></span>Top of Meta
                </div>
                <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
                  Must-Build Picks
                </h2>
              </div>
              <Link
                className="group text-camo-300 hover:text-ember-400 flex items-center gap-1.5 font-mono text-xs tracking-widest whitespace-nowrap uppercase transition-colors"
                href="/tier-list"
              >
                View All
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div className="space-y-2">
              <Link
                id="workshop"
                className="hud-frame clip-corner-sm hover:border-ember-500/70 flex scroll-mt-24 items-center gap-3 p-3 transition-colors"
                href="/buildings#workshop"
              >
                <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  S
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-sand-100 truncate text-base tracking-wider uppercase">
                    Workshop
                  </div>
                  <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                    Production · Early
                  </div>
                </div>
                <Crown className="text-camo-500 h-4 w-4" />
              </Link>
              <Link
                id="storage-center"
                className="hud-frame clip-corner-sm hover:border-ember-500/70 flex scroll-mt-24 items-center gap-3 p-3 transition-colors"
                href="/buildings#storage-center"
              >
                <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  S
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-sand-100 truncate text-base tracking-wider uppercase">
                    Storage Center
                  </div>
                  <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                    Production · Early
                  </div>
                </div>
                <Crown className="text-camo-500 h-4 w-4" />
              </Link>
              <Link
                id="air-base"
                className="hud-frame clip-corner-sm hover:border-ember-500/70 flex scroll-mt-24 items-center gap-3 p-3 transition-colors"
                href="/buildings#air-base"
              >
                <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  S
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-sand-100 truncate text-base tracking-wider uppercase">
                    Air Base · Black Hawks
                  </div>
                  <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                    Military · Mid
                  </div>
                </div>
                <Crown className="text-camo-500 h-4 w-4" />
              </Link>
              <Link
                id="missile-launcher"
                className="hud-frame clip-corner-sm hover:border-ember-500/70 flex scroll-mt-24 items-center gap-3 p-3 transition-colors"
                href="/buildings#missile-launcher"
              >
                <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  S
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-sand-100 truncate text-base tracking-wider uppercase">
                    Missile Launcher
                  </div>
                  <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                    Military · Mid
                  </div>
                </div>
                <Crown className="text-camo-500 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
