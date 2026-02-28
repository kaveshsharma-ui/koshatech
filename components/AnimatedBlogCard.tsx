"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedBlogCardProps {
  post: {
    title: string;
    href: string;
    image: string;
    date: string;
    excerpt: string;
  };
  index: number;
}

export function AnimatedBlogCard({ post, index }: AnimatedBlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Blog Image */}
      <div className="relative w-full h-56">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 400px, (max-width: 1024px) 360px, 380px"
          quality={75}
          priority={index === 0}
        />
      </div>

      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-slate-900 leading-snug">
          <Link href={post.href} className="hover:text-primary-700 transition-colors">
            {post.title}
          </Link>
        </h2>

        {/* Date */}
        <p className="mt-2 text-sm text-slate-600">
          {post.date}
        </p>

        {/* Excerpt */}
        <p className="mt-4 text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Read More Button */}
        <Link
          href={post.href}
          className="inline-block mt-6 px-5 py-2.5 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
        >
          Read more about {post.title}
        </Link>
      </div>
    </motion.article>
  );
}