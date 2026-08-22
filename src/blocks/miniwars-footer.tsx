import { MiniWarsFooter } from '@/components/miniwars/site-footer';

export function MiniWarsFooterBlock() {
  return (
    <MiniWarsFooter
      blurb="Independent Heatwarped reference focused on verified Steam and developer information. Unconfirmed release dates, platforms, cars, and features are intentionally not presented as fact."
      disclaimer="UNOFFICIAL FAN-MADE WIKI · NOT AFFILIATED WITH SEALIME"
      codexTitle="Heatwarped Info"
      playersTitle="Play & Follow"
      codexLinks={[
        { href: '/release-date', label: 'Heatwarped Release Date' },
        { href: '/system-requirements', label: 'Heatwarped System Requirements' },
      ]}
      playerLinks={[
        { href: '/demo', label: 'Heatwarped Demo' },
        { href: '/gameplay', label: 'Heatwarped Gameplay' },
      ]}
      copyright="Heatwarped Wiki"
      builtWith="Sources checked against official channels"
    />
  );
}
