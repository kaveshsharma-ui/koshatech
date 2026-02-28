import { offices } from "@/data/contact";

export function AboutOfficesSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {offices.map((office) => (
            <div
              key={office.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-card"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {office.country}
              </h3>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="font-medium text-slate-500">
                    Office Phone Number
                  </dt>
                  <dd>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "").replace(/-/g, "")}`}
                      className="text-primary-700 hover:underline"
                    >
                      {office.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Our Location</dt>
                  <dd className="text-slate-700">{office.address}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Email Us</dt>
                  <dd>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-primary-700 hover:underline"
                    >
                      {office.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
