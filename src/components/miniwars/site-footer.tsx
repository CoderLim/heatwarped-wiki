import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';

export type MiniWarsFooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

export function MiniWarsFooter({
  blurb,
  disclaimer,
  codexTitle,
  playersTitle,
  legalTitle,
  codexLinks,
  playerLinks,
  legalLinks,
  copyright,
  builtWith,
}: {
  blurb: string;
  disclaimer: string;
  codexTitle: string;
  playersTitle: string;
  legalTitle: string;
  codexLinks: MiniWarsFooterLink[];
  playerLinks: MiniWarsFooterLink[];
  legalLinks: MiniWarsFooterLink[];
  copyright: string;
  builtWith: string;
}) {
  return (
    <footer className="border-camo-900 bg-bunker-950/95 relative z-10 mt-24 border-t">
      <div className="stencil-line" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center">
            <img
              src={envConfigs.app_logo || '/logo.png'}
              alt={envConfigs.app_name || 'Heatwarped Wiki'}
              className="h-14 w-auto"
              width={334}
              height={80}
            />
          </div>
          <p className="text-bunker-300 mt-4 max-w-md text-sm leading-7">
            {blurb}
          </p>
          <p className="text-bunker-500 mt-4 font-mono text-[11px] tracking-widest uppercase">
            {disclaimer}
          </p>
        </div>
        <div>
          <h4 className="font-display text-ember-500 mb-3 text-sm tracking-widest uppercase">
            {codexTitle}
          </h4>
          <ul className="text-bunker-300 space-y-2 text-sm">
            {codexLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-sand-100" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-ember-500 mb-3 text-sm tracking-widest uppercase">
            {playersTitle}
          </h4>
          <ul className="text-bunker-300 space-y-2 text-sm">
            {playerLinks.map((link) => (
              <li key={link.href}>
                {'external' in link && link.external ? (
                  <a
                    className="hover:text-sand-100"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link className="hover:text-sand-100" href={link.href}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-ember-500 mb-3 text-sm tracking-widest uppercase">
            {legalTitle}
          </h4>
          <ul className="text-bunker-300 space-y-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-sand-100" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-camo-900/80 border-t">
        <div className="text-bunker-500 mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 font-mono text-[11px] tracking-widest uppercase md:flex-row">
          <span>{copyright}</span>
          <span>{builtWith}</span>
        </div>
      </div>
    </footer>
  );
}
