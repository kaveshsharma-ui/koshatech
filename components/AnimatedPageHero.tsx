"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { pageHero } from "@/data/pageHero";

interface PageHeroProps {
  slug: keyof typeof pageHero;
}

export function AnimatedPageHero({ slug }: PageHeroProps) {
  const data = pageHero[slug];
  if (!data) return null;

  return (
    <motion.div
      className="border-b border-slate-200 bg-white py-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.h1
        className="text-4xl font-bold text-slate-900 md:text-5xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {data.title}
      </motion.h1>

      <motion.p
        className="mx-auto mt-4 max-w-2xl text-slate-600"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {data.subtitle}
      </motion.p>

      {(data.ctaPrimary) && (
        <div className="mt-8 flex justify-center gap-4">
          {data.ctaPrimary && (
            <Link href={data.ctaPrimary.href} className="btn-primary" data-cursor-exclude>
              {data.ctaPrimary.label}
            </Link>
          )}

       
        </div>
      )}
    </motion.div>
  );
}
