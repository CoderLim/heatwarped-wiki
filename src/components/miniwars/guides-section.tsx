import { ArrowUpRight, Clock } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function GuidesSection() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
              <span className="bg-ember-500 h-px w-6"></span>Field Reports
            </div>
            <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
              Latest Guides
            </h2>
          </div>
          <Link
            className="group text-camo-300 hover:text-ember-400 flex items-center gap-1.5 font-mono text-xs tracking-widest whitespace-nowrap uppercase transition-colors"
            href="/guides"
          >
            All Guides
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
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
              Farmhouse into a Nuclear Reactor + Data Center skeleton, and what
              the long-haul Black Hole Generator path actually looks like.
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
              The mid-game power spike that turns the lobby on its head. When to
              commit to the Air Base, how to time your first invasion, and why
              two Missile Launchers always beats three.
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
    </section>
  );
}
