import { ArrowRight, Check, Download, ExternalLink, Info } from 'lucide-react';

import { envConfigs } from '@/config';
import { Link } from '@/core/i18n/navigation';

const STEAM_URL = 'https://store.steampowered.com/app/4846360/Heatwarped/';
const X_URL = 'https://x.com/Heatwarped';
const VERIFIED_DATE = 'August 22, 2026';

function ExternalSource({ href, children }: { href: string; children: React.ReactNode }) {
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

function SourceBox({ children }: { children: React.ReactNode }) {
  return (
    <aside className="border-camo-800 bg-bunker-900/55 mt-8 border p-4 text-sm leading-7">
      <div className="text-camo-300 mb-2 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
        <Info className="h-4 w-4" />
        Source policy
      </div>
      <div className="text-bunker-200">{children}</div>
    </aside>
  );
}

function PageIntro({
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
        <p className="text-bunker-200 mt-6 max-w-3xl text-lg leading-8">{intro}</p>
      </div>
    </section>
  );
}

function Article({ children }: { children: React.ReactNode }) {
  return <article className="mx-auto max-w-5xl px-4 py-12">{children}</article>;
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

function InternalCard({ href, title, copy }: { href: string; title: string; copy: string }) {
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

export function HeatwarpedHomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Heatwarped Wiki',
    url: envConfigs.app_url,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <section className="border-camo-900 relative overflow-hidden border-b">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="bg-ember-500/15 absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="text-ember-500 mb-5 font-mono text-xs tracking-[0.35em] uppercase">
                Heatwarped · Open-world street racing · Demo available
              </div>
              <h1 className="font-display text-sand-100 text-6xl leading-none tracking-wider uppercase md:text-8xl">
                Heatwarped
              </h1>
              <p className="text-bunker-200 mt-6 max-w-2xl text-lg leading-8">
                Heatwarped is an open-world street racing game set in the 2000s. The official Heatwarped Steam listing is live, a free demo is available to download, and the full release date is still listed as to be announced.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn-tactical" href={STEAM_URL} target="_blank" rel="noreferrer">
                  Wishlist Heatwarped on Steam <ArrowRight className="h-4 w-4" />
                </a>
                <Link className="btn-ghost" href="/demo">
                  <Download className="h-4 w-4" /> Download Heatwarped Demo
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="hud-frame clip-corner bg-bunker-950/60 p-5">
                <div className="text-camo-300 mb-4 font-mono text-[10px] tracking-[0.3em] uppercase">
                  Heatwarped · verified game status
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
                    <div key={label} className="border-camo-800/60 bg-bunker-900/70 flex items-center justify-between gap-4 border p-3">
                      <dt className="text-camo-400 font-mono text-[11px] tracking-widest uppercase">{label}</dt>
                      <dd className="text-sand-100 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Article>
        <section>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <InternalCard href="/release-date" title="Heatwarped Release Date" copy="Current official release status, what TBA means, and where to watch for the launch announcement." />
            <InternalCard href="/system-requirements" title="Heatwarped System Requirements" copy="The minimum Windows PC specifications currently published on the official Steam listing." />
            <InternalCard href="/demo" title="Heatwarped Demo" copy="Where to download the free Steam demo and how to install and launch it safely." />
            <InternalCard href="/gameplay" title="Heatwarped Gameplay" copy="A source-conscious overview of the open-world street racing concept and currently confirmed gameplay details." />
          </div>
        </section>

        <H2>What is Heatwarped?</H2>
        <Paragraph>
          Heatwarped is a racing game built around an open-world street-racing premise and a deliberately 2000s setting. That identity is not inferred from fan comparisons: the official Heatwarped social profile describes the project as an “open-world street racing game set in the 2000s.” The Steam listing identifies Sealime as both developer and publisher, places Heatwarped in the Racing genre, and currently labels the full release date as “To be announced.”
        </Paragraph>
        <Paragraph>
          The most useful fact for players today is that Heatwarped is already playable in a limited form. The official Steam page offers a free Heatwarped demo, so prospective players do not need to rely on trailers, screenshots, or third-party impressions to decide whether the game interests them. The safest download route is the official Steam store page; this site does not mirror executables or provide unofficial download packages.
        </Paragraph>
        <Paragraph>
          Heatwarped has attracted attention because its presentation is intentionally rooted in an older era of arcade street racing. Community discussion frequently compares the game with early-2000s Need for Speed releases, but those comparisons are opinions rather than official product claims. For that reason, this Heatwarped guide keeps the distinction clear: official facts come from Sealime, the Heatwarped account, Steam, and the playable demo; comparisons and player reactions are treated separately.
        </Paragraph>

        <H2>Heatwarped game status at a glance</H2>
        <div className="border-camo-800 mt-5 overflow-hidden border">
          <table className="w-full text-left text-sm">
            <tbody>
              {[
                ['Heatwarped developer', 'Sealime'],
                ['Heatwarped publisher', 'Sealime'],
                ['Heatwarped release date', 'TBA / To be announced'],
                ['Heatwarped demo', 'Free demo available on Steam'],
                ['Heatwarped confirmed PC OS', 'Windows 10 64-bit minimum'],
                ['Heatwarped multiplayer status', 'Not confirmed by the verified Steam data used for this guide'],
              ].map(([label, value]) => (
                <tr key={label} className="border-camo-800 border-b last:border-b-0">
                  <th className="text-camo-300 bg-bunker-900/70 w-2/5 px-4 py-3 font-mono text-[11px] tracking-widest uppercase">{label}</th>
                  <td className="text-bunker-100 px-4 py-3">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>What Heatwarped officially confirms today</H2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            ['Open-world street racing', 'The official Heatwarped profile explicitly describes the game as open-world street racing.'],
            ['A 2000s setting', 'The same official description places Heatwarped in the 2000s, which explains the retro presentation around the project.'],
            ['A playable Steam demo', 'The Heatwarped Steam listing currently exposes a free demo, making Steam the primary download source.'],
            ['A PC release in development', 'Steam publishes Windows minimum requirements and still lists the Heatwarped full release date as TBA.'],
          ].map(([title, text]) => (
            <div key={title} className="border-camo-800 bg-bunker-900/45 border p-5">
              <div className="text-ember-400 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
                <Check className="h-4 w-4" /> Confirmed
              </div>
              <h3 className="font-display text-sand-100 mt-3 text-xl tracking-wider uppercase">{title}</h3>
              <p className="text-bunker-300 mt-2 text-sm leading-7">{text}</p>
            </div>
          ))}
        </div>

        <H2>Why this Heatwarped wiki stays conservative with facts</H2>
        <Paragraph>
          Heatwarped is new enough that search results already contain conflicting claims about release timing, platforms, vehicles, multiplayer, and other features. Some third-party pages publish details that are not present in the official Steam data or the verified Heatwarped profile. This site intentionally does not turn those claims into facts. When Sealime has not announced something, the answer here will say “not announced” rather than fill the gap with speculation.
        </Paragraph>
        <Paragraph>
          That approach is especially important for the Heatwarped release date and system requirements. The release date can change at any time, and PC requirements can be revised as development continues. Each factual guide therefore states when the information was last checked and points readers back to the official Steam listing. The goal is to make Heatwarped information easier to scan without pretending an unofficial wiki is more authoritative than the developer.
        </Paragraph>

        <H2>Start with the Heatwarped demo</H2>
        <Paragraph>
          If you want to understand Heatwarped rather than only read about it, the official demo is the best starting point. Visit the Steam page, choose the demo download option shown by Steam, install it through the Steam client, and launch it from your Library. Before downloading, compare your PC with the published Heatwarped minimum requirements: Windows 10 64-bit, an AMD FX 8320 or Intel Core i5-3570K processor, 4 GB of RAM, and a DirectX 11-capable graphics card. Steam has not published a storage requirement in the source data used for this page, so this wiki does not invent one.
        </Paragraph>

        <H2>Heatwarped latest verified updates</H2>
        <Paragraph>
          As of {VERIFIED_DATE}, the two most important verified Heatwarped updates are simple: the free demo is available on Steam, and the full Heatwarped release date remains TBA. The official reveal trailer is also circulating publicly, but this initial version of the wiki does not attach an unverified video URL or transcript. Once the original official video source is confirmed, it can be added without changing the factual foundation of the page.
        </Paragraph>

        <SourceBox>
          Primary sources for this Heatwarped page: the <ExternalSource href={STEAM_URL}>official Heatwarped Steam store page</ExternalSource> and the <ExternalSource href={X_URL}>official Heatwarped account</ExternalSource>. Steam-derived developer, publisher, genre and release-status data were last checked on {VERIFIED_DATE}.
        </SourceBox>
      </Article>
    </>
  );
}

export function HeatwarpedReleaseDatePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When will Heatwarped be released?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The official Heatwarped release date has not been announced. Steam currently lists the release date as To be announced (TBA).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a Heatwarped demo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. A free Heatwarped demo is currently available through the official Steam store page.',
        },
      },
      {
        '@type': 'Question',
        name: 'What platform is Heatwarped confirmed for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Windows PC through Steam is confirmed by the current official store listing and published Windows system requirements.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageIntro
        eyebrow={`Heatwarped release tracker · verified ${VERIFIED_DATE}`}
        title="Heatwarped Release Date"
        intro="The Heatwarped release date is currently TBA. Steam has not published a full-game launch date, but a free Heatwarped demo is already available now."
      />
      <Article>
        <div className="border-ember-500/60 bg-ember-500/5 border p-6">
          <div className="text-ember-400 font-mono text-xs tracking-[0.25em] uppercase">Current Heatwarped release status</div>
          <div className="font-display text-sand-100 mt-3 text-4xl tracking-wider uppercase">TBA · To Be Announced</div>
          <div className="text-bunker-200 mt-4 grid gap-2 text-sm sm:grid-cols-2">
            <div>Full game: No official date announced</div>
            <div>Heatwarped demo: Available now on Steam</div>
          </div>
        </div>

        <H2>Is there an official Heatwarped release date?</H2>
        <Paragraph>
          No. The official Steam listing currently shows the Heatwarped release date as “To be announced.” That is the most authoritative public release-status field available for the PC version, so this page does not assign Heatwarped a 2026, 2027, quarterly, or seasonal launch window unless Sealime changes the official listing or publishes a dated announcement.
        </Paragraph>
        <Paragraph>
          This distinction matters because new-game search results often mix official information with database estimates, retailer placeholders, editorial guesses, and copied news reports. A third-party page can display a year without that year being an announcement from the developer. For Heatwarped, TBA remains the correct answer until an official source says otherwise.
        </Paragraph>

        <H2>What we know about Heatwarped before release</H2>
        <Paragraph>
          Heatwarped is already far enough along for Sealime to publish a playable demo through Steam. The official Heatwarped profile describes the project as an open-world street racing game set in the 2000s, while Steam lists the title in the Racing genre and exposes Windows minimum system requirements. Those facts confirm an active PC build and a public hands-on preview, but they do not establish when the full game will ship.
        </Paragraph>
        <Paragraph>
          The presence of a Heatwarped demo should not be interpreted as a promise that release is imminent. Demos can appear at many stages of development, and the official Steam release field is still TBA. Likewise, this page does not claim that demo progress will carry into the full version because no authoritative source used here confirms a save-transfer policy.
        </Paragraph>

        <H2>How to follow the Heatwarped release date</H2>
        <ol className="text-bunker-200 mt-4 space-y-3 pl-6 text-base leading-8 list-decimal">
          <li>Open the <ExternalSource href={STEAM_URL}>official Heatwarped Steam page</ExternalSource>.</li>
          <li>Add Heatwarped to your Steam wishlist so the title stays visible in your account and Steam can surface store updates.</li>
          <li>Follow the <ExternalSource href={X_URL}>official Heatwarped account</ExternalSource> for direct project announcements.</li>
          <li>Re-check this Heatwarped release date page after a developer announcement; the page will keep the official date separate from rumors and estimates.</li>
        </ol>

        <H2>Heatwarped release date FAQ</H2>
        <div className="mt-5 space-y-4">
          {[
            ['When will Heatwarped release?', 'Sealime has not announced a full Heatwarped release date. Steam currently lists the game as TBA (To be announced).'],
            ['Can I play Heatwarped now?', 'Yes, in demo form. The official Steam page currently offers a free Heatwarped demo.'],
            ['Is Heatwarped confirmed for Windows PC?', 'Yes. The official Steam listing publishes Windows 10 64-bit minimum requirements, confirming the PC version represented by the store page.'],
            ['Is Heatwarped confirmed for Mac or consoles?', 'Not from the authoritative sources used for this page. We are not listing macOS, PlayStation, Xbox or Nintendo platforms as confirmed until Sealime publishes an official announcement.'],
          ].map(([question, answer]) => (
            <section key={question} className="border-camo-800 bg-bunker-900/45 border p-5">
              <h3 className="font-display text-sand-100 text-lg tracking-wider uppercase">{question}</h3>
              <p className="text-bunker-300 mt-2 leading-7">{answer}</p>
            </section>
          ))}
        </div>

        <SourceBox>
          The Heatwarped release date status on this page comes from the <ExternalSource href={STEAM_URL}>official Heatwarped Steam listing</ExternalSource>. The project description is cross-checked against the <ExternalSource href={X_URL}>official Heatwarped account</ExternalSource>. Last verified {VERIFIED_DATE}.
        </SourceBox>
      </Article>
    </>
  );
}

