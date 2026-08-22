import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';

import '@/styles/heatwarped.css';

export type HeatwarpedPageKey = 'home' | 'cars' | 'demo' | 'release-date' | 'customization';

type Source = { label: string; url: string; note: string; authority: 'Official' | 'Reference' | 'Community' };
type Section = { title: string; body: ReactNode };

type PageData = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  primaryKeyword: string;
  updated: string;
  sections: Section[];
  sources: Source[];
};

const steamUrl = 'https://store.steampowered.com/app/4846360/Heatwarped/';
const officialX = 'https://x.com/Heatwarped';

const commonSources: Source[] = [
  { label: 'Heatwarped on Steam', url: steamUrl, note: 'Primary store listing for developer, publisher, release status, tags and demo availability.', authority: 'Official' },
  { label: 'Heatwarped on X', url: officialX, note: 'Official project account used for launch and demo announcements.', authority: 'Official' },
  { label: 'IGCD Heatwarped entry', url: 'https://igcd.net/', note: 'Specialist vehicle database that has already opened a Heatwarped entry; useful as a cross-check, not as an official source.', authority: 'Reference' },
  { label: 'r/pcgaming reveal discussion', url: 'https://www.reddit.com/r/pcgaming/comments/1vus168/heatwarped_official_reveal_trailer/', note: 'Community observations from players who tried the demo. Claims here are treated as observations, not official facts.', authority: 'Community' },
];

