import { Faq, OFFICIAL_SOURCES, PageHero, SideRail, SourceList } from '@/components/heatwarped/site';

const faq = [
  {
    q: 'What is the Heatwarped release date?',
    a: 'The official Steam page currently lists the release as “To be announced.” Sealime has not published a specific date or window in the first-party sources reviewed here.',
  },
  {
    q: 'Is Heatwarped in Early Access?',
    a: 'The Steam page currently presents the full game as not yet available and offers a separate demo. It is not listed as an Early Access purchase in the material reviewed for this page.',
  },
  {
    q: 'What platform is confirmed for Heatwarped?',
    a: 'PC through Steam is confirmed by the official store page. Additional platforms should be treated as unconfirmed until Sealime announces them directly.',
  },
];

export function ReleaseDatePage() {
  return (
    <>
      <PageHero
        eyebrow="Launch tracker · first-party status · no guessed windows"
        title="Heatwarped"
        accent="Release Date"
        description="The official Heatwarped launch date is still TBA. This tracker records only first-party launch information, explains what is available now, and separates a public demo from a confirmed release window."
      />
      <div className="hw-topbar-inner hw-article-layout">
        <article className="hw-article">
          <div className="hw-callout">
            <strong>Current answer:</strong> the Heatwarped release date is <strong>To be announced</strong>.
            Steam says the full game is not yet available. A separate public demo can be downloaded now.
          </div>

          <h2>Heatwarped release date status</h2>
          <p>
            The Heatwarped release date is currently not announced. Steam lists the planned release as “To be
            announced,” and the official Heatwarped website does not publish a calendar date or release window
            in the material reviewed for this page. Any specific 2026 or 2027 launch claim should therefore be
            treated as unconfirmed unless Sealime publishes it directly.
          </p>
          <p>
            That answer may sound short, but a launch-status page is useful because new games quickly collect
            copied or inferred dates. Store databases, news aggregators and social posts can repeat a
            placeholder until it looks official. For Heatwarped, the strongest source is still the first-party
            Steam page, where the full game is marked as not yet available and the planned date remains TBA.
          </p>

          <div className="hw-table-wrap">
            <table className="hw-table">
              <thead><tr><th>Release question</th><th>Current answer</th><th>Source status</th></tr></thead>
              <tbody>
                <tr><td>Exact launch day</td><td>Not announced</td><td><span className="hw-chip">TBA</span></td></tr>
                <tr><td>Official release window</td><td>Not announced</td><td><span className="hw-chip">TBA</span></td></tr>
                <tr><td>PC / Steam</td><td>Confirmed store page</td><td><span className="hw-chip">Confirmed</span></td></tr>
                <tr><td>Public demo</td><td>Available</td><td><span className="hw-chip">Live</span></td></tr>
                <tr><td>Early Access purchase</td><td>Not listed on current Steam page</td><td><span className="hw-chip">Not listed</span></td></tr>
              </tbody>
            </table>
          </div>

          <h2>You can play the demo before launch</h2>
          <p>
            The good news is that players do not have to wait for the full launch to try the game.
            A downloadable demo is already available on Steam, and the official Heatwarped website links
            directly to that demo. The playable build gives players a current hands-on version while Sealime
            continues development, but a public demo should not be confused with Early Access or a confirmed
            launch window.
          </p>
          <p>
            Who is making Heatwarped? Steam lists Sealime as both developer and publisher. The game is
            described as an open-world arcade street racing game set in the 2000s, with Ratfield as the center
            of an underground racing scene. The official site highlights a city and outskirts, multiple race
            modes, secrets, rare car parts and online challenges. Those features explain what is being built,
            but they do not establish a release date.
          </p>

          <h2>What platform is confirmed?</h2>
          <p>
            The Steam listing confirms PC distribution through Steam. The store page currently provides
            Windows system requirements and does not use its feature panel to advertise console versions. This
            page therefore treats PC on Steam as confirmed. Other platforms should be added only after Sealime
            publishes a first-party announcement rather than inferred from third-party listings.
          </p>
          <p>
            Is Heatwarped in Early Access? The current Steam page says the game is not yet available and offers
            a separate demo. It does not present the full game as an Early Access purchase in the store
            material reviewed here. The safest status is therefore “unreleased with a public demo,” not Early
            Access. If Sealime later chooses Early Access, this launch tracker can update the
            status and preserve the date of that change.
          </p>

          <h2>Why the demo does not predict the launch date</h2>
          <p>
            A polished or content-rich demo can suggest development progress, but it is not a reliable
            calendar. Release timing depends on testing, scope, platform work and decisions that are not visible
            to players. This page will not turn demo quality, wishlist momentum or community excitement into a
            guessed launch date. The right answer remains TBA until a first-party source changes.
          </p>
          <p>
            What would count as a confirmed launch date? A dated announcement from Sealime, an updated release
            field on the official Steam page, or a first-party post that clearly states the launch day or
            window. When that happens, the page should record both the new date and the source date so readers
            can tell when the information changed. If a date is later delayed, the timeline should preserve the
            older announcement instead of silently replacing it.
          </p>

          <h2>What we can tell about development status</h2>
          <p>
            The official pages already give several useful status signals. Heatwarped has a Steam app page, a
            playable demo, published minimum and recommended PC requirements, a public official website and an
            official reveal trailer. Steam also exposes English interface support, Single-player and Family
            Sharing. Those details show that the project has moved beyond a concept announcement even though
            the launch timing remains open.
          </p>
          <p>
            There is also a feature-status nuance worth tracking before launch. The official Heatwarped website
            says players can compete online in challenges, but Steam’s current feature panel lists
            Single-player and does not list multiplayer. That may simply reflect features that are planned but
            not yet represented in the store flags. It should not be used to infer timing. Launch timing and
            multiplayer rollout are separate questions unless Sealime links them in an official update.
          </p>

          <h2>What to do while waiting</h2>
          <p>
            The most direct path is to download the Steam demo, wishlist the game if interested, and use the
            official Heatwarped site or Steam update history for first-party news. On this wiki, the demo, cars
            and system-requirements pages answer questions that can already be verified without turning the
            lack of a Heatwarped release date into filler.
          </p>
          <p>
            Search results will probably begin showing phrases such as “Heatwarped release date 2026,”
            “Heatwarped release date 2027” or “when does Heatwarped come out.” Those phrases reflect user
            demand, not evidence. As of the last update of this page, the correct source-backed answer remains
            TBA. A year will not be added to the headline until Sealime confirms one.
          </p>

          <h2>How this page will update</h2>
          <p>
            This page uses a simple update policy. If Steam changes from “To be announced” to a window, the
            Heatwarped release date status will move to that window and retain the exact wording. If Sealime
            announces a day, that day becomes the primary answer. If the date moves, the page will show the
            new date and note the previous one. That makes the guide useful as a record rather than just a
            search snippet.
          </p>
          <p>
            The current status in one sentence: the Heatwarped release date is TBA, the full game is not yet
            available on Steam, and a public demo can be downloaded now. PC through Steam is confirmed by the
            official store listing. Anything more specific about a launch year, console date or exact day needs
            a direct Sealime source before it belongs in this wiki.
          </p>

          <h2>Heatwarped release date FAQ</h2>
          <Faq items={faq} />
          <SourceList sources={[OFFICIAL_SOURCES.steam, OFFICIAL_SOURCES.site]} />
        </article>

        <SideRail
          status={[
            ['Release', 'To be announced'],
            ['Demo', 'Available'],
            ['Developer', 'Sealime'],
            ['Confirmed platform', 'PC / Steam'],
          ]}
          links={[
            { to: '/demo', label: 'Heatwarped Demo' },
            { to: '/cars', label: 'Heatwarped Cars' },
            { to: '/system-requirements', label: 'System Requirements' },
          ]}
        />
      </div>
    </>
  );
}
