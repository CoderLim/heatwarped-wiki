// Workbench manifest — Heatwarped Wiki promo (Ratfield Night Ember).
import { createElement, type FC } from 'react';

import { Caption, CAPTION_DEFAULTS } from './aifl/Caption';
import { CARS_PUSH_DEFAULTS, CarsPush } from './aifl/CarsPush';
import { CEL_FLASH_DEFAULTS, CelFlashStomp } from './aifl/CelFlashStomp';
import { FlashCut } from './aifl/FlashCut';
import { SCENE_DETAIL_DEFAULTS, SceneDetail } from './aifl/live/SceneDetail';
import { SCENE_FLYIN_DEFAULTS, SceneFlyIn } from './aifl/live/SceneFlyIn';
import { SCENE_OPEN_DEFAULTS, SceneOpen } from './aifl/live/SceneOpen';
import {
  SCENE_OUTRO_DEFAULTS,
  SceneOutroLive,
} from './aifl/live/SceneOutroLive';
import {
  AIFL_SHOTS,
  AIFL_TOTAL,
  AiflMain,
  CAPTIONS,
  FLASH_CUTS,
  parseWords,
  SFX,
  sfxDuration,
  TITLE_CARDS,
} from './aifl/Main';
import { PaperTitleCard, TITLE_CARD_DEFAULTS } from './aifl/PaperTitleCard';

type Field = Record<string, unknown> & {
  type: string;
  key: string;
  label: string;
  default: unknown;
};
const text = (key: string, label: string, def: string): Field => ({
  type: 'text',
  key,
  label,
  default: def,
});
const textarea = (key: string, label: string, def: string): Field => ({
  type: 'textarea',
  key,
  label,
  default: def,
});
const color = (key: string, label: string, def: string): Field => ({
  type: 'color',
  key,
  label,
  default: def,
});
const size = (
  key: string,
  label: string,
  def: number,
  min: number,
  max: number
): Field => ({
  type: 'slider',
  key,
  label,
  default: def,
  min,
  max,
  step: 1,
  unit: 'px',
});

type TitleProps = Partial<typeof TITLE_CARD_DEFAULTS> & {
  text?: string;
  sub?: string;
  subDigits?: string;
  duration?: number;
};
export const TitleCardUnit: FC<TitleProps> = ({
  text = '',
  sub = '',
  subDigits = '',
  duration = 55,
  ...style
}) =>
  createElement(PaperTitleCard, {
    duration,
    words: parseWords(text),
    sub: sub || undefined,
    subDigits: subDigits || undefined,
    ...style,
  });
TitleCardUnit.displayName = 'PaperTitleCard';

type CaptionProps = Partial<typeof CAPTION_DEFAULTS> & {
  text?: string;
  bottom?: number;
  duration?: number;
};
export const CaptionUnit: FC<CaptionProps> = ({
  text = '',
  bottom = 72,
  duration = 40,
  ...style
}) => createElement(Caption, { text, bottom, duration, ...style });
CaptionUnit.displayName = 'Caption';

export const FlashUnit: FC<{ duration?: number }> = ({ duration = 10 }) =>
  createElement(FlashCut, { duration });
FlashUnit.displayName = 'FlashCut';

const D = {
  open: SCENE_OPEN_DEFAULTS,
  flyin: SCENE_FLYIN_DEFAULTS,
  detail: SCENE_DETAIL_DEFAULTS,
  stomp: CEL_FLASH_DEFAULTS,
  cars: CARS_PUSH_DEFAULTS,
  outro: SCENE_OUTRO_DEFAULTS,
  title: TITLE_CARD_DEFAULTS,
  caption: CAPTION_DEFAULTS,
};

