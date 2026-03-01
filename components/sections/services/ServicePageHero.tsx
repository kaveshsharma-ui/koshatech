import Link from "next/link";
import type { ServicePageHero as HeroData } from "@/data/servicePages";

interface Props {
  data: HeroData;
}

export function ServicePageHero({ data }: Props) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/70 via-white to-white" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary-200/30 blur-3xl" />
      <div className="container relative mx-auto section-padding px-4 text-center">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">{data.title}</h1>
        <p className="mt-4 text-2xl font-semibold text-slate-800">
          {data.subtitle}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">{data.tagline}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href={data.ctaPrimary.href} className="btn-primary" data-cursor-exclude>
            {data.ctaPrimary.label}
          </Link>
          <Link href={data.ctaSecondary.href} className="btn-secondary" data-cursor-exclude>
            {data.ctaSecondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
