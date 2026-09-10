import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';

import { Caption } from './Caption';
import { CarsPush } from './CarsPush';
import { CelFlashStomp } from './CelFlashStomp';
import { FlashCut } from './FlashCut';
import { SceneDetail } from './live/SceneDetail';
import { SceneFlyIn } from './live/SceneFlyIn';
import { SceneOpen } from './live/SceneOpen';
import { SceneOutroLive } from './live/SceneOutroLive';
import { PaperTitleCard } from './PaperTitleCard';

// ~36.2s @ 30fps — Ratfield Night Ember wiki promo (Ink Press energy arc, reskinned).
export const AIFL_SHOTS = {
  morning: { from: 0, duration: 220 },
  card1: { from: 220, duration: 55 },
  table: { from: 275, duration: 190 },
  macro: { from: 465, duration: 100 },
  card2: { from: 565, duration: 55 },
  chart: { from: 620, duration: 105 }, // cel-flash stomp
  cardWbr: { from: 725, duration: 50 },
  wbr: { from: 775, duration: 110 }, // cars page push
  card3: { from: 885, duration: 55 },
  outro: { from: 940, duration: 145 },
} as const;

export const AIFL_TOTAL = 1085;

export const TITLE_CARDS = {
  card1: { text: 'Free *Steam* demo.' },
  card2: {
    text: 'Verified *guides,* night after night.',
    sub: 'core guides live',
    subDigits: '10',
  },
  cardWbr: { text: 'Cars · Map · *Specs.*' },
  card3: { text: 'One hub. *heatwarped.wiki*' },
} as const;

export const parseWords = (
  text: string
): { text: string; accent?: boolean }[] =>
  text
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => {
      const m = w.match(/^\*(.+)\*$/);
      return m ? { text: m[1], accent: true } : { text: w };
    });

export const FLASH_CUTS = [
  AIFL_SHOTS.table.from,
  AIFL_SHOTS.macro.from,
  AIFL_SHOTS.chart.from,
  AIFL_SHOTS.wbr.from,
];

export const sfxDuration = (s: { from: number; src: string }) =>
  s.src === 'keyboard.mp3' ? 24 : s.src === 'riser-cine.mp3' ? 90 : 90;

export const CAPTIONS = [
  { from: 100, duration: 100, text: 'THE DEMO CARD — YOUR FIRST STOP' },
  { from: 318, duration: 90, text: 'TEN VERIFIED GUIDES · ONE HUB' },
  { from: 477, duration: 68, text: 'FREE ON STEAM · STEPS THAT CHECK OUT' },
  { from: 633, duration: 70, text: 'DEMO · OPEN WORLD · WIKI' },
  { from: 800, duration: 70, text: 'MUIRA · RATFIELD · NIGHT STREETS' },
] as const;

// Relative-ish absolute pins aligned to AIFL_SHOTS (kept as absolute for workbench parity).
export const SFX: { from: number; src: string; volume: number }[] = [
  { from: 12, src: 'transition-soft.mp3', volume: 0.4 },
  { from: 78, src: 'whoosh-fast.mp3', volume: 0.45 },
  { from: 127, src: 'whoosh-big.mp3', volume: 0.5 },
  { from: 141, src: 'sparkle.mp3', volume: 0.35 },
  { from: 204, src: 'transition-snap.mp3', volume: 0.5 },
  { from: 220, src: 'swoosh-quick.mp3', volume: 0.4 },
  { from: 277, src: 'transition-soft.mp3', volume: 0.4 },
  { from: 308, src: 'whoosh-big.mp3', volume: 0.5 },
  { from: 340, src: 'whoosh-fast.mp3', volume: 0.4 },
  { from: 356, src: 'whoosh-fast.mp3', volume: 0.32 },
  { from: 400, src: 'whoosh-big.mp3', volume: 0.45 },
  { from: 475, src: 'transition-soft.mp3', volume: 0.45 },
  { from: 565, src: 'swoosh-quick.mp3', volume: 0.4 },
  // stomp kicks
  { from: 622, src: 'impact-cine.mp3', volume: 0.42 },
  { from: 652, src: 'impact-cine.mp3', volume: 0.45 },
  { from: 682, src: 'impact-cine.mp3', volume: 0.55 },
  { from: 725, src: 'swoosh-quick.mp3', volume: 0.4 },
  { from: 780, src: 'whoosh-fast.mp3', volume: 0.4 },
  { from: 885, src: 'swoosh-quick.mp3', volume: 0.4 },
  { from: 945, src: 'riser-cine.mp3', volume: 0.5 },
  { from: 980, src: 'impact-cine.mp3', volume: 0.55 },
  { from: 1005, src: 'sparkle.mp3', volume: 0.3 },
];

