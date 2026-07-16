"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
      className="text-center"
    >
      {/* Title */}
      <motion.h1
        initial={{
          letterSpacing: "0.8em",
          opacity: 0,
        }}
        animate={{
          letterSpacing: "0.45em",
          opacity: 1,
        }}
        transition={{
          duration: 2.5,
        }}
        className="text-7xl font-light text-white"
      >
        ANVERS
      </motion.h1>

      {/* English */}
      <motion.p
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2,
          duration: 1.2,
        }}
        className="mt-8 text-lg italic text-white/70"
      >
        The Universe Has Always Been Telling Stories.
      </motion.p>

      {/* Indonesian */}
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2.5,
          duration: 1.2,
        }}
        className="mt-2 text-sm text-white/40"
      >
        Semesta selalu bercerita.
        <br />
        Hanya saja, kita yang perlahan lupa cara mendengarkannya.
      </motion.p>

      {/* Signature */}
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 3,
          duration: 1,
        }}
        className="mt-12 text-xs tracking-[0.3em] text-white/25"
      >
        by Anisa Rahma
      </motion.p>
    </motion.div>
  );
}