export function HeatwarpedSystemRequirementsPage() {
  return (
    <>
      <PageIntro
        eyebrow={`Heatwarped PC specs · Steam source checked ${VERIFIED_DATE}`}
        title="Heatwarped System Requirements"
        intro="Heatwarped system requirements currently list Windows 10 64-bit, an AMD FX 8320 or Intel Core i5-3570K, 4 GB RAM, and a DirectX 11-capable graphics card."
      />
      <Article>
        <div className="border-camo-800 overflow-hidden border">
          <div className="bg-bunker-900/75 grid grid-cols-2 border-b border-camo-800">
            <div className="text-ember-400 px-4 py-3 font-mono text-xs tracking-widest uppercase">Heatwarped minimum</div>
            <div className="text-camo-400 px-4 py-3 font-mono text-xs tracking-widest uppercase">Heatwarped recommended</div>
          </div>
          {[
            ['OS', 'Windows 10 64-bit', 'Not officially published'],
            ['Processor', 'AMD FX 8320 / Intel Core i5-3570K', 'Not officially published'],
            ['Memory', '4 GB RAM', 'Not officially published'],
            ['Graphics', 'DirectX 11-capable graphics card', 'Not officially published'],
            ['Storage', 'Not officially published', 'Not officially published'],
          ].map(([label, minimum, recommended]) => (
            <div key={label} className="grid grid-cols-[0.7fr_1.3fr_1.3fr] border-b border-camo-800 last:border-b-0">
              <div className="text-camo-300 bg-bunker-900/40 px-3 py-3 font-mono text-[10px] tracking-widest uppercase">{label}</div>
              <div className="text-bunker-100 px-3 py-3 text-sm">{minimum}</div>
              <div className="text-bunker-400 px-3 py-3 text-sm">{recommended}</div>
            </div>
          ))}
        </div>

        <H2>These are Heatwarped requirements, not NFS Heat requirements</H2>
        <Paragraph>
          This page is specifically about Heatwarped by Sealime. It is not a requirements page for Need for Speed Heat, the board game Heat, World of Tanks HEAT, or Gunner, HEAT, PC. The full game name “Heatwarped” is repeated deliberately because search engines and users can otherwise land on similarly named “Heat” products. If the game title on your Steam page does not read Heatwarped, these specifications are not the right reference.
        </Paragraph>

        <H2>Heatwarped minimum PC requirements explained</H2>
        <Paragraph>
          The current Heatwarped minimum operating-system requirement is Windows 10 64-bit. That means a 32-bit Windows installation does not meet the published minimum. Steam has not provided a separate Windows 11 recommendation in the source data used for this guide, so this page does not invent one.
        </Paragraph>
        <Paragraph>
          For the processor, Heatwarped lists either an AMD FX 8320 or an Intel Core i5-3570K as the minimum reference point. These are older desktop CPUs, but CPU model names alone do not guarantee identical performance across laptops, power-limited systems, or unusual configurations. The safest check is to compare your exact processor against one of the listed minimum models rather than assume that a newer purchase date automatically means your PC is faster.
        </Paragraph>
        <Paragraph>
          Heatwarped currently asks for 4 GB of RAM at minimum. That is the game requirement published by Steam, not a recommendation for the total amount of memory a modern Windows PC should ideally have for multitasking. Background browsers, launchers, recording software, overlays, and other applications can consume memory at the same time, so having exactly 4 GB installed may leave less memory available to the game than the raw number suggests.
        </Paragraph>
        <Paragraph>
          For graphics, the verified Steam data requires a DirectX 11-capable graphics card but does not name a specific NVIDIA, AMD, or Intel GPU model. Because no exact GPU tier is published, this wiki will not guess a GeForce or Radeon equivalent. If your GPU supports DirectX 11, it satisfies that stated feature requirement, but actual frame rate and graphics quality still depend on the GPU's performance and the state of the Heatwarped build.
        </Paragraph>

        <H2>Heatwarped recommended specs are not published yet</H2>
        <Paragraph>
          Steam has not published a complete authoritative Heatwarped recommended specification set in the source data used for this page. That is why the table above says “Not officially published” instead of filling the column with modern CPUs, 8 GB RAM, or a guessed NVIDIA graphics card. A useful system-requirements guide should make missing information obvious rather than make unofficial recommendations look like developer requirements.
        </Paragraph>
        <Paragraph>
          The same applies to storage. Until the Heatwarped Steam page publishes a storage requirement, this page will not claim that the game needs a particular number of gigabytes. The demo download size shown by Steam can also differ from the eventual full-game storage requirement, so the two should not be treated as interchangeable.
        </Paragraph>

        <H2>Can your PC run the Heatwarped demo?</H2>
        <Paragraph>
          Start by checking four things: a 64-bit Windows 10 installation or a compatible newer Windows environment, a processor at least comparable to the listed AMD FX 8320 or Intel Core i5-3570K, at least 4 GB of installed RAM, and a DirectX 11-capable GPU. Meeting the published Heatwarped minimum requirements means your hardware matches the store baseline; it does not guarantee a particular resolution, graphics preset, or frame rate.
        </Paragraph>
        <Paragraph>
          Because Heatwarped is still in development, requirements may change before release. If your system is close to the minimum, re-check the official Steam listing after major updates or when a final release date is announced. For the current playable build, the free demo is the most practical way to test how Heatwarped behaves on your own hardware.
        </Paragraph>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn-tactical" href="/demo">Heatwarped demo guide <ArrowRight className="h-4 w-4" /></Link>
          <a className="btn-ghost" href={STEAM_URL} target="_blank" rel="noreferrer">Check Heatwarped on Steam <ExternalLink className="h-4 w-4" /></a>
        </div>

        <SourceBox>
          All published Heatwarped PC requirements above are taken from the <ExternalSource href={STEAM_URL}>official Heatwarped Steam store page</ExternalSource> as supplied and verified for this guide on {VERIFIED_DATE}. Unknown recommended specs and storage are intentionally left unknown.
        </SourceBox>
      </Article>
    </>
  );
}

