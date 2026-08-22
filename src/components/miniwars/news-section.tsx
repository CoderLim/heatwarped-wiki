import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

export function NewsSection() {
  return (
    <section className="border-camo-900/70 relative border-t py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-ember-500 mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase">
              <span className="bg-ember-500 h-px w-6"></span>Signal · Live Feed
            </div>
            <h2 className="font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl">
              Latest Mini Wars News
            </h2>
          </div>
          <Link
            className="group text-camo-300 hover:text-ember-400 flex items-center gap-1.5 font-mono text-xs tracking-widest whitespace-nowrap uppercase transition-colors"
            href="/news"
          >
            All News
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            id="mini-wars-may-2026-live-build-recap"
            className="group border-camo-800/80 bg-bunker-900/70 clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col border p-5 transition-colors"
            href="/news#mini-wars-may-2026-live-build-recap"
          >
            <span
              aria-hidden="true"
              className="bg-ember-500/70 group-hover:bg-ember-400 absolute top-0 right-0 h-2 w-12 transition-colors"
            ></span>
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="border-ember-600/60 bg-ember-500/10 text-ember-300 inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                Patch
              </span>
              <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                May 06, 2026
              </span>
            </div>
            <h3 className="font-display text-sand-100 group-hover:text-ember-400 mb-2 text-base leading-snug tracking-wider uppercase transition-colors">
              Mini Wars May 2026 Live Build Recap — Bunker Lands and Industrial
              Depth Returns
            </h3>
            <p className="text-bunker-300 line-clamp-3 text-sm leading-7">
              The Industrial Depth &amp; Stability Pass shipped a hardened
              Bunker, surfaced the Steel Mill chain, and tightened Storage
              Center radius logic. Here is what changed and what to do about it
              this week.
            </p>
            <div className="text-ember-500/80 group-hover:text-ember-400 mt-4 inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase transition-colors">
              Read recap
              <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
          <Link
            id="mini-wars-codes-status-may-2026"
            className="group border-camo-800/80 bg-bunker-900/70 clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col border p-5 transition-colors"
            href="/news#mini-wars-codes-status-may-2026"
          >
            <span
              aria-hidden="true"
              className="bg-ember-500/70 group-hover:bg-ember-400 absolute top-0 right-0 h-2 w-12 transition-colors"
            ></span>
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="border-ember-600/60 bg-ember-500/10 text-ember-300 inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                Codes
              </span>
              <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                May 04, 2026
              </span>
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
            <div className="text-ember-500/80 group-hover:text-ember-400 mt-4 inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase transition-colors">
              Read recap
              <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
          <Link
            id="mini-wars-air-base-meta-snapshot-may-2026"
            className="group border-camo-800/80 bg-bunker-900/70 clip-corner hover:border-ember-500/70 relative flex scroll-mt-24 flex-col border p-5 transition-colors"
            href="/news#mini-wars-air-base-meta-snapshot-may-2026"
          >
            <span
              aria-hidden="true"
              className="bg-ember-500/70 group-hover:bg-ember-400 absolute top-0 right-0 h-2 w-12 transition-colors"
            ></span>
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="border-ember-600/60 bg-ember-500/10 text-ember-300 inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                Meta
              </span>
              <span className="text-camo-400 font-mono text-[10px] tracking-widest uppercase">
                May 02, 2026
              </span>
            </div>
            <h3 className="font-display text-sand-100 group-hover:text-ember-400 mb-2 text-base leading-snug tracking-wider uppercase transition-colors">
              Air Base Meta Snapshot — Why Black Hawks Still Run May 2026
            </h3>
            <p className="text-bunker-300 line-clamp-3 text-sm leading-7">
              After the April Air Power Tuning and the May stability pass, the
              Air Base + Missile Launcher comp remains the dominant offensive
              plan. Here is the current read and the exact counter package.
            </p>
            <div className="text-ember-500/80 group-hover:text-ember-400 mt-4 inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase transition-colors">
              Read recap
              <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
