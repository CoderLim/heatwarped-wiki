import { ArrowUpRight, ChevronRight, Target } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function StrategyPage() {
  return (
    <>
      <section className="border-camo-900/80 bg-bunker-950/40 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-50"></div>
        <div className="bg-ember-500/10 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="text-ember-500 mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase">
            <span className="bg-ember-500 h-px w-8"></span>DOCTRINE · STRAT
          </div>
          <h1 className="font-display text-sand-100 text-4xl tracking-wider uppercase md:text-6xl">
            Mini Wars Strategy
          </h1>
          <p className="text-bunker-300 mt-4 max-w-2xl text-base leading-7 md:text-lg">
            Mini Wars is won at the macro level. Pick your archetype, run the
            build order, and adapt to the lobby. Each strategy below is a
            complete blueprint — opening to endgame — with the calls that
            separate a survivable run from a winning one.
          </p>
          <div className="mt-6">
            <div className="flex flex-wrap gap-2 font-mono text-[11px] tracking-widest uppercase">
              <span className="chip border-ember-700/70 text-ember-300">
                7 strategies
              </span>
              <span className="chip">Beginner → Advanced</span>
              <span className="chip">Live Build</span>
            </div>
          </div>
        </div>
      </section>
      <section className="border-camo-900/60 bg-bunker-950/40 relative border-b">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 lg:col-span-8">
              <div className="text-ember-500 font-mono text-[11px] tracking-[0.4em] uppercase">
                ABOUT MINI WARS STRATEGY
              </div>
              <div className="prose-tactical text-bunker-200 space-y-4 text-base leading-7 md:text-lg">
                <p>
                  <strong>Mini Wars strategy</strong> is the macro layer of the
                  game — the build order, the archetype choice, and the read on
                  your lobby. At a high level, every winning run in Mini Wars on
                  Roblox follows one of 7 archetypes documented on this page,
                  tuned to the May 2026 Live Build. Each card below is a
                  complete blueprint with opening, mid-game, late-game, and the
                  pivots that keep you alive when the lobby goes sideways.
                </p>
                <p>
                  The right Mini Wars build order depends on three things: how
                  aggressive your neighbours are, which{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/buildings"
                  >
                    buildings
                  </Link>{' '}
                  you can reach in Stage 1, and whether you want to win on
                  income or on conquest. Use the decision tree below to pick a
                  strategy in under 30 seconds, then drill into the full
                  playbook on its detail page.
                </p>
              </div>
              <div className="grid gap-4 pt-4 md:grid-cols-2">
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    Strategy decision tree
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      <span className="text-sand-100">Quiet lobby?</span> →{' '}
                      <Link
                        id="economy-first"
                        className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                        href="/strategy#economy-first"
                      >
                        Economy First
                      </Link>{' '}
                      or{' '}
                      <Link
                        id="late-game-scaling"
                        className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                        href="/strategy#late-game-scaling"
                      >
                        Late-Game Scaling
                      </Link>
                      .
                    </p>
                    <p>
                      <span className="text-sand-100">Aggressive lobby?</span> →{' '}
                      <Link
                        id="air-rush"
                        className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                        href="/strategy#air-rush"
                      >
                        Air Rush
                      </Link>{' '}
                      to land the first Black Hawk wave.
                    </p>
                    <p>
                      <span className="text-sand-100">Got rushed once?</span> →{' '}
                      <Link
                        id="turtle-defense"
                        className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                        href="/strategy#turtle-defense"
                      >
                        Turtle Defense
                      </Link>
                      , then counter-invade.
                    </p>
                    <p>
                      <span className="text-sand-100">
                        Want to snowball map control?
                      </span>{' '}
                      →{' '}
                      <Link
                        id="conquest-snowball"
                        className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                        href="/strategy#conquest-snowball"
                      >
                        Conquest Snowball
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    How archetypes differ
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      <span className="text-sand-100">Economic archetypes</span>
                      (Economy First, Late-Game Scaling, Population Engine) win
                      by out-producing the lobby. Slow Stage 1, dominant Stage
                      3.
                    </p>
                    <p>
                      <span className="text-sand-100">
                        Aggressive archetypes
                      </span>
                      (Air Rush, Conquest Snowball) win before Stage 3 happens.
                      They trade long-term ROI for tempo.
                    </p>
                    <p>
                      <span className="text-sand-100">
                        Defensive archetypes
                      </span>
                      (Turtle Defense) win by surviving when others over-commit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="hud-frame clip-corner bg-bunker-900/40 sticky top-24 p-5">
                <div className="text-ember-500 mb-4 font-mono text-[10px] tracking-[0.4em] uppercase">
                  Jump to
                </div>
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      id="strategies"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#strategies"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        All strategies
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="picker"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#picker"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        How to pick
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="economy-first"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/strategy#economy-first"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Economy First
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="air-rush"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/strategy#air-rush"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Air Rush
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="turtle-defense"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/strategy#turtle-defense"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Turtle Defense
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="conquest-snowball"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/strategy#conquest-snowball"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Conquest Snowball
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="beginner-opening-guide"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/guides#beginner-opening-guide"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Beginner guide
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/tier-list"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Building tier list
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-12">
        <div id="strategies" className="scroll-mt-24">
          <h2 className="sr-only">All Mini Wars strategies</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                can afford to lose units. Almost every long-term winner runs
                some flavor of this plan.
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
                Carrot Farm pivot, push straight into Wood Plants and Houses,
                then race the lobby to the first Air Base. The first player with
                Black Hawks owns the next ten minutes.
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
                defensive pieces, and Houses tucked deep behind your wall.
                Slower start, near-impossible to break once stable.
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
            <Link
              id="late-game-scaling"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/strategy#late-game-scaling"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-signal-500/5 absolute top-0 right-0 h-24 w-24 rounded-full blur-2xl"></div>
              <div className="relative mb-3 flex items-start gap-3">
                <div className="border-ember-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                  <Target className="text-ember-400 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                    Late-Game Scaling
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Late-Game Scaling · Black Hole Path
                  </h3>
                </div>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                The endgame strategy — build for the longest possible run,
                target a Black Hole Generator, dominate by sheer income
                compound. Requires reading the lobby correctly: this build dies
                to an early Air Rush, but crushes everything once it stabilises.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip text-ember-400 border-ember-700/70">
                  Advanced
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Long lobbies
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Trophy runs
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>13 steps</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="balanced-frontier"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/strategy#balanced-frontier"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-signal-500/5 absolute top-0 right-0 h-24 w-24 rounded-full blur-2xl"></div>
              <div className="relative mb-3 flex items-start gap-3">
                <div className="border-ember-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                  <Target className="text-ember-400 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                    Balanced
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Balanced Frontier
                  </h3>
                </div>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                No-frills middle path. Some economy, some defense, eventually
                some military. Will not top a leaderboard, will not crash and
                burn either. The best plan when you do not yet know your lobby.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip text-camo-400 border-camo-700/70">
                  Beginner
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Mixed lobbies
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Players who hate planning
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>13 steps</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="conquest-snowball"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/strategy#conquest-snowball"
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
                    Conquest Snowball · Predator Path
                  </h3>
                </div>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                A predator build. The plan is not to outscale the lobby — it is
                to feed on it. Hit a single Air Base + 2 Missile Launcher
                timing, capture the weakest player, retrofit their slots into
                Reactors, then immediately re-arm and strike the next. Each
                conquest compounds your income multiplier; three captures and
                you are uncatchable.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip text-ember-400 border-ember-700/70">
                  Advanced
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Aggressive servers
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Players who track lobby state
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>15 steps</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="population-engine"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/strategy#population-engine"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-signal-500/5 absolute top-0 right-0 h-24 w-24 rounded-full blur-2xl"></div>
              <div className="relative mb-3 flex items-start gap-3">
                <div className="border-ember-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                  <Target className="text-ember-400 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                    Late-Game Scaling
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Population Engine · Industrial Empire
                  </h3>
                </div>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                A population-first build that treats Civilians as the gating
                resource. Every other player is income-capped by their Houses;
                you are not. Stack Houses + Barracks early, run a thick
                Wood/Steel/Oil chain in the mid game, and arrive at the Reactor
                + Data Center timing with double the factory throughput of
                anyone else in the lobby.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip text-sand-300 border-sand-700/70">
                  Intermediate
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Long lobbies
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Defensive servers
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>16 steps</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </div>
        <div
          id="picker"
          className="hud-frame clip-corner scroll-mt-24 p-6 md:p-8"
        >
          <div className="text-ember-500 mb-3 font-mono text-[11px] tracking-[0.4em] uppercase">
            Read the Lobby First
          </div>
          <h2 className="font-display text-sand-100 mb-4 text-2xl tracking-wider uppercase md:text-3xl">
            How to pick a Mini Wars strategy
          </h2>
          <p className="text-bunker-300 mb-6 max-w-3xl text-sm leading-7 md:text-base">
            Spend the first 60 seconds of every match scouting. Count active
            countries, watch for early Barracks placements, and listen for chat.
            Use that read to lock in one of the three branches below.
          </p>
          <div className="text-bunker-200 grid gap-4 text-sm leading-7 md:grid-cols-3">
            <div>
              <div className="text-camo-300 mb-2 font-mono text-[11px] tracking-widest uppercase">
                Quiet lobby?
              </div>
              <p>
                Run{' '}
                <Link
                  id="economy-first"
                  className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                  href="/strategy#economy-first"
                >
                  Economy First
                </Link>{' '}
                or{' '}
                <Link
                  id="late-game-scaling"
                  className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                  href="/strategy#late-game-scaling"
                >
                  Late-Game Scaling
                </Link>
                . Build untouched, win on income.
              </p>
            </div>
            <div>
              <div className="text-camo-300 mb-2 font-mono text-[11px] tracking-widest uppercase">
                Aggressive lobby?
              </div>
              <p>
                Pivot to{' '}
                <Link
                  id="air-rush"
                  className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                  href="/strategy#air-rush"
                >
                  Air Rush
                </Link>
                . The first Black Hawk wave decides the next ten minutes.
              </p>
            </div>
            <div>
              <div className="text-camo-300 mb-2 font-mono text-[11px] tracking-widest uppercase">
                Got rushed once?
              </div>
              <p>
                Switch to{' '}
                <Link
                  id="turtle-defense"
                  className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                  href="/strategy#turtle-defense"
                >
                  Turtle Defense
                </Link>
                . Out-survive, then counter-invade with full economy behind you.
              </p>
            </div>
          </div>
        </div>
        <div className="hud-frame clip-corner bg-bunker-900/40 p-6 md:p-8">
          <h2 className="font-display text-sand-100 mb-4 text-xl tracking-wider uppercase">
            Build your Mini Wars strategy with
          </h2>
          <div className="grid gap-3 text-sm md:grid-cols-3">
            <Link
              className="hud-frame clip-corner-sm hover:border-ember-500/70 p-3 transition-colors"
              href="/buildings"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Buildings
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                Every structure your build order needs.
              </div>
            </Link>
            <Link
              className="hud-frame clip-corner-sm hover:border-ember-500/70 p-3 transition-colors"
              href="/tier-list"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Tier list
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                Which slots are non-negotiable.
              </div>
            </Link>
            <Link
              className="hud-frame clip-corner-sm hover:border-ember-500/70 p-3 transition-colors"
              href="/guides"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Guides
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                Step-by-step playbooks for each archetype.
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
