"use client";

import { motion } from "framer-motion";

interface Props {
  delay?: number;
  top?: number;
}

export default function ShootingStar({
  delay = 0,
  top = 120,
}: Props) {
  return (
    <motion.div
      initial={{
        x: -300,
        y: 0,
        opacity: 0,
      }}
      animate={{
        x: 1700,
        y: 450,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 8,
        ease: "easeOut",
      }}
      className="absolute"
      style={{
        top,
      }}
    >
      <div className="h-[2px] w-40 rotate-[20deg] rounded-full bg-gradient-to-r from-white via-cyan-200 to-transparent" />
    </motion.div>
  );
}