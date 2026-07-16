"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DelayedFadeProps {
  children: ReactNode;
}

export default function DelayedFade({
  children,
}: DelayedFadeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 2.4,
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
}