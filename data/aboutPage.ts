export const aboutPageHero = {
  title: "About",
  eyebrow: "Overview",
  heading: "About Us",
  ctaPrimary: { label: "Let's Talk", href: "/contact" },
  ctaSecondary: { label: "Our Services", href: "/services" },
};

export const whoWeAre = {
  title: "Who We Are?",
  body: "We’re a small, senior team that blends product thinking with strong engineering. We help businesses modernize, launch new products, and build systems that are easy to operate and evolve.",
};

export const whatWeDoBest = {
  title: "What We Do Best",
  body: "We start with clarity: goals, users, constraints, and success metrics. Then we design the simplest path to value and execute in short milestones—with transparent progress, clean code, and sensible tradeoffs.",
};

export interface TimelineItem {
  id: string;
  month: string;
  year: string;
  location: string;
  title: string;
  description: string;
}

export const companyTimeline = {
  sectionTitle: "Company Timeline",
  heading: "Our History",
  items: [
    {
      id: "1",
      month: "April",
      year: "2018",
      location: "India",
      title: "Founded in India",
      description:
        "Koshatech started with a tight-knit team focused on shipping quality software. Our first projects taught us what we still value today: clear communication, fast iteration, and dependable delivery.",
    },
    {
      id: "2",
      month: "May",
      year: "2020",
      location: "New York, USA",
      title: "New York Office",
      description: "We expanded our footprint to better support clients in the US time zone.",
    },
    {
      id: "3",
      month: "Oct",
      year: "2021",
      location: "ON, Canada",
      title: "Canada Office",
      description: "We grew our team and delivery capacity with partners in Canada.",
    },
    {
      id: "4",
      month: "July",
      year: "2025",
      location: "New Office",
      title: "Looking forward.",
      description: "We continue to grow carefully—adding talent and capabilities where it helps our clients most.",
    },
  ] as TimelineItem[],
};

export interface CoreValueItem {
  id: string;
  title: string;
  line1: string;
  line2: string;
  icon: string
}

export const coreValues = {
  eyebrow: "All Features",
  heading: "Our Core Values",
  tagline:
    "We care about outcomes and craft. Our values keep delivery fast, quality high, and collaboration easy.",

  items: [
    {
      id: "1",
      icon: "mdi:lightbulb-on-outline", // Innovation
      title: "Ensure impactful innovations",
      line1:
        "We stay curious and pragmatic—using new tools only when they improve speed, quality, or user value.",
    },
    {
      id: "2",
      icon: "mdi:handshake-outline", // Integrity
      title: "Integrity",
      line1:
        "We communicate honestly, set realistic expectations, and follow through on what we commit to.",
    },
    {
      id: "3",
      icon: "mdi:account-check-outline", // User Centric
      title: "User-Centric Approach",
      line1:
        "We design around real workflows and real constraints, so the product feels simple and useful.",
    },
    {
      id: "4",
      icon: "mdi:magnify", // Transparency
      title: "Transparency",
      line1:
        "You’ll always know what we’re doing, why we’re doing it, and what’s coming next.",
    },
  ] as CoreValueItem[],
};
export interface WorkLifeItem {
  id: string;
  title: string;
  icon: string;
}
export const workLife = {
  heading: "How we work",
  items: [
    {
      id: "1",
      title: "Continuous learning",
      icon: "mdi:heart-outline",
    },
    {
      id: "2",
      title: "Supportive mentorship",
      icon: "mdi:currency-usd-circle-outline",
    },
    {
      id: "3",
      title: "Direct feedback loops",
      icon: "mdi:monitor-dashboard",
    },
    {
      id: "4",
      title: "Inclusive, open culture",
      icon: "mdi:account-group-outline",
    },
    {
      id: "5",
      title: "Quality-first mindset",
      icon: "mdi:cart-outline",
    },
    {
      id: "6",
      title: "Ownership and execution",
      icon: "mdi:rocket-launch-outline",
    },
    {
      id: "7",
      title: "Global collaboration",
      icon: "mdi:account-tie-outline",
    },
    {
      id: "8",
      title: "Modern toolchain",
      icon: "mdi:gamepad-variant-outline",
    },
  ],
};
export const aboutIntroImages = [
  {
    id: "1",
    src: "/about/code.png",
    alt: "Laptop with code on screen",
  },
  {
    id: "2",
    src: "/about/team.jpg",
    alt: "Teamwork hands together",
  },
  {
    id: "3",
    src: "/about/meeting.jpg",
    alt: "Business meeting discussion",
  },
];