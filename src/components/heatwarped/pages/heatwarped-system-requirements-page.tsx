import { ArrowRight, ExternalLink, Info } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

const STEAM_URL = 'https://store.steampowered.com/app/4846360/Heatwarped/';
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

const requirementRows = [
  ['OS', 'Windows 10 64-bit', 'Windows 11 64-bit'],
  [
    'CPU',
    'AMD FX 8320 / Intel Core i5-3570K',
    'AMD Ryzen 5 5500 / Intel Core i5-12400F',
  ],
  ['RAM', '4 GB', '8 GB'],
  [
    'GPU',
    'Nvidia GeForce GTX 960 / AMD Radeon HD 7970',
    'Nvidia GeForce GTX 1070 / AMD RX 5600 XT',
  ],
  ['DirectX', 'Version 11', 'Version 11'],
  ['Storage', '1 GB available space', '1 GB available space'],
  ['Target', '1080p / 30 FPS, Authentic', '1080p / 60 FPS, Enhanced'],
] as const;

const faqItems = [
  {
    question: 'What are the Heatwarped system requirements?',
    answer:
      'The official Heatwarped Steam listing publishes both minimum and recommended Windows PC specs, including OS, CPU, RAM, GPU, DirectX 11, 1 GB storage, and Authentic vs Enhanced performance targets.',
  },
  {
    question:
      'What is the difference between Authentic and Enhanced in Heatwarped?',
    answer:
      'Steam ties Authentic to the minimum target of 1080p at 30 FPS, and Enhanced to the recommended target of 1080p at 60 FPS. Both tiers note that Heatwarped is heavily processor-dependent.',
  },
  {
    question: 'How much storage does Heatwarped need?',
    answer:
      'Steam currently lists 1 GB available space for both the minimum and recommended Heatwarped requirements.',
  },
  {
    question: 'Can my PC run Heatwarped?',
    answer:
      'Compare your Windows PC against the Steam minimum and recommended table on this page. Meeting the minimum means your hardware matches the published baseline; it does not guarantee a specific frame rate. The free demo is the practical way to test your machine.',
  },
  {
    question: 'Where should I check Heatwarped requirements if they change?',
    answer:
      'Use the official Heatwarped Steam store page as the source of truth. Requirements can change while Heatwarped is still in development.',
  },
] as const;

