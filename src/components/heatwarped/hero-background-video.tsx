import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const R2_PUBLIC_ORIGIN = 'https://static.heatwarped.wiki';

export const HEATWARPED_HERO_VIDEO = import.meta.env.PROD
  ? `${R2_PUBLIC_ORIGIN}/heatwarped/hero-bg.mp4`
  : '/videos/heatwarped-hero-bg.mp4';

export const HEATWARPED_HERO_POSTER = import.meta.env.PROD
  ? `${R2_PUBLIC_ORIGIN}/heatwarped/hero-bg-poster.jpg`
  : '/videos/heatwarped-hero-bg-poster.jpg';

type HeroBackgroundVideoProps = {
  videoSrc: string;
  posterSrc: string;
};

export function HeroBackgroundVideo({
  videoSrc,
  posterSrc,
}: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    const start = () => setShouldPlay(true);

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(start, { timeout: 1500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(start, 300);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldPlay) return;

    video.src = videoSrc;
    video.muted = true;
    video.load();
    void video.play().catch(() => {
      /* Autoplay blocked — poster remains visible */
    });
  }, [shouldPlay, videoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    if (!muted) {
      void video.play().catch(() => {
        setMuted(true);
      });
    }
  }, [muted]);

  function toggleMute() {
    setMuted((prev) => !prev);
  }

  return (
    <>
      <img
        src={posterSrc}
        alt=""
        aria-hidden="true"
        width={1280}
        height={960}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {shouldPlay ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={posterSrc}
          aria-hidden="true"
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center motion-reduce:hidden"
        />
      ) : null}
      {shouldPlay ? (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={
            muted ? 'Unmute background video' : 'Mute background video'
          }
          aria-pressed={!muted}
          className="border-camo-700/80 bg-bunker-950/70 text-sand-100 hover:border-ember-500/70 hover:text-ember-400 absolute right-4 bottom-4 z-20 inline-flex h-10 w-10 items-center justify-center border backdrop-blur-sm transition-colors md:right-6 md:bottom-6"
        >
          {muted ? (
            <VolumeX className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      ) : null}
    </>
  );
}
