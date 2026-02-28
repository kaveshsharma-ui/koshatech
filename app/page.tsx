import dynamic from "next/dynamic";
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  // BlogSection,
} from "@/components/sections";
import { homePageServiceItems } from "@/data";

const PortfolioSection = dynamic(() =>
  import("@/components/sections/PortfolioSection").then(
    (mod) => mod.PortfolioSection,
  ),
);

const TestimonialsSection = dynamic(() =>
  import("@/components/sections/TestimonialsSection").then(
    (mod) => mod.TestimonialsSection,
  ),
);

const ClientsSection = dynamic(() =>
  import("@/components/sections/ClientsSection").then(
    (mod) => mod.ClientsSection,
  ),
);

const AchievementsSection = dynamic(() =>
  import("@/components/sections/AchievementsSection").then(
    (mod) => mod.AchievementsSection,
  ),
);

const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then(
    (mod) => mod.ContactSection,
  ),
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection items={homePageServiceItems} />
      <PortfolioSection maxItems={6} />
      <TestimonialsSection maxItems={4} />
      <ClientsSection />
      {/* <BlogSection maxItems={3} /> */}
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
