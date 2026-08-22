import { m } from '@/paraglide/messages.js';
import { MiniWarsFooter } from '@/components/miniwars/site-footer';

export function MiniWarsFooterBlock() {
  return (
    <MiniWarsFooter
      blurb={m['miniwars.footer.blurb']()}
      disclaimer={m['miniwars.footer.disclaimer']()}
      codexTitle={m['miniwars.footer.codex']()}
      playersTitle={m['miniwars.footer.players']()}
      codexLinks={[
        { href: '/buildings', label: m['miniwars.nav.buildings']() },
        { href: '/strategy', label: m['miniwars.footer.strategies']() },
        { href: '/systems', label: m['miniwars.footer.systems']() },
        { href: '/tier-list', label: m['miniwars.nav.tier_list']() },
      ]}
      playerLinks={[
        { href: '/codes', label: m['miniwars.nav.codes']() },
        { href: '/guides', label: m['miniwars.footer.guides']() },
        { href: '/news', label: m['miniwars.footer.news']() },
        { href: '/patch-notes', label: m['miniwars.footer.patch_notes']() },
        { href: '/faq', label: m['miniwars.nav.faq']() },
      ]}
      copyright={m['miniwars.footer.copyright']()}
      builtWith={m['miniwars.footer.built_with']()}
    />
  );
}
