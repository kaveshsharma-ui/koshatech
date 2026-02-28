import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/data";
import { ContactSection } from "@/components/sections";

export const metadata = {
  title: "Portfolio | Koshatech",
  description: "Our work – mobile apps, websites, and digital products we've built.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-[#f7f7f7]">
      {/* HERO SECTION */}
      <section className="py-24 text-center">
        <p className="text-sm font-semibold text-primary-700">
          Our Work
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Portfolio
        </h1>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-primary-700 transition"
          >
            {"Let's Talk"}
          </Link>

          <Link
            href="/request-a-callback"
            className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* PORTFOLIO LIST */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          {portfolioItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={item.id}
                className="mb-32 last:mb-0"
              >
                <div
                  className={`flex flex-col items-center gap-16 md:flex-row ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* TEXT SIDE */}
                  <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-bold text-slate-900">
                      {item.title}
                    </h2>
{item.tags.length > 0 && (
  <div className="mt-3 flex flex-wrap gap-3">
    {item.tags.map((tag, i) =>
      item.externalLink ? (
        <a
          key={i}
          href={item.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-sm font-semibold text-primary-700 hover:underline"
        >
          {tag}
        </a>
      ) : (
        <span
          key={i}
          className="text-sm font-semibold text-primary-700"
        >
          {tag}
        </span>
      )
    )}
  </div>
)}

                    {item.description && (
                      <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    )}

                    {item.stats && (
                      <p className="mt-6 text-lg font-semibold text-slate-900">
                        {item.stats}
                      </p>
                    )}
                  </div>

                  {/* IMAGE SIDE */}
                  <div className="w-full md:w-1/2">
                    <div className="relative mx-auto aspect-[4/3] max-w-lg">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          unoptimized
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center rounded-3xl bg-slate-100 text-2xl font-bold text-slate-700">
                          {item.title}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA SECTION */}
<section className="bg-[#e8e1e4] py-24">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
      Interested Working with Us?
    </h2>

    <div className="mt-10">
      <Link
        href="/contact"
        className="inline-block rounded-md bg-primary-600 px-8 py-4 text-lg font-medium text-white shadow-md transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
      >
        Request A Quote
      </Link>
    </div>
  </div>
</section>

<ContactSection />

    </main>
  );
}