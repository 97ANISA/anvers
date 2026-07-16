"use client";

import { motion } from "framer-motion";

export default function Sunlight() {
  return (
    <motion.div
      animate={{
        opacity: [0.3, 0.55, 0.3],
         scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        left-1/2
        top-[180px]
        h-[500px]
        w-[380px]
        -translate-x-1/2
        bg-gradient-to-b
        from-yellow-100/50
        to-transparent
        blur-3xl
        pointer-events-none
      "
    />
  );
}