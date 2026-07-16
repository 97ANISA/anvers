"use client";

import { motion } from "framer-motion";

export default function Sun() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        rotate: 360,
      }}
      transition={{
        scale: {
          duration: 5,
          repeat: Infinity,
        },
        rotate: {
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {/* Glow */}
      <div className="absolute inset-0 scale-[2] rounded-full bg-yellow-300/20 blur-[70px]" />

      {/* Core */}
      <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-yellow-100 via-yellow-300 to-orange-400 shadow-[0_0_150px_60px_rgba(250,204,21,.5)]" />
    </motion.div>
  );
}