"use client";

import { motion } from "framer-motion";

interface OrbitPlanetProps {
  angle: number;
  radius: number;
  duration?: number;
  children: React.ReactNode;
}

export default function OrbitPlanet({
  angle,
  radius,
  duration = 25,
  children,
}: OrbitPlanetProps) {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute left-1/2 top-1/2"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `rotate(${angle}deg) translateY(-${radius}px)`,
          transformOrigin: "center",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}