const SCHEMAS = {
  open: [
    text('wordmark', '字标', D.open.wordmark),
    size('wordmarkSize', '字标字号', D.open.wordmarkSize, 60, 200),
    text('kicker', '眉题（打字机）', D.open.kicker),
    size('kickerSize', '眉题字号', D.open.kickerSize, 14, 48),
    text('noteLine1', '悬浮批注 · 上行', D.open.noteLine1),
    text('noteLine2', '悬浮批注 · 下行', D.open.noteLine2),
    size('noteSize', '批注字号', D.open.noteSize, 20, 64),
    color('ink', '正文色', D.open.ink),
    color('amber', 'Ember 强调色', D.open.amber),
    color('muted', '次级色', D.open.muted),
    color('paper', '底色', D.open.paper),
  ],
  flyin: [
    text('query', '搜索词（本片已关闭搜索段）', D.flyin.query),
    color('accent', 'Ember 强调色', D.flyin.accent),
  ],
  detail: [color('accent', '嵌入接缝色', D.detail.accent)],
  stomp: [
    text('label', '底栏标签', D.stomp.label),
    color('ink', '文字色', D.stomp.ink),
    color('bg', '底色', D.stomp.bg),
    color('flashDark', '闪色', D.stomp.flashDark),
    color('flashDarkFinal', '末词闪色', D.stomp.flashDarkFinal),
    color('labelBg', '底栏底色', D.stomp.labelBg),
    color('labelInk', '底栏字色', D.stomp.labelInk),
  ],
  cars: [text('caption', '角标文案', D.cars.caption)],
  outro: [
    text('wordmark', '字标', D.outro.wordmark),
    size('wordmarkSize', '字标字号', D.outro.wordmarkSize, 60, 220),
    text('tagline', '副标', D.outro.tagline),
    size('taglineSize', '副标字号', D.outro.taglineSize, 14, 48),
    color('ink', '正文色', D.outro.ink),
    color('amber', 'Ember 强调色', D.outro.amber),
    color('muted', '次级色', D.outro.muted),
  ],
  title: [
    textarea('text', '文案（*词* = Ember 强调）', ''),
    text('sub', '副标（等宽小字）', ''),
    text('subDigits', '副标滚动数字', ''),
    size('fontSize', '字号', D.title.fontSize, 60, 160),
    color('ink', '正文色', D.title.ink),
    color('accent', '强调色', D.title.accent),
    color('muted', '副标色', D.title.muted),
    color('paper', '底色', D.title.paper),
  ],
  caption: [
    text('text', '解说文案', ''),
    {
      type: 'slider',
      key: 'bottom',
      label: '底距',
      default: 72,
      min: 20,
      max: 400,
      step: 2,
      unit: 'px',
    } as Field,
    size('fontSize', '字号', D.caption.fontSize, 14, 48),
    color('color', '文字色', D.caption.color),
    color('accent', '方点色', D.caption.accent),
  ],
};

type ShotKey = keyof typeof AIFL_SHOTS;
const scene = <T extends Record<string, unknown>>(
  key: ShotKey,
  label: string,
  component: FC<Partial<T>>,
  defaults: T,
  schema: Field[]
) => ({
  id: key,
  label,
  from: AIFL_SHOTS[key].from,
  duration: AIFL_SHOTS[key].duration,
  component: component as FC<Record<string, unknown>>,
  props: { ...defaults },
  schema,
});
const title = (key: keyof typeof TITLE_CARDS, label: string) => {
  const t = TITLE_CARDS[key] as {
    text: string;
    sub?: string;
    subDigits?: string;
  };
  return {
    id: key,
    label,
    from: AIFL_SHOTS[key].from,
    duration: AIFL_SHOTS[key].duration,
    component: TitleCardUnit as FC<Record<string, unknown>>,
    props: {
      text: t.text,
      sub: t.sub ?? '',
      subDigits: t.subDigits ?? '',
      ...D.title,
    },
    schema: SCHEMAS.title,
    durationProp: 'duration',
    cardId: 'title-card',
    cardName: '字卡 · Ratfield Night',
    accent: '#e85d3a',
  };
};

export const WORKBENCH = {
  name: 'Heatwarped Wiki · Ratfield Night Ember',
  fps: 30,
  width: 1920,
  height: 1080,
  total: AIFL_TOTAL,
  background: '#07090f',
  shots: [
    scene('morning', 'S1 字标 → Demo 卡聚光', SceneOpen, D.open, SCHEMAS.open),
    title('card1', '字卡① Free Steam demo'),
    scene('table', 'S3 指南卡发牌', SceneFlyIn, D.flyin, SCHEMAS.flyin),
    scene('macro', 'S4 Demo 页行嵌入', SceneDetail, D.detail, SCHEMAS.detail),
    title('card2', '字卡② Verified guides'),
    scene(
      'chart',
      'S6 DEMO / OPEN WORLD / WIKI 砸字',
      CelFlashStomp,
      D.stomp,
      SCHEMAS.stomp
    ),
    title('cardWbr', '字卡③ Cars Map Specs'),
    scene('wbr', 'S8 Cars 页推镜', CarsPush, D.cars, SCHEMAS.cars),
    title('card3', '字卡④ heatwarped.wiki'),
    scene(
      'outro',
      'S10 合影 → HEATWARPED',
      SceneOutroLive,
      D.outro,
      SCHEMAS.outro
    ),
  ],
  transitions: FLASH_CUTS.map((cut, i) => ({
    id: `flash-${i + 1}`,
    label: `Ember 闪 @${cut}f`,
    from: cut - 5,
    duration: 10,
    component: FlashUnit as FC<Record<string, unknown>>,
    durationProp: 'duration',
    cardId: 'flash-cut',
    cardName: 'Ember 闪转场',
  })),
  captions: CAPTIONS.map((c, i) => ({
    id: `caption-${i + 1}`,
    label: c.text,
    from: c.from,
    duration: c.duration,
    component: CaptionUnit as FC<Record<string, unknown>>,
    props: { text: c.text, bottom: 72, ...D.caption },
    schema: SCHEMAS.caption,
    durationProp: 'duration',
    cardId: 'caption',
    cardName: '解说字幕条',
  })),
  sfx: SFX.map((s) => ({
    from: s.from,
    duration: sfxDuration(s),
    src: `audio/${s.src}`,
    volume: s.volume,
  })),
  order: ['transitions', 'captions', 'overlays'] as const,
  original: AiflMain as FC<Record<string, unknown>>,
};
