"use client";

import { motion } from "framer-motion";
import Laptop from "./Laptop";

interface DeskProps {
  onOpenWorkspace: () => void;
}

export default function Desk({
  onOpenWorkspace,
}: DeskProps) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      className="absolute bottom-44 left-20"
    >
      {/* TABLE */}
      <div className="relative h-36 w-56 rounded-2xl bg-[#B07D57] shadow-xl">

        {/* Table Top */}
        <div className="absolute top-0 h-5 w-full rounded-t-2xl bg-[#C8956A]" />

        {/* Laptop */}
        <Laptop onOpen={onOpenWorkspace} />

        {/* Coffee */}
        <motion.div
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-5 top-5"
        >
          <div className="h-7 w-7 rounded-full border-4 border-white bg-[#8B5E3C]" />

          <div className="absolute -right-[5px] top-2 h-3 w-2 rounded-r-full border-2 border-white" />
        </motion.div>

        {/* Notebook */}
        <div className="absolute bottom-5 left-5 h-10 w-16 rounded bg-[#F8EBCB]" />

      </div>
    </motion.div>
  );
}