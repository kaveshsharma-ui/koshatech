"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { appDevelopmentWhyChoose } from "@/data/appDevelopmentCompany";

/** Exactly 8 items in order: 2 rows × 4 columns to match reference design */
const WHY_CHOOSE_ITEMS = [
  {
    title: "10+ Years of Experience",
    description:
      "A team experienced in startup needs and challenges. Work with professionals who understand your vision and goals.",
    icon: "mdi:account-star-outline",
  },
  {
    title: "Cost-Effective Development",
    description:
      "Tailored solutions that fit your budget. Build a high-quality app without overextending your startup's finances.",
    icon: "mdi:currency-usd",
  },
  {
    title: "AI-powered solutions",
    description:
      "Leverage the power of artificial intelligence to enhance efficiency, automate processes, and deliver smarter user experiences.",
    icon: "mdi:robot-outline",
  },
  {
    title: "95% client retention",
    description:
      "Our commitment to excellence, innovation, and customer satisfaction has earned us a 95% client retention rate.",
    icon: "mdi:account-group-outline",
  },
  {
    title: "Exceptional UX/UI Design",
    description:
      "Intuitive, user-friendly interfaces designed for engagement. Delight your users and increase retention with an app they love to use.",
    icon: "mdi:view-dashboard-outline",
  },
  {
    title: "Post-Launch Support",
    description:
      "Ongoing maintenance, updates, and analytics. Keep your app updated, secure, and performing flawlessly.",
    icon: "mdi:headphones",
  },
  {
    title: "Cross-Platform Development",
    description:
      "Apps that work seamlessly on both iOS and Android. Maximize your reach and target a wider audience.",
    icon: "mdi:cellphone",
  },
  {
    title: "End-to-End Development",
    description:
      "Full-cycle services, from concept to launch. Work with a single partner for all your app development needs.",
    icon: "mdi:cog-outline",
  },
];

export function AppDevWhyChoose() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {appDevelopmentWhyChoose.heading}
          </h2>
          <p className="mt-3 text-base font-normal text-slate-600 md:text-lg">
            {appDevelopmentWhyChoose.subheading}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <div className="flex h-12 w-12 items-center justify-center text-slate-900">
                <Icon icon={item.icon} className="h-10 w-10" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900 md:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
