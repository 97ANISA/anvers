"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface OrbitProps {
  radius: number;
  duration: number;
<<<<<<< HEAD
=======
  delay?: number;
>>>>>>> d11ec3485fa6373bd609cc1bb87f215e5781e1f4
  children: ReactNode;
}

export default function Orbit({
  radius,
  duration,
<<<<<<< HEAD
=======
  delay = 0,
>>>>>>> d11ec3485fa6373bd609cc1bb87f215e5781e1f4
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
<<<<<<< HEAD
      }}
      className="pointer-events-none absolute left-1/2 top-1/2"
=======
        delay,
      }}
      className="absolute left-1/2 top-1/2"
>>>>>>> d11ec3485fa6373bd609cc1bb87f215e5781e1f4
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      }}
    >
<<<<<<< HEAD
      {/* Orbit */}
      <div className="absolute inset-0 rounded-full border border-white/5" />

      {/* Planet */}
      <div className="pointer-events-auto absolute left-1/2 top-0 -translate-x-1/2">
=======
      {/* Orbit Line */}
      <div
        className="absolute inset-0 rounded-full border border-white/5"
      />

      {/* Planet */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2"
      >
>>>>>>> d11ec3485fa6373bd609cc1bb87f215e5781e1f4
        {children}
      </div>
    </motion.div>
  );
}