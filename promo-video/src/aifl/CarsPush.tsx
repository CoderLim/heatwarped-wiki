import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from 'remotion';

import layout from './live-layout.json';
import { CamKey, PageCam } from './live/PageCam';

const PAGE_H = layout.cars?.pageH ?? layout.papers.pageH;

const CAM: CamKey[] = [
  {
    frame: 0,
    cx: 960,
    cy: 900,
    zoom: 1.05,
    rotX: 4,
    rotY: -8,
    rotZ: 0,
    persp: 1400,
  },
  {
    frame: 40,
    cx: 960,
    cy: 1400,
    zoom: 1.15,
    rotX: 6,
    rotY: 12,
    rotZ: 1,
    persp: 1400,
  },
  {
    frame: 90,
    cx: 960,
    cy: 1600,
    zoom: 1.35,
    rotX: 8,
    rotY: 18,
    rotZ: 0,
    persp: 1400,
  },
  {
    frame: 110,
    cx: 960,
    cy: 1600,
    zoom: 1.35,
    rotX: 8,
    rotY: 18,
    rotZ: 0,
    persp: 1400,
  },
];

export const CARS_PUSH_DEFAULTS = {
  caption: 'PLAYABLE · MUIRA',
};

/** Simple 2.5D push across the cars guide page. */
export const CarsPush: React.FC<Partial<typeof CARS_PUSH_DEFAULTS>> = (
  props
) => {
  const { caption } = { ...CARS_PUSH_DEFAULTS, ...props };
  const frame = useCurrentFrame();
  const labelOp = interpolate(frame, [18, 32, 95, 108], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.3, 0, 0.2, 1),
  });

  return (
    <AbsoluteFill style={{ background: '#07090f' }}>
      <PageCam
        src="textures/live/papers-full.png"
        pageH={PAGE_H}
        keys={CAM}
        ease={Easing.bezier(0.33, 0, 0.15, 1)}
      />
      <div
        style={{
          position: 'absolute',
          left: 80,
          bottom: 72,
          opacity: labelOp,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: 18,
          letterSpacing: '0.28em',
          color: '#ff6a3a',
          textTransform: 'uppercase',
        }}
      >
        {caption}
      </div>
    </AbsoluteFill>
  );
};
