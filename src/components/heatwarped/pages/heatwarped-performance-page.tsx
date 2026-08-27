import { ExternalLink, Info } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

const STEAM_URL = 'https://store.steampowered.com/app/4846360/Heatwarped/';
const OFFICIAL_SITE_URL = 'https://heatwarped.com/';
const SPEEDRUN_URL = 'https://www.speedrun.com/users/Shiinyu';
const THE_DRIVE_URL =
  'https://www.thedrive.com/news/new-indie-game-feels-like-the-second-coming-of-nfs-underground';
const OUT_OF_GAMES_URL =
  'https://outof.games/news/9609-lets-look-at-the-heatwarped-demo-a-modern-reimagining-of-need-for-speed-underground-2/';
const VERIFIED_DATE = 'August 27, 2026';
const MODIFIED_DATE = '2026-08-27';

function ExternalSource({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="text-ember-400 hover:text-ember-300 inline-flex items-center gap-1 underline underline-offset-4"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-sand-100 mt-12 mb-4 text-2xl tracking-wider uppercase md:text-3xl">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-sand-100 mt-8 mb-3 text-xl tracking-wider uppercase">
      {children}
    </h3>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-bunker-200 mt-4 text-base leading-8">{children}</p>;
}

function GuideImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="border-camo-800 bg-bunker-900/45 mt-6 overflow-hidden border">
      <img
        src={src}
        alt={alt}
        width={1280}
        height={720}
        className="h-auto w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <figcaption className="text-bunker-400 border-camo-800 border-t px-4 py-3 text-sm leading-6">
        {caption}
      </figcaption>
    </figure>
  );
}

function SourceAside({ children }: { children: React.ReactNode }) {
  return (
    <aside className="border-camo-800 bg-bunker-900/55 mt-12 border p-4 text-sm leading-7">
      <div className="text-camo-300 mb-2 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
        <Info className="h-4 w-4" />
        Source policy
      </div>
      <div className="text-bunker-200">{children}</div>
    </aside>
  );
}

function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-camo-900 relative overflow-hidden border-b">
      <div className="grid-bg absolute inset-0 opacity-35" />
      <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="text-ember-500 mb-4 font-mono text-xs tracking-[0.35em] uppercase">
          {eyebrow}
        </div>
        <h1 className="font-display text-sand-100 text-4xl leading-tight tracking-wider uppercase md:text-6xl">
          {title}
        </h1>
        <p className="text-bunker-200 mt-6 max-w-3xl text-lg leading-8">
          {intro}
        </p>
      </div>
    </section>
  );
}

export function HeatwarpedPerformancePage() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Heatwarped Performance',
    dateModified: MODIFIED_DATE,
    about: { '@type': 'VideoGame', name: 'Heatwarped', url: STEAM_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <PageHero
        eyebrow={`Heatwarped performance · verified ${VERIFIED_DATE}`}
        title="Heatwarped Performance"
        intro="Heatwarped performance targets on Steam are 1080p at 30 FPS in Authentic mode for minimum specs, and 1080p at 60 FPS in Enhanced mode for recommended specs. Steam also notes the game is heavily processor-dependent."
      />

      <article className="mx-auto max-w-5xl px-4 py-12">
        <H2>Official performance targets</H2>
        <Paragraph>
          According to the{' '}
          <ExternalSource href={STEAM_URL}>
            official Heatwarped Steam listing
          </ExternalSource>
          :
        </Paragraph>
        <ul className="text-bunker-200 mt-4 list-disc space-y-2 pl-6 text-base leading-8">
          <li>Minimum target: 1080p / 30 FPS on Authentic graphics mode</li>
          <li>Recommended target: 1080p / 60 FPS on Enhanced graphics mode</li>
          <li>Both tiers: game is heavily processor-dependent</li>
        </ul>

        <H2>Authentic vs Enhanced</H2>
        <Paragraph>
          Authentic and Enhanced are the named graphics modes tied to those
          official targets. This page does not invent intermediate presets or
          “best settings” lists beyond what Steam publishes.
        </Paragraph>

        <H2>No community FPS table yet</H2>
        <Paragraph>
          Community hardware videos exist, but this wiki does not guess FPS
          numbers from video feel. A sourced hardware table will be added only
          after multiple reliable measured rows are available. Until then, use
          the official targets and test the free Demo on your PC.
        </Paragraph>

        <Paragraph>
          Related:{' '}
          <Link
            href="/system-requirements"
            className="text-ember-400 underline underline-offset-4"
          >
            System requirements
          </Link>{' '}
          ·{' '}
          <Link
            href="/demo"
            className="text-ember-400 underline underline-offset-4"
          >
            Demo download
          </Link>
          .
        </Paragraph>

        <SourceAside>
          All performance targets on this page come from Steam. No unofficial
          FPS measurements are presented as facts. Last verified {VERIFIED_DATE}
          .{' '}
          <Link
            href="/source-policy"
            className="text-ember-400 underline underline-offset-4"
          >
            Source policy
          </Link>
          .
        </SourceAside>
      </article>
    </>
  );
}
