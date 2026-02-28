"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DURATION_MS = 1500;

function Counter({
  end,
  suffix,
  shouldStart,
}: {
  end: number;
  suffix?: string;
  shouldStart: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasStartedRef.current) return;
    hasStartedRef.current = true;

    if (typeof Worker === "undefined") {
      const id = window.setTimeout(() => setCount(end), 0);
      return () => window.clearTimeout(id);
    }
    const worker = new Worker("/count-up.worker.js");
    worker.postMessage({ end, duration: DURATION_MS });
    worker.onmessage = (e: MessageEvent<{ value: number; done: boolean }>) => {
      setCount(e.data.value);
      if (e.data.done) worker.terminate();
    };
    return () => worker.terminate();
  }, [end, shouldStart]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function StatsBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [shouldStartCounters, setShouldStartCounters] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate left text (slide up + fade in)
      if (leftTextRef.current) {
        gsap.fromTo(
          leftTextRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Animate stats (staggered slide up + fade in)
      if (statsRef.current) {
        const statItems = statsRef.current.children;
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
              onEnter: () => {
                // Start counters when stats become visible
                setShouldStartCounters(true);
              },
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 bg-[#f3f3f3]"
    >
      <div className="relative mx-auto w-full max-w-[1600px] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] bg-[#0b1b3b] px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 overflow-hidden">
        {/* Dot pattern */}
        <svg
          className="absolute left-0 top-0 h-full w-1/2 sm:w-1/3 opacity-10 sm:opacity-20"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Subtle color blobs */}
        <div
          aria-hidden
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-16 left-1/3 h-48 w-48 rounded-full bg-gradient-to-br from-green-500/15 to-emerald-500/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute top-1/2 right-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-500/10 blur-3xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_2fr] items-center">
          {/* Left text */}
          <div
            ref={leftTextRef}
            className="text-white max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight">
              SHIP TOGETHER,
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                BUILD WITH PURPOSE
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/75">
              We partner with teams to plan, design, and build software that&apos;s
              fast to launch and ready to scale.
            </p>
          </div>

          {/* Right stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center text-white"
          >
            <div className="group">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                <Counter end={2} suffix="+" shouldStart={shouldStartCounters} />
              </h3>
              <div className="mt-2 h-0.5 w-8 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-60" />
              <p className="mt-2 text-sm sm:text-base text-white/75">
                Years In Business
              </p>
            </div>

            <div className="group">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                <Counter
                  end={50}
                  suffix="+"
                  shouldStart={shouldStartCounters}
                />
              </h3>
              <div className="mt-2 h-0.5 w-8 mx-auto rounded-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-60" />
              <p className="mt-2 text-sm sm:text-base text-white/75">
                Projects Completed
              </p>
            </div>

            <div className="group">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                <Counter end={20} suffix="+" shouldStart={shouldStartCounters} />
              </h3>
              <div className="mt-2 h-0.5 w-8 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 opacity-60" />
              <p className="mt-2 text-sm sm:text-base text-white/75">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
