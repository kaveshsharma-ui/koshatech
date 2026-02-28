"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useSwiperStyles } from "@/components/SwiperStyles";
import {
  appDevelopmentCarouselSlides,
  appDevelopmentPortfolioOverrides,
} from "@/data/appDevelopmentCompany";
import { portfolioItems } from "@/data/portfolio";
import type { PortfolioItem } from "@/data/portfolio";

const COUNT_DURATION_MS = 1800;

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function CountUpValue({
  target,
  suffix = "x",
  start = 0,
  duration = COUNT_DURATION_MS,
  isActive,
}: {
  target: number;
  suffix?: string;
  start?: number;
  duration?: number;
  isActive: boolean;
}) {
  const [display, setDisplay] = useState(start);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setDisplay(start + (target - start) * eased);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(target);
    };
    requestAnimationFrame(tick);
  }, [isActive, target, start, duration]);

  return (
    <>
      {Math.floor(display)}
      {suffix}
    </>
  );
}

export function AppDevPortfolio() {
  useSwiperStyles();
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = appDevelopmentCarouselSlides.map((config) => {
    const project = portfolioItems.find((p) => p.id === config.id) as PortfolioItem | undefined;
    return { config, project };
  }).filter((s) => s.project != null);

  return (
    <div className="relative overflow-hidden">
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        setActiveIndex(swiper.realIndex);
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      loop={false}
      grabCursor
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) =>
          `<span class="${className}">${index + 1}</span>`,
      }}
      navigation={{
        prevEl: ".portfolio-prev",
        nextEl: ".portfolio-next",
      }}
      className="portfolio-swiper"
    >
      {slides.map(({ config, project }, slideIndex) => {
        if (!project) return null;
        const override = (appDevelopmentPortfolioOverrides as Partial<Record<string, { title?: string; description: string }>>)[config.id];
        const title = override?.title != null ? override.title : project.title;
        const description = override?.description != null ? override.description : (project.description ?? "");
        const isActive = activeIndex === slideIndex;

        const isWhiteBox = config.statsStyle === "whiteBox";
        const isDarkerBox = config.statsStyle === "darkerBox";
        const statBoxBg = isWhiteBox ? "#ffffff" : isDarkerBox ? config.statBoxHex : undefined;
        const statTextColor = isWhiteBox && config.statBoxHex ? config.statBoxHex : undefined;

        return (
          <SwiperSlide key={config.id}>
            <div
              className="min-h-[420px] md:min-h-[480px] flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-10 sm:px-8 md:px-12 md:py-14"
              style={{ backgroundColor: config.bgHex }}
            >
              {/* Left: project mockup image */}
              <div className="relative flex w-full max-w-md flex-1 justify-center md:justify-end">
                <div className="relative aspect-[200/280] md:aspect-[240/320]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80vw, 40vw"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right: Title, platform, description, stats carousel */}
              <div className="w-full max-w-lg flex-shrink-0">
                <h3 className="text-3xl font-bold md:text-4xl text-white">{title}</h3>
                <p className="mt-1 text-sm font-medium text-white/80">
                  {project.tags?.join(" • ")}
                </p>
                <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-white/90 md:line-clamp-5">
                  {description}
                </p>

                {/* 4 stat blocks - exact colors and layout per reference designs */}
                <div className="mt-6 flex border-t border-white/30 pt-6">
                  {config.stats.map((stat, idx) => (
                    <div
                      key={stat.label}
                      className="flex flex-1 min-w-0 flex-col items-center justify-center py-3 px-2 text-center md:py-4 md:px-3"
                      style={{
                        backgroundColor: statBoxBg,
                        borderRight:
                          idx < config.stats.length - 1
                            ? isWhiteBox
                              ? "1px solid rgba(0,0,0,0.06)"
                              : "1px solid rgba(255,255,255,0.5)"
                            : undefined,
                      }}
                    >
                      <span
                        className="text-xl font-bold md:text-2xl"
                        style={{ color: statTextColor ?? "#ffffff" }}
                      >
                        <CountUpValue
                          target={stat.value}
                          suffix="x"
                          isActive={isActive}
                        />
                      </span>
                      <span
                        className="mt-0.5 text-xs font-medium md:text-sm"
                        style={{
                          color: statTextColor
                            ? statTextColor
                            : "rgba(255,255,255,0.95)",
                        }}
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
                {config.footnote && (
                  <p className="mt-3 text-xs text-white/70">{config.footnote}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>

    {/* Carousel arrows - on far left and right */}
    <button
      type="button"
      aria-label="Previous slide"
      className="portfolio-prev absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-2.5 text-slate-700 shadow-sm transition hover:bg-white disabled:opacity-40 md:left-4"
    >
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      type="button"
      aria-label="Next slide"
      className="portfolio-next absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-2.5 text-slate-700 shadow-sm transition hover:bg-white disabled:opacity-40 md:right-4"
    >
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
  );
}
