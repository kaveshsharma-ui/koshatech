import Link from "next/link";
import Image from "next/image";
import { blogIntro, blogPosts } from "@/data";

// Cycling top-border gradient colors per card
const CARD_BORDERS = [
  "from-yellow-400 to-orange-500",
  "from-green-500 to-emerald-500",
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-indigo-500",
  "from-red-500 to-pink-500",
  "from-orange-400 to-red-500",
];

// Matching "Read more" button gradient
const BTN_GRADIENTS = [
  "from-yellow-400 to-orange-500",
  "from-green-500 to-emerald-500",
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-indigo-500",
  "from-red-500 to-pink-500",
  "from-orange-400 to-red-500",
];

interface BlogSectionProps {
  intro?: typeof blogIntro;
  items?: typeof blogPosts;
  maxItems?: number;
}

export function BlogSection({
  intro = blogIntro,
  items = blogPosts,
  maxItems = 3,
}: BlogSectionProps) {
  const list = items.slice(0, maxItems);

  return (
    <section className="bg-[#f3f4f6] py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-3">
          Latest Insights
        </p>

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[#0b1b3f]">
          {intro.title}
        </h2>

        {/* Blog grid */}
        <div className="mt-10 sm:mt-14 md:mt-16 grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((post, i) => (
            <article
              key={post.id}
              data-type="image"
              data-value={post.image || "/HeroSection.jpg"}
              className="flex flex-col rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Colored gradient top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${CARD_BORDERS[i % CARD_BORDERS.length]}`} />

              {/* Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 400px, (max-width: 1024px) 360px, 380px"
                    quality={75}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-snug">
                  <Link href={post.href} className="hover:text-slate-900 transition">
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-gray-400">{post.date}</p>

                <p className="mt-3 text-sm sm:text-base text-gray-600 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* Colored CTA */}
                <Link
                  href={post.href}
                  className={`mt-5 inline-flex items-center gap-1.5 self-start rounded-lg bg-gradient-to-r ${BTN_GRADIENTS[i % BTN_GRADIENTS.length]} px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:opacity-90 transition`}
                >
                  Read more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
          >
            View all posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
