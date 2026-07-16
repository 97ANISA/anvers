"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "40%", top: "34%", delay: 0 },
  { left: "45%", top: "40%", delay: 1 },
  { left: "48%", top: "46%", delay: 2 },
  { left: "43%", top: "52%", delay: 3 },
  { left: "50%", top: "37%", delay: 1.5 },
];

export default function Dust() {
  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: particle.delay,
          }}
          className="absolute h-2 w-2 rounded-full bg-white/70 blur-[1px]"
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </>
  );
}