"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  size: number;
  left: string;
  top: string;
  duration: number;
};

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 220 }, () => ({
      size: Math.random() * 3 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 5,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top,
          }}
        />
      ))}
    </div>
  );
}