export function HeatwarpedDemoPage() {
  return (
    <>
      <PageIntro
        eyebrow={`Heatwarped demo · official Steam download · checked ${VERIFIED_DATE}`}
        title="Heatwarped Demo"
        intro="The Heatwarped demo is available free on Steam. Use the official store page to download, install, and play the current public Heatwarped preview on Windows PC."
      />
      <Article>
        <div className="border-ember-500/60 bg-ember-500/5 flex flex-col gap-4 border p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-ember-400 font-mono text-xs tracking-widest uppercase">Official Heatwarped demo</div>
            <div className="text-sand-100 mt-2 text-lg font-medium">Free demo available through Steam</div>
          </div>
          <a className="btn-tactical" href={STEAM_URL} target="_blank" rel="noreferrer">
            Download Heatwarped Demo <Download className="h-4 w-4" />
          </a>
        </div>

        <H2>How to download the Heatwarped demo</H2>
        <ol className="text-bunker-200 mt-4 space-y-3 pl-6 text-base leading-8 list-decimal">
          <li>Open the <ExternalSource href={STEAM_URL}>official Heatwarped Steam store page</ExternalSource>.</li>
          <li>Sign in to Steam if the store or client asks you to authenticate.</li>
          <li>Use the demo download or install control shown on the Heatwarped store page.</li>
          <li>Let Steam install the Heatwarped demo through the normal client workflow.</li>
          <li>Launch the Heatwarped demo from your Steam Library after installation completes.</li>
        </ol>
        <Paragraph>
          This site does not host a Heatwarped installer, APK, repack, torrent, or mirror. The official Steam listing is the preferred download source because it keeps the demo attached to the correct game App ID and lets Steam handle installation and future demo updates.
        </Paragraph>

        <H2>Is the Heatwarped demo free?</H2>
        <Paragraph>
          Yes. The current Heatwarped Steam page exposes the demo as a free playable preview. That does not tell us the eventual price of the full game, and this page does not infer a full-game price from demo availability. If Sealime changes the demo status later, the Steam listing should be treated as the source of truth.
        </Paragraph>

        <H2>Heatwarped demo system requirements</H2>
        <Paragraph>
          Before downloading Heatwarped, compare your PC with the minimum specifications published on Steam: Windows 10 64-bit, AMD FX 8320 or Intel Core i5-3570K, 4 GB RAM, and a DirectX 11-capable graphics card. Steam has not published a storage figure in the source data used by this guide, so make sure you have reasonable free disk space and check the Steam client for the actual download size it presents to you.
        </Paragraph>
        <div className="mt-6">
          <Link className="btn-ghost" href="/system-requirements">Full Heatwarped system requirements <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <H2>What is officially confirmed in the Heatwarped demo?</H2>
        <Paragraph>
          The most important confirmed point is that the Heatwarped demo is public and playable through Steam. The wider Heatwarped project is officially described as an open-world street racing game set in the 2000s, so the demo is the current hands-on preview of that concept. However, the authoritative sources used for this initial page do not provide a complete written inventory of demo races, cars, map boundaries, progression, total playtime, or save-transfer rules.
        </Paragraph>
        <Paragraph>
          Rather than fill those gaps from unverified posts, this guide leaves them open. Once Sealime documents the demo scope or we have directly captured the in-game menus and content, the page can add a precise “what's included” table. That will be more useful than copying a third-party claim that may already be outdated after a demo patch.
        </Paragraph>

        <H2>Does Heatwarped demo progress carry over?</H2>
        <Paragraph>
          No authoritative source verified for this page currently confirms that Heatwarped demo saves will transfer to the full game. Treat carry-over as unconfirmed unless Sealime publishes a policy. If preserving progress matters to you, avoid assuming that a demo profile, car setup, or completion state will survive into the final release.
        </Paragraph>

        <H2>Heatwarped demo troubleshooting basics</H2>
        <Paragraph>
          If the Heatwarped demo does not install, first use Steam's standard client checks: confirm you are signed in, confirm Steam has enough free disk space for the download it reports, restart the client, and verify that your Windows installation and graphics hardware meet the minimum requirements. If the demo launches but performs poorly, do not treat community launch flags or unofficial tweaks as official fixes unless Sealime documents them. Early demo builds can change quickly.
        </Paragraph>

        <H2>What to do after playing the Heatwarped demo</H2>
        <Paragraph>
          If the demo makes you interested in the full game, add Heatwarped to your Steam wishlist and follow the official project account. The release date is still TBA, so wishlist and developer channels are more reliable than third-party countdowns. You can also read the <Link className="text-ember-400 underline underline-offset-4" href="/gameplay">Heatwarped gameplay guide</Link> for the confirmed game concept or the <Link className="text-ember-400 underline underline-offset-4" href="/release-date">Heatwarped release date page</Link> for the current launch status.
        </Paragraph>

        <SourceBox>
          Demo availability and PC requirements are based on the <ExternalSource href={STEAM_URL}>official Heatwarped Steam listing</ExternalSource>. The game-level description is cross-checked against the <ExternalSource href={X_URL}>official Heatwarped account</ExternalSource>. Last verified {VERIFIED_DATE}.
        </SourceBox>
      </Article>
    </>
  );
}

