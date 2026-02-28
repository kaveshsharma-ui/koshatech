import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.slug }));
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioItems.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <div className="border-b border-slate-200 bg-white py-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">{project.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          {project.tags.join(", ")}
        </p>
      </div>
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="relative h-64 overflow-hidden rounded-xl bg-gradient-to-br from-primary-100 to-primary-50">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                unoptimized
              />
            ) : (
              <div className="flex h-full items-center justify-center text-4xl font-bold text-primary-900">
                {project.title}
              </div>
            )}
          </div>
          <p className="mt-8 text-slate-600">
            Case study and project details would go here. This is a static
            placeholder for the {project.title} project.
          </p>
          <Link href="/portfolio" className="btn-primary mt-8 inline-block">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
