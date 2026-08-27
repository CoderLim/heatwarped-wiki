import { ArrowRight, Download, ExternalLink, Info } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { OfficialHeatwarpedMedia } from '@/components/heatwarped/official-heatwarped-media';

const STEAM_URL = 'https://store.steampowered.com/app/4846360/Heatwarped/';
const OFFICIAL_SITE_URL = 'https://heatwarped.com/';
const DEMO_VERIFIED_DATE = 'August 27, 2026';
const DEMO_MODIFIED_DATE = '2026-08-27';

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

const faqItems = [
  {
    question: 'Is the Heatwarped demo free?',
    answer:
      'Yes. The official Heatwarped Steam page currently offers a free demo. The official Heatwarped website also links visitors to download the demo.',
  },
  {
    question: 'Where can I download the Heatwarped demo?',
    answer:
      'Use the official Heatwarped Steam store page. This wiki does not mirror installers, repacks, torrents, APKs, or unofficial download packages.',
  },
  {
    question: 'Does Heatwarped demo progress carry over to the full game?',
    answer:
      'No official source checked for this page currently confirms save or progression transfer from the Heatwarped demo to the full game. Treat carry-over as unconfirmed unless Sealime announces it.',
  },
  {
    question: 'What platform is the Heatwarped demo confirmed for?',
    answer:
      'The current official Steam listing confirms a Windows PC version and publishes Windows system requirements. This page does not claim a macOS or console demo without an official Sealime announcement.',
  },
  {
    question:
      'What should I do if the Heatwarped demo will not install or launch?',
    answer:
      'Start with the Steam client and the official Heatwarped PC requirements. Confirm Steam is signed in, the download completes, and your PC meets the published requirements. No Heatwarped-specific official troubleshooting guide was found in the primary sources checked for this page.',
  },
] as const;

