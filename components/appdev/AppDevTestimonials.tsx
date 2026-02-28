"use client";

import { appDevelopmentTestimonials } from "@/data/appDevelopmentCompany";
import Link from "next/link";

export function AppDevTestimonials() {
  const { summaryTitle, rating, reviewCount, clutchHref, items } =
    appDevelopmentTestimonials;

  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <h2 className="text-center text-4xl font-bold text-black md:text-5xl">
          Our Testimonials
        </h2>

        {/* Summary bar: Reviews | 5.0 | 20 reviews | Powered by Clutch */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link
              href={clutchHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 hover:underline"
            >
              {summaryTitle}
            </Link>
            <span className="text-xl font-bold text-slate-900 sm:text-2xl">
              {rating}
            </span>
            <span className="text-sm text-slate-500">{reviewCount}</span>
          </div>
          <span className="text-sm text-slate-500">
            Powered by <span className="font-semibold text-slate-700">Clutch</span>
          </span>
        </div>

        {/* Infinite scroll carousel: moves left to right (content scrolls left) */}
        <div className="mt-10 overflow-hidden">
          <div className="flex w-max animate-scroll gap-6">
            {[...items, ...items].map((t, index) => (
              <div
                key={`${t.id}-${index}`}
                className="flex w-[320px] shrink-0 flex-col rounded-xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm"
              >
                <div className="text-2xl font-bold text-slate-900">{rating}</div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700 line-clamp-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm italic text-slate-500">
                  {t.role}, {t.company}
                </p>
                <p className="mt-2 text-xs text-slate-600">Verified Review</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
