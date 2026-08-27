import { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, Info, X } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

const STEAM_URL = 'https://store.steampowered.com/app/4846360/Heatwarped/';
const OFFICIAL_SITE_URL = 'https://heatwarped.com/';
const R2_PUBLIC_ORIGIN = 'https://static.heatwarped.wiki';
const MUIRA_GARAGE_IMAGE = import.meta.env.PROD
  ? `${R2_PUBLIC_ORIGIN}/heatwarped/cars/muira-garage.jpg`
  : '/imgs/cars/muira-garage.jpg';
const carImg = (path: string) =>
  import.meta.env.PROD
    ? `${R2_PUBLIC_ORIGIN}/heatwarped/cars/${path}`
    : `/imgs/cars/${path}`;
const VERIFIED_DATE = 'August 27, 2026';
const MODIFIED_DATE = '2026-08-27';
const REVEAL_TRAILER_HLS =
  'https://video.akamai.steamstatic.com/store_trailers/4846360/581959178/fd4e98a483bceaa95cc9954169fb038f7f2951b1/1787246468/hls_264_master.m3u8';

const unidentifiedCars = [
  {
    id: 1,
    label: 'Boxy dark-blue coupe (traffic)',
    classLabel: 'Coupe · unplayable',
    source:
      'Community capture catalogued on IGCD as Heatwarped unknown (vehicle 416198). Boxy late-70s/80s coupe silhouette in open-world traffic.',
    href: 'https://www.igcd.net/vehicle.php?id=416198',
    image: 'unknown/01-boxy-coupe.jpg',
    alt: 'Unidentified dark blue boxy coupe traffic car in Heatwarped',
  },
  {
    id: 2,
    label: 'Red van / MPV (traffic)',
    classLabel: 'Van / MPV · unplayable',
    source:
      'Community capture catalogued on IGCD as Heatwarped unknown (vehicle 416199). Dark-red minivan/MPV used as street traffic.',
    href: 'https://www.igcd.net/vehicle.php?id=416199',
    image: 'unknown/02-red-mpv.jpg',
    alt: 'Unidentified red van MPV traffic car in Heatwarped',
  },
  {
    id: 3,
    label: 'Purple AI racer (race field)',
    classLabel: 'Sports coupe · opponent / AI',
    source:
      'Official Steam screenshot ss_87b106… — purple sports coupe ahead of the player Muira on a wet city corner with neon turn arrows.',
    href: STEAM_URL,
    image: 'unknown/03-purple-ai-racer.jpg',
    alt: 'Unidentified purple sports coupe AI racer in a Heatwarped Steam screenshot',
  },
  {
    id: 4,
    label: 'Dark cargo van (under overpass)',
    classLabel: 'Cargo van · traffic',
    source:
      'Heatwarped Reveal Trailer ≈ 0:52 — rear view of a tall boxy cargo van under a lit concrete overpass on wet asphalt.',
    href: REVEAL_TRAILER_HLS,
    image: 'unknown/04-overpass-van.jpg',
    alt: 'Unidentified dark cargo van under an overpass in the Heatwarped reveal trailer',
  },
  {
    id: 5,
    label: 'Grey armored / utility van',
    classLabel: 'Utility van · unplayable (listed unknown)',
    source:
      'IGCD lists this capture as an unknown Heatwarped vehicle (vehicle 416767 in search index). Grey boxy van with roof lamps — treat as unconfirmed community ID until re-verified in-demo.',
    href: 'https://www.igcd.net/vehicle.php?id=416767',
    image: 'unknown/05-armored-van.jpg',
    alt: 'Unidentified grey armored utility van associated with Heatwarped traffic',
  },
] as const;

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

function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-display text-sand-100 mt-12 mb-4 scroll-mt-28 text-2xl tracking-wider uppercase md:text-3xl"
    >
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-bunker-200 mt-4 text-base leading-8">{children}</p>;
}

