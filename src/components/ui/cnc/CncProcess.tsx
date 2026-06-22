"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import ImagePlaceholder from "../category/ImagePlaceholder";

interface ProcessStep {
  title: string;
  text: string;
}

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cellVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// The six-step production process shown visually — an image placeholder per
// step, on warm paper. Reuses the localized Home.process.steps content.
const CncProcess: React.FC = () => {
  const t = useTranslations("Cnc");
  const tHome = useTranslations("Home");
  const steps = tHome.raw("process.steps") as ProcessStep[];

  return (
    <section className="bg-[#f4f2ef] py-28 text-[#111] md:py-40">
      <div className="wrapper">
        <div className="mb-16 max-w-[760px]">
          <span className="mb-6 inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-black/40">
            <span className="h-px w-8 bg-[#e87722]" />
            {t("processLabel")}
          </span>
          <h2 className="text-[2.2rem] font-black uppercase leading-[0.95] tracking-tight md:text-[3.4rem]">
            {t("processTitle")}
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-black/55">
            {t("processSubtitle")}
          </p>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={cellVariants} className="min-w-0">
              <ImagePlaceholder
                label={t("image")}
                theme="light"
                className="mb-6 aspect-[4/3] w-full"
              />
              <div className="flex items-center gap-4">
                <span className="text-[1.1rem] font-black tabular-nums text-[#e87722]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-black/15" />
              </div>
              <h3 className="mt-4 break-words text-[1.2rem] font-black uppercase leading-tight tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-black/55">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CncProcess;
