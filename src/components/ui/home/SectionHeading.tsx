import React from "react";

interface SectionHeadingProps {
  /** Two-digit section index, e.g. "01" — rendered as an editorial marker. */
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** "dark" = light text on dark bg, "light" = dark text on paper bg. */
  theme?: "dark" | "light";
}

// Left-aligned, asymmetric editorial header shared by the homepage sections.
// A hairline rule + indexed micro-label sit above a heavy title, with the
// intro paragraph offset into a right-hand column (never centered).
const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  eyebrow,
  title,
  subtitle,
  theme = "dark",
}) => {
  const rule = theme === "dark" ? "border-white/15" : "border-black/15";
  const label = theme === "dark" ? "text-white/40" : "text-black/40";
  const titleColor = theme === "dark" ? "text-white" : "text-[#111]";
  const subtitleColor = theme === "dark" ? "text-white/50" : "text-black/55";

  return (
    <div className={`border-t ${rule} pt-7`}>
      <div
        className={`mb-9 flex items-center gap-4 text-[0.7rem] font-bold uppercase tracking-[0.28em] ${label}`}
      >
        <span className="text-[#e87722]">{index}</span>
        <span>{eyebrow}</span>
      </div>

      <div className="grid items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <h2
          className={`text-[2.4rem] font-black uppercase leading-[0.95] tracking-tight md:text-[3.6rem] lg:col-span-7 xl:text-[4.2rem] ${titleColor}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-[1rem] leading-relaxed lg:col-span-4 lg:col-start-9 ${subtitleColor}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeading;
