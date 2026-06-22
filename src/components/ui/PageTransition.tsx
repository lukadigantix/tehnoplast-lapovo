"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

// Branded route-transition curtain. Intercepts internal navigations, drops a
// full-screen panel with the Tehnoplast wordmark while the next page loads in
// the background, then lifts it once the new route is mounted.
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

// Keep the curtain on screen for at least this long so a near-instant load
// doesn't clip the cover/reveal animation mid-flight.
const MIN_COVER_MS = 900;

const PageTransition: React.FC = () => {
  const pathname = usePathname();
  const [covering, setCovering] = useState(false);
  const targetRef = useRef<string | null>(null);
  const startRef = useRef(0);
  const safetyRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lift the curtain once the URL matches the route we navigated toward — but
  // never before MIN_COVER_MS has elapsed since it dropped.
  useEffect(() => {
    if (targetRef.current && pathname === targetRef.current) {
      targetRef.current = null;
      if (safetyRef.current) clearTimeout(safetyRef.current);
      const elapsed = Date.now() - startRef.current;
      const wait = Math.max(MIN_COVER_MS - elapsed, 0);
      const id = setTimeout(() => setCovering(false), wait);
      return () => clearTimeout(id);
    }
  }, [pathname]);

  // Intercept internal link clicks to start the cover animation.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;

      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      // Only same-origin route changes (skip hashes, mailto/tel, files).
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      if (/\.[a-z0-9]+$/i.test(url.pathname)) return;

      targetRef.current = url.pathname;
      startRef.current = Date.now();
      setCovering(true);

      // Failsafe: never get stuck covering if navigation is cancelled.
      if (safetyRef.current) clearTimeout(safetyRef.current);
      safetyRef.current = setTimeout(() => {
        targetRef.current = null;
        setCovering(false);
      }, 4000);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <AnimatePresence>
      {covering && (
        <motion.div
          key="page-transition"
          // Cover INSTANTLY so the loaded page never flashes underneath; only
          // the reveal (slide up) animates.
          initial={{ y: "0%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%", transition: { duration: 0.65, ease: EASE } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#111]"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.12, duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="flex flex-col items-center gap-5"
          >
            <img
              src="/images/tehnoplast-logo.png"
              alt="Tehnoplast"
              className="h-11 w-auto md:h-14"
            />
            <span className="block h-px w-28 overflow-hidden bg-white/15">
              <motion.span
                className="block h-full bg-[#e87722]"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: 1,
                  transition: { delay: 0.18, duration: 0.9, ease: "easeInOut" },
                }}
                style={{ transformOrigin: "left center" }}
              />
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
