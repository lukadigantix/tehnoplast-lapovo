"use client";
import React from "react";
import { Link } from "@/navigation";
import Hamburger from "hamburger-react";

interface NavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  color: string;
}

const Nav: React.FC<NavProps> = ({ open, setOpen }) => {
  return (
    <nav>
      {/* Fixed logo — mirrors the menu button (always visible while scrolling,
          links home). Full-colour logo. */}
      <Link
        href="/"
        aria-label="Tehnoplast — početna"
        onClick={() => setOpen(false)}
        className="fixed left-[4%] top-[1.2rem] z-[110] flex h-[50px] items-center transition-opacity duration-200 hover:opacity-70 md:h-[75px]"
      >
        <img
          src="/images/tehnoplast-logo.png"
          alt="Tehnoplast"
          className="h-[38px] w-auto md:h-[48px]"
        />
      </Link>

      {/* Menu button */}
      <div
        className="fixed right-[4%] top-[1.2rem] z-[110] grid h-[50px] w-[50px] cursor-pointer place-content-center rounded-full bg-[#e5853b9c] outline-none transition-colors duration-500 ease-in-out hover:bg-[#e5853be3] md:h-[75px] md:w-[75px]"
        onClick={() => setOpen(!open)}
      >
        <Hamburger
          toggled={open}
          toggle={() => setOpen(!open)}
          size={22}
          hideOutline={false}
          color="#fff"
        />
      </div>
    </nav>
  );
};

export default Nav;
