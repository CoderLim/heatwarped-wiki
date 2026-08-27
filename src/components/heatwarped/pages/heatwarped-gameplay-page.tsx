import { ArrowRight, Download, ExternalLink, Info } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { OfficialHeatwarpedMedia } from '@/components/heatwarped/official-heatwarped-media';

const STEAM_URL = 'https://store.steampowered.com/app/4846360/Heatwarped/';
const OFFICIAL_SITE_URL = 'https://heatwarped.com/';
const SPEEDRUN_URL = 'https://www.speedrun.com/users/Shiinyu';
const THE_DRIVE_URL =
  'https://www.thedrive.com/news/new-indie-game-feels-like-the-second-coming-of-nfs-underground';
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

export function HeatwarpedGameplayPage() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Heatwarped Gameplay',
    dateModified: MODIFIED_DATE,
    about: {
      '@type': 'VideoGame',
      name: 'Heatwarped',
      url: STEAM_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="border-camo-900 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="text-ember-500 mb-4 font-mono text-xs tracking-[0.35em] uppercase">
            Heatwarped gameplay · verified {VERIFIED_DATE}
          </div>
          <h1 className="font-display text-sand-100 text-4xl leading-tight tracking-wider uppercase md:text-6xl">
            Heatwarped Gameplay
          </h1>
          <p className="text-bunker-200 mt-6 max-w-3xl text-lg leading-8">
            Heatwarped gameplay is open-world arcade street racing set in the
            2000s. Official sources confirm Ratfield, many race modes, deep
            customization, a PDA racing forum, respect building, and online
            challenges — while Demo-verified details cover Circuit, Sprint, Time
            Trial, Drift, and nitrous.
          </p>
        </div>
      </section>

      <OfficialHeatwarpedMedia variant="gameplay" />

      <article className="mx-auto max-w-5xl px-4 py-12">
        <H2>What kind of game is Heatwarped?</H2>
        <Paragraph>
          Heatwarped is positioned as an open-world arcade street racing game
          set in the 2000s. The{' '}
          <ExternalSource href={STEAM_URL}>
            official Steam listing
          </ExternalSource>{' '}
          and the{' '}
          <ExternalSource href={OFFICIAL_SITE_URL}>
            official Heatwarped website
          </ExternalSource>{' '}
          both frame the fantasy around underground racing, rich environments,
          and a strong soundtrack-driven night atmosphere. This guide separates
          Official facts from Current Demo verified details and hands-on
          observations.
        </Paragraph>

        <H2>Ratfield open world</H2>
        <Paragraph>
          Officially, Heatwarped takes place in Ratfield — a city with an
          underground racing scene, described on the official site as huge
          environments spanning a sparkling city and wide outskirts. Players are
          also told they can explore and uncover secrets. Exact map size and a
          full district list have not been published.
        </Paragraph>
        <Paragraph>
          For neighborhood names, PDA map notes, and Demo exploration scope, see
          the{' '}
          <Link
            href="/map"
            className="text-ember-400 underline underline-offset-4"
          >
            Heatwarped map guide
          </Link>
          .
        </Paragraph>
        <GuideImage
          src="/imgs/guides/ratfield-city-night.webp"
          alt="Heatwarped night city street with neon signs and wet asphalt"
          caption="Official Steam screenshot — night city atmosphere used for Ratfield open-world context."
        />

        <H2>Heatwarped race modes</H2>
        <Paragraph>
          The official Heatwarped website confirms the game has many race modes.
          In the current public Demo, community-verifiable runs and hands-on
          coverage document City Circuit, City Sprint, City Time Trial, and City
          Track Drift. Those four names describe the Demo as it exists today —
          not a final sealed roster for the full game.
        </Paragraph>
        <Paragraph>
          See the{' '}
          <Link
            href="/race-modes"
            className="text-ember-400 underline underline-offset-4"
          >
            Heatwarped race modes
          </Link>{' '}
          page for NOS / No-NOS and Forward / Reverse Demo variants.
        </Paragraph>
        <GuideImage
          src="/imgs/guides/race-hud-circuit.webp"
          alt="Heatwarped race HUD during a night street race"
          caption="Official Steam screenshot — race HUD during street racing gameplay."
        />

        <H2>Driving and nitrous</H2>
        <Paragraph>
          Heatwarped is framed as arcade street racing rather than a hardcore
          sim. Nitrous / NOS is Current Demo verified: Speedrun.com categories
          distinguish NOS and No-NOS runs, and multiple hands-on reviews
          describe nitrous during Demo races. Exact NOS upgrade trees for the
          full game remain undocumented.
        </Paragraph>

        <H2>PDA racing forum</H2>
        <Paragraph>
          Steam officially describes Heatwarped players meeting other racers
          from a PDA racing forum, competing, and building respect. The PDA is
          therefore an official gameplay pillar — not a rumor. Exact menu trees,
          message systems, and forum progression rules beyond that positioning
          are not fully documented on Steam.
        </Paragraph>
        <Paragraph>
          Hands-on Demo coverage (for example{' '}
          <ExternalSource href={THE_DRIVE_URL}>The Drive</ExternalSource>)
          observes a phone-style UI that can show a map, messages, photo mode,
          and the next event. Treat those UI details as Demo observations unless
          Sealime publishes a fuller PDA design document.
        </Paragraph>

        <H2>Build respect</H2>
        <Paragraph>
          Building respect is part of Heatwarped&apos;s official Steam
          positioning alongside the PDA racing forum and competition. This wiki
          does not invent respect level counts, unlock tables, or formulas —
          those have not been officially published.
        </Paragraph>

        <H2>Customization</H2>
        <Paragraph>
          Steam sells deep customization (“customize your ride to the max”), and
          the official site highlights rare car parts that breathe new life into
          your ride. Demo hands-on coverage has observed body kits, vinyls,
          underglow, and performance upgrades. Details live on the{' '}
          <Link
            href="/customization"
            className="text-ember-400 underline underline-offset-4"
          >
            Heatwarped customization
          </Link>{' '}
          guide.
        </Paragraph>
        <GuideImage
          src="/imgs/guides/garage-body-kit.webp"
          alt="Heatwarped garage Body Kit customization screen"
          caption="Official Steam screenshot — Body Kit customization UI in the garage."
        />

        <H2>Online play</H2>
        <Paragraph>
          Online challenges against other players are advertised on the official
          Heatwarped website, while Steam&apos;s current feature list still
          shows Single-player. Exact online modes remain undocumented.
        </Paragraph>
        <Paragraph>
          For the short status summary, see{' '}
          <Link
            href="/multiplayer"
            className="text-ember-400 underline underline-offset-4"
          >
            Heatwarped multiplayer
          </Link>
          .
        </Paragraph>

        <H2>Soundtrack and atmosphere</H2>
        <Paragraph>
          Steam treats the soundtrack as a core part of Heatwarped&apos;s race
          and night-driving atmosphere. No official full track list or artist
          list has been published, so this wiki does not invent a soundtrack
          page of guessed genres or song titles.
        </Paragraph>

        <H2>Try the Heatwarped demo</H2>
        <Paragraph>
          The free Demo is the best way to experience current race modes,
          nitrous, and open-world driving for yourself. Demo-verified mode names
          used above are also cross-checkable via{' '}
          <ExternalSource href={SPEEDRUN_URL}>
            Speedrun.com Heatwarped Demo runs
          </ExternalSource>
          .
        </Paragraph>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/demo" className="btn-tactical">
            Heatwarped Demo Guide <Download className="h-4 w-4" />
          </Link>
          <a
            className="btn-ghost"
            href={STEAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open Steam <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <aside className="border-camo-800 bg-bunker-900/55 mt-12 border p-4 text-sm leading-7">
          <div className="text-camo-300 mb-2 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
            <Info className="h-4 w-4" />
            Source policy
          </div>
          <div className="text-bunker-200">
            Official gameplay claims come from the{' '}
            <ExternalSource href={STEAM_URL}>Steam store page</ExternalSource>{' '}
            and{' '}
            <ExternalSource href={OFFICIAL_SITE_URL}>
              heatwarped.com
            </ExternalSource>
            . Demo race-mode names are labeled Current Demo verified using
            Speedrun.com categories and independent hands-on reviews. Last
            verified {VERIFIED_DATE}. See also the{' '}
            <Link
              href="/source-policy"
              className="text-ember-400 underline underline-offset-4"
            >
              source policy
            </Link>
            .
          </div>
        </aside>
      </article>
    </>
  );
}
