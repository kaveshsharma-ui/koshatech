import Image from "next/image";
import { whoWeAre, whatWeDoBest, aboutIntroImages } from "@/data/aboutPage";

export function AboutIntroSection() {
  return (
    <section className="section-padding bg-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Text Section */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Who We Are */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-navy-900">
              {whoWeAre.title}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-slate-700">
              {whoWeAre.body}
            </p>
          </div>

          {/* What We Do Best */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-navy-900">
              {whatWeDoBest.title}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-slate-700">
              {whatWeDoBest.body}
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aboutIntroImages.map((image) => (
            <div
              key={image.id}
              className="relative h-64 w-full overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}