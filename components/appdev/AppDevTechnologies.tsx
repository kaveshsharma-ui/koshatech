"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { appDevelopmentTechStack } from "@/data/appDevelopmentCompany";

const HIGHLIGHT_YELLOW = "rgb(255, 215, 0)"; // #ffd700 - match design

export function AppDevTechnologies() {
  const [activeCategory, setActiveCategory] = useState(
    appDevelopmentTechStack.categories[0].name
  );
  const category = appDevelopmentTechStack.categories.find(
    (c) => c.name === activeCategory
  );

  return (
    <section id="technologies" className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Two-column: left = title + paragraph, right = shield with tech logos */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
              <span
                className="px-1.5 py-0.5"
                style={{ backgroundColor: HIGHLIGHT_YELLOW }}
              >
                Technologies We use
              </span>{" "}
              as a Top Mobile Application Development Company
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {appDevelopmentTechStack.sectionSubtitle}
            </p>
          </div>
          {/* Light grey shield-shaped background (second image style) with tech logos */}
          <div className="relative w-full max-w-[280px] mx-auto lg:mx-0 aspect-[4/5] min-h-[200px] lg:min-h-[240px]">
            {/* Shield: full width only at top edge, sides taper in to center point */}
            <div
              className="absolute inset-0"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 92% 14%, 92% 78%, 50% 100%, 8% 78%, 8% 14%)",
                backgroundColor: "rgba(225, 226, 230, 0.9)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 24px rgba(0,0,0,0.07)",
              }}
              aria-hidden
            />
            <div
              className="absolute inset-[5%_6%_10%_6%]"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 92% 14%, 92% 78%, 50% 100%, 8% 78%, 8% 14%)",
              }}
            >
              <Image
                src="/appdev/code/Tech-we-use.png"
                alt="Technologies we use - Flutter, React, Android, Swift, Node.js, Kotlin, Firebase, Figma, MySQL, JavaScript, Xamarin"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Tabs + tools: centered block to match second image */}
        <div className="mt-8 lg:mt-10 flex flex-col items-center">
          <div className="w-full max-w-xl flex flex-col items-center">
            {/* Category navigation: pill for active, plain text for inactive */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 items-center">
              {appDevelopmentTechStack.categories.map((cat) => (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setActiveCategory(cat.name)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                    activeCategory === cat.name
                      ? "text-slate-900"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                  style={
                    activeCategory === cat.name
                      ? { backgroundColor: HIGHLIGHT_YELLOW }
                      : undefined
                  }
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Tool cards: white, rounded, shadow; icon left + name right; 4 per row, remainder centered */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="mt-4 flex flex-wrap justify-center gap-2.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {category?.items.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 min-w-[110px] max-w-[140px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-slate-100"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f0f5f8] text-xs font-bold text-slate-700">
                      {tech.charAt(0)}
                    </span>
                    <span className="text-xs font-medium text-slate-900 truncate">
                      {tech}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
