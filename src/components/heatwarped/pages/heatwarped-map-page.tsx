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

export function HeatwarpedMapPage() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Heatwarped Map',
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
        eyebrow={`Heatwarped map · Ratfield · verified ${VERIFIED_DATE}`}
        title="Heatwarped Map"
        intro="The Heatwarped map is Ratfield: an official open world with a sparkling city, wide outskirts, secrets, and an underground racing scene. This guide separates that Official framing from Demo observations such as Ashtray and PDA map tools."
      />

      <article className="mx-auto max-w-5xl px-4 py-12">
        <H2>What is Ratfield?</H2>
        <Paragraph>
          Ratfield is the official setting for Heatwarped. Steam describes it as
          sitting atop an underground racing scene. The{' '}
          <ExternalSource href={OFFICIAL_SITE_URL}>
            official website
          </ExternalSource>{' '}
          markets an Open World of Ratfield with huge environments.
        </Paragraph>

        <GuideImage
          src="/imgs/guides/ratfield-city-night.webp"
          alt="Heatwarped night city street representing Ratfield"
          caption="Official Steam screenshot — night city streets used as Ratfield visual context."
        />

        <H2>Ratfield city</H2>
        <Paragraph>
          Officially, Ratfield includes a sparkling city environment where
          street racing and exploration take place. No official district total
          or street gazetteer has been published.
        </Paragraph>

        <H2>Ratfield outskirts</H2>
        <Paragraph>
          Wide outskirts are officially confirmed on heatwarped.com. Detailed
          outskirts landmarks, roads, and activities remain undocumented beyond
          that marketing description.
        </Paragraph>

        <H2>Known Heatwarped locations</H2>
        <H3>Ashtray</H3>
        <Paragraph>
          Hands-on Demo coverage from{' '}
          <ExternalSource href={THE_DRIVE_URL}>The Drive</ExternalSource> names
          a neighborhood called Ashtray inside the Demo city chunk. That name is
          a hands-on observation, not an official Sealime location dump.
          Additional neighborhood names should only be added when they are
          directly readable in-game or published by Sealime.
        </Paragraph>

        <H2>PDA map</H2>
        <Paragraph>
          Hands-on Demo reviews describe a PDA / phone UI that can display a
          map, browse messages, enter photo mode, and help find the next event.
          The still below is a crop of the in-race mini-map from an official
          Steam screenshot — not a full PDA screen capture.
        </Paragraph>
        <GuideImage
          src="/imgs/guides/pda-map.webp"
          alt="Heatwarped in-race circular mini-map crop"
          caption="Steam screenshot crop — in-race mini-map. Not a full PDA interface capture."
        />

        <H2>Secrets and pickups</H2>
        <Paragraph>
          Officially, Heatwarped invites players to uncover secrets. Demo
          hands-on coverage (including{' '}
          <ExternalSource href={OUT_OF_GAMES_URL}>Out of Games</ExternalSource>)
          also reports pickups and at least one shop in the current Demo
          overworld. Collectible counts and full shop lists for the final game
          are unknown.
        </Paragraph>

        <H2>Is the full Heatwarped map available?</H2>
        <Paragraph>
          No. Sealime has not published a complete public map. The current Demo
          only exposes part of the open-world city according to hands-on
          reviews. Related guides:{' '}
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
          Official Ratfield wording comes from Steam and heatwarped.com.
          Ashtray, PDA tools, pickups, and Demo map scope are labeled as
          hands-on / Demo observations. Last verified {VERIFIED_DATE}.{' '}
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
