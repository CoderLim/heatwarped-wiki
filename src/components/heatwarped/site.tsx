import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

import '@/styles/heatwarped.css';

const nav = [
  { to: '/cars', label: 'Cars' },
  { to: '/demo', label: 'Demo' },
  { to: '/release-date', label: 'Release' },
  { to: '/system-requirements', label: 'PC Specs' },
] as const;

export const OFFICIAL_SOURCES = {
  steam: {
    label: 'Heatwarped on Steam',
    url: 'https://store.steampowered.com/app/4846360/Heatwarped/',
    type: 'Primary source',
  },
  site: {
    label: 'Official Heatwarped website',
    url: 'https://heatwarped.com/',
    type: 'Primary source',
  },
  trailer: {
    label: 'Heatwarped — Official Reveal Trailer',
    url: 'https://www.youtube.com/watch?v=q7t6_ff8mlg',
    type: 'Official video',
  },
} as const;

export function HeatwarpedShell({ children }: { children: ReactNode }) {
  return (
    <div className="hw-shell">
      <div className="hw-topbar">
        <div className="hw-topbar-inner">
          <span><span className="hw-signal">Signal live</span> // Ratfield archive // street racing</span>
          <span>Unofficial wiki // source-first build</span>
        </div>
      </div>
      <header className="hw-header">
        <div className="hw-header-inner">
          <a href="/" className="hw-brand" aria-label="Heatwarped Wiki home">
            <img src="/heatwarped-logo.svg" alt="Heatwarped Wiki" />
          </a>
          <nav className="hw-nav" aria-label="Primary navigation">
            {nav.map((item) => (
              <a key={item.to} href={item.to}>{item.label}</a>
            ))}
          </nav>
          <a className="hw-official" href={OFFICIAL_SOURCES.steam.url} target="_blank" rel="noreferrer">
            Steam <ArrowUpRight size={13} aria-hidden />
          </a>
        </div>
      </header>
      <main className="hw-main">{children}</main>
      <footer className="hw-footer">
        <div className="hw-footer-inner">
          <p>
            <strong>Heatwarped Wiki</strong> is an unofficial fan-made reference and is not affiliated with
            Sealime. Game facts are separated into confirmed, observed, planned, and unverified states so
            early information does not become permanent misinformation.
          </p>
          <div className="hw-footer-nav">
            {nav.map((item) => <a key={item.to} href={item.to}>{item.label}</a>)}
            <a href={OFFICIAL_SOURCES.site.url} target="_blank" rel="noreferrer">Official site</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  updated = 'Updated August 22, 2026',
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  updated?: string;
}) {
  return (
    <section className="hw-page-hero">
      <div className="hw-topbar-inner">
        <div className="hw-eyebrow">{eyebrow}</div>
        <h1 className="hw-page-title">{title} {accent ? <em>{accent}</em> : null}</h1>
        <p className="hw-page-deck">{description}</p>
        <div className="hw-updated">Verification status // {updated}</div>
      </div>
    </section>
  );
}

export function SourceList({
  sources,
}: {
  sources: Array<{ label: string; url: string; type: string }>;
}) {
  return (
    <section className="hw-sources" aria-labelledby="sources-title">
      <h2 id="sources-title">Primary sources</h2>
      <p>
        This page prefers first-party sources. When the playable demo is used for a future fact, the page
        will identify it as an in-game observation rather than an official announcement.
      </p>
      <ul className="hw-source-list">
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer">
              {source.label}
              <span>{source.type} ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SideRail({
  status,
  links,
}: {
  status: Array<[string, string]>;
  links: Array<{ to: string; label: string }>;
}) {
  return (
    <aside className="hw-side" aria-label="Page summary">
      <div className="hw-side-card">
        <h3>Verified status</h3>
        <ul>
          {status.map(([key, value]) => <li key={key}><strong>{key}:</strong> {value}</li>)}
        </ul>
      </div>
      <div className="hw-side-card">
        <h3>Related pages</h3>
        <ul>{links.map((link) => <li key={link.to}><a href={link.to}>{link.label}</a></li>)}</ul>
      </div>
    </aside>
  );
}

export function Faq({
  items,
}: {
  items: Array<{ q: string; a: string }>;
}) {
  return (
    <div className="hw-faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
