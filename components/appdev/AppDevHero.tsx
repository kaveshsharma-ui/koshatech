"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useQuoteModal } from "@/components/QuoteModalContext";
import { appDevelopmentHero } from "@/data/appDevelopmentCompany";
import { motion } from "framer-motion";

const HERO_APPS = [
  { image: "/appdev/avis.png", floatDelay: 0 },
  { image: "/appdev/Beycome.png", floatDelay: 0.2 },
  { image: "/appdev/Rekhta.png", floatDelay: 0.4, isCenter: true },
  { image: "/appdev/Neosotx.png", floatDelay: 0.6 },
  { image: "/appdev/Cranes24-2.png", floatDelay: 0.8 },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

export function AppDevHero() {
  const { openModal } = useQuoteModal();
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-black pt-10 pb-16 md:pb-24">
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Title: yellow */}
          <motion.h1
            className="text-4xl font-bold leading-tight text-primary-400 sm:text-5xl md:text-6xl lg:text-7xl"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {appDevelopmentHero.title}
          </motion.h1>
          {/* Subtitle: larger yellow */}
          <motion.p
            className="mt-3 text-2xl font-bold text-primary-400 sm:text-3xl md:text-4xl lg:text-5xl"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {appDevelopmentHero.subtitle}
          </motion.p>
          {/* Description: white */}
          <motion.p
            className="mt-4 max-w-2xl text-base text-white sm:text-lg"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {appDevelopmentHero.description}
          </motion.p>
          {/* CTA: yellow rounded rect, thin black border */}
          <motion.button
            type="button"
            onClick={openModal}
            className="mt-8 min-h-[48px] min-w-[48px] rounded-xl border-2 border-black bg-primary-400 px-8 py-4 text-base font-bold uppercase tracking-wide text-black transition hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-black"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            Request a Quote
          </motion.button>

          {/* App strip: equal spacing with visible gaps */}
          <motion.div
            className="relative mt-14 w-full overflow-hidden"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-end justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-12">
              {HERO_APPS.map((app) => (
                <motion.div
                  key={app.image}
                  className={`relative shrink-0 overflow-hidden rounded-2xl bg-black shadow-xl ${
                    app.isCenter
                      ? "z-20 h-[380px] w-[200px] sm:h-[420px] sm:w-[220px] md:h-[460px] md:w-[240px]"
                      : "z-10 h-[340px] w-[160px] sm:h-[380px] sm:w-[180px] md:h-[420px] md:w-[200px]"
                  }`}
                  initial={false}
                  animate={{
                    opacity: 1,
                    y: reducedMotion ? 0 : app.isCenter ? [0, -6, 0] : [0, -4, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.3 },
                    y: reducedMotion ? { duration: 0 } : { duration: 4, repeat: Infinity, delay: app.floatDelay },
                  }}
                >
                  <Image
                    src={app.image}
                    alt="App showcase"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 240px"
                    priority={Boolean(app.isCenter)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
