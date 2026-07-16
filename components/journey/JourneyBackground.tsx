"use client";

import { motion } from "framer-motion";
import FloatingDust from "./FloatingDust";

interface JourneyBackgroundProps {
  children: React.ReactNode;
}

export default function JourneyBackground({
  children,
}: JourneyBackgroundProps) {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#FBF6EE]"
      style={{
        perspective: "2200px",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF8] via-[#FBF3E5] to-[#F3E4CE]" />

      {/* Sun Glow */}
      <motion.div
        animate={{
          x: [-40, 30, -40],
          y: [-20, 20, -20],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-60 -top-60 h-[900px] w-[900px] rounded-full bg-[#FFD88A]/35 blur-[200px]"
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-[650px] w-[650px] rounded-full bg-white blur-[180px]"
      />

      {/* Floating Dust */}
      <FloatingDust />

      {/* Decorative Sparkles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.15, 0.9, 0.15],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className="absolute rounded-full bg-[#FFF6D5]"
          style={{
            width: 2,
            height: 2,
            left: `${8 + i * 7}%`,
            top: `${15 + (i % 5) * 15}%`,
          }}
        />
      ))}

      {/* Paper Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#000 0.7px, transparent 0.7px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 60%, rgba(0,0,0,.08) 100%)",
        }}
      />

      {/* Decorative */}
      <div className="absolute left-24 top-32 h-2 w-2 rounded-full bg-[#D7B179]/40" />
      <div className="absolute right-32 top-48 h-3 w-3 rounded-full bg-[#D7B179]/30" />
      <div className="absolute bottom-20 left-1/3 h-2 w-2 rounded-full bg-[#D7B179]/40" />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen flex-col">
        {children}
      </div>
    </main>
  );
}