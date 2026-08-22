import { Faq, OFFICIAL_SOURCES, PageHero, SideRail, SourceList } from '@/components/heatwarped/site';

const faq = [
  {
    q: 'Is the Heatwarped demo available now?',
    a: 'Yes. The official Steam page currently offers a downloadable Heatwarped demo, and the official Heatwarped website points its demo button to Steam.',
  },
  {
    q: 'Does Heatwarped demo progress carry over?',
    a: 'No carry-over statement appears in the primary sources reviewed for this page, so save transfer should be treated as unconfirmed.',
  },
  {
    q: 'Is the Heatwarped demo multiplayer?',
    a: 'Steam currently lists Single-player, while the official website advertises online challenges for the game. That does not prove the current demo includes multiplayer.',
  },
];

export function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Playable build · download · verification guide"
        title="Heatwarped"
        accent="Demo"
        description="Where to download the Heatwarped demo, what Sealime officially confirms, which PC targets apply, and which demo-specific questions still need direct in-game verification."
      />
      <div className="hw-topbar-inner hw-article-layout">
        <article className="hw-article">
          <div className="hw-callout cyan">
            <strong>Download status:</strong> the public Heatwarped demo is available through the official
            Steam page. The full game itself is still marked as not yet available with a release date of TBA.
          </div>

          <h2>How to download the Heatwarped demo</h2>
          <p>
            The Heatwarped demo is the most useful way to verify what the game actually plays like right now.
            Sealime has made the demo downloadable from the official Steam store page while the full game
            remains unavailable and its release date is still listed as “To be announced.” That makes this
            page a living demo reference rather than a preview assembled from rumors.
          </p>
          <p>
            Open the official Heatwarped Steam page and use the “Download Heatwarped Demo” control. The
            official Heatwarped website also points its demo button to Steam. Because download links and builds
            can change during development, this guide sends players to the first-party Steam listing rather
            than mirroring installers or linking to third-party download sites.
          </p>

          <h2>What the official pages say about the game</h2>
          <p>
            The Heatwarped demo sits inside a broader concept that Sealime describes as open-world arcade
            street racing set in the 2000s. Steam highlights adrenaline driving, deep customization, rich
            environments and a soundtrack focused on racing and night driving. The official website names the
            city as Ratfield and describes a large environment ranging from the sparkling city to wide
            outskirts. Those are full-game descriptions, so this guide does not automatically assume that
            every advertised feature is present in the current demo build.
          </p>
          <p>
            That difference between “game feature” and “demo feature” is important. The official website
            advertises multiple race modes, secrets, rare car parts and online challenges. Steam currently
            marks the product with Single-player and Family Sharing feature flags. A responsible Heatwarped
            demo guide should therefore test the playable build before stating that online competition, every
            race mode or the whole Ratfield map can be accessed today.
          </p>

          <div className="hw-table-wrap">
            <table className="hw-table">
              <thead>
                <tr><th>Demo question</th><th>Verified answer</th><th>Evidence</th></tr>
              </thead>
              <tbody>
                <tr><td>Public demo available?</td><td>Yes</td><td>Steam + official site</td></tr>
                <tr><td>Full game released?</td><td>No</td><td>Steam</td></tr>
                <tr><td>Release date?</td><td>To be announced</td><td>Steam</td></tr>
                <tr><td>Demo playtime?</td><td>Not published in reviewed first-party text</td><td>Needs in-game audit</td></tr>
                <tr><td>Save carry-over?</td><td>Not confirmed</td><td>Needs official statement</td></tr>
                <tr><td>Demo multiplayer?</td><td>Not confirmed</td><td>Steam currently says Single-player</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Heatwarped demo PC requirements</h2>
          <p>
            What can the Heatwarped demo confirm with no speculation? At minimum, it confirms that Sealime has
            released a playable public build through Steam. The store page also publishes PC requirements tied
            to two graphics modes: “Authentic” and “Enhanced.” The minimum specification targets 1080p 30 fps
            in Authentic mode, while the recommended specification targets 1080p 60 fps in Enhanced mode.
            Those targets are useful before downloading because they provide a direct expectation for older PCs.
          </p>
          <p>
            The minimum hardware listed for Heatwarped is Windows 10 64-bit, an AMD FX 8320 or Intel Core
            i5-3570K, 4 GB RAM, a GTX 960 or Radeon HD 7970, DirectX 11 and 1 GB of free storage. The
            recommended target is Windows 11 64-bit, a Ryzen 5 5500 or Core i5-12400F, 8 GB RAM, a GTX 1070 or
            RX 5600 XT, DirectX 11 and the same 1 GB storage figure. Sealime also notes that the game is
            heavily processor-dependent.
          </p>
          <p>
            If the demo stutters or performs below the published target, start with the CPU as well as the GPU.
            The developer’s own system-requirement note specifically calls out processor dependence. It is
            also worth comparing the two named graphics modes before assuming a graphics card is the only
            bottleneck. This wiki does not publish unofficial launch arguments or configuration tweaks as
            official fixes unless they can be reproduced and clearly labeled as community workarounds.
          </p>

          <h2>How long is the Heatwarped demo?</h2>
          <p>
            The official Steam and Heatwarped website text reviewed for this guide does not publish a target
            playtime. The same is true for an official count of demo races, demo cars and demo-only
            progression. Those are exactly the kinds of questions that should be answered by a structured
            hands-on audit rather than guessed from a trailer or copied from an unsourced post.
          </p>
          <p>
            The same caution applies to save transfer. No carry-over statement is present in the primary
            sources reviewed here, so transfer status should be treated as unconfirmed. If Sealime adds a
            save-transfer notice to Steam, a FAQ or an official post, this section can be updated. Until then,
            do not plan full-game progression around the assumption that demo saves will carry over.
          </p>

          <h2>Is the demo multiplayer?</h2>
          <p>
            The safest current answer is that Steam’s feature panel lists Single-player, while the official
            Heatwarped site says the game will let players compete online in challenges. That does not prove
            the current demo includes multiplayer. The Heatwarped demo guide will only label online play as
            demo-accessible after it can be verified in the build or directly confirmed by Sealime.
          </p>

          <h2>What should be verified inside the demo next?</h2>
          <p>
            A proper Heatwarped demo pass should capture the main menu, settings menu, controls, selectable
            cars, in-game car names, available race modes, visible Ratfield areas, customization menus, parts,
            progression gates and any build or version number. Screenshots or a transcript from an official
            walkthrough can help, but menu text from the playable demo is even stronger evidence for
            game-specific labels.
          </p>
          <p>
            The playable build is also the best current foundation for future guide pages. A controls page
            should come from the actual keybind menu. A cars list should use the in-game vehicle names. A
            customization guide should record the menu categories and part labels that players see. A Ratfield
            map page should wait until locations can be named accurately. This approach produces fewer pages at
            first, but each one answers a real question.
          </p>

          <h2>What is confirmed today</h2>
          <p>
            For now, the essential demo facts are clear: the demo is available through Steam, the
            full game is not yet released, Heatwarped is an open-world arcade street racer set in the 2000s,
            Ratfield is its setting, deep customization is a core promise, and official PC targets are already
            published. Everything beyond those boundaries should be marked as observed-in-demo, planned, or
            not yet verified.
          </p>
          <p>
            This demo guide will be updated as the build changes. If Sealime publishes patch notes or
            a new demo version, the most useful update is not simply to rewrite the intro; it is to record what
            changed in cars, races, controls, performance, map access and progression. That is how the guide
            can remain useful after the first wave of announcement traffic fades.
          </p>

          <h2>Heatwarped demo FAQ</h2>
          <Faq items={faq} />
          <SourceList sources={[OFFICIAL_SOURCES.steam, OFFICIAL_SOURCES.site]} />
        </article>

        <SideRail
          status={[
            ['Demo', 'Available on Steam'],
            ['Full game', 'Not released'],
            ['Save transfer', 'Unconfirmed'],
            ['Demo multiplayer', 'Unconfirmed'],
          ]}
          links={[
            { to: '/cars', label: 'Heatwarped Cars' },
            { to: '/system-requirements', label: 'System Requirements' },
            { to: '/release-date', label: 'Release Date' },
          ]}
        />
      </div>
    </>
  );
}
