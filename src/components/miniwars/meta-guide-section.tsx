import { ArrowRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function MetaGuideSection() {
  return (
    <section className="border-camo-900/70 bg-bunker-950/30 relative border-t py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-ember-500 mb-3 font-mono text-[11px] tracking-[0.4em] uppercase">
              Why this wiki exists
            </div>
            <h2 className="font-display text-sand-100 mb-5 text-2xl tracking-wider uppercase md:text-3xl">
              The Mini Wars Roblox guide built for the current meta
            </h2>
            <div className="text-bunker-200 space-y-3 text-sm leading-7 md:text-base">
              <p>
                Most Mini Wars wikis on Google are stale within two weeks of the
                next Live Build. This one is different: every{' '}
                <Link
                  className="text-ember-400 underline-offset-2 hover:underline"
                  href="/buildings"
                >
                  Mini Wars building
                </Link>{' '}
                page is re-calibrated after each shipped patch, the{' '}
                <Link
                  className="text-ember-400 underline-offset-2 hover:underline"
                  href="/tier-list"
                >
                  tier list
                </Link>{' '}
                reasoning is published openly, and the{' '}
                <Link
                  className="text-ember-400 underline-offset-2 hover:underline"
                  href="/codes"
                >
                  codes tracker
                </Link>{' '}
                refuses to list fake codes — even when that means an empty
                table.
              </p>
              <p>
                Use this site three ways: as a reference (look up any building
                or system in seconds via{' '}
                <Link
                  className="text-ember-400 underline-offset-2 hover:underline"
                  href="/search"
                >
                  search
                </Link>
                ), as a learning path (start with the beginner guide and
                progress through archetype playbooks), or as a competitive edge
                (the tier list and pairings tell you what to skip and what to
                rush).
              </p>
            </div>
          </div>
          <div>
            <div className="text-ember-500 mb-3 font-mono text-[11px] tracking-[0.4em] uppercase">
              Common questions
            </div>
            <h2 className="font-display text-sand-100 mb-5 text-2xl tracking-wider uppercase md:text-3xl">
              Mini Wars at a glance
            </h2>
            <dl className="space-y-4 text-sm md:text-base">
              <div className="hud-frame clip-corner-sm p-4">
                <dt className="font-display text-sand-100 mb-1 tracking-wider uppercase">
                  What kind of game is Mini Wars?
                </dt>
                <dd className="text-bunker-300 leading-7">
                  A country-conquest tycoon on Roblox — economy-driven,
                  PvP-focused, with conquest multipliers that snowball leaders.
                  Closer to a strategy game than a typical Roblox tycoon.
                </dd>
              </div>
              <div className="hud-frame clip-corner-sm p-4">
                <dt className="font-display text-sand-100 mb-1 tracking-wider uppercase">
                  Are there any working Mini Wars codes?
                </dt>
                <dd className="text-bunker-300 leading-7">
                  Not yet — codes are confirmed but the redemption field has not
                  shipped. The free Oil Rig from joining the Roblox group is the
                  only freebie that works today. See the{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/codes"
                  >
                    codes page
                  </Link>{' '}
                  for live status.
                </dd>
              </div>
              <div className="hud-frame clip-corner-sm p-4">
                <dt className="font-display text-sand-100 mb-1 tracking-wider uppercase">
                  Where do I start as a new player?
                </dt>
                <dd className="text-bunker-300 leading-7">
                  The{' '}
                  <Link
                    id="beginner-opening-guide"
                    className="text-ember-400 scroll-mt-24 underline-offset-2 hover:underline"
                    href="/guides#beginner-opening-guide"
                  >
                    Beginner Opening Guide
                  </Link>{' '}
                  walks you through the safest first 20 minutes. After your
                  first win, branch into an archetype on the{' '}
                  <Link
                    className="text-ember-400 underline-offset-2 hover:underline"
                    href="/strategy"
                  >
                    strategies page
                  </Link>
                  .
                </dd>
              </div>
            </dl>
            <Link
              className="text-ember-400 hover:text-ember-300 mt-5 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase"
              href="/faq"
            >
              Full FAQ
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
