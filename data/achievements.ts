export interface AchievementItem {
  id: string;
  image: string;
  alt: string;
  label?: string;
}

export const achievementsIntro = {
  title: "Recognition",
  subtitle: "In good company",
};

/** Achievement badges / certifications. Use local paths under /public/achievements/ */
export const achievementItems: AchievementItem[] = [
  {
    id: "1",
    image: "/achievements/top-developer.png",
    alt: "Top Developer",
    label: "Top Developer",
  },
  {
    id: "2",
    image: "/achievements/quality-badge.png",
    alt: "Quality Badge",
    label: "Quality-first",
  },
  {
    id: "3",
    image: "/achievements/innovation.png",
    alt: "Innovation Award",
    label: "Innovation-led",
  },
  {
    id: "4",
    image: "/achievements/excellence.png",
    alt: "Excellence",
    label: "Delivery excellence",
  },
];

/** Partner / client logos - use local paths under /public/partners/ */
export const partnerItems: AchievementItem[] = [
  {
    id: "p1",
    image: "/partners/partner-1.png",
    alt: "Partner 1",
  },
  {
    id: "p2",
    image: "/partners/partner-2.png",
    alt: "Partner 2",
  },
  {
    id: "p3",
    image: "/partners/partner-3.png",
    alt: "Partner 3",
  },
  {
    id: "p4",
    image: "/partners/partner-4.png",
    alt: "Partner 4",
  },
  {
    id: "p5",
    image: "/partners/partner-5.png",
    alt: "Partner 5",
  },
];
