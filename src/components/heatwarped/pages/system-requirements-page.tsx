import { Faq, OFFICIAL_SOURCES, PageHero, SideRail, SourceList } from '@/components/heatwarped/site';

const faq = [
  {
    q: 'Can a GTX 960 run Heatwarped?',
    a: 'Steam lists the GTX 960 as a minimum Nvidia GPU for a 1080p 30 fps target in Authentic mode when paired with the rest of the minimum specification.',
  },
  {
    q: 'How much storage does Heatwarped need?',
    a: 'The current official Steam requirements list 1 GB of available storage for both minimum and recommended configurations.',
  },
  {
    q: 'Does Heatwarped require DirectX 12?',
    a: 'No. The official requirements list DirectX 11, and the additional notes say DirectX is the default API.',
  },
];

export function SystemRequirementsPage() {
  return (
    <>
      <PageHero
        eyebrow="PC performance · official Steam specification"
        title="Heatwarped"
        accent="System Requirements"
        description="Official Heatwarped system requirements for 1080p 30 fps Authentic mode and 1080p 60 fps Enhanced mode, plus the developer’s important CPU-dependence note."
      />
      <div className="hw-topbar-inner hw-article-layout">
        <article className="hw-article">
          <div className="hw-callout cyan">
            <strong>Important:</strong> Sealime says Heatwarped is heavily processor-dependent. Compare your
            CPU as carefully as your GPU when using the published performance targets.
          </div>

          <h2>Official Heatwarped system requirements</h2>
          <p>
            The Heatwarped system requirements are already published on the official Steam page, which makes
            PC compatibility one of the easiest parts of the game to document accurately. Sealime provides
            both minimum and recommended targets and, unusually, ties them to named graphics modes and
            frame-rate expectations. That is more useful than a bare component list.
          </p>

          <div className="hw-table-wrap">
            <table className="hw-table">
              <thead><tr><th>Component</th><th>Minimum</th><th>Recommended</th></tr></thead>
              <tbody>
                <tr><td>Target</td><td>1080p / 30 fps / Authentic</td><td>1080p / 60 fps / Enhanced</td></tr>
                <tr><td>OS</td><td>Windows 10 64-bit</td><td>Windows 11 64-bit</td></tr>
                <tr><td>CPU</td><td>AMD FX 8320 / Intel Core i5-3570K</td><td>Ryzen 5 5500 / Intel Core i5-12400F</td></tr>
                <tr><td>RAM</td><td>4 GB</td><td>8 GB</td></tr>
                <tr><td>GPU</td><td>GTX 960 / Radeon HD 7970</td><td>GTX 1070 / RX 5600 XT</td></tr>
                <tr><td>DirectX</td><td>Version 11</td><td>Version 11</td></tr>
                <tr><td>Storage</td><td>1 GB available</td><td>1 GB available</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Minimum requirements: 1080p 30 fps Authentic</h2>
          <p>
            The minimum Heatwarped system requirements target 1080p at 30 fps using the “Authentic” graphics
            mode. Steam lists Windows 10 64-bit, an AMD FX 8320 or Intel Core i5-3570K, 4 GB of RAM, an Nvidia
            GeForce GTX 960 or AMD Radeon HD 7970, DirectX 11 and 1 GB of available storage. A 64-bit processor
            and operating system are required.
          </p>
          <p>
            The graphics-mode label is important. “Authentic” is not a nickname invented by this wiki; it is
            the mode named in the official minimum-spec notes. The store does not enumerate every setting that
            changes inside that preset, so this page does not guess at shadow quality, post-processing or
            texture behavior. A future settings guide should compare those items directly in the game menu.
          </p>

          <h2>Recommended requirements: 1080p 60 fps Enhanced</h2>
          <p>
            The recommended Heatwarped system requirements target 1080p at 60 fps using the “Enhanced”
            graphics mode. Steam lists Windows 11 64-bit, an AMD Ryzen 5 5500 or Intel Core i5-12400F, 8 GB of
            RAM, an Nvidia GeForce GTX 1070 or AMD RX 5600 XT, DirectX 11 and 1 GB of available storage. The
            store again requires a 64-bit processor and operating system.
          </p>
          <p>
            “Enhanced” is the official name paired with the recommended target. The Steam page gives a useful
            performance expectation but does not publish a 1440p, 4K or high-refresh target. Those use cases
            should be benchmarked rather than extrapolated into promises from the 1080p specification.
          </p>

          <h2>Why CPU performance matters more than you might expect</h2>
          <p>
            The most important note is easy to miss: Sealime says the game is heavily processor-dependent.
            That means the Heatwarped system requirements should not be read as a normal “GPU first” racing
            game checklist. A PC with a stronger graphics card but a much weaker processor may not match the
            published target as closely as expected. For troubleshooting, CPU load and frame-time consistency
            deserve attention alongside GPU utilization.
          </p>
          <p>
            Can a GTX 960 run Heatwarped? According to the minimum specification, a GTX 960 is one of the
            listed Nvidia GPUs for a 1080p 30 fps target in Authentic mode, paired with a suitable CPU and the
            other minimum components. That does not guarantee a locked frame rate on every system, but it is
            the developer’s published baseline.
          </p>
          <p>
            Can a GTX 1070 run Heatwarped at 60 fps? The recommended specification lists a GTX 1070 together
            with a Ryzen 5 5500 or Core i5-12400F and 8 GB RAM for 1080p 60 fps using Enhanced mode. The CPU
            pairing is important because of the processor-dependence note. Comparing only your GPU to the
            recommended Heatwarped system requirements can give an incomplete picture.
          </p>

          <h2>Storage, DirectX, Windows, and RAM</h2>
          <p>
            Steam currently lists 1 GB of available space for both minimum and recommended configurations.
            That is a small requirement by modern PC game standards, but it should be treated as the current
            published figure rather than a permanent promise for the final build. Game size can grow during
            development, so this page will check the official store listing again when the full release
            approaches.
          </p>
          <p>
            Heatwarped does not currently require DirectX 12 according to the official requirements. Steam
            lists DirectX 11, and the additional notes say DirectX is the default API. This guide does not
            recommend alternate rendering APIs as an official fix because Sealime’s store page does not
            publish such guidance. Community launch options can be documented separately if they are tested,
            but they should not overwrite the official baseline.
          </p>
          <p>
            Windows 10 64-bit is explicitly listed in the minimum Heatwarped system requirements, while Windows
            11 64-bit appears in the recommended tier. RAM starts at 4 GB minimum and rises to 8 GB recommended.
            The store page reviewed for this guide does not publish macOS or Linux system requirements in its
            specification section, so this wiki does not assume those platforms are supported.
          </p>

          <h2>What if your PC is between minimum and recommended?</h2>
          <p>
            Start with the target you care about. The official specs map minimum hardware to 1080p 30 fps
            Authentic and recommended hardware to 1080p 60 fps Enhanced. A machine between those points may
            need a mixture of settings or may land between the two frame-rate targets. Because the game is
            processor-dependent, lowering GPU-heavy settings may not solve every performance limit.
          </p>
          <p>
            The public demo is useful for checking your own machine before the full game launches. Because a
            playable build is available from the official Steam page, you can compare real performance against
            the Heatwarped system requirements without relying on a synthetic estimate. When testing, note
            resolution, graphics mode, CPU, GPU, RAM and frame-rate behavior. That information is much more
            actionable than simply saying the game “runs fine.”
          </p>

          <h2>How this page handles future benchmarks</h2>
          <p>
            This guide will keep the official table separate from community performance notes. The official
            specification table comes from Steam and remains the primary source. Benchmarks from
            players can later help explain how different hardware behaves, but they should be labeled by demo
            build and settings because Heatwarped is still unreleased and optimization can change.
          </p>
          <p>
            In short, the Heatwarped system requirements are accessible for an arcade racer: Windows 10
            64-bit, 4 GB RAM and a GTX 960-class GPU are the minimum published baseline, while Windows 11, 8 GB
            RAM and a GTX 1070-class GPU sit in the recommended tier. The bigger caveat is CPU demand. Sealime
            explicitly says the game is heavily processor-dependent, so use the processor pairings in the
            table rather than treating them as optional footnotes.
          </p>

          <h2>Heatwarped system requirements FAQ</h2>
          <Faq items={faq} />
          <SourceList sources={[OFFICIAL_SOURCES.steam]} />
        </article>

        <SideRail
          status={[
            ['Minimum target', '1080p / 30 / Authentic'],
            ['Recommended', '1080p / 60 / Enhanced'],
            ['Storage', '1 GB'],
            ['API', 'DirectX 11'],
          ]}
          links={[
            { to: '/demo', label: 'Heatwarped Demo' },
            { to: '/cars', label: 'Heatwarped Cars' },
            { to: '/release-date', label: 'Release Date' },
          ]}
        />
      </div>
    </>
  );
}
