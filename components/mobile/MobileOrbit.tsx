"use client";

import { motion } from "framer-motion";

interface Props {
  radius: number;
}

export default function MobileOrbit({
  radius,
}: Props) {
  return (
    <motion.div
      animate={{
        opacity: [0.15, 0.28, 0.15],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute left-1/2 top-1/2 rounded-full border border-white/10"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      }}
    />
  );
}