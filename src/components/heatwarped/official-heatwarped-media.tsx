import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const STEAM_URL = 'https://store.steampowered.com/app/4846360/Heatwarped/';
const DEMO_TRAILER_URL = 'https://youtu.be/kWhpv8rf094';
const DEMO_TRAILER_VIDEO_ID = 'kWhpv8rf094';
const GAMEPLAY_TRAILER_URL = 'https://youtu.be/q7t6_ff8mlg';
const GAMEPLAY_TRAILER_VIDEO_ID = 'q7t6_ff8mlg';
const STEAM_ART =
  'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4846360/capsule_616x353.jpg';

type MediaVariant =
  | 'release-date'
  | 'system-requirements'
  | 'demo'
  | 'gameplay';

const media = {
  'release-date': {
    title: 'Heatwarped release status source',
    description:
      'Steam is the primary source for the current Heatwarped release status.',
    image: STEAM_ART,
    alt: 'Heatwarped official Steam artwork for the release date page',
    href: STEAM_URL,
    source: 'Steam',
    video: false,
  },
  'system-requirements': {
    title: 'Heatwarped PC version on Steam',
    description:
      'The Heatwarped PC requirements on this site are checked against the official Steam listing.',
    image: STEAM_ART,
    alt: 'Heatwarped official Steam artwork accompanying the PC system requirements',
    href: STEAM_URL,
    source: 'Steam',
    video: false,
  },
  demo: {
    title: 'Heatwarped Demo Gameplay',
    description: '',
    image: STEAM_ART,
    alt: 'Heatwarped Demo Gameplay',
    href: DEMO_TRAILER_URL,
    source: 'Official trailer',
    video: true,
    videoId: DEMO_TRAILER_VIDEO_ID,
    hideEyebrow: true,
    hideCaption: true,
  },
  gameplay: {
    title: 'Heatwarped gameplay in the official reveal trailer',
    description:
      'The official reveal trailer is a first-party visual reference for Heatwarped gameplay while development continues.',
    image: STEAM_ART,
    alt: 'Heatwarped gameplay in the official reveal trailer',
    href: GAMEPLAY_TRAILER_URL,
    source: 'Official trailer',
    video: true,
    videoId: GAMEPLAY_TRAILER_VIDEO_ID,
  },
} satisfies Record<
  MediaVariant,
  {
    title: string;
    description: string;
    image: string;
    alt: string;
    href: string;
    source: string;
    video: boolean;
    videoId?: string;
    hideEyebrow?: boolean;
    hideCaption?: boolean;
  }
>;

function LazyYouTubePlayer({
  title,
  videoId,
}: {
  title: string;
  videoId: string;
}) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="group relative block aspect-video w-full overflow-hidden"
      aria-label={`Play ${title}`}
      onClick={() => setActive(true)}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        aria-hidden="true"
        width={1280}
        height={720}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
      />
      <span className="bg-bunker-950/80 text-sand-100 absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition-transform group-hover:scale-105">
        <Play className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true" />
      </span>
    </button>
  );
}

export function OfficialHeatwarpedMedia({
  variant,
}: {
  variant: MediaVariant;
}) {
  const item = media[variant];
  return (
    <section
      className="mx-auto max-w-5xl px-4 pt-2 pb-12"
      aria-labelledby={`official-media-${variant}`}
    >
      <div className="border-camo-800 bg-bunker-900/35 border p-5 md:p-6">
        {!item.hideEyebrow ? (
          <div className="text-ember-500 font-mono text-[11px] tracking-[0.3em] uppercase">
            Official media
          </div>
        ) : null}
        <h2
          id={`official-media-${variant}`}
          className={`font-display text-sand-100 text-2xl tracking-wider uppercase md:text-3xl${item.hideEyebrow ? '' : 'mt-2'}`}
        >
          {item.title}
        </h2>
        {item.description ? (
          <p className="text-bunker-300 mt-3 max-w-3xl text-sm leading-7 md:text-base">
            {item.description}
          </p>
        ) : null}
        <figure className="border-camo-800 bg-bunker-950/50 mt-5 overflow-hidden border">
          {item.video && item.videoId ? (
            <LazyYouTubePlayer title={item.alt} videoId={item.videoId} />
          ) : (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.alt}
                width={1280}
                height={720}
                loading="lazy"
                decoding="async"
                className="aspect-video h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </a>
          )}
          {!item.hideCaption ? (
            <figcaption className="text-bunker-300 flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-xs leading-5">
              <span>{item.alt}.</span>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-ember-400 hover:text-ember-300 inline-flex items-center gap-1 font-mono tracking-wider uppercase"
              >
                Source: {item.source}
                <ExternalLink className="h-3 w-3" />
              </a>
            </figcaption>
          ) : null}
        </figure>
      </div>
    </section>
  );
}
