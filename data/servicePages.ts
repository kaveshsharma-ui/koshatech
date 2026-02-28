import { serviceItems } from "./services";

export interface ServicePageHero {
  title: string;
  subtitle: string;
  tagline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface TechStackCategory {
  name: string;
  items: string[];
}

export interface ServicePageContent {
  slug: string;
  hero: ServicePageHero;
  intro: {
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  elevateHeading: string;
  features: ServiceFeature[];
  empowering: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    ctaHeading: string;
    ctaSubtext: string;
    ctaHref: string;
  };
  techStack: {
    heading: string;
    ctaLabel: string;
    ctaHref: string;
    categories: TechStackCategory[];
  };
}

const defaultCtas = {
  ctaPrimary: { label: "Let's Talk", href: "/contact" },
  ctaSecondary: { label: "Our Services", href: "/services" },
};

/** Full content for iOS App Development */
const iosServiceContent: ServicePageContent = {
  slug: "ios",
  hero: {
    title: "iOS App Development",
    subtitle: "iPhone & iPad app development",
    tagline:
      "Launch high-performance iOS apps with polished UX, secure data, and smooth releases.",
    ...defaultCtas,
  },
  intro: {
    heading: "iOS apps that feel fast, modern, and reliable",
    body: "We design and build iOS experiences that load quickly, stay stable, and make the core workflow effortless. From MVPs to production apps, we focus on quality that holds up after launch.",
    ctaLabel: "Let's Talk",
    ctaHref: "/contact",
  },
  elevateHeading: "What you get with Koshatech iOS development",
  features: [
    {
      title: "Product & technical discovery",
      description:
        "We align on users, scope, and constraints, then pick the right approach (native, hybrid, or web) to hit your timeline and quality bar.",
    },
    {
      title: "iOS-first UI/UX",
      description:
        "Clean, accessible UI that matches Apple conventions and reduces friction—so users can get value quickly and confidently.",
    },
    {
      title: "Native iOS engineering",
      description:
        "Well-structured code, resilient networking, and thoughtful performance work—built to scale with features and traffic.",
    },
    {
      title: "Testing & release confidence",
      description:
        "We add the right level of automated tests and QA so you can ship updates with fewer regressions and faster cycles.",
    },
    {
      title: "Deployment & ongoing iteration",
      description:
        "App Store readiness, crash monitoring, analytics, and a roadmap for improving the product after launch.",
    },
  ],
  empowering: {
    heading: "A delivery team that stays close to outcomes",
    subheading: "Design + engineering that makes iOS apps feel effortless",
    paragraphs: [
      "Koshatech helps teams ship iOS apps with strong foundations: clear architecture, reliable APIs, and user journeys that don’t confuse people.",
      "We build for real-world conditions—slow networks, large data sets, edge cases, and fast iteration—so your app stays stable as it grows.",
      "Whether you need an MVP, a redesign, or a full rebuild, we’ll help you move quickly without accumulating technical debt you’ll regret later.",
    ],
    ctaHeading: "Ready to plan your iOS roadmap?",
    ctaSubtext:
      "Share your goals and constraints, and we’ll propose a clear plan for shipping your next iOS release.",
    ctaHref: "/contact",
  },
  techStack: {
    heading: "Tech stack we use for iOS development",
    ctaLabel: "Explore services",
    ctaHref: "/services",
    categories: [
      { name: "Languages & UI", items: ["Swift", "SwiftUI", "Objective-C (legacy)"] },
      { name: "Apple platforms", items: ["iOS", "iPadOS", "watchOS", "tvOS"] },
      {
        name: "Frameworks & tooling",
        items: ["Cocoa Touch", "Combine", "URLSession", "Xcode"],
      },
      { name: "Database", items: ["SQLite", "Core Data"] },
      { name: "Quality", items: ["XCTest", "Crash reporting", "Analytics"] },
    ],
  },
};
export const blockchainServiceContent: ServicePageContent = {
  slug: "blockchain",
  hero: {
    title: "Blockchain Development",
    subtitle: "dApps, smart contracts, and integrations",
    tagline:
      "Build secure blockchain products with clear tradeoffs, thorough testing, and production-ready deployment practices.",
    ...defaultCtas,
  },
  intro: {
    heading: "Blockchain solutions built for real users",
    body: "From smart contracts to full dApps, we help you ship blockchain products that are secure, usable, and maintainable. We’ll guide architecture choices so you don’t over-engineer—or under-secure—your system.",
    ctaLabel: "Talk to us",
    ctaHref: "/contact",
  },
  elevateHeading: "What we deliver in blockchain projects",
  features: [
    {
      title: "Smart contract development",
      description:
        "Contract design, implementation, and testing with a focus on security, upgrade strategy, and clear business logic.",
    },
    {
      title: "dApp development",
      description:
        "Frontends, wallets, and backend services that make blockchain products usable—not just technically correct.",
    },
    {
      title: "Wallet and integration work",
      description:
        "WalletConnect, MetaMask flows, on/off-ramp integrations, and secure key-management patterns depending on your risk profile.",
    },
    {
      title: "Token and NFT utilities",
      description:
        "Token standards, metadata, minting logic, and marketplace integrations—implemented with clarity and proper limits.",
    },
    {
      title: "Audits & hardening support",
      description:
        "Threat modeling, internal reviews, and collaboration with external auditors to reduce risk before production release.",
    },
  ],
  empowering: {
    heading: "Security-first blockchain engineering",
    subheading: "Clear architecture, careful testing, and honest tradeoffs",
    paragraphs: [
      "Koshatech builds blockchain products with a pragmatic mindset: security first, UX that users can understand, and systems that your team can operate.",
      "We help you choose the right chain and architecture, design contracts with guardrails, and implement flows that reduce user error.",
      "If blockchain isn’t the right tool for the job, we’ll tell you early—and propose alternatives that get you to the same business outcome.",
    ],
    ctaHeading: "Want to validate your blockchain approach?",
    ctaSubtext:
      "Share your use case and constraints—we’ll outline the simplest secure path to production.",
    ctaHref: "/contact",
  },
  techStack: {
    heading: "Tech stack we use for blockchain",
    ctaLabel: "Explore services",
    ctaHref: "/services",
    categories: [
      { name: "Networks", items: ["Ethereum", "Polygon", "Solana"] },
      { name: "Languages", items: ["Solidity", "Rust"] },
      {
        name: "Frameworks & tooling",
        items: ["Hardhat", "Foundry", "Ethers.js", "Web3.js"],
      },
      { name: "Wallet & dApp Tools", items: ["MetaMask", "WalletConnect"] },
      { name: "Storage", items: ["IPFS", "Filecoin"] },
    ],
  },
};

/** Build generic service page content for services that don't have custom content yet */
function buildGenericServiceContent(slug: string, title: string): ServicePageContent {
  return {
    slug,
    hero: {
      title: `${title} Services`,
      subtitle: `${title} Company`,
      tagline: `Production-ready ${title.toLowerCase()} delivery with clear milestones, solid quality, and reliable support.`,
      ...defaultCtas,
    },
    intro: {
      heading: `Build Powerful Solutions with Expert ${title}`,
      body: `We help you plan, design, and build ${title.toLowerCase()} that’s easy to use and easy to maintain. Expect clean implementation, transparent progress, and a focus on outcomes.`,
      ctaLabel: "Let's Talk",
      ctaHref: "/contact",
    },
    elevateHeading: `Elevate Your Business with Expert ${title}`,
    features: [
      {
        title: "Consultation & Strategy",
        description: `Our adept team offers insightful consultations, helping you choose the right approach and tech stack that aligns with your unique requirements.`,
      },
      {
        title: "Design & User Experience",
        description: `We craft captivating experiences that resonate with users' expectations, ensuring your product stands out with impeccable design.`,
      },
      {
        title: "Custom Development",
        description: `From startups to enterprises, we deliver scalable solutions. Our developers specialize in custom implementations that bring your vision to life.`,
      },
      {
        title: "Rigorous Testing",
        description: `Safety and performance are our cornerstones. We ensure your application remains glitch-free and secure for a seamless user experience.`,
      },
      {
        title: "Deployment & Support",
        description: `We ensure your brand resonates across every platform your users engage with, with ongoing support and maintenance.`,
      },
    ],
    empowering: {
      heading: `Empowering Your Business with Tailored ${title}`,
        subheading: `A delivery partner for fast-moving teams`,
      paragraphs: [
        `Koshatech delivers ${title.toLowerCase()} with a practical approach: scope that’s realistic, engineering that’s clean, and releases that don’t surprise you.`,
        `We’ve built products across industries and can help you avoid common pitfalls while still moving quickly.`,
      ],
      ctaHeading: "Join Us to Redefine Possibilities",
        ctaSubtext: `Share your goals and timeline—we’ll help you plan the next milestone and ship it.`,
      ctaHref: "/contact",
    },
    techStack: {
      heading: `Tech Stack We Use For ${title}`,
      ctaLabel: "Explore More",
      ctaHref: "/services",
      categories: [
        { name: "Technologies", items: ["Modern frameworks", "Cloud-native", "API-first"] },
        { name: "Tools", items: ["CI/CD", "Testing", "Monitoring"] },
        { name: "Methodology", items: ["Agile", "Best practices", "Security-first"] },
      ],
    },
  };
}

const servicePageContentMap: Record<string, ServicePageContent> = {
  ios: iosServiceContent,
  blockchain:blockchainServiceContent

};

/** Get full page content for a service slug. Uses custom content for iOS, generic for others. */
export function getServicePageContent(slug: string): ServicePageContent | null {
  if (servicePageContentMap[slug]) return servicePageContentMap[slug];
  const service = serviceItems.find((s) => s.slug === slug);
  if (!service) return null;
  return buildGenericServiceContent(slug, service.title);
}
