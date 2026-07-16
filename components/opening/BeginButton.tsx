"use client";

import { motion } from "framer-motion";

interface Props {
  onClick: () => void;
}

export default function BeginButton({
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      className="mt-20 rounded-full border border-white/20 px-8 py-4 text-white transition hover:bg-white hover:text-black"
    >
      Begin the Journey →
    </motion.button>
  );
}