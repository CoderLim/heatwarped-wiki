import { MiniWarsHeader } from '@/components/miniwars/site-header';

export function MiniWarsHeaderBlock() {
  const navItems = [
    { href: '/release-date', label: 'Release Date' },
    { href: '/system-requirements', label: 'System Requirements' },
    { href: '/demo', label: 'Demo' },
    { href: '/gameplay', label: 'Gameplay' },
  ];

  return <MiniWarsHeader navItems={navItems} searchLabel="Search" />;
}
