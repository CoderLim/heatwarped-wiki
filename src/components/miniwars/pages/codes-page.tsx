import { ChevronRight, Gift, Radio, TriangleAlert } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function CodesPage() {
  return (
    <>
      <section className="border-camo-900/80 bg-bunker-950/40 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-50"></div>
        <div className="bg-ember-500/10 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="text-ember-500 mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase">
            <span className="bg-ember-500 h-px w-8"></span>DROPS · CODES
          </div>
          <h1 className="font-display text-sand-100 text-4xl tracking-wider uppercase md:text-6xl">
            Mini Wars Codes — May 2026
          </h1>
          <p className="text-bunker-300 mt-4 max-w-2xl text-base leading-7 md:text-lg">
            Honest status of every Mini Wars code on Roblox. The developers have
            not released any redeemable codes yet, but they have confirmed codes
            are coming. This page updates the moment a real code drops — no fake
            codes here, ever.
          </p>
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              <span className="chip border-sand-700/70 text-sand-300">
                Status: Pending
              </span>
              <span className="chip">1 placeholder entry</span>
              <span className="chip">Live tracker</span>
            </div>
          </div>
        </div>
      </section>
      <section className="border-camo-900/60 bg-bunker-950/40 relative border-b">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 lg:col-span-8">
              <div className="text-ember-500 font-mono text-[11px] tracking-[0.4em] uppercase">
                ABOUT THIS PAGE
              </div>
              <div className="prose-tactical text-bunker-200 space-y-4 text-base leading-7 md:text-lg">
                <p>
                  This page tracks every <strong>Mini Wars code</strong> on
                  Roblox in real time. As of May 2026 there are{' '}
                  <span className="text-sand-100">
                    no active redeemable codes
                  </span>{' '}
                  — the developers (Horangi99) have confirmed a code system is
                  on the way, but the in-game redemption field has not shipped
                  yet. Bookmark this page; the moment a working Mini Wars code
                  drops in the official Discord or via the Roblox group, it will
                  be listed here with the exact reward and expiry.
                </p>
                <p>
                  If you landed here from a search for “Mini Wars codes 2026” or
                  a YouTube thumbnail listing “active codes,” those code lists
                  are fabricated — Mini Wars has not shipped redemption yet,
                  full stop. While you wait, the fastest free reward in the game
                  is the{' '}
                  <Link
                    id="oil-rig"
                    className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                    href="/buildings#oil-rig"
                  >
                    free Oil Rig
                  </Link>{' '}
                  for joining the official Roblox group, which works right now.
                </p>
              </div>
              <div className="grid gap-4 pt-4 md:grid-cols-2">
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    Why no codes yet?
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      Mini Wars is a Live Build game, not a numbered-release
                      Roblox experience. The dev team is small and has
                      prioritised gameplay systems (Generals, country expansion,
                      the Oil Rig industrial chain) over rolling out a
                      code-redemption layer.
                    </p>
                    <p>
                      A <span className="text-ember-400">#codes</span> channel
                      is being prepared in the official Discord, and a
                      Redeem-Code field is visible as a planned UI slot in the
                      in-game shop.
                    </p>
                  </div>
                </div>
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    How we track new codes
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      We monitor the official Mini Wars Discord, the Roblox
                      group feed, and the Horangi99 dev posts. Each new code is
                      verified in-game before it goes live on this page. Expired
                      or region-locked codes are flagged, never silently
                      removed.
                    </p>
                    <p>
                      See the full{' '}
                      <Link
                        className="text-ember-400 underline-offset-2 hover:underline"
                        href="/patch-notes"
                      >
                        Mini Wars patch notes
                      </Link>{' '}
                      for the same Live Build reference timeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="hud-frame clip-corner bg-bunker-900/40 sticky top-24 p-5">
                <div className="text-ember-500 mb-4 font-mono text-[10px] tracking-[0.4em] uppercase">
                  On this page
                </div>
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      id="status"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#status"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Status banner
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="channels"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#channels"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Drop channels
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="redeem"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#redeem"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        How to redeem
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="oil-rig"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/buildings#oil-rig"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Free Oil Rig (active)
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/patch-notes"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Patch notes
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
                        FAQ — Codes section
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-10 px-4 py-12">
        <div
          id="status"
          className="hud-frame clip-corner border-sand-700/40 scroll-mt-24 p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="border-sand-700/70 bg-bunker-900 clip-corner-sm flex h-11 w-11 shrink-0 items-center justify-center border">
              <TriangleAlert className="text-sand-300 h-5 w-5" />
            </div>
            <div>
              <div className="text-sand-300 mb-2 font-mono text-[11px] tracking-[0.4em] uppercase">
                No Active Codes Yet
              </div>
              <h2 className="font-display text-sand-100 mb-3 text-2xl tracking-wider uppercase md:text-3xl">
                Codes are confirmed — just not live yet
              </h2>
              <p className="text-bunker-200 text-sm leading-7 md:text-base">
                Mini War's developers have stated that redeemable codes are on
                the way. A dedicated{' '}
                <span className="text-ember-400">#codes</span> channel is being
                prepared in the official Discord, and a redemption field is
                being added to the in-game shop or settings menu. Until then,
                there are
                <span className="text-sand-100"> no working codes</span>. If you
                see a wiki or YouTube video listing “active” Mini War codes
                right now, those are fake — they will only waste your time.
              </p>
            </div>
          </div>
        </div>
        <div id="channels" className="scroll-mt-24">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
                <Radio className="animate-blink h-3.5 w-3.5" />
                Drop Channels
              </div>
              <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
                Where Mini Wars codes will drop
              </h2>
            </div>
          </div>
          <div className="stencil-line mb-6"></div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="hud-frame clip-corner p-5">
              <div className="font-display text-sand-100 mb-2 text-base tracking-wider uppercase">
                Official Discord — #codes channel
              </div>
              <p className="text-bunker-300 text-sm leading-7">
                The developer team has confirmed a #codes channel is being
                prepared. This will be the primary drop point for new codes.
              </p>
            </div>
            <div className="hud-frame clip-corner p-5">
              <div className="font-display text-sand-100 mb-2 text-base tracking-wider uppercase">
                In-game shop · "Redeem Code" field
              </div>
              <p className="text-bunker-300 text-sm leading-7">
                Expected to ship in a future update. Currently visible as a
                planned UI slot.
              </p>
            </div>
            <div className="hud-frame clip-corner p-5">
              <div className="font-display text-sand-100 mb-2 text-base tracking-wider uppercase">
                Official Roblox group
              </div>
              <p className="text-bunker-300 text-sm leading-7">
                Joining the group already grants a free Oil Rig as a head-start
                — codes are likely to be cross-posted here too.
              </p>
            </div>
          </div>
        </div>
        <div
          id="redeem"
          className="hud-frame clip-corner scroll-mt-24 p-6 md:p-8"
        >
          <div className="text-ember-500 mb-3 flex items-center gap-2 font-mono text-[11px] tracking-[0.4em] uppercase">
            <Gift className="h-3.5 w-3.5" />
            How redemption will work
          </div>
          <h2 className="font-display text-sand-100 mb-4 text-xl tracking-wider uppercase md:text-2xl">
            How to redeem Mini Wars codes
          </h2>
          <p className="text-bunker-300 mb-5 text-sm leading-7 md:text-base">
            Once Mini Wars codes ship, redemption will follow the standard
            Roblox pattern. Save these steps so you are ready the day the first
            working code drops.
          </p>
          <ol className="text-bunker-200 space-y-3 text-sm leading-7 md:text-base">
            <li className="flex gap-3">
              <span className="text-ember-500 mt-1 shrink-0 font-mono text-xs">
                01
              </span>
              <span>
                Launch Mini Wars on Roblox and open the in-game shop or settings
                menu.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-ember-500 mt-1 shrink-0 font-mono text-xs">
                02
              </span>
              <span>
                Look for a <span className="text-sand-100">Redeem Code</span>{' '}
                field — most likely at the bottom of the shop or inside
                Settings.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-ember-500 mt-1 shrink-0 font-mono text-xs">
                03
              </span>
              <span>
                Paste the code <span className="text-ember-400">exactly</span>{' '}
                as published — Roblox codes are typically case-sensitive.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-ember-500 mt-1 shrink-0 font-mono text-xs">
                04
              </span>
              <span>
                Confirm. Rewards typically appear in your country instantly.
              </span>
            </li>
          </ol>
          <p className="border-camo-800/70 text-bunker-400 mt-5 border-t pt-4 font-mono text-xs tracking-widest uppercase">
            Tip · Joining the official Roblox group already grants a free Oil
            Rig as a head-start. Worth doing right now.
          </p>
        </div>
        <div className="hud-frame clip-corner bg-bunker-900/40 p-6 md:p-8">
          <h2 className="font-display text-sand-100 mb-4 text-xl tracking-wider uppercase">
            Related Mini Wars pages
          </h2>
          <div className="grid gap-3 text-sm md:grid-cols-3">
            <Link
              id="oil-rig"
              className="hud-frame clip-corner-sm hover:border-ember-500/70 scroll-mt-24 p-3 transition-colors"
              href="/buildings#oil-rig"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Oil Rig (free reward)
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                The one freebie that works today.
              </div>
            </Link>
            <Link
              className="hud-frame clip-corner-sm hover:border-ember-500/70 p-3 transition-colors"
              href="/patch-notes"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Patch notes
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                Live Build update log — when redemption ships, it lands here.
              </div>
            </Link>
            <Link
              className="hud-frame clip-corner-sm hover:border-ember-500/70 p-3 transition-colors"
              href="/faq"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                FAQ — Codes
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                Most-asked code questions, answered straight.
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
