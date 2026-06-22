"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "../home/SectionHeading";

interface OfficeItem {
  title: string;
  list: string[];
}
export interface Office {
  category: string;
  items: OfficeItem[];
}

interface OfficesGridProps {
  index: string;
  eyebrow: string;
  title: string;
  offices: Office[];
}

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cellVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// Render a contact entry as a tel:/mailto: link, or plain text otherwise.
function renderContact(value: string) {
  const v = value.trim();
  if (/^\+?[\d\s/]+$/.test(v)) {
    return (
      <a
        href={`tel:${v.replace(/[\s/]/g, "")}`}
        className="transition-colors duration-200 hover:text-[#e87722]"
      >
        {v}
      </a>
    );
  }
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    return (
      <a
        href={`mailto:${v}`}
        className="transition-colors duration-200 hover:text-[#e87722]"
      >
        {v}
      </a>
    );
  }
  return <span>{v}</span>;
}

// Shared offices/locations grid on near-black, used by both the About and the
// Contact pages. Reads the localized office data (item[0] = contact, item[1] =
// address). Cells rise in as the section scrolls into view.
const OfficesGrid: React.FC<OfficesGridProps> = ({
  index,
  eyebrow,
  title,
  offices,
}) => {
  return (
    <section className="bg-[#111] py-28 text-white md:py-40">
      <div className="wrapper">
        <SectionHeading index={index} eyebrow={eyebrow} title={title} />

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid border-l border-t border-white/12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {offices.map((office, i) => {
            const contacts = office.items?.[0]?.list ?? [];
            const address = office.items?.[1]?.list?.[0];

            return (
              <motion.div
                key={i}
                variants={cellVariants}
                className="group flex min-h-[260px] flex-col border-b border-r border-white/12 p-8 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <MapPin size={24} strokeWidth={1.6} className="text-[#e87722]" />
                <h3 className="mt-8 text-[1.05rem] font-black uppercase leading-tight tracking-tight">
                  {office.category}
                </h3>
                {address && (
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-white/55">
                    {address}
                  </p>
                )}
                <div className="mt-auto space-y-1 pt-6 text-[0.9rem] text-white/70">
                  {contacts.map((c, k) => (
                    <div key={k}>{renderContact(c)}</div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OfficesGrid;
