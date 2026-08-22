import { ArrowUpRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function MustBuildSection() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
              <span className="bg-ember-500 h-px w-6"></span>Mandatory Picks
            </div>
            <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
              Buildings You Cannot Skip
            </h2>
          </div>
          <Link
            className="group text-camo-300 hover:text-ember-400 flex items-center gap-1.5 font-mono text-xs tracking-widest whitespace-nowrap uppercase transition-colors"
            href="/buildings"
          >
            All Buildings
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            id="workshop"
            className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
            href="/buildings#workshop"
          >
            <div className="grid-bg absolute inset-0 opacity-30"></div>
            <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
            <div className="relative mb-3 flex items-start justify-between gap-2">
              <div>
                <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                  INF-01 · Early
                </div>
                <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                  Workshop
                </h3>
              </div>
              <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                S
              </span>
            </div>
            <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
              Each Workshop adds a builder to your roster. More builders means
              everything in your country goes up faster, including military
              buildings during wartime. The first Workshop is the single
              highest-impact purchase in the entire early game.
            </p>
            <div className="relative mt-4 flex flex-wrap gap-1.5">
              <span className="chip border-camo-700/70 text-camo-200">
                Production
              </span>
              <span className="chip border-bunker-700 text-bunker-300">
                Tempo
              </span>
              <span className="chip border-bunker-700 text-bunker-300">
                Build speed
              </span>
            </div>
            <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
              <span>Cheap · priority buy</span>
              <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
          <Link
            id="storage-center"
            className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
            href="/buildings#storage-center"
          >
            <div className="grid-bg absolute inset-0 opacity-30"></div>
            <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
            <div className="relative mb-3 flex items-start justify-between gap-2">
              <div>
                <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                  INF-02 · Early
                </div>
                <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                  Storage Center
                </h3>
              </div>
              <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                S
              </span>
            </div>
            <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
              Auto-collects production from every nearby factory and farm. Place
              it in the middle of your industrial cluster and you stop wasting
              time clicking. The hidden multiplier on every building you own.
            </p>
            <div className="relative mt-4 flex flex-wrap gap-1.5">
              <span className="chip border-camo-700/70 text-camo-200">
                Production
              </span>
              <span className="chip border-bunker-700 text-bunker-300">
                Automation
              </span>
              <span className="chip border-bunker-700 text-bunker-300">
                Click-saving
              </span>
            </div>
            <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
              <span>Moderate · core infrastructure</span>
              <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
          <Link
            id="air-base"
            className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
            href="/buildings#air-base"
          >
            <div className="grid-bg absolute inset-0 opacity-30"></div>
            <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
            <div className="relative mb-3 flex items-start justify-between gap-2">
              <div>
                <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                  MIL-05 · Mid
                </div>
                <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                  Air Base · Black Hawks
                </h3>
              </div>
              <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                S
              </span>
            </div>
            <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
              Black Hawks deployed from the Air Base are the single strongest
              invasion tool in the current build. Fast, lethal against most
              defended bases, and the core of every winning offensive
              composition.
            </p>
            <div className="relative mt-4 flex flex-wrap gap-1.5">
              <span className="chip border-camo-700/70 text-camo-200">
                Military
              </span>
              <span className="chip border-bunker-700 text-bunker-300">
                Invasion
              </span>
              <span className="chip border-bunker-700 text-bunker-300">
                Conquest
              </span>
            </div>
            <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
              <span>Expensive · meta pick</span>
              <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
