"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface DropbackProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

// Dimmed, blurred backdrop behind the menu. Fades in with the panel and
// closes the menu on click.
const Dropback: React.FC<DropbackProps> = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
        />
      )}
    </AnimatePresence>
  );
};

export default Dropback;
