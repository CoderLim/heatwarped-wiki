import {
  Building,
  CircleHelp,
  Cpu,
  FileText,
  Flag,
  KeyRound,
  ScrollText,
  Trophy,
} from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function DoctrineSection() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
              <span className="bg-ember-500 h-px w-6"></span>Field Manual
            </div>
            <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
              Choose Your Doctrine
            </h2>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            className="group hud-frame clip-corner hover:border-camo-500 p-4 transition-colors"
            href="/buildings"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="clip-corner-sm border-camo-700 bg-bunker-900 text-camo-300 group-hover:text-sand-100 group-hover:border-camo-500 flex h-10 w-10 items-center justify-center border transition-colors">
                <Building className="h-5 w-5" />
              </div>
              <div className="font-display text-sand-100 group-hover:text-ember-400 text-base tracking-wider uppercase transition-colors">
                Buildings
              </div>
            </div>
            <div className="text-bunker-300 text-xs">
              21 structures, ranked &amp; explained
            </div>
          </Link>
          <Link
            className="group hud-frame clip-corner border-ember-500/50 hover:border-ember-400 p-4 transition-colors"
            href="/strategy"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="clip-corner-sm border-ember-500 bg-ember-500/10 text-ember-400 flex h-10 w-10 items-center justify-center border transition-colors">
                <Flag className="h-5 w-5" />
              </div>
              <div className="font-display text-sand-100 group-hover:text-ember-400 text-base tracking-wider uppercase transition-colors">
                Strategies
              </div>
            </div>
            <div className="text-bunker-300 text-xs">
              7 battle-tested build orders
            </div>
          </Link>
          <Link
            className="group hud-frame clip-corner hover:border-camo-500 p-4 transition-colors"
            href="/systems"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="clip-corner-sm border-camo-700 bg-bunker-900 text-camo-300 group-hover:text-sand-100 group-hover:border-camo-500 flex h-10 w-10 items-center justify-center border transition-colors">
                <Cpu className="h-5 w-5" />
              </div>
              <div className="font-display text-sand-100 group-hover:text-ember-400 text-base tracking-wider uppercase transition-colors">
                Systems
              </div>
            </div>
            <div className="text-bunker-300 text-xs">
              7 mechanics: Economy, Market, Military...
            </div>
          </Link>
          <Link
            className="group hud-frame clip-corner hover:border-camo-500 p-4 transition-colors"
            href="/tier-list"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="clip-corner-sm border-camo-700 bg-bunker-900 text-camo-300 group-hover:text-sand-100 group-hover:border-camo-500 flex h-10 w-10 items-center justify-center border transition-colors">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="font-display text-sand-100 group-hover:text-ember-400 text-base tracking-wider uppercase transition-colors">
                Tier List
              </div>
            </div>
            <div className="text-bunker-300 text-xs">
              Buildings ranked by long-term ROI
            </div>
          </Link>
          <Link
            className="group hud-frame clip-corner hover:border-camo-500 p-4 transition-colors"
            href="/guides"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="clip-corner-sm border-camo-700 bg-bunker-900 text-camo-300 group-hover:text-sand-100 group-hover:border-camo-500 flex h-10 w-10 items-center justify-center border transition-colors">
                <ScrollText className="h-5 w-5" />
              </div>
              <div className="font-display text-sand-100 group-hover:text-ember-400 text-base tracking-wider uppercase transition-colors">
                Guides
              </div>
            </div>
            <div className="text-bunker-300 text-xs">
              Long-form playbooks for every phase
            </div>
          </Link>
          <Link
            className="group hud-frame clip-corner hover:border-camo-500 p-4 transition-colors"
            href="/codes"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="clip-corner-sm border-camo-700 bg-bunker-900 text-camo-300 group-hover:text-sand-100 group-hover:border-camo-500 flex h-10 w-10 items-center justify-center border transition-colors">
                <KeyRound className="h-5 w-5" />
              </div>
              <div className="font-display text-sand-100 group-hover:text-ember-400 text-base tracking-wider uppercase transition-colors">
                Codes
              </div>
            </div>
            <div className="text-bunker-300 text-xs">
              Status: pending — track here when live
            </div>
          </Link>
          <Link
            className="group hud-frame clip-corner hover:border-camo-500 p-4 transition-colors"
            href="/patch-notes"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="clip-corner-sm border-camo-700 bg-bunker-900 text-camo-300 group-hover:text-sand-100 group-hover:border-camo-500 flex h-10 w-10 items-center justify-center border transition-colors">
                <FileText className="h-5 w-5" />
              </div>
              <div className="font-display text-sand-100 group-hover:text-ember-400 text-base tracking-wider uppercase transition-colors">
                Patch Notes
              </div>
            </div>
            <div className="text-bunker-300 text-xs">Live Build update log</div>
          </Link>
          <Link
            className="group hud-frame clip-corner hover:border-camo-500 p-4 transition-colors"
            href="/faq"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="clip-corner-sm border-camo-700 bg-bunker-900 text-camo-300 group-hover:text-sand-100 group-hover:border-camo-500 flex h-10 w-10 items-center justify-center border transition-colors">
                <CircleHelp className="h-5 w-5" />
              </div>
              <div className="font-display text-sand-100 group-hover:text-ember-400 text-base tracking-wider uppercase transition-colors">
                FAQ
              </div>
            </div>
            <div className="text-bunker-300 text-xs">
              Quick answers, real questions
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
