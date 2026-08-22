import { ChevronRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function PatchNotesPage() {
  return (
    <>
      <section className="border-camo-900/80 bg-bunker-950/40 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-50"></div>
        <div className="bg-ember-500/10 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="text-ember-500 mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase">
            <span className="bg-ember-500 h-px w-8"></span>LOG · UPDATES
          </div>
          <h1 className="font-display text-sand-100 text-4xl tracking-wider uppercase md:text-6xl">
            Mini Wars Patch Notes
          </h1>
          <p className="text-bunker-300 mt-4 max-w-2xl text-base leading-7 md:text-lg">
            Mini Wars ships as a Live Build, not on a numbered patch cadence.
            Below are the most notable rolling updates — sourced from developer
            announcements and observable in-game changes. Read the diff before
            you blame your build order.
          </p>
          <div className="mt-6">
            <div className="flex flex-wrap gap-2 font-mono text-[11px] tracking-widest uppercase">
              <span className="chip border-ember-700/70 text-ember-300">
                Live Build · May 2026
              </span>
              <span className="chip">3 entries</span>
              <span className="chip">Updated May 06, 2026</span>
            </div>
          </div>
        </div>
      </section>
      <section className="border-camo-900/60 bg-bunker-950/40 relative border-b">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 lg:col-span-8">
              <div className="text-ember-500 font-mono text-[11px] tracking-[0.4em] uppercase">
                ABOUT THE CHANGELOG
              </div>
              <div className="prose-tactical text-bunker-200 space-y-4 text-base leading-7 md:text-lg">
                <p>
                  These are the official-equivalent{' '}
                  <strong>Mini Wars patch notes</strong> for the Roblox
                  country-conquest game by Horangi99. Mini Wars does not ship on
                  a numbered release cycle — it is a Live Build, meaning balance
                  tuning, new buildings, and bug fixes drop continuously, often
                  without an in-game announcement banner. Each entry below
                  documents what observably changed: which numbers moved, which
                  buildings were added, and which strategies got quieter or
                  louder as a result.
                </p>
                <p>
                  The latest entry sits at the top. After every shipped update
                  we re-calibrate the{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/tier-list"
                  >
                    Mini Wars tier list
                  </Link>{' '}
                  and refresh affected{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/buildings"
                  >
                    building entries
                  </Link>
                  . If a strategy on the{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/strategy"
                  >
                    strategies page
                  </Link>{' '}
                  suddenly stops working, this changelog is the first place to
                  check.
                </p>
              </div>
              <div className="grid gap-4 pt-4 md:grid-cols-2">
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    How updates ship
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      Mini Wars patches arrive without version numbers in-game.
                      The dev team announces some changes in the official
                      Discord; others land silently and get spotted by players
                      in the next match.
                    </p>
                    <p>
                      We assign internal version tags (
                      <span className="text-sand-100">
                        Live Build · May 2026
                      </span>{' '}
                      is the latest) so you can reference a specific build in
                      guides and bug reports.
                    </p>
                  </div>
                </div>
                <div className="hud-frame clip-corner-sm bg-bunker-900/40 p-5">
                  <h2 className="font-display text-sand-100 mb-2 text-lg tracking-wider uppercase">
                    How we track changes
                  </h2>
                  <div className="text-bunker-300 space-y-2 text-sm leading-7">
                    <p>
                      <span className="text-sand-100">Source 1</span>: developer
                      posts in the official Mini Wars Discord and Roblox group
                      feed.
                    </p>
                    <p>
                      <span className="text-sand-100">Source 2</span>: in-game
                      observation — building costs, output rates, and unlock
                      conditions are diffed match-to-match.
                    </p>
                    <p>
                      <span className="text-sand-100">Source 3</span>: community
                      reports in the official Discord, cross-validated before
                      inclusion.
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
                      id="latest"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#latest"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Latest patch
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="all"
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex scroll-mt-24 items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="#all"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Full changelog
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
                      href="/buildings"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Buildings
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
                  <li>
                    <Link
                      className="group hover:border-camo-700/70 hover:bg-bunker-900/70 flex items-center gap-2 border border-transparent px-3 py-2 transition-colors"
                      href="/codes"
                    >
                      <ChevronRight className="text-ember-500/70 group-hover:text-ember-400 h-3.5 w-3.5" />
                      <span className="text-bunker-200 group-hover:text-sand-100 font-mono text-xs tracking-widest uppercase">
                        Codes tracker
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section
        id="all"
        className="mx-auto max-w-4xl scroll-mt-24 space-y-10 px-4 py-12"
      >
        <h2 className="sr-only">Full Mini Wars changelog</h2>
        <article
          id="latest"
          className="hud-frame clip-corner relative scroll-mt-24 p-6 md:p-8"
        >
          <span className="chip border-ember-500/60 bg-bunker-950 text-ember-400 absolute -top-3 left-6">
            · Latest ·
          </span>
          <div className="mb-1 flex flex-wrap items-baseline gap-3">
            <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
              Live Build · May 2026
            </h2>
            <span className="font-display text-ember-400 text-xl tracking-wider uppercase">
              Industrial Depth &amp; Stability Pass
            </span>
            <span className="text-camo-300 ml-auto font-mono text-xs tracking-widest uppercase">
              May 06, 2026
            </span>
          </div>
          <div className="my-5 grid gap-2">
            <div className="border-ember-500/60 bg-bunker-900/40 text-bunker-100 flex items-start gap-3 border-l-2 px-3 py-2 text-sm">
              <span className="text-ember-500 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                HL01
              </span>
              <span>
                Oil Rig surfaced as a top-level Production building; Steel Mill
                chain refreshed.
              </span>
            </div>
            <div className="border-ember-500/60 bg-bunker-900/40 text-bunker-100 flex items-start gap-3 border-l-2 px-3 py-2 text-sm">
              <span className="text-ember-500 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                HL02
              </span>
              <span>
                Bunker added to the defensive build menu — a hardened mid-tier
                garrison structure.
              </span>
            </div>
            <div className="border-ember-500/60 bg-bunker-900/40 text-bunker-100 flex items-start gap-3 border-l-2 px-3 py-2 text-sm">
              <span className="text-ember-500 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                HL03
              </span>
              <span>
                Server stability significantly improved during peak hours.
              </span>
            </div>
            <div className="border-ember-500/60 bg-bunker-900/40 text-bunker-100 flex items-start gap-3 border-l-2 px-3 py-2 text-sm">
              <span className="text-ember-500 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                HL04
              </span>
              <span>
                Storage Center auto-collect radius and consistency tightened.
              </span>
            </div>
            <div className="border-ember-500/60 bg-bunker-900/40 text-bunker-100 flex items-start gap-3 border-l-2 px-3 py-2 text-sm">
              <span className="text-ember-500 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                HL05
              </span>
              <span>
                Workshop builder allocation now re-balances correctly when
                buildings are sold.
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-camo-700/60 text-camo-200 mt-0.5 shrink-0">
                Buildings
              </span>
              <span className="text-bunker-200">
                Oil Rig: production node for Oil resource, available as a
                mid-tier industrial unlock. Free Oil Rig reward live for
                accounts joining the official Roblox group.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-camo-700/60 text-camo-200 mt-0.5 shrink-0">
                Buildings
              </span>
              <span className="text-bunker-200">
                Steel Mill: surfaced as an explicit chain step between Wood
                Plant and military buildings — Steel is now the gating material
                for Tank Base / Air Base / Missile Launcher.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-camo-700/60 text-camo-200 mt-0.5 shrink-0">
                Buildings
              </span>
              <span className="text-bunker-200">
                Bunker: hardened defensive structure that garrisons soldiers and
                absorbs significantly more damage than a Border Tower.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-camo-700/60 text-camo-200 mt-0.5 shrink-0">
                Buildings
              </span>
              <span className="text-bunker-200">
                Storage Center: collection radius behaviour tightened to be more
                consistent across cluster sizes.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-signal-600/40 text-signal-400 mt-0.5 shrink-0">
                Balance
              </span>
              <span className="text-bunker-200">
                Barracks role clarified — primary purpose is civilian
                recruitment, with soldier training as a secondary toggle. Tier
                rating raised from B to A in community consensus.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-sand-700/60 text-sand-200 mt-0.5 shrink-0">
                Economy
              </span>
              <span className="text-bunker-200">
                Market price-swing volatility re-tuned — fewer extreme dips,
                slightly fewer extreme surges.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-bunker-600 text-bunker-200 mt-0.5 shrink-0">
                Bugfix
              </span>
              <span className="text-bunker-200">
                Builders no longer get stuck on demolished foundations after a
                sell.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-ember-500/60 text-ember-400 mt-0.5 shrink-0">
                Feature
              </span>
              <span className="text-bunker-200">
                Free Oil Rig reward for joining the official Roblox group is
                live for new accounts.
              </span>
            </div>
          </div>
        </article>
        <article className="hud-frame clip-corner relative scroll-mt-24 p-6 md:p-8">
          <div className="mb-1 flex flex-wrap items-baseline gap-3">
            <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
              Live Build · April 2026
            </h2>
            <span className="font-display text-ember-400 text-xl tracking-wider uppercase">
              Air Power Tuning
            </span>
            <span className="text-camo-300 ml-auto font-mono text-xs tracking-widest uppercase">
              Apr 18, 2026
            </span>
          </div>
          <div className="my-5 grid gap-2">
            <div className="border-ember-500/60 bg-bunker-900/40 text-bunker-100 flex items-start gap-3 border-l-2 px-3 py-2 text-sm">
              <span className="text-ember-500 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                HL01
              </span>
              <span>
                Black Hawk units re-balanced to reinforce the Air Base + Missile
                Launcher meta.
              </span>
            </div>
            <div className="border-ember-500/60 bg-bunker-900/40 text-bunker-100 flex items-start gap-3 border-l-2 px-3 py-2 text-sm">
              <span className="text-ember-500 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                HL02
              </span>
              <span>
                Tank Base offense pass — slight buff to keep ground viable as a
                complement to air.
              </span>
            </div>
            <div className="border-ember-500/60 bg-bunker-900/40 text-bunker-100 flex items-start gap-3 border-l-2 px-3 py-2 text-sm">
              <span className="text-ember-500 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                HL03
              </span>
              <span>New Border Tower placement preview added.</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-ember-700/60 text-ember-300 mt-0.5 shrink-0">
                Military
              </span>
              <span className="text-bunker-200">
                Black Hawks: damage profile re-tuned, slightly fewer one-shot
                trades against fortified defenses.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-ember-700/60 text-ember-300 mt-0.5 shrink-0">
                Military
              </span>
              <span className="text-bunker-200">
                Tank Base: offense raised to retain combined-arms relevance.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-camo-700/60 text-camo-200 mt-0.5 shrink-0">
                Buildings
              </span>
              <span className="text-bunker-200">
                Border Tower: placement preview now shows coverage radius before
                purchase.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-signal-600/40 text-signal-400 mt-0.5 shrink-0">
                Balance
              </span>
              <span className="text-bunker-200">
                General cooldowns slightly reduced after defeat to encourage
                re-engagement.
              </span>
            </div>
          </div>
        </article>
        <article className="hud-frame clip-corner relative scroll-mt-24 p-6 md:p-8">
          <div className="mb-1 flex flex-wrap items-baseline gap-3">
            <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
              Live Build · March 2026
            </h2>
            <span className="font-display text-ember-400 text-xl tracking-wider uppercase">
              Foundation Update
            </span>
            <span className="text-camo-300 ml-auto font-mono text-xs tracking-widest uppercase">
              Mar 09, 2026
            </span>
          </div>
          <div className="my-5 grid gap-2">
            <div className="border-ember-500/60 bg-bunker-900/40 text-bunker-100 flex items-start gap-3 border-l-2 px-3 py-2 text-sm">
              <span className="text-ember-500 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                HL01
              </span>
              <span>
                Statues (Worker / Soldier) added to the visible build menu —
                previously hidden in submenus.
              </span>
            </div>
            <div className="border-ember-500/60 bg-bunker-900/40 text-bunker-100 flex items-start gap-3 border-l-2 px-3 py-2 text-sm">
              <span className="text-ember-500 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                HL02
              </span>
              <span>
                Base map expansion costs lowered for the first two land
                purchases.
              </span>
            </div>
            <div className="border-ember-500/60 bg-bunker-900/40 text-bunker-100 flex items-start gap-3 border-l-2 px-3 py-2 text-sm">
              <span className="text-ember-500 mt-0.5 font-mono text-[10px] tracking-widest uppercase">
                HL03
              </span>
              <span>New player onboarding flow adds Workshop guidance.</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-ember-500/60 text-ember-400 mt-0.5 shrink-0">
                Feature
              </span>
              <span className="text-bunker-200">
                Worker Statue and Soldier Statue surfaced as top-level build
                menu entries.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-sand-700/60 text-sand-200 mt-0.5 shrink-0">
                Economy
              </span>
              <span className="text-bunker-200">
                First two land expansion purchases reduced in price to ease
                early scaling.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-ember-500/60 text-ember-400 mt-0.5 shrink-0">
                Feature
              </span>
              <span className="text-bunker-200">
                New player tutorial nudges Workshop purchase before second
                income source.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="chip border-bunker-600 text-bunker-200 mt-0.5 shrink-0">
                Bugfix
              </span>
              <span className="text-bunker-200">
                Civilian count now updates immediately on House demolition, not
                on the next tick.
              </span>
            </div>
          </div>
        </article>
        <div className="hud-frame clip-corner bg-bunker-900/40 p-6 md:p-8">
          <h2 className="font-display text-sand-100 mb-4 text-xl tracking-wider uppercase">
            What to do after a Mini Wars patch
          </h2>
          <div className="grid gap-3 text-sm md:grid-cols-3">
            <Link
              className="hud-frame clip-corner-sm hover:border-ember-500/70 p-3 transition-colors"
              href="/tier-list"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Re-check tier list
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                Calibrated after every shipped update.
              </div>
            </Link>
            <Link
              className="hud-frame clip-corner-sm hover:border-ember-500/70 p-3 transition-colors"
              href="/strategy"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Adjust your strategy
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                Archetype guides updated alongside patches.
              </div>
            </Link>
            <Link
              className="hud-frame clip-corner-sm hover:border-ember-500/70 p-3 transition-colors"
              href="/codes"
            >
              <div className="font-display text-sand-100 tracking-wider uppercase">
                Code tracker
              </div>
              <div className="text-bunker-400 mt-1 text-xs">
                Redemption ships in a future patch — bookmark.
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
