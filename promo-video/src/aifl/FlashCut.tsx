import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

/** Ember flash cut: a warm orange bloom that flashes over the hard cut. */
export const FlashCut: React.FC<{ duration?: number }> = ({
  duration = 10,
}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, duration * 0.4, duration], [0, 0.85, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill
      style={{
        pointerEvents: 'none',
        opacity: o,
        background:
          'radial-gradient(ellipse at 50% 45%, rgba(255,106,58,0.98), rgba(255,106,58,0.55) 55%, transparent 80%)',
      }}
    />
  );
};
