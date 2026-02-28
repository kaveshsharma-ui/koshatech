import Link from "next/link";
import { aboutPageHero } from "@/data/aboutPage";

export function AboutPageHero() {
  const d = aboutPageHero;
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/70 via-white to-white" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary-200/30 blur-3xl" />
      <div className="container relative mx-auto section-padding px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-700">
          {d.title}
        </p>
        <p className="mt-2 text-slate-600">{d.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">{d.heading}</h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href={d.ctaPrimary.href} className="btn-primary">
            {d.ctaPrimary.label}
          </Link>
          <Link href={d.ctaSecondary.href} className="btn-secondary">
            {d.ctaSecondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