const pages: Record<HeatwarpedPageKey, PageData> = {
  home: {
    eyebrow: 'UNOFFICIAL STREET-RACING DATABASE // LIVE BUILD',
    title: 'HEATWARPED',
    accent: 'WIKI',
    description: 'A source-first Heatwarped Wiki covering the demo, cars, customization, release status and verified discoveries without pretending rumors are facts.',
    primaryKeyword: 'Heatwarped Wiki',
    updated: 'August 22, 2026',
    sources: commonSources,
    sections: [
      {
        title: 'What this Heatwarped Wiki is for',
        body: <>
          <p>The <strong>Heatwarped Wiki</strong> is built for the unusual first days of a new game, when interest can rise faster than reliable information. Heatwarped appeared with a reveal trailer, an immediately playable Steam demo and a visual identity that made players compare it with the street-racing games of the early 2000s. That creates a lot of search demand, but it also creates a lot of copied claims. This site takes the opposite approach: every important statement should be traceable to the official Steam listing, the official Heatwarped account, the game itself, or a clearly labeled community observation.</p>
          <p>The goal of the <strong>Heatwarped Wiki</strong> is not to look complete before the game is complete. It is to become accurate first. You will therefore see some entries marked as unconfirmed, some catalog tables that deliberately leave a field blank, and some pages that explain what is not known yet. That is intentional. A new-game wiki is most useful when readers can tell the difference between what Sealime has published, what the demo proves, and what players are merely guessing from screenshots.</p>
          <p>At launch, the <strong>Heatwarped Wiki</strong> focuses on the topics with the strongest player intent: the Heatwarped demo, Heatwarped cars, Heatwarped customization and the Heatwarped release date. Those topics are also the foundation for future pages about individual vehicles, upgrade categories, race events, map locations and settings. When official information expands, the database can expand without rewriting its basic structure.</p>
        </>
      },
      {
        title: 'Heatwarped at a glance',
        body: <>
          <p>Heatwarped is listed on Steam as a racing game developed and published by Sealime. The store metadata currently presents its release date as <strong>To be announced</strong>, while the free demo is already available. Third-party Steam metadata trackers categorize it around arcade racing, retro presentation, score attack and single-player play. The <strong>Heatwarped Wiki</strong> treats Steam as the authority whenever release status or platform information conflicts with articles elsewhere.</p>
          <div className="hw-fact-grid">
            <Fact label="Developer" value="Sealime" />
            <Fact label="Publisher" value="Sealime" />
            <Fact label="Release" value="To be announced" />
            <Fact label="Demo" value="Available on Steam" />
          </div>
          <p>The immediate community reaction matters because it explains why the game is attracting attention, but it should not be confused with official positioning. Players repeatedly describe the demo as reminiscent of Need for Speed Underground-era racing, especially its night-city atmosphere, light trails, arcade handling and customization focus. That comparison is useful context for readers, yet this <strong>Heatwarped Wiki</strong> does not present Heatwarped as an official Need for Speed product or imply any relationship with Electronic Arts.</p>
        </>
      },
      {
        title: 'What is confirmed right now',
        body: <>
          <p>The safest confirmed facts are simple. Heatwarped has a public Steam store page. Sealime is shown as developer and publisher. A demo is live. The full release is not yet dated on the Steam listing. The project has an official social account posting about the demo. Those facts form the stable layer of the <strong>Heatwarped Wiki</strong>.</p>
          <p>The demo also gives the site a second evidence layer: things that can be verified directly in the playable build. Community players have already discussed the driving feel, world presentation, graphics options and customization, but the <strong>Heatwarped Wiki</strong> will only upgrade a community observation to a verified gameplay fact after it can be reproduced or documented from footage, screenshots or a reliable transcript. This distinction becomes especially important for car names, exact upgrade effects, race counts and control mappings.</p>
          <p>Some news posts are already publishing very specific claims about car counts, licensed brands, multiplayer and release windows. Those details are not repeated here unless they can be tied back to an official source. New-game SEO often rewards speed, but a <strong>Heatwarped Wiki</strong> that ranks with wrong information becomes harder to repair later. Accuracy is part of the product.</p>
        </>
      },
      {
        title: 'Where to start in the wiki',
        body: <>
          <p>If you have not played yet, start with the <Link to="/demo">Heatwarped Demo</Link> page. It explains what the demo is useful for, which information can be verified from it and which full-game questions remain open. If your main interest is the vehicle roster, use <Link to="/cars">Heatwarped Cars</Link>. The cars page is intentionally conservative about real-world inspirations because fictionalized designs can resemble multiple production cars and community guesses should not become fake canon.</p>
          <p>For players interested in tuning, the <Link to="/customization">Heatwarped Customization</Link> page separates visual customization from performance-related claims and records the evidence standard used for each category. If you are trying to find out when the game launches, the <Link to="/release-date">Heatwarped Release Date</Link> page gives the current official status, explains why several dates circulating online should be treated carefully, and lists the signals that would count as a real release-date announcement.</p>
          <p>These pages are deliberately interconnected. Mature game wikis work well because an entity appears in context: a vehicle links to its upgrades, an upgrade links to a guide, and a guide links back to the relevant system. The <strong>Heatwarped Wiki</strong> is using that model from day one instead of publishing isolated SEO articles that cannot grow into a real reference site.</p>
        </>
      },
      {
        title: 'How sources are graded',
        body: <>
          <p>The <strong>Heatwarped Wiki</strong> uses three visible source grades. <strong>Official</strong> means the Steam store, Sealime, or the official Heatwarped account. <strong>Reference</strong> means a specialist database or reputable publication that can help cross-check a detail but does not define canon. <strong>Community</strong> means player reports, Reddit discussions and other first-hand observations that may be valuable but can be wrong or build-specific.</p>
          <p>This grading solves a common problem with early wikis. A Reddit user may correctly identify a graphics option or discover a useful workaround, while an article may confidently publish a future feature that was never promised. Instead of pretending all citations are equal, the <strong>Heatwarped Wiki</strong> shows readers where each layer comes from. When a community detail is later confirmed by Sealime, its source grade can be upgraded.</p>
          <p>The same rule applies to video. A reveal trailer can prove that a visual, menu or vehicle appears on screen, but it may not prove the feature is present in the public demo or final game. If a future official YouTube video contains spoken details that cannot be verified from its title and description, the <strong>Heatwarped Wiki</strong> will use a transcript before turning those statements into guide content.</p>
        </>
      },
      {
        title: 'Why the visual design looks like a racing database',
        body: <>
          <p>This site keeps the information density and strong grid system of the original tactical-codex template, but the skin has been shifted toward an early-2000s street-racing database. The palette uses asphalt black, cold cyan, acid-lime highlights and hot orange rather than military green. Condensed display type, speed-line accents, scanner grids and dashboard-like cards create the feeling of a garage terminal without making long-form wiki text difficult to read.</p>
          <p>That balance matters for the <strong>Heatwarped Wiki</strong>. A pure Y2K recreation would be memorable but could become noisy, image-heavy and hard to scan. A generic white documentation theme would be readable but would throw away the game’s strongest cultural signal. The chosen direction is roughly seventy percent modern reference site and thirty percent nostalgic street-racing interface.</p>
          <p>As the <strong>Heatwarped Wiki</strong> grows, vehicle cards can become the main visual unit: image, in-game name, class, drivetrain, demo availability and verification state. Customization pages can use part-category chips and before/after captures. Map and event pages can use the same bordered telemetry panels. The visual system is therefore not just decoration; it is designed around the information the wiki will eventually need to hold.</p>
        </>
      },
      {
        title: 'What comes next',
        body: <>
          <p>The next high-value expansion is evidence from the demo itself. A complete capture of menus, vehicle selection, upgrade screens, event markers and settings would let the <strong>Heatwarped Wiki</strong> replace cautious placeholders with original structured data. That is more defensible than copying another wiki because the site becomes a first-hand reference.</p>
          <p>After the core pages are verified, the natural expansion order is individual car pages, a complete controls page, graphics and performance settings, map locations, event types, a beginner guide and an FAQ built from recurring search queries. Thin pages will be avoided until there is enough information to make each one genuinely useful. The <strong>Heatwarped Wiki</strong> is meant to compound as Heatwarped develops, not peak on announcement day.</p>
        </>
      }
    ]
  },
  cars: {
    eyebrow: 'GARAGE INDEX // VERIFIED VEHICLE RECORDS',
    title: 'HEATWARPED',
    accent: 'CARS',
    description: 'Heatwarped Cars guide: what is confirmed about the vehicle roster, fictional brands, demo cars, verification standards and how the complete car list will be documented.',
    primaryKeyword: 'Heatwarped Cars',
    updated: 'August 22, 2026',
    sources: [commonSources[0], commonSources[2], { label: 'r/needforspeed demo discussion', url: 'https://www.reddit.com/r/needforspeed/comments/1vuw744/heatwarped_is_really_promising_even_feels_a_bit/', note: 'Player discussion about the demo vehicle designs and whether real-world brands are licensed. Community evidence only.', authority: 'Community' }],
    sections: [
      { title: 'Heatwarped Cars: current status', body: <>
        <p><strong>Heatwarped Cars</strong> are already one of the most discussed parts of the demo, but a complete official vehicle roster has not yet been published in a form this wiki can verify. That is important because several early articles and comments identify vehicles by real-world manufacturer names even though the designs shown by players appear to use fictionalized identities. Until Sealime publishes an official car list, this page records only what can be verified from the Steam page, the demo and specialist vehicle references.</p>
        <p>The safest way to think about <strong>Heatwarped Cars</strong> today is as an evolving catalog. The game clearly centers cars and street-racing customization, and IGCD has already opened a Heatwarped entry, which signals that vehicle-identification communities are cataloging the game. However, a specialist database is still not the developer. Our car pages will therefore distinguish the in-game name from any community-suggested real-life inspiration.</p>
        <Callout title="No guessed canon">A car that resembles a Nissan, Mazda, Toyota or another recognizable model will not be labeled as that real car unless the game or developer confirms it. “Visual inspiration” and “official identity” are separate fields.</Callout>
      </> },
      { title: 'How the Heatwarped car list will work', body: <>
        <p>Each <strong>Heatwarped Cars</strong> record is designed to answer the questions players actually search: What is the in-game name? Is the car playable in the demo? Is it a starter option? What drivetrain does the game state? Which customization categories are available? What performance values are shown? Where is the car acquired? Does the full game change any of those values?</p>
        <p>The catalog will use a verification badge beside every field. “Official” means the value comes from Sealime or the Steam listing. “Demo verified” means the value is visible in the current public demo. “Community lead” means a player has reported it but the wiki has not reproduced it yet. This makes <strong>Heatwarped Cars</strong> more useful than a simple gallery because readers can see whether a number or name is stable.</p>
        <div className="hw-table-wrap"><table className="hw-table"><thead><tr><th>Field</th><th>What we record</th><th>Evidence required</th></tr></thead><tbody><tr><td>In-game name</td><td>Name exactly as displayed</td><td>Demo capture or official media</td></tr><tr><td>Demo status</td><td>Playable / visible / unavailable</td><td>Current demo</td></tr><tr><td>Real-life inspiration</td><td>Clearly labeled comparison</td><td>Visual analysis, never presented as canon</td></tr><tr><td>Performance</td><td>Displayed stats and upgrade changes</td><td>Before/after capture</td></tr><tr><td>Acquisition</td><td>Starter, shop, unlock or unknown</td><td>Direct gameplay evidence</td></tr></tbody></table></div>
      </> },
      { title: 'Are Heatwarped Cars licensed real cars?', body: <>
        <p>At the moment, the <strong>Heatwarped Cars</strong> discussion is dominated by this question. Players on r/needforspeed have described the vehicles as fictional cars that resemble familiar real-world models. That is useful first-hand context, but it is still community evidence. We have not found an official Sealime statement declaring a licensing policy for the entire roster, so this wiki does not turn that discussion into a permanent fact.</p>
        <p>There is also a practical reason to stay precise. Games with fictional brands often combine cues from several vehicles, change proportions, or create original model families that only loosely reference real cars. Search traffic may reward a headline such as “all real cars in Heatwarped,” but it would be misleading if the game never names them that way. The <strong>Heatwarped Cars</strong> database will instead use language such as “community comparison” or “resembles” where appropriate.</p>
        <p>If Sealime later confirms official licenses, fictional brands, or partnerships, those statements will override community assumptions. This page will then become the index for separate manufacturer or in-game-brand pages.</p>
      </> },
      { title: 'Demo cars and starter cars', body: <>
        <p>The public demo is the best source for building the first reliable <strong>Heatwarped Cars</strong> list. Rather than copy numbers from an article, the preferred workflow is to record the vehicle-select screen from a fresh save, note every available starter choice, capture locked or preview-only vehicles, then revisit the garage after progression. This lets the wiki separate “present in game files or media” from “actually selectable in the demo.”</p>
        <p>Starter-car intent deserves its own field because it will become a major search cluster if the full game retains an opening choice. Players will want to know the best starter car, whether the choice is permanent, how quickly another car can be acquired and whether each starter favors grip, acceleration or drift. Those answers should come from controlled testing, not subjective first impressions. The <strong>Heatwarped Cars</strong> page is already structured so that test data can be added without changing the URL.</p>
        <p>Until the demo roster is fully captured, this wiki will not publish a fake “complete list.” An incomplete but verified list is better than an impressive table copied from an unverified article.</p>
      </> },
      { title: 'Performance, handling and upgrades', body: <>
        <p>Community demo impressions suggest that handling is intentionally arcade-oriented and can feel slide-heavy, but subjective handling comments are not performance data. For <strong>Heatwarped Cars</strong>, the useful information is measurable: displayed acceleration or speed bars, upgrade deltas, drivetrain labels if shown, gear behavior, and repeatable test results on the same route.</p>
        <p>Future individual <strong>Heatwarped Cars</strong> pages will separate stock values from modified values. That prevents a common wiki problem where a screenshot taken after upgrades gets presented as a base stat. If the game uses hidden handling classes or parts that alter grip, the test notes will record build version and setup. The demo is especially likely to change, so versioned evidence matters.</p>
        <p>Customization is linked but not identical to performance. Body kits, paint, lighting and other visual choices belong in the appearance section, while engine, forced induction, transmission, tires or other performance categories—if verified in game—belong in the performance section. The <Link to="/customization">Heatwarped Customization</Link> page tracks that system more broadly.</p>
      </> },
      { title: 'What we need to finish the Heatwarped Cars database', body: <>
        <p>The most valuable next source is not another article; it is a clean demo capture. A short recording or screenshot set of the garage, starter selection, car shop or vehicle menu would let the <strong>Heatwarped Cars</strong> database publish exact in-game names and availability with first-hand evidence. A transcript is only necessary if an official developer video verbally explains the roster or future licensing plans.</p>
        <p>Once those captures exist, this index can expand into one page per vehicle. That is where a wiki can outperform general gaming news: each <strong>Heatwarped Cars</strong> entry can hold screenshots, stock stats, customization compatibility, acquisition details, patch changes and source history in one stable URL.</p>
      </> }
    ]
  },
  demo: {
    eyebrow: 'PLAYABLE BUILD // STEAM DEMO',
    title: 'HEATWARPED',
    accent: 'DEMO',
    description: 'Heatwarped Demo guide with download status, what the demo can verify, current limitations, player observations and a checklist for evaluating the build.',
    primaryKeyword: 'Heatwarped Demo',
    updated: 'August 22, 2026',
    sources: [commonSources[0], commonSources[1], commonSources[3]],
    sections: [
      { title: 'Is the Heatwarped Demo available?', body: <>
        <p>Yes. The <strong>Heatwarped Demo</strong> is available through the official Steam page, and the official Heatwarped account announced that the demo is out. For a newly revealed indie racing game, that makes the demo the most important source on the site: it is not a promise about future gameplay, but a public build players can test now.</p>
        <p>Use the Steam store page linked in the Sources section rather than downloading a build from an unofficial mirror. The <strong>Heatwarped Demo</strong> is the reference point for our early guides, vehicle catalog and customization notes. Because demos can be patched independently of a full release, every tested claim should eventually include the date or build version when available.</p>
        <Callout title="Current official status">Demo: available. Full game: release date still listed as To be announced on Steam.</Callout>
      </> },
      { title: 'What the Heatwarped Demo is useful for', body: <>
        <p>The <strong>Heatwarped Demo</strong> can answer far more than “does the game feel good?” A structured playthrough can verify menu layout, supported input options, graphics settings, starter vehicle choices, visible upgrade categories, race or event types, map access and the exact terminology used by the game. Those details are ideal wiki material because they are searchable and can be reproduced.</p>
        <p>For example, players have already noted specific graphics behavior and a reflection update-rate option in community discussion. That is a strong lead, but the wiki should still capture the setting directly before publishing a complete graphics guide. The same applies to handling impressions. Multiple players compare the <strong>Heatwarped Demo</strong> with early-2000s arcade racers, yet “feels like Underground” is an opinion rather than a specification.</p>
        <p>The demo is also useful for spotting future content boundaries. If a menu shows locked categories, unavailable regions, cars that cannot yet be selected or upgrade slots that are disabled, those are meaningful observations. They should be labeled as demo-state evidence rather than promises that every locked item will ship in the final game.</p>
      </> },
      { title: 'What the demo does not prove about the full game', body: <>
        <p>A <strong>Heatwarped Demo</strong> is a snapshot, not a contract. It cannot by itself prove the final car count, final map size, final performance balance, multiplayer plans, console release plans or final release date. Some early articles are already publishing precise claims in those areas, but unless those claims point back to Sealime, they remain secondary reports.</p>
        <p>This distinction matters for SEO pages because demo observations are easy to overextend. Seeing several cars does not prove the complete roster. Seeing one race type does not prove the final mode list. Seeing a multiplayer-looking interface element would not prove online multiplayer is shipping. The <strong>Heatwarped Demo</strong> page will keep “verified in demo” and “announced for full game” as separate statuses.</p>
        <p>When the demo updates, old observations may also become outdated. A settings workaround or handling issue reported on August 22 could disappear in a later build. The wiki will therefore avoid absolute language for bugs unless a build identifier is known.</p>
      </> },
      { title: 'A useful first-play checklist', body: <>
        <p>If you are playing the <strong>Heatwarped Demo</strong> for the first time and want to understand the game rather than simply finish the available content, use a deliberate pass. First, open the settings before driving and note display, graphics, audio and control options. Second, inspect every vehicle-selection screen and record exact in-game names. Third, capture the garage and customization categories before buying or changing anything. Fourth, check the map for event icons, shops and locked areas. Finally, replay one route after changing a single performance variable so the effect can be isolated.</p>
        <p>That workflow is also how this wiki plans to produce original data. Mature guide sites often become valuable because they transform gameplay into structured reference material. The <strong>Heatwarped Demo</strong> is early enough that even basic documentation—exact menu labels, car names, settings and unlock requirements—can be more useful than a long opinion piece.</p>
        <p>If you encounter stutter, poor performance or controller issues, record hardware, API, resolution and settings before treating a workaround as universal. Community posts mention performance concerns, but the sample is too small for this site to publish a definitive optimization recipe yet.</p>
      </> },
      { title: 'Demo progression and save carry-over', body: <>
        <p>We have not found an official statement confirming whether <strong>Heatwarped Demo</strong> progress will transfer to the full game. Until Sealime says so, assume nothing. Save carry-over is a classic example of a search query where copying another site can create false expectations for players.</p>
        <p>When official information appears, this section will record exactly what transfers: money, cars, upgrades, event completion, settings, achievements or nothing at all. It will also distinguish automatic transfer from an optional import. For now, the answer is simply that full-release carry-over is unconfirmed by the sources reviewed for this page.</p>
        <p>The same caution applies to demo length. Players can finish available content at very different speeds, and a short public build may be expanded. Rather than claim an exact number of minutes, the <strong>Heatwarped Demo</strong> guide will eventually document objectives and content boundaries so readers can judge the scope themselves.</p>
      </> },
      { title: 'Community reaction to the Heatwarped Demo', body: <>
        <p>Early community reaction is strongly shaped by nostalgia. In r/pcgaming and related racing discussions, players repeatedly compare the <strong>Heatwarped Demo</strong> with Need for Speed Underground 1 and 2, Most Wanted and Carbon. Positive comments focus on the night-racing atmosphere, visual effects and the fact that it feels like a deliberate PS2-era throwback. Critical comments mention handling, music taste, performance and how closely the presentation resembles its inspirations.</p>
        <p>Those reactions are valuable because they reveal what prospective players want to know, not because they establish canon. This wiki uses community discussion to prioritize guides: cars, graphics, handling, customization and performance are clearly high-interest topics. Actual facts on those pages will still be sourced from the <strong>Heatwarped Demo</strong> itself or official information.</p>
      </> }
    ]
  },
  'release-date': {
    eyebrow: 'RELEASE TRACKER // OFFICIAL STATUS ONLY',
    title: 'HEATWARPED',
    accent: 'RELEASE DATE',
    description: 'Heatwarped Release Date tracker: the current official Steam status, why unverified dates conflict, and what counts as a confirmed launch announcement.',
    primaryKeyword: 'Heatwarped Release Date',
    updated: 'August 22, 2026',
    sources: [commonSources[0], commonSources[1], { label: 'GAMEDATA Steam metadata table', url: 'https://xiphosure.com/table_newgames.html', note: 'Independent metadata reference currently showing Heatwarped by Sealime with release set to To be announced.', authority: 'Reference' }],
    sections: [
      { title: 'What is the Heatwarped Release Date?', body: <>
        <p>The official <strong>Heatwarped Release Date</strong> is currently <strong>To be announced</strong>. That is the status shown in Steam metadata reviewed on August 22, 2026. Sealime has released a public demo, but a playable demo does not automatically mean the full game has a fixed launch day.</p>
        <p>This page intentionally gives a less exciting answer than some early news articles. Several secondary posts are already attaching windows or years to the project, and specialist databases may use placeholder years for cataloging. Unless Sealime or the official Steam listing publishes a date, those values are not treated as the confirmed <strong>Heatwarped Release Date</strong>.</p>
        <Callout title="Official answer">Heatwarped full release: To be announced. Heatwarped demo: available now on Steam.</Callout>
      </> },
      { title: 'Why different sites show different dates', body: <>
        <p>New game databases often need a sortable year even when a developer has not announced one. News writers may also infer a window from a trailer, press material, creator comment or store backend. That is why searching <strong>Heatwarped Release Date</strong> can produce apparently confident but conflicting answers during the announcement period.</p>
        <p>For this wiki, source hierarchy resolves the conflict. The Steam page and direct Sealime announcements outrank a database field. A specialist database can be useful for discovery, but it cannot create an official release date. A gaming article may contain original reporting, but if it gives a date without showing the developer source, the claim remains secondary. This approach prevents a placeholder from being copied until it looks official.</p>
        <p>The release tracker will change immediately when the official listing changes. Until then, “TBA” is not missing content—it is the accurate <strong>Heatwarped Release Date</strong> status.</p>
      </> },
      { title: 'Does the demo mean Heatwarped is close to release?', body: <>
        <p>Not necessarily. A demo can be used for marketing, public testing, festival participation, wishlists, feedback or proof of concept. The existence of the demo tells us that a playable slice is public; it does not tell us how complete the full production is. Therefore the <strong>Heatwarped Release Date</strong> should not be estimated from demo availability alone.</p>
        <p>What the demo does provide is a way to follow development signals. If Sealime patches the demo, adds new menus, publishes structured update notes or starts discussing launch content, those signals may indicate progress. They still do not become a date until the developer states one. The tracker will separate “development signal” from “release announcement” so readers can see movement without being misled.</p>
      </> },
      { title: 'What would count as confirmation?', body: <>
        <p>A confirmed <strong>Heatwarped Release Date</strong> should be supported by at least one first-party source: an updated Steam release field, a dated announcement from the official Heatwarped account, a Sealime announcement, or an official trailer/description that clearly states the launch date. Ideally two official surfaces will match.</p>
        <p>When that happens, this page will record the announcement date, launch date, time zone if provided, platform scope and whether the date refers to early access, version 1.0 or another release state. If the date changes, the old date will remain in a timeline rather than being silently erased. Release delays are useful historical information and help readers understand old search results.</p>
        <p>We will also distinguish a Steam release from any future console date. A single <strong>Heatwarped Release Date</strong> label can become misleading if platforms launch separately.</p>
      </> },
      { title: 'Heatwarped platforms at release', body: <>
        <p>Steam is the platform we can verify because the official store page and demo are live there. Some secondary articles mention additional platforms, but this tracker will not present them as confirmed launch platforms without first-party evidence. The same rule applies to Steam Deck verification, macOS and Linux support.</p>
        <p>Once platform information is official, the <strong>Heatwarped Release Date</strong> page will use a platform table rather than a single line. That allows a PC date, console date, demo status and compatibility status to remain distinct. It also prevents an article about a possible console version from accidentally turning into a promise that every platform launches simultaneously.</p>
      </> },
      { title: 'How to follow the release without rumor chasing', body: <>
        <p>The simplest method is to wishlist or follow Heatwarped on Steam and follow the official Heatwarped account. Those are the channels most likely to reflect a real <strong>Heatwarped Release Date</strong> announcement first. This wiki will mirror confirmed changes and preserve the source link.</p>
        <p>If a date appears on another site before it appears on Steam, check whether that site links to a Sealime statement. If it does not, treat the date as provisional. Early search results often reward specificity, but “we do not know yet” is more useful than a wrong countdown.</p>
      </> }
    ]
  },
  customization: {
    eyebrow: 'GARAGE SYSTEM // VISUAL + PERFORMANCE',
    title: 'HEATWARPED',
    accent: 'CUSTOMIZATION',
    description: 'Heatwarped Customization guide covering what the demo suggests, how visual and performance upgrades are documented, and which tuning claims still need direct verification.',
    primaryKeyword: 'Heatwarped Customization',
    updated: 'August 22, 2026',
    sources: [commonSources[0], commonSources[3], { label: 'r/BuiltFromTheGroundUp reveal discussion', url: 'https://www.reddit.com/r/BuiltFromTheGroundUp/comments/1vumaxj/heatwarped_official_reveal_trailer/', note: 'Player discussion after the reveal and demo, including comments about world, handling, visuals and customization. Community evidence.', authority: 'Community' }],
    sections: [
      { title: 'Heatwarped Customization overview', body: <>
        <p><strong>Heatwarped Customization</strong> is one of the systems players noticed immediately in the reveal and demo. Community reactions repeatedly mention garage customization as part of the game’s early-2000s street-racing appeal. The important wiki task now is to document the system precisely: which categories exist, which are cosmetic, which affect performance, what they cost, how they unlock and whether the demo exposes the same options planned for the full game.</p>
        <p>This guide does not assume every familiar street-racing upgrade exists just because Heatwarped evokes that era. Exact part categories will be added only when they are visible in the demo or named by Sealime. That keeps the <strong>Heatwarped Customization</strong> page useful as the build changes and avoids copying feature lists from games that inspired it.</p>
      </> },
      { title: 'Visual customization vs performance tuning', body: <>
        <p>The <strong>Heatwarped Customization</strong> database separates appearance from performance because players search them differently. Visual customization covers anything that changes how the vehicle looks without a demonstrated gameplay effect. Performance tuning covers parts or settings that measurably alter acceleration, speed, grip, gearing or another driving characteristic. A third category, “unknown effect,” is used when a part exists but its mechanical impact has not been tested.</p>
        <p>This sounds overly careful, but it prevents a common guide error. A game may use a wheel, tire, stance or body option that appears performance-related but functions cosmetically, or it may tie style progression to hidden scores. Rather than infer behavior, the wiki records what the interface says and what controlled tests show.</p>
        <div className="hw-table-wrap"><table className="hw-table"><thead><tr><th>Category</th><th>Status</th><th>How it will be verified</th></tr></thead><tbody><tr><td>Body / exterior</td><td>Needs full catalog capture</td><td>Garage screenshots</td></tr><tr><td>Paint / visual finish</td><td>Needs direct verification</td><td>Garage menu</td></tr><tr><td>Lighting / effects</td><td>Needs direct verification</td><td>Garage + night gameplay</td></tr><tr><td>Performance parts</td><td>Needs stat testing</td><td>Before/after values and route tests</td></tr><tr><td>Tuning settings</td><td>Unconfirmed as a complete system</td><td>Official UI or demo capture</td></tr></tbody></table></div>
      </> },
      { title: 'What the demo can reveal', body: <>
        <p>The demo can make the <strong>Heatwarped Customization</strong> guide substantially more authoritative than announcement coverage. A single systematic garage session can capture every category, price, unlock condition and preview. Recording the menu before and after progression can also show whether parts unlock by event completion, currency, reputation or another system.</p>
        <p>For performance upgrades, the best test is one variable at a time. Record the stock car’s displayed stats, install one part, record the new values, then run the same route under comparable conditions. If the game exposes transmission or handling adjustments, capture the default value before changing it. That makes future <strong>Heatwarped Customization</strong> recommendations reproducible instead of anecdotal.</p>
        <p>The demo may not expose the full customization tree. Any category that appears locked or incomplete will be labeled “demo-limited,” not “missing from full game.”</p>
      </> },
      { title: 'Cosmetic style and the early-2000s identity', body: <>
        <p>The cultural appeal of <strong>Heatwarped Customization</strong> is as important as raw upgrade depth. Players are responding to a specific era of arcade street racing: neon city lighting, exaggerated speed effects, modified tuner cars and menus that feel closer to PS2 racing games than modern minimalist interfaces. Heatwarped’s own visual identity is why the site design uses a garage-terminal aesthetic rather than a generic documentation theme.</p>
        <p>For the wiki, visual parts should eventually be documented with clean before-and-after images. A text list of body options is useful for search, but racing-game players also need to see the result. Each vehicle page can therefore link directly to compatible <strong>Heatwarped Customization</strong> categories and galleries without duplicating the entire guide.</p>
      </> },
      { title: 'How we will rank or recommend upgrades', body: <>
        <p>This site will not publish a “best <strong>Heatwarped Customization</strong> build” simply because the keyword exists. A recommendation needs a goal: fastest sprint time, easiest control, drift score, top speed, acceleration or a balanced beginner setup. Different goals can produce different best builds.</p>
        <p>Once the demo data is captured, guides can compare stock and upgraded cars on repeatable routes. If upgrades have diminishing returns, class restrictions or interaction effects, those will be documented. If balance changes after a patch, recommendations will be versioned. The aim is to make tuning pages work like a technical reference rather than an affiliate-style listicle.</p>
      </> },
      { title: 'What is still unconfirmed', body: <>
        <p>Several details often associated with street-racing games remain unconfirmed in the sources reviewed for this guide: the complete part count, the complete body-kit catalog, how many upgrade tiers exist, whether engine swaps are a formal system, whether decals or vinyl editors are present in the final scope, and whether any customization is tied to online features. Some secondary articles make specific claims, but this <strong>Heatwarped Customization</strong> page waits for first-party or direct demo evidence.</p>
        <p>If an official YouTube deep dive explains the garage verbally, a transcript would be valuable because spoken caveats—such as “planned,” “demo only,” or “still in development”—can change the meaning of a visual shown in the video. Until then, the demo itself is the best source.</p>
      </> }
    ]
  }
};

