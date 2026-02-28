import { notFound } from "next/navigation";
import { getServicePageContent } from "@/data/servicePages";
import { serviceItems } from "@/data";
import {
  ServicePageHero,
  ServiceIntroSection,
  ServiceFeatureCardsSection,
  ServiceEmpoweringSection,
} from "@/components/sections/services";
import { ContactSection } from "@/components/sections";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceItems.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const content = getServicePageContent(slug);
  if (!content) return { title: "Service | Koshatech" };
  return {
    title: `${content.hero.title} | Koshatech`,
    description: content.hero.tagline,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const content = getServicePageContent(slug);
  if (!content) notFound();

  return (
    <main>
      <ServicePageHero data={content.hero} />
      <ServiceIntroSection data={content.intro} />
      <ServiceFeatureCardsSection
        heading={content.elevateHeading}
        features={content.features}
      />
      <ServiceEmpoweringSection
        empowering={content.empowering}
        techStack={content.techStack}
      />
      <ContactSection />
    </main>
  );
}
