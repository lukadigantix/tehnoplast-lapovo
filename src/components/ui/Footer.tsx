import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "@/navigation";
import { FaInstagram } from "react-icons/fa";

type LinkItem = { name: string; link: string };

const Footer: React.FC = () => {
  const t = useTranslations("Home");
  const tMenu = useTranslations("Menu");
  const pages = tMenu.raw("linx") as LinkItem[];

  return (
    <footer>
      <div className="wrapper border-t border-b border-[#393e4236] py-12">
        <p className="pt-16 pb-6 text-[22px] lg:text-[30px] font-bold tracking-[-0.5px] w-[90%] leading-[34px] text-[#393e42]">
          {t("mainTitle")}
        </p>
        <p className="mb-12 text-[13px] font-bold uppercase tracking-[0.28em] text-[#e87722]">
          Precizno. Pouzdano. Kvalitetno.
        </p>

        {/* Contacts */}
        <a
          href="mailto:office@tehnoplast.co.rs"
          className="text-[26px] tracking-[-1px] font-semibold my-3 w-fit no-underline block text-[#e87722] border-b border-[#e8772281]"
        >
          office@tehnoplast.co.rs
        </a>
        <a
          href="tel:+381604665590"
          className="text-[26px] tracking-[-1px] font-semibold my-3 w-fit text-[#393e42] no-underline block"
        >
          +381 60 466 5590
        </a>
        <a
          href="mailto:finansije@tehnoplast.co.rs"
          className="text-[26px] tracking-[-1px] font-semibold my-3 w-fit no-underline block text-[#e87722] border-b border-[#e8772281]"
        >
          finansije@tehnoplast.co.rs
        </a>
        <a
          href="tel:+381694665590"
          className="text-[26px] tracking-[-1px] font-semibold my-3 w-fit text-[#393e42] no-underline block"
        >
          +381 69 466 555
        </a>
        <a
          href="mailto:pozarevac@tehnoplast.co.rs"
          className="text-[26px] tracking-[-1px] font-semibold my-3 w-fit no-underline block text-[#e87722] border-b border-[#e8772281]"
        >
          pozarevac@tehnoplast.co.rs
        </a>
        <a
          href="tel:+381621599173"
          className="text-[26px] tracking-[-1px] font-semibold my-3 w-fit text-[#393e42] no-underline block"
        >
          +381 62 159 9173
        </a>

        {/* Additional info */}
        <div className="mt-14 grid gap-10 border-t border-[#393e4236] pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-3 text-[12px] font-bold uppercase tracking-[0.24em] text-[#393e4280]">
              Adresa
            </h6>
            <p className="text-[16px] leading-[1.7] text-[#393e42]">
              Kosovskih junaka 20
              <br />
              34220 Lapovo, Srbija
            </p>
          </div>

          <div>
            <h6 className="mb-3 text-[12px] font-bold uppercase tracking-[0.24em] text-[#393e4280]">
              Web
            </h6>
            <a
              href="https://www.tehnoplast.co.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] font-semibold text-[#393e42] transition-colors duration-200 hover:text-[#e87722]"
            >
              www.tehnoplast.co.rs
            </a>
            <p className="mt-2 text-[14px] text-[#393e4290]">
              Radno vreme: Pon — Pet, 08—16h
            </p>
          </div>

          <div>
            <h6 className="mb-3 text-[12px] font-bold uppercase tracking-[0.24em] text-[#393e4280]">
              {tMenu("kontakt")}
            </h6>
            <nav className="flex flex-col gap-2">
              {pages.map((page, i) => (
                <Link
                  key={i}
                  href={page.link}
                  className="w-fit text-[16px] font-semibold text-[#393e42] transition-colors duration-200 hover:text-[#e87722]"
                >
                  {page.name}
                </Link>
              ))}
              <Link
                href="/#kategorije"
                className="w-fit text-[16px] font-semibold text-[#393e42] transition-colors duration-200 hover:text-[#e87722]"
              >
                {tMenu("proizvodi")}
              </Link>
            </nav>
          </div>

          <div>
            <h6 className="mb-3 text-[12px] font-bold uppercase tracking-[0.24em] text-[#393e4280]">
              Pratite nas
            </h6>
            <a
              href="https://www.instagram.com/tehnoplast.co.rs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center border border-[#393e4236] text-[#393e42] transition-colors duration-200 hover:border-[#e87722] hover:text-[#e87722]"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="py-2 wrapper flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h6 className="text-[14px] py-2 text-[#393e42b0] tracking-[-0.5px] font-normal">
          © 2026 Tehnoplast — Lapovo, Srbija
        </h6>
        <h6 className="text-[12px] py-2 font-bold uppercase tracking-[0.24em] text-[#393e42b0]">
          Projektujemo. Proizvodimo. Ugrađujemo.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
