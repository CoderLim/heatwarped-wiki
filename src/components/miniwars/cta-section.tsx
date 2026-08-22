import { ArrowRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function CtaSection() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="hud-frame clip-corner relative overflow-hidden p-10 md:p-14">
          <div className="grid-bg absolute inset-0 opacity-40"></div>
          <div className="bg-ember-500/15 absolute -right-20 -bottom-20 h-72 w-72 rounded-full blur-3xl"></div>
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-ember-500 mb-3 font-mono text-xs tracking-[0.4em] uppercase">
                Recruit · Step 01
              </div>
              <h2 className="font-display text-sand-100 text-3xl tracking-wider uppercase md:text-4xl">
                New to Mini Wars?
              </h2>
              <p className="text-bunker-300 mt-3 max-w-xl">
                Start with the Beginner Opening Guide. The right buildings, in
                the right order, before the lobby decides anything.
              </p>
            </div>
            <Link
              id="beginner-opening-guide"
              className="btn-tactical scroll-mt-24 self-start md:self-auto"
              href="/guides#beginner-opening-guide"
            >
              Read Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
