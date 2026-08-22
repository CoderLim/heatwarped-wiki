import { ArrowUpRight, ChevronRight, Clock } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function GuidesPage() {
  return (
    <>
      <section className="border-camo-900/80 bg-bunker-950/40 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-50"></div>
        <div className="bg-ember-500/10 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="text-ember-500 mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase">
            <span className="bg-ember-500 h-px w-8"></span>Field Manual ·
            Section 08
          </div>
          <h1 className="font-display text-sand-100 text-4xl tracking-wider uppercase md:text-6xl">
            Mini Wars Guides
          </h1>
          <p className="text-bunker-300 mt-4 max-w-2xl text-base leading-7 md:text-lg">
            Long-form Mini Wars guides written for players who actually win
            their matches. Build orders, rotations, and the small reads that
            separate average from top-board finishes.
          </p>
        </div>
      </section>
      <section className="border-camo-900/60 bg-bunker-950/40 relative border-b">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 lg:col-span-8">
              <div className="text-ember-500 font-mono text-[11px] tracking-[0.4em] uppercase">
                ABOUT MINI WARS GUIDES
              </div>
              <div className="prose-tactical text-bunker-200 space-y-4 text-base leading-7 md:text-lg">
                <p>
                  Every <strong>Mini Wars guide</strong> on this page is a
                  long-form playbook — not a 60-second tip. Each one walks you
                  from match start to win condition with explicit build orders,
                  timing benchmarks, and the read-the-lobby decisions that
                  separate a top-board finish from an early elimination. If you
                  are new to Mini Wars on Roblox, start with the{' '}
                  <Link
                    id="beginner-opening-guide"
                    className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                    href="/guides#beginner-opening-guide"
                  >
                    beginner opening guide
                  </Link>
                  . If you have a few wins under your belt, jump straight to the
                  archetype that fits your playstyle.
                </p>
                <p>
                  These guides assume you already know the building names — if
                  any callout below feels unfamiliar, open the{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/buildings"
                  >
                    buildings database
                  </Link>{' '}
                  in a second tab. For the macro choice of which archetype to
                  run, the{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/strategy"
                  >
                    strategies page
                  </Link>{' '}
                  has a 30-second decision tree.
                </p>
              </div>
              <div className="grid gap-4 pt-4 md:grid-cols-2">
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    Reading path by skill level
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      <span className="text-sand-100">First match</span> →{' '}
                      <Link
                        id="beginner-opening-guide"
                        className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                        href="/guides#beginner-opening-guide"
                      >
                        Beginner opening guide
                      </Link>
                      . Stops you losing in the first 5 minutes.
                    </p>
                    <p>
                      <span className="text-sand-100">First wins</span> →{' '}
                      <Link
                        id="economy-first-build-order"
                        className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                        href="/guides#economy-first-build-order"
                      >
                        Economy First build order
                      </Link>
                      . The safest way to a consistent top finish.
                    </p>
                    <p>
                      <span className="text-sand-100">Aggressive players</span>{' '}
                      →{' '}
                      <Link
                        id="air-rush-conquest-playbook"
                        className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                        href="/guides#air-rush-conquest-playbook"
                      >
                        Air Rush conquest playbook
                      </Link>
                      . The all-in tempo opener.
                    </p>
                  </div>
                </div>
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    Topics covered
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      <span className="text-sand-100">Build orders</span> — the
                      exact placement order for the first 8 minutes.
                    </p>
                    <p>
                      <span className="text-sand-100">Lobby reads</span> — when
                      to pivot off a plan because the map is telling you to.
                    </p>
                    <p>
                      <span className="text-sand-100">
                        Endgame win conditions
                      </span>
                      — Black Hole Generator scaling vs map domination vs income
                      victory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="hud-frame clip-corner bg-bunker-900/40 sticky top-24 p-5">
                <div className="text-ember-500 mb-4 font-mono text-[10px] tracking-[0.4em] uppercase">
                  Jump to guide
                </div>
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      id="beginner-opening-guide"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/guides#beginner-opening-guide"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Beginner Opening Guide: Your First 10 Minutes
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="economy-first-build-order"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/guides#economy-first-build-order"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Economy-First Build Order — From Farmhouse to Black Hole
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="air-rush-conquest-playbook"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/guides#air-rush-conquest-playbook"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Air Rush Conquest Playbook — Black Hawks + Missiles
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="turtle-defense-mini-wars-guide"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/guides#turtle-defense-mini-wars-guide"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Turtle Defense Guide — How to Survive an Aggressive
                        Lobby in Mini Wars
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="mini-wars-conquest-snowball-strategy"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/guides#mini-wars-conquest-snowball-strategy"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Mini Wars Conquest Strategy — How to Snowball
                        Multipliers Across the Map
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="mini-wars-late-game-scaling-guide"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/guides#mini-wars-late-game-scaling-guide"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Mini Wars Late-Game Scaling Guide — Reactors, Data
                        Centers, and the Black Hole Generator
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="mini-wars-air-base-meta-guide"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/guides#mini-wars-air-base-meta-guide"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Mini Wars Air Base Meta Guide — Why Black Hawks Run the
                        Lobby
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="mini-wars-economy-mistakes-to-avoid"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/guides#mini-wars-economy-mistakes-to-avoid"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Mini Wars Economy Mistakes — 10 Habits That Quietly Lose
                        You the Round
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/strategy"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Strategies hub
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
                  <li>
                    <Link
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/faq"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        FAQ
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl space-y-10 px-4 py-12">
        <div>
          <h2 className="sr-only">All Mini Wars guides</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              id="beginner-opening-guide"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/guides#beginner-opening-guide"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-center gap-2">
                <span className="chip border-ember-700/70 text-ember-300">
                  Beginner
                </span>
                <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  May 06, 2026
                </span>
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 relative text-xl tracking-wider uppercase transition-colors">
                Beginner Opening Guide: Your First 10 Minutes
              </h3>
              <p className="text-bunker-300 relative mt-2 line-clamp-2 text-sm">
                A step-by-step opening for new Mini War players — the right
                buildings in the right order, the one purchase that beats every
                other, and the trap that kills most first runs.
              </p>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />7 min
                </span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="economy-first-build-order"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/guides#economy-first-build-order"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-center gap-2">
                <span className="chip border-ember-700/70 text-ember-300">
                  Economy
                </span>
                <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  May 04, 2026
                </span>
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 relative text-xl tracking-wider uppercase transition-colors">
                Economy-First Build Order — From Farmhouse to Black Hole
              </h3>
              <p className="text-bunker-300 relative mt-2 line-clamp-2 text-sm">
                The full economy-first arc: how to bootstrap from a single
                Farmhouse into a Nuclear Reactor + Data Center skeleton, and
                what the long-haul Black Hole Generator path actually looks
                like.
              </p>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />9 min
                </span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="air-rush-conquest-playbook"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/guides#air-rush-conquest-playbook"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-center gap-2">
                <span className="chip border-ember-700/70 text-ember-300">
                  Military
                </span>
                <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  Apr 28, 2026
                </span>
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 relative text-xl tracking-wider uppercase transition-colors">
                Air Rush Conquest Playbook — Black Hawks + Missiles
              </h3>
              <p className="text-bunker-300 relative mt-2 line-clamp-2 text-sm">
                The mid-game power spike that turns the lobby on its head. When
                to commit to the Air Base, how to time your first invasion, and
                why two Missile Launchers always beats three.
              </p>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />8 min
                </span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="turtle-defense-mini-wars-guide"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/guides#turtle-defense-mini-wars-guide"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-center gap-2">
                <span className="chip border-ember-700/70 text-ember-300">
                  Strategy
                </span>
                <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  Apr 22, 2026
                </span>
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 relative text-xl tracking-wider uppercase transition-colors">
                Turtle Defense Guide — How to Survive an Aggressive Lobby in
                Mini Wars
              </h3>
              <p className="text-bunker-300 relative mt-2 line-clamp-2 text-sm">
                A full defensive playbook for Mini Wars: how to read aggression
                early, the cheapest perimeter that actually holds, and the
                counter-pivot that turns survivors into conquerors.
              </p>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />9 min
                </span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="mini-wars-conquest-snowball-strategy"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/guides#mini-wars-conquest-snowball-strategy"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-center gap-2">
                <span className="chip border-ember-700/70 text-ember-300">
                  Strategy
                </span>
                <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  Apr 18, 2026
                </span>
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 relative text-xl tracking-wider uppercase transition-colors">
                Mini Wars Conquest Strategy — How to Snowball Multipliers Across
                the Map
              </h3>
              <p className="text-bunker-300 relative mt-2 line-clamp-2 text-sm">
                Conquering one country is easy. Conquering three before anyone
                fights back is a strategy. The full snowball playbook: target
                selection, invasion timing, and the multiplier math that wins
                lobbies.
              </p>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />9 min
                </span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="mini-wars-late-game-scaling-guide"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/guides#mini-wars-late-game-scaling-guide"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-center gap-2">
                <span className="chip border-ember-700/70 text-ember-300">
                  Economy
                </span>
                <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  Apr 14, 2026
                </span>
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 relative text-xl tracking-wider uppercase transition-colors">
                Mini Wars Late-Game Scaling Guide — Reactors, Data Centers, and
                the Black Hole Generator
              </h3>
              <p className="text-bunker-300 relative mt-2 line-clamp-2 text-sm">
                The endgame skeleton in detail: when each Reactor pays back, how
                Data Centers smooth income variance, and the realistic path to a
                working Black Hole Generator.
              </p>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  10 min
                </span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="mini-wars-air-base-meta-guide"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/guides#mini-wars-air-base-meta-guide"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-center gap-2">
                <span className="chip border-ember-700/70 text-ember-300">
                  Military
                </span>
                <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  Apr 10, 2026
                </span>
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 relative text-xl tracking-wider uppercase transition-colors">
                Mini Wars Air Base Meta Guide — Why Black Hawks Run the Lobby
              </h3>
              <p className="text-bunker-300 relative mt-2 line-clamp-2 text-sm">
                A deep look at the dominant military structure in Mini Wars. Air
                Base mechanics, Black Hawk pathing, supporting comps, and the
                exact counter package every defender needs.
              </p>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />9 min
                </span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="mini-wars-economy-mistakes-to-avoid"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/guides#mini-wars-economy-mistakes-to-avoid"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-center gap-2">
                <span className="chip border-ember-700/70 text-ember-300">
                  Economy
                </span>
                <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  Apr 06, 2026
                </span>
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 relative text-xl tracking-wider uppercase transition-colors">
                Mini Wars Economy Mistakes — 10 Habits That Quietly Lose You the
                Round
              </h3>
              <p className="text-bunker-300 relative mt-2 line-clamp-2 text-sm">
                The silent income leaks that bleed mid-tier Mini Wars players:
                hoarding farms, late Storage Centers, mistimed Market sells, and
                the one Workshop decision that warps your entire run.
              </p>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />8 min
                </span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </div>
        <div className="hud-frame clip-corner bg-bunker-900/40 p-6 md:p-8">
          <h2 className="font-display text-sand-100 mb-4 text-xl tracking-wider uppercase">
            Pair Mini Wars guides with
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
                Lookup any structure mentioned in a guide.
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
                Why each guide prioritises specific buildings.
              </div>
            </Link>
            <Link
              className="hud-frame clip-corner-sm hover:border-ember-500/70 p-3 transition-colors"
              href="/systems"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Game systems
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                Mechanics behind every build order.
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
