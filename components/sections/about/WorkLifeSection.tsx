import { workLife } from "@/data/aboutPage";
import { Icon } from "@iconify/react";

export function WorkLifeSection() {
  const totalItems = workLife.items.length;
  const columns = 5;
  const lastRowCount = totalItems % columns || columns;
  const lastRowStart = totalItems - lastRowCount;

  return (
    <section className="py-16 bg-[#F1F5F9]"> {/* reduced from py-24 */}
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-slate-900">
          {workLife.heading}
        </h2>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-l border-[#2A8DBF]/40">
          {workLife.items.map((item, index) => {
            const isLastColumn = (index + 1) % columns === 0;
            const isLastRow = index >= lastRowStart;

            return (
              <div
                key={item.id}
                className={`
                  flex flex-col items-center justify-center
                  px-8 py-10 text-center   /* reduced padding */
                  border-[#2A8DBF]/40
                  border-r border-b
                  ${isLastColumn ? "lg:border-r-0" : ""}
                  ${isLastRow ? "border-b-0" : ""}
                `}
              >
                {/* Icon Box */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#2A8DBF] text-white text-2xl shadow-md">
                  <Icon icon={item.icon} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 leading-snug max-w-[180px]">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}