function Fact({ label, value }: { label: string; value: string }) {
  return <div className="hw-fact"><span>{label}</span><strong>{value}</strong></div>;
}

function Callout({ title, children }: { title: string; children: ReactNode }) {
  return <div className="hw-callout"><span className="hw-callout-title">{title}</span><div>{children}</div></div>;
}

function Header() {
  return <>
    <div className="hw-signal"><span>● SIGNAL · LIVE</span><span>STREET RACING // UNOFFICIAL CODEX</span></div>
    <header className="hw-header">
      <Link to="/" className="hw-brand" aria-label="Heatwarped Wiki home"><img src="/heatwarped-logo.svg" alt="Heatwarped Wiki" /></Link>
      <nav className="hw-nav" aria-label="Main navigation">
        <Link to="/cars" activeProps={{ className: 'active' }}>CARS</Link>
        <Link to="/demo" activeProps={{ className: 'active' }}>DEMO</Link>
        <Link to="/customization" activeProps={{ className: 'active' }}>CUSTOMIZATION</Link>
        <Link to="/release-date" activeProps={{ className: 'active' }}>RELEASE</Link>
      </nav>
      <a className="hw-steam" href={steamUrl} target="_blank" rel="noreferrer">STEAM ↗</a>
    </header>
  </>;
}

