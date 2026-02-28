"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1600;

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

interface CountUpStatsProps {
  stats: readonly StatItem[];
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function CountUpStats({
  stats,
  className = "",
  valueClassName = "text-3xl font-bold text-primary-700 md:text-4xl",
  labelClassName = "mt-1 text-sm text-slate-600",
}: CountUpStatsProps) {
  const [displayValues, setDisplayValues] = useState<number[]>(
    stats.map(() => 0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const targets = stats.map((s) => s.value);
    const startTime = performance.now();
    const startValues = targets.map(() => 0);

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutQuart(progress);

      setDisplayValues(
        targets.map((target, i) =>
          Math.floor(startValues[i] + (target - startValues[i]) * eased)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayValues([...targets]);
      }
    };

    requestAnimationFrame(tick);
  }, [hasAnimated, stats]);

  return (
    <div ref={sectionRef} className={`grid grid-cols-3 gap-6 ${className}`}>
      {stats.map((stat, i) => (
        <div key={stat.label} className="text-center">
          <p className={valueClassName}>
            {displayValues[i]?.toLocaleString() ?? "0"}
            {stat.suffix ?? ""}
          </p>
          <p className={labelClassName}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
