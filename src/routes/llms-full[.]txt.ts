import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { baseLocale } from '@/paraglide/runtime.js';
import { getLocalPosts, mergePosts } from '@/content/posts';

const STATIC_PAGES: { path: string; title: string; description: string }[] = [
  {
    path: '',
    title: 'Heatwarped Wiki',
    description:
      'Open-world street racing game demo, release status, PC requirements, and gameplay details.',
  },
  {
    path: '/release-date',
    title: 'Heatwarped Release Date',
    description:
      'Official release status (TBA) and where to watch for announcements.',
  },
  {
    path: '/system-requirements',
    title: 'Heatwarped System Requirements',
    description:
      'Minimum and recommended Windows PC specs from the official Steam listing.',
  },
  {
    path: '/demo',
    title: 'Heatwarped Demo',
    description: 'How to download and install the free Steam demo.',
  },
  {
    path: '/gameplay',
    title: 'Heatwarped Gameplay',
    description: 'Source-conscious overview of confirmed gameplay details.',
  },
  {
    path: '/race-modes',
    title: 'Heatwarped Race Modes',
    description:
      'Official many-modes status plus Demo-verified Circuit, Sprint, Time Trial, and Drift.',
  },
  {
    path: '/map',
    title: 'Heatwarped Map',
    description:
      'Ratfield open-world map facts: city, outskirts, Demo observations, and unknowns.',
  },
  {
    path: '/customization',
    title: 'Heatwarped Customization',
    description:
      'Deep customization, rare car parts, and Demo-observed visual and performance upgrades.',
  },
  {
    path: '/multiplayer',
    title: 'Heatwarped Multiplayer',
    description:
      'Online challenges on the official site versus Steam Single-player feature listing.',
  },
  {
    path: '/performance',
    title: 'Heatwarped Performance',
    description:
      'Official 1080p performance targets, Authentic vs Enhanced, and CPU-dependent notes.',
  },
  {
    path: '/cars',
    title: 'Heatwarped Car List',
    description: 'Confirmed and rumored vehicles with source labels.',
  },
  {
    path: '/about',
    title: 'About',
    description: 'Unofficial fan wiki disclaimer and editorial purpose.',
  },
  {
    path: '/contact',
    title: 'Contact',
    description: 'Email for corrections, privacy, and rights-holder requests.',
  },
  {
    path: '/source-policy',
    title: 'Source Policy',
    description:
      'How this wiki verifies facts from Steam and official channels.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'Privacy policy for Heatwarped Wiki.',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Use',
    description: 'Terms of use for Heatwarped Wiki.',
  },
];

export const Route = createFileRoute('/llms-full.txt')({
  server: {
    handlers: {
      GET: async () => {
        const { app_url, app_name, app_description } = envConfigs;

        const lines: string[] = [
          `# ${app_name}`,
          '',
          `> ${app_description}`,
          '',
          '## Pages',
          '',
          ...STATIC_PAGES.map(
            (p) => `- [${p.title}](${app_url}${p.path}): ${p.description}`
          ),
        ];

        let posts = getLocalPosts(baseLocale);
        try {
          const { listPublishedArticles, findPublishedBySlug } =
            await import('@/modules/posts/service');
          const rows = await listPublishedArticles().catch(() => []);
          const dbPosts = rows.map((row) => ({
            slug: row.slug,
            title: row.title || row.slug,
            description: row.description || '',
            createdAt: new Date(row.createdAt).toISOString(),
            source: 'db' as const,
          }));
          posts = mergePosts(dbPosts, posts);

          if (posts.length > 0) {
            lines.push('', '## Blog Posts', '');

            for (const post of posts) {
              lines.push(`### ${post.title}`, '');
              lines.push(`URL: ${app_url}/blog/${post.slug}`);
              if (post.description)
                lines.push(`Description: ${post.description}`);
              lines.push('');

              if (post.source === 'db') {
                const detail = await findPublishedBySlug(post.slug).catch(
                  () => null
                );
                if (detail?.content) {
                  lines.push(detail.content, '');
                }
              }

              lines.push('---', '');
            }
          }
        } catch {
          // Database unreachable — list local posts without content.
          if (posts.length > 0) {
            lines.push('', '## Blog Posts', '');
            for (const post of posts) {
              lines.push(`### ${post.title}`, '');
              lines.push(`URL: ${app_url}/blog/${post.slug}`);
              if (post.description)
                lines.push(`Description: ${post.description}`);
              lines.push('', '---', '');
            }
          }
        }

        lines.push('');

        return new Response(lines.join('\n'), {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
      },
    },
  },
});
