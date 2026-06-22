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
          className="fixed right-0 top-0 z-[100] flex h-screen w-full flex-col bg-[#111] text-white md:w-[680px] lg:w-[820px]"
        >
          {/* Header — right side kept clear for the Nav close (X) button */}
          <motion.div
            variants={itemVariants}
            className="flex h-[76px] shrink-0 items-center border-b border-white/10 px-8 md:h-[110px] md:px-12"
          >
            <span className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-white/40">
              <span className="h-px w-8 bg-[#e87722]" />
              {t("meni")}
            </span>
          </motion.div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-8 py-9 md:px-12">
            {/* Pages — secondary nav */}
            <motion.div variants={itemVariants} className="mb-10">
              <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/30">
                {t("stranice")}
              </p>
              <div className="flex flex-wrap gap-x-7 gap-y-2">
                {pages.map((page, i) => (
                  <Link
                    key={i}
                    href={page.link}
                    onClick={() => setOpen(false)}
                    className="text-[0.95rem] font-bold uppercase tracking-wide text-white/70 transition-colors duration-200 hover:text-[#e87722]"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Products — featured list */}
            <motion.p
              variants={itemVariants}
              className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/30"
            >
              {t("proizvodi")}
            </motion.p>
            <nav>
              {products.map((product, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Link
                    href={product.link}
                    onClick={() => setOpen(false)}
                    className={`group flex items-start justify-between gap-4 py-5 md:py-7 ${
                      i === 0 ? "border-t border-white/10 " : ""
                    }${
                      i < products.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <span className="flex min-w-0 items-start gap-4 overflow-hidden">
                      <span className="mt-2 text-[0.72rem] font-black tabular-nums text-white/25 transition-colors duration-200 group-hover:text-[#e87722] md:text-[0.8rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 break-words text-[1.6rem] font-black uppercase leading-[1.08] tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#e87722] md:text-[2.1rem]">
                        {product.name}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={26}
                      strokeWidth={1.6}
                      className="mt-1 shrink-0 -translate-x-2 text-[#e87722] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Footer — language + contact */}
          <motion.div
            variants={itemVariants}
            className="shrink-0 border-t border-white/10 px-8 py-7 md:px-12"
          >
            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              {/* Language switcher */}
              <div>
                <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/30">
                  {t("jezik")}
                </p>
                <div className="flex items-center gap-2">
                  {LOCALES.map((code) => (
                    <button
                      key={code}
                      onClick={() => handleLocaleChange(code)}
                      className={`text-[0.85rem] font-black uppercase tracking-widest transition-colors duration-200 ${
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
              <div className="sm:text-right">
                <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/30">
                  {t("kontakt")}
                </p>
                <a
                  href="mailto:office@tehnoplast.co.rs"
                  className="block text-[0.95rem] font-bold text-white transition-colors duration-200 hover:text-[#e87722]"
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
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidemenu;
