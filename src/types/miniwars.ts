/** Content structures for Mini Wars homepage clone */

export type NavItem = {
  label: string;
  href: string;
};

export type MetaTierItem = {
  tier: 'S' | 'A' | 'B' | 'C';
  category: string;
  code: string;
  name: string;
  href: string;
};

export type DoctrineCard = {
  title: string;
  description: string;
  href: string;
  icon:
    | 'building'
    | 'flag'
    | 'cpu'
    | 'trophy'
    | 'book'
    | 'key'
    | 'file'
    | 'help';
};

export type StrategyCard = {
  title: string;
  subtitle: string;
  href: string;
};

export type BuildingCard = {
  code: string;
  phase: string;
  name: string;
  tier: string;
  description: string;
  tags: string[];
  costNote: string;
  href: string;
};

export type FeaturedStrategy = {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  steps: string;
  href: string;
};

export type NewsCard = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
};

export type GuideCard = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  href: string;
};

export type GlanceItem = {
  label: string;
  value: string;
  href?: string;
};
