import { ArrowRight, Check, Download, ExternalLink, Info } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import {
  HEATWARPED_HERO_POSTER,
  HEATWARPED_HERO_VIDEO,
  HeroBackgroundVideo,
} from '@/components/heatwarped/hero-background-video';
import { OfficialHeatwarpedMedia } from '@/components/heatwarped/official-heatwarped-media';

const STEAM_URL = 'https://store.steampowered.com/app/4846360/Heatwarped/';
const OFFICIAL_SITE_URL = 'https://heatwarped.com/';
const X_URL = 'https://x.com/Heatwarped';
const VERIFIED_DATE = 'August 27, 2026';

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

function InternalCard({
  href,
  title,
  copy,
}: {
  href: string;
  title: string;
  copy: string;
}) {
  return (
    <Link
      href={href}
      className="border-camo-800 bg-bunker-900/55 hover:border-ember-500/70 group border p-5 transition-colors"
    >
      <div className="font-display text-sand-100 group-hover:text-ember-400 text-lg tracking-wider uppercase">
        {title}
      </div>
      <p className="text-bunker-300 mt-2 text-sm leading-6">{copy}</p>
      <div className="text-camo-300 group-hover:text-ember-400 mt-4 flex items-center gap-1 font-mono text-[11px] tracking-widest uppercase">
        Open guide <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}

const guideCards = [
  {
    href: '/release-date',
    title: 'Release Date',
    copy: 'Official TBA status, Demo availability, and the verified Steam/SteamDB timeline.',
  },
  {
    href: '/demo',
    title: 'Demo',
    copy: 'How to download the free Steam demo and what the current Demo includes.',
  },
  {
    href: '/gameplay',
    title: 'Gameplay',
    copy: 'Ratfield, race modes, PDA forum, respect, customization, and online status.',
  },
  {
    href: '/race-modes',
    title: 'Race Modes',
    copy: 'Official many-modes framing plus Demo-verified Circuit, Sprint, Time Trial, and Drift.',
  },
  {
    href: '/map',
    title: 'Map',
    copy: 'Ratfield city and outskirts facts, Demo observations, and unknowns.',
  },
  {
    href: '/customization',
    title: 'Customization',
    copy: 'Deep customization, rare parts, and Demo-observed visual upgrades.',
  },
  {
    href: '/multiplayer',
    title: 'Multiplayer',
    copy: 'Official-site online challenges versus Steam Single-player listing.',
  },
  {
    href: '/performance',
    title: 'Performance',
    copy: 'Official 1080p targets, Authentic vs Enhanced, and CPU-dependent notes.',
  },
  {
    href: '/system-requirements',
    title: 'System Requirements',
    copy: 'Full Steam minimum and recommended PC specs, including 1 GB storage.',
  },
  {
    href: '/cars',
    title: 'Cars',
    copy: 'Confirmed and observed vehicles with source labels — not a sealed official roster.',
  },
] as const;

export function HeatwarpedHomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Heatwarped Wiki',
    url: envConfigs.app_url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <section className="border-camo-900 bg-camo-900 relative -mt-[4.5rem] flex min-h-dvh flex-col overflow-hidden border-b pt-[4.5rem]">
        <HeroBackgroundVideo
          videoSrc={HEATWARPED_HERO_VIDEO}
          posterSrc={HEATWARPED_HERO_POSTER}
        />
        <div className="from-camo-900/75 via-camo-900/35 to-camo-900/10 pointer-events-none absolute inset-0 bg-gradient-to-r" />
        <div className="from-camo-900/50 to-camo-900/25 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-16 md:py-20">
          <div className="grid w-full gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="text-ember-500 mb-5 max-w-full font-mono text-[11px] tracking-[0.2em] uppercase sm:text-xs sm:tracking-[0.35em]">
                Heatwarped · Open-world street racing · Demo available
              </div>
              <h1 className="font-display text-sand-100 text-5xl leading-none tracking-wider uppercase sm:text-6xl md:text-8xl">
                Heatwarped
              </h1>
              <p className="text-bunker-200 mt-6 max-w-2xl text-lg leading-8">
                Heatwarped is an open-world arcade street racing game set in the
                2000s. Wishlist on Steam, download the free Demo, and use these
                guides for verified release, PC, gameplay, and Demo facts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="btn-tactical"
                  href={STEAM_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Wishlist Heatwarped on Steam{' '}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link className="btn-ghost" href="/demo">
                  <Download className="h-4 w-4" /> Download Heatwarped Demo
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="hud-frame clip-corner bg-bunker-950/60 p-5">
                <div className="text-camo-300 mb-4 font-mono text-[10px] tracking-[0.3em] uppercase">
                  Heatwarped · verified {VERIFIED_DATE}
                </div>
                <dl className="space-y-3 text-sm">
                  {[
                    ['Developer', 'Sealime'],
                    ['Publisher', 'Sealime'],
                    ['Platform', 'Windows PC · Steam'],
                    ['Release date', 'TBA'],
                    ['Demo', 'Available now'],
                    ['Genre', 'Racing · Arcade'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="border-camo-800/60 bg-bunker-900/70 flex items-center justify-between gap-4 border p-3"
                    >
                      <dt className="text-camo-400 font-mono text-[11px] tracking-widest uppercase">
                        {label}
                      </dt>
                      <dd className="text-sand-100 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OfficialHeatwarpedMedia variant="gameplay" />

      <article className="mx-auto max-w-5xl px-4 py-12">
        <H2>Core Heatwarped guides</H2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guideCards.map((card) => (
            <InternalCard key={card.href} {...card} />
          ))}
        </div>

        <H2>What is Heatwarped?</H2>
        <Paragraph>
          Heatwarped is an open-world arcade street racing game set in the
          2000s. Official sources place the underground scene in Ratfield, sell
          deep customization and rare car parts, and highlight a soundtrack-led
          night atmosphere. Sealime is both developer and publisher on Steam,
          where the full release date remains TBA and a free Demo is available.
        </Paragraph>

        <H2>Heatwarped status at a glance</H2>
        <div className="border-camo-800 mt-5 overflow-x-auto border">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <tbody>
              {[
                ['Developer / Publisher', 'Sealime'],
                ['Release date', 'TBA / To be announced'],
                ['Demo', 'Free on Steam'],
                ['PC OS', 'Windows 10 64-bit minimum / Windows 11 recommended'],
                ['Storage', '1 GB available space (Steam)'],
                [
                  'Online',
                  'Official site advertises online challenges; Steam still lists Single-player',
                ],
              ].map(([label, value]) => (
                <tr
                  key={label}
                  className="border-camo-800 border-b last:border-b-0"
                >
                  <th className="text-camo-300 bg-bunker-900/70 w-2/5 px-4 py-3 font-mono text-[11px] tracking-widest uppercase">
                    {label}
                  </th>
                  <td className="text-bunker-100 px-4 py-3">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>Key features</H2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            [
              'Open World of Ratfield',
              'Official city and outskirts framing with underground racing and secrets.',
            ],
            [
              'Many race modes',
              'Official many-modes claim, plus Demo-verified Circuit, Sprint, Time Trial, and Drift.',
            ],
            [
              'Deep customization',
              'Official deep tuning and rare car parts; Demo shows body kits, vinyls, and underglow.',
            ],
            [
              'PDA racing forum',
              'Official Steam pillar for meeting racers, competing, and building respect.',
            ],
            [
              'Online challenges',
              'Advertised on heatwarped.com while Steam still shows Single-player.',
            ],
            [
              'Soundtrack atmosphere',
              'Official sell for race and night driving — no published track list yet.',
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="border-camo-800 bg-bunker-900/45 border p-5"
            >
              <div className="text-ember-400 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
                <Check className="h-4 w-4" /> Highlight
              </div>
              <h3 className="font-display text-sand-100 mt-3 text-xl tracking-wider uppercase">
                {title}
              </h3>
              <p className="text-bunker-300 mt-2 text-sm leading-7">{text}</p>
            </div>
          ))}
        </div>

        <H2>Start with the Heatwarped demo</H2>
        <Paragraph>
          Compare your PC with the published Steam minimum and recommended
          requirements (including 1 GB storage), then install the Demo through
          Steam. Full PC details live on the{' '}
          <Link
            href="/system-requirements"
            className="text-ember-400 underline underline-offset-4"
          >
            system requirements
          </Link>{' '}
          guide.
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
            Primary sources:{' '}
            <ExternalSource href={STEAM_URL}>Steam</ExternalSource>,{' '}
            <ExternalSource href={OFFICIAL_SITE_URL}>
              heatwarped.com
            </ExternalSource>
            , and <ExternalSource href={X_URL}>@Heatwarped</ExternalSource>.
            Demo specifics are labeled Current Demo verified or hands-on when
            they are not on Steam. Last verified {VERIFIED_DATE}.{' '}
            <Link
              href="/source-policy"
              className="text-ember-400 underline underline-offset-4"
            >
              Source policy
            </Link>
            .
          </div>
        </aside>
      </article>
    </>
  );
}
