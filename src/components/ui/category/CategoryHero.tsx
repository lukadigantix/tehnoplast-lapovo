import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import ImagePlaceholder from "./ImagePlaceholder";

type LinkItem = { name: string; link: string };

interface CategoryHeroProps {
  namespace: string;
  image?: string;
}

// Category hero — dark, with a breadcrumb, big title, intro and a wide image
// placeholder. Reads the given category namespace.
const CategoryHero: React.FC<CategoryHeroProps> = ({ namespace, image }) => {
  const t = useTranslations(namespace);
  const tMenu = useTranslations("Menu");
  const pages = tMenu.raw("linx") as LinkItem[];
  const home = pages[0]?.name ?? "Početna";

  return (
    <section className="bg-[#111] pb-16 pt-32 text-white md:pt-36">
      <div className="wrapper">
        {/* Breadcrumb */}
        <nav className="mb-10 flex flex-wrap items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/40">
          <Link href="/" className="transition-colors duration-200 hover:text-white">
            {home}
          </Link>
          <span className="text-white/25">/</span>
          <Link
            href="/#kategorije"
            className="transition-colors duration-200 hover:text-white"
          >
            {tMenu("proizvodi")}
          </Link>
          <span className="text-white/25">/</span>
          <span className="text-[#e87722]">{t("title")}</span>
        </nav>

        <span className="mb-6 inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#e87722]">
          <span className="h-px w-8 bg-[#e87722]" />
          {t("eyebrow")}
        </span>

        <h1 className="max-w-[18ch] text-[2.8rem] font-black uppercase leading-[0.92] tracking-tight md:text-[5rem] xl:text-[6rem]">
          {t("title")}
        </h1>

        <p className="mt-8 max-w-[62ch] text-[1.05rem] leading-relaxed text-white/55">
          {t("subtitle")}
        </p>

        <div className="mt-14">
          {image ? (
            <img
              src={image}
              alt={t("title")}
              loading="lazy"
              className="aspect-[21/9] w-full object-cover"
            />
          ) : (
            <ImagePlaceholder
              label={t("image")}
              theme="dark"
              className="aspect-[21/9] w-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
