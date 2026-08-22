import { ArrowUpRight, Target } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function FeaturedStrategiesSection() {
  return (
    <section className="border-camo-900/70 bg-bunker-950/30 relative border-t py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
              <span className="bg-ember-500 h-px w-6"></span>Battle Plans
            </div>
            <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
              Featured Strategies
            </h2>
          </div>
          <Link
            className="group text-camo-300 hover:text-ember-400 flex items-center gap-1.5 font-mono text-xs tracking-widest whitespace-nowrap uppercase transition-colors"
            href="/strategy"
          >
            All Strategies
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            id="economy-first"
            className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
            href="/strategy#economy-first"
          >
            <div className="grid-bg absolute inset-0 opacity-30"></div>
            <div className="bg-signal-500/5 absolute top-0 right-0 h-24 w-24 rounded-full blur-2xl"></div>
            <div className="relative mb-3 flex items-start gap-3">
              <div className="border-ember-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                <Target className="text-ember-400 h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                  Economy First
                </div>
                <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                  Economy First
                </h3>
              </div>
            </div>
            <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
              The path of least resistance and the highest ceiling. Skip
              military entirely until your income is producing real cash, then
              transition into a meta Air Base + Missile Launcher comp once you
              can afford to lose units. Almost every long-term winner runs some
              flavor of this plan.
            </p>
            <div className="relative mt-4 flex flex-wrap gap-1.5">
              <span className="chip text-camo-400 border-camo-700/70">
                Beginner
              </span>
              <span className="chip border-bunker-700 text-bunker-300">
                New players
              </span>
              <span className="chip border-bunker-700 text-bunker-300">
                Long-haul lobbies
              </span>
            </div>
            <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
              <span>15 steps</span>
              <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
          <Link
            id="air-rush"
            className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
            href="/strategy#air-rush"
          >
            <div className="grid-bg absolute inset-0 opacity-30"></div>
            <div className="bg-signal-500/5 absolute top-0 right-0 h-24 w-24 rounded-full blur-2xl"></div>
            <div className="relative mb-3 flex items-start gap-3">
              <div className="border-ember-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                <Target className="text-ember-400 h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                  Military Rush
                </div>
                <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                  Air Rush · Black Hawk Strike
                </h3>
              </div>
            </div>
            <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
              Sacrifice late-game ceiling for mid-game dominance. Skip the
              Carrot Farm pivot, push straight into Wood Plants and Houses, then
              race the lobby to the first Air Base. The first player with Black
              Hawks owns the next ten minutes.
            </p>
            <div className="relative mt-4 flex flex-wrap gap-1.5">
              <span className="chip text-sand-300 border-sand-700/70">
                Intermediate
              </span>
              <span className="chip border-bunker-700 text-bunker-300">
                Aggressive lobbies
              </span>
              <span className="chip border-bunker-700 text-bunker-300">
                Servers with weak neighbors
              </span>
            </div>
            <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
              <span>13 steps</span>
              <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
          <Link
            id="turtle-defense"
            className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
            href="/strategy#turtle-defense"
          >
            <div className="grid-bg absolute inset-0 opacity-30"></div>
            <div className="bg-signal-500/5 absolute top-0 right-0 h-24 w-24 rounded-full blur-2xl"></div>
            <div className="relative mb-3 flex items-start gap-3">
              <div className="border-ember-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                <Target className="text-ember-400 h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                  Turtle Defense
                </div>
                <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                  Turtle Defense
                </h3>
              </div>
            </div>
            <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
              Out-survive the rushers, then collect the late-game prize. Heavy
              emphasis on Border Towers, Soldier Statues, Missile Launchers as
              defensive pieces, and Houses tucked deep behind your wall. Slower
              start, near-impossible to break once stable.
            </p>
            <div className="relative mt-4 flex flex-wrap gap-1.5">
              <span className="chip text-sand-300 border-sand-700/70">
                Intermediate
              </span>
              <span className="chip border-bunker-700 text-bunker-300">
                Hostile servers
              </span>
              <span className="chip border-bunker-700 text-bunker-300">
                Choke-point bases
              </span>
            </div>
            <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
              <span>13 steps</span>
              <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
