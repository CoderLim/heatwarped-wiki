import { ArrowRight } from 'lucide-react';

import { OFFICIAL_SOURCES, SourceList } from '@/components/heatwarped/site';

const guides = [
  {
    to: '/cars',
    num: '01',
    title: 'Heatwarped Cars',
    text: 'Verified car-system facts, roster status, customization evidence, and the rules used before a vehicle enters the database.',
  },
  {
    to: '/demo',
    num: '02',
    title: 'Heatwarped Demo',
    text: 'Where to download the public demo, what it can prove today, and which full-game features still need in-build verification.',
  },
  {
    to: '/release-date',
    num: '03',
    title: 'Release Date',
    text: 'The official TBA status, confirmed platform information, and a source-first timeline that avoids guessed launch windows.',
  },
  {
    to: '/system-requirements',
    num: '04',
    title: 'PC Specs',
    text: 'Minimum and recommended hardware, Authentic versus Enhanced targets, and the developer’s processor-dependence warning.',
  },
] as const;

export function HomePage() {
  return (
    <>
      <section className="hw-hero">
        <div className="hw-topbar-inner">
          <div className="hw-hero-grid">
            <div>
              <div className="hw-eyebrow">Live archive · August 2026 · Ratfield</div>
              <h1 className="hw-title">
                Heatwarped
                <span className="outline">Wiki</span>
              </h1>
              <p className="hw-lede">
                The source-first Heatwarped Wiki for cars, the playable demo, release status, PC requirements,
                Ratfield, customization, race systems, and every detail that can be verified without turning
                early-game speculation into fact.
              </p>
              <div className="hw-actions">
                <a className="hw-btn" href="/demo">Open demo guide <ArrowRight size={15} /></a>
                <a className="hw-btn secondary" href="/cars">Browse cars</a>
              </div>
              <div className="hw-stats" aria-label="Current wiki status">
                <div className="hw-stat"><strong>LIVE</strong><span>Steam demo</span></div>
                <div className="hw-stat"><strong>TBA</strong><span>Full release</span></div>
                <div className="hw-stat"><strong>PC</strong><span>Steam confirmed</span></div>
                <div className="hw-stat"><strong>1 GB</strong><span>Current storage</span></div>
              </div>
            </div>
            <div className="hw-panel hw-status-panel">
              <div className="hw-panel-kicker">Database · verified first-party status</div>
              <div className="hw-status-list">
                {[
                  ['D', 'Access', 'Demo available'],
                  ['R', 'Release', 'To be announced'],
                  ['C', 'Setting', 'Ratfield'],
                  ['S', 'Developer', 'Sealime'],
                ].map(([code, label, value]) => (
                  <div className="hw-status-row" key={label}>
                    <div className="hw-status-code">{code}</div>
                    <div>
                      <div className="hw-status-label">{label}</div>
                      <div className="hw-status-value">{value}</div>
                    </div>
                    <span className="hw-status-dot" aria-hidden />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hw-section">
        <div className="hw-topbar-inner">
          <div className="hw-section-head">
            <div>
              <div className="hw-section-kicker">Start here · core database</div>
              <h2>Heatwarped Wiki guides</h2>
            </div>
            <p className="hw-section-desc">
              Built like a modern reference database, skinned like a 2000s street-racing menu. Every launch page
              answers one high-intent question and links back to the official evidence.
            </p>
          </div>
          <div className="hw-card-grid">
            {guides.map((guide) => (
              <a className="hw-card" href={guide.to} key={guide.to}>
                <div className="hw-card-num">FILE // {guide.num}</div>
                <h3>{guide.title}</h3>
                <p>{guide.text}</p>
                <div className="hw-card-arrow">Open file →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="hw-section">
        <div className="hw-topbar-inner hw-article-layout">
          <article className="hw-article">
            <div className="hw-section-kicker">Reference overview · primary keyword: Heatwarped Wiki</div>
            <h2>What is Heatwarped?</h2>
            <p>
              <strong>Heatwarped Wiki</strong> is an unofficial, source-first reference for Heatwarped, the
              open-world arcade street racing game from Sealime. The goal of this Heatwarped Wiki is simple:
              separate what the developer has actually announced from what players are guessing, then organize
              the confirmed information into useful pages about the demo, cars, release timing, system
              requirements, Ratfield, customization and future updates. Heatwarped is still early, so a good
              wiki should not pretend that every detail is already known.
            </p>
            <p>
              Heatwarped is set in the 2000s and centers on an underground racing scene in Ratfield. According
              to the official Steam description, players can customize their ride, meet racers through a PDA
              racing forum, compete and build respect. The official Heatwarped site expands that picture with
              a large environment that runs from the city into the outskirts, multiple race modes, hidden
              secrets, rare car parts and online challenges. This Heatwarped Wiki treats those first-party
              pages as the baseline for every guide.
            </p>
            <div className="hw-callout cyan">
              Current verified snapshot: the public demo is live on Steam; the full release is still marked
              <strong> To be announced</strong>; Steam confirms PC requirements; Ratfield, deep customization,
              rare car parts and online challenges are described on first-party pages.
            </div>

            <h2>Why the demo matters now</h2>
            <p>
              The most important fact right now is that the Heatwarped demo is available. Steam lists a
              downloadable demo even though the full game is not yet available. That makes the demo the best
              current source for hands-on questions, while the Steam store and Heatwarped website remain the
              strongest source for features that Sealime has publicly committed to. As the demo changes, the
              Heatwarped Wiki will distinguish current demo behavior from full-game plans.
            </p>
            <p>
              Heatwarped is described by Sealime as an open-world arcade street racing game rather than a
              simulation. The official store copy emphasizes adrenaline driving, deep customization, rich
              environments and a soundtrack built around night driving and racing. Ratfield is not only a
              backdrop: the official website describes a wide area spanning a sparkling city and outskirts,
              while the Steam summary places an underground racing culture under the city’s surface.
            </p>
            <p>
              That combination gives the Heatwarped Wiki several natural information hubs. The Heatwarped Wiki is organized around those recurring player questions, and each Heatwarped Wiki hub is designed to grow only when new evidence adds real utility. The Cars section
              tracks what is officially known about the vehicle roster and car progression. The Demo section
              explains what can be verified right now and clearly marks details that still require in-game
              confirmation. The Release Date section tracks the current “To be announced” status without
              inventing a window. The System Requirements section turns Valve’s store specifications into a
              practical PC checklist.
            </p>

            <h2>Cars, customization, and what is still unknown</h2>
            <p>
              Heatwarped cars are one of the biggest questions around the game, but Sealime has not published
              a complete official model list in the first-party sources reviewed for this launch. Rather than
              fill the Heatwarped Wiki with guessed real-world identifications, the cars page records only
              confirmed car-system facts and leaves the roster open until names can be verified from the game
              itself or an official source. What is confirmed is substantial: the game promises deep
              customization, rare car parts and the ability to refresh and develop a ride.
            </p>
            <p>
              The official Heatwarped site also says players can compete online in extraordinary challenges,
              while the Steam feature panel currently labels the product as Single-player and Family Sharing.
              Those two first-party surfaces are not identical. The Heatwarped Wiki will not flatten that
              discrepancy into an unsupported claim that multiplayer is already playable. Instead, the current
              reading is that online competition is part of the game’s published plan, while Steam’s present
              store feature flags do not yet advertise multiplayer.
            </p>

            <h2>PC requirements are already unusually specific</h2>
            <p>
              For PC players, the Heatwarped Wiki has unusually concrete information. The minimum target is
              Windows 10 64-bit, an AMD FX 8320 or Intel Core i5-3570K, 4 GB RAM, a GTX 960 or Radeon HD 7970,
              DirectX 11 and 1 GB of storage. Sealime associates that specification with 1080p at 30 fps using
              the “Authentic” graphics mode. The recommended target is Windows 11 64-bit, a Ryzen 5 5500 or
              Core i5-12400F, 8 GB RAM and a GTX 1070 or RX 5600 XT for 1080p at 60 fps in “Enhanced” mode.
            </p>
            <p>
              One unusually useful note on the official store page is that Heatwarped is heavily
              processor-dependent. That means a PC guide should not focus only on GPU tiers. The Heatwarped
              Wiki system requirements page explains why an older graphics card can still be paired with a
              comparatively demanding CPU target and why CPU load should be part of troubleshooting when frame
              rate is inconsistent.
            </p>

            <h2>How this Heatwarped Wiki verifies information</h2>
            <p>
              The Heatwarped demo gives this site a chance to build better pages than a generic announcement
              article. A mature game wiki is useful because it answers narrow questions quickly, preserves
              update context and links related systems together. A player reading about cars should be able to
              jump to customization and demo coverage. A player checking the Heatwarped release date should
              immediately see that a demo is available today. A player checking PC specs should see which
              graphics presets Sealime names.
            </p>
            <p>
              This Heatwarped Wiki follows a verification rule. First-party sources are preferred: the Steam
              store, the official Heatwarped website and official Sealime videos or posts. If a fact comes only
              from the playable demo, the page should say that it was verified in the demo and ideally record
              the demo build or date. Community observations can be useful leads, but they are not presented
              as official facts until they can be checked. That matters especially for car names, hidden
              locations, race lists and planned features.
            </p>
            <p>
              Because Heatwarped has only just been revealed, some of the most valuable answers are “not
              officially confirmed yet.” A useful Heatwarped Wiki should make those gaps visible rather than
              hide them behind confident filler. There is currently no official full release date on Steam.
              There is no complete official car roster in the primary sources reviewed here. Steam currently
              exposes Single-player as a feature even though the official game site advertises online
              competition. These are the exact boundaries a reliable early-game reference should preserve.
            </p>

            <h2>Visual direction: Y2K street-racing database</h2>
            <p>
              The site design follows the same principle. Instead of copying a military codex theme literally,
              the Heatwarped Wiki uses the information-dense layout of a database and re-skins it as a 2000s
              street-racing archive: asphalt-black surfaces, cyan instrumentation, acid-green status signals,
              orange heat accents, sharp cut corners, condensed display type and faint grid lines. The effect
              should feel like an old tuning-game menu rebuilt with modern readability.
            </p>
            <p>
              The Heatwarped Wiki home page is designed as a hub rather than a wall of news. Start with
              Heatwarped cars if you want the state of the roster and customization facts. Open the Heatwarped
              demo guide if you want to know what is downloadable now and what the demo can prove. Check the
              Heatwarped release date page for official launch status. Use Heatwarped system requirements
              before installing on an older PC.
            </p>

            <h2>What comes next</h2>
            <p>
              As Sealime publishes updates, this Heatwarped Wiki can expand into Ratfield locations, race
              modes, customization parts, secrets, car-by-car pages, performance tuning and patch coverage.
              The structure is ready for that growth, but pages will be added when there is enough verifiable
              material to make them useful. That keeps the site closer to a living reference than a collection
              of thin SEO pages.
            </p>
            <p>
              If you are arriving because Heatwarped has just started appearing in search or social feeds, the
              short version is this: Heatwarped is a 2000s-set open-world arcade street racer by Sealime, a
              demo is available now, the full release date is still to be announced, Ratfield is the main
              setting, car customization and rare parts are core systems, and the official site advertises
              online challenges. The Heatwarped Wiki organizes those facts into focused guides and will update
              them as the game develops.
            </p>
            <p>
              That source-first workflow is the core promise of this <strong>Heatwarped Wiki</strong>. Search
              demand will move faster than official documentation, but the site should remain useful precisely
              because it does not turn every early claim into a permanent answer.
            </p>

            <SourceList sources={[
              OFFICIAL_SOURCES.steam,
              OFFICIAL_SOURCES.site,
              OFFICIAL_SOURCES.trailer,
            ]} />
          </article>

          <aside className="hw-side">
            <div className="hw-side-card">
              <h3>Quick facts</h3>
              <ul>
                <li><strong>Developer:</strong> Sealime</li>
                <li><strong>Publisher:</strong> Sealime</li>
                <li><strong>Genre:</strong> Racing</li>
                <li><strong>Setting:</strong> Ratfield, 2000s</li>
                <li><strong>Release:</strong> TBA</li>
                <li><strong>Demo:</strong> Available on Steam</li>
              </ul>
            </div>
            <div className="hw-side-card">
              <h3>Evidence policy</h3>
              <p>Official site / Steam → official video or post → demo observation → clearly labeled community lead.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
