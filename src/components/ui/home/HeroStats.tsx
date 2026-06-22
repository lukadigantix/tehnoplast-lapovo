"use client";

import React, { useEffect, useRef, useState } from "react";

// One stat is either a counted number (value + suffix) or a plain text value.
export interface HeroStat {
  value?: number;
  suffix?: string;
  text?: string;
  label: string;
}

interface HeroStatsProps {
  stats: HeroStat[];
}

const DURATION = 1700; // ms

// Hero stat strip: oversized tabular numerals split by vertical hairlines.
// Numbers count up once, the first time the row scrolls into view.
const HeroStats: React.FC<HeroStatsProps> = ({ stats }) => {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;

          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / DURATION, 1);
            setProgress(1 - Math.pow(1 - p, 3)); // easeOutCubic
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 border-t border-white/15 md:grid-cols-4"
    >
      {stats.map((stat, i) => {
        const [firstWord, ...rest] = (stat.text ?? "").split(" ");

        return (
          <div
            key={i}
            className={`border-white/15 py-7 [&:nth-child(2)]:border-l md:border-l md:py-9 ${
              i === 0 ? "md:border-l-0" : ""
            } ${i >= 2 ? "border-t md:border-t-0" : ""} ${i % 2 === 1 ? "pl-5 md:pl-7" : "md:pl-7"}`}
          >
            <div className="text-[2.4rem] font-black leading-none tracking-tight tabular-nums md:text-[3.4rem]">
              {stat.text ? (
                <span className="uppercase">
                  <span className="text-[#e87722]">{firstWord}</span>
                  <span className="block text-[1rem] font-bold tracking-normal md:text-[1.1rem]">
                    {rest.join(" ")}
                  </span>
                </span>
              ) : (
                <>
                  {Math.floor(progress * (stat.value ?? 0)).toLocaleString(
                    "sr-RS"
                  )}
                  <span className="text-[#e87722]">{stat.suffix}</span>
                </>
              )}
            </div>
            <div className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/40">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroStats;
