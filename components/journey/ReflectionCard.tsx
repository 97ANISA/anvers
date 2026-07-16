"use client";

import { motion } from "framer-motion";

interface ReflectionCardProps {
  english: string;
  indonesian: string;
}

export default function ReflectionCard({
  english,
  indonesian,
}: ReflectionCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <p className="text-2xl italic leading-10 text-white">
        {english}
      </p>

      <p className="mt-6 text-white/50">
        {indonesian}
      </p>
    </motion.div>
  );
}