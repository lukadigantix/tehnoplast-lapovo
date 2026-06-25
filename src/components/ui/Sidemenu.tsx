"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { Link } from "@/navigation";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

interface SidemenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

type LinkItem = {
  name: string;
  link: string;
};

const LOCALES = ["sr", "de", "fr", "en"] as const;

// Slide easing — easeInOutQuart for a weighty, premium panel motion.
const EASE_PANEL: [number, number, number, number] = [0.76, 0, 0.24, 1];
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Panel drives a staggered reveal of its children via variant propagation.
const panelVariants: Variants = {
  hidden: { x: "100%" },
  show: {
    x: 0,
    transition: {
      duration: 0.6,
      ease: EASE_PANEL,
      when: "beforeChildren",
      staggerChildren: 0.05,
      delayChildren: 0.18,
    },
  },
  exit: { x: "100%", transition: { duration: 0.45, ease: EASE_PANEL } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const Sidemenu: React.FC<SidemenuProps> = ({ open, setOpen }) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const t = useTranslations("Menu");
  const products = t.raw("products") as LinkItem[];
  const pages = t.raw("linx") as LinkItem[];

  const handleLocaleChange = (next: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(sr|de|fr|en)/, "");
    router.push(`/${next}${pathWithoutLocale}`);
    setOpen(false);
  };

  // Lock body scroll while the menu is open.
  useEffect(() => {
    if (open) {
      const width = document.body.clientWidth;
      document.body.style.overflowY = "hidden";
      document.body.style.width = `${width}px`;
    } else {
      document.body.style.overflowY = "visible";
      document.body.style.width = "auto";
    }
    return () => {
      document.body.style.overflowY = "visible";
      document.body.style.width = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          key="sidemenu"
          variants={panelVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed right-0 top-0 z-[100] h-svh w-full overflow-y-auto bg-[#111] text-white md:h-screen md:w-[680px] lg:w-[820px]"
        >
          {/* Whole panel scrolls; min-h-full keeps the footer at the bottom of
              the flow so it's always reachable (never pinned off-screen). */}
          <div className="flex min-h-full flex-col">
            {/* Header — kept clear on the left for the fixed logo and on the
                right for the Nav close (X). "MENI" shows on desktop only. */}
            <motion.div
              variants={itemVariants}
              className="flex h-[64px] shrink-0 items-center px-7 sm:h-[72px] sm:px-8 md:h-[110px] md:border-b md:border-white/10 md:px-12"
            >
              <span className="hidden items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-white/40 md:flex">
                <span className="h-px w-8 bg-[#e87722]" />
                {t("meni")}
              </span>
            </motion.div>

            {/* Main — centered on mobile, editorial list on desktop */}
            <div className="flex flex-1 flex-col justify-center gap-10 px-7 py-10 text-center sm:px-8 md:justify-start md:gap-0 md:px-12 md:py-9 md:text-left">
              {/* Products — primary */}
              <nav className="flex flex-col">
                <motion.p
                  variants={itemVariants}
                  className="mb-5 hidden text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/30 md:block"
                >
                  {t("proizvodi")}
                </motion.p>
                {products.map((product, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <Link
                      href={product.link}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-center gap-4 py-3 md:justify-between md:py-7 ${
                        i === 0 ? "md:border-t md:border-white/10 " : ""
                      }${
                        i < products.length - 1
                          ? "md:border-b md:border-white/10"
                          : ""
                      }`}
                    >
                      <span className="flex min-w-0 items-baseline justify-center gap-4 md:items-start">
                        <span className="hidden text-[0.8rem] font-black tabular-nums text-white/25 transition-colors duration-200 group-hover:text-[#e87722] md:mt-2 md:inline">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 break-words pr-[0.12em] text-[1.5rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-300 group-hover:text-[#e87722] md:text-[2.1rem]">
                          {product.name}
                        </span>
                      </span>
                      <ArrowUpRight
                        strokeWidth={1.6}
                        className="hidden h-[26px] w-[26px] shrink-0 -translate-x-2 text-[#e87722] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block"
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Pages + catalog — secondary */}
              <motion.div variants={itemVariants} className="md:mt-12">
                <p className="mb-5 hidden text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/30 md:block">
                  {t("stranice")}
                </p>
                <div className="flex flex-col items-center gap-3.5 md:flex-row md:flex-wrap md:items-center md:gap-x-7 md:gap-y-2">
                  {pages.map((page, i) => (
                    <Link
                      key={i}
                      href={page.link}
                      onClick={() => setOpen(false)}
                      className="text-[1rem] font-bold uppercase tracking-wide text-white/70 transition-colors duration-200 hover:text-[#e87722] md:text-[0.95rem]"
                    >
                      {page.name}
                    </Link>
                  ))}
                  <a
                    href="/katalog.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1.5 text-[1rem] font-bold uppercase tracking-wide text-white/70 transition-colors duration-200 hover:text-[#e87722] md:text-[0.95rem]"
                  >
                    {t("katalog")}
                    <span className="text-[0.6rem] tracking-[0.2em] text-white/30">
                      PDF
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Footer — language + contact */}
            <motion.div
              variants={itemVariants}
              className="shrink-0 border-t border-white/10 px-7 py-6 text-center sm:px-8 md:px-12 md:py-7 md:text-left"
            >
              <div className="flex flex-col items-center gap-5 md:flex-row md:items-end md:justify-between md:gap-7">
                {/* Language switcher */}
                <div>
                  <p className="mb-2.5 hidden text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/30 md:block">
                    {t("jezik")}
                  </p>
                  <div className="flex items-center justify-center gap-3 md:gap-2">
                    {LOCALES.map((code) => (
                      <button
                        key={code}
                        onClick={() => handleLocaleChange(code)}
                        className={`text-[0.9rem] font-black uppercase tracking-widest transition-colors duration-200 md:text-[0.85rem] ${
                          code === locale
                            ? "text-[#e87722]"
                            : "text-white/40 hover:text-white"
                        }`}
                      >
                        {code}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="md:text-right">
                  <p className="mb-2 hidden text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/30 md:block">
                    {t("kontakt")}
                  </p>
                  <a
                    href="mailto:office@tehnoplast.co.rs"
                    className="block break-words text-[0.95rem] font-bold text-white transition-colors duration-200 hover:text-[#e87722]"
                  >
                    office@tehnoplast.co.rs
                  </a>
                  <a
                    href="tel:+381604665590"
                    className="block text-[0.95rem] font-bold text-white/60 transition-colors duration-200 hover:text-[#e87722]"
                  >
                    +381 60 466 5590
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidemenu;
