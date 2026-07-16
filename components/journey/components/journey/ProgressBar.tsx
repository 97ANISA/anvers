"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({
  current,
  total,
}: ProgressBarProps) {
  return (
    <div className="mt-20 flex items-center gap-3">

      {Array.from({
        length: total,
      }).map((_, index) => (

        <motion.div
          key={index}
          animate={{
            width:
              index === current
                ? 44
                : 8,

            opacity:
              index <= current
                ? 1
                : .25,
          }}
          transition={{
            duration: .35,
          }}
          className={`
            h-2
            rounded-full
            ${
              index <= current
                ? "bg-[#D7B179]"
                : "bg-[#DDD2C4]"
            }
          `}
        />

      ))}

    </div>
  );
}