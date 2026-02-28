import { whatWeDoBest } from "@/data/aboutPage";

export function WhatWeDoBestSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="section-heading">{whatWeDoBest.title}</h2>
        <p className="mt-6 text-lg text-slate-600">{whatWeDoBest.body}</p>
      </div>
    </section>
  );
}
