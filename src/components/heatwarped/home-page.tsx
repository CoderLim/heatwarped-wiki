import {
  ArrowRight,
  CalendarClock,
  Download,
  Gamepad2,
  Gauge,
  Map,
  Menu,
  MessageSquareText,
  MonitorCog,
  Music2,
  SlidersHorizontal,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

type NavItem = { href: string; label: string };
type Feature = {
  title: string;
  description: string;
  icon: 'map' | 'wrench' | 'scene' | 'forum' | 'music' | 'pedigree';
};

export type HeatwarpedHomeCopy = {
  nav: NavItem[];
  steamLabel: string;
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;
  wishlistLabel: string;
  demoLabel: string;
  cardsTitle: string;
  cards: Array<NavItem & { description: string; meta: string }>;
  glanceTitle: string;
  glanceIntro: string;
  facts: Array<{ label: string; value: string }>;
  featuresTitle: string;
  featuresIntro: string;
  features: Feature[];
  developersTitle: string;
  developersBody: string;
  developersDetail: string;
  developersCta: string;
  updatesTitle: string;
  updatesIntro: string;
  updateDate: string;
  updateTitle: string;
  updateBody: string;
  updateCta: string;
  footerText: string;
  footerDisclaimer: string;
  menuLabel: string;
};

const steamUrl = 'https://store.steampowered.com/app/4846360/Heatwarped/';
const cardIcons: LucideIcon[] = [CalendarClock, MonitorCog, Download, Gamepad2];
const featureIcons: Record<Feature['icon'], LucideIcon> = {
  map: Map,
  wrench: SlidersHorizontal,
  scene: Gauge,
  forum: MessageSquareText,
  music: Music2,
  pedigree: Wrench,
};

export function HeatwarpedHomePage({
  copy,
  schemaJson,
}: {
  copy: HeatwarpedHomeCopy;
  schemaJson: string;
}) {
  return (
    <div className="heatwarped-page">
      <script type="application/ld+json">{schemaJson}</script>
      <header className="heatwarped-header">
        <div className="heatwarped-shell heatwarped-header-inner">
          <Link
            href="/"
            className="heatwarped-wordmark"
            aria-label="Heatwarped home"
          >
            <span aria-hidden="true" className="heatwarped-mark">
              H
            </span>
            <span>Heatwarped</span>
          </Link>
          <nav
            className="heatwarped-desktop-nav"
            aria-label="Primary navigation"
          >
            {copy.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="heatwarped-steam-link"
            href={steamUrl}
            target="_blank"
            rel="noreferrer"
          >
            {copy.steamLabel}
            <ArrowRight aria-hidden="true" />
          </a>
          <details className="heatwarped-mobile-menu">
            <summary aria-label={copy.menuLabel}>
              <Menu aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation">
              {copy.nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="heatwarped-hero" aria-labelledby="heatwarped-title">
          <div className="heatwarped-hero-visual" aria-hidden="true">
            <div className="heatwarped-speed-arc" />
            <div className="heatwarped-horizon" />
          </div>
          <div className="heatwarped-hero-shade" />
          <div className="heatwarped-road-lines" aria-hidden="true" />
          <div className="heatwarped-shell heatwarped-hero-content">
            <p className="heatwarped-kicker">{copy.heroKicker}</p>
            <h1 id="heatwarped-title">{copy.heroTitle}</h1>
            <p className="heatwarped-hero-copy">{copy.heroDescription}</p>
            <div className="heatwarped-actions">
              <a
                className="heatwarped-button heatwarped-button-primary"
                href={steamUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Gamepad2 aria-hidden="true" />
                {copy.wishlistLabel}
              </a>
              <a
                className="heatwarped-button heatwarped-button-secondary"
                href={steamUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Download aria-hidden="true" />
                {copy.demoLabel}
              </a>
            </div>
          </div>
          <div className="heatwarped-speed-stamp" aria-hidden="true">
            <span>00</span>
            <small>KM/H</small>
          </div>
        </section>

        <section
          className="heatwarped-section heatwarped-nav-section"
          aria-labelledby="explore-heatwarped"
        >
          <div className="heatwarped-shell">
            <h2 id="explore-heatwarped" className="heatwarped-section-title">
              {copy.cardsTitle}
            </h2>
            <div className="heatwarped-route-grid">
              {copy.cards.map((card, index) => {
                const Icon = cardIcons[index];
                return (
                  <Link
                    className="heatwarped-route-card"
                    href={card.href}
                    key={card.href}
                  >
                    <div>
                      <Icon aria-hidden="true" />
                      <span className="heatwarped-route-meta">{card.meta}</span>
                    </div>
                    <h3>{card.label}</h3>
                    <p>{card.description}</p>
                    <ArrowRight
                      className="heatwarped-route-arrow"
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="heatwarped-section heatwarped-glance-section"
          aria-labelledby="heatwarped-glance"
        >
          <div className="heatwarped-shell heatwarped-glance-layout">
            <div className="heatwarped-glance-heading">
              <p className="heatwarped-kicker">Heatwarped dossier</p>
              <h2 id="heatwarped-glance">{copy.glanceTitle}</h2>
              <p>{copy.glanceIntro}</p>
            </div>
            <dl className="heatwarped-fact-grid">
              {copy.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          className="heatwarped-section heatwarped-features-section"
          aria-labelledby="heatwarped-features"
        >
          <div className="heatwarped-shell">
            <div className="heatwarped-stacked-heading">
              <h2 id="heatwarped-features">{copy.featuresTitle}</h2>
              <p>{copy.featuresIntro}</p>
            </div>
            <div className="heatwarped-feature-grid">
              {copy.features.map((feature, index) => {
                const Icon = featureIcons[feature.icon];
                return (
                  <article
                    className={`heatwarped-feature heatwarped-feature-${index + 1}`}
                    key={feature.title}
                  >
                    <Icon aria-hidden="true" />
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="heatwarped-section heatwarped-dev-section"
          aria-labelledby="heatwarped-developers"
        >
          <div className="heatwarped-shell heatwarped-dev-layout">
            <div className="heatwarped-dev-art" aria-hidden="true">
              <span>SEALIME</span>
              <span>TEAM</span>
              <Gauge />
            </div>
            <div className="heatwarped-dev-copy">
              <p className="heatwarped-kicker">Built by racers</p>
              <h2 id="heatwarped-developers">{copy.developersTitle}</h2>
              <p>{copy.developersBody}</p>
              <p>{copy.developersDetail}</p>
              <a href={steamUrl} target="_blank" rel="noreferrer">
                {copy.developersCta}
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section
          className="heatwarped-section heatwarped-updates-section"
          aria-labelledby="heatwarped-updates"
        >
          <div className="heatwarped-shell">
            <div className="heatwarped-stacked-heading">
              <h2 id="heatwarped-updates">{copy.updatesTitle}</h2>
              <p>{copy.updatesIntro}</p>
            </div>
            <article className="heatwarped-update">
              <time dateTime="2026-08-21">{copy.updateDate}</time>
              <div>
                <h3>{copy.updateTitle}</h3>
                <p>{copy.updateBody}</p>
              </div>
              <a href={steamUrl} target="_blank" rel="noreferrer">
                {copy.updateCta}
                <ArrowRight aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer className="heatwarped-footer">
        <div className="heatwarped-shell heatwarped-footer-inner">
          <div>
            <span className="heatwarped-footer-logo">Heatwarped</span>
            <p>{copy.footerText}</p>
          </div>
          <p>{copy.footerDisclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
