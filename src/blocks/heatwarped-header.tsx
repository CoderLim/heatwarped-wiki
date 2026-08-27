import { HeatwarpedHeader } from '@/components/heatwarped/site-header';

export function HeatwarpedHeaderBlock() {
  const navItems = [
    { href: '/release-date', label: 'Release Date' },
    { href: '/demo', label: 'Demo' },
    { href: '/system-requirements', label: 'PC Specs' },
    { href: '/gameplay', label: 'Gameplay' },
    { href: '/cars', label: 'Cars' },
    { href: '/map', label: 'Map' },
    {
      href: '/customization',
      label: 'More',
      children: [
        { href: '/customization', label: 'Customization' },
        { href: '/race-modes', label: 'Race Modes' },
        { href: '/multiplayer', label: 'Multiplayer' },
        { href: '/performance', label: 'Performance' },
      ],
    },
  ];

  return <HeatwarpedHeader navItems={navItems} searchLabel="Search" />;
}
