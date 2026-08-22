import { Link } from '@/core/i18n/navigation';

export function WhatIsSection() {
  return (
    <section className="border-camo-900/60 relative border-b py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <div className="text-ember-500 font-mono text-[11px] tracking-[0.4em] uppercase">
              About this wiki
            </div>
            <h2 className="font-display text-sand-100 text-3xl tracking-wider uppercase md:text-4xl">
              What is Mini Wars?
            </h2>
            <div className="text-bunker-200 space-y-4 text-base leading-7 md:text-lg">
              <p>
                <strong>Mini Wars</strong> is a country-conquest tycoon
                experience on Roblox, developed by Horangi99. You start with a
                tiny patch of land, grow an economy from farms and workshops,
                recruit civilians and soldiers, and gradually swallow your
                neighbours' territory. Every match is a live macro puzzle:
                balance{' '}
                <Link
                  id="economy"
                  className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                  href="/systems#economy"
                >
                  economy
                </Link>
                ,{' '}
                <Link
                  id="military"
                  className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                  href="/systems#military"
                >
                  military
                </Link>
                , and{' '}
                <Link
                  id="conquest"
                  className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                  href="/systems#conquest"
                >
                  conquest
                </Link>{' '}
                pressure, or you go home empty-handed.
              </p>
              <p>
                This <strong>Mini Wars Wiki</strong> at{' '}
                <span className="text-sand-100">miniwars.art</span> is the
                unofficial strategy codex for the game. Everything is built
                around what actually wins lobbies in the current Live Build: a
                complete{' '}
                <Link
                  className="text-ember-400 underline-offset-2 hover:underline"
                  href="/buildings"
                >
                  21-entry buildings database
                </Link>
                , a calibrated{' '}
                <Link
                  className="text-ember-400 underline-offset-2 hover:underline"
                  href="/tier-list"
                >
                  tier list
                </Link>
                ,{' '}
                <Link
                  className="text-ember-400 underline-offset-2 hover:underline"
                  href="/strategy"
                >
                  7 archetype playbooks
                </Link>
                , long-form{' '}
                <Link
                  className="text-ember-400 underline-offset-2 hover:underline"
                  href="/guides"
                >
                  guides
                </Link>
                , a live{' '}
                <Link
                  className="text-ember-400 underline-offset-2 hover:underline"
                  href="/codes"
                >
                  codes tracker
                </Link>
                , and the{' '}
                <Link
                  className="text-ember-400 underline-offset-2 hover:underline"
                  href="/patch-notes"
                >
                  patch-notes log
                </Link>{' '}
                that re-calibrates everything after each update.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-4">
            <div className="hud-frame clip-corner bg-bunker-900/40 p-5">
              <div className="text-ember-500 mb-4 font-mono text-[10px] tracking-[0.4em] uppercase">
                New here? Start with
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    id="beginner-opening-guide"
                    className="hud-frame clip-corner-sm hover:border-ember-500/70 block scroll-mt-24 p-3 transition-colors"
                    href="/guides#beginner-opening-guide"
                  >
                    <div className="font-display text-sand-100 tracking-wider uppercase">
                      Beginner Opening
                    </div>
                    <div className="text-bunker-400 mt-0.5 text-xs">
                      Your first 20 minutes, step by step.
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    id="economy-first"
                    className="hud-frame clip-corner-sm hover:border-ember-500/70 block scroll-mt-24 p-3 transition-colors"
                    href="/strategy#economy-first"
                  >
                    <div className="font-display text-sand-100 tracking-wider uppercase">
                      Economy First
                    </div>
                    <div className="text-bunker-400 mt-0.5 text-xs">
                      The safest path to a top-board finish.
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hud-frame clip-corner-sm hover:border-ember-500/70 block p-3 transition-colors"
                    href="/tier-list"
                  >
                    <div className="font-display text-sand-100 tracking-wider uppercase">
                      Tier List
                    </div>
                    <div className="text-bunker-400 mt-0.5 text-xs">
                      Which slots are non-negotiable.
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
