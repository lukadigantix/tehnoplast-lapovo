"use client";

import React from "react";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";

interface Spec {
  label: string;
  value: string;
}
export interface Subcategory {
  name: string;
  kind: string;
  specs: Spec[];
  features: string[];
}

interface SubcategoryBlockProps {
  sub: Subcategory;
  index: number;
  theme: "dark" | "light";
  imageSide: "left" | "right";
  labels: { specs: string; features: string; image: string };
  image?: string;
}

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

// One product system: an image placeholder beside a spec table + feature tags.
// The image side alternates per block; theme alternates dark/paper.
const SubcategoryBlock: React.FC<SubcategoryBlockProps> = ({
  sub,
  index,
  theme,
  imageSide,
  labels,
  image,
}) => {
  const dark = theme === "dark";
  const sectionCls = dark ? "bg-[#111] text-white" : "bg-[#f4f2ef] text-[#111]";
  const muted = dark ? "text-white/50" : "text-black/50";
  const divide = dark ? "divide-white/10 border-white/15" : "divide-black/10 border-black/15";
  const tag = dark ? "border-white/20 text-white/75" : "border-black/20 text-black/75";

  return (
    <section className={`${sectionCls} py-24 md:py-32`}>
      <div className="wrapper grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div {...reveal} className={imageSide === "right" ? "lg:order-2" : ""}>
          {image ? (
            <img
              src={image}
              alt={sub.name}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          ) : (
            <ImagePlaceholder
              label={labels.image}
              theme={theme}
              className="aspect-[4/3] w-full"
            />
          )}
        </motion.div>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.05 }}
          className={`min-w-0 ${imageSide === "right" ? "lg:order-1" : ""}`}
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="text-[1.1rem] font-black tabular-nums text-[#e87722] md:text-[1.3rem]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={`text-[0.62rem] font-bold uppercase tracking-[0.28em] ${muted}`}>
              {sub.kind}
            </span>
          </div>

          <h3 className="break-words text-[2rem] font-black uppercase leading-[1.0] tracking-tight md:text-[3rem]">
            {sub.name}
          </h3>

          <p className={`mb-3 mt-10 text-[0.65rem] font-bold uppercase tracking-[0.28em] ${muted}`}>
            {labels.specs}
          </p>
          <dl className={`divide-y border-t ${divide}`}>
            {sub.specs.map((s, i) => (
              <div key={i} className="flex items-baseline justify-between gap-6 py-3.5">
                <dt className={`text-[0.9rem] ${muted}`}>{s.label}</dt>
                <dd className="text-right text-[1rem] font-black tabular-nums">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          {sub.features?.length > 0 && (
            <>
              <p className={`mb-3 mt-9 text-[0.65rem] font-bold uppercase tracking-[0.28em] ${muted}`}>
                {labels.features}
              </p>
              <div className="flex flex-wrap gap-2">
                {sub.features.map((f, i) => (
                  <span
                    key={i}
                    className={`border px-3.5 py-2 text-[0.78rem] font-semibold ${tag}`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SubcategoryBlock;
