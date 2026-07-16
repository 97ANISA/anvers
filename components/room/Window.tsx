"use client";

import { motion } from "framer-motion";
import Cloud from "./Cloud";

export default function Window() {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      className="absolute left-1/2 top-12 -translate-x-1/2"
    >
      <div className="relative h-56 w-80 rounded-[30px] border-[10px] border-[#D5BEA3] bg-sky-200 shadow-xl overflow-hidden">

        {/* Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-sky-200 to-sky-300" />

        {/* Sun */}
        <motion.div
          animate={{
            y: [-2, 2, -2],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="absolute right-8 top-8 h-12 w-12 rounded-full bg-yellow-200"
        />

        {/* Window Lines */}
        <div className="absolute left-1/2 h-full w-2 -translate-x-1/2 bg-[#D5BEA3]" />

        <div className="absolute top-1/2 h-2 w-full -translate-y-1/2 bg-[#D5BEA3]" />

      </div>
      <Cloud />
    </motion.div>
    
  );
}