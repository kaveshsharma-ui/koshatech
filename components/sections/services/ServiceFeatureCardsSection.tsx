import type { ServiceFeature } from "@/data/servicePages";

interface Props {
  heading: string;
  features: ServiceFeature[];
}

export function ServiceFeatureCardsSection({ heading, features }: Props) {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
          {heading}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card card-hover p-6"
            >
              <h3 className="text-lg font-semibold text-primary-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
