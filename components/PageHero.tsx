import { pageHero } from "@/data/pageHero";

interface PageHeroProps {
  slug: keyof typeof pageHero;
}

export function PageHero({ slug }: PageHeroProps) {
  const data = pageHero[slug];
  if (!data) return null;
  return (
    <div className="border-b border-slate-200 bg-white py-16 text-center">
      <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">{data.title}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-slate-600">{data.subtitle}</p>
    </div>
  );
}