function Sources({ sources }: { sources: Source[] }) {
  return <section className="hw-sources" id="sources">
    <div className="hw-section-kicker">SOURCE LEDGER</div>
    <h2>Sources & verification</h2>
    <p className="hw-source-intro">Official sources define canon. Reference and community sources are used to discover leads or describe player reaction, and are labeled so they cannot be mistaken for developer confirmation.</p>
    <div className="hw-source-list">{sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="hw-source-card"><span className={`hw-source-grade ${source.authority.toLowerCase()}`}>{source.authority}</span><strong>{source.label}</strong><p>{source.note}</p><span className="hw-source-link">OPEN SOURCE ↗</span></a>)}</div>
  </section>;
}

function HomeDashboard() {
  return <div className="hw-dashboard">
    <div className="hw-dashboard-top"><span>DATABASE // BUILD 0.1</span><i /></div>
    <Link to="/demo" className="hw-dash-row"><span>01</span><div><small>PLAYABLE BUILD</small><strong>DEMO GUIDE</strong></div><b>↗</b></Link>
    <Link to="/cars" className="hw-dash-row"><span>02</span><div><small>GARAGE INDEX</small><strong>CAR DATABASE</strong></div><b>↗</b></Link>
    <Link to="/customization" className="hw-dash-row"><span>03</span><div><small>GARAGE SYSTEM</small><strong>CUSTOMIZATION</strong></div><b>↗</b></Link>
    <Link to="/release-date" className="hw-dash-row"><span>04</span><div><small>STATUS TRACKER</small><strong>RELEASE DATE</strong></div><b>↗</b></Link>
    <div className="hw-dashboard-foot">SOURCE-FIRST // NO GUESSED CANON</div>
  </div>;
}

