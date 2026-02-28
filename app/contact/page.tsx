import { ContactSection } from "@/components/sections";
import { AnimatedPageHero } from "@/components/AnimatedPageHero";

export const metadata = {
  title: "Contact | Koshatech",
  description: "Share a short brief and we’ll get back within 1 business day.",
};

export default function ContactPage() {
  return (
    <main>
      <AnimatedPageHero slug="contact" />
      <ContactSection />
    </main>
  );
}
