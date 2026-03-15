export interface PortfolioItem {
  id: string;
  title: string;
  tags: string[];
  slug: string;
  image: string;
  description?: string;
  bgColor?: string;
  stats?: string;
}
export const portfolioIntro = {
  title: "Types of Projects",
  sectionTitle: "Portfolio",
  ctaLabel: "View All",
  ctaHref: "/portfolio",
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "web-apps",
    title: "Web Applications",
    tags: ["Full-stack", "React", "Next.js", "Node.js"],
    slug: "web-apps",
    image: "/portfolio/Tabsquare_ai.svg",
    bgColor: "bg-emerald-200",
    description: "Custom web applications built for scalability, performance, and great user experience.",
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    tags: ["iOS", "Android", "React Native", "Cross-platform"],
    slug: "mobile-apps",
    image: "/portfolio/Aisera.svg",
    bgColor: "bg-indigo-200",
    description: "Native and cross-platform mobile applications for consumer and enterprise use.",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    tags: ["AI", "ML", "Data Science", "Automation"],
    slug: "ai-ml",
    image: "/portfolio/Alcyon.svg",
    bgColor: "bg-sky-200",
    description: "AI-powered platforms and machine learning solutions for automation and insights.",
  },
  {
    id: "ecommerce",
    title: "E-commerce & Marketplaces",
    tags: ["E-commerce", "Payments", "Inventory", "Checkout"],
    slug: "ecommerce",
    image: "/portfolio/Avify.svg",
    bgColor: "bg-rose-200",
    description: "Online stores, marketplaces, and commerce platforms with secure payments and fulfillment.",
  },
  {
    id: "enterprise",
    title: "Enterprise Software",
    tags: ["SaaS", "B2B", "Integrations", "APIs"],
    slug: "enterprise",
    image: "/portfolio/Giate.svg",
    bgColor: "bg-orange-200",
    description: "Enterprise-grade software, internal tools, and B2B platforms with robust integrations.",
  },
  {
    id: "healthcare-fintech",
    title: "Healthcare & Fintech",
    tags: ["Healthcare", "Fintech", "Compliance", "Security"],
    slug: "healthcare-fintech",
    image: "/portfolio/curePharma.png",
    bgColor: "bg-purple-200",
    description: "Healthcare and financial technology solutions with compliance and security in mind.",
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    tags: ["Data Engineering", "Cloud", "Analytics", "Dashboards"],
    slug: "data-analytics",
    image: "/portfolio/blueTab.png",
    bgColor: "bg-cyan-200",
    description: "Data pipelines, analytics platforms, and business intelligence dashboards.",
  },
  {
    id: "brand-websites",
    title: "Brand & Marketing Websites",
    tags: ["Website", "UX", "Brand", "Content"],
    slug: "brand-websites",
    image: "/portfolio/enigma.png",
    bgColor: "bg-emerald-300",
    description: "Brand websites, marketing sites, and content-driven digital experiences.",
  },
];
