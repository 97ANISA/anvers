"use client";

import { motion } from "framer-motion";
import { PlanetData } from "@/data/planets";

interface PlanetProps {
  planet: PlanetData;
  onClick?: () => void;
  selected?: boolean;
}

export default function Planet({
  planet,
  onClick,
  selected = false,
}: PlanetProps) {
  return (
    <motion.div
      onClick={() => {
  console.log("Planet clicked");
  onClick?.();
}}
      animate={{
        scale: selected ? 3 : 1,
      }}
      whileHover={{
        scale: selected ? 3 : 1.15,
      }}
      whileTap={{
        scale: selected ? 3 : 0.95,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="group relative z-10 flex cursor-pointer flex-col items-center"
    >
      {/* Glow */}
      <motion.div
        animate={{
          opacity: selected ? 1 : [0.3, 0.6, 0.3],
          scale: selected ? 2 : [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: selected ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="absolute rounded-full blur-xl"
        style={{
          width: planet.size + 18,
          height: planet.size + 18,
          background: planet.color,
        }}
      />

      {/* Planet */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative overflow-hidden rounded-full shadow-2xl"
        style={{
          width: planet.size,
          height: planet.size,
          background: `radial-gradient(circle at 30% 30%, white, ${planet.color})`,
        }}
      >
        {/* Highlight */}
        <div className="absolute left-[20%] top-[18%] h-[20%] w-[20%] rounded-full bg-white/60 blur-sm" />

        {/* Texture */}
        <div className="absolute left-[15%] top-[45%] h-[12%] w-[45%] rounded-full bg-white/10" />

        <div className="absolute right-[10%] bottom-[25%] h-[10%] w-[30%] rounded-full bg-black/10" />

        <div className="absolute left-[40%] bottom-[18%] h-[12%] w-[20%] rounded-full bg-black/10" />
      </motion.div>

      {/* Label */}
      <motion.div
        animate={{
          opacity: selected ? 1 : 0.6,
          y: selected ? 8 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="mt-3 text-center"
      >
        <h3 className="text-xs tracking-[0.2em] text-white">
          {planet.title}
        </h3>

        <p className="mt-1 text-[10px] text-white/50">
          {planet.subtitle}
        </p>
      </motion.div>
    </motion.div>
  );
}