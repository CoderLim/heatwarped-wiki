import { Building, ChevronRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function TierListPage() {
  return (
    <>
      <section className="border-camo-900/80 bg-bunker-950/40 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-50"></div>
        <div className="bg-ember-500/10 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="text-ember-500 mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase">
            <span className="bg-ember-500 h-px w-8"></span>DOCTRINE · TIER
          </div>
          <h1 className="font-display text-sand-100 text-4xl tracking-wider uppercase md:text-6xl">
            Mini Wars Tier List
          </h1>
          <p className="text-bunker-300 mt-4 max-w-2xl text-base leading-7 md:text-lg">
            Every Mini Wars building ranked S → D by long-term ROI and
            current-meta impact. Last calibrated on the Live Build · May 2026
            build — re-check after every major update.
          </p>
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              <span className="chip border-ember-700/70 text-ember-300">
                Live Build · May 2026
              </span>
              <span className="chip">21 buildings ranked</span>
              <span className="chip">Updated 2026-05-06</span>
            </div>
          </div>
        </div>
      </section>
      <section className="border-camo-900/60 bg-bunker-950/40 relative border-b">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 lg:col-span-8">
              <div className="text-ember-500 font-mono text-[11px] tracking-[0.4em] uppercase">
                ABOUT THIS TIER LIST
              </div>
              <div className="prose-tactical text-bunker-200 space-y-4 text-base leading-7 md:text-lg">
                <p>
                  This <strong>Mini Wars tier list</strong> ranks every
                  buildable structure in the game from{' '}
                  <span className="text-sand-100">S</span> (mandatory) to{' '}
                  <span className="text-sand-100">D</span> (avoid), based on the
                  May 2026 Live Build. Each placement is driven by three hard
                  signals: long-term return on investment per build slot,
                  observed top-board base layouts in active lobbies, and how
                  well the building scales into the late-game economy and
                  conquest phases.
                </p>
                <p>
                  Use this page to plan your next build order. If you are coming
                  from the{' '}
                  <Link
                    id="beginner-opening-guide"
                    className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                    href="/guides#beginner-opening-guide"
                  >
                    beginner opening guide
                  </Link>
                  , this tier list tells you which slots to fill first. If you
                  are experimenting with one of the{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/strategy"
                  >
                    Mini Wars strategies
                  </Link>
                  , the S- and A-tier list below covers your non-negotiables —
                  the rest is archetype flavour.
                </p>
              </div>
              <div className="grid gap-4 pt-4 md:grid-cols-2">
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    How tiers are decided
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      <span className="text-sand-100">ROI per slot</span> —
                      every building competes for finite land. We weigh
                      production rate, unlock cost, and ramp time, not nominal
                      output.
                    </p>
                    <p>
                      <span className="text-sand-100">Meta fit</span> — does the
                      building enable the current top archetypes (Economy First,
                      Air Rush, Conquest Snowball)? If yes, it climbs.
                    </p>
                    <p>
                      <span className="text-sand-100">Late-game relevance</span>{' '}
                      — buildings that fall off after Stage 3 cannot earn S, no
                      matter how strong their early curve is.
                    </p>
                  </div>
                </div>
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    When the list shifts
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      Mini Wars is a Live Build game. Patches change building
                      costs, output rates, and unlock conditions without
                      warning. This list is re-calibrated after every shipped
                      update — see the{' '}
                      <Link
                        className="text-ember-400 underline-offset-2 hover:underline"
                        href="/patch-notes"
                      >
                        patch notes
                      </Link>{' '}
                      page for the full version history.
                    </p>
                    <p>
                      Last full re-calibration:{' '}
                      <span className="text-sand-100">
                        Live Build · May 2026
                      </span>{' '}
                      (2026-05-06).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="hud-frame clip-corner bg-bunker-900/40 sticky top-24 p-5">
                <div className="text-ember-500 mb-4 font-mono text-[10px] tracking-[0.4em] uppercase">
                  Jump to tier
                </div>
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      id="tier-s"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#tier-s"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        S-Tier · mandatory
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="tier-a"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#tier-a"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        A-Tier · core
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="tier-b"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#tier-b"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        B-Tier · situational
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="tier-c"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#tier-c"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        C-Tier · starter only
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="tier-d"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#tier-d"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        D-Tier · skip
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="methodology"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#methodology"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Methodology
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
                        All buildings
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
                        Strategies &amp; build orders
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
        <div id="tier-s" className="scroll-mt-24">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-display clip-corner-sm tier-S inline-flex h-12 w-12 items-center justify-center border text-lg font-bold">
              S
            </span>
            <div>
              <h2 className="font-display text-sand-100 text-3xl tracking-wider uppercase">
                Tier S — Mandatory
              </h2>
              <p className="text-bunker-300 max-w-2xl text-sm">
                Mandatory. Skipping these is the difference between an early
                elimination and a top-board finish.
              </p>
            </div>
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <Link
              id="workshop"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#workshop"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Production · INF-01
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Workshop
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      S
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    The single highest-impact early-game purchase. Each Workshop
                    adds a builder, accelerating every other building on your
                    base — including military structures during wartime.
                    Skipping it is the most punishing beginner mistake in Mini
                    War.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="storage-center"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#storage-center"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Production · INF-02
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Storage Center
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      S
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    The hidden multiplier. Auto-collects from every factory in
                    radius, removing the click tax that bleeds time from new
                    players. A Storage Center inside a tight factory cluster is
                    worth more than a second factory.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="air-base"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#air-base"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Military · MIL-05
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Air Base · Black Hawks
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      S
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Black Hawks from the Air Base are the strongest mid-game
                    offensive unit in the current build. Two Air Bases plus two
                    Missile Launchers is the canonical conquest composition.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="missile-launcher"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#missile-launcher"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Military · MIL-06
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Missile Launcher
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      S
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    The other half of the meta combo. Long-range damage that
                    turns an air strike from a skirmish into a real conquest.
                    Run them in pairs — one alone gets sniped before payoff.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="nuclear-reactor"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#nuclear-reactor"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Economy · ECO-08
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Nuclear Reactor
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      S
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    The mid-late economy milestone. Reliable, dense passive
                    income at a small footprint. Two Reactors plus a Data Center
                    is the late-mid econ skeleton of every winning run.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="data-center"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#data-center"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Economy · ECO-09
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Data Center
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      S
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Pairs with the Nuclear Reactor to smooth income variance.
                    Eats civilians in exchange for steady cash output, removing
                    the Market timing tax once you scale.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="black-hole-generator"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#black-hole-generator"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Economy · ECO-MAX
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Black Hole Generator
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      S
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Endgame trophy and the highest income source in the game.
                    Most lobbies end before anyone finishes one — but if you do,
                    you have effectively won.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div id="tier-a" className="scroll-mt-24">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-display clip-corner-sm tier-A inline-flex h-12 w-12 items-center justify-center border text-lg font-bold">
              A
            </span>
            <div>
              <h2 className="font-display text-sand-100 text-3xl tracking-wider uppercase">
                Tier A — Core
              </h2>
              <p className="text-bunker-300 max-w-2xl text-sm">
                Core. Always worth the slot. The backbone of every successful
                build order.
              </p>
            </div>
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <Link
              id="carrot-farm"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#carrot-farm"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Resource · ECO-03
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Carrot Farm
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      A
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    The single biggest income upgrade of the early game. Replace
                    your Wheat Farms with Carrot Farms the moment a slot opens —
                    never stack both.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="houses"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#houses"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Population · POP-01
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Houses
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      A
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    The silent backbone. Civilians staff every factory you own,
                    and Houses cap your civilian growth. Skipping Houses caps
                    your entire economy — but they do not directly print money
                    on their own.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="soldier-statue"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#soldier-statue"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Utility · BUF-02
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Soldier Statue
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      A
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Free damage multiplier on every nearby military unit.
                    Mandatory in any defensive cluster, easy to overlook in the
                    build menu.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="worker-statue"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#worker-statue"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Utility · BUF-01
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Worker Statue
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      A
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Flat speed buff for every worker in radius. One placed at
                    the heart of your industrial zone is worth its slot, every
                    time.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="clerks-shop"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#clerks-shop"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Utility · MKT-01
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Clerk&#x27;s Shop
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      A
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Mandatory by definition — your only sell point. Tier
                    reflects skill ceiling: timing the Market well at the
                    Clerk&#x27;s Shop is a meaningful multiplier on every other
                    building you own.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="barracks"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#barracks"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Military · MIL-01
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Barracks
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      A
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Dual-purpose and quietly indispensable: produces civilians
                    on a passive timer (the real backbone of your population)
                    and trains soldiers when war breaks out. Skipping the
                    Barracks does not just delay your military — it caps your
                    entire economy.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="oil-rig"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#oil-rig"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Production · IND-04
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Oil Rig
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      A
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Mid-tier industrial unlock that gates your late-game
                    military depth. Oil sells reasonably on the Market, but its
                    real value is as the upstream input for advanced units.
                    Skipping it caps how many Air Bases you can sustain at once.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="steel-mill"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#steel-mill"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Production · IND-03
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Steel Mill
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      A
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    The chain step between civilian industry and military
                    production. Without a Steel Mill, your military caps out at
                    Barracks and Border Towers. One per stable mid-game economy
                    is the floor.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="bunker"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#bunker"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Defense · DEF-02
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Bunker
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      A
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Hardened defensive structure that garrisons soldiers and
                    absorbs significantly more damage than a Border Tower. The
                    difference between losing your civilians on the first raid
                    and watching the attacker break themselves on your
                    perimeter.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div id="tier-b" className="scroll-mt-24">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-display clip-corner-sm tier-B inline-flex h-12 w-12 items-center justify-center border text-lg font-bold">
              B
            </span>
            <div>
              <h2 className="font-display text-sand-100 text-3xl tracking-wider uppercase">
                Tier B — Situational
              </h2>
              <p className="text-bunker-300 max-w-2xl text-sm">
                Useful, situational. Stepping stones or specialised tools — not
                destinations.
              </p>
            </div>
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <Link
              id="wood-plant"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#wood-plant"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Production · IND-01
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Wood Plant
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-B inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      B
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Reliable mid-tier sell on the Market and the prerequisite
                    mindset shift from crops to industry. Useful, never dominant
                    — a stepping stone, not a destination.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="tank-base"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#tank-base"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Military · MIL-04
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Tank Base
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-B inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      B
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Solid combined-arms support, but mostly outshone by Air Base
                    in the current meta. Brings real value when paired with air,
                    dies alone against a fortified base.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="border-tower"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#border-tower"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Defense · DEF-01
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Border Tower
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-B inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      B
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    A flat early-game guard against opportunistic raiders. Will
                    not stop a real military push but it does discourage solo
                    invaders during the first 10 minutes.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div id="tier-c" className="scroll-mt-24">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-display clip-corner-sm tier-C inline-flex h-12 w-12 items-center justify-center border text-lg font-bold">
              C
            </span>
            <div>
              <h2 className="font-display text-sand-100 text-3xl tracking-wider uppercase">
                Tier C — Starter only
              </h2>
              <p className="text-bunker-300 max-w-2xl text-sm">
                Starter or trap. Place once, then sell the slot for something
                better.
              </p>
            </div>
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <Link
              id="wheat-farm"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#wheat-farm"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Resource · ECO-02
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Wheat Farm
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-C inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      C
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Useful for the first 5 minutes, dead weight after. Sell and
                    replace once Carrot Farm or Wood Plant is available — slot
                    value beats stacking.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              id="farmhouse"
              className="hud-frame clip-corner group hover:border-ember-500/70 scroll-mt-24 p-5 transition-colors"
              href="/buildings#farmhouse"
            >
              <div className="flex items-start gap-4">
                <div className="border-ember-500/60 bg-bunker-900 clip-corner-sm flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Building className="text-ember-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                        Resource · ECO-01
                      </div>
                      <div className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                        Farmhouse
                      </div>
                    </div>
                    <span className="font-display clip-corner-sm tier-C inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                      C
                    </span>
                  </div>
                  <p className="text-bunker-200 mt-2 text-sm leading-7">
                    Pure starter tier. The building you place once, then
                    demolish. Hoarding farmhouses is the textbook trap that
                    slows new players for the entire round.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div
          id="methodology"
          className="hud-frame clip-corner scroll-mt-24 p-6"
        >
          <div className="text-ember-500 mb-2 font-mono text-[10px] tracking-widest uppercase">
            Methodology
          </div>
          <h2 className="font-display text-sand-100 mb-2 text-xl tracking-wider uppercase">
            How this Mini Wars tier list is calibrated
          </h2>
          <p className="text-bunker-200 text-sm leading-7">
            Tiers blend three signals: long-term return on investment per build
            slot, observed top-board base layouts in active lobbies, and
            consensus from the beginner-to-advanced strategies on this wiki.
            Tiers shift when the developers ship balance updates — re-check
            after every Live Build refresh.
          </p>
        </div>
        <div className="hud-frame clip-corner bg-bunker-900/40 p-6 md:p-8">
          <h2 className="font-display text-sand-100 mb-4 text-xl tracking-wider uppercase">
            Use this tier list with
          </h2>
          <div className="grid gap-3 text-sm md:grid-cols-3">
            <Link
              className="hud-frame clip-corner-sm hover:border-ember-500/70 p-3 transition-colors"
              href="/buildings"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                All buildings
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                Full Mini Wars building list with stats and pairings.
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
                Build orders that turn S/A buildings into wins.
              </div>
            </Link>
            <Link
              id="beginner-opening-guide"
              className="hud-frame clip-corner-sm hover:border-ember-500/70 scroll-mt-24 p-3 transition-colors"
              href="/guides#beginner-opening-guide"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Beginner guide
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                Your first 20 minutes — using S-tier first.
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
