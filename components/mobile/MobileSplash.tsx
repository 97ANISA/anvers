"use client";

import { motion } from "framer-motion";

interface Props {
  onStart: () => void;
}

export default function MobileSplash({
  onStart,
}: Props) {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-[#020617]">

      {/* Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[140px]" />

      {/* Logo */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="text-center"
      >
        <motion.h1
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="text-6xl font-bold tracking-[0.15em] text-white"
        >
          ANVERS
        </motion.h1>

        <p className="mt-5 text-white/60">
          Explore your universe.
        </p>

        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          whileHover={{
            scale: 1.03,
          }}
          onClick={onStart}
          className="mt-14 rounded-full bg-white px-8 py-4 font-semibold text-slate-900"
        >
          Enter
        </motion.button>
      </motion.div>

    </main>
  );
}