const tocItems = [
  { href: '#playable', label: 'Playable car (demo)' },
  { href: '#traffic', label: 'Confirmed NPC / traffic cars' },
  { href: '#rumored', label: 'Rumored / unidentified cars' },
  { href: '#real-world', label: 'Real-world car comparison' },
  { href: '#setting', label: 'Why the car list matters' },
  { href: '#changelog', label: 'Changelog' },
  { href: '#faq', label: 'FAQ' },
] as const;

const faqItems = [
  {
    question: 'How many cars are in the Heatwarped demo?',
    answer:
      'Current community and hands-on reporting commonly describes one playable demo car (the Muira) plus a small set of unplayable traffic/NPC vehicles. Sealime has not published a full official car roster, so treat exact counts as working notes until confirmed in-game or by Sealime.',
  },
  {
    question: 'Is Heatwarped like Need for Speed Underground?',
    answer:
      'Community discussion often compares Heatwarped with the early-2000s NFS tuner era. Officially, Heatwarped is described as an open-world street racing game set in the 2000s. Fan comparisons are useful context, not developer product claims.',
  },
  {
    question: 'Does Heatwarped use real licensed cars?',
    answer:
      'No complete official licensed-brand roster has been verified for this page. Hero cars discussed so far are often described as fictional, inspired-by designs rather than licensed real-world models. Traffic vehicles may resemble familiar street cars without that confirming a full licensing program.',
  },
  {
    question: 'When does Heatwarped release?',
    answer:
      'The full Heatwarped release date remains TBA on the official Steam listing. This page does not assign a 2026 or 2027 launch window without a Sealime announcement.',
  },
] as const;

