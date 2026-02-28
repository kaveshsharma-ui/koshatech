import { coreValues } from "@/data/aboutPage";
import { Icon } from "@iconify/react";

export function CoreValuesSection() {
  const { eyebrow, heading, tagline, items } = coreValues;

  return (
    <section className="py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          
          {/* LEFT SIDE – CARDS */}
          <div className="grid gap-10 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item.id} className="group [perspective:1200px]">
                
                <div className="relative h-[260px] w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* FRONT */}
                  <div className="absolute inset-0 rounded-2xl border border-slate-300 bg-white p-4 flex flex-col items-center justify-center text-center shadow-sm [backface-visibility:hidden]">
                    
                  <div className="mb-6 text-3xl text-[#2A8DBF]">
  <Icon icon={item.icon} />
</div>

                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed ">
                      {item.line1}
                    </p>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 rounded-2xl bg-[#2563EB] p-10 flex flex-col justify-center text-center text-white shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-white/90">
                      {item.line1}
                    </p>

                    
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE – TEXT CONTENT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              {eyebrow}
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900 leading-tight">
              {heading}
            </h2>

            <p className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed">
              {tagline}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}