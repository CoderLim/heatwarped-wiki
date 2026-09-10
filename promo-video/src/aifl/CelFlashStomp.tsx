import React from 'react';
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from 'remotion';

export const CEL_FLASH_DEFAULTS = {
  words: ['DEMO', 'OPEN WORLD', 'WIKI'] as const,
  label: 'heatwarped.wiki',
  ink: '#e9edf6',
  bg: '#07090f',
  flashDark: '#ae311c',
  flashDarkFinal: '#e85d3a',
  labelBg: '#e85d3a',
  labelInk: '#07090f',
};

type Word = {
  text: string;
  start: number;
  end: number;
  rot: number;
  flashLen: number;
  flashDark: string;
};

const LAND = 6;

/** Cel-flash stomp — bunker/ember brand version of the recipe card. */
export const CelFlashStomp: React.FC<Partial<typeof CEL_FLASH_DEFAULTS>> = (
  props
) => {
  const d = { ...CEL_FLASH_DEFAULTS, ...props };
  const WORDS: Word[] = [
    {
      text: d.words[0],
      start: 0,
      end: 30,
      rot: 2.5,
      flashLen: 6,
      flashDark: d.flashDark,
    },
    {
      text: d.words[1],
      start: 30,
      end: 60,
      rot: -2.5,
      flashLen: 6,
      flashDark: d.flashDark,
    },
    {
      text: d.words[2],
      start: 60,
      end: 9999,
      rot: 0,
      flashLen: 8,
      flashDark: d.flashDarkFinal,
    },
  ];

  const frame = useCurrentFrame();
  const word = WORDS.find((w) => frame >= w.start && frame < w.end)!;
  const t = frame - word.start;

  const scale =
    t < 4
      ? interpolate(t, [0, 4], [1.18, 0.98], {
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.poly(5)),
        })
      : interpolate(t, [4, LAND], [0.98, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.quad),
        });

  const ft = t - LAND;
  const flashing = ft >= 0 && ft < word.flashLen;
  const bg = flashing && Math.floor(ft / 2) % 2 === 0 ? word.flashDark : d.bg;

  const labelOp = interpolate(frame, [66, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.quad),
  });

  return (
    <AbsoluteFill style={{ background: bg, overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontFamily:
              '"Chakra Petch", "Rajdhani", ui-sans-serif, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: word.text.length > 8 ? 140 : 200,
            color: d.ink,
            letterSpacing: word.text.length > 8 ? 4 : 8,
            textTransform: 'uppercase',
            transform: `scale(${scale}) rotate(${word.rot}deg)`,
          }}
        >
          {word.text}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 96,
          background: d.labelBg,
          opacity: labelOp,
          display: 'flex',
          alignItems: 'center',
          padding: '0 120px',
          boxSizing: 'border-box',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: 22,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: d.labelInk,
          fontWeight: 600,
        }}
      >
        {d.label}
      </div>
    </AbsoluteFill>
  );
};
