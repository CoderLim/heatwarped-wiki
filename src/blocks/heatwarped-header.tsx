import { HeatwarpedHeader } from '@/components/heatwarped/site-header';

export function HeatwarpedHeaderBlock() {
  const navItems = [
    { href: '/release-date', label: 'Release Date' },
    { href: '/demo', label: 'Demo' },
    { href: '/gameplay', label: 'Gameplay' },
    { href: '/race-modes', label: 'Race Modes' },
    { href: '/map', label: 'Map' },
    { href: '/customization', label: 'Customization' },
    { href: '/cars', label: 'Cars' },
    { href: '/system-requirements', label: 'PC Specs' },
  ];

  return <HeatwarpedHeader navItems={navItems} searchLabel="Search" />;
}
