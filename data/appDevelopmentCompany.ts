/**
 * Content for /app-development-company page
 */

export const appDevelopmentHero = {
  badge: "Now booking new projects",
  title: "Mobile App Engineering",
  subtitle: "Build, launch, and iterate with confidence",
  description:
    "Koshatech helps teams go from concept to a shipped app with solid UX, predictable timelines, and production-ready engineering.",
  ctaPrimary: "Request a quote",
  ctaSecondary: "Request a callback",
  subNav: [
    { label: "Problems", href: "#problems" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Case Study", href: "#case-study" },
  ],
};

export const appDevelopmentTrusted = {
  title: "Teams we’ve supported",
};

export interface AppDevTestimonialItem {
  id: string;
  quote: string;
  role: string;
  company: string;
  rating: number;
}

export const appDevelopmentTestimonials = {
  summaryTitle: "Koshatech Reviews",
  rating: "5.0",
  reviewCount: "20 reviews",
  poweredBy: "Powered by Clutch",
  clutchHref: "https://koshtech.com",
  items: [
    {
      id: "tabsquare",
      quote:
        "What stood out most about Koshatech was their product mindset. They questioned assumptions, tightened the scope, and shipped improvements that made the end result stronger.",
      role: "Managing Director",
      company: "TabSquare AI",
      rating: 5,
    },
    {
      id: "iznlabs",
      quote:
        "They worked like a true partner. The team understood our goals quickly and delivered a clean, well-designed app that our users adopted immediately.",
      role: "CEO",
      company: "IZN Labs",
      rating: 5,
    },
    {
      id: "alcyon",
      quote:
        "Strong technical depth and a willingness to iterate. They brought smart suggestions and executed them carefully, which made the collaboration smooth.",
      role: "CEO",
      company: "Alcyon Photonics",
      rating: 5,
    },
    {
      id: "ahpy",
      quote:
        "They were responsive and flexible when requirements changed, and they maintained quality throughout. Delivery stayed predictable and stress-free.",
      role: "CEO",
      company: "AHPY",
      rating: 5,
    },
  ] as AppDevTestimonialItem[],
};

export interface ProblemSolution {
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
}

export const appDevelopmentChallenges = {
  sectionTitle: "Common startup challenges — solved",
  sectionSubtitle:
    "From budgeting and UX to scalability and post-launch support, we help you ship the right product and improve it with real feedback.",
  items: [
    {
      problemTitle: "High Development Costs Draining Your Resources?",
      problemDescription:
        "Startups need to balance quality with budget, but unclear scope and rework can quickly inflate costs.",
      solutionTitle: "Lean scope and smart milestones",
      solutionDescription:
        "We help you focus on what matters, ship in milestones, and avoid waste—so you get value early without sacrificing quality.",
    },
    {
      problemTitle: "Does Your App's Design Fail to Engage Users?",
      problemDescription:
        "If the UX is confusing, users churn. Early traction is hard enough—your app can’t afford friction.",
      solutionTitle: "UX that reduces friction",
      solutionDescription:
        "We design simple flows, clear UI, and fast interfaces—so users reach value quickly and keep coming back.",
    },
    {
      problemTitle: "Are Missed Deadlines Costing You Opportunities?",
      problemDescription:
        "When timelines slip, launches slip. Momentum fades and opportunities disappear.",
      solutionTitle: "Predictable delivery",
      solutionDescription:
        "We plan in small increments, communicate often, and keep scope realistic—so you can launch when you need to.",
    },
    {
      problemTitle: "Will Your App Grow With Your Business?",
      problemDescription:
        "A quick build that can’t scale becomes painful later—slow releases, outages, and rewrites.",
      solutionTitle: "Architecture that scales",
      solutionDescription:
        "We build with clean APIs, solid foundations, and observability—so you can scale features and traffic safely.",
    },
    {
      problemTitle: "Is Your App Secure and Compliant?",
      problemDescription:
        "Security and compliance aren’t optional—and patching them later is expensive.",
      solutionTitle: "Security built in from day one",
      solutionDescription:
        "We implement secure defaults, careful data handling, and testing practices that help you meet requirements without slowing delivery.",
    },
    {
      problemTitle: "What Happens After Your App is Launched?",
      problemDescription:
        "After launch, you’ll need fixes, improvements, and a clear roadmap for iteration.",
      solutionTitle: "Ongoing support that scales with you",
      solutionDescription:
        "We stay involved for maintenance, releases, and feature work—so you can keep shipping without chaos.",
    },
  ] as ProblemSolution[],
};

export const appDevelopmentCollaborate = {
  title: "Ready to build?",
  subtitle: "Share a brief and we’ll respond fast",
};

export interface WhyChooseItem {
  title: string;
  description: string;
  icon?: "piggy" | "palette" | "support" | "users" | "globe" | "shield" | "cycle" | "chart" | "award" | "ai" | "heart";
}

export const appDevelopmentWhyChoose = {
  sectionTitle: "Why teams choose Koshatech",
  heading: "Why Choose Us?",
  subheading:
    "A delivery team that’s fast, careful, and easy to work with.",
  items: [
    { title: "Lean scope, fast iteration", description: "We help you prioritize, ship in milestones, and learn from real users early.", icon: "piggy" },
    { title: "UX that converts", description: "Clean flows and thoughtful UI that reduce friction and improve retention.", icon: "palette" },
    { title: "After launch support", description: "Monitoring, fixes, and new features—without losing momentum.", icon: "support" },
    { title: "Senior delivery team", description: "Engineers who can handle complex work and communicate clearly.", icon: "users" },
    { title: "Cross-platform execution", description: "Native, hybrid, and web—choose what fits your product and timeline.", icon: "globe" },
    { title: "Security-minded builds", description: "Secure defaults, careful data handling, and testing baked into delivery.", icon: "shield" },
    { title: "End-to-end ownership", description: "Discovery to release: one team responsible for outcomes.", icon: "cycle" },
    { title: "Measure what matters", description: "Analytics and feedback loops that guide your roadmap.", icon: "chart" },
    { title: "Experience you can lean on", description: "Practical patterns and fewer surprises when shipping.", icon: "award" },
    { title: "AI where it helps", description: "Search, automation, and smart assistants—implemented safely.", icon: "ai" },
    { title: "Long-term partnerships", description: "We’re built for repeat work: consistent delivery and trust.", icon: "heart" },
  ] as WhyChooseItem[],
};

export const appDevelopmentRecognition = {
  title: "Recognition and highlights",
  subtitle:
    "We care about craft: clean delivery, steady quality, and products that perform in the real world.",
};

export const appDevelopmentPortfolioIntro = {
  title: "Recent work",
  subtitle:
    "A selection of apps and digital products we’ve designed and built with teams across industries.",
  ctaLabel: "Request a quote",
};

/** Portfolio item IDs to show on this page (order: Rekhta, Neostox, Licious, Beycome, Avis) */
export const appDevelopmentPortfolioIds = [
  "rekhta",
  "neostox",
  "licious",
  "beycome",
  "avis",
];

/** Carousel slide config for the 4 portfolio designs (Rekhta, Neostox, Beycome, Avis) */
export interface PortfolioCarouselStat {
  value: number;
  label: string; // e.g. "Traffic*", "Calls*", "Customers", "Downloads"
}

/** How to style the 4 stat blocks on the slide */
export type StatsBlockStyle =
  | "onBackground"   // white text on slide bg, white vertical dividers (Rekhta, Neostox)
  | "whiteBox"      // white stat boxes, colored text (Beycome)
  | "darkerBox";    // slightly darker boxes on slide bg, white text (Avis)

export interface PortfolioCarouselSlideConfig {
  id: string;
  /** Tailwind background class for the slide (fallback) */
  bgClass: string;
  /** Exact hex background for the slide (matches reference designs) */
  bgHex: string;
  stats: PortfolioCarouselStat[];
  /** Optional footnote, e.g. "* in last 6 months only" */
  footnote?: string;
  /** How to render the 4 stat blocks */
  statsStyle: StatsBlockStyle;
  /** For whiteBox: text color in stat boxes (hex). For darkerBox: box background (hex). */
  statBoxHex?: string;
}

export const appDevelopmentCarouselSlides: PortfolioCarouselSlideConfig[] = [
  {
    id: "rekhta",
    bgClass: "bg-[#EE2A47]",
    bgHex: "#EE2A47",
    statsStyle: "onBackground",
    stats: [
      { value: 70, label: "Traffic*" },
      { value: 10, label: "Calls*" },
      { value: 50, label: "Customers" },
      { value: 100, label: "Downloads" },
    ],
    footnote: "* in last 6 months only",
  },
  {
    id: "neostox",
    bgClass: "bg-[#0D9488]",
    bgHex: "#0D9488",
    statsStyle: "onBackground",
    stats: [
      { value: 50, label: "Traffic" },
      { value: 5, label: "Calls*" },
      { value: 20, label: "Customers*" },
      { value: 100, label: "Downloads" },
    ],
    footnote: "* in last 6 months only",
  },
  {
    id: "beycome",
    bgClass: "bg-[#e07c5a]",
    bgHex: "#e07c5a",
    statsStyle: "whiteBox",
    statBoxHex: "#c65d3a",
    stats: [
      { value: 20, label: "Traffic*" },
      { value: 20, label: "Calls*" },
      { value: 40, label: "Customers*" },
      { value: 70, label: "Downloads" },
    ],
    footnote: "* in last 6 months only",
  },
  {
    id: "avis",
    bgClass: "bg-[#C62828]",
    bgHex: "#C62828",
    statsStyle: "darkerBox",
    statBoxHex: "#B71C1C",
    stats: [
      { value: 50, label: "Traffic*" },
      { value: 40, label: "Calls*" },
      { value: 80, label: "Customers*" },
      { value: 150, label: "Downloads*" },
    ],
    footnote: "* last 6 months only",
  },
];

/** Override descriptions for this page to match live site exactly */
export const appDevelopmentPortfolioOverrides: Record<
  string,
  { title?: string; description: string }
> = {
  licious: {
    title: "Licious",
    description:
      "Licious is developed for selling meat and fish food marketplace applications that help the people to buy their meal. With this application, the workers and pounders can sell their food through their agents. The app allows you to buy the fresh meat by categories.",
  },
};

export const appDevelopmentTechStack = {
  sectionTitle:
    "Technologies We use as a Top Mobile Application Development Company",
  sectionSubtitle:
    "As a top mobile applications development company, we follow agile methodologies to ensure timely delivery, from initial ideation to app launch and ongoing maintenance. Our mobile application developers utilize the newest yet the most robust technologies in our tech stack, including React Native, Flutter, Kotlin, Swift, and other industry-leading tools, to craft scalable and secure apps.",
  categories: [
    {
      name: "Design",
      items: ["Figma", "Marvel", "Adobe XD", "Sketch", "Photoshop"],
    },
    {
      name: "Frontend",
      items: [
        "Obj C",
        "Swift",
        "React JS",
        "Vue JS",
        "Angular JS",
        "Xamarin",
        "Kotlin",
        "Flutter",
        "Dot Net",
        "Javascript",
        "Next JS",
        "Three JS",
        "GSAP",
      ],
    },
    {
      name: "Backend",
      items: [
        "GoLang",
        "Spring Boots",
        "Dot Net",
        "Node JS",
        "Laravel",
        "Django",
        "PHP",
        "Python",
        "Kibana",
        "Ruby on Rails",
        "Java",
      ],
    },
    {
      name: "Database",
      items: [
        "MySQL",
        "MongoDB",
        "GraphQL",
        "Redis",
        "PostgreSQL",
        "SQL server",
        "Elastic search",
        "Firebase",
        "Supabase",
        "Appwrite",
      ],
    },
    {
      name: "Infrastructure",
      items: [
        "GoLang",
        "Azure",
        "AWS",
        "Google Cloud",
        "Kubernetes",
        "Docker",
        "Apache",
        "Nginx",
        "OpenShift",
      ],
    },
    {
      name: "AI Technology",
      items: [
        "AI2",
        "GPT-3",
        "Hugging Face Bloom",
        "Stable Diffusion",
        "GPT-J",
        "Dall-E 2",
        "OpenAI Jukebox",
      ],
    },
  ],
};

export interface IndustryItem {
  id: string;
  name: string;
  title: string;
  description: string;
  ctaLabel: string;
  /** Image path under public, e.g. /appdev/industry/education.png */
  image?: string;
}

export const appDevelopmentIndustries = {
  sectionTitle:
    "Industries We Serve as a Custom Mobile Application Development Company",
  items: [
    {
      id: "education",
      name: "Education",
      title: "Empowering Education with Smart & Scalable Mobile Solutions",
      description:
        "The education industry is evolving rapidly, and digital learning has become essential for institutions, educators, and students. Traditional learning methods often struggle with engagement, accessibility, and personalization, making it crucial for educational platforms to adopt innovative solutions. With AI-driven tutoring, interactive learning management systems (LMS), and AR/VR-powered experiences, we create mobile applications that transform education into a more immersive and personalized journey. Whether you're an ed-tech startup or an educational institution, we provide technology that makes learning smarter, faster, and more impactful.",
      ctaLabel: "START YOUR PROJECT",
      image: "/appdev/industry/education.png",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      title: "Transforming Healthcare with Innovative Mobile Solutions",
      description:
        "The healthcare industry is embracing digital transformation to improve patient care, streamline operations, and enhance accessibility. Traditional healthcare systems often struggle with inefficiencies, long wait times, and a lack of personalized patient engagement. With AI-driven diagnostics, telemedicine platforms, and HIPAA-compliant patient management systems, we develop mobile applications that bridge the gap between patients and healthcare providers, ensuring seamless communication and better health outcomes. Whether you're a hospital, clinic, or health-tech startup, our mobile solutions empower you to revolutionize the way healthcare is delivered and experienced.",
      ctaLabel: "START YOUR PROJECT",
      image: "/appdev/industry/healthcare.png",
    },
    {
      id: "ecommerce",
      name: "eCommerce",
      title: "Revolutionizing E-Commerce with Scalable & User-Centric Mobile Solutions",
      description:
        "The e-commerce industry is more competitive than ever, and businesses need fast, intuitive, and seamless mobile experiences to capture customer attention. Slow-loading websites, complicated checkouts, and poor user experience can lead to lost sales and low retention rates. Our mobile solutions enhance online shopping with AI-driven product recommendations, smooth checkout processes, and real-time inventory management, ensuring a frictionless shopping journey for customers. Whether you're launching a new online store or optimizing an existing one, our scalable and high-performance mobile solutions drive engagement, boost sales, and provide the seamless shopping experience modern consumers expect.",
      ctaLabel: "START YOUR PROJECT",
      image: "/appdev/industry/ecom.png",
    },
    {
      id: "restaurant",
      name: "Restaurant",
      title: "Enhancing the Restaurant Experience with Smart Mobile Solutions",
      description:
        "The restaurant industry is rapidly evolving, and digital transformation is key to staying ahead. Long wait times, inefficient order management, and limited customer engagement can hurt business growth. Our mobile solutions streamline restaurant operations with features like online ordering, AI-powered table reservations, and contactless payment systems, ensuring a seamless dining experience for customers while optimizing efficiency for restaurant owners. Whether you're a small café or a large restaurant chain, our technology-driven solutions enhance customer interactions, improve operational workflows, and increase revenue, making dining more convenient and enjoyable for everyone.",
      ctaLabel: "START YOUR PROJECT",
      image: "/appdev/industry/restrau.png",
    },
    {
      id: "real-estate",
      name: "Real Estate",
      title: "Revolutionizing Real Estate with Smart & Interactive Mobile Solutions",
      description:
        "The real estate industry is becoming increasingly digital, and modern buyers expect seamless, immersive, and data-driven experiences. Traditional property searches, manual paperwork, and inefficient communication between agents and buyers can slow down transactions and limit business growth. Our mobile solutions simplify the property buying, selling, and renting process with AI-powered property recommendations, virtual tours, and real-time market insights. Whether you're a real estate agency, property developer, or PropTech startup, our cutting-edge mobile solutions help you connect with buyers, increase conversions, and revolutionize the way properties are showcased and sold.",
      ctaLabel: "START YOUR PROJECT",
      image: "/appdev/industry/realEstate.png",
    },
    {
      id: "fintech",
      name: "FinTech",
      title: "Transforming Fintech with Secure & Scalable Mobile Solutions",
      description:
        "The financial industry is evolving rapidly, and customers expect seamless, fast, and secure digital experiences. Traditional banking and payment systems often struggle with slow transactions, security vulnerabilities, and a lack of personalization. Our fintech mobile solutions address these challenges with AI-powered financial analytics, secure digital wallets, and real-time payment processing, ensuring a smooth and secure user experience. Whether you're a bank, a fintech startup, or a digital payment provider, our scalable and regulatory-compliant solutions enhance financial accessibility, improve security, and empower users with smarter financial management tools.",
      ctaLabel: "START YOUR PROJECT",
      image: "/appdev/industry/finTech.png",
    },
    {
      id: "transport",
      name: "Transport",
      title: "Driving Innovation in Transportation with Smart Mobile Solutions",
      description:
        "The transportation industry faces challenges like inefficient route planning, delayed deliveries, and a lack of real-time tracking. Traditional logistics and mobility systems often struggle with operational inefficiencies and rising customer expectations. Our mobile solutions optimize transportation with AI-driven route optimization, real-time vehicle tracking, and automated fleet management, ensuring faster and more efficient services. Whether you're managing a ride-hailing service, a logistics company, or a public transit system, our technology-driven solutions improve operational efficiency, enhance customer experience, and reduce costs.",
      ctaLabel: "START YOUR PROJECT",
      image: "/appdev/industry/transport.png",
    },
    {
      id: "sports",
      name: "Sports",
      title: "Revolutionizing Sports with Engaging & High-Performance Mobile Solutions",
      description:
        "The sports industry is becoming more digital, with fans, athletes, and organizations demanding immersive and interactive experiences. Traditional methods of fan engagement, team management, and performance tracking often lack real-time insights and personalization. Our mobile solutions bring innovation to the sports world with AI-powered analytics, live streaming, and interactive fan engagement platforms, ensuring a seamless and dynamic experience for all stakeholders. Whether you're a sports league, fitness startup, or event organizer, our cutting-edge technology helps you connect with audiences, improve athlete performance, and redefine the way sports are experienced in the digital age.",
      ctaLabel: "START YOUR PROJECT",
      image: "/appdev/industry/sports.png",
    },
  ] as IndustryItem[],
};

export const appDevelopmentFooterTagline = {
  titleLine1: "KOSHATECH",
  titleLine2: "",
  description:
    "We offer a complete range of development service that caters to every stage of the development process. From ideation and UI/UX design to development, testing, and post-launch support, our expertise and dedication ensure the app meets all business goals while delivering a seamless user experience.",
  badges: [
    {
      type: "verified",
      title: "VERIFIED AGENCY",
      subtitle: "DESIGNRUSH.COM",
    },
    {
      type: "iso",
      title: "CERTIFIED",
      middle: "ISO 9001:2015",
      subtitle: "COMPANY",
    },
  ],
};

export const appDevelopmentFormServices = [
  "Mobile App Development",
  "Website development",
  "Website & Mobile App Development",
  "Customized Software",
  "Business Intelligence",
  "AI/ML Development",
];
