"use client";

import { motion } from "framer-motion";

interface ContinueButtonProps {
  text: string;
  onClick: () => void;
}

export default function ContinueButton({
  text,
  onClick,
}: ContinueButtonProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 2.8,
        duration: .6,
      }}
      className="mt-24 flex flex-col items-center"
    >
      {/* Top Divider */}
      <motion.div
        whileHover={{
          scaleX: 1.15,
        }}
        className="mb-6 h-px w-64 origin-center bg-[#D7B179]/35"
      />

      <motion.button
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: .98,
        }}
        transition={{
          duration: .25,
        }}
        onClick={onClick}
        className="
          group
          flex
          items-center
          gap-5
          uppercase
          tracking-[0.55em]
          text-[#A77A43]
        "
      >
        <span>{text}</span>

        <motion.span
          animate={{
            x: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          →
        </motion.span>
      </motion.button>

      {/* Bottom Divider */}
      <motion.div
        whileHover={{
          scaleX: 1.15,
        }}
        className="mt-6 h-px w-64 origin-center bg-[#D7B179]/35"
      />
    </motion.div>
  );
}