"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Cat() {
  const [awake, setAwake] = useState(true);

  return (
    <motion.div
      animate={{
        x: [0, 20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={() => setAwake(!awake)}
      className="absolute bottom-52 left-[520px] cursor-pointer"
    >
      {/* Body */}
      <div className="relative h-16 w-20 rounded-full bg-[#D8B07A]">

        {/* Head */}
        <div className="absolute -top-7 left-9 h-12 w-12 rounded-full bg-[#D8B07A]">

          {/* Left Ear */}
          <div className="absolute -top-2 left-1 h-4 w-4 rotate-45 bg-[#D8B07A]" />

          {/* Right Ear */}
          <div className="absolute -top-2 right-1 h-4 w-4 rotate-45 bg-[#D8B07A]" />

          {/* Eyes */}
          <div className="absolute left-3 top-5 flex gap-3">
            {awake ? (
              <>
                <div className="h-1.5 w-1.5 rounded-full bg-black" />
                <div className="h-1.5 w-1.5 rounded-full bg-black" />
              </>
            ) : (
              <>
                <div className="h-[2px] w-2 bg-black rounded-full" />
                <div className="h-[2px] w-2 bg-black rounded-full" />
              </>
            )}
          </div>

          {/* Nose */}
          <div className="absolute left-1/2 top-8 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-pink-400" />
        </div>
      </div>
    </motion.div>
  );
}