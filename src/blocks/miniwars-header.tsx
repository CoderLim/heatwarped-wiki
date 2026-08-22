import { m } from '@/paraglide/messages.js';
import { MiniWarsHeader } from '@/components/miniwars/site-header';

export function MiniWarsHeaderBlock() {
  const navItems = [
    { href: '/buildings', label: m['miniwars.nav.buildings']() },
    { href: '/strategy', label: m['miniwars.nav.strategy']() },
    { href: '/systems', label: m['miniwars.nav.systems']() },
    { href: '/tier-list', label: m['miniwars.nav.tier_list']() },
    { href: '/guides', label: m['miniwars.nav.guides']() },
    { href: '/codes', label: m['miniwars.nav.codes']() },
    { href: '/news', label: m['miniwars.nav.news']() },
    { href: '/patch-notes', label: m['miniwars.nav.patch']() },
    { href: '/faq', label: m['miniwars.nav.faq']() },
  ];

  return (
    <MiniWarsHeader
      navItems={navItems}
      searchLabel={m['miniwars.nav.search']()}
    />
  );
}
