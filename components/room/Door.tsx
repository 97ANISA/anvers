"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Glow from "@/components/ui/Glow";

export default function Door() {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={{
        rotate: -1,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="absolute bottom-44 right-10 cursor-pointer"
    >
      {/* Glow */}
      <Glow
        show={hover}
        color="#D4A373"
      />

      {/* Door */}
      <div className="relative h-80 w-44 rounded-t-[60px] bg-[#B8865B] shadow-xl">

        {/* Door Frame */}
        <div className="absolute inset-3 rounded-t-[50px] border-2 border-[#9C6B47]" />

        {/* Handle */}
        <motion.div
          animate={{
            scale: hover ? 1.2 : 1,
          }}
          className="absolute right-5 top-1/2 h-4 w-4 rounded-full bg-yellow-300"
        />

      </div>
    </motion.div>
  );
}