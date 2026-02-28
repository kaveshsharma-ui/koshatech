import { whoWeAre } from "@/data/aboutPage";

export function WhoWeAreSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="section-heading">{whoWeAre.title}</h2>
        <p className="mt-6 text-lg text-slate-600">{whoWeAre.body}</p>
      </div>
    </section>
  );
}
