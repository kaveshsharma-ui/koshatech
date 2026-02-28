"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { appDevelopmentRecognition } from "@/data/appDevelopmentCompany";

const AWARDS: { year: string; image: string; alt: string }[] = [
  { year: "2024", image: "/home/achievement/clutch-2.svg", alt: "Clutch 2024" },
  { year: "2023", image: "/home/achievement/clutch-3.svg", alt: "Clutch 2023" },
  { year: "2022", image: "/home/achievement/clutch-4.svg", alt: "Clutch 2022" },
  { year: "2021", image: "/home/achievement/clutch-2.svg", alt: "Clutch 2021" },
];

export function AppDevAwards() {
  return (
    <section className="bg-primary-400  md:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {appDevelopmentRecognition.title}
          </h2>
          <p className="mt-3 text-slate-800">
            {appDevelopmentRecognition.subtitle}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {AWARDS.map(({ year, image, alt }, i) => (
            <motion.div
              key={year}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-slate-900 bg-white p-3 shadow-lg md:h-28 md:w-28 md:p-4">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>
              <span className="mt-3 font-semibold text-slate-900">{year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
