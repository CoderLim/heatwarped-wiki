import { useMemo, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { cn } from '@/lib/utils';
import { FAQ_ITEMS } from '@/components/miniwars/data/faq';

const CATEGORIES = [
  'All',
  ...Array.from(new Set(FAQ_ITEMS.map((item) => item.category))),
] as const;

function FaqJsonLd() {
  const json = useMemo(
    () =>
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }),
    []
  );

  return <script type="application/ld+json">{json}</script>;
}

export function FaqPage() {
  const [category, setCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState(0);

  const items = useMemo(
    () =>
      category === 'All'
        ? FAQ_ITEMS
        : FAQ_ITEMS.filter((item) => item.category === category),
    [category]
  );

  return (
    <>
      <FaqJsonLd />
      <section className="border-camo-900/80 bg-bunker-950/40 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="bg-ember-500/10 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="text-ember-500 mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase">
            <span className="bg-ember-500 h-px w-8" />
            INTEL · FAQ
          </div>
          <h1 className="font-display text-sand-100 text-4xl tracking-wider uppercase md:text-6xl">
            Mini Wars FAQ
          </h1>
          <p className="text-bunker-300 mt-4 max-w-2xl text-base leading-7 md:text-lg">
            Straight answers for the questions that actually decide rounds —
            economy timing, army composition, codes status, and account basics.
          </p>
          <div className="mt-6">
            <div className="flex flex-wrap gap-2 font-mono text-[11px] tracking-widest uppercase">
              <span className="chip border-ember-700/70 text-ember-300">
                {FAQ_ITEMS.length} entries
              </span>
              <span className="chip">Live Build</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setCategory(cat);
                  setOpenIndex(0);
                }}
                className={cn(
                  'border px-3 py-1.5 font-mono text-xs tracking-widest uppercase transition-colors',
                  active
                    ? 'border-ember-500 bg-ember-500/10 text-ember-400'
                    : 'border-camo-800 bg-bunker-900/50 text-camo-300 hover:border-camo-600'
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="space-y-2">
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.question}
                className="hud-frame clip-corner-sm overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="hover:bg-bunker-900/40 flex w-full items-center justify-between gap-3 p-4 text-left transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="chip">{item.category}</span>
                    <span className="font-display text-sand-100 text-base tracking-wide uppercase">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 shrink-0 transition-transform',
                      open ? 'text-ember-400 rotate-180' : 'text-camo-300'
                    )}
                  />
                </button>
                {open ? (
                  <div className="border-camo-800/70 text-bunker-100 border-t px-4 py-4 text-sm leading-7">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/codes"
            className="btn-tactical inline-flex items-center gap-2"
          >
            Check codes
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            href="/guides"
            className="btn-ghost inline-flex items-center gap-2"
          >
            Read guides
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
