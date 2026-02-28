import {
  AboutPageHero,
  CompanyTimelineSection,
  CoreValuesSection,
  WorkLifeSection,
} from "@/components/sections/about";
import { ContactSection } from "@/components/sections";
import { AboutIntroSection } from "@/components/sections/about/AboutIntroSection";

export const metadata = {
  title: "About Us | Koshatech",
  description:
    "Who we are, what we do best, our history, core values, and work life. Mobile App Development Company.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageHero />
      <AboutIntroSection />
      <CompanyTimelineSection />
      <CoreValuesSection />
      <WorkLifeSection />
      {/* <AboutOfficesSection /> */}
      <ContactSection />
    </main>
  );
}
