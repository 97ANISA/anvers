"use client";

import { AnimatePresence, motion } from "framer-motion";

interface TooltipProps {
  show: boolean;
  title: string;
  description: string;
}

export default function Tooltip({
  show,
  title,
  description,
}: TooltipProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 10,
          }}
          transition={{
            duration: 0.2,
          }}
          className="absolute -top-24 left-1/2 z-50 w-52 -translate-x-1/2 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur"
        >
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}