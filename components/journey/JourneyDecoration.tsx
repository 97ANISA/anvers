"use client";

import { motion } from "framer-motion";

export default function JourneyDecoration() {
  return (
    <>
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-44 -top-44 h-[750px] w-[750px] rounded-full bg-[#FFD89C]/40 blur-[180px]"
      />

      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-white blur-[160px]"
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#000 0.7px, transparent 0.7px)",
          backgroundSize: "14px 14px",
        }}
      />
    </>
  );
}