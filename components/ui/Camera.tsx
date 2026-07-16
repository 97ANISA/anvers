"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CameraProps {
  children: ReactNode;
  zoom?: number;
  x?: number;
  y?: number;
}

export default function Camera({
  children,
  zoom = 1,
  x = 0,
  y = 0,
}: CameraProps) {
  return (
    <motion.div
      animate={{
        scale: zoom,
        x,
        y,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="origin-center"
    >
      {children}
    </motion.div>
  );
}