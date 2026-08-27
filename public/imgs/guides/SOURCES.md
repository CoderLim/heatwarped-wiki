# Heatwarped guide stills — provenance

Downloaded and hosted locally for wiki guide pages. Do **not** hotlink SteamCDN or third-party CDNs from page components.

**Retrieved:** 2026-08-27  
**Steam app:** [4846360](https://store.steampowered.com/app/4846360/Heatwarped/) via `https://store.steampowered.com/api/appdetails?appids=4846360`  
**Preferred Media Kit:** Official link on [heatwarped.com](https://heatwarped.com/) → OneDrive share (`1drv.ms/...`). Anonymous API/browser download returned **401/403** (auth-walled); no Media Kit binaries included in this set.

| File | Source | Notes |
| --- | --- | --- |
| `ratfield-city-night.webp` | Steam store screenshot `ss_aa6a9086…` (app 4846360, screenshot index 1). Full JPG from SteamCDN → converted to WebP (`cwebp -q 85`). | Night city still: red car at **MOUZE** gas station / wet street. Covers city atmosphere for `/map/` and related pages. |
| `pda-map.webp` | Crop of in-race circular mini-map from Steam screenshot `ss_87b106…` (index 4; same source frame as `race-hud-circuit.webp`). | **Not** a dedicated full-screen PDA/map UI. Closest official still after checking all 11 Steam screenshots and sampling Reveal Trailer HLS frames (~90s). Media Kit unavailable. Replace if a full PDA still appears later. |
| `race-hud-circuit.webp` | Steam store screenshot `ss_87b106…` (index 4). SteamCDN JPG → WebP. | Race HUD: speedometer, position list, neon turn arrows, rear-view, circular mini-map. Same frame catalogued on the cars page as `unknown/03-purple-ai-racer.jpg` (thumbnail); this is the full store still. |
| `garage-body-kit.webp` | Steam store screenshot `ss_9e7c00a0…` (index 2). SteamCDN JPG → WebP. | Garage **Body Kit** customization UI (Muira). Same shot as existing `public/imgs/cars/muira-garage.jpg`; re-hosted under `guides/` for guide pages. |
| `demo-open-world.webp` | Steam store screenshot `ss_0e737eb1…` (index 0). SteamCDN JPG → WebP. | Open-world / key-art style still: customized red car + Ratfield skyline at night (no HUD). |

## Not used (checked)

| Candidate | Result |
| --- | --- |
| Official Media Kit (OneDrive) | Link present on heatwarped.com; download blocked without Microsoft auth. |
| Reveal Trailer (`youtu.be/q7t6_ff8mlg` / Steam HLS) | Sampled frames; city/race cinematic stills only — no clearer full PDA/map UI than Steam `ss_87b106…` mini-map. |
| MSX review (`youtube.com/watch?v=-EQWpdzdopw`) | Not required once Steam stills covered city / race / garage / open-world. |
| `public/videos/heatwarped-hero-bg-poster.jpg` | Available as fallback city night still; Steam full-res screenshots preferred. |
| `public/imgs/cars/unknown/*.jpg` | Already Steam-derived thumbnails; full-res store screenshots preferred for guides. |

## Credit / caption guidance

- Label as **Steam store screenshot** (or “cropped from Steam race HUD”) — not Sealime Media Kit / press kit unless replaced later.
- Do not present trailer frames or HUD crops as confirmation of unreleased full-game features beyond what the official Steam listing states.
