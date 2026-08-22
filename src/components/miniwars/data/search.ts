export type SearchItem = { href: string; type: string; title: string; description: string };

export const SEARCH_ITEMS: SearchItem[] = [
  {
    "href": "/buildings#farmhouse",
    "type": "Building",
    "title": "Farmhouse · ECO-01",
    "description": "Resource · Tier C · The starter resource node. Generates a slow trickle of crops that you sell at the Clerk's Shop for your first cash injection. Replace it the moment you can afford a real factory — never hoard farmhouses."
  },
  {
    "href": "/buildings#wheat-farm",
    "type": "Building",
    "title": "Wheat Farm · ECO-02",
    "description": "Resource · Tier C · Bigger, faster wheat output than the Farmhouse. The backbone of your first 5 minutes — but a dead end past Mid game. The only correct move once your economy stabilises is to sell it and rebuild on the slot."
  },
  {
    "href": "/buildings#carrot-farm",
    "type": "Building",
    "title": "Carrot Farm · ECO-03",
    "description": "Resource · Tier B · Carrots sell for noticeably more than wheat. The moment a Carrot Farm slot is open, take it — it scales income faster than stacking more Wheat Farms ever will."
  },
  {
    "href": "/buildings#wood-plant",
    "type": "Building",
    "title": "Wood Plant · IND-01",
    "description": "Production · Tier B · The transition out of pure crops and into industry. Wood is a reliable mid-tier sell on the Market and the prerequisite mindset shift for everything that comes after — factories beat farms."
  },
  {
    "href": "/buildings#workshop",
    "type": "Building",
    "title": "Workshop · INF-01",
    "description": "Production · Tier S · Each Workshop adds a builder to your roster. More builders means everything in your country goes up faster, including military buildings during wartime. The first Workshop is the single highest-impact purchase in the entire early game."
  },
  {
    "href": "/buildings#storage-center",
    "type": "Building",
    "title": "Storage Center · INF-02",
    "description": "Production · Tier S · Auto-collects production from every nearby factory and farm. Place it in the middle of your industrial cluster and you stop wasting time clicking. The hidden multiplier on every building you own."
  },
  {
    "href": "/buildings#houses",
    "type": "Building",
    "title": "Houses · POP-01",
    "description": "Population · Tier A · Each House you own raises your civilian cap. More civilians means more factory throughput, which means more money, which means more military. Houses are the silent backbone of every successful run."
  },
  {
    "href": "/buildings#clerks-shop",
    "type": "Building",
    "title": "Clerk's Shop · MKT-01",
    "description": "Utility · Tier A · Your sell point. Crops, wood, and steel turn into money here — but only at the price the Market is offering right now. Learning to time the Clerk's Shop is the single biggest skill ceiling in the game and a multiplier on every other building you own."
  },
  {
    "href": "/buildings#worker-statue",
    "type": "Building",
    "title": "Worker Statue · BUF-01",
    "description": "Utility · Tier A · A flat speed buff for every worker in radius. Place it next to your factory cluster and watch every farm and plant tick noticeably faster. Most new players never build one. They should."
  },
  {
    "href": "/buildings#nuclear-reactor",
    "type": "Building",
    "title": "Nuclear Reactor · ECO-08",
    "description": "Economy · Tier S · The economic milestone that signals you have officially graduated from farms. Reliable, dense, high-throughput income. If you have at least two of these running, you are in the top half of every server you join."
  },
  {
    "href": "/buildings#data-center",
    "type": "Building",
    "title": "Data Center · ECO-09",
    "description": "Economy · Tier S · Returns rival Nuclear Reactors in raw output, with a slightly different consumption profile. Running both is intentional — they smooth income variance and remove the Market timing tax."
  },
  {
    "href": "/buildings#black-hole-generator",
    "type": "Building",
    "title": "Black Hole Generator · ECO-MAX",
    "description": "Economy · Tier S · The highest income source in Mini War. A single Black Hole Generator outpaces a stack of Reactors. The endgame flex — and the only econ building worth defending with your full military."
  },
  {
    "href": "/buildings#border-tower",
    "type": "Building",
    "title": "Border Tower · DEF-01",
    "description": "Defense · Tier B · A flat early-game guard against opportunistic raiders. Will not stop a real military push, but will make solo invaders think twice — and that is enough during the first 10 minutes."
  },
  {
    "href": "/buildings#barracks",
    "type": "Building",
    "title": "Barracks · MIL-01",
    "description": "Military · Tier A · In Mini Wars the Barracks is a dual-purpose building: it produces civilians on a passive timer (the real backbone of your population) and it can also train those civilians into ground soldiers when war breaks out. Skipping the Barracks does not just delay your military — it caps your entire economy, because no civilians means no factory throughput."
  },
  {
    "href": "/buildings#soldier-statue",
    "type": "Building",
    "title": "Soldier Statue · BUF-02",
    "description": "Utility · Tier A · The military counterpart of the Worker Statue. Inspires nearby troops to deal more damage in defensive engagements. A must-have for anyone holding a chokepoint."
  },
  {
    "href": "/buildings#tank-base",
    "type": "Building",
    "title": "Tank Base · MIL-04",
    "description": "Military · Tier A · Ground armor for territory raids. Tanks are the workhorse of any invasion plan that does not lean entirely on aircraft. Slower than air, but cheaper, tougher, and harder to counter."
  },
  {
    "href": "/buildings#air-base",
    "type": "Building",
    "title": "Air Base · Black Hawks · MIL-05",
    "description": "Military · Tier S · Black Hawks deployed from the Air Base are the single strongest invasion tool in the current build. Fast, lethal against most defended bases, and the core of every winning offensive composition."
  },
  {
    "href": "/buildings#missile-launcher",
    "type": "Building",
    "title": "Missile Launcher · MIL-06",
    "description": "Military · Tier S · High-damage long-range fire support. Missile Launchers are what turn a Black Hawk wave from a skirmish into an actual conquest. Run them in pairs — one alone gets sniped before it does enough damage."
  },
  {
    "href": "/buildings#oil-rig",
    "type": "Building",
    "title": "Oil Rig · IND-04",
    "description": "Production · Tier A · A heavy-industry production node. Oil sells reasonably well on the Market, but its real value is as the upstream input for your military complex. Skipping the Oil Rig caps how many late-game units you can field at once, no matter how much money you stockpile."
  },
  {
    "href": "/buildings#steel-mill",
    "type": "Building",
    "title": "Steel Mill · IND-03",
    "description": "Production · Tier A · Refines raw inputs into Steel — the prerequisite material for every advanced military building, from Tank Bases to Missile Launchers. Without a Steel Mill in your chain, your military caps out at Barracks and Border Towers."
  },
  {
    "href": "/buildings#bunker",
    "type": "Building",
    "title": "Bunker · DEF-02",
    "description": "Defense · Tier A · A hardened defensive structure that can garrison soldiers and absorb significantly more damage than a Border Tower. The Bunker is the difference between losing your civilians on the first raid and watching the attacker break themselves on your perimeter."
  },
  {
    "href": "/strategy#economy-first",
    "type": "Strategy",
    "title": "Economy First",
    "description": "Economy First · Beginner · The path of least resistance and the highest ceiling. Skip military entirely until your income is producing real cash, then transition into a meta Air Base + Missile Launcher comp once you can afford to lose units. Almost every long-term winner runs some flavor of this plan."
  },
  {
    "href": "/strategy#air-rush",
    "type": "Strategy",
    "title": "Air Rush · Black Hawk Strike",
    "description": "Military Rush · Intermediate · Sacrifice late-game ceiling for mid-game dominance. Skip the Carrot Farm pivot, push straight into Wood Plants and Houses, then race the lobby to the first Air Base. The first player with Black Hawks owns the next ten minutes."
  },
  {
    "href": "/strategy#turtle-defense",
    "type": "Strategy",
    "title": "Turtle Defense",
    "description": "Turtle Defense · Intermediate · Out-survive the rushers, then collect the late-game prize. Heavy emphasis on Border Towers, Soldier Statues, Missile Launchers as defensive pieces, and Houses tucked deep behind your wall. Slower start, near-impossible to break once stable."
  },
  {
    "href": "/strategy#late-game-scaling",
    "type": "Strategy",
    "title": "Late-Game Scaling · Black Hole Path",
    "description": "Late-Game Scaling · Advanced · The endgame strategy — build for the longest possible run, target a Black Hole Generator, dominate by sheer income compound. Requires reading the lobby correctly: this build dies to an early Air Rush, but crushes everything once it stabilises."
  },
  {
    "href": "/strategy#balanced-frontier",
    "type": "Strategy",
    "title": "Balanced Frontier",
    "description": "Balanced · Beginner · No-frills middle path. Some economy, some defense, eventually some military. Will not top a leaderboard, will not crash and burn either. The best plan when you do not yet know your lobby."
  },
  {
    "href": "/strategy#conquest-snowball",
    "type": "Strategy",
    "title": "Conquest Snowball · Predator Path",
    "description": "Military Rush · Advanced · A predator build. The plan is not to outscale the lobby — it is to feed on it. Hit a single Air Base + 2 Missile Launcher timing, capture the weakest player, retrofit their slots into Reactors, then immediately re-arm and strike the next. Each conquest compounds your income multiplier; three captures and you are uncatchable."
  },
  {
    "href": "/strategy#population-engine",
    "type": "Strategy",
    "title": "Population Engine · Industrial Empire",
    "description": "Late-Game Scaling · Intermediate · A population-first build that treats Civilians as the gating resource. Every other player is income-capped by their Houses; you are not. Stack Houses + Barracks early, run a thick Wood/Steel/Oil chain in the mid game, and arrive at the Reactor + Data Center timing with double the factory throughput of anyone else in the lobby."
  },
  {
    "href": "/systems#economy",
    "type": "System",
    "title": "Economy (ECON)",
    "description": "The cash and resource pipeline that powers everything else. Crops feed the Clerk's Shop, factories feed the Market, and the Market feeds your military. A bad economy is a short run — every successful Mini Wars game starts here. The pipeline runs in three layers: Resource (farms, oil) → Production (Wood Plant, Steel Mill, Reactors) → Sale (Clerk's Shop / Market)."
  },
  {
    "href": "/systems#market",
    "type": "System",
    "title": "Market &amp; Pricing (MKT)",
    "description": "A live commodity market that re-prices crops, wood, and steel every couple of minutes. Selling into a dip burns 10–20% of your income invisibly. Selling into a surge prints money. The single biggest skill ceiling in the game lives here."
  },
  {
    "href": "/systems#military",
    "type": "System",
    "title": "Military (MIL)",
    "description": "Your conversion of civilians + steel into ground, air, and missile units. Infantry is a placeholder — Black Hawks from the Air Base, backed by Missile Launchers, is the dominant offensive composition in the current build."
  },
  {
    "href": "/systems#conquest",
    "type": "System",
    "title": "Conquest &amp; Expansion (CNQ)",
    "description": "Invading other players' territory grants a permanent income multiplier and adds civilians to your roster. Stacking conquests is the real engine behind late-game wealth — the gap between a mid-tier finish and a top-place run is almost always how many countries got captured."
  },
  {
    "href": "/systems#generals",
    "type": "System",
    "title": "Generals (GEN)",
    "description": "Specialised commander units that buff specific military compositions and provide unique abilities during invasions. Generals stack their bonuses with statues and structure-level upgrades — the right General can flip a 50/50 invasion into a clean win. Community footage shows Generals appearing as named hero units that lead a stack of standard troops, with both passive auras and a triggerable active."
  },
  {
    "href": "/systems#population",
    "type": "System",
    "title": "Population &amp; Civilians (POP)",
    "description": "Civilians are the silent currency behind every other system. Houses set the cap, the Barracks fills it, and every factory you own depletes it as it runs. Mismanaging your population means starved factories and an army you cannot recruit. Most beginners hit a wall here long before they hit a money wall."
  },
  {
    "href": "/systems#country-design",
    "type": "System",
    "title": "Country Design &amp; Land Expansion (LAND)",
    "description": "Mini Wars gives every player a private country plot that you build out grid-by-grid. The shape and size of that plot is itself a strategic resource: more land means more buildings, but bigger countries are harder to defend. Buying additional land tiles is a real lever — most experienced players expand twice in the early-mid game and once again before the late push."
  },
  {
    "href": "/guides#beginner-opening-guide",
    "type": "Guide",
    "title": "Beginner Opening Guide: Your First 10 Minutes",
    "description": "A step-by-step opening for new Mini War players — the right buildings in the right order, the one purchase that beats every other, and the trap that kills most first runs."
  },
  {
    "href": "/guides#economy-first-build-order",
    "type": "Guide",
    "title": "Economy-First Build Order — From Farmhouse to Black Hole",
    "description": "The full economy-first arc: how to bootstrap from a single Farmhouse into a Nuclear Reactor + Data Center skeleton, and what the long-haul Black Hole Generator path actually looks like."
  },
  {
    "href": "/guides#air-rush-conquest-playbook",
    "type": "Guide",
    "title": "Air Rush Conquest Playbook — Black Hawks + Missiles",
    "description": "The mid-game power spike that turns the lobby on its head. When to commit to the Air Base, how to time your first invasion, and why two Missile Launchers always beats three."
  },
  {
    "href": "/guides#turtle-defense-mini-wars-guide",
    "type": "Guide",
    "title": "Turtle Defense Guide — How to Survive an Aggressive Lobby in\n                    Mini Wars",
    "description": "A full defensive playbook for Mini Wars: how to read aggression early, the cheapest perimeter that actually holds, and the counter-pivot that turns survivors into conquerors."
  },
  {
    "href": "/guides#mini-wars-conquest-snowball-strategy",
    "type": "Guide",
    "title": "Mini Wars Conquest Strategy — How to Snowball Multipliers\n                    Across the Map",
    "description": "Conquering one country is easy. Conquering three before anyone fights back is a strategy. The full snowball playbook: target selection, invasion timing, and the multiplier math that wins lobbies."
  },
  {
    "href": "/guides#mini-wars-late-game-scaling-guide",
    "type": "Guide",
    "title": "Mini Wars Late-Game Scaling Guide — Reactors, Data Centers,\n                    and the Black Hole Generator",
    "description": "The endgame skeleton in detail: when each Reactor pays back, how Data Centers smooth income variance, and the realistic path to a working Black Hole Generator."
  },
  {
    "href": "/guides#mini-wars-air-base-meta-guide",
    "type": "Guide",
    "title": "Mini Wars Air Base Meta Guide — Why Black Hawks Run the\n                    Lobby",
    "description": "A deep look at the dominant military structure in Mini Wars. Air Base mechanics, Black Hawk pathing, supporting comps, and the exact counter package every defender needs."
  },
  {
    "href": "/guides#mini-wars-economy-mistakes-to-avoid",
    "type": "Guide",
    "title": "Mini Wars Economy Mistakes — 10 Habits That Quietly Lose You\n                    the Round",
    "description": "The silent income leaks that bleed mid-tier Mini Wars players: hoarding farms, late Storage Centers, mistimed Market sells, and the one Workshop decision that warps your entire run."
  },
  {
    "href": "/codes",
    "type": "Codes",
    "title": "NO ACTIVE CODES YET",
    "description": "Code · No codes have been released by the developers yet."
  },
  {
    "href": "/faq",
    "type": "FAQ",
    "title": "What is Mini War on Roblox?",
    "description": "Mini War is a strategy game on Roblox where you build your own country, grow an economy, train an army, and invade other players to conquer their territory. You start with a starter farm, scale into factories and industry, then transition into a military to expand across the map."
  },
  {
    "href": "/faq",
    "type": "FAQ",
    "title": "What is the most important building to buy first?",
    "description": "The Workshop. Each Workshop you own adds a builder, which speeds up every other building on your base — including military structures during wartime. Most beginners skip it and lose huge amounts of tempo. Buy your first Workshop before your second income source."
  },
  {
    "href": "/faq",
    "type": "FAQ",
    "title": "How do I make money fast in Mini War?",
    "description": "Three rules: (1) replace old buildings with better ones — never hoard farmhouses; (2) time the Market — never sell into a -10% dip, hold for two minutes and sell on the next surge; (3) prioritise income upgrades like the Carrot Farm, then transition to Nuclear Reactors and Data Centers for serious cash flow."
  },
  {
    "href": "/faq",
    "type": "FAQ",
    "title": "When should I start building a military?",
    "description": "Not before your economy is stable. The most common new-player mistake is rushing military before income is set. Once you have a steady civilian-driven cash flow, build an Air Base (for Black Hawks) backed by Missile Launchers — that combo is the dominant offensive composition in the current build."
  },
  {
    "href": "/faq",
    "type": "FAQ",
    "title": "What is the best army composition?",
    "description": "Air Base with Black Hawks plus Missile Launchers, optionally backed by a Tank Base for ground support. Two Air Bases and two Missile Launchers is the canonical Mini War invasion stack. The Soldier Statue adds a free damage buff to nearby military units, so always include one in your offensive cluster."
  },
  {
    "href": "/faq",
    "type": "FAQ",
    "title": "Are there any Mini War codes right now?",
    "description": "No — the developers have not released any official codes yet, but they have confirmed codes are coming soon. A dedicated #codes channel is being prepared in the official Discord. Redemption will most likely live at the bottom of the in-game shop or in Settings once the next update ships. Check our Codes page for live updates."
  }
];
