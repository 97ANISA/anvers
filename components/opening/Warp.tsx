"use client";

import { motion } from "framer-motion";

interface Props {
  active: boolean;
}

export default function Warp({ active }: Props) {
  if (!active) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1,
      }}
      animate={{
        opacity: 1,
        scale: 8,
      }}
      transition={{
        duration: 1.5,
        ease: "easeIn",
      }}
      className="pointer-events-none absolute inset-0 z-50 overflow-hidden"
    >
      {Array.from({ length: 220 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            x: (Math.random() - 0.5) * 2500,
            y: (Math.random() - 0.5) * 2500,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="absolute left-1/2 top-1/2 h-[2px] w-[120px] rounded-full bg-white"
        />
      ))}
    </motion.div>
  );
}