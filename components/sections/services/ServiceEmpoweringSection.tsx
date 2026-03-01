import Link from "next/link";
import type { TechStackCategory } from "@/data/servicePages";

interface EmpoweringData {
  heading: string;
  subheading: string;
  paragraphs: string[];
  ctaHeading: string;
  ctaSubtext: string;
  ctaHref: string;
}

interface TechStackData {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  categories: TechStackCategory[];
}

interface Props {
  empowering: EmpoweringData;
  techStack: TechStackData;
}

export function ServiceEmpoweringSection({ empowering, techStack }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
          {empowering.heading}
        </h2>
        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          {empowering.subheading}
        </h3>
        <div className="mt-6 space-y-4 text-slate-600">
          {empowering.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-primary-200 bg-primary-50/50 p-8 text-center">
          <h4 className="text-xl font-semibold text-primary-900">
            {empowering.ctaHeading}
          </h4>
          <p className="mt-2 text-slate-600">{empowering.ctaSubtext}</p>
          <Link href={empowering.ctaHref} className="btn-primary mt-6 inline-block" data-cursor-exclude>
            Get Started
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900">
            {techStack.heading}
          </h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.categories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-5"
              >
                <h4 className="font-semibold text-primary-900">{cat.name}</h4>
                <ul className="mt-3 space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={techStack.ctaHref} className="btn-secondary" data-cursor-exclude>
              {techStack.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
