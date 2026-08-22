import { ArrowUpRight, ChevronRight, Cpu } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function SystemsPage() {
  return (
    <>
      <section className="border-camo-900/80 bg-bunker-950/40 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-50"></div>
        <div className="bg-ember-500/10 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="text-ember-500 mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase">
            <span className="bg-ember-500 h-px w-8"></span>DATABASE · SYS
          </div>
          <h1 className="font-display text-sand-100 text-4xl tracking-wider uppercase md:text-6xl">
            Mini Wars Game Systems
          </h1>
          <p className="text-bunker-300 mt-4 max-w-2xl text-base leading-7 md:text-lg">
            The interlocking systems that drive every match of Mini Wars. Read
            these once and the whole tier list, every build order, and every
            winning strategy on the rest of this wiki will stop feeling random.
          </p>
          <div className="mt-6">
            <div className="flex flex-wrap gap-2 font-mono text-[11px] tracking-widest uppercase">
              <span className="chip border-ember-700/70 text-ember-300">
                7 systems
              </span>
              <span className="chip">Mechanics · Tips</span>
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
                HOW MINI WARS WORKS
              </div>
              <div className="prose-tactical text-bunker-200 space-y-4 text-base leading-7 md:text-lg">
                <p>
                  Every <strong>Mini Wars game system</strong> documented here
                  is a first-class mechanic — not a vibe, not a tip. Mini Wars
                  on Roblox runs on 7 interlocking systems that together produce
                  every emergent moment in a match: the Economy that funds you,
                  the Market that prices your trades, the Military that wins
                  fights, the Conquest layer that snowballs winners, and the
                  Generals, Population, and Country Design systems that bind it
                  all together.
                </p>
                <p>
                  If you have ever wondered <em>why</em> the meta favours
                  certain{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/buildings"
                  >
                    buildings
                  </Link>{' '}
                  over others, or why the same{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/strategy"
                  >
                    strategy
                  </Link>{' '}
                  works in one lobby and folds in another, the answer is on this
                  page. Read it in the recommended order below — each system
                  feeds the next.
                </p>
              </div>
              <div className="grid gap-4 pt-4 md:grid-cols-2">
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    Recommended reading order
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      <span className="text-sand-100">1. Economy</span> — the
                      resource pump. Everything else compounds on top of this.
                    </p>
                    <p>
                      <span className="text-sand-100">2. Population</span> —
                      gates how many soldiers you can field. Often skipped,
                      always punishing.
                    </p>
                    <p>
                      <span className="text-sand-100">3. Market</span> — convert
                      surplus to cash and the cash-to-power loop.
                    </p>
                    <p>
                      <span className="text-sand-100">4. Military</span> — what
                      wins fights once Economy and Population are humming.
                    </p>
                    <p>
                      <span className="text-sand-100">5. Conquest</span> — the
                      multiplier that turns a lead into a win. Read last.
                    </p>
                  </div>
                </div>
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    How the systems interlock
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      Economy → Market → Military is the production chain. Cut
                      any link and the chain stalls.
                    </p>
                    <p>
                      Population → Military is the throughput cap. You cannot
                      field what you cannot house.
                    </p>
                    <p>
                      Country Design → Conquest is the territory loop. Land
                      expansion compounds your Economy, which funds more
                      Military, which captures more Land. This is how runaway
                      leaders happen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="hud-frame clip-corner bg-bunker-900/40 sticky top-24 p-5">
                <div className="text-ember-500 mb-4 font-mono text-[10px] tracking-[0.4em] uppercase">
                  Jump to system
                </div>
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      id="economy"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/systems#economy"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Economy
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="market"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/systems#market"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Market &amp; Pricing
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="military"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/systems#military"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Military
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="conquest"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/systems#conquest"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Conquest &amp; Expansion
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="generals"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/systems#generals"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Generals
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="population"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/systems#population"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Population &amp; Civilians
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="country-design"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/systems#country-design"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Country Design &amp; Land Expansion
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/buildings"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Building list
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
                        Strategies
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
        <div>
          <h2 className="sr-only">All Mini Wars game systems</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              id="economy"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/systems#economy"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-start gap-3">
                <div className="border-camo-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                  <Cpu className="text-camo-300 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                    SYS · ECON
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Economy
                  </h3>
                </div>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                The cash and resource pipeline that powers everything else.
                Crops feed the Clerk's Shop, factories feed the Market, and the
                Market feeds your military. A bad economy is a short run — every
                successful Mini Wars game starts here. The pipeline runs in
                three layers: Resource (farms, oil) → Production (Wood Plant,
                Steel Mill, Reactors) → Sale (Clerk's Shop / Market).
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-800 text-camo-300">core</span>
                <span className="chip border-camo-800 text-camo-300">
                  economy
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>6 mechanics</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="market"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/systems#market"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-start gap-3">
                <div className="border-camo-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                  <Cpu className="text-camo-300 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                    SYS · MKT
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Market &amp; Pricing
                  </h3>
                </div>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                A live commodity market that re-prices crops, wood, and steel
                every couple of minutes. Selling into a dip burns 10–20% of your
                income invisibly. Selling into a surge prints money. The single
                biggest skill ceiling in the game lives here.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-800 text-camo-300">core</span>
                <span className="chip border-camo-800 text-camo-300">
                  skill-ceiling
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>4 mechanics</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="military"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/systems#military"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-start gap-3">
                <div className="border-camo-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                  <Cpu className="text-camo-300 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                    SYS · MIL
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Military
                  </h3>
                </div>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                Your conversion of civilians + steel into ground, air, and
                missile units. Infantry is a placeholder — Black Hawks from the
                Air Base, backed by Missile Launchers, is the dominant offensive
                composition in the current build.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-800 text-camo-300">core</span>
                <span className="chip border-camo-800 text-camo-300">
                  military
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>4 mechanics</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="conquest"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/systems#conquest"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-start gap-3">
                <div className="border-camo-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                  <Cpu className="text-camo-300 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                    SYS · CNQ
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Conquest &amp; Expansion
                  </h3>
                </div>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                Invading other players' territory grants a permanent income
                multiplier and adds civilians to your roster. Stacking conquests
                is the real engine behind late-game wealth — the gap between a
                mid-tier finish and a top-place run is almost always how many
                countries got captured.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-800 text-camo-300">core</span>
                <span className="chip border-camo-800 text-camo-300">
                  expansion
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>4 mechanics</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="generals"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/systems#generals"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-start gap-3">
                <div className="border-camo-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                  <Cpu className="text-camo-300 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                    SYS · GEN
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Generals
                  </h3>
                </div>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                Specialised commander units that buff specific military
                compositions and provide unique abilities during invasions.
                Generals stack their bonuses with statues and structure-level
                upgrades — the right General can flip a 50/50 invasion into a
                clean win. Community footage shows Generals appearing as named
                hero units that lead a stack of standard troops, with both
                passive auras and a triggerable active.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-800 text-camo-300">
                  advanced
                </span>
                <span className="chip border-camo-800 text-camo-300">
                  commander
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>5 mechanics</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="population"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/systems#population"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-start gap-3">
                <div className="border-camo-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                  <Cpu className="text-camo-300 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                    SYS · POP
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Population &amp; Civilians
                  </h3>
                </div>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                Civilians are the silent currency behind every other system.
                Houses set the cap, the Barracks fills it, and every factory you
                own depletes it as it runs. Mismanaging your population means
                starved factories and an army you cannot recruit. Most beginners
                hit a wall here long before they hit a money wall.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-800 text-camo-300">core</span>
                <span className="chip border-camo-800 text-camo-300">
                  population
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>6 mechanics</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="country-design"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/systems#country-design"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="relative mb-3 flex items-start gap-3">
                <div className="border-camo-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 items-center justify-center border">
                  <Cpu className="text-camo-300 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-camo-400 mb-1 font-mono text-[10px] tracking-widest uppercase">
                    SYS · LAND
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Country Design &amp; Land Expansion
                  </h3>
                </div>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                Mini Wars gives every player a private country plot that you
                build out grid-by-grid. The shape and size of that plot is
                itself a strategic resource: more land means more buildings, but
                bigger countries are harder to defend. Buying additional land
                tiles is a real lever — most experienced players expand twice in
                the early-mid game and once again before the late push.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-800 text-camo-300">core</span>
                <span className="chip border-camo-800 text-camo-300">
                  planning
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>5 mechanics</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </div>
        <div className="hud-frame clip-corner bg-bunker-900/40 p-6 md:p-8">
          <h2 className="font-display text-sand-100 mb-4 text-xl tracking-wider uppercase">
            Apply Mini Wars systems with
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
                The structures these systems run through.
              </div>
            </Link>
            <Link
              className="hud-frame clip-corner-sm hover:border-ember-500/70 p-3 transition-colors"
              href="/strategy"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Strategies
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                Build orders that exploit specific systems.
              </div>
            </Link>
            <Link
              id="economy-first-build-order"
              className="hud-frame clip-corner-sm hover:border-ember-500/70 scroll-mt-24 p-3 transition-colors"
              href="/guides#economy-first-build-order"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Economy First guide
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                A worked example of the Economy system.
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
