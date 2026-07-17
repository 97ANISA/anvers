"use client";

import { motion } from "framer-motion";

interface PlanetSymbolProps {
  planet: string;
}

const symbols: Record<string, string> = {
  mercury: "☿",
  venus: "♀",
  earth: "⊕",
  mars: "♂",
  jupiter: "♃",
  saturn: "♄",
  uranus: "⛢",
  neptune: "♆",
};

export default function PlanetSymbol({
  planet,
}: PlanetSymbolProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        opacity: [0.7, 1, 0.7],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="mb-16 text-[140px] text-[#D6B27C]"
    >
      {symbols[planet] ?? "✦"}
    </motion.div>
  );
}