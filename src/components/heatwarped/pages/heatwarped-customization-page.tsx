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

export function HeatwarpedCustomizationPage() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Heatwarped Customization',
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
        eyebrow={`Heatwarped customization · verified ${VERIFIED_DATE}`}
        title="Heatwarped Customization"
        intro="Heatwarped customization is an official pillar: deep visual tuning and rare car parts. This page pairs that Official framing with Demo-observed body kits, vinyls, underglow, and performance upgrades."
      />

      <article className="mx-auto max-w-5xl px-4 py-12">
        <H2>Official customization overview</H2>
        <Paragraph>
          Steam markets deep customization and asks players to customize their
          ride to the max. The{' '}
          <ExternalSource href={OFFICIAL_SITE_URL}>
            official website
          </ExternalSource>{' '}
          highlights rare car parts that breathe new life into your ride. Those
          claims are Official; acquisition systems and a full parts catalog are
          not yet documented.
        </Paragraph>

        <GuideImage
          src="/imgs/guides/garage-body-kit.webp"
          alt="Heatwarped garage Body Kit customization interface"
          caption="Official Steam screenshot — Body Kit screen in the Demo garage."
        />

        <H2>Visual customization</H2>
        <Paragraph>
          Hands-on Demo coverage from The Drive and Out of Games reports body
          kits, vinyls, and underglow neon among the visual options available in
          the current Demo. Exact catalog size for the full game is unknown.
        </Paragraph>

        <H2>Performance upgrades</H2>
        <Paragraph>
          Demo hands-on reviews also describe performance upgrades. The exact
          upgrade tree, part tiers, and final-game balancing have not been
          officially published.
        </Paragraph>

        <H2>Rare car parts</H2>
        <Paragraph>
          Rare car parts are an official feature on heatwarped.com. How players
          find, unlock, or purchase those parts in the full game remains
          undocumented.
        </Paragraph>

        <H2>Heatwarped Demo customization</H2>
        <Paragraph>
          The current Demo offers a customization preview rather than a claimed
          final catalog. Multiple independent hands-on articles report a single
          currently playable fictional car in the Demo — customization is
          explored on that ride, not across a published roster.
        </Paragraph>

        <H2>Known parts / names</H2>
        <Paragraph>
          The Drive mentions a body kit name observed as Ab-Smug. That string is
          recorded here as a hands-on observation only. Additional exact in-game
          names will be added when they are verified in Demo UI or official
          materials — not guessed from car-brand lookalikes.
        </Paragraph>

        <Paragraph>
          Related guides:{' '}
          <Link
            href="/gameplay"
            className="text-ember-400 underline underline-offset-4"
          >
            Gameplay
          </Link>{' '}
          ·{' '}
          <Link
            href="/demo"
            className="text-ember-400 underline underline-offset-4"
          >
            Demo
          </Link>
          .
        </Paragraph>

        <SourceAside>
          Official customization claims come from Steam and heatwarped.com. Body
          kits, vinyls, underglow, performance upgrades, and Ab-Smug are labeled
          as Demo / hands-on observations. Last verified {VERIFIED_DATE}.{' '}
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
