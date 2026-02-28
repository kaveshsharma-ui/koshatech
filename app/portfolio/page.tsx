import { portfolioItems } from "@/data";
import { ContactSection } from "@/components/sections";
import { PortfolioPageClient } from "@/components/sections/PortfolioPageClient";

export const metadata = {
  title: "Portfolio | Koshatech",
  description: "Our work – mobile apps, websites, and digital products we've built.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioPageClient items={portfolioItems} />
      <ContactSection />
    </>
  );
}