export function HeatwarpedGameplayPage() {
  return (
    <>
      <PageIntro
        eyebrow={`Heatwarped gameplay · confirmed overview · ${VERIFIED_DATE}`}
        title="Heatwarped Gameplay"
        intro="Heatwarped gameplay is built around open-world street racing in a 2000s setting. This guide separates officially confirmed mechanics from details that are still undocumented."
      />
      <Article>
        <H2>What kind of gameplay does Heatwarped have?</H2>
        <Paragraph>
          Heatwarped is officially described as an open-world street racing game set in the 2000s. Steam categorizes the game in Racing and currently shows user-facing tags such as Racing, Arcade, Retro, Atmospheric, Score Attack, and Singleplayer. Those tags help explain how Steam users are classifying the project, while the official Heatwarped profile provides the clearest developer-facing summary: open-world street racing with a 2000s setting.
        </Paragraph>
        <Paragraph>
          That means the basic Heatwarped gameplay loop is centered on driving rather than a menu-only race structure. The open-world description implies movement through a connected game world between racing activities, but this page does not invent district counts, map size, traffic systems, police systems, or event totals until those details are documented by Sealime or directly verified in the current demo.
        </Paragraph>

        <H2>Heatwarped open-world street racing</H2>
        <Paragraph>
          The phrase “open-world street racing” is the strongest confirmed gameplay statement currently available from the official Heatwarped account. It establishes two things. First, the racing takes place in a broader explorable environment rather than only isolated track selections. Second, the game's identity is street racing rather than circuit motorsport simulation. The visual presentation and community response may invite comparisons with older arcade racers, but Heatwarped should be described on its own official terms first.
        </Paragraph>
        <Paragraph>
          Steam's Arcade and Score Attack tags are consistent with that positioning, but Steam tags are not equivalent to a detailed developer design document. For example, a Score Attack tag does not by itself prove the existence of a specific leaderboard structure, ranking ladder, or progression economy. This guide therefore uses tags as supporting context, not as proof of mechanics that have not been publicly explained.
        </Paragraph>

        <H2>Heatwarped driving and handling</H2>
        <Paragraph>
          A public Heatwarped demo is available, which means players can directly test the current handling rather than rely on descriptions such as “simcade,” “drift-heavy,” or “grippy.” Those labels are subjective and can change with tuning updates. This page intentionally does not present a community handling opinion as an official fact. The useful takeaway is that Heatwarped is positioned as an arcade racing game on Steam and currently provides a hands-on demo for evaluating the driving model yourself.
        </Paragraph>

        <H2>Heatwarped car customization</H2>
        <Paragraph>
          Vehicle customization is visible in Heatwarped's public presentation and is one of the areas players are already discussing, but the authoritative text sources used for this initial guide do not provide a complete official parts list, tuning-tree breakdown, or number of supported vehicles. For that reason, this page does not claim specific bumpers, engine swaps, nitrous tiers, wheel catalogs, or performance categories unless they are later documented in official material or captured directly from the demo.
        </Paragraph>
        <Paragraph>
          The next useful step for the wiki is not to guess. It is to document the Heatwarped demo car and garage interfaces directly, record the names shown in game, and distinguish cosmetic customization from performance tuning. Until that data is captured, the gameplay page keeps customization at the level that can be responsibly confirmed.
        </Paragraph>

        <H2>Heatwarped setting and 2000s atmosphere</H2>
        <Paragraph>
          The 2000s setting is part of Heatwarped's own official description, not merely a nostalgic label added by fans. That makes the period styling relevant to gameplay because it informs the streets, presentation, interface, car culture, and overall tone players see in the demo and promotional media. What it does not automatically confirm is a specific in-game calendar year, a licensed soundtrack, or licensed vehicle roster. Those are separate facts and should be sourced separately.
        </Paragraph>

        <H2>What is not confirmed about Heatwarped gameplay yet?</H2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            ['PDA racing forum mechanics', 'Not included as a fact until an official source or direct in-game capture confirms how the system works.'],
            ['Progression structure', 'No authoritative progression ladder, respect system, district unlock path, or full campaign flow is documented in the sources used here.'],
            ['Multiplayer', 'The verified Steam data currently includes a Singleplayer tag; this guide does not claim multiplayer without an official announcement.'],
            ['Full soundtrack', 'No complete official Heatwarped track list has been verified for this page.'],
            ['Full car roster', 'No complete official Heatwarped car list is being asserted from third-party guesses or real-world lookalike identifications.'],
            ['Final event types', 'The demo may expose racing activities, but this guide does not treat demo observations or media summaries as a final launch-mode list.'],
          ].map(([title, text]) => (
            <section key={title} className="border-camo-800 bg-bunker-900/45 border p-5">
              <h3 className="font-display text-sand-100 text-lg tracking-wider uppercase">{title}</h3>
              <p className="text-bunker-300 mt-2 text-sm leading-7">{text}</p>
            </section>
          ))}
        </div>

        <H2>How to see Heatwarped gameplay now</H2>
        <Paragraph>
          The best authoritative way to evaluate Heatwarped gameplay today is to play the official Steam demo. That gives you the current build's handling, presentation, menus, and available content without relying on an edited third-party video. If you prefer to watch before installing, use the official reveal material published by Sealime once you have verified the original account or video URL rather than a re-upload.
        </Paragraph>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn-tactical" href="/demo">Play the Heatwarped demo <ArrowRight className="h-4 w-4" /></Link>
          <Link className="btn-ghost" href="/release-date">Heatwarped release date <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <SourceBox>
          Core Heatwarped gameplay positioning is based on the <ExternalSource href={X_URL}>official Heatwarped account</ExternalSource>. Steam genre, status and demo information come from the <ExternalSource href={STEAM_URL}>official Heatwarped Steam listing</ExternalSource>. Last verified {VERIFIED_DATE}.
        </SourceBox>
      </Article>
    </>
  );
}
