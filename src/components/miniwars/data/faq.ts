export type FaqItem = { category: string; question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    "category": "Gameplay",
    "question": "What is Mini War on Roblox?",
    "answer": "Mini War is a strategy game on Roblox where you build your own country, grow an economy, train an army, and invade other players to conquer their territory. You start with a starter farm, scale into factories and industry, then transition into a military to expand across the map."
  },
  {
    "category": "Gameplay",
    "question": "What is the most important building to buy first?",
    "answer": "The Workshop. Each Workshop you own adds a builder, which speeds up every other building on your base — including military structures during wartime. Most beginners skip it and lose huge amounts of tempo. Buy your first Workshop before your second income source."
  },
  {
    "category": "Economy",
    "question": "How do I make money fast in Mini War?",
    "answer": "Three rules: (1) replace old buildings with better ones — never hoard farmhouses; (2) time the Market — never sell into a -10% dip, hold for two minutes and sell on the next surge; (3) prioritise income upgrades like the Carrot Farm, then transition to Nuclear Reactors and Data Centers for serious cash flow."
  },
  {
    "category": "Military",
    "question": "When should I start building a military?",
    "answer": "Not before your economy is stable. The most common new-player mistake is rushing military before income is set. Once you have a steady civilian-driven cash flow, build an Air Base (for Black Hawks) backed by Missile Launchers — that combo is the dominant offensive composition in the current build."
  },
  {
    "category": "Military",
    "question": "What is the best army composition?",
    "answer": "Air Base with Black Hawks plus Missile Launchers, optionally backed by a Tank Base for ground support. Two Air Bases and two Missile Launchers is the canonical Mini War invasion stack. The Soldier Statue adds a free damage buff to nearby military units, so always include one in your offensive cluster."
  },
  {
    "category": "Codes",
    "question": "Are there any Mini War codes right now?",
    "answer": "No — the developers have not released any official codes yet, but they have confirmed codes are coming soon. A dedicated #codes channel is being prepared in the official Discord. Redemption will most likely live at the bottom of the in-game shop or in Settings once the next update ships. Check our Codes page for live updates."
  },
  {
    "category": "Economy",
    "question": "How do I get more civilians?",
    "answer": "Build more Houses. Each House raises your civilian cap, and civilians staff your factories. Cluster Houses in a residential zone separate from your factory cluster, and hide them well — civilians lost in an invasion stay lost for the rest of the round."
  },
  {
    "category": "Gameplay",
    "question": "How does conquering other countries work?",
    "answer": "When you successfully invade another player's territory, you gain a permanent money multiplier and additional civilians. Multipliers compound across multiple conquests, which is why late-game wealth comes from stacking captures. You can also expand your own base by purchasing more land — do this before you feel cramped."
  },
  {
    "category": "Gameplay",
    "question": "What is the Storage Center for?",
    "answer": "The Storage Center auto-collects production from every factory and farm in its radius. Place it in the centre of your industrial cluster and you stop wasting time clicking individual buildings. It is the single most under-rated building in Mini War, especially for new players."
  },
  {
    "category": "Economy",
    "question": "Why is the Market price changing?",
    "answer": "Material prices in Mini War swing on a short rotating cycle — surges and dips of 10–20% are routine. Selling on a dip burns income invisibly. Hold your inventory in a Storage Center, watch the price ticker, and sell on a surge. Once you scale, this single skill is worth more than any extra factory."
  },
  {
    "category": "Technical",
    "question": "Can I play Mini War on mobile?",
    "answer": "Yes. Mini War runs on every platform that supports Roblox — iOS, Android, PC, Xbox. Cross-play is on by default. Performance on lower-end mobile devices can suffer in busy lobbies; lowering Roblox graphics quality in settings helps."
  },
  {
    "category": "Account",
    "question": "Do I lose my progress if I leave or change devices?",
    "answer": "Progress is tied to your Roblox account, not the device. Logging back into the same Roblox account on any platform restores your country, buildings, and resources. However, in-round progress is tied to that lobby — leaving a lobby ends the run for your country in that server."
  },
  {
    "category": "Codes",
    "question": "How do I get a free Oil Rig in Mini Wars?",
    "answer": "Joining the official Mini Wars Roblox group grants a free Oil Rig as a head-start reward, currently active for new accounts in the Live Build. The Oil Rig is a mid-tier industrial building that produces Oil — a key supporting resource for late-game military and industrial chains. Look for the group join prompt on the Roblox game page."
  },
  {
    "category": "Military",
    "question": "What does the Bunker actually do?",
    "answer": "The Bunker is a hardened defensive structure that garrisons soldiers from your Barracks and absorbs significantly more damage than a Border Tower. It is the difference between losing your civilians on the first raid and watching the attacker break themselves on your perimeter. Place Bunkers at the chokepoints of your country, garrison them with trained soldiers, and pair with a Soldier Statue inside the radius for a free damage buff."
  },
  {
    "category": "Military",
    "question": "How do Generals work in Mini Wars?",
    "answer": "Generals are specialised commander units unlocked progressively as your country reaches development milestones (population + military thresholds). Each General provides a passive aura (e.g. air damage, ground speed, defensive radius) plus an active ability on cooldown. They lead a stack of regular troops during invasions rather than replacing them. Match your General to your military comp — air-buff Generals on Air Rush, ground-buff on Tank pushes — and keep one home on defense once your Reactors go up."
  },
  {
    "category": "Gameplay",
    "question": "Can I expand the size of my country?",
    "answer": "Yes. You can purchase additional land tiles to enlarge your country plot, with the cost scaling as you expand further. More land means more building slots, but stretches your defensive coverage thinner. Most experienced players expand twice in the early-mid game and once again before the late-game push. Expand once you start running out of slots, not once you feel cramped — waiting kills tempo."
  },
  {
    "category": "Economy",
    "question": "Why is my Barracks so important if I am playing peacefully?",
    "answer": "Because the Barracks is your primary civilian production source, not just a military building. It recruits civilians on a passive timer up to the cap set by your Houses, and those civilians staff every factory you own. Skipping the Barracks does not just delay your military — it caps your entire economy. During peacetime, leave the Barracks on civilian production; only switch to soldier training when invasion is on the table."
  },
  {
    "category": "Gameplay",
    "question": "How do I win a round of Mini War?",
    "answer": "There are two practical win conditions: outlast everyone via the highest passive income (the economy-first route, finishing on Nuclear Reactors and ideally a Black Hole Generator), or stack conquests for compounding multipliers (the Air Rush route — Black Hawks plus Missile Launchers into back-to-back invasions). New players should default to economy-first: it has the highest ceiling and the lowest skill floor."
  },
  {
    "category": "Gameplay",
    "question": "What should I build in the first 60 seconds?",
    "answer": "Farmhouse → Workshop → second income building (Wheat Farm or Carrot Farm if unlocked). The Workshop must come before any third building because each Workshop adds a builder, which compounds for the rest of the round. Skipping it is the single most expensive mistake a new player can make."
  },
  {
    "category": "Gameplay",
    "question": "I keep getting invaded in the first 5 minutes — what am I doing wrong?",
    "answer": "You are almost certainly missing perimeter cover. Place at least one Border Tower at the front of your country before minute 4, and add a Soldier Statue inside its radius. If a specific player has flagged you as a target, also drop a Bunker on the chokepoint and rotate any spare soldiers from your Barracks into it. Defense is cheap; losing civilians is not."
  },
  {
    "category": "Gameplay",
    "question": "Can I play Mini War solo or do I need a group?",
    "answer": "Mini War is fully playable solo — every lobby is a free-for-all of independent countries, and there is no forced team mode. Playing with friends in the same server lets you coordinate non-aggression pacts informally, but the game does not have a formal alliance system, so trust is on the honor code."
  },
  {
    "category": "Gameplay",
    "question": "Is there PvE in Mini War or is it always PvP?",
    "answer": "It is always PvP — every other country in the lobby is another player. There are no NPC enemies, raid bosses, or scripted invasions. The pressure on your defenses comes entirely from human aggression, which is why reading the lobby (who is rushing, who is turtling) matters more than min-maxing your build order in isolation."
  },
  {
    "category": "Economy",
    "question": "Carrot Farm or Wheat Farm — which is actually better?",
    "answer": "Carrot Farm. It produces a higher-value crop with better income per slot than the Wheat Farm and is the standard upgrade once you can afford it. Build one or two Wheat Farms only as a stepping stone in the first 3 minutes; replace them with Carrot Farms or Wood Plants as soon as you have the cash. The slot is more valuable than the safe building."
  },
  {
    "category": "Economy",
    "question": "Do I really need a Storage Center?",
    "answer": "Yes. The Storage Center auto-collects production from every farm and factory in its radius and is the most under-rated building in Mini War. Without one, you spend the whole round clicking individual buildings; with one, your income runs in the background while you focus on the Market and your defenses. Place it in the centre of your factory cluster before you build a third factory, not after."
  },
  {
    "category": "Economy",
    "question": "When does the Nuclear Reactor become worth building?",
    "answer": "When your civilian-driven income from Carrot Farms, Wood Plants, and Houses is stable and you have at least two Workshops to build it quickly. Practically, that is around minute 15–20 in most lobbies. Building a Reactor earlier than that starves your economy because you skip the Wood Plant tier that bridges into it. Always defend a fresh Reactor with a Border Tower and a Soldier Statue before it finishes."
  },
  {
    "category": "Economy",
    "question": "How many Houses should I build?",
    "answer": "Enough so your Barracks is never civilian-capped — usually 3 to 5 by mid-game and 6 to 8 by late game. The mistake new players make is over-building Houses early; the Barracks recruits on a timer, so extra population cap you cannot fill yet is wasted slot space. Add Houses one at a time, only when your civilian count visibly maxes against the cap."
  },
  {
    "category": "Economy",
    "question": "Should I sell old buildings or keep them?",
    "answer": "Sell them. Every Wheat Farm you keep into the mid-game is a slot that could be holding a Wood Plant or a Reactor. The refund covers a meaningful chunk of the upgrade, and the new building pays back the rest within a couple of minutes. Hoarding old buildings is the most common silent income leak in Mini War."
  },
  {
    "category": "Military",
    "question": "Black Hawks or Tanks — which is the dominant unit right now?",
    "answer": "Black Hawks from the Air Base, supported by Missile Launchers. Tanks from the Tank Base remain useful as ground support and for taking territory after the Black Hawks soften a target, but pure-tank pushes are out-traded by any opponent with two Missile Launchers up. The current canonical comp is two Air Bases plus two Missile Launchers, optionally with one Tank Base for follow-up."
  },
  {
    "category": "Military",
    "question": "When should I build my first Air Base?",
    "answer": "After your economy is stable but before any rival starts their own — typically minute 10–14 in a normal lobby. Earlier than that, you starve your income; later than that, you let the lobby aggressor snowball uncontested. The Air Base is a tempo building: its value collapses if you build it reactively after someone has already invaded you."
  },
  {
    "category": "Military",
    "question": "How many Missile Launchers do I actually need?",
    "answer": "Two. The third Missile Launcher has noticeably worse return than the second, because the first two already cover most invasion vectors and the third just stacks redundant range. The Mini War community shorthand is \"two Missiles always beats three\" — the slot is better spent on a Soldier Statue or a Bunker."
  },
  {
    "category": "Military",
    "question": "Is the Bunker worth it if I have Border Towers?",
    "answer": "Yes — they do different jobs. Border Towers are perimeter screens with light damage; Bunkers are hardened garrisons that absorb significantly more damage and let your Barracks soldiers actually fight from cover. One Bunker on each chokepoint, with a Soldier Statue inside its aura, is the standard defensive package once you start running Reactors."
  },
  {
    "category": "Military",
    "question": "Can I attack and defend at the same time?",
    "answer": "Not effectively. Mini War invasions commit your military stack to the target; while it is in transit, your home base is at minimum garrison. Always leave at least one Bunker, two Border Towers, and a small Barracks reserve at home before launching, and ideally one defensive General with a defense aura. Greedy attacks that empty home defense are how Air Rush players lose to a counter-invasion."
  },
  {
    "category": "Codes",
    "question": "How do I redeem Mini War codes when they release?",
    "answer": "The developers have confirmed redemption will go live in a future update, most likely as a code box at the bottom of the in-game shop or inside the Settings menu. No third-party site or external redemption page is supported — codes will be entered in-game only. Track our Codes page for the moment they ship and the exact UI location."
  },
  {
    "category": "Codes",
    "question": "Are leaked or third-party Mini War codes safe to use?",
    "answer": "No active codes exist yet, so anything circulating right now is either a guess, a fake, or an attempt to harvest your Roblox login. Never enter your Roblox credentials on any non-Roblox site that claims to grant Mini War rewards. Real codes will be announced in the official Discord and the in-game banner first."
  },
  {
    "category": "Codes",
    "question": "How do I claim the free Oil Rig from the group?",
    "answer": "Open the Mini Wars Roblox group page, click Join, then re-launch the game. The free Oil Rig is granted on your next round start as a placeable building in your inventory — you still have to choose where to put it. If it does not appear, leave the round and rejoin once; the reward triggers on lobby load."
  },
  {
    "category": "Codes",
    "question": "Do codes expire?",
    "answer": "Roblox strategy games typically rotate codes alongside major updates, so most Mini War codes — once they launch — will expire within a few weeks. Redeem every code as soon as you see it; saving codes for later is the most common way new players lose rewards. Our Codes page marks expiry status as soon as a code goes inactive."
  },
  {
    "category": "Codes",
    "question": "Will codes give military units or just economy boosts?",
    "answer": "Based on the developer roadmap, the first batch of Mini War codes is expected to be cosmetic and economy-side rewards — currency boosts, free starter buildings, and possibly civilian top-ups. Direct military unit grants are unlikely on launch because they would warp the early-game balance. We will update the Codes page with exact reward types the moment the first code ships."
  },
  {
    "category": "Account",
    "question": "Can I play Mini War with friends in the same lobby?",
    "answer": "Yes. Use the standard Roblox party feature: have one player launch the game, then friends join via your profile or a shared server link. There is no formal alliance system, so once in-lobby you are independent countries — friendly play is enforced by mutual agreement only."
  },
  {
    "category": "Account",
    "question": "Does Mini War sync between PC and mobile?",
    "answer": "Yes — your country progression, unlocks, and group rewards (such as the free Oil Rig) are tied to your Roblox account, not the device. Switch from PC to mobile mid-day and your account state will resume on the next round start. Note that an active in-round game does not transfer; leaving a lobby ends that run."
  },
  {
    "category": "Account",
    "question": "Is there an official Mini War Discord?",
    "answer": "Yes. The official Mini War Discord is the primary place for patch announcements, the upcoming codes channel, and developer Q&A. The invite link is posted on the Roblox game page; do not trust Discord links from random in-game chat, as impersonation servers are common in Roblox strategy games."
  },
  {
    "category": "Account",
    "question": "How do I report a bug or exploit?",
    "answer": "Use the bug-reports channel inside the official Mini War Discord. Include your Roblox username, the round timestamp, the device you were on, and a short clip if possible. Exploits should never be posted publicly — DM a moderator instead so the team can patch quietly without spreading the abuse."
  },
  {
    "category": "Account",
    "question": "Can I refund Robux spent in Mini War?",
    "answer": "Robux purchases are governed by Roblox, not the Mini War devs. Standard Roblox refund policy applies: you can request a refund through Roblox support within their published window, and only for unused purchases. The Mini War team cannot grant refunds, but they can investigate accidental gifts in the Discord."
  },
  {
    "category": "Technical",
    "question": "Why is Mini War lagging or stuttering for me?",
    "answer": "Three usual suspects: late-game lobbies with many large bases tax even mid-range devices; particle-heavy military fights amplify it; and Roblox graphics auto-quality often picks too high a tier on mid mobile devices. Lower Roblox graphics quality to 3–5, close other apps, and avoid the busiest servers if you are on mobile."
  },
  {
    "category": "Technical",
    "question": "I got disconnected mid-round — can I rejoin?",
    "answer": "You can rejoin the same lobby if it is still alive and not full, but your country state inside that lobby may have been wiped depending on how long you were out. Long disconnections (over a couple of minutes) typically cost you the round. Account-level progression (group rewards, unlocks) is not affected."
  },
  {
    "category": "Technical",
    "question": "What are the minimum specs to play Mini War smoothly?",
    "answer": "Anything that runs Roblox at 30 FPS will run Mini War, but for smooth late-game lobbies aim for: a 2019-or-newer mid-range phone, a 2017-or-newer iPad, or any modern PC. The bottleneck is late-game particle and unit count during invasions, not the early base-builder phase."
  },
  {
    "category": "Technical",
    "question": "Does Mini War support controller on Xbox or PC?",
    "answer": "Yes — Mini War inherits Roblox controller support, including Xbox controllers paired to PC. The base-builder UI is fully navigable with a controller, though high-APM moments (Market-timing, mid-invasion repositioning) are noticeably easier on touch or mouse-and-keyboard."
  },
  {
    "category": "Technical",
    "question": "Why do my buildings sometimes finish slower than expected?",
    "answer": "Build speed is gated by your active builder count, which is set by how many Workshops you own. If a build seems slow, you are almost certainly running on one builder while the in-game tooltip assumed you would have two. Add a second Workshop and most \"slow\" builds resolve themselves."
  }
];
