export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon ?:string
  ctaLabel?: string;   // made optional
  ctaHref?: string;    // made optional
}


export const servicesIntro = {
  title: "The Koshatech Advantage",
  subtitle:
    "Mobile, web, cloud, and AI services delivered by a senior team—focused on reliability, speed, and measurable outcomes.",
  // ctaLabel: "View All Services",
  ctaHref: "/services",
  ctaLabel: "View All Services",
};

const defaultDescription =
  "Practical, product-first delivery—built for performance, security, and maintainability.";

/** All services (for nav dropdown + /services/[slug] pages) */
export const serviceItems: ServiceItem[] = [
  { id: "ios", title: "iOS", description: defaultDescription, slug: "ios" },
  { id: "android", title: "Android", description: defaultDescription, slug: "android" },
  { id: "blockchain", title: "Blockchain", description: defaultDescription, slug: "blockchain" },
  { id: "flutter", title: "Flutter", description: defaultDescription, slug: "flutter" },
  { id: "cloud-services", title: "Cloud Services", description: defaultDescription, slug: "cloud-services" },
  { id: "web-development", title: "Web development", description: defaultDescription, slug: "web-development" },
  { id: "react-native", title: "React native", description: defaultDescription, slug: "react-native" },
  { id: "pwa", title: "PWA", description: defaultDescription, slug: "pwa" },
  { id: "wearable", title: "Wearable", description: defaultDescription, slug: "wearable" },
  { id: "ar-vr", title: "AR VR", description: defaultDescription, slug: "ar-vr" },
  { id: "iot", title: "Internet of Things", description: defaultDescription, slug: "iot" },
  { id: "dedicated-team", title: "Dedicated development team", description: defaultDescription, slug: "dedicated-team" },
  { id: "metaverse", title: "Metaverse", description: defaultDescription, slug: "metaverse" },
  { id: "devops", title: "DevOps", description: defaultDescription, slug: "devops" },
  { id: "ai-ml-development", title: "AI-ML-development", description: defaultDescription, slug: "ai-ml-development" },
  { id: "software-development", title: "Software development", description: defaultDescription, slug: "software-development" },
  { id: "data-science-analytics", title: "Data science analytics", description: defaultDescription, slug: "data-science-analytics" },
  { id: "business-intelligence", title: "Business intelligence", description: defaultDescription, slug: "business-intelligence" },
  { id: "dapp-development", title: "Dapp development services", description: defaultDescription, slug: "dapp-development" },
  { id: "full-cycle-product", title: "Full cycle product development", description: defaultDescription, slug: "full-cycle-product" },
  { id: "ott-app-development", title: "OTT App Development", description: defaultDescription, slug: "ott-app-development" },
  { id: "nft-development", title: "NFT Development Services", description: defaultDescription, slug: "nft-development" },
  { id: "it-consulting", title: "IT Consulting Services", description: defaultDescription, slug: "it-consulting" },
  { id: "digital-transformation", title: "DIGITAL TRANSFORMATION", description: defaultDescription, slug: "digital-transformation" },
  { id: "application-development", title: "APPLICATION DEVELOPMENT", description: defaultDescription, slug: "application-development" },
  { id: "user-experience-design", title: "USER EXPERIENCE DESIGN", description: defaultDescription, slug: "user-experience-design" },
  { id: "ai-iot", title: "ARTIFICIAL INTELLIGENCE & IOT", description: defaultDescription, slug: "ai-iot" },
];

/** Four cards shown on home page under "The Koshatech Advantage" */
export const homePageServiceItems: ServiceItem[] = [
  { id: "digital-transformation", title: "DIGITAL TRANSFORMATION", description: defaultDescription, slug: "digital-transformation" },
  { id: "application-development", title: "APPLICATION DEVELOPMENT", description: defaultDescription, slug: "application-development" },
  { id: "user-experience-design", title: "USER EXPERIENCE DESIGN", description: defaultDescription, slug: "user-experience-design" },
  { id: "ai-iot", title: "ARTIFICIAL INTELLIGENCE & IOT", description: defaultDescription, slug: "ai-iot" },
];