function UnidentifiedCarsGallery() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const active = unidentifiedCars.find((car) => car.id === activeId) ?? null;

  useEffect(() => {
    if (activeId == null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveId(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [activeId]);

  return (
    <>
      <div className="mt-6 space-y-6">
        {unidentifiedCars.map((car) => (
          <section
            key={car.id}
            className="border-camo-800 bg-bunker-900/45 grid gap-4 border p-4 md:grid-cols-[14rem_1fr] md:p-5"
          >
            <figure className="border-camo-800 bg-bunker-950 overflow-hidden border">
              <button
                type="button"
                className="group relative block w-full cursor-zoom-in text-left"
                onClick={() => setActiveId(car.id)}
                aria-label={`Enlarge ${car.label}`}
              >
                <img
                  src={carImg(car.image)}
                  alt={car.alt}
                  width={640}
                  height={360}
                  className="aspect-video h-auto w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-sand-100/90 pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-2 py-2 font-mono text-[10px] tracking-widest uppercase opacity-0 transition group-hover:opacity-100">
                  Click to enlarge
                </span>
              </button>
            </figure>
            <div>
              <div className="text-ember-400 font-mono text-[11px] tracking-widest uppercase">
                Unknown #{car.id} · {car.classLabel}
              </div>
              <h3 className="font-display text-sand-100 mt-2 text-xl tracking-wider uppercase">
                {car.label}
              </h3>
              <p className="text-bunker-300 mt-2 text-sm leading-7">
                {car.source}
              </p>
              <a
                className="text-ember-400 hover:text-ember-300 mt-3 inline-flex items-center gap-1 text-sm underline underline-offset-4"
                href={car.href}
                target="_blank"
                rel="noreferrer"
              >
                Open source <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActiveId(null)}
        >
          <button
            type="button"
            className="text-sand-100 hover:bg-bunker-800 border-camo-700 bg-bunker-950/80 absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center border"
            aria-label="Close enlarged image"
            onClick={() => setActiveId(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={carImg(active.image)}
            alt={active.alt}
            className="max-h-[90vh] max-w-[min(96vw,80rem)] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}

export function HeatwarpedCarsPage() {
  const itemListSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Heatwarped Car List',
    description: 'Confirmed and rumored cars in Heatwarped, updated regularly.',
    dateModified: MODIFIED_DATE,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Vehicle',
          name: 'Muira',
          description:
            'Demo playable car commonly described as a fictional vehicle inspired by the Nissan 240SX and Lexus SC.',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Vehicle',
          name: 'Ford F-150 (2004)',
          description:
            'Unplayable traffic/NPC vehicle reported in the current demo context.',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Vehicle',
          name: 'Ford Focus (2008)',
          description:
            'Unplayable traffic/NPC vehicle reported in the current demo context.',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Vehicle',
          name: 'Volkswagen Golf (2003)',
          description:
            'Unplayable traffic/NPC vehicle reported in the current demo context.',
        },
      },
    ],
  });

  const faqSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  });

  const webPageSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Heatwarped Car List',
    dateModified: MODIFIED_DATE,
    about: {
      '@type': 'VideoGame',
      name: 'Heatwarped',
      url: STEAM_URL,
    },
  });

  return (
    <>
      <script type="application/ld+json">{itemListSchema}</script>
      <script type="application/ld+json">{faqSchema}</script>
      <script type="application/ld+json">{webPageSchema}</script>

      <section className="border-camo-900 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="text-ember-500 mb-4 font-mono text-xs tracking-[0.35em] uppercase">
            Heatwarped car list · confirmed & rumored · updated {VERIFIED_DATE}
          </div>
          <h1 className="font-display text-sand-100 text-4xl leading-tight tracking-wider uppercase md:text-6xl">
            Heatwarped Car List
          </h1>
          <p className="text-bunker-200 mt-6 max-w-3xl text-lg leading-8">
            Every confirmed and rumored vehicle tracked for Heatwarped — the
            demo&apos;s playable car, NPC traffic cars, and unidentified trailer
            sightings. Full release remains{' '}
            <Link
              className="text-ember-400 underline underline-offset-4"
              href="/release-date"
            >
              TBA
            </Link>{' '}
            on Steam.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-4 py-12">
        <header className="border-ember-500/60 bg-ember-500/5 border p-6">
          <p className="text-camo-300 font-mono text-[11px] tracking-widest uppercase">
            Last updated:{' '}
            <time className="text-ember-400" dateTime={MODIFIED_DATE}>
              {VERIFIED_DATE}
            </time>
          </p>
          <h2 className="font-display text-sand-100 mt-3 text-2xl tracking-wider uppercase md:text-3xl">
            Heatwarped Car List — Every Confirmed &amp; Rumored Vehicle
          </h2>
          <p className="text-bunker-200 mt-4 text-base leading-8">
            <strong className="text-sand-100">Quick answer:</strong> Current
            reporting points to{' '}
            <strong className="text-sand-100">1 playable car</strong> in the
            Heatwarped demo — the &quot;Muira,&quot; a fictional ride often
            described as inspired by the Nissan 240SX and Lexus SC. Three NPC
            traffic cars are also commonly listed, and additional trailer
            vehicles remain unidentified. The full game release date is still{' '}
            <strong className="text-sand-100">TBA</strong> on PC (Steam).
          </p>
        </header>

        <nav
          aria-label="On this page"
          className="border-camo-800 bg-bunker-900/45 mt-8 border p-5"
        >
          <div className="text-camo-300 mb-3 font-mono text-[11px] tracking-widest uppercase">
            On this page
          </div>
          <ul className="text-bunker-200 grid gap-2 text-sm leading-7 sm:grid-cols-2">
            {tocItems.map((item) => (
              <li key={item.href}>
                <a
                  className="text-ember-400 hover:text-ember-300 underline underline-offset-4"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <H2 id="playable">Playable Car in the Demo (Confirmed)</H2>
        <div className="border-camo-800 mt-5 overflow-x-auto border">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-bunker-900/75">
              <tr>
                <th className="text-camo-300 px-4 py-3 font-mono text-[11px] tracking-widest uppercase">
                  Car
                </th>
                <th className="text-ember-400 px-4 py-3 font-mono text-[11px] tracking-widest uppercase">
                  Status
                </th>
                <th className="text-camo-300 px-4 py-3 font-mono text-[11px] tracking-widest uppercase">
                  Inspiration
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-camo-800 border-t">
                <td className="text-sand-100 px-4 py-3 font-medium">Muira</td>
                <td className="text-bunker-100 px-4 py-3">Playable (demo)</td>
                <td className="text-bunker-200 px-4 py-3">
                  Nissan 240SX × Lexus SC — fictional homage (not treated as a
                  licensed brand claim)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <figure className="border-camo-800 mt-6 overflow-hidden border">
          <img
            src={MUIRA_GARAGE_IMAGE}
            alt="Heatwarped Muira in the demo Body Kit garage — red customized street car"
            width={1920}
            height={1080}
            className="h-auto w-full"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="text-camo-300 border-camo-800 border-t px-4 py-3 font-mono text-[11px] tracking-widest uppercase">
            Official Steam screenshot · Muira in the demo garage (Body Kit)
          </figcaption>
        </figure>
        <Paragraph>
          Hands-on coverage often describes the demo as shipping with a single
          playable vehicle. Some databases list a &quot;Nissan 240SX —
          Miura&quot;-style label, while other write-ups call it a{' '}
          <strong className="text-sand-100">
            fictional car that looks like a cross between a Nissan 240SX and a
            Lexus SC
          </strong>
          . That framing suggests Heatwarped leans on <em>inspired-by</em>{' '}
          fictional hero cars rather than a confirmed licensed real-world roster
          — with the &quot;Muira&quot; name also echoing the iconic Lamborghini
          Miura.
        </Paragraph>
        <Paragraph>
          First-hand handling notes from this wiki&apos;s own demo play sessions
          will be added here once captured. Until then, treat real-world
          lookalike labels as reference context, not Sealime canon.
        </Paragraph>

        <H2 id="traffic">Confirmed NPC / Traffic Cars (Unplayable)</H2>
        <ul className="text-bunker-200 mt-4 list-disc space-y-2 pl-6 text-base leading-8">
          <li>Ford F-150 (2004)</li>
          <li>Ford Focus (2008)</li>
          <li>Volkswagen Golf (2003)</li>
        </ul>
        <Paragraph>
          These three appear in traffic/NPC contexts in current demo reporting
          and are not described as player-drivable in that build. They help
          populate the streets of{' '}
          <strong className="text-sand-100">Ratfield</strong>. Names and model
          years should be re-checked against in-game labels when available.
        </Paragraph>

        <H2 id="rumored">Rumored / Unidentified Cars</H2>
        <Paragraph>
          At least <strong className="text-sand-100">5 more vehicles</strong>{' '}
          appear in Steam screenshots, the Reveal Trailer, and community vehicle
          databases but are not yet named in official Sealime materials. These
          entries cite the best available source frame — they are{' '}
          <strong className="text-sand-100">not</strong> treated as a finished
          roster.
        </Paragraph>
        <UnidentifiedCarsGallery />
        <Paragraph>
          Tip: if you spot a clearer in-game nameplate or garage label for any
          of the above, send a demo capture — we will promote it out of this
          unidentified list.
        </Paragraph>

        <H2 id="real-world">Heatwarped Cars vs. Real-Life Inspiration</H2>
        <div className="border-camo-800 mt-5 overflow-x-auto border">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="bg-bunker-900/75">
              <tr>
                <th className="text-camo-300 px-4 py-3 font-mono text-[11px] tracking-widest uppercase">
                  In-game car
                </th>
                <th className="text-ember-400 px-4 py-3 font-mono text-[11px] tracking-widest uppercase">
                  Real-world inspiration
                </th>
                <th className="text-camo-300 px-4 py-3 font-mono text-[11px] tracking-widest uppercase">
                  Licensed?
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Muira',
                  'Nissan 240SX / Lexus SC',
                  'No — fictional (reference only)',
                ],
                [
                  'Ford F-150 (2004)',
                  'Ford F-150',
                  'Traffic only (unconfirmed license claim)',
                ],
                [
                  'Ford Focus (2008)',
                  'Ford Focus',
                  'Traffic only (unconfirmed license claim)',
                ],
                [
                  'Volkswagen Golf (2003)',
                  'Volkswagen Golf',
                  'Traffic only (unconfirmed license claim)',
                ],
              ].map(([car, inspiration, licensed]) => (
                <tr key={car} className="border-camo-800 border-t">
                  <td className="text-sand-100 px-4 py-3 font-medium">{car}</td>
                  <td className="text-bunker-100 px-4 py-3">{inspiration}</td>
                  <td className="text-bunker-200 px-4 py-3">{licensed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Paragraph>
          Takeaway for readers: Heatwarped channels a late-90s / early-2000s
          tuner aesthetic often compared with Need for Speed Underground, while
          hero cars discussed so far are framed as fictional homages. That is
          different from racing games that publish a licensed real-world model
          list. Inspiration columns above are community/reference labels unless
          Sealime confirms them.
        </Paragraph>

        <H2 id="setting">Why the Car List Matters: The Setting</H2>
        <Paragraph>
          Heatwarped is set in{' '}
          <strong className="text-sand-100">Ratfield</strong>, described on the
          official site as a large open world that stretches from a sparkling
          city to wide outskirts. Players customize cars and chase street-racing
          fantasy in a 2000s setting. A free demo is available now on Steam; the
          full release date remains TBA. For install steps, see the{' '}
          <Link
            className="text-ember-400 underline underline-offset-4"
            href="/demo"
          >
            Heatwarped demo guide
          </Link>
          .
        </Paragraph>

        <H2 id="changelog">Changelog</H2>
        <div className="border-camo-800 mt-5 border">
          <div className="grid gap-3 p-5 sm:grid-cols-[10rem_1fr]">
            <time
              className="text-ember-400 font-mono text-xs tracking-widest uppercase"
              dateTime={MODIFIED_DATE}
            >
              Aug 27, 2026
            </time>
            <div className="text-bunker-200 text-sm leading-7">
              Initial list: 1 playable (Muira) + 3 NPC traffic lookalikes + 5
              unidentified sightings sourced from IGCD captures, Steam
              screenshot ss_87b106…, and Reveal Trailer ≈0:52. Muira garage shot
              hosted on R2. Real-world inspiration labeled as reference; full
              release kept as TBA.
            </div>
          </div>
        </div>

        <H2 id="faq">FAQ</H2>
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

        <div className="mt-10 flex flex-wrap gap-3">
          <Link className="btn-tactical" href="/demo">
            Heatwarped demo guide <ArrowRight className="h-4 w-4" />
          </Link>
          <Link className="btn-ghost" href="/gameplay">
            Gameplay overview <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <aside className="border-camo-800 bg-bunker-900/55 mt-8 border p-4 text-sm leading-7">
          <div className="text-camo-300 mb-2 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
            <Info className="h-4 w-4" />
            Source policy
          </div>
          <div className="text-bunker-200">
            Vehicle names and inspiration notes on this page mix demo/trailer
            observation with community and media reference. They are not treated
            as a Sealime-published roster. Official product status still comes
            from the{' '}
            <ExternalSource href={STEAM_URL}>Steam listing</ExternalSource> and{' '}
            <ExternalSource href={OFFICIAL_SITE_URL}>
              heatwarped.com
            </ExternalSource>
            . See also the{' '}
            <Link
              className="text-ember-400 underline underline-offset-4"
              href="/source-policy"
            >
              source policy
            </Link>
            . Last updated {VERIFIED_DATE}.
          </div>
        </aside>
      </article>
    </>
  );
}
