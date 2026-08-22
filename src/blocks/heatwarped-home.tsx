import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';
import {
  HeatwarpedHomePage,
  type HeatwarpedHomeCopy,
} from '@/components/heatwarped/home-page';

export function HeatwarpedHome() {
  const copy: HeatwarpedHomeCopy = {
    nav: [
      { href: '/release-date', label: m['heatwarped.nav.release_date']() },
      {
        href: '/system-requirements',
        label: m['heatwarped.nav.system_requirements'](),
      },
      { href: '/demo', label: m['heatwarped.nav.demo']() },
      { href: '/gameplay', label: m['heatwarped.nav.gameplay']() },
    ],
    steamLabel: m['heatwarped.nav.steam'](),
    menuLabel: m['heatwarped.nav.menu'](),
    heroKicker: m['heatwarped.hero.kicker'](),
    heroTitle: m['heatwarped.hero.title'](),
    heroDescription: m['heatwarped.hero.description'](),
    wishlistLabel: m['heatwarped.hero.wishlist'](),
    demoLabel: m['heatwarped.hero.demo'](),
    cardsTitle: m['heatwarped.cards.title'](),
    cards: [
      {
        href: '/release-date',
        label: m['heatwarped.cards.release.title'](),
        description: m['heatwarped.cards.release.description'](),
        meta: m['heatwarped.cards.release.meta'](),
      },
      {
        href: '/system-requirements',
        label: m['heatwarped.cards.system.title'](),
        description: m['heatwarped.cards.system.description'](),
        meta: m['heatwarped.cards.system.meta'](),
      },
      {
        href: '/demo',
        label: m['heatwarped.cards.demo.title'](),
        description: m['heatwarped.cards.demo.description'](),
        meta: m['heatwarped.cards.demo.meta'](),
      },
      {
        href: '/gameplay',
        label: m['heatwarped.cards.gameplay.title'](),
        description: m['heatwarped.cards.gameplay.description'](),
        meta: m['heatwarped.cards.gameplay.meta'](),
      },
    ],
    glanceTitle: m['heatwarped.glance.title'](),
    glanceIntro: m['heatwarped.glance.intro'](),
    facts: [
      { label: m['heatwarped.glance.developer'](), value: 'Sealime Team' },
      { label: m['heatwarped.glance.publisher'](), value: 'Sealime' },
      { label: m['heatwarped.glance.platforms'](), value: 'PC (Steam)' },
      { label: m['heatwarped.glance.release_date'](), value: 'TBA' },
      {
        label: m['heatwarped.glance.demo'](),
        value: m['heatwarped.glance.demo_value'](),
      },
      {
        label: m['heatwarped.glance.genre'](),
        value: m['heatwarped.glance.genre_value'](),
      },
    ],
    featuresTitle: m['heatwarped.features.title'](),
    featuresIntro: m['heatwarped.features.intro'](),
    features: [
      {
        icon: 'map',
        title: m['heatwarped.features.world.title'](),
        description: m['heatwarped.features.world.description'](),
      },
      {
        icon: 'wrench',
        title: m['heatwarped.features.customization.title'](),
        description: m['heatwarped.features.customization.description'](),
      },
      {
        icon: 'scene',
        title: m['heatwarped.features.scene.title'](),
        description: m['heatwarped.features.scene.description'](),
      },
      {
        icon: 'forum',
        title: m['heatwarped.features.forum.title'](),
        description: m['heatwarped.features.forum.description'](),
      },
      {
        icon: 'music',
        title: m['heatwarped.features.soundtrack.title'](),
        description: m['heatwarped.features.soundtrack.description'](),
      },
      {
        icon: 'pedigree',
        title: m['heatwarped.features.team.title'](),
        description: m['heatwarped.features.team.description'](),
      },
    ],
    developersTitle: m['heatwarped.developers.title'](),
    developersBody: m['heatwarped.developers.body'](),
    developersDetail: m['heatwarped.developers.detail'](),
    developersCta: m['heatwarped.developers.cta'](),
    updatesTitle: m['heatwarped.updates.title'](),
    updatesIntro: m['heatwarped.updates.intro'](),
    updateDate: m['heatwarped.updates.date'](),
    updateTitle: m['heatwarped.updates.reveal.title'](),
    updateBody: m['heatwarped.updates.reveal.body'](),
    updateCta: m['heatwarped.updates.reveal.cta'](),
    footerText: m['heatwarped.footer.text'](),
    footerDisclaimer: m['heatwarped.footer.disclaimer'](),
  };
  const locale = getLocale();
  const baseUrl =
    typeof window === 'undefined'
      ? 'https://heatwarped.com'
      : window.location.origin;
  const schemaJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Heatwarped',
    url: `${baseUrl}/`,
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }).replace(/</g, '\\u003c');
  return <HeatwarpedHomePage copy={copy} schemaJson={schemaJson} />;
}
