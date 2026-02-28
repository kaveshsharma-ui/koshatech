import { companyTimeline } from "@/data/aboutPage";

export function CompanyTimelineSection() {
  const { sectionTitle, heading, items } = companyTimeline;

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary-700">
            {sectionTitle}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            {heading}
          </h2>
        </div>

        {/* Timeline wrapper */}
        <div className="relative mt-16">
          {/* Center vertical line (only on md+) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-primary-200 md:block" />

          <div className="space-y-12 md:space-y-20">
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col items-start md:flex-row md:items-center md:justify-between"
                >
                  {/* Left content */}
                  <div
                    className={`
                      w-full md:w-5/12
                      ${isLeft ? "md:block" : "md:invisible"}
                    `}
                  >
                    <div className="rounded-xl bg-slate-50 p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 my-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-600 bg-white md:my-0">
                    <span className="text-sm font-semibold text-primary-700">
                      {item.year}
                    </span>
                  </div>

                  {/* Right content */}
                  <div
                    className={`
                      w-full md:w-5/12
                      ${!isLeft ? "md:block" : "md:invisible"}
                    `}
                  >
                    <div className="rounded-xl bg-slate-50 p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}