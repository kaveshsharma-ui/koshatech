import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";
import { blogPosts } from "@/data/blog";
import { serviceItems } from "@/data/services";

export default function SitemapPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">Sitemap</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Static Pages */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Pages</h2>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-primary-700">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary-700">About</Link></li>
            <li><Link href="/services" className="hover:text-primary-700">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary-700">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-primary-700">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-primary-700">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-primary-700">Privacy Policy</Link></li>
            <li><Link href="/request-a-callback" className="hover:text-primary-700">Request a Callback</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Services</h2>
          <ul className="space-y-3">
            {serviceItems.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-primary-700"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
          <ul className="space-y-3">
            {portfolioItems.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="hover:text-primary-700"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Blog</h2>
          <ul className="space-y-3">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary-700"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}