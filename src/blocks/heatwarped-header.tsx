import { HeatwarpedHeader } from '@/components/heatwarped/site-header';

export function HeatwarpedHeaderBlock() {
  const navItems = [
    { href: '/release-date', label: 'Release Date' },
    { href: '/system-requirements', label: 'System Requirements' },
    { href: '/demo', label: 'Demo' },
    { href: '/gameplay', label: 'Gameplay' },
    { href: '/cars', label: 'Cars' },
  ];

  return <HeatwarpedHeader navItems={navItems} searchLabel="Search" />;
}
