import { ServicesSection } from "@/components/sections";
import { AnimatedPageHero } from "@/components/AnimatedPageHero";

export const metadata = {
  title: "Services | Koshatech",
  description:
    "Digital transformation, application development, UX design, AI & IoT. View all our services.",
};

export default function ServicesPage() {
  return (
    <main>
      <AnimatedPageHero slug="services" />
      <ServicesSection />
    </main>
  );
}