export function HeatwarpedSystemRequirementsPage() {
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Heatwarped',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Windows 10 64-bit, Windows 11 64-bit',
    processorRequirements:
      'Minimum: AMD FX 8320 / Intel Core i5-3570K; Recommended: AMD Ryzen 5 5500 / Intel Core i5-12400F',
    memoryRequirements: 'Minimum: 4 GB RAM; Recommended: 8 GB RAM',
    storageRequirements: '1 GB available space',
    description:
      'Heatwarped PC system requirements from the official Steam listing, including Authentic and Enhanced performance targets.',
    url: STEAM_URL,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free Heatwarped demo available on Steam',
    },
  };

  const videoGameSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Heatwarped',
    url: STEAM_URL,
    gamePlatform: 'Windows PC',
    operatingSystem: 'Windows 10 64-bit, Windows 11 64-bit',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Minimum graphics target',
        value: '1080p / 30 FPS, Authentic',
      },
      {
        '@type': 'PropertyValue',
        name: 'Recommended graphics target',
        value: '1080p / 60 FPS, Enhanced',
      },
      {
        '@type': 'PropertyValue',
        name: 'Additional notes',
        value: 'Heavily processor-dependent',
      },
    ],
  };

  const faqSchema = {
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
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Heatwarped System Requirements',
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="border-camo-900 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="text-ember-500 mb-4 font-mono text-xs tracking-[0.35em] uppercase">
            Heatwarped PC specs · Steam source · verified {VERIFIED_DATE}
          </div>
          <h1 className="font-display text-sand-100 text-4xl leading-tight tracking-wider uppercase md:text-6xl">
            Heatwarped System Requirements
          </h1>
          <p className="text-bunker-200 mt-6 max-w-3xl text-lg leading-8">
            Heatwarped system requirements on Steam list both minimum and
            recommended Windows PC specs: from Windows 10 and an FX 8320 /
            i5-3570K floor up to Windows 11 with a Ryzen 5 5500 / i5-12400F
            recommended tier, plus Authentic and Enhanced performance targets.
          </p>
          <div className="text-camo-400 mt-6 font-mono text-[11px] tracking-widest uppercase">
            Last verified: {VERIFIED_DATE}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-4 py-12">
        <H2>Minimum vs Recommended</H2>
        <Paragraph>
          The{' '}
          <ExternalSource href={STEAM_URL}>
            official Heatwarped Steam store page
          </ExternalSource>{' '}
          publishes a full minimum and recommended PC table for the current
          Windows build. Specs can change while Heatwarped is still in
          development, so Steam remains the source of truth.
        </Paragraph>
        <div className="border-camo-800 mt-5 overflow-x-auto border">
          <table className="w-full min-w-[44rem] text-left text-sm">
            <thead className="bg-bunker-900/75">
              <tr>
                <th className="text-camo-300 px-4 py-3 font-mono text-[11px] tracking-widest uppercase">
                  Component
                </th>
                <th className="text-ember-400 px-4 py-3 font-mono text-[11px] tracking-widest uppercase">
                  Minimum
                </th>
                <th className="text-camo-300 px-4 py-3 font-mono text-[11px] tracking-widest uppercase">
                  Recommended
                </th>
              </tr>
            </thead>
            <tbody>
              {requirementRows.map(([label, minimum, recommended]) => (
                <tr key={label} className="border-camo-800 border-t">
                  <th className="text-camo-300 bg-bunker-900/40 px-4 py-3 font-mono text-[10px] tracking-widest uppercase">
                    {label}
                  </th>
                  <td className="text-bunker-100 px-4 py-3">{minimum}</td>
                  <td className="text-bunker-200 px-4 py-3">{recommended}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Paragraph>
          This table is specifically about Heatwarped by Sealime. It is not a
          requirements guide for Need for Speed Heat, the board game Heat, World
          of Tanks HEAT, or Gunner, HEAT, PC.
        </Paragraph>

        <H2>Authentic vs Enhanced</H2>
        <Paragraph>
          Steam pairs each Heatwarped requirements tier with a graphics-mode
          performance target. The minimum column targets 1080p at 30 FPS in
          Authentic mode. The recommended column targets 1080p at 60 FPS in
          Enhanced mode. Those figures are the developer-published targets on
          the store listing, not independently measured benchmarks from this
          wiki.
        </Paragraph>
        <Paragraph>
          For a shorter look at the same official targets—and what this site
          does not invent about frame rates—see the{' '}
          <Link
            className="text-ember-400 underline underline-offset-4"
            href="/performance"
          >
            Heatwarped performance page
          </Link>
          .
        </Paragraph>

        <H2>CPU dependency</H2>
        <Paragraph>
          Steam’s Heatwarped system requirements note that the game is{' '}
          <strong className="text-sand-100">heavily processor-dependent</strong>
          . That note applies to both the minimum Authentic and recommended
          Enhanced targets. CPU model names in the table are official reference
          points; laptop power limits, thermal throttling, and background
          software can still change real-world results even when the chip name
          looks comparable on paper.
        </Paragraph>

        <H2>Can I run Heatwarped?</H2>
        <Paragraph>
          Start with the Steam baseline: a 64-bit Windows 10 (or newer)
          installation for the minimum tier, a processor at least comparable to
          the AMD FX 8320 or Intel Core i5-3570K, at least 4 GB of RAM, a GPU in
          the GTX 960 / Radeon HD 7970 class or better, DirectX 11 support, and
          1 GB of free storage. The recommended tier raises the OS target to
          Windows 11, moves the CPU references to Ryzen 5 5500 / i5-12400F,
          doubles RAM to 8 GB, and steps the GPU up to a GTX 1070 / RX 5600 XT
          class card.
        </Paragraph>
        <Paragraph>
          Matching a published Heatwarped tier means your hardware lines up with
          Steam’s stated baseline for that column. It does not guarantee a
          particular preset, resolution, or frame rate on your machine. This
          page does not invent FPS scores or unofficial GPU equivalence charts.
        </Paragraph>

        <H2>Try the Demo</H2>
        <Paragraph>
          The most practical way to check Heatwarped on your PC is the free
          demo. Install it through Steam, then compare how Authentic and
          Enhanced feel against the official targets above.
        </Paragraph>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn-tactical" href="/demo">
            Heatwarped demo guide <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            className="btn-ghost"
            href={STEAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Check Heatwarped on Steam <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <H2>FAQ</H2>
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

        <H2>Sources</H2>
        <Paragraph>
          All Heatwarped minimum and recommended PC specifications on this page
          come from the{' '}
          <ExternalSource href={STEAM_URL}>
            official Heatwarped Steam store page
          </ExternalSource>
          , including Authentic / Enhanced targets, 1 GB storage, and the
          heavily processor-dependent note. Last verified {VERIFIED_DATE}.
        </Paragraph>

        <aside className="border-camo-800 bg-bunker-900/55 mt-8 border p-4 text-sm leading-7">
          <div className="text-camo-300 mb-2 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
            <Info className="h-4 w-4" />
            Source policy
          </div>
          <div className="text-bunker-200">
            Published Heatwarped PC requirements are checked against the{' '}
            <ExternalSource href={STEAM_URL}>
              official Heatwarped Steam listing
            </ExternalSource>
            . This page does not fill gaps with unofficial recommended specs or
            invented benchmarks. See also the{' '}
            <Link
              className="text-ember-400 underline underline-offset-4"
              href="/source-policy"
            >
              source policy
            </Link>
            . Last verified {VERIFIED_DATE}.
          </div>
        </aside>
      </article>
    </>
  );
}
