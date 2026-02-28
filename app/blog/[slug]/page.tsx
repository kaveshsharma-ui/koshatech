import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <article className="section-padding bg-white">
        <div className="container mx-auto max-w-3xl px-4">
          {post.image && (
            <div className="relative mb-8 h-64 overflow-hidden rounded-xl bg-gradient-to-br from-primary-100 to-primary-50">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                quality={75}
              />
            </div>
          )}
          <p className="text-sm font-medium uppercase tracking-wider text-primary-700">
            {post.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">{post.title}</h1>
          <p className="mt-2 text-slate-500">{post.date}</p>
          <div className="prose prose-slate mt-8 max-w-none">
            <p>{post.excerpt}</p>
            <p className="mt-4 text-slate-600">
              Full article content would be loaded from static data or CMS. This
              is a placeholder for the blog post &quot;{post.title}&quot;.
            </p>
          </div>
          <Link href="/blog" className="btn-primary mt-8 inline-block">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
