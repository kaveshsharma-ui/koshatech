// import { blogIntro, blogPosts } from "@/data";
// import { SectionHeading } from "@/components/SectionHeading";
// import { AnimatedPageHero } from "@/components/AnimatedPageHero";
// import { AnimatedBlogCard } from "@/components/AnimatedBlogCard";
// import { AnimatedSection } from "@/components/AnimatedSection";
// import QuoteButton from "@/components/QuoteButton";

export const metadata = {
  title: "Blog | Koshatech",
  description: "Latest insights on AI, MVP, MLOps, and technology.",
};

export default function BlogPage() {
  return (
    <main>
      {/* <AnimatedPageHero slug="blog" /> */}
      
      {/* <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading title={blogIntro.title} />
           
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <AnimatedBlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