export function HeatwarpedDemoPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Download the Heatwarped Demo',
    step: [
      {
        '@type': 'HowToStep',
        text: 'Open the official Heatwarped Steam store page.',
      },
      { '@type': 'HowToStep', text: 'Sign in to Steam if prompted.' },
      {
        '@type': 'HowToStep',
        text: 'Use the demo download or install control on the Heatwarped store page.',
      },
      {
        '@type': 'HowToStep',
        text: 'Let Steam install the Heatwarped demo through the Steam client.',
      },
      {
        '@type': 'HowToStep',
        text: 'Launch the Heatwarped demo from your Steam Library.',
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
    name: 'Heatwarped Demo',
    dateModified: DEMO_MODIFIED_DATE,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            Heatwarped demo · official download guide · verified{' '}
            {DEMO_VERIFIED_DATE}
          </div>
          <h1 className="font-display text-sand-100 text-4xl leading-tight tracking-wider uppercase md:text-6xl">
            Heatwarped Demo
          </h1>
          <p className="text-bunker-200 mt-6 max-w-3xl text-lg leading-8">
            The Heatwarped demo is available free on Steam. This page explains
            the official download route, current PC requirements, what is
            confirmed about the public demo, and what remains unannounced.
          </p>
        </div>
      </section>

      <OfficialHeatwarpedMedia variant="demo" />

      <article className="mx-auto max-w-5xl px-4 py-12">
        <div className="border-ember-500/60 bg-ember-500/5 flex flex-col gap-4 border p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-ember-400 font-mono text-xs tracking-widest uppercase">
              Official Heatwarped demo
            </div>
            <div className="text-sand-100 mt-2 text-lg font-medium">
              Free demo available through Steam
            </div>
          </div>
          <a
            className="btn-tactical"
            href={STEAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Download Heatwarped Demo <Download className="h-4 w-4" />
          </a>
        </div>

        <H2>How to download the Heatwarped demo</H2>
        <ol className="text-bunker-200 mt-4 list-decimal space-y-3 pl-6 text-base leading-8">
          <li>
            Open the{' '}
            <ExternalSource href={STEAM_URL}>
              official Heatwarped Steam page
            </ExternalSource>
            .
          </li>
          <li>
            Sign in to Steam if the store or client asks you to authenticate.
          </li>
          <li>
            Use the demo download or install control shown on the Heatwarped
            store page.
          </li>
          <li>
            Let Steam install the Heatwarped demo through the normal Steam
            client workflow.
          </li>
          <li>
            Launch the Heatwarped demo from your Steam Library after
            installation completes.
          </li>
        </ol>
        <Paragraph>
          Heatwarped also has an{' '}
          <ExternalSource href={OFFICIAL_SITE_URL}>
            official website
          </ExternalSource>{' '}
          that currently promotes the demo. For the Steam version, use Valve's
          store and client rather than a third-party mirror. This wiki does not
          host a Heatwarped installer, APK, repack, torrent, or unofficial
          download package.
        </Paragraph>

        <H2>What is included in the current Heatwarped demo?</H2>
        <Paragraph>
          Official sources confirm that a free Heatwarped demo exists on Steam.
          The list below separates that Official fact from Current Demo verified
          race modes and hands-on observations. None of these Demo details
          should be read as a sealed final-game content list.
        </Paragraph>
        <ul className="text-bunker-200 mt-4 list-disc space-y-3 pl-6 text-base leading-8">
          <li>
            Single-player events in a Demo-sized open-world city chunk (hands-on
            observation).
          </li>
          <li>
            Current Demo verified race modes: City Circuit, City Sprint, City
            Time Trial, and City Track Drift — see the{' '}
            <Link
              className="text-ember-400 underline underline-offset-4"
              href="/race-modes"
            >
              race modes guide
            </Link>
            .
          </li>
          <li>
            Nitrous / NOS availability during Demo races (Current Demo
            verified).
          </li>
          <li>
            One currently observed playable fictional car — not an official
            licensed roster entry.
          </li>
          <li>
            Customization preview (body kits, vinyls, underglow, and performance
            upgrades observed in hands-on coverage) — see{' '}
            <Link
              className="text-ember-400 underline underline-offset-4"
              href="/customization"
            >
              customization
            </Link>
            .
          </li>
          <li>
            Map / neighborhood observations such as Ashtray — see the{' '}
            <Link
              className="text-ember-400 underline underline-offset-4"
              href="/map"
            >
              map guide
            </Link>
            .
          </li>
        </ul>
        <Paragraph>
          One hands-on reviewer reported roughly an hour of race content in the
          current demo; actual playtime will vary. Demo progress carry-over to
          the full game remains unconfirmed.
        </Paragraph>
        <figure className="border-camo-800 bg-bunker-900/45 mt-6 overflow-hidden border">
          <img
            src="/imgs/guides/demo-open-world.webp"
            alt="Heatwarped Demo open-world city skyline with a car on wet streets"
            width={1280}
            height={720}
            className="h-auto w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="text-bunker-400 border-camo-800 border-t px-4 py-3 text-sm leading-6">
            Official Steam screenshot — Demo open-world city visual context.
          </figcaption>
        </figure>

        <H2>Heatwarped demo PC requirements</H2>
        <Paragraph>
          The current official Heatwarped Steam page publishes both minimum and
          recommended Windows PC specifications. These requirements can change
          while Heatwarped is still in development, so the Steam listing remains
          the source of truth.
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
              {[
                ['OS', 'Windows 10 (64-bit)', 'Windows 11 (64-bit)'],
                [
                  'Processor',
                  'AMD FX 8320 / Intel Core i5-3570K',
                  'AMD Ryzen 5 5500 / Intel Core i5-12400F',
                ],
                ['Memory', '4 GB RAM', '8 GB RAM'],
                [
                  'Graphics',
                  'Nvidia GeForce GTX 960 / AMD Radeon HD 7970',
                  'Nvidia GeForce GTX 1070 / AMD RX 5600 XT',
                ],
                ['DirectX', 'Version 11', 'Version 11'],
                ['Storage', '1 GB available space', '1 GB available space'],
              ].map(([label, minimum, recommended]) => (
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
        <div className="mt-6">
          <Link className="btn-ghost" href="/system-requirements">
            Full Heatwarped system requirements{' '}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <H2>What is officially confirmed about the Heatwarped demo?</H2>
        <Paragraph>
          The official Steam page confirms that a Heatwarped demo is publicly
          available, while the official Heatwarped website prominently directs
          visitors to download the demo. Heatwarped itself is officially
          described on Steam as an open-world arcade street racing game set in
          the 2000s, with adrenaline driving, deep customization, rich
          environments, and a soundtrack built around racing and night driving.
        </Paragraph>
        <Paragraph>
          Official sources still do not publish a complete written inventory of
          every Demo race, unlock, or save-transfer rule. Specific Demo race
          modes and related systems are labeled Current Demo verified or
          hands-on on this page — not as Sealime&apos;s final content list. For
          the broader game concept, see the{' '}
          <Link
            className="text-ember-400 underline underline-offset-4"
            href="/gameplay"
          >
            Heatwarped gameplay guide
          </Link>
          .
        </Paragraph>

        <H2>Heatwarped demo troubleshooting</H2>
        <Paragraph>
          If the Heatwarped demo does not install or launch, first stay within
          the Steam workflow: confirm that Steam is signed in, the demo download
          finishes, and the PC meets the published Heatwarped requirements
          above. If performance is poor, compare your hardware against the
          minimum and recommended specifications before applying community
          launch flags or unofficial tweaks. No dedicated Heatwarped
          troubleshooting document was found in the primary sources checked for
          this update.
        </Paragraph>

        <H2>Heatwarped demo FAQ</H2>
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

        <H2>Heatwarped demo updates</H2>
        <div className="border-camo-800 mt-5 border">
          <div className="grid gap-3 p-5 sm:grid-cols-[10rem_1fr]">
            <time
              className="text-ember-400 font-mono text-xs tracking-widest uppercase"
              dateTime="2026-08-27"
            >
              Aug 27, 2026
            </time>
            <div className="text-bunker-200 text-sm leading-7">
              Re-verified that the official Steam page and Heatwarped website
              still promote the free demo. Updated the FAQ markup, visible FAQ,
              PC requirements, source notes, and page modification date.
            </div>
          </div>
        </div>

        <div className="border-camo-800 bg-bunker-900/55 mt-8 border p-4 text-sm leading-7">
          <div className="text-camo-300 mb-2 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
            <Info className="h-4 w-4" /> Source policy
          </div>
          <div className="text-bunker-200">
            Demo availability and PC specifications are checked against the{' '}
            <ExternalSource href={STEAM_URL}>
              official Heatwarped Steam listing
            </ExternalSource>
            . Demo promotion and game-level positioning are cross-checked
            against the{' '}
            <ExternalSource href={OFFICIAL_SITE_URL}>
              official Heatwarped website
            </ExternalSource>
            . Last verified {DEMO_VERIFIED_DATE}.
          </div>
        </div>
      </article>
    </>
  );
}
