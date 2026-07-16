"use client";

import { motion } from "framer-motion";

export default function Cloud() {
  return (
    <motion.div
      animate={{
        x: [-20, 20, -20],
      }}
      transition={{
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      }}
      className="absolute left-10 top-8"
    >
      <div className="h-10 w-20 rounded-full bg-white/70 blur-sm" />
    </motion.div>
  );
}