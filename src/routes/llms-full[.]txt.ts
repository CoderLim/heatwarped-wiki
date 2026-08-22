import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';

const PAGES = [
  ['/', 'Heatwarped Wiki', 'Source-first overview of Heatwarped, Ratfield, the playable demo and verified game information.'],
  ['/cars', 'Heatwarped Cars', 'Verified vehicle-roster status, customization, rare parts and demo verification notes.'],
  ['/demo', 'Heatwarped Demo', 'Official download status, confirmed features, PC targets and unanswered demo questions.'],
  ['/release-date', 'Heatwarped Release Date', 'Latest official launch status with no guessed date or platform claims.'],
  ['/system-requirements', 'Heatwarped System Requirements', 'Official minimum and recommended PC specifications from Steam.'],
] as const;

export const Route = createFileRoute('/llms-full.txt')({
  server: {
    handlers: {
      GET: () => {
        const base = envConfigs.app_url.replace(/\/$/, '');
        const lines = [
          '# Heatwarped Wiki',
          '',
          '> Unofficial source-first reference for Heatwarped by Sealime. Confirmed facts are separated from observations and unverified claims.',
          '',
          '## Core pages',
          '',
          ...PAGES.map(([path, title, description]) => `- [${title}](${base}${path}): ${description}`),
          '',
          '## Primary sources',
          '',
          '- [Heatwarped on Steam](https://store.steampowered.com/app/4846360/Heatwarped/)',
          '- [Official Heatwarped website](https://heatwarped.com/)',
          '- [Official Reveal Trailer](https://www.youtube.com/watch?v=q7t6_ff8mlg)',
          '',
        ];
        return new Response(lines.join('\n'), {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
      },
    },
  },
});
