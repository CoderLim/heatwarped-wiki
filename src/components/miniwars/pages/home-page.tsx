import {
  CtaSection,
  DoctrineSection,
  FeaturedStrategiesSection,
  GuidesSection,
  HeroSection,
  MetaGuideSection,
  MustBuildSection,
  NewsSection,
  TopStrategiesSection,
  WhatIsSection,
} from '@/components/miniwars';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsSection />
      <DoctrineSection />
      <TopStrategiesSection />
      <MustBuildSection />
      <FeaturedStrategiesSection />
      <NewsSection />
      <GuidesSection />
      <MetaGuideSection />
      <CtaSection />
    </>
  );
}
