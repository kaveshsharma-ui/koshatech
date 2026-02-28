export interface NavLink {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

export const navigation: NavLink[] = [
  { href: "/", label: "Home" },
  // { href: "/app-development-company", label: "App Development Company" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/ios", label: "iOS" },
      { href: "/services/android", label: "Android" },
      { href: "/services/blockchain", label: "Blockchain" },
      { href: "/services/flutter", label: "Flutter" },
      { href: "/services/cloud-services", label: "Cloud Services" },
      { href: "/services/web-development", label: "Web development" },
      { href: "/services/react-native", label: "React native" },
      { href: "/services/pwa", label: "PWA" },
      { href: "/services/wearable", label: "Wearable" },
      { href: "/services/ar-vr", label: "AR VR" },
      { href: "/services/iot", label: "Internet of Things" },
      { href: "/services/dedicated-team", label: "Dedicated development team" },
      { href: "/services/metaverse", label: "Metaverse" },
      { href: "/services/devops", label: "DevOps" },
      { href: "/services/ai-ml-development", label: "AI-ML-development" },
      { href: "/services/software-development", label: "Software development" },
      { href: "/services/data-science-analytics", label: "Data science analytics" },
      { href: "/services/business-intelligence", label: "Business intelligence" },
      { href: "/services/dapp-development", label: "Dapp development services" },
      { href: "/services/full-cycle-product", label: "Full cycle product development" },
      { href: "/services/ott-app-development", label: "OTT App Development" },
      { href: "/services/nft-development", label: "NFT Development Services" },
      { href: "/services/it-consulting", label: "IT Consulting Services" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  // { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
