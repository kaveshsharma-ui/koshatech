"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { hero } from "@/data";
import { useQuoteModal } from "@/components/QuoteModalContext";
import StatsBanner from "./StatsBanner";

interface HeroSectionProps {
  data?: typeof hero;
}

export function HeroSection({ data = hero }: HeroSectionProps) {
  const d = data;
  const { openModal } = useQuoteModal();

  /* ── Refs ── */
  const sectionRef = useRef<HTMLElement>(null);
  // individual words — each gets its own entrance
  const buildRef = useRef<HTMLSpanElement>(null);
  const betterRef = useRef<HTMLSpanElement>(null);
  const productsRef = useRef<HTMLSpanElement>(null);
  const forRef = useRef<HTMLSpanElement>(null);
  const realUsersRef = useRef<HTMLSpanElement>(null);
  const fasterRef = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const btn1Ref = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── 1. Collect all word elements ── */
      const words = [
        buildRef.current,
        betterRef.current,
        productsRef.current,
        forRef.current,
        realUsersRef.current,
        fasterRef.current,
      ];

      /* ── 2. Set invisible starting state ── */
      gsap.set(words, { opacity: 0, y: 40, rotate: -2 });
      gsap.set([subtextRef.current], { opacity: 0, y: 24 });
      gsap.set([btn1Ref.current, btn2Ref.current], { opacity: 0, y: 16, scale: 0.95 });
      gsap.set([imageRef.current], { opacity: 0, x: 60, scale: 0.95 });

      /* ── 3. Master timeline ── */
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Image fades in first (from right)
      tl.to(imageRef.current, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.9,
      }, 0);

      // words stagger in one by one
      tl.to(words, {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 0.7,
        stagger: 0.08,
      }, 0.2);

      // subtext fades in while last word is still animating
      tl.to(
        subtextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
      );

      // buttons pop in
      tl.to(
        [btn1Ref.current, btn2Ref.current],
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.4)",
        },
        "-=0.25"
      );

      /* ── 4. GSAP-powered button hover (primary only) ── */
      const btn = btn1Ref.current;
      if (btn) {
        const hoverIn = () =>
          gsap.to(btn, { scale: 1.04, duration: 0.25, ease: "power2.out" });
        const hoverOut = () =>
          gsap.to(btn, { scale: 1.0, duration: 0.25, ease: "power2.out" });
        btn.addEventListener("mouseenter", hoverIn);
        btn.addEventListener("mouseleave", hoverOut);
        // cleanup stored on element — ctx.revert() handles GSAP tweens, but we need DOM cleanup
        return () => {
          btn.removeEventListener("mouseenter", hoverIn);
          btn.removeEventListener("mouseleave", hoverOut);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Ambient gradient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-primary-100/40 via-accent-light/20 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div 
        className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-14 sm:py-16 md:py-20 lg:py-24 min-h-[85svh] flex items-center"
      >
        <div className="w-full" >
          {/* Two-column grid: text left, image right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* ── LEFT: Text Content ── */}
            <div 
              data-type="video"
              data-value="/BuildVideo.mp4"
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* ── Headline ── */}
              <h1
             
                className="
                  text-4xl xs:text-5xl sm:text-6xl md:text-7xl
                  lg:text-[5rem] xl:text-[6rem] 2xl:text-[6.5rem]
                  font-bold leading-[1.02] tracking-[-0.04em] mb-6 sm:mb-8
                "
              >
                {/* Line 1 */}
                <div className="flex w-full whitespace-nowrap justify-center lg:justify-start items-center flex-wrap">
                  {/* "Build better" – with cursor image on hover */}
                  <span
                    
                    className="inline-flex items-center gap-2 sm:gap-3 cursor-pointer"
                  >
                    {/* "Build" – plain dark */}
                    <span ref={buildRef} className="text-gray-900 inline-block">
                      Build
                    </span>

                    {/* "better" – yellow → orange */}
                    <span ref={betterRef} className="relative inline-block group">
                      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/25 to-orange-500/25 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-extrabold relative gradient-animate">
                        better
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out overflow-hidden" />
                      </span>
                    </span>
                  </span>
                  <span className="mx-2 sm:mx-3 inline-block" />

                  {/* "products" – red → pink */}
                  <span ref={productsRef} className="relative inline-block group">
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500/25 to-pink-500/25 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent font-extrabold relative gradient-animate">
                      products
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out overflow-hidden" />
                    </span>
                  </span>
                </div>

                {/* Line 2 */}
                <div className="flex w-full mt-2 sm:mt-3 whitespace-nowrap justify-center lg:justify-start items-center flex-wrap">
                  {/* "for" – plain dark */}
                  <span ref={forRef} className="text-gray-900 inline-block">
                    for
                  </span>
                  <span className="mx-2 sm:mx-3 inline-block" />

                  {/* "real users" – green → emerald */}
                  <span ref={realUsersRef} className="relative inline-block group">
                    <span className="absolute inset-0 bg-gradient-to-r from-green-500/25 to-emerald-500/25 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent font-extrabold relative gradient-animate">
                      real users
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out overflow-hidden" />
                    </span>
                  </span>
                  <span className="mx-2 sm:mx-3 inline-block" />

                  {/* "faster" – blue → cyan */}
                  <span ref={fasterRef} className="relative inline-block group">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-extrabold relative gradient-animate">
                      faster
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out overflow-hidden" />
                    </span>
                  </span>
                </div>
              </h1>

              {/* ── Subtext ── */}
              <div
                ref={subtextRef}
                className="mt-8 sm:mt-10 md:mt-12 space-y-3 text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed"
              >
                <p className="font-medium">{d.title}</p>
                <p className="text-slate-700">
                  <span className="font-semibold text-slate-900">{d.subtitle}</span>
                  <span className="mx-2 text-slate-400">•</span>
                  <span className="font-medium">{d.cardTitle}</span>
                </p>
              </div>

              {/* ── CTA Buttons ── */}
              <div className="mt-12 sm:mt-14 md:mt-16 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-5">
                <button
                  ref={btn1Ref}
                  onClick={openModal}
                  type="button"
                  data-cursor-exclude
                  className="
                    group relative w-full sm:w-auto rounded-xl
                    bg-gradient-to-r from-primary-600 to-primary-500
                    px-8 sm:px-10 py-4 sm:py-5
                    text-base sm:text-lg text-white font-semibold
                    shadow-lg shadow-primary-500/25 overflow-hidden
                    transition-colors duration-300
                    focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
                  "
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {d.ctaPrimary.label}
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>

                <Link
                  ref={btn2Ref}
                  href={d.ctaSecondary.href}
                  data-cursor-exclude
                  className="
                    group w-full sm:w-auto text-center rounded-xl
                    border-2 border-slate-300 bg-white
                    px-8 sm:px-10 py-4 sm:py-5
                    text-base sm:text-lg font-semibold text-slate-700 shadow-sm
                    transition-all duration-300
                    hover:border-primary-400 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
                  "
                >
                  <span className="flex items-center justify-center gap-2">
                    {d.ctaSecondary.label}
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* ── RIGHT: Image ── */}
            <div
              ref={imageRef}
              data-type="video"
              data-value="/BuildVideo.mp4"
              className="relative order-1 lg:order-2 w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-full lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/HeroSection.jpg"
                alt="Data visualization and analytics workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

          </div>
        </div>
      </div>

      {/* ⚠️ DO NOT TOUCH */}
      <StatsBanner />
    </section>
  );
}
