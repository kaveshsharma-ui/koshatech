import NextDynamic from "next/dynamic";
import { AppDevHeader, AppDevHero } from "@/components/appdev";
import { ResultOriented } from "@/components/appdev/ResultOriented";

// Ensure this route is pre-rendered on the server with ISR
export const dynamic = "force-static";
export const revalidate = 60; // Regenerate at most once every 60 seconds

const AppDevChallenges = NextDynamic(() =>
  import("@/components/appdev/AppDevChallenges").then(
    (mod) => mod.AppDevChallenges,
  ),
);

const AppDevTestimonials = NextDynamic(() =>
  import("@/components/appdev/AppDevTestimonials").then(
    (mod) => mod.AppDevTestimonials,
  ),
);

const AppDevWhyChoose = NextDynamic(() =>
  import("@/components/appdev/AppDevWhyChoose").then(
    (mod) => mod.AppDevWhyChoose,
  ),
);

const AppDevAwards = NextDynamic(() =>
  import("@/components/appdev/AppDevAwards").then(
    (mod) => mod.AppDevAwards,
  ),
);

const AppDevPortfolio = NextDynamic(() =>
  import("@/components/appdev/AppDevPortfolio").then(
    (mod) => mod.AppDevPortfolio,
  ),
);

const AppDevTechnologies = NextDynamic(() =>
  import("@/components/appdev/AppDevTechnologies").then(
    (mod) => mod.AppDevTechnologies,
  ),
);

const AppDevIndustries = NextDynamic(() =>
  import("@/components/appdev/AppDevIndustries").then(
    (mod) => mod.AppDevIndustries,
  ),
);

const AppDevContactFooter = NextDynamic(() =>
  import("@/components/appdev/AppDevContactFooter").then(
    (mod) => mod.AppDevContactFooter,
  ),
);

export default function AppDevelopmentCompanyPage() {
  return (
    <div className="min-h-screen bg-black">
      <AppDevHeader />
      <main id="main-content" tabIndex={-1}>
        <AppDevHero />
        <AppDevChallenges />
        <AppDevTestimonials />
        <AppDevWhyChoose />
        <AppDevAwards />
        <ResultOriented  />
        <AppDevPortfolio />
        <AppDevTechnologies />
        <AppDevIndustries />
        <AppDevContactFooter />
      </main>
    </div>
  );
}
