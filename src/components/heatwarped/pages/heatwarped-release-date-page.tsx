import type { ReactNode } from 'react';
import { ExternalLink, Info } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';

const STEAM_URL = 'https://store.steampowered.com/app/4846360/Heatwarped/';
const OFFICIAL_SITE_URL = 'https://heatwarped.com/';
const HEAT_BOARD_GAME_URL = 'https://www.daysofwonder.com/game/heat/';
const STEAMDB_GAME_URL = 'https://steamdb.info/app/4846360/info/';
const STEAMDB_DEMO_URL = 'https://steamdb.info/app/4999690/info/';
const RELEASE_DATE_VERIFIED_DATE = 'August 26, 2026';
const RELEASE_DATE_MODIFIED_ISO = '2026-08-26';

function ExternalSource({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
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

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-sand-100 mt-12 mb-4 text-2xl tracking-wider uppercase md:text-3xl">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-bunker-200 mt-4 text-base leading-8">{children}</p>;
}

export function HeatwarpedReleaseDatePage() {
  const faqItems = [
    {
      question: 'When will Heatwarped release?',
      answer:
        'Sealime has not announced a full Heatwarped release date. The official Steam listing currently shows the release date as To be announced (TBA).',
    },
    {
      question: 'Can I play Heatwarped now?',
      answer:
        'Yes, in demo form. The official Steam page currently offers a free Heatwarped demo.',
    },
    {
      question: 'Will Heatwarped enter Early Access before full release?',
      answer:
        'No Early Access plan is currently stated on the official Heatwarped Steam listing or the official Heatwarped website. This page will only add an Early Access date if Sealime announces one.',
    },
    {
      question: 'How much will Heatwarped cost?',
      answer:
        'The Heatwarped demo is free on Steam. A full-game launch price is not currently published on the official Steam listing.',
    },
    {
      question: 'Who is developing Heatwarped?',
      answer:
        'Steam lists Sealime as both the developer and publisher of Heatwarped.',
    },
    {
      question: 'Will Heatwarped demo progress carry over to the full game?',
      answer:
        'No save-transfer or demo-progress carryover policy is stated in the official sources checked for this page, so carryover is not confirmed.',
    },
    {
      question: 'Is Heatwarped confirmed for PS5, Xbox, or Nintendo Switch?',
      answer:
        'No console release is currently announced in the official sources checked for this page. The current Steam listing publishes Windows PC requirements.',
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Heatwarped Release Date',
        url: `${envConfigs.app_url}/release-date`,
        datePublished: '2026-08-22',
        dateModified: RELEASE_DATE_MODIFIED_ISO,
        about: {
          '@type': 'VideoGame',
          name: 'Heatwarped',
          gamePlatform: 'Windows PC',
          publisher: {
            '@type': 'Organization',
            name: 'Sealime',
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="border-camo-900 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="text-ember-500 mb-4 font-mono text-xs tracking-[0.35em] uppercase">
            Heatwarped release tracker · verified {RELEASE_DATE_VERIFIED_DATE}
          </div>
          <h1 className="font-display text-sand-100 text-4xl leading-tight tracking-wider uppercase md:text-6xl">
            Heatwarped Release Date
          </h1>
          <p className="text-bunker-200 mt-6 max-w-3xl text-lg leading-8">
            The Heatwarped release date is currently TBA. Steam has not
            published a full-game launch date, while the free Heatwarped demo is
            available now.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-4 py-12">
        <aside
          className="border-camo-800 bg-bunker-900/55 border p-5"
          aria-label="Heatwarped disambiguation"
        >
          <div className="text-camo-300 mb-2 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
            <Info className="h-4 w-4" />
            Heatwarped video game vs Heat board game
          </div>
          <p className="text-bunker-200 text-sm leading-7 md:text-base">
            This page tracks the release date of{' '}
            <strong className="text-sand-100">Heatwarped</strong>, the
            open-world arcade street racing video game developed and published
            by Sealime for Steam. It is{' '}
            <strong className="text-sand-100">not</strong> about{' '}
            <ExternalSource href={HEAT_BOARD_GAME_URL}>
              Heat: Pedal to the Metal
            </ExternalSource>
            , the tabletop racing game published by Days of Wonder.
          </p>
        </aside>

        <div className="border-ember-500/60 bg-ember-500/5 mt-6 border p-6">
          <div className="text-ember-400 font-mono text-xs tracking-[0.25em] uppercase">
            Current Heatwarped release status
          </div>
          <div className="font-display text-sand-100 mt-3 text-4xl tracking-wider uppercase">
            TBA · To Be Announced
          </div>
          <div className="text-bunker-200 mt-4 grid gap-2 text-sm sm:grid-cols-2">
            <div>Full game: No official date announced</div>
            <div>
              Heatwarped demo:{' '}
              <Link
                className="text-ember-400 hover:text-ember-300 underline underline-offset-4"
                href="/demo"
              >
                Available now on Steam
              </Link>
            </div>
          </div>
          <div className="text-camo-400 mt-4 font-mono text-[11px] tracking-widest uppercase">
            Last verified: {RELEASE_DATE_VERIFIED_DATE}
          </div>
        </div>

        <H2>Is there an official Heatwarped release date?</H2>
        <Paragraph>
          No. The{' '}
          <ExternalSource href={STEAM_URL}>
            official Heatwarped Steam listing
          </ExternalSource>{' '}
          currently shows the Heatwarped release date as “To be announced.”
          Steam also identifies Sealime as the developer and publisher. Until
          Sealime changes that field or publishes a dated announcement through
          an official channel, this page will not assign Heatwarped a 2026,
          2027, quarterly, or seasonal launch window.
        </Paragraph>
        <Paragraph>
          That distinction matters because search results can mix official
          information with database estimates, retailer placeholders, editorial
          guesses, and copied news reports. A third-party page can display a
          year without that year being an announcement from Sealime. For
          Heatwarped, TBA remains the correct full-game release status as of{' '}
          {RELEASE_DATE_VERIFIED_DATE}.
        </Paragraph>

        <H2>Heatwarped reveal and release timeline</H2>
        <Paragraph>
          The dated public trail we can verify is short, so this timeline
          intentionally avoids inventing an earlier “announcement date.” The
          official Steam page confirms the current product status, while SteamDB
          is used only as a technical record of Steam metadata timestamps for
          the demo and trailer.
        </Paragraph>
        <div className="mt-5 space-y-4">
          <section className="border-camo-800 bg-bunker-900/45 border p-5">
            <div className="text-ember-400 font-mono text-[11px] tracking-[0.3em] uppercase">
              June 12, 2026
            </div>
            <h3 className="font-display text-sand-100 mt-2 text-xl tracking-wider uppercase">
              Heatwarped first detected in Steam metadata
            </h3>
            <p className="text-bunker-300 mt-2 leading-7">
              SteamDB records show Heatwarped was first detected in Steam
              metadata on June 12, 2026. That timestamp is a database first-seen
              date — not an official Sealime announcement date.
            </p>
            <div className="mt-3 text-sm">
              <ExternalSource href={STEAMDB_GAME_URL}>
                SteamDB Heatwarped app record
              </ExternalSource>
            </div>
          </section>

          <section className="border-camo-800 bg-bunker-900/45 border p-5">
            <div className="text-ember-400 font-mono text-[11px] tracking-widest uppercase">
              August 21, 2026
            </div>
            <h3 className="font-display text-sand-100 mt-2 text-xl tracking-wider uppercase">
              Heatwarped Reveal Trailer recorded in Steam metadata
            </h3>
            <p className="text-bunker-300 mt-2 leading-7">
              SteamDB records the Heatwarped “Reveal Trailer” in the game’s
              Steam metadata on August 21, 2026. The current official Steam
              store page continues to show the trailer and the game as
              unreleased.
            </p>
            <div className="mt-3 text-sm">
              <ExternalSource href={STEAMDB_GAME_URL}>
                Steam metadata record
              </ExternalSource>
            </div>
          </section>

          <section className="border-camo-800 bg-bunker-900/45 border p-5">
            <div className="text-ember-400 font-mono text-[11px] tracking-widest uppercase">
              August 21, 2026
            </div>
            <h3 className="font-display text-sand-100 mt-2 text-xl tracking-wider uppercase">
              Heatwarped Demo released on Steam
            </h3>
            <p className="text-bunker-300 mt-2 leading-7">
              SteamDB records the Heatwarped Demo store release on August 21,
              2026. The{' '}
              <ExternalSource href={STEAM_URL}>
                official Heatwarped Steam page
              </ExternalSource>{' '}
              and the{' '}
              <ExternalSource href={OFFICIAL_SITE_URL}>
                official Heatwarped website
              </ExternalSource>{' '}
              currently provide access to the demo.
            </p>
            <div className="mt-3 text-sm">
              <ExternalSource href={STEAMDB_DEMO_URL}>
                Heatwarped Demo Steam metadata record
              </ExternalSource>
            </div>
          </section>

          <section className="border-camo-800 bg-bunker-900/45 border p-5">
            <div className="text-ember-400 font-mono text-[11px] tracking-widest uppercase">
              August 26, 2026
            </div>
            <h3 className="font-display text-sand-100 mt-2 text-xl tracking-wider uppercase">
              Full Heatwarped release date remains TBA
            </h3>
            <p className="text-bunker-300 mt-2 leading-7">
              We rechecked the official Steam listing on August 26, 2026. It
              still says “To be announced,” and the free Heatwarped demo remains
              available. No official full-game launch date or release window is
              stated there.
            </p>
          </section>
        </div>

        <H2>What we know about Heatwarped before release</H2>
        <Paragraph>
          Heatwarped is an{' '}
          <Link
            className="text-ember-400 hover:text-ember-300 underline underline-offset-4"
            href="/gameplay"
          >
            open-world arcade street racing game set in the 2000s
          </Link>
          . The official Heatwarped website describes Ratfield as a large open
          world that stretches from a sparkling city to wide outskirts, while
          Steam highlights driving, deep customization, rich environments, and
          the night-driving atmosphere. Those details establish what kind of
          game Heatwarped is, but they do not establish when the full version
          will launch.
        </Paragraph>
        <Paragraph>
          A{' '}
          <Link
            className="text-ember-400 hover:text-ember-300 underline underline-offset-4"
            href="/demo"
          >
            free Heatwarped demo
          </Link>{' '}
          is already available on Steam. The existence of a public demo does not
          mean the full release is imminent. Demos can ship at many stages of
          development, and Steam still lists the full Heatwarped release date as
          TBA.
        </Paragraph>
        <Paragraph>
          Steam also publishes Windows PC specifications for Heatwarped. If you
          want to check hardware compatibility before trying the demo, see the{' '}
          <Link
            className="text-ember-400 hover:text-ember-300 underline underline-offset-4"
            href="/system-requirements"
          >
            Heatwarped system requirements
          </Link>
          . These PC requirements confirm the current Steam version, but they do
          not imply an unannounced Mac or console release.
        </Paragraph>

        <H2>Heatwarped release status updates</H2>
        <div className="border-camo-800 mt-5 overflow-hidden border">
          <div className="border-camo-800 bg-bunker-900/70 grid gap-2 border-b px-4 py-4 md:grid-cols-[10rem_1fr]">
            <time
              className="text-ember-400 font-mono text-xs tracking-widest uppercase"
              dateTime="2026-08-26"
            >
              August 26, 2026
            </time>
            <p className="text-bunker-200 text-sm leading-6">
              Re-verified the official Steam listing: Heatwarped remains TBA,
              the free demo remains available, and no official full-game launch
              window is shown.
            </p>
          </div>
          <div className="bg-bunker-900/35 grid gap-2 px-4 py-4 md:grid-cols-[10rem_1fr]">
            <time
              className="text-camo-300 font-mono text-xs tracking-widest uppercase"
              dateTime="2026-08-22"
            >
              August 22, 2026
            </time>
            <p className="text-bunker-300 text-sm leading-6">
              This tracker began recording the official Heatwarped release
              status as TBA and the Steam demo as available.
            </p>
          </div>
        </div>

        <H2>How to follow the Heatwarped release date</H2>
        <ol className="text-bunker-200 mt-4 list-decimal space-y-3 pl-6 text-base leading-8">
          <li>
            Open the{' '}
            <ExternalSource href={STEAM_URL}>
              official Heatwarped Steam page
            </ExternalSource>
            .
          </li>
          <li>
            Add Heatwarped to your Steam wishlist; Steam explicitly offers
            wishlist notification for the unreleased game.
          </li>
          <li>
            Check the{' '}
            <ExternalSource href={OFFICIAL_SITE_URL}>
              official Heatwarped website
            </ExternalSource>{' '}
            for developer-owned links and updates.
          </li>
          <li>
            Re-check this Heatwarped release date tracker after a Sealime
            announcement; estimates will remain separate from confirmed dates.
          </li>
        </ol>

        <H2>Heatwarped release date FAQ</H2>
        <div className="mt-5 space-y-4">
          {faqItems.map((item) => (
            <section
              key={item.question}
              className="border-camo-800 bg-bunker-900/45 border p-5"
            >
              <h3 className="font-display text-sand-100 text-lg tracking-wider uppercase">
                {item.question}
              </h3>
              <p className="text-bunker-300 mt-2 leading-7">{item.answer}</p>
            </section>
          ))}
        </div>

        <aside className="border-camo-800 bg-bunker-900/55 mt-8 border p-4 text-sm leading-7">
          <div className="text-camo-300 mb-2 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
            <Info className="h-4 w-4" />
            Source policy
          </div>
          <div className="text-bunker-200">
            Release status, developer/publisher identity, demo availability,
            game description and PC platform evidence are checked against the{' '}
            <ExternalSource href={STEAM_URL}>
              official Heatwarped Steam listing
            </ExternalSource>{' '}
            and{' '}
            <ExternalSource href={OFFICIAL_SITE_URL}>
              official Heatwarped website
            </ExternalSource>
            . The exact August 21 demo/trailer timestamps are labeled as Steam
            metadata records and sourced to SteamDB rather than presented as
            direct Sealime announcements. The board-game disambiguation is
            checked against{' '}
            <ExternalSource href={HEAT_BOARD_GAME_URL}>
              Days of Wonder’s official Heat page
            </ExternalSource>
            . Last verified {RELEASE_DATE_VERIFIED_DATE}.
          </div>
        </aside>
      </article>
    </>
  );
}
