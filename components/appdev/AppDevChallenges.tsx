"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  appDevelopmentChallenges,
  appDevelopmentFormServices,
  appDevelopmentCollaborate,
} from "@/data/appDevelopmentCompany";
import { LazyReCAPTCHA } from "@/components/LazyReCAPTCHA";

const CHALLENGE_IMAGES = [
  "/appdev/avis.png",
  "/appdev/Beycome.png",
  "/appdev/Cranes24-2.png",
  "/appdev/Neosotx.png",
  "/appdev/Rekhta.png",
  "/appdev/avis.png",
];
const fallbackSlide = "/appdev/avis.png";

export function AppDevChallenges() {
  const [activeIndex, setActiveIndex] = useState(0);
  const item = appDevelopmentChallenges.items[activeIndex];
  const totalSlides = appDevelopmentChallenges.items.length;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "India (+91)",
    phone: "",
    service: appDevelopmentFormServices[0],
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Auto-play carousel for a smoother visual experience
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the captcha.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          countryCode: "India (+91)",
          phone: "",
          service: appDevelopmentFormServices[0],
          message: "",
        });
        setCaptchaToken(null);
      } else alert("Something went wrong.");
    } catch {
      alert("Server error.");
    }
    setLoading(false);
  };

  const currentCarouselImage =
    CHALLENGE_IMAGES[activeIndex] ?? fallbackSlide;

  return (
    <section id="problems" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {appDevelopmentChallenges.sectionTitle}
          </h2>
          <p className="mt-4 text-slate-600">
            {appDevelopmentChallenges.sectionSubtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-start">
          {/* Left: challenge selector dots + Problem & Solution boxes */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex flex-row gap-2 justify-center lg:justify-start flex-wrap">
              {appDevelopmentChallenges.items.slice(0, 6).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                  aria-label={`Challenge ${i + 1}`}
                >
                  <span
                    className={`block h-2 w-2 rounded-full transition-colors ${
                      activeIndex === i ? "bg-slate-800" : "bg-slate-300"
                    }`}
                  />
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="flex flex-col gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Problem box */}
                <div className="rounded-xl bg-red-600 p-6 text-white">
                  <span className="inline-block rounded-full bg-red-500 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
                    Problem
                  </span>
                  <h3 className="mt-3 text-lg font-bold uppercase leading-tight text-white">
                    {item.problemTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/95">
                    {item.problemDescription}
                  </p>
                </div>
                {/* Solution box */}
                <div className="rounded-xl bg-emerald-600 p-6 text-white">
                  <span className="inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
                    Solution
                  </span>
                  <h3 className="mt-3 text-lg font-bold uppercase leading-tight text-white">
                    {item.solutionTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/95">
                    {item.solutionDescription}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center: App showcase carousel (enhanced design) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative w-52 sm:w-60 md:w-72 lg:w-80 xl:w-96">
              {/* Glow behind the phone */}
              <div
                className="pointer-events-none absolute "
                aria-hidden="true"
              />
              <div className="relative rounded-[40px] ">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeIndex}
                    className="relative"
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -40, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <Image
                      src={currentCarouselImage}
                      alt={`${item.problemTitle} – app showcase`}
                      width={320}
                      height={640}
                      className="h-auto w-full rounded-3xl object-contain"
                      sizes="(max-width: 640px) 208px, (max-width: 768px) 288px, 384px"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            {/* Dots */}
            <div className="mt-5 flex justify-center gap-1.5">
              {appDevelopmentChallenges.items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 ${
                    i === activeIndex
                      ? "w-6 bg-primary-400"
                      : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Contact form (dark) */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-black p-6 sm:p-8">
              <p className="text-white">{appDevelopmentCollaborate.title}</p>
              <h3 className="mt-1 text-2xl font-bold text-primary-400">
                {appDevelopmentCollaborate.subtitle}
              </h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="ch-fullName" className="block text-sm font-medium text-white">
                    Full Name*
                  </label>
                  <input
                    id="ch-fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="ch-email" className="block text-sm font-medium text-white">
                    Business Email*
                  </label>
                  <input
                    id="ch-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    placeholder="Business Email"
                  />
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-2">
                  <div>
                    <label htmlFor="ch-countryCode" className="block text-sm font-medium text-white">
                      Country
                    </label>
                    <select
                      id="ch-countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2.5 text-white focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    >
                      <option value="India (+91)" className="bg-slate-900 text-white">
                        India (+91)
                      </option>
                      <option value="US (+1)" className="bg-slate-900 text-white">
                        US (+1)
                      </option>
                      <option value="UK (+44)" className="bg-slate-900 text-white">
                        UK (+44)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ch-phone" className="block text-sm font-medium text-white">
                      Phone*
                    </label>
                    <input
                      id="ch-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="ch-service" className="block text-sm font-medium text-white">
                    Service
                  </label>
                  <select
                    id="ch-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  >
                    {appDevelopmentFormServices.map((s) => (
                      <option key={s} value={s} className="bg-slate-900 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ch-message" className="block text-sm font-medium text-white">
                    Your vision
                  </label>
                  <textarea
                    id="ch-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 w-full resize-none rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    placeholder="Tell us your development vision."
                  />
                </div>
                <LazyReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={(token) => setCaptchaToken(token)}
                  onExpired={() => setCaptchaToken(null)}
                  theme="dark"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-primary-400 py-3.5 font-semibold text-white transition hover:bg-primary-300 disabled:opacity-70"
                >
                  {loading ? "Sending…" : "Request a callback"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
