import Link from "next/link";
import { appDevelopmentPortfolioIntro } from "@/data/appDevelopmentCompany";

export function ResultOriented() {
  return (
    <div className="p-10 bg-white mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 md:flex md:items-start md:gap-12 lg:gap-8">
      <div className="flex-1">
        <h5 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          {appDevelopmentPortfolioIntro.title}
        </h5>
      </div>
      <div className="mt-6 flex-1 md:mt-0">
        <p className="text-sm text-slate-600 md:max-w-xl md:text-base">
          {appDevelopmentPortfolioIntro.subtitle}
        </p>
        <Link
          href="#contact"
          className="mt-6 inline-block rounded-full bg-primary-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-md transition hover:bg-primary-300"
        >
          {appDevelopmentPortfolioIntro.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
