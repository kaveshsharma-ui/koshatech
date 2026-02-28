"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { PortfolioItem } from "@/data/portfolio";

interface Props {
  items: PortfolioItem[];
}

export function PortfolioPageClient({ items }: Props) {
  const heroRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLElement>(null);
  const ctaRef  = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // ─────────────────────────────────────────────────────────────────
      // HERO — blur-clear reveal + line-wipe for heading
      // ─────────────────────────────────────────────────────────────────
      gsap.set(".pf-hero-line", { yPercent: 110, opacity: 0 });
      gsap.set(".pf-hero-badge", { opacity: 0, filter: "blur(8px)", y: 16 });
      gsap.set(".pf-hero-sub",   { opacity: 0, filter: "blur(6px)", y: 20 });
      gsap.set(".pf-hero-btn",   { opacity: 0, y: 24 });

      const heroTl = gsap.timeline({ delay: 0.15, defaults: { ease: "expo.out" } });

      heroTl
        .to(".pf-hero-badge",
          { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.7 }
        )
        .to(".pf-hero-line",
          { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.14 },
          "-=0.35"
        )
        .to(".pf-hero-sub",
          { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.7 },
          "-=0.4"
        )
        .to(".pf-hero-btn",
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "back.out(1.4)" },
          "-=0.3"
        );

      // Floating blob — slow breathe
      gsap.to(".pf-hero-blob", {
        scale: 1.12,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ─────────────────────────────────────────────────────────────────
      // PORTFOLIO ITEMS — clip-path wipe on image, staggered blur fade on text
      // ─────────────────────────────────────────────────────────────────
      const articles = listRef.current
        ? Array.from(listRef.current.querySelectorAll<HTMLElement>(".pf-article"))
        : [];

      articles.forEach((article) => {
        const imgWrap   = article.querySelector<HTMLElement>(".pf-img-wrap");
        const textLines = article.querySelectorAll<HTMLElement>(".pf-line");
        const numEl     = article.querySelector<HTMLElement>(".pf-num");

        // ── image: clip-path wipe (inset from right → 0)
        if (imgWrap) {
          gsap.fromTo(imgWrap,
            { clipPath: "inset(0 100% 0 0 round 24px)", opacity: 1 },
            {
              clipPath: "inset(0 0% 0 0 round 24px)",
              duration: 1.1,
              ease: "expo.inOut",
              scrollTrigger: {
                trigger: imgWrap,
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        // ── large index number: count up
        if (numEl) {
          const target = parseInt(numEl.dataset.num || "0", 10);
          if (isNaN(target) || target <= 0) {
            // If invalid, just show the number without animation
            numEl.textContent = String(numEl.dataset.num || "01").padStart(2, "0");
          } else {
            gsap.fromTo(numEl,
              { opacity: 0, scale: 0.6 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
                scrollTrigger: { trigger: numEl, start: "top 85%", once: true },
                onStart() {
                  const counter = { val: 0 };
                  gsap.to(counter, {
                    val: target,
                    duration: 1.2,
                    ease: "power2.out",
                    onUpdate() {
                      if (numEl) {
                        const currentVal = Math.round(counter.val);
                        if (!isNaN(currentVal) && currentVal >= 0) {
                          numEl.textContent = String(currentVal).padStart(2, "0");
                        }
                      }
                    },
                  });
                },
              }
            );
          }
        }

        // ── text lines: staggered blur-fade from bottom
        if (textLines.length) {
          gsap.fromTo(textLines,
            { opacity: 0, y: 28, filter: "blur(6px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.65,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: textLines[0],
                start: "top 82%",
                once: true,
              },
            }
          );
        }
      });

      // ─────────────────────────────────────────────────────────────────
      // DIVIDERS — scaleX wipe
      // ─────────────────────────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>(".pf-divider").forEach((el) => {
        gsap.fromTo(el,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }
        );
      });

      // ─────────────────────────────────────────────────────────────────
      // CTA — curtain reveal + counter chars
      // ─────────────────────────────────────────────────────────────────
      const ctaTl = gsap.timeline({
        scrollTrigger: { trigger: ctaRef.current, start: "top 72%", once: true },
        defaults: { ease: "expo.out" },
      });

      ctaTl
        .fromTo(".cta-eyebrow",
          { opacity: 0, letterSpacing: "0.3em" },
          { opacity: 1, letterSpacing: "0.12em", duration: 0.8 }
        )
        .fromTo(".cta-heading",
          { opacity: 0, y: 48, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
          "-=0.4"
        )
        .fromTo(".cta-body",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(".cta-action",
          { opacity: 0, scale: 0.88, y: 16 },
          { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: "back.out(1.5)" },
          "-=0.3"
        );

      // glow pulse
      gsap.to(".cta-glow", {
        opacity: 0.55,
        scale: 1.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#f7f7f7] overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[70vh] flex flex-col items-center
                                         justify-center text-center py-24 overflow-hidden">
        {/* slow-breathe blob */}
        <div
          aria-hidden
          className="pf-hero-blob absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[700px] h-[700px] rounded-full pointer-events-none -z-10
                     bg-gradient-to-br from-primary-200/40 via-violet-100/25 to-pink-100/15
                     blur-3xl"
        />
        {/* grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* badge */}
        <div className="pf-hero-badge inline-flex items-center gap-2.5 rounded-full
                        bg-white/80 backdrop-blur border border-slate-200
                        px-5 py-2 mb-8 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary-700">Our Work</span>
        </div>

        {/* heading — each line clipped independently */}
        <h1 className="overflow-hidden text-5xl sm:text-6xl md:text-8xl font-extrabold
                       tracking-tight text-slate-900 leading-none mb-6">
          <span className="pf-hero-line block">Portfolio</span>
        </h1>

        <p className="pf-hero-sub text-lg md:text-xl text-slate-500 max-w-lg mx-auto mb-10 leading-relaxed">
          Handpicked projects across AI, SaaS, mobile &amp; web — built for scale and real impact.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="pf-hero-btn group relative overflow-hidden rounded-xl
                       bg-primary-600 px-8 py-4 text-sm font-semibold text-white
                       shadow-lg shadow-primary-500/30
                       transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5
                       hover:shadow-primary-500/50"
          >
            {"Let's Talk"}
          </Link>
          <Link
            href="/request-a-callback"
            className="pf-hero-btn rounded-xl border-2 border-slate-300 bg-white
                       px-8 py-4 text-sm font-semibold text-slate-800 shadow-sm
                       transition-all duration-300 hover:border-primary-400 hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Scroll</span>
          <svg className="w-4 h-4 text-slate-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── PORTFOLIO LIST ─────────────────────────────────────────────── */}
      <section ref={listRef} className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">

          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            const num    = index + 1;

            return (
              <div key={item.id}>
                <article className="pf-article py-16 md:py-24">
                  <div className={`flex flex-col gap-12 lg:gap-20 items-center
                                   lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"}`}>

                    {/* ── TEXT ── */}
                    <div className="w-full lg:w-1/2 space-y-5">

                      {/* count-up number */}
                      <span
                        className="pf-num block text-8xl font-black leading-none select-none
                                   bg-gradient-to-br from-slate-100 to-slate-200 bg-clip-text text-transparent"
                        data-num={num}
                      >
                        {String(num).padStart(2, "0")}
                      </span>

                      {/* title */}
                      <h2 className="pf-line text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                        {item.title}
                      </h2>

                      {/* tags */}
                      {item.tags.length > 0 && (
                        <div className="pf-line flex flex-wrap gap-2">
                          {item.tags.map((tag, i) =>
                            item.externalLink ? (
                              <a
                                key={i}
                                href={item.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-full
                                           bg-primary-50 border border-primary-200
                                           px-4 py-1.5 text-xs font-semibold text-primary-700
                                           hover:bg-primary-100 transition-colors"
                              >
                                {tag}
                              </a>
                            ) : (
                              <span
                                key={i}
                                className="inline-flex items-center rounded-full
                                           bg-slate-100 border border-slate-200
                                           px-4 py-1.5 text-xs font-semibold text-slate-600"
                              >
                                {tag}
                              </span>
                            )
                          )}
                        </div>
                      )}

                      {item.description && (
                        <p className="pf-line text-base leading-relaxed text-slate-600 max-w-md">
                          {item.description}
                        </p>
                      )}

                      {item.stats && (
                        <p className="pf-line text-sm font-semibold text-slate-700
                                      bg-slate-50 border border-slate-200 rounded-xl
                                      px-4 py-2.5 inline-block">
                          {item.stats}
                        </p>
                      )}

                      {item.externalLink && (
                        <a
                          href={item.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pf-line group inline-flex items-center gap-2 text-sm font-semibold
                                     text-primary-600 hover:text-primary-800 transition-colors"
                        >
                          View Live Project
                          <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* ── IMAGE — clip-path wipe reveal + custom cursor ── */}
                    <div className="pf-img-wrap w-full lg:w-1/2" style={{ clipPath: "inset(0 100% 0 0 round 24px)" }}>
                      <div
                        data-type={item.image ? "image" : undefined}
                        data-value={item.image || undefined}
                        className={`relative mx-auto rounded-3xl overflow-hidden
                                   ${item.bgColor ?? "bg-slate-100"}
                                   shadow-2xl shadow-slate-300/50 aspect-[4/3] max-w-lg
                                   transition-shadow duration-500 hover:shadow-slate-400/60`}
                      >
                        {/* shimmer gloss overlay on hover */}
                        <div className="absolute inset-0 z-10 pointer-events-none
                                        bg-gradient-to-tr from-white/0 via-white/10 to-white/0
                                        opacity-0 hover:opacity-100 transition-opacity duration-500" />

                        {/* corner accents */}
                        <div className="absolute top-3 right-3 w-14 h-14 rounded-full
                                        bg-white/20 blur-lg pointer-events-none z-10" />
                        <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full
                                        bg-black/10 blur-sm pointer-events-none z-10" />

                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain p-8 drop-shadow-lg"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            unoptimized
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center
                                          text-2xl font-bold text-white/70">
                            {item.title}
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </article>

                {index < items.length - 1 && (
                  <div className="pf-divider h-px origin-left
                                  bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section
        ref={ctaRef}
        className="relative py-32 overflow-hidden bg-slate-950"
      >
        {/* animated mesh gradient blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full
                          bg-primary-600/15 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full
                          bg-violet-600/15 blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[300px] h-[300px] rounded-full
                          bg-cyan-500/8 blur-[60px]" />
        </div>

        {/* grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <p className="cta-eyebrow text-xs font-bold tracking-[0.3em] uppercase
                        bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent mb-5">
            Ready to Build Something Great?
          </p>

          <h2 className="cta-heading text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Interested in{" "}
            <span className="bg-gradient-to-r from-primary-400 via-cyan-400 to-violet-400
                             bg-clip-text text-transparent">
              Working With Us?
            </span>
          </h2>

          <p className="cta-body text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Tell us about your project and {"let's"} figure out the best way to bring it to life.
          </p>

          <div className="cta-action relative inline-block">
            <div className="cta-glow absolute inset-0 rounded-2xl bg-primary-500/30 blur-2xl -z-10" />
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-3 rounded-2xl
                         bg-gradient-to-r from-primary-500 to-primary-600
                         px-10 py-5 text-base font-semibold text-white
                         shadow-xl shadow-primary-500/30
                         transition-all duration-300
                         hover:from-primary-400 hover:to-primary-500
                         hover:-translate-y-1 hover:shadow-primary-500/50"
            >
              Request A Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
