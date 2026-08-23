import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: () => {
        const body = [
          'User-Agent: *',
          'Allow: /',
          'Disallow: /admin',
          'Disallow: /settings',
          'Disallow: /api/',
          'Disallow: /*?*',
          // Leftover Mini Wars / ShipAny template surfaces (also noindex in head)
          'Disallow: /buildings',
          'Disallow: /strategy',
          'Disallow: /systems',
          'Disallow: /tier-list',
          'Disallow: /guides',
          'Disallow: /codes',
          'Disallow: /news',
          'Disallow: /patch-notes',
          'Disallow: /faq',
          'Disallow: /search',
          '',
          `Sitemap: ${envConfigs.app_url}/sitemap.xml`,
          '',
        ].join('\n');
        return new Response(body, {
          headers: { 'Content-Type': 'text/plain' },
        });
      },
    },
  },
});
