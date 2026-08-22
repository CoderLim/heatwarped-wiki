import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Building,
  CircleHelp,
  Cpu,
  Flag,
  KeyRound,
  Newspaper,
  ScrollText,
  Search,
} from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { cn } from '@/lib/utils';
import { SEARCH_ITEMS } from '@/components/miniwars/data/search';

const TYPE_FILTERS = [
  'All',
  ...Array.from(new Set(SEARCH_ITEMS.map((item) => item.type))),
] as const;

function TypeIcon({ type }: { type: string }) {
  const className = 'h-4 w-4';
  switch (type) {
    case 'Building':
      return <Building className={className} />;
    case 'Strategy':
      return <Flag className={className} />;
    case 'System':
      return <Cpu className={className} />;
    case 'Guide':
      return <ScrollText className={className} />;
    case 'Codes':
      return <KeyRound className={className} />;
    case 'FAQ':
      return <CircleHelp className={className} />;
    case 'Patch':
      return <ScrollText className={className} />;
    case 'News':
      return <Newspaper className={className} />;
    default:
      return <Search className={className} />;
  }
}

export function SearchPage() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<string>('All');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SEARCH_ITEMS.filter((item) => {
      if (type !== 'All' && item.type !== type) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
      );
    });
  }, [query, type]);

  return (
    <>
      <section className="border-camo-900/80 bg-bunker-950/40 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="bg-ember-500/10 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="text-ember-500 mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase">
            <span className="bg-ember-500 h-px w-8" />
            CODEX · SEARCH
          </div>
          <h1 className="font-display text-sand-100 text-4xl tracking-wider uppercase md:text-6xl">
            Search Codex
          </h1>
          <p className="text-bunker-300 mt-4 max-w-2xl text-base leading-7 md:text-lg">
            One query across the entire codex. Buildings, strategies, systems,
            codes, guides, FAQ, patches — all indexed, all instant.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="hud-frame clip-corner mb-6 p-4">
          <div className="relative">
            <Search className="text-camo-400 pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <input
              id="codex-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search buildings, strategies, systems, guides, FAQ…"
              className="bg-bunker-900/80 border-camo-800 text-sand-100 placeholder:text-bunker-500 focus:border-ember-500 w-full border py-3 pr-3 pl-9 font-mono text-sm transition-colors focus:outline-none"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {TYPE_FILTERS.map((filter) => {
              const active = type === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setType(filter)}
                  className={cn(
                    'border px-2.5 py-1 font-mono text-xs tracking-widest uppercase transition-colors',
                    active
                      ? 'border-ember-500 bg-ember-500/10 text-ember-400'
                      : 'border-camo-800 bg-bunker-900/50 text-camo-300 hover:border-camo-600'
                  )}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-3 flex items-center justify-between">
          <span className="text-camo-300 font-mono text-xs tracking-widest uppercase">
            {results.length} result{results.length === 1 ? '' : 's'}
          </span>
        </div>

        <ul className="space-y-2">
          {results.map((item) => (
            <li key={`${item.type}-${item.href}-${item.title}`}>
              <Link
                href={item.href}
                className="hud-frame clip-corner-sm group hover:border-ember-500/70 block p-4 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="border-camo-700 bg-bunker-900 text-camo-300 clip-corner-sm group-hover:border-ember-500/60 group-hover:text-ember-400 flex h-9 w-9 shrink-0 items-center justify-center border transition-colors">
                    <TypeIcon type={item.type} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-0.5 flex items-center gap-2">
                      <span className="chip">{item.type}</span>
                    </div>
                    <div className="font-display text-sand-100 group-hover:text-ember-400 text-base tracking-wider uppercase transition-colors">
                      {item.title}
                    </div>
                    <p className="text-bunker-300 mt-1 line-clamp-2 text-sm">
                      {item.description}
                    </p>
                  </div>
                  <ArrowUpRight className="text-camo-500 group-hover:text-ember-500 mt-1 h-4 w-4 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {results.length === 0 ? (
          <p className="text-bunker-400 mt-8 text-center font-mono text-sm tracking-widest uppercase">
            No matches — try another query or filter.
          </p>
        ) : null}
      </section>
    </>
  );
}
