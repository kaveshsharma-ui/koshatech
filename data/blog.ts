export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
  image: string;
}

export const blogIntro = {
  title: "Insights",
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "agentic-ai-ambient-computing",
    category: "Artificial Intelligence",
    title: "Agentic AI, spatial interfaces, and what comes next",
    date: "July 31, 2025",
    excerpt:
      "A practical look at where agentic AI and ambient computing are heading—and what product teams should do now to stay ahead.",
    href: "/blog/agentic-ai-ambient-computing",
    image: "/blog/chatgptimage.png",
  },
  {
    id: "2",
    slug: "how-to-build-mvp-and-attract-fund-2025",
    category: "Artificial Intelligence",
    title: "How to build an MVP that’s ready for investors",
    date: "February 5, 2025",
    excerpt:
      "A step-by-step guide to validating your idea, shipping a focused MVP, and telling a story investors can understand.",
    href: "/blog/how-to-build-mvp-and-attract-fund-2025",
    image: "/blog/blog-2.png",
  },
  {
    id: "3",
    slug: "mlops-backbone-of-modern-ml-apps",
    category: "Artificial Intelligence",
    title: "MLOps basics: shipping ML that doesn’t break in production",
    date: "January 22, 2025",
    excerpt:
      "What MLOps means in practice: data pipelines, deployment, monitoring, and the habits that keep models reliable over time.",
    href: "/blog/mlops-backbone-of-modern-ml-apps",
    image: "/blog/MLOps-Cover.png",
  },
  {
    id: "4",
    slug: "ai-in-cybersecurity-2025",
    category: "Artificial Intelligence",
    title: "AI in security: faster detection, better response",
    date: "December 18, 2024",
    excerpt:
      "How teams use AI to catch anomalies earlier, reduce alert fatigue, and respond with clearer playbooks—without false confidence.",
    href: "/blog/ai-in-cybersecurity-2025",
    image: "/blog/clutchblog.png",
  },
  {
    id: "5",
    slug: "cloud-native-development-best-practices",
    category: "Cloud Computing",
    title: "Cloud-native best practices for scalable apps",
    date: "November 30, 2024",
    excerpt:
      "Design patterns and platform choices that improve reliability: containers, CI/CD, observability, and sensible service boundaries.",
    href: "/blog/cloud-native-development-best-practices",
    image: "/blog/design.png",
  },
  {
    id: "6",
    slug: "blockchain-beyond-cryptocurrency",
    category: "Blockchain",
    title: "Blockchain outside crypto: where it actually helps",
    date: "October 14, 2024",
    excerpt:
      "A grounded overview of real enterprise use cases—plus the tradeoffs teams should consider before choosing a chain.",
    href: "/blog/blockchain-beyond-cryptocurrency",
    image: "/blog/represent.png",
  },
  {
    id: "7",
    slug: "devops-automation-tools-2025",
    category: "DevOps",
    title: "DevOps automation: what’s worth adopting in 2025",
    date: "September 25, 2024",
    excerpt:
      "A shortlist of tools and workflows that improve delivery speed—without turning your pipeline into a fragile science project.",
    href: "/blog/devops-automation-tools-2025",
    image: "/blog/topdev.png",
  },
  {
    id: "8",
    slug: "native-vs-hybrid-mobile-app-development",
    category: "Mobile App Development",
    title: "Native vs hybrid: choosing the right mobile approach",
    date: "February 2, 2024",
    excerpt:
      "A clear comparison of native and hybrid development, including tradeoffs, team skills, cost, and when each approach makes sense.",
    href: "/native-vs-hybrid-mobile-app-development",
    image: "/blog/native.jpg",
  },
  {
    id: "9",
    slug: "generative-ai-enterprise-transformation",
    category: "Artificial Intelligence",
    title: "Generative AI for operations: real workflow wins",
    date: "July 3, 2024",
    excerpt:
      "Where GenAI helps most in enterprises: internal tools, knowledge retrieval, customer support, and safe automation patterns.",
    href: "/blog/generative-ai-enterprise-transformation",
    image: "/blog/mobile-app-first.png",
  }
];
