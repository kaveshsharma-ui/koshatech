"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { appDevelopmentIndustries } from "@/data/appDevelopmentCompany";

const INDUSTRY_ORDER: string[] = [
  "Education",
  "Healthcare",
  "eCommerce",
  "Restaurant",
  "Real Estate",
  "FinTech",
  "Transport",
  "Sports",
];

function splitDescription(description: string): [string, string] {
  const idx = description.indexOf(" Whether you're");
  if (idx > 0) {
    return [description.slice(0, idx).trim(), description.slice(idx + 1).trim()];
  }
  return [description, ""];
}

export function AppDevIndustries() {
  const sorted = useMemo(
    () =>
      [...appDevelopmentIndustries.items].sort(
        (a, b) =>
          INDUSTRY_ORDER.indexOf(a.name) - INDUSTRY_ORDER.indexOf(b.name)
      ),
    []
  );
  const [activeId, setActiveId] = useState(sorted[0]?.id ?? "");
  const active = sorted.find((i) => i.id === activeId) ?? sorted[0];
  const [para1, para2] = active
    ? splitDescription(active.description)
    : ["", ""];

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Industries We Serve as a Custom{" "}
          <span className="text-primary-400">Mobile Application Development</span>{" "}
          Company
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl bg-zinc-800/90 shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left panel - industry navigation */}
            <nav className="shrink-0 border-b border-white/10 bg-zinc-900/80 p-2 lg:w-44 lg:border-b-0 lg:border-r lg:border-white/10 lg:p-0">
              <ul className="flex flex-wrap gap-1 lg:flex-col lg:gap-0">
                {sorted.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition lg:rounded-none lg:py-4 lg:pl-5 ${
                        activeId === item.id
                          ? "bg-primary-400 text-white"
                          : "text-gray-600 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right panel - industry details */}
            <div className="flex-1 bg-zinc-800 p-6 md:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {active && (
                  <motion.div
                    key={active.id}
                    className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-bold text-white md:text-2xl">
                        {active.title}
                      </h3>
                      <div className="mt-4 space-y-4 text-gray-600">
                        <p>{para1}</p>
                        {para2 && <p>{para2}</p>}
                      </div>
                      <Link
                        href="/contact"
                        className="mt-6 inline-block rounded-xl bg-primary-400 px-6 py-3 font-bold uppercase tracking-wide text-white transition hover:bg-primary-300"
                      >
                        {active.ctaLabel}
                      </Link>
                    </div>
                    <div className="relative h-64 w-44 shrink-0 md:h-72 md:w-48">
                      <Image
                        src={active.image ?? "/portfolio/neostox.png"}
                        alt={active.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
