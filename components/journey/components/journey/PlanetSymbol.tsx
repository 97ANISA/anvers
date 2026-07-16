"use client";

import { motion } from "framer-motion";

interface PlanetSymbolProps {
  planet: string;
}

const symbols: Record<string, string> = {
  mercury: "☿",
  venus: "♀",
  earth: "🌍",
  mars: "♂",
  jupiter: "♃",
  saturn: "♄",
  uranus: "♅",
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
        opacity: [0.45, 1, 0.45],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="mb-16 text-[180px] text-[#D7B179]"
    >
      {symbols[planet]}
    </motion.div>
  );
}