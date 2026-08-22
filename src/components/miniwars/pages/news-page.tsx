import {
  ArrowUpRight,
  ChevronRight,
  Clock,
  Newspaper,
  Radio,
} from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function NewsPage() {
  return (
    <>
      <section className="border-camo-900/80 bg-bunker-950/40 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-50"></div>
        <div className="bg-ember-500/10 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="text-ember-500 mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase">
            <span className="bg-ember-500 h-px w-8"></span>SIGNAL · NEWS LOG
          </div>
          <h1 className="font-display text-sand-100 text-4xl tracking-wider uppercase md:text-6xl">
            Mini Wars News
          </h1>
          <p className="text-bunker-300 mt-4 max-w-2xl text-base leading-7 md:text-lg">
            Independent coverage of Mini Wars Live Build refreshes, codes
            rotations, tier-list shake-ups, and the meta reads that decide your
            next round. Updated as each patch drops.
          </p>
        </div>
      </section>
      <section className="border-camo-900/60 bg-bunker-950/40 relative border-b">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 lg:col-span-8">
              <div className="text-ember-500 font-mono text-[11px] tracking-[0.4em] uppercase">
                ABOUT MINI WARS NEWS
              </div>
              <div className="prose-tactical text-bunker-200 space-y-4 text-base leading-7 md:text-lg">
                <p>
                  The <strong>Mini Wars news log</strong> is where every Live
                  Build refresh, codes drop, and meta shift gets a dated,
                  indexable recap. Each post is a 4-6 minute read that
                  translates the official changelog into actionable changes for
                  your build order — what to swap into your opening, what to
                  drop, and which targets just got softer or harder.
                </p>
                <p>
                  For the structured numbered changelog, see the{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/patch-notes"
                  >
                    patch notes
                  </Link>
                  . For the live status of redeemable codes, see the{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/codes"
                  >
                    codes page
                  </Link>
                  . For the long-form playbooks, see the{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/guides"
                  >
                    guides hub
                  </Link>
                  .
                </p>
              </div>
              <div className="grid gap-4 pt-4 md:grid-cols-2">
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    What we cover
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      <span className="text-sand-100">Patch recaps</span> — what
                      shipped this Live Build refresh and how it shifts your
                      opening.
                    </p>
                    <p>
                      <span className="text-sand-100">Codes status</span> — when
                      the first batch lands, how to redeem, and how to spot
                      third-party scams.
                    </p>
                    <p>
                      <span className="text-sand-100">Meta reads</span> —
                      tier-list movements, archetype shifts, and lobby pattern
                      reads.
                    </p>
                  </div>
                </div>
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    Cadence
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      <span className="text-sand-100">Live Build refresh</span>{' '}
                      → patch recap within 24-48 hours of drop.
                    </p>
                    <p>
                      <span className="text-sand-100">Codes status</span> →
                      refreshed weekly until the first code lands, then per
                      drop.
                    </p>
                    <p>
                      <span className="text-sand-100">Tier-list shifts</span> →
                      whenever 3+ buildings move boundaries in a single cycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="hud-frame clip-corner bg-bunker-900/40 sticky top-24 p-5">
                <div className="text-ember-500 mb-4 font-mono text-[10px] tracking-[0.4em] uppercase">
                  Latest posts
                </div>
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      id="mini-wars-may-2026-live-build-recap"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/news#mini-wars-may-2026-live-build-recap"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Mini Wars May 2026 Live Build Recap — Bunker Lands and
                        Industrial Depth Returns
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="mini-wars-codes-status-may-2026"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/news#mini-wars-codes-status-may-2026"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Mini Wars Codes — Status Update for May 2026
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="mini-wars-air-base-meta-snapshot-may-2026"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/news#mini-wars-air-base-meta-snapshot-may-2026"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Air Base Meta Snapshot — Why Black Hawks Still Run May
                        2026
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="mini-wars-five-new-long-form-guides"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/news#mini-wars-five-new-long-form-guides"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Five New Mini Wars Long-Form Guides Just Shipped
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="mini-wars-tier-list-shake-up-late-april-2026"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/news#mini-wars-tier-list-shake-up-late-april-2026"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Mini Wars Tier List Shake-Up — Late April 2026 Edition
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="mini-wars-april-2026-live-build-recap"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/news#mini-wars-april-2026-live-build-recap"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Mini Wars April 2026 Live Build Recap — Air Power Tuning
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl space-y-12 px-4 py-12">
        <Link
          id="mini-wars-may-2026-live-build-recap"
          className="group border-camo-800/80 bg-bunker-900/70 clip-corner hover:border-ember-500/70 relative block scroll-mt-24 overflow-hidden border transition-colors"
          href="/news#mini-wars-may-2026-live-build-recap"
        >
          <div
            aria-hidden={true}
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(245,158,11,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.6) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>
          <div className="bg-ember-500/80 group-hover:bg-ember-400 absolute top-0 right-0 h-2 w-32 transition-colors"></div>
          <div className="relative grid gap-6 p-6 md:p-10 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="border-ember-500/70 bg-ember-500/10 text-ember-300 inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                  <Radio className="h-3 w-3" />
                  Latest
                </span>
                <span className="border-ember-600/60 text-ember-300 inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                  Patch
                </span>
                <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                  May 06, 2026
                </span>
                <span className="text-camo-400 inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase">
                  <Clock className="h-3 w-3" />5 min
                </span>
              </div>
              <h2 className="font-display text-sand-50 group-hover:text-ember-400 text-2xl tracking-wider uppercase transition-colors md:text-4xl">
                Mini Wars May 2026 Live Build Recap — Bunker Lands and
                Industrial Depth Returns
              </h2>
              <p className="text-bunker-200 max-w-2xl text-base leading-7">
                The Industrial Depth &amp; Stability Pass shipped a hardened
                Bunker, surfaced the Steel Mill chain, and tightened Storage
                Center radius logic. Here is what changed and what to do about
                it this week.
              </p>
              <div className="text-ember-500/90 group-hover:text-ember-400 inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase transition-colors">
                Read recap
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
            <div className="flex items-start justify-end lg:col-span-4">
              <div className="hud-frame clip-corner-sm bg-bunker-950/60 px-5 py-4">
                <div className="text-ember-500 mb-2 font-mono text-[10px] tracking-[0.4em] uppercase">
                  Tags
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="chip border-camo-700 text-camo-200">
                    patch
                  </span>
                  <span className="chip border-camo-700 text-camo-200">
                    bunker
                  </span>
                  <span className="chip border-camo-700 text-camo-200">
                    storage-center
                  </span>
                  <span className="chip border-camo-700 text-camo-200">
                    oil-rig
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Newspaper className="text-ember-500 h-4 w-4" />
            <h2 className="font-display text-sand-100 text-lg tracking-wider uppercase">
              May 2026
            </h2>
            <span className="bg-camo-900/80 h-px flex-1"></span>
            <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
              2 posts
            </span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Link
              id="mini-wars-codes-status-may-2026"
              className="group border-camo-800/80 bg-bunker-900/70 clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col border p-6 transition-colors"
              href="/news#mini-wars-codes-status-may-2026"
            >
              <span
                aria-hidden={true}
                className="bg-ember-500/70 group-hover:bg-ember-400 absolute top-0 right-0 h-2 w-12 transition-colors"
              ></span>
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="border-signal-600/60 text-signal-300 inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                  Codes
                </span>
                <span className="text-camo-400 inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase">
                  <Clock className="h-3 w-3" />4 min
                </span>
              </div>
              <div className="text-camo-400 mb-2 font-mono text-[10px] tracking-widest uppercase">
                May 04, 2026
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 mb-2 text-base leading-snug tracking-wider uppercase transition-colors">
                Mini Wars Codes — Status Update for May 2026
              </h3>
              <p className="text-bunker-300 line-clamp-3 text-sm leading-7">
                No active Mini Wars codes have shipped yet, but the
                developer-confirmed codes channel is closer than ever. Here is
                exactly what is live, what is coming, and how to avoid the
                third-party scams.
              </p>
              <div className="text-camo-400 mt-5 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
                <span>codes · oil-rig · rewards</span>
                <span className="text-ember-500/80 group-hover:text-ember-400 inline-flex items-center gap-1 transition-colors">
                  Read
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
            <Link
              id="mini-wars-air-base-meta-snapshot-may-2026"
              className="group border-camo-800/80 bg-bunker-900/70 clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col border p-6 transition-colors"
              href="/news#mini-wars-air-base-meta-snapshot-may-2026"
            >
              <span
                aria-hidden={true}
                className="bg-ember-500/70 group-hover:bg-ember-400 absolute top-0 right-0 h-2 w-12 transition-colors"
              ></span>
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 border border-red-700/60 px-2 py-0.5 font-mono text-[10px] tracking-widest text-red-300 uppercase">
                  Meta
                </span>
                <span className="text-camo-400 inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase">
                  <Clock className="h-3 w-3" />6 min
                </span>
              </div>
              <div className="text-camo-400 mb-2 font-mono text-[10px] tracking-widest uppercase">
                May 02, 2026
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 mb-2 text-base leading-snug tracking-wider uppercase transition-colors">
                Air Base Meta Snapshot — Why Black Hawks Still Run May 2026
              </h3>
              <p className="text-bunker-300 line-clamp-3 text-sm leading-7">
                After the April Air Power Tuning and the May stability pass, the
                Air Base + Missile Launcher comp remains the dominant offensive
                plan. Here is the current read and the exact counter package.
              </p>
              <div className="text-camo-400 mt-5 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
                <span>meta · air-base · black-hawk</span>
                <span className="text-ember-500/80 group-hover:text-ember-400 inline-flex items-center gap-1 transition-colors">
                  Read
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Newspaper className="text-ember-500 h-4 w-4" />
            <h2 className="font-display text-sand-100 text-lg tracking-wider uppercase">
              April 2026
            </h2>
            <span className="bg-camo-900/80 h-px flex-1"></span>
            <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
              3 posts
            </span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Link
              id="mini-wars-five-new-long-form-guides"
              className="group border-camo-800/80 bg-bunker-900/70 clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col border p-6 transition-colors"
              href="/news#mini-wars-five-new-long-form-guides"
            >
              <span
                aria-hidden={true}
                className="bg-ember-500/70 group-hover:bg-ember-400 absolute top-0 right-0 h-2 w-12 transition-colors"
              ></span>
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="border-sand-500/60 text-sand-200 inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                  Guide-Drop
                </span>
                <span className="text-camo-400 inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase">
                  <Clock className="h-3 w-3" />4 min
                </span>
              </div>
              <div className="text-camo-400 mb-2 font-mono text-[10px] tracking-widest uppercase">
                Apr 28, 2026
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 mb-2 text-base leading-snug tracking-wider uppercase transition-colors">
                Five New Mini Wars Long-Form Guides Just Shipped
              </h3>
              <p className="text-bunker-300 line-clamp-3 text-sm leading-7">
                We just published five fresh playbooks covering Turtle Defense,
                the conquest snowball, late-game scaling, the Air Base meta, and
                the ten economy mistakes that quietly lose you rounds.
              </p>
              <div className="text-camo-400 mt-5 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
                <span>guides · content-drop · playbooks</span>
                <span className="text-ember-500/80 group-hover:text-ember-400 inline-flex items-center gap-1 transition-colors">
                  Read
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
            <Link
              id="mini-wars-tier-list-shake-up-late-april-2026"
              className="group border-camo-800/80 bg-bunker-900/70 clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col border p-6 transition-colors"
              href="/news#mini-wars-tier-list-shake-up-late-april-2026"
            >
              <span
                aria-hidden={true}
                className="bg-ember-500/70 group-hover:bg-ember-400 absolute top-0 right-0 h-2 w-12 transition-colors"
              ></span>
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 border border-red-700/60 px-2 py-0.5 font-mono text-[10px] tracking-widest text-red-300 uppercase">
                  Meta
                </span>
                <span className="text-camo-400 inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase">
                  <Clock className="h-3 w-3" />5 min
                </span>
              </div>
              <div className="text-camo-400 mb-2 font-mono text-[10px] tracking-widest uppercase">
                Apr 22, 2026
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 mb-2 text-base leading-snug tracking-wider uppercase transition-colors">
                Mini Wars Tier List Shake-Up — Late April 2026 Edition
              </h3>
              <p className="text-bunker-300 line-clamp-3 text-sm leading-7">
                Bunker debuted at A, Barracks rose from B to A, Storage Center
                holds S, and three legacy buildings dropped a tier. The full
                April-to-May tier list movement explained.
              </p>
              <div className="text-camo-400 mt-5 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
                <span>tier-list · bunker · barracks</span>
                <span className="text-ember-500/80 group-hover:text-ember-400 inline-flex items-center gap-1 transition-colors">
                  Read
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
            <Link
              id="mini-wars-april-2026-live-build-recap"
              className="group border-camo-800/80 bg-bunker-900/70 clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col border p-6 transition-colors"
              href="/news#mini-wars-april-2026-live-build-recap"
            >
              <span
                aria-hidden={true}
                className="bg-ember-500/70 group-hover:bg-ember-400 absolute top-0 right-0 h-2 w-12 transition-colors"
              ></span>
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="border-ember-600/60 text-ember-300 inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                  Patch
                </span>
                <span className="text-camo-400 inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase">
                  <Clock className="h-3 w-3" />5 min
                </span>
              </div>
              <div className="text-camo-400 mb-2 font-mono text-[10px] tracking-widest uppercase">
                Apr 19, 2026
              </div>
              <h3 className="font-display text-sand-100 group-hover:text-ember-400 mb-2 text-base leading-snug tracking-wider uppercase transition-colors">
                Mini Wars April 2026 Live Build Recap — Air Power Tuning
              </h3>
              <p className="text-bunker-300 line-clamp-3 text-sm leading-7">
                The April 2026 patch trimmed Black Hawk burst, buffed Tank Base
                offense, and added Border Tower coverage previews. A focused
                balance pass — here is what mid-tier players need to know.
              </p>
              <div className="text-camo-400 mt-5 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
                <span>patch · air-base · tank-base</span>
                <span className="text-ember-500/80 group-hover:text-ember-400 inline-flex items-center gap-1 transition-colors">
                  Read
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
