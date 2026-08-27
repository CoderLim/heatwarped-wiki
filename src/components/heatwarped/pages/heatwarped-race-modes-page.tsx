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

const modes = [
  {
    name: 'City Circuit',
    body: 'A lap-based street race through the Demo city. Current Demo verified via Speedrun.com categories and multiple hands-on reviews.',
  },
  {
    name: 'City Sprint',
    body: 'A point-to-point sprint through city streets. Current Demo verified alongside Circuit, Time Trial, and Drift.',
  },
  {
    name: 'City Time Trial',
    body: 'A timed run against the clock rather than a full grid race. Current Demo verified on Speedrun.com as City Time Trial.',
  },
  {
    name: 'City Track Drift',
    body: 'A drift-focused event with scoring / multiplier behavior described in hands-on Demo coverage. Current Demo verified as City Track Drift.',
  },
] as const;

export function HeatwarpedRaceModesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Heatwarped Demo race modes',
    itemListElement: modes.map((mode, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: mode.name,
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Heatwarped Race Modes',
    dateModified: MODIFIED_DATE,
    about: { '@type': 'VideoGame', name: 'Heatwarped', url: STEAM_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <PageHero
        eyebrow={`Heatwarped race modes · verified ${VERIFIED_DATE}`}
        title="Heatwarped Race Modes"
        intro="Heatwarped officially advertises many race modes. This page lists the Demo-verified City Circuit, Sprint, Time Trial, and Drift events, plus NOS and route-direction variants — without inventing a final full-game roster."
      />

      <article className="mx-auto max-w-5xl px-4 py-12">
        <H2>Official race mode status</H2>
        <Paragraph>
          The{' '}
          <ExternalSource href={OFFICIAL_SITE_URL}>
            official Heatwarped website
          </ExternalSource>{' '}
          states that Heatwarped has many race modes. Sealime has not published
          a complete final-mode list on Steam. Anything below that names a
          specific Demo event is labeled Current Demo verified.
        </Paragraph>

        <GuideImage
          src="/imgs/guides/race-hud-circuit.webp"
          alt="Heatwarped race HUD during a night street event"
          caption="Official Steam screenshot — race HUD used as visual context for Demo race modes."
        />

        <H2>Current Demo race modes</H2>
        {modes.map((mode) => (
          <div key={mode.name}>
            <H3>{mode.name}</H3>
            <Paragraph>{mode.body}</Paragraph>
          </div>
        ))}

        <H2>NOS vs No NOS</H2>
        <Paragraph>
          Speedrun.com Heatwarped Demo categories distinguish NOS and No-NOS
          runs. That makes nitrous availability a Current Demo verified race
          variation, not an unverified rumor.
        </Paragraph>

        <H2>Forward vs Reverse</H2>
        <Paragraph>
          The same Speedrun.com structure also separates Forward and Reverse
          route directions for Demo races. Treat direction as a Demo race
          variation until Sealime documents final-game route rules.
        </Paragraph>

        <H2>Ranked races</H2>
        <Paragraph>
          Hands-on Demo coverage (including{' '}
          <ExternalSource href={OUT_OF_GAMES_URL}>Out of Games</ExternalSource>)
          reports ranked race progression cues. The complete progression system
          for the full game has not been officially documented, so this page
          does not invent unlock tables.
        </Paragraph>

        <H2>Will Heatwarped have drag racing?</H2>
        <Paragraph>
          Drag racing is not confirmed for the final game. Some reviewers noted
          they did not see drag in the current Demo. Absence from the Demo is
          not proof that drag will never ship.
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
          . Category evidence:{' '}
          <ExternalSource href={SPEEDRUN_URL}>Speedrun.com runs</ExternalSource>
          .
        </Paragraph>

        <SourceAside>
          Official “many race modes” wording comes from heatwarped.com. Specific
          Demo mode names are Current Demo verified via Speedrun.com and
          independent hands-on reviews. Last verified {VERIFIED_DATE}.{' '}
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
