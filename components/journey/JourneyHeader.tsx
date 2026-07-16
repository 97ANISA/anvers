"use client";

import { motion } from "framer-motion";
import { JourneyPage } from "@/types/Journey";

interface JourneyHeaderProps {
  page: JourneyPage;
  currentPage: number;
  totalPages: number;
}

export default function JourneyHeader({
  page,
  currentPage,
  totalPages,
}: JourneyHeaderProps) {
  if (page.type === "opening") return null;

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex items-center justify-between px-16 pt-12"
    >
      <div>
        <p className="text-[11px] uppercase tracking-[0.55em] text-[#B58B52]">
          {page.eyebrow}
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="h-px w-20 bg-[#D7B179]/30" />

        <p className="text-xs tracking-[0.35em] text-[#9B8464]">
          {currentPage + 1} / {totalPages}
        </p>
      </div>
    </motion.header>
  );
}