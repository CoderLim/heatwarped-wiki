import { ArrowRight, Building, Crosshair, Radio } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function HeroSection() {
  return (
    <section className="border-camo-900 relative overflow-hidden border-b">
      <div className="grid-bg absolute inset-0 opacity-40"></div>
      <div className="bg-ember-500/15 absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"></div>
      <div className="from-camo-900/40 absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l to-transparent"></div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="via-ember-500/40 animate-scan absolute inset-x-0 h-px bg-gradient-to-r from-transparent to-transparent"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="text-ember-500 mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase">
              <span className="flex items-center gap-1.5">
                <Radio className="animate-blink h-3.5 w-3.5" />
                Live Build · Live Build · May 2026
              </span>
              <span className="text-bunker-500 hidden sm:inline">//</span>
              <span className="hidden sm:inline">Roblox · Mini War</span>
            </div>
            <h1 className="font-display text-sand-100 text-5xl leading-none tracking-wider uppercase md:text-7xl">
              Build a country.
              <br />
              <span className="text-ember-500">Crush</span> your{' '}
              <span className="text-stroke-ember">neighbors</span>.
            </h1>
            <p className="text-bunker-200 mt-6 max-w-xl text-base leading-7 md:text-lg">
              The unofficial strategy codex for{' '}
              <span className="text-sand-100">Mini War</span> on Roblox — the
              country-conquest game where your economy decides everything. Build
              orders, tier-ranked structures, and the meta calls that win
              lobbies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-tactical" href="/strategy">
                Pick a Strategy
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link className="btn-ghost" href="/buildings">
                <Building className="h-4 w-4" />
                Browse Buildings
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="border-ember-500/60 border-l-2 pl-3">
                <div className="font-display text-sand-100 text-2xl">21</div>
                <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  Buildings
                </div>
              </div>
              <div className="border-ember-500/60 border-l-2 pl-3">
                <div className="font-display text-sand-100 text-2xl">7</div>
                <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  Strategies
                </div>
              </div>
              <div className="border-ember-500/60 border-l-2 pl-3">
                <div className="font-display text-sand-100 text-2xl">7</div>
                <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  Systems
                </div>
              </div>
              <div className="border-ember-500/60 border-l-2 pl-3">
                <div className="font-display text-sand-100 text-2xl">8</div>
                <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  Guides
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="hud-frame clip-corner bg-bunker-950/60 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-camo-300 font-mono text-[10px] tracking-[0.3em] uppercase">
                  META · S-TIER · LIVE BUILD
                </div>
                <span className="animate-blink bg-signal-500 flex h-1.5 w-1.5 rounded-full"></span>
              </div>
              <div className="space-y-3">
                <Link
                  id="workshop"
                  className="group border-camo-800/60 bg-bunker-900/70 hover:border-ember-500/60 flex scroll-mt-24 items-center gap-3 border p-3 transition-colors"
                  href="/buildings#workshop"
                >
                  <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                    S
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                      Production · INF-01
                    </div>
                    <div className="font-display text-sand-100 group-hover:text-ember-400 truncate text-base tracking-wider uppercase transition-colors">
                      Workshop
                    </div>
                  </div>
                  <Crosshair className="text-camo-500 group-hover:text-ember-500 h-4 w-4" />
                </Link>
                <Link
                  id="storage-center"
                  className="group border-camo-800/60 bg-bunker-900/70 hover:border-ember-500/60 flex scroll-mt-24 items-center gap-3 border p-3 transition-colors"
                  href="/buildings#storage-center"
                >
                  <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                    S
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                      Production · INF-02
                    </div>
                    <div className="font-display text-sand-100 group-hover:text-ember-400 truncate text-base tracking-wider uppercase transition-colors">
                      Storage Center
                    </div>
                  </div>
                  <Crosshair className="text-camo-500 group-hover:text-ember-500 h-4 w-4" />
                </Link>
                <Link
                  id="nuclear-reactor"
                  className="group border-camo-800/60 bg-bunker-900/70 hover:border-ember-500/60 flex scroll-mt-24 items-center gap-3 border p-3 transition-colors"
                  href="/buildings#nuclear-reactor"
                >
                  <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                    S
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                      Economy · ECO-08
                    </div>
                    <div className="font-display text-sand-100 group-hover:text-ember-400 truncate text-base tracking-wider uppercase transition-colors">
                      Nuclear Reactor
                    </div>
                  </div>
                  <Crosshair className="text-camo-500 group-hover:text-ember-500 h-4 w-4" />
                </Link>
                <Link
                  id="data-center"
                  className="group border-camo-800/60 bg-bunker-900/70 hover:border-ember-500/60 flex scroll-mt-24 items-center gap-3 border p-3 transition-colors"
                  href="/buildings#data-center"
                >
                  <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                    S
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                      Economy · ECO-09
                    </div>
                    <div className="font-display text-sand-100 group-hover:text-ember-400 truncate text-base tracking-wider uppercase transition-colors">
                      Data Center
                    </div>
                  </div>
                  <Crosshair className="text-camo-500 group-hover:text-ember-500 h-4 w-4" />
                </Link>
              </div>
              <Link
                className="border-camo-800/70 text-camo-300 hover:text-ember-400 mt-4 flex items-center justify-center gap-1.5 border-t pt-3 font-mono text-xs tracking-widest uppercase"
                href="/tier-list"
              >
                Full Tier List
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
