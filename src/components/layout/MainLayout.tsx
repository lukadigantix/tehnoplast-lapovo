"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Dropback from "../ui/Dropback";
import Sidemenu from "../ui/Sidemenu";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";
import { useZoomContext } from "@/context/ZoomContext";
import Overlay from "../ui/Overlay";
import { AnimatePresence } from "framer-motion";

interface MainLayoutProps {
  children: ReactNode;
  color:string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, color }) => {
  const [open, setOpen] = useState(false);

  const { selectImage } = useZoomContext();

  // Subtle smooth/eased scrolling across the whole site (Lenis).
  const lenisRef = useRef<Lenis | null>(null);
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, anchors: true });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause smooth scroll (locks the page) while the menu is open.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open]);

  return (
    <>
      <Dropback open={open} setOpen={setOpen} />
      <Sidemenu open={open} setOpen={setOpen} />
      <Nav open={open} setOpen={setOpen} color={color} />
 
      <AnimatePresence>{selectImage.open && <Overlay />}</AnimatePresence>

      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
