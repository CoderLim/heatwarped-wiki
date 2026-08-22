import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';

const PAGES = [
  { path: '/', changeFrequency: 'daily', priority: 1 },
  { path: '/cars', changeFrequency: 'daily', priority: 0.95 },
  { path: '/demo', changeFrequency: 'daily', priority: 0.95 },
  { path: '/release-date', changeFrequency: 'daily', priority: 0.9 },
  { path: '/system-requirements', changeFrequency: 'weekly', priority: 0.85 },
] as const;

function urlFor(path: string): string {
  return `${envConfigs.app_url.replace(/\/$/, '')}${path}`;
}

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...PAGES.map(
            (page) => `  <url>
    <loc>${urlFor(page.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
          ),
          '</urlset>',
          '',
        ].join('\n');

        return new Response(xml, {
          headers: { 'Content-Type': 'application/xml; charset=utf-8' },
        });
      },
    },
  },
});
