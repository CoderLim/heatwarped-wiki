import { Faq, OFFICIAL_SOURCES, PageHero, SideRail, SourceList } from '@/components/heatwarped/site';

const faq = [
  {
    q: 'How many Heatwarped cars are there?',
    a: 'Sealime has not published a complete official car count in the Steam or official website text reviewed for this page. The roster will be updated when the in-game names and total can be verified.',
  },
  {
    q: 'Are Heatwarped cars licensed real-world models?',
    a: 'Licensing status is not confirmed in the primary sources reviewed here. Visual resemblance is not treated as proof of a licensed manufacturer or model name.',
  },
  {
    q: 'Can you customize cars in Heatwarped?',
    a: 'Yes. Steam explicitly describes deep customization, and the official Heatwarped website says players can obtain rare car parts and develop their ride.',
  },
];

export function CarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Database file · vehicle roster · verification first"
        title="Heatwarped"
        accent="Cars"
        description="The Heatwarped cars guide tracks the official roster, car progression, rare parts, customization, and demo verification without turning look-alike guesses into confirmed vehicle names."
      />
      <div className="hw-topbar-inner hw-article-layout">
        <article className="hw-article">
          <div className="hw-callout">
            <strong>Roster status:</strong> Sealime has not published a complete model-by-model list in the
            first-party Steam and official-site material reviewed for this version. This page therefore marks
            the Heatwarped cars list as pending verification instead of copying speculative names.
          </div>

          <h2>What is officially confirmed about Heatwarped cars?</h2>
          <p>
            The Heatwarped cars page tracks the vehicle roster without pretending that every car has already
            been officially named. Heatwarped is built around street racing, customization and car progression,
            so the Heatwarped cars list will eventually be one of the most important parts of this wiki. At
            launch, however, Sealime’s official Steam page and official website describe the car systems
            without publishing a complete model-by-model roster. That distinction matters.
          </p>
          <p>
            Steam says players can customize a ride extensively, and the full game description calls out deep
            customization as a core feature. The official Heatwarped website adds that players can obtain rare
            car parts and give new life to a ride. Those statements establish that vehicles are not simple
            cosmetic selections: collecting parts and changing a car are central to the game’s identity.
          </p>

          <div className="hw-table-wrap">
            <table className="hw-table">
              <thead>
                <tr><th>Question</th><th>Current verified answer</th><th>Status</th></tr>
              </thead>
              <tbody>
                <tr><td>Full car roster published?</td><td>No complete first-party roster found in the reviewed sources.</td><td><span className="hw-chip">Pending</span></td></tr>
                <tr><td>Deep customization?</td><td>Yes. Explicitly described on Steam.</td><td><span className="hw-chip">Confirmed</span></td></tr>
                <tr><td>Rare car parts?</td><td>Yes. Explicitly described on the official website.</td><td><span className="hw-chip">Confirmed</span></td></tr>
                <tr><td>Licensed manufacturers?</td><td>Not stated in the primary sources reviewed here.</td><td><span className="hw-chip">Unconfirmed</span></td></tr>
                <tr><td>Starter-car list?</td><td>Not published in the reviewed official text.</td><td><span className="hw-chip">Unconfirmed</span></td></tr>
              </tbody>
            </table>
          </div>

          <h2>Why this page does not guess the car roster</h2>
          <p>
            What is not officially confirmed is just as important. The first-party sources reviewed for this
            page do not publish a total number of vehicles, a starter-car list, licensed manufacturer names,
            individual performance statistics or a final unlock order. Screenshots and the playable demo may
            allow players to identify vehicles by appearance, but visual resemblance is not the same thing as
            an official model name. This Heatwarped cars database therefore avoids presenting community guesses
            as developer-confirmed facts.
          </p>
          <p>
            For a useful Heatwarped cars list, each entry should eventually include the in-game name, how the
            car is acquired, whether it appears in the demo, drivetrain if the game exposes it, base
            performance information, upgrade compatibility and a source note. If Heatwarped uses fictional
            names inspired by real vehicles, the wiki can also record a clearly labeled “visual inspiration”
            field, but that should remain separate from the official in-game identity.
          </p>

          <h2>Cars, Ratfield, and progression</h2>
          <p>
            Cars also connect directly to Ratfield. The Steam summary says the player builds respect in the
            city’s underground racing scene, while the official site describes an open world stretching from a
            sparkling city into wide outskirts. In a progression-focused street racer, the most useful
            vehicle guide is not merely a gallery. It should explain when a vehicle becomes relevant, what
            parts can change it, where a player can obtain those parts and how the car fits different race
            modes once those details are verifiable.
          </p>
          <p>
            Customization is currently the strongest confirmed area around the Heatwarped cars system. Sealime
            explicitly highlights deep customization on Steam and rare car parts on the official site. That
            gives this guide a firm base even before a final roster is published. Future car pages can document
            customization categories as they are observed in the demo, then separate visual changes from
            performance upgrades so players can see whether a part affects appearance, handling, acceleration
            or another system.
          </p>

          <h2>How the demo should be used to verify Heatwarped cars</h2>
          <p>
            The demo is the next source that should be used to expand the roster. A reliable Heatwarped cars
            audit should record the exact in-game names shown in menus, the number of selectable vehicles, any
            unlock conditions, part names and performance values visible on screen. It should also capture the
            demo date or build because early content can change. Until that audit is complete, this page uses
            “roster pending verification” instead of filling the table with speculative entries.
          </p>
          <p>
            The same rule applies to “all cars,” “best car” and tier-list searches. A ranking is only useful if
            the underlying roster and performance data are real. It is tempting to publish a best-car page the
            moment a new racing game trends, but that creates a fragile answer based on an incomplete build.
            The Heatwarped cars database will add rankings after there is enough repeatable data to compare
            vehicles in the same conditions.
          </p>

          <h2>Are the cars licensed?</h2>
          <p>
            Sealime’s public Steam description does not currently answer that question. The safest wording is
            that licensing status is not confirmed in the primary sources reviewed here. Players may recognize
            silhouettes or design cues, but the Heatwarped cars guide will not convert resemblance into a
            licensing claim. If Sealime publishes manufacturer partnerships, a press-kit roster or explicit
            model names, those can be added with a direct source.
          </p>

          <h2>What customization is confirmed?</h2>
          <p>
            Yes, cars can be customized. Deep customization and rare car parts are both explicitly part of the
            official description. What is not yet documented by those primary sources is the complete set of
            upgrade slots, part tiers or tuning variables. The wiki will separate confirmed upgrade categories
            from player testing. That creates a cleaner path for later pages about engines, nitrous, handling,
            visual parts or tuning if those systems are present and verifiable.
          </p>
          <p>
            This page is also designed to avoid a common problem on new-game sites: copying a list from a
            community database and treating it as authoritative. Community databases can be excellent discovery
            tools, but a source-first wiki should be able to explain where every factual row came from. For the
            Heatwarped cars list, the preferred evidence order is an official roster, an in-game menu captured
            from the demo, an official Sealime video or post, and only then a clearly labeled community lead.
          </p>

          <h2>How the final car database will work</h2>
          <p>
            Once the roster is verified, this page can become a real database. Filters should cover demo
            availability, acquisition method, performance role and customization status. Individual vehicles
            can receive their own pages only when there is enough unique information to justify them. A page
            with a name and one screenshot is thin; a page with unlock method, stats, upgrades, race use,
            visual options and sourcing is useful.
          </p>
          <p>
            For now, the practical answer is straightforward. Heatwarped cars are central to the game, deep
            customization and rare parts are officially confirmed, but Sealime has not published a complete
            official car list in the first-party sources reviewed for this version of the wiki. If you are
            looking for an exact roster today, treat any unsourced list cautiously. This page will prioritize
            verified in-game names over guesses and expand as soon as the demo roster is documented.
          </p>

          <h2>Heatwarped cars FAQ</h2>
          <Faq items={faq} />

          <SourceList sources={[OFFICIAL_SOURCES.steam, OFFICIAL_SOURCES.site]} />
        </article>

        <SideRail
          status={[
            ['Roster', 'Not fully published'],
            ['Customization', 'Confirmed'],
            ['Rare parts', 'Confirmed'],
            ['Licensing', 'Not confirmed'],
          ]}
          links={[
            { to: '/demo', label: 'Heatwarped Demo' },
            { to: '/system-requirements', label: 'System Requirements' },
            { to: '/release-date', label: 'Release Date' },
          ]}
        />
      </div>
    </>
  );
}
