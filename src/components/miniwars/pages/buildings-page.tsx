import { ArrowUpRight, ChevronRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function BuildingsPage() {
  return (
    <>
      <section className="border-camo-900/80 bg-bunker-950/40 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-50"></div>
        <div className="bg-ember-500/10 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="text-ember-500 mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase">
            <span className="bg-ember-500 h-px w-8"></span>DATABASE · BLD
          </div>
          <h1 className="font-display text-sand-100 text-4xl tracking-wider uppercase md:text-6xl">
            Mini Wars Buildings
          </h1>
          <p className="text-bunker-300 mt-4 max-w-2xl text-base leading-7 md:text-lg">
            The complete Mini Wars building list, sorted by category and unlock
            stage. The order you place these in is the difference between an
            early elimination and a top-board finish — read the tier and the
            tips, not just the stats.
          </p>
          <div className="mt-6">
            <div className="flex flex-wrap gap-2 font-mono text-[11px] tracking-widest uppercase">
              <span className="chip border-ember-700/70 text-ember-300">
                21 entries
              </span>
              <span className="chip">S-tier · 7</span>
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
                ABOUT THIS DATABASE
              </div>
              <div className="prose-tactical text-bunker-200 space-y-4 text-base leading-7 md:text-lg">
                <p>
                  This is the complete <strong>Mini Wars buildings</strong>{' '}
                  database for the Roblox country-conquest game by Horangi99.
                  Every placeable structure is documented here — from the
                  21-entry roster of resource farms, refineries, military bases,
                  and the endgame{' '}
                  <Link
                    id="black-hole-generator"
                    className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                    href="/buildings#black-hole-generator"
                  >
                    Black Hole Generator
                  </Link>
                  . Cards are sorted by category and unlock stage so you can
                  read this page top-to-bottom as a build order.
                </p>
                <p>
                  If you only have time for one section, jump to{' '}
                  <Link
                    id="cat-resource"
                    href="#cat-resource"
                    className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                  >
                    Resource buildings
                  </Link>{' '}
                  first — those decide your tempo for the entire run. Then plan
                  your S-tier slots using the{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/tier-list"
                  >
                    Mini Wars tier list
                  </Link>
                  , and pick a build order from the{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/strategy"
                  >
                    strategies page
                  </Link>{' '}
                  to see how these buildings combine into a winning archetype.
                </p>
              </div>
              <div className="grid gap-4 pt-4 md:grid-cols-2">
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    Build order priority
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      <span className="text-sand-100">Stage 1 (0-3 min)</span>:
                      Farmhouse → Wheat Farm → Carrot Farm → first Workshop. No
                      exceptions, no military yet.
                    </p>
                    <p>
                      <span className="text-sand-100">Stage 2 (3-8 min)</span>:
                      Storage Center, Bank, second Workshop, first Barracks for
                      population scaling.
                    </p>
                    <p>
                      <span className="text-sand-100">Stage 3 (8 min+)</span>:
                      Pivot to your archetype — Air Base for rush, Oil Rig +
                      Steel Mill for industrial scaling, or Bunker for turtle.
                    </p>
                  </div>
                </div>
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    How buildings interlock
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      Buildings in Mini Wars are not standalone — they form
                      chains. Carrot Farm → Workshop → Storage Center is the
                      Economy chain. Oil Rig → Steel Mill → Air Base is the
                      Industrial chain.
                    </p>
                    <p>
                      Read the{' '}
                      <Link
                        className="text-ember-400 underline-offset-2 hover:underline"
                        href="/systems"
                      >
                        game systems
                      </Link>{' '}
                      page to understand which chains feed which win conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="hud-frame clip-corner bg-bunker-900/40 sticky top-24 p-5">
                <div className="text-ember-500 mb-4 font-mono text-[10px] tracking-[0.4em] uppercase">
                  Jump to category
                </div>
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      id="cat-resource"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#cat-resource"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Resource
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="cat-production"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#cat-production"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Production
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="cat-population"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#cat-population"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Population
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="cat-economy"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#cat-economy"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Economy
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="cat-utility"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#cat-utility"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Utility
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="cat-defense"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#cat-defense"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Defense
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="cat-military"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#cat-military"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Military
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
                        Tier list
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
                        Build orders
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl space-y-14 px-4 py-12">
        <section id="cat-resource" className="scroll-mt-24">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div>
              <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
                <span className="bg-ember-500 h-px w-6"></span>Resource
              </div>
              <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
                Mini Wars Resource Buildings
              </h2>
            </div>
            <span className="text-camo-400 font-mono text-xs tracking-widest whitespace-nowrap uppercase">
              3 entries
            </span>
          </div>
          <p className="text-bunker-300 mb-5 max-w-3xl text-sm leading-7">
            Raw input generators — wheat, carrots, oil, steel. Place these
            first; nothing else works without resource flow.
          </p>
          <div className="stencil-line mb-6"></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              id="farmhouse"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#farmhouse"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    ECO-01 · Early
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Farmhouse
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-C inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  C
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                The starter resource node. Generates a slow trickle of crops
                that you sell at the Clerk's Shop for your first cash injection.
                Replace it the moment you can afford a real factory — never
                hoard farmhouses.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Resource
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Opening
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Tutorial
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Cheap · starter tier</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="wheat-farm"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#wheat-farm"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    ECO-02 · Early
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Wheat Farm
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-C inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  C
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                Bigger, faster wheat output than the Farmhouse. The backbone of
                your first 5 minutes — but a dead end past Mid game. The only
                correct move once your economy stabilises is to sell it and
                rebuild on the slot.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Resource
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Early income
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Crop chaining
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Cheap · early tier</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="carrot-farm"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#carrot-farm"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    ECO-03 · Early
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Carrot Farm
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-B inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  B
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                Carrots sell for noticeably more than wheat. The moment a Carrot
                Farm slot is open, take it — it scales income faster than
                stacking more Wheat Farms ever will.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Resource
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Early-Mid pivot
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Income scaling
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Moderate · early-mid tier</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </section>
        <section id="cat-production" className="scroll-mt-24">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div>
              <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
                <span className="bg-ember-500 h-px w-6"></span>Production
              </div>
              <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
                Mini Wars Production Buildings
              </h2>
            </div>
            <span className="text-camo-400 font-mono text-xs tracking-widest whitespace-nowrap uppercase">
              5 entries
            </span>
          </div>
          <p className="text-bunker-300 mb-5 max-w-3xl text-sm leading-7">
            Convert raw resources into refined output. Workshops, mills, and the
            rigs that bridge to military assets.
          </p>
          <div className="stencil-line mb-6"></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              id="wood-plant"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#wood-plant"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    IND-01 · Early
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Wood Plant
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-B inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  B
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                The transition out of pure crops and into industry. Wood is a
                reliable mid-tier sell on the Market and the prerequisite
                mindset shift for everything that comes after — factories beat
                farms.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Production
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Mid-game pivot
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Civilian-driven income
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Moderate · mid tier</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
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
                Auto-collects production from every nearby factory and farm.
                Place it in the middle of your industrial cluster and you stop
                wasting time clicking. The hidden multiplier on every building
                you own.
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
              id="oil-rig"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#oil-rig"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    IND-04 · Mid
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Oil Rig
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  A
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                A heavy-industry production node. Oil sells reasonably well on
                the Market, but its real value is as the upstream input for your
                military complex. Skipping the Oil Rig caps how many late-game
                units you can field at once, no matter how much money you
                stockpile.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Production
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Military supply
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Mid-late industry
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Expensive · mid-late industry</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="steel-mill"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#steel-mill"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    IND-03 · Mid
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Steel Mill
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  A
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                Refines raw inputs into Steel — the prerequisite material for
                every advanced military building, from Tank Bases to Missile
                Launchers. Without a Steel Mill in your chain, your military
                caps out at Barracks and Border Towers.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Production
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Military supply
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Mid-game pivot
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Expensive · mid industry</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </section>
        <section id="cat-population" className="scroll-mt-24">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div>
              <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
                <span className="bg-ember-500 h-px w-6"></span>Population
              </div>
              <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
                Mini Wars Population Buildings
              </h2>
            </div>
            <span className="text-camo-400 font-mono text-xs tracking-widest whitespace-nowrap uppercase">
              1 entries
            </span>
          </div>
          <p className="text-bunker-300 mb-5 max-w-3xl text-sm leading-7">
            Grow your civilian roster. Population gates how many soldiers,
            drivers, and operators you can field.
          </p>
          <div className="stencil-line mb-6"></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              id="houses"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#houses"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    POP-01 · Early
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Houses
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  A
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                Each House you own raises your civilian cap. More civilians
                means more factory throughput, which means more money, which
                means more military. Houses are the silent backbone of every
                successful run.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Population
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Population cap
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Factory staffing
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Cheap → scales</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </section>
        <section id="cat-economy" className="scroll-mt-24">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div>
              <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
                <span className="bg-ember-500 h-px w-6"></span>Economy
              </div>
              <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
                Mini Wars Economy Buildings
              </h2>
            </div>
            <span className="text-camo-400 font-mono text-xs tracking-widest whitespace-nowrap uppercase">
              3 entries
            </span>
          </div>
          <p className="text-bunker-300 mb-5 max-w-3xl text-sm leading-7">
            Cash and storage. Markets, vaults, and Storage Centers that decide
            whether your wealth survives a raid.
          </p>
          <div className="stencil-line mb-6"></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              id="nuclear-reactor"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#nuclear-reactor"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    ECO-08 · Late
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Nuclear Reactor
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  S
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                The economic milestone that signals you have officially
                graduated from farms. Reliable, dense, high-throughput income.
                If you have at least two of these running, you are in the top
                half of every server you join.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Economy
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Late income
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Multiplier core
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Expensive · late tier</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="data-center"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#data-center"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    ECO-09 · Late
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Data Center
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  S
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                Returns rival Nuclear Reactors in raw output, with a slightly
                different consumption profile. Running both is intentional —
                they smooth income variance and remove the Market timing tax.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Economy
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Stable late income
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Civilian utilisation
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Expensive · late tier</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="black-hole-generator"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#black-hole-generator"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    ECO-MAX · Endgame
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Black Hole Generator
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  S
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                The highest income source in Mini War. A single Black Hole
                Generator outpaces a stack of Reactors. The endgame flex — and
                the only econ building worth defending with your full military.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Economy
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Endgame
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Trophy build
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Endgame · save for the long haul</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </section>
        <section id="cat-utility" className="scroll-mt-24">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div>
              <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
                <span className="bg-ember-500 h-px w-6"></span>Utility
              </div>
              <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
                Mini Wars Utility Buildings
              </h2>
            </div>
            <span className="text-camo-400 font-mono text-xs tracking-widest whitespace-nowrap uppercase">
              3 entries
            </span>
          </div>
          <p className="text-bunker-300 mb-5 max-w-3xl text-sm leading-7">
            Quality-of-life buildings — builders, dispatchers, and
            infrastructure that compress your build time.
          </p>
          <div className="stencil-line mb-6"></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              id="clerks-shop"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#clerks-shop"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    MKT-01 · Early
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Clerk's Shop
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  A
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                Your sell point. Crops, wood, and steel turn into money here —
                but only at the price the Market is offering right now. Learning
                to time the Clerk's Shop is the single biggest skill ceiling in
                the game and a multiplier on every other building you own.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Utility
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Cashing out
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Market timing
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Cheap · always-on</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="worker-statue"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#worker-statue"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    BUF-01 · Early
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Worker Statue
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  A
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                A flat speed buff for every worker in radius. Place it next to
                your factory cluster and watch every farm and plant tick
                noticeably faster. Most new players never build one. They
                should.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Utility
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Output speed
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Hidden tempo
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Cheap · multiplier</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="soldier-statue"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#soldier-statue"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    BUF-02 · Mid
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Soldier Statue
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  A
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                The military counterpart of the Worker Statue. Inspires nearby
                troops to deal more damage in defensive engagements. A must-have
                for anyone holding a chokepoint.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Utility
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Defense
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Damage buff
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Cheap · multiplier</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </section>
        <section id="cat-defense" className="scroll-mt-24">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div>
              <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
                <span className="bg-ember-500 h-px w-6"></span>Defense
              </div>
              <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
                Mini Wars Defense Buildings
              </h2>
            </div>
            <span className="text-camo-400 font-mono text-xs tracking-widest whitespace-nowrap uppercase">
              2 entries
            </span>
          </div>
          <p className="text-bunker-300 mb-5 max-w-3xl text-sm leading-7">
            Walls, turrets, and the Bunker. Cheap insurance against Air Rush and
            ground raids.
          </p>
          <div className="stencil-line mb-6"></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              id="border-tower"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#border-tower"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    DEF-01 · Early
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Border Tower
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-B inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  B
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                A flat early-game guard against opportunistic raiders. Will not
                stop a real military push, but will make solo invaders think
                twice — and that is enough during the first 10 minutes.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Defense
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Early defense
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Civilian protection
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Cheap · early defense</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="bunker"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#bunker"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    DEF-02 · Mid
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Bunker
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  A
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                A hardened defensive structure that can garrison soldiers and
                absorb significantly more damage than a Border Tower. The Bunker
                is the difference between losing your civilians on the first
                raid and watching the attacker break themselves on your
                perimeter.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Defense
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Hard defense
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Civilian protection
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Expensive · core defense</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </section>
        <section id="cat-military" className="scroll-mt-24">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div>
              <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
                <span className="bg-ember-500 h-px w-6"></span>Military
              </div>
              <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
                Mini Wars Military Buildings
              </h2>
            </div>
            <span className="text-camo-400 font-mono text-xs tracking-widest whitespace-nowrap uppercase">
              4 entries
            </span>
          </div>
          <p className="text-bunker-300 mb-5 max-w-3xl text-sm leading-7">
            Offensive force. Barracks, Air Bases, and the Black Hole Generator —
            your win-condition slots.
          </p>
          <div className="stencil-line mb-6"></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              id="barracks"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#barracks"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    MIL-01 · Early
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Barracks
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  A
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                In Mini Wars the Barracks is a dual-purpose building: it
                produces civilians on a passive timer (the real backbone of your
                population) and it can also train those civilians into ground
                soldiers when war breaks out. Skipping the Barracks does not
                just delay your military — it caps your entire economy, because
                no civilians means no factory throughput.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Military
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Population growth
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Early military
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Moderate · core early-game pickup</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link
              id="tank-base"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#tank-base"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    MIL-04 · Mid
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Tank Base
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-A inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  A
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                Ground armor for territory raids. Tanks are the workhorse of any
                invasion plan that does not lean entirely on aircraft. Slower
                than air, but cheaper, tougher, and harder to counter.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Military
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Ground invasion
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Territory raids
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Expensive · mid military</span>
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
            <Link
              id="missile-launcher"
              className="group hud-frame clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col overflow-hidden p-5 transition-colors"
              href="/buildings#missile-launcher"
            >
              <div className="grid-bg absolute inset-0 opacity-30"></div>
              <div className="bg-ember-500/5 group-hover:bg-ember-500/15 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors"></div>
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="text-camo-400 mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                    MIL-06 · Mid
                  </div>
                  <h3 className="font-display text-sand-100 group-hover:text-ember-400 text-xl tracking-wider uppercase transition-colors">
                    Missile Launcher
                  </h3>
                </div>
                <span className="font-display clip-corner-sm tier-S inline-flex h-8 w-8 items-center justify-center border text-sm font-bold">
                  S
                </span>
              </div>
              <p className="text-bunker-300 relative mt-1 line-clamp-3 text-sm">
                High-damage long-range fire support. Missile Launchers are what
                turn a Black Hawk wave from a skirmish into an actual conquest.
                Run them in pairs — one alone gets sniped before it does enough
                damage.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="chip border-camo-700/70 text-camo-200">
                  Military
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Invasion
                </span>
                <span className="chip border-bunker-700 text-bunker-300">
                  Defense
                </span>
              </div>
              <div className="border-camo-800/70 text-camo-300 relative mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px] tracking-widest uppercase">
                <span>Expensive · meta pick</span>
                <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </section>
        <div className="hud-frame clip-corner bg-bunker-900/40 p-6 md:p-8">
          <h2 className="font-display text-sand-100 mb-4 text-xl tracking-wider uppercase">
            Use the Mini Wars buildings list with
          </h2>
          <div className="grid gap-3 text-sm md:grid-cols-3">
            <Link
              className="hud-frame clip-corner-sm hover:border-ember-500/70 p-3 transition-colors"
              href="/tier-list"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Tier list
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                S → D rankings with reasoning per slot.
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
                Build orders that turn this list into wins.
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
                Step-by-step opener using these buildings.
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
