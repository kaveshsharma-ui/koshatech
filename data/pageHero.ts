export interface PageHeroData {
  title: string;
  subtitle: string;
  ctaPrimary?: { label: string; href: string };
}

export const pageHero: Record<string, PageHeroData> = {
  about: {
    title: "About Us",
    subtitle:
      "One team, one love – Innovation. We dream, architect, design and develop.",
    ctaPrimary: { label: "Let's Talk", href: "/contact" },
  },
  services: {
    title: "Services",
    subtitle:
      "Explore what we can build for you—apps, platforms, and AI systems.",
    ctaPrimary: { label: "Let's Talk", href: "/contact" },
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Our work – apps and websites we've crafted for clients worldwide.",
    ctaPrimary: { label: "Let's Talk", href: "/contact" },
  },
  blog: {
    title: "Latest Blog",
    subtitle: "Insights, tutorials, and industry updates.",
    ctaPrimary: { label: "Let's Talk", href: "/contact" },
  },
  contact: {
    title: "Contact Us",
    subtitle: "Share a quick brief. We’ll reply within 1 business day.",
    // ctaPrimary: { label: "Let's Talk", href: "/contact" },
  },
};
