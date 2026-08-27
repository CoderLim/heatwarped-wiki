import { HeatwarpedFooter } from '@/components/heatwarped/site-footer';

const STEAM_URL = 'https://store.steampowered.com/app/4846360/Heatwarped/';
const X_URL = 'https://x.com/Heatwarped';

export function HeatwarpedFooterBlock() {
  return (
    <HeatwarpedFooter
      blurb="Independent Heatwarped reference focused on verified Steam and developer information. Unconfirmed release dates, platforms, cars, and features are intentionally not presented as fact."
      disclaimer="UNOFFICIAL FAN-MADE WIKI · NOT AFFILIATED WITH SEALIME"
      codexTitle="Guides"
      playersTitle="Official"
      legalTitle="Wiki"
      codexLinks={[
        { href: '/release-date', label: 'Release Date' },
        { href: '/system-requirements', label: 'System Requirements' },
        { href: '/demo', label: 'Demo Guide' },
        { href: '/gameplay', label: 'Gameplay Overview' },
        { href: '/race-modes', label: 'Race Modes' },
        { href: '/map', label: 'Map' },
        { href: '/customization', label: 'Customization' },
        { href: '/multiplayer', label: 'Multiplayer' },
        { href: '/performance', label: 'Performance' },
        { href: '/cars', label: 'Car List' },
      ]}
      playerLinks={[
        { href: STEAM_URL, label: 'Steam Store Page', external: true },
        { href: X_URL, label: 'Heatwarped on X', external: true },
      ]}
      legalLinks={[
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/source-policy', label: 'Source Policy' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/terms-of-service', label: 'Terms of Use' },
      ]}
      copyright="© 2026 Heatwarped Wiki"
      builtWith="Heatwarped is a trademark of Sealime"
    />
  );
}
