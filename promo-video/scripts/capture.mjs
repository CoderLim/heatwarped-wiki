// Capture Heatwarped Wiki pages for promo textures
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const CONFIG = {
  BASE: 'http://localhost:3003',
  OUT_DIR: '../public/textures/live',
  LAYOUT_JSON: '../src/aifl/live-layout.json',
  VIEWPORT: { width: 1920, height: 1080, deviceScaleFactor: 2 },
  SETTLE_MS: 900,
  PAGES: [
    {
      name: 'home',
      path: '/',
      waitMs: 2500, // hero video poster settle
      boxes: [
        {
          key: 'guides',
          selector: 'article a.group, article a[href="/demo"]',
          all: true,
          max: 12,
        },
      ],
      cutouts: [
        { name: 'nav', selector: 'header' },
        {
          name: 'card',
          selector: 'article a[href^="/"]',
          all: true,
          max: 10,
          omitBackground: false,
        },
      ],
      hideForEmptyPlate: 'article a[href^="/"]',
    },
    {
      name: 'demo',
      path: '/demo',
      waitMs: 1200,
      boxes: [
        {
          key: 'rows',
          selector: 'article ol li, article table tbody tr, article ul li',
          all: true,
          max: 10,
        },
      ],
      cutouts: [
        {
          name: 'demo-cta',
          selector: 'article .border-ember-500\\/60, article a.btn-tactical',
          omitBackground: false,
        },
      ],
    },
    {
      name: 'cars',
      path: '/cars',
      waitMs: 1200,
      boxes: [],
      cutouts: [
        {
          name: 'car-hero',
          selector: 'article img, main img',
          all: true,
          max: 3,
        },
      ],
    },
  ],
};

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(here, CONFIG.OUT_DIR);
const layoutPath = path.resolve(here, CONFIG.LAYOUT_JSON);
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.dirname(layoutPath), { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  executablePath:
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport(CONFIG.VIEWPORT);

const settle = async (extra = 0) => {
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, CONFIG.SETTLE_MS + extra));
};

const pageBox = (el) =>
  el.evaluate((e) => {
    const r = e.getBoundingClientRect();
    return {
      x: Math.round(r.x + window.scrollX),
      y: Math.round(r.y + window.scrollY),
      w: Math.round(r.width),
      h: Math.round(r.height),
    };
  });

const layout = {};

for (const conf of CONFIG.PAGES) {
  console.log('→', conf.path);
  await page.goto(`${CONFIG.BASE}${conf.path}`, {
    waitUntil: 'networkidle2',
    timeout: 60000,
  });
  await settle(conf.waitMs ?? 0);

  // Pause/hide video to avoid flicker in stills
  await page.evaluate(() => {
    document.querySelectorAll('video').forEach((v) => {
      v.pause();
      v.removeAttribute('autoplay');
    });
  });
  await settle(200);

  const fullPath = path.join(outDir, `${conf.name}-full.png`);
  await page.screenshot({ path: fullPath, fullPage: true, type: 'png' });
  console.log('  full', fullPath);

  const pageH = await page.evaluate(() =>
    Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
  );

  const entry = { pageH, boxes: {}, cutouts: {} };

  for (const b of conf.boxes ?? []) {
    if (b.all) {
      const els = await page.$$(b.selector);
      const boxes = [];
      for (const el of els.slice(0, b.max ?? 20)) {
        boxes.push(await pageBox(el));
      }
      entry.boxes[b.key] = boxes;
    } else {
      const el = await page.$(b.selector);
      if (el) entry.boxes[b.key] = await pageBox(el);
    }
  }

  let cardIdx = 1;
  for (const c of conf.cutouts ?? []) {
    const els = c.all
      ? await page.$$(c.selector)
      : [await page.$(c.selector)].filter(Boolean);
    const limited = els.slice(0, c.max ?? 1);
    for (let i = 0; i < limited.length; i++) {
      const el = limited[i];
      if (!el) continue;
      const box = await pageBox(el);
      const fname =
        c.name === 'card'
          ? `card${cardIdx}.png`
          : limited.length > 1
            ? `${c.name}${i + 1}.png`
            : `${c.name}.png`;
      const out = path.join(outDir, fname);
      if (c.omitBackground) {
        await el.screenshot({ path: out, omitBackground: true });
      } else {
        await el.screenshot({ path: out });
      }
      if (c.name === 'card') {
        entry.cutouts[`card${cardIdx}`] = { ...box, file: fname };
        cardIdx++;
      } else {
        entry.cutouts[limited.length > 1 ? `${c.name}${i + 1}` : c.name] = {
          ...box,
          file: fname,
        };
      }
      console.log('  cutout', fname, box);
    }
  }

  // 4x hires of Demo card (second guide card often /demo — find by href)
  if (conf.name === 'home') {
    const demoCard = await page.$('article a[href="/demo"]');
    if (demoCard) {
      await page.setViewport({ ...CONFIG.VIEWPORT, deviceScaleFactor: 4 });
      await settle(300);
      const hires = path.join(outDir, 'card4-hires.png');
      await demoCard.screenshot({ path: hires });
      const box = await pageBox(demoCard);
      entry.cutouts['card-demo-hires'] = { ...box, file: 'card4-hires.png' };
      console.log('  hires card4-hires', box);
      await page.setViewport(CONFIG.VIEWPORT);
      await settle(200);
    }
  }

  if (conf.hideForEmptyPlate) {
    await page.evaluate((sel) => {
      document.querySelectorAll(sel).forEach((e) => {
        e.style.visibility = 'hidden';
      });
    }, conf.hideForEmptyPlate);
    await settle(200);
    const emptyPath = path.join(outDir, `${conf.name}-empty.png`);
    await page.screenshot({ path: emptyPath, fullPage: true, type: 'png' });
    console.log('  empty', emptyPath);
    // restore
    await page.evaluate((sel) => {
      document.querySelectorAll(sel).forEach((e) => {
        e.style.visibility = '';
      });
    }, conf.hideForEmptyPlate);
  }

  layout[conf.name] = entry;
}

// Alias names expected by template scenes
layout.projects = layout.home;
layout.detail = layout.demo;
fs.writeFileSync(layoutPath, JSON.stringify(layout, null, 2));
console.log('layout →', layoutPath);

// Symlink/copy aliases for texture filenames used by scenes
const aliases = [
  ['home-full.png', 'projects-full.png'],
  ['home-empty.png', 'projects-empty.png'],
  ['demo-full.png', 'detail-full.png'],
  ['cars-full.png', 'papers-full.png'],
];
for (const [src, dest] of aliases) {
  const s = path.join(outDir, src);
  const d = path.join(outDir, dest);
  if (fs.existsSync(s)) {
    fs.copyFileSync(s, d);
    console.log('alias', src, '→', dest);
  }
}

await browser.close();
console.log('done');
