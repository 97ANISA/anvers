"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface OrbitProps {
  radius: number;
  duration: number;
  delay?: number;
  children: ReactNode;
}

export default function Orbit({
  radius,
  duration,
  delay = 0,
  children,
}: OrbitProps) {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      className="pointer-events-none absolute left-1/2 top-1/2"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      }}
    >
      {/* Orbit Line */}
      <div className="absolute inset-0 rounded-full border border-white/5" />

      {/* Planet */}
      <div className="pointer-events-auto absolute left-1/2 top-0 -translate-x-1/2">
        {children}
      </div>
    </motion.div>
  );
}