import handler from '@tanstack/react-start/server-entry';

import { getCookieFromHeader } from './lib/cookie';
import {
  HEATWARPED_GUIDE_PATHS,
  heatwarpedPathKey,
} from './lib/heatwarped-seo';
import { deLocalizeUrl } from './paraglide/runtime.js';
import { paraglideMiddleware } from './paraglide/server.js';

// On Cloudflare Workers, stash the binding env (D1, ASSETS, …) on globalThis
// so synchronous code paths (e.g. the db() singleton with DATABASE_PROVIDER=d1)
// can reach bindings without threading the request context through every call.
// The specifier is kept non-literal so bundlers leave the import to runtime;
// outside workerd the import rejects and we just move on.
const CF_WORKERS_MODULE = 'cloudflare:workers';
let cfEnvPromise: Promise<void> | null = null;

const ENGLISH_ONLY_PATHS = new Set<string>([
  ...HEATWARPED_GUIDE_PATHS.map(heatwarpedPathKey),
]);

function englishOnlyRedirectTarget(url: URL): string | null {
  const pathname = url.pathname;
  if (!pathname.startsWith('/zh')) return null;

  const delocalized = deLocalizeUrl(url).pathname || '/';
  const path = heatwarpedPathKey(
    delocalized.startsWith('/') ? delocalized : `/${delocalized}`
  );

  if (ENGLISH_ONLY_PATHS.has(path)) return path;
  if (path.startsWith('/blog/')) return path;

  return null;
}

function ensureCloudflareEnv(): Promise<void> {
  if (!cfEnvPromise) {
    cfEnvPromise = import(/* @vite-ignore */ CF_WORKERS_MODULE)
      .then((mod) => {
        (globalThis as any).__CF_ENV__ = mod.env;
      })
      .catch(() => {
        // Not running on Cloudflare Workers — nothing to stash.
      });
  }
  return cfEnvPromise;
}

// Custom server entry — wraps every request in Paraglide's middleware so
// getLocale() resolves per-request (AsyncLocalStorage) during SSR.
export default {
  async fetch(req: Request): Promise<Response> {
    await ensureCloudflareEnv();

    const url = new URL(req.url);
    const redirectPath = englishOnlyRedirectTarget(url);
    if (redirectPath) {
      const target = new URL(redirectPath, url.origin);
      target.search = url.search;
      return Response.redirect(target.href, 301);
    }

    const response = await paraglideMiddleware(req, () => handler.fetch(req));
    const utmSource = url.searchParams.get('utm_source');
    const existing = getCookieFromHeader(
      req.headers.get('cookie'),
      'utm_source'
    );
    if (utmSource && !existing) {
      const sanitized = utmSource.replace(/[^\w.\-]/g, '').slice(0, 100);
      if (sanitized) {
        response.headers.append(
          'Set-Cookie',
          `utm_source=${sanitized}; Max-Age=2592000; Path=/; SameSite=Lax`
        );
      }
    }
    return response;
  },
};
