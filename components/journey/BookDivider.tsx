"use client";

import { motion } from "framer-motion";

export default function BookDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="my-10 flex items-center justify-center"
    >
      <div className="h-px w-16 bg-[#D7B179]/50" />

      <div className="mx-4 text-[#D7B179] text-xl">
        ✦
      </div>

      <div className="h-px w-16 bg-[#D7B179]/50" />
    </motion.div>
  );
}