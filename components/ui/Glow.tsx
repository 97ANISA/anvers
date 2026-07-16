"use client";

import { motion } from "framer-motion";

interface GlowProps {
  show: boolean;
  color?: string;
}

export default function Glow({
  show,
  color = "#60A5FA",
}: GlowProps) {
  return (
    <motion.div
      animate={{
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0.8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="absolute inset-0 rounded-2xl pointer-events-none"
      style={{
        boxShadow: `0 0 40px ${color}`,
      }}
    />
  );
}