export function HeatwarpedPage({ pageKey }: { pageKey: HeatwarpedPageKey }) {
  const page = pages[pageKey];
  const isHome = pageKey === 'home';
  return <div className="heatwarped-site">
    <Header />
    <main>
      <section className={`hw-hero ${isHome ? 'home' : ''}`}>
        <div className="hw-hero-copy">
          <div className="hw-eyebrow">{page.eyebrow}</div>
          <h1>{page.title}<br/><em>{page.accent}</em></h1>
          <p className="hw-lede">{page.description}</p>
          <div className="hw-actions"><a href="#intel" className="hw-primary">OPEN DATABASE →</a><a href="#sources" className="hw-secondary">VIEW SOURCES</a></div>
          <div className="hw-meta"><span>PRIMARY KEYWORD <strong>{page.primaryKeyword}</strong></span><span>UPDATED <strong>{page.updated}</strong></span></div>
        </div>
        {isHome ? <HomeDashboard /> : <div className="hw-side-card"><span className="hw-side-status">● VERIFIED-FIRST</span><strong>{page.primaryKeyword.toUpperCase()}</strong><p>Long-form reference page with official sources separated from community observations.</p><div className="hw-side-lines"><span>OFFICIAL SOURCE PRIORITY</span><span>DEMO EVIDENCE READY</span><span>RUMOR FILTER ACTIVE</span></div></div>}
      </section>

      <section id="intel" className="hw-content-shell">
        <aside className="hw-toc"><span>ON THIS PAGE</span>{page.sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}>{String(index + 1).padStart(2, '0')} {section.title}</a>)}<a href="#sources">99 Sources</a></aside>
        <article className="hw-article">
          {page.sections.map((section, index) => <section key={section.title} id={`section-${index + 1}`} className="hw-article-section"><div className="hw-section-kicker">INTEL {String(index + 1).padStart(2, '0')}</div><h2>{section.title}</h2>{section.body}</section>)}
          <Sources sources={page.sources} />
        </article>
      </section>
    </main>
    <footer className="hw-footer"><img src="/heatwarped-logo.svg" alt="Heatwarped Wiki"/><p>Unofficial fan reference. Not affiliated with Sealime. Heatwarped names and game assets belong to their respective owners.</p><a href={steamUrl} target="_blank" rel="noreferrer">OFFICIAL STEAM ↗</a></footer>
  </div>;
}

export const heatwarpedMeta: Record<HeatwarpedPageKey, { title: string; description: string }> = {
  home: { title: 'Heatwarped Wiki — Cars, Demo, Customization & Release Date', description: 'Heatwarped Wiki with source-verified guides for the demo, cars, customization and release date. Updated as Sealime publishes new information.' },
  cars: { title: 'Heatwarped Cars — Car List, Demo Vehicles & Garage Guide', description: 'Heatwarped Cars guide covering the verified vehicle roster, demo cars, fictional brands, performance data and how the complete car list is sourced.' },
  demo: { title: 'Heatwarped Demo — Steam Download, Content & Demo Guide', description: 'Heatwarped Demo guide: official Steam status, what the playable build includes, what it can verify, limitations and current player observations.' },
  'release-date': { title: 'Heatwarped Release Date — Official Status & Launch Tracker', description: 'Heatwarped Release Date tracker with the current official Steam status, source checks and a clear distinction between confirmed dates and rumors.' },
  customization: { title: 'Heatwarped Customization — Cars, Upgrades & Tuning Guide', description: 'Heatwarped Customization guide for visual car customization, performance upgrades, tuning evidence and demo-verified garage systems.' },
};
