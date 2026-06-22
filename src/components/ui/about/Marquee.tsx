"use client";

import React from "react";
import { motion } from "framer-motion";

// Endless keyword ticker — brand/product terms scrolling horizontally. The row
// is duplicated so a -50% translate loops seamlessly.
const WORDS = [
  "PVC & ALU Stolarija",
  "Pergole",
  "Stakleni sistemi",
  "Ograde",
  "Kapije",
  "CNC Obrada",
  "Fiber Laser",
  "Lasersko zavarivanje",
  "Čelične konstrukcije",
];

const Marquee: React.FC = () => {
  const row = [...WORDS, ...WORDS];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#111] py-7">
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 32 }}
      >
        {row.map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-[1.5rem] font-black uppercase tracking-tight text-white/85 md:text-[2.2rem]"
          >
            {word}
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#e87722]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