export const AiflMain: React.FC<{ bgm?: boolean }> = ({ bgm = true }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#07090f' }}>
      {bgm ? (
        <Sequence from={0} durationInFrames={AIFL_TOTAL}>
          <Audio
            src={staticFile('audio/bgm-tech-house.mp3')}
            volume={(f) => {
              const fadeIn = Math.min(1, f / 30);
              const fadeOut = Math.min(1, (AIFL_TOTAL - f) / 45);
              return 0.34 * fadeIn * fadeOut;
            }}
          />
        </Sequence>
      ) : null}
      {SFX.map((s, i) => (
        <Sequence
          key={`sfx-${i}`}
          from={s.from}
          durationInFrames={sfxDuration(s)}
        >
          <Audio src={staticFile(`audio/${s.src}`)} volume={s.volume} />
        </Sequence>
      ))}
      <Sequence
        from={AIFL_SHOTS.morning.from}
        durationInFrames={AIFL_SHOTS.morning.duration}
      >
        <SceneOpen />
      </Sequence>
      <Sequence
        from={AIFL_SHOTS.card1.from}
        durationInFrames={AIFL_SHOTS.card1.duration}
      >
        <PaperTitleCard
          duration={AIFL_SHOTS.card1.duration}
          words={parseWords(TITLE_CARDS.card1.text)}
        />
      </Sequence>
      <Sequence
        from={AIFL_SHOTS.table.from}
        durationInFrames={AIFL_SHOTS.table.duration}
      >
        <SceneFlyIn />
      </Sequence>
      <Sequence
        from={AIFL_SHOTS.macro.from}
        durationInFrames={AIFL_SHOTS.macro.duration}
      >
        <SceneDetail />
      </Sequence>
      <Sequence
        from={AIFL_SHOTS.card2.from}
        durationInFrames={AIFL_SHOTS.card2.duration}
      >
        <PaperTitleCard
          duration={AIFL_SHOTS.card2.duration}
          words={parseWords(TITLE_CARDS.card2.text)}
          sub={TITLE_CARDS.card2.sub}
          subDigits={TITLE_CARDS.card2.subDigits}
        />
      </Sequence>
      <Sequence
        from={AIFL_SHOTS.chart.from}
        durationInFrames={AIFL_SHOTS.chart.duration}
      >
        <CelFlashStomp />
      </Sequence>
      <Sequence
        from={AIFL_SHOTS.cardWbr.from}
        durationInFrames={AIFL_SHOTS.cardWbr.duration}
      >
        <PaperTitleCard
          duration={AIFL_SHOTS.cardWbr.duration}
          words={parseWords(TITLE_CARDS.cardWbr.text)}
        />
      </Sequence>
      <Sequence
        from={AIFL_SHOTS.wbr.from}
        durationInFrames={AIFL_SHOTS.wbr.duration}
      >
        <CarsPush />
      </Sequence>
      <Sequence
        from={AIFL_SHOTS.card3.from}
        durationInFrames={AIFL_SHOTS.card3.duration}
      >
        <PaperTitleCard
          duration={AIFL_SHOTS.card3.duration}
          words={parseWords(TITLE_CARDS.card3.text)}
        />
      </Sequence>
      <Sequence
        from={AIFL_SHOTS.outro.from}
        durationInFrames={AIFL_SHOTS.outro.duration}
      >
        <SceneOutroLive />
      </Sequence>
      {CAPTIONS.map((c) => (
        <Sequence key={c.from} from={c.from} durationInFrames={c.duration}>
          <Caption text={c.text} duration={c.duration} />
        </Sequence>
      ))}
      {FLASH_CUTS.map((cut) => (
        <Sequence key={cut} from={cut - 5} durationInFrames={10}>
          <FlashCut duration={10} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
