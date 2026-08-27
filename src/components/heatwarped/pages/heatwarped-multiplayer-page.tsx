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

const faqItems = [
  {
    question: 'Does Heatwarped have multiplayer?',
    answer:
      "Heatwarped's official website advertises online challenges against other players. The current Steam feature list still shows Single-player. Exact online mode structure is undocumented.",
  },
  {
    question: 'Is Heatwarped online free roam confirmed?',
    answer:
      'No official source checked for this page documents online free roam, lobbies, or matchmaking details yet.',
  },
  {
    question: 'Does Steam say Heatwarped is multiplayer?',
    answer:
      'Steam currently lists Single-player among store features. That listing coexists with the official website Online section and should be read together, not ignored.',
  },
] as const;

export function HeatwarpedMultiplayerPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Heatwarped Multiplayer',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow={`Heatwarped multiplayer · verified ${VERIFIED_DATE}`}
        title="Heatwarped Multiplayer"
        intro="Does Heatwarped have multiplayer? Yes — the official website advertises online challenges against other players. Steam's current feature list still displays Single-player. Exact online modes remain undocumented."
      />

      <article className="mx-auto max-w-5xl px-4 py-12">
        <H2>What is confirmed</H2>
        <Paragraph>
          <ExternalSource href={OFFICIAL_SITE_URL}>
            heatwarped.com
          </ExternalSource>{' '}
          includes a Compete Online section describing challenges against other
          players. That is an Official website claim.
        </Paragraph>
        <Paragraph>
          The <ExternalSource href={STEAM_URL}>Steam store page</ExternalSource>{' '}
          currently still lists Single-player among features. Both facts are
          true at verification time and should be stated together.
        </Paragraph>

        <H2>What is still unknown</H2>
        <Paragraph>
          Sealime has not yet documented player count, matchmaking, co-op, PvP
          structure, lobby systems, online free roam, cross-play, or whether
          online uses dedicated servers or peer-to-peer. This page stays short
          until those details exist.
        </Paragraph>

        <H2>FAQ</H2>
        <div className="mt-6 space-y-6">
          {faqItems.map((item) => (
            <section key={item.question} className="border-camo-800 border p-5">
              <h3 className="font-display text-sand-100 text-lg tracking-wider uppercase">
                {item.question}
              </h3>
              <p className="text-bunker-300 mt-2 leading-7">{item.answer}</p>
            </section>
          ))}
        </div>

        <Paragraph>
          Related:{' '}
          <Link
            href="/gameplay"
            className="text-ember-400 underline underline-offset-4"
          >
            Heatwarped gameplay
          </Link>
          .
        </Paragraph>

        <SourceAside>
          Online wording is taken from heatwarped.com; Single-player is taken
          from the live Steam feature list. Last verified {VERIFIED_DATE}.{' '}
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
