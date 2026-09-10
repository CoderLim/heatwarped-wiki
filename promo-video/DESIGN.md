# Heatwarped Wiki Promo — Design Spec

Mode: **自主自由创作** · 2026-09-10

## 产品简报

| 项             | 定案                                                                    |
| -------------- | ----------------------------------------------------------------------- |
| 产品           | Heatwarped Wiki（heatwarped.wiki）— Sealime _Heatwarped_ 非官方粉丝百科 |
| 用途           | 社媒 / 落地页宣传片，引流 Steam Demo + 站点                             |
| 受众           | PC 街机开放世界赛车玩家，NFS Underground 时代情怀                       |
| 核心卖点       | 免费 Steam Demo 指引；发售/配置/玩法/车辆验证指南；夜赛氛围枢纽         |
| 必须展示       | 品牌字标、首页 Hero/指南卡、Demo 页、指南墙体量、收尾 CTA               |
| 画幅/时长/语言 | 1920×1080 @ 30fps，约 31s，英文                                         |
| 音频           | 强节奏 tech-house BGM + 电影系 SFX；终渲带 BGM / 无 BGM 两版            |
| 数据口径       | 公开 wiki + Steam 官方图，可原样使用；片中标明 fan wiki，不作官方预告   |

## 需求 → 执行决策

| 需求                  | 决策                                                  |
| --------------------- | ----------------------------------------------------- |
| 夜赛品牌感            | 全片 bunker/ember 蒙皮；不走 Ink Press 纸墨           |
| Demo 优先（SEO 已定） | 字卡①与 spotlight 主角均为 Demo                       |
| 与官方预告片区分      | 强调 wiki 页面与指南枢纽，不用官方 trailer 片源做主体 |
| 画幅                  | 横屏 16:9（社媒主成片）；不另渲竖屏 unless 后续要求   |

## 视觉方向（选定）

**Ratfield Night Ember** — 从产品设计系统生长。

备选方向（未选）：

1. _Paper Ink remount_ — Ink Press 结构硬套：调性冲突，否。
2. _Neon Arcade flat_ — 纯霓虹无页面：丢 wiki 产品感，否。

### Tokens

| Token        | 值                                                                           |
| ------------ | ---------------------------------------------------------------------------- |
| bg           | `#07090f` bunker-950                                                         |
| surface      | `#10141f` / `#161d2c`                                                        |
| text         | `#e9edf6` / sand-100                                                         |
| accent       | `#e85d3a` ember-500 · `#ff6a3a` ember-400                                    |
| accent-soft  | `#ff916a`                                                                    |
| display font | Chakra Petch / Rajdhani（`--font-display`）                                  |
| mono         | VT323 / JetBrains Mono                                                       |
| 动效预设     | 活力大胆：主时长 ~18f，easing `bezier(0.16,1,0.3,1)`，过冲 1.12，squash 0.25 |
| 光感         | 暗场 + ember 单点光效；禁止群发 glint                                        |

## 功能 → 镜头映射

| 功能              | 首选卡                     | 变体/备注                                   |
| ----------------- | -------------------------- | ------------------------------------------- |
| 品牌立名          | `brand-ink-open`           | 准星改 ember；字标 HEATWARPED WIKI          |
| Demo 单主角立传   | `spotlight-hero-card`      | 首页 Demo 指南卡                            |
| 呼吸字卡×3        | `paper-title-card`         | 暗场版：bunker 底 + ember accent            |
| 指南墙体量        | `deck-deal-flyin`          | 首页 guide cards 切片                       |
| Demo 页结构化信息 | `row-embed`                | Demo/status 表行                            |
| 三连口号          | `cel-flash-stomp`          | DEMO / OPEN WORLD / WIKI；底闪 bunker↔ember |
| 发布会收场        | `outro-group-photo-launch` | 字标 + heatwarped.wiki；ember 尘/舞台光     |

## 分镜表（放行）

总长 **941f ≈ 31.4s** @ 30fps。能量：低开 → 中高交替 → 峰值收。

| #   | 时间                    | 镜头                     | 关键动效                                            |
| --- | ----------------------- | ------------------------ | --------------------------------------------------- |
| 1   | 0:00–0:02.8 (0–85)      | brand-ink-open           | ember 准星 → HEATWARPED WIKI letterpress → hold 30f |
| 2   | 0:02.8–0:07.5 (85–225)  | spotlight-hero-card      | 首页全景 → 聚光 Demo 卡 → rise/bob/reseat           |
| 3   | 0:07.5–0:09.2 (225–277) | paper-title-card         | Free _Steam_ demo.                                  |
| 4   | 0:09.2–0:15.2 (277–457) | deck-deal-flyin          | 指南卡发牌入网格 + 追逐 scroll + 0.5s rest          |
| 5   | 0:15.2–0:17.0 (457–509) | paper-title-card         | Verified _guides_.                                  |
| 6   | 0:17.0–0:21.0 (509–629) | row-embed                | Demo 页表行嵌入                                     |
| 7   | 0:21.0–0:22.7 (629–681) | paper-title-card         | Cars · Map · _Specs_.                               |
| 8   | 0:22.7–0:26.0 (681–781) | cel-flash-stomp          | DEMO / OPEN WORLD / WIKI                            |
| 9   | 0:26.0–0:31.4 (781–941) | outro-group-photo-launch | 合影 → 字标砸落 → heatwarped.wiki hold 30f          |

### 帧级时间轴

| shot      | from | duration | 内容            | 验收帧        |
| --------- | ---- | -------- | --------------- | ------------- |
| brand     | 0    | 85       | 字标压印        | 20, 55, 75    |
| spotlight | 85   | 140      | Demo 卡立传     | 100, 160, 210 |
| title1    | 225  | 52       | Free Steam demo | 240, 260      |
| deal      | 277  | 180      | 指南发牌        | 300, 380, 440 |
| title2    | 457  | 52       | Verified guides | 470, 490      |
| rows      | 509  | 120      | Demo 表行       | 530, 580, 620 |
| title3    | 629  | 52       | Cars Map Specs  | 640, 660      |
| stomp     | 681  | 100      | 三词砸字        | 700, 740, 770 |
| outro     | 781  | 160      | 合影收场        | 800, 860, 920 |

### Captions（功能段）

| from–to | text                                 |
| ------- | ------------------------------------ |
| 100–210 | The Demo card — your first stop      |
| 300–440 | Ten verified guides. One hub.        |
| 530–620 | Free on Steam. Steps that check out. |
| 700–770 | Open-world arcade. Fan wiki.         |

字卡段与 outro 不加 caption（C1）。

### 转场

硬切 + ember FlashCut（4 处，切点 −5f，跨 10f）：225、457、509、681。

## Styleframe

见 `styleframe/index.html`（3 关键静帧：开场字标 / Demo 聚光 / 收场 CTA）。
