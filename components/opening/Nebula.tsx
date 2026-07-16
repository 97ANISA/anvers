"use client";

import { motion } from "framer-motion";

export default function Nebula() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Center Nebula */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[180px]"
      />

      {/* Left Nebula */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[15%] top-[25%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]"
      />

      {/* Right Nebula */}
      <motion.div
        animate={{
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[160px]"
      />
    </div>
  );
}