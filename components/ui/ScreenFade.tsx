"use client";

import { AnimatePresence, motion } from "framer-motion";

interface ScreenFadeProps {
  show: boolean;
}

export default function ScreenFade({
  show,
}: ScreenFadeProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="fixed inset-0 z-[9999] bg-black"
        />
      )}
    </AnimatePresence>
  );
}