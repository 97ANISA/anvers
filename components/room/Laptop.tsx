"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Tooltip from "@/components/ui/Tooltip";
import Glow from "@/components/ui/Glow";

interface LaptopProps {
  onOpen?: () => void;
}

export default function Laptop({ onOpen }: LaptopProps) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={{
        scale: 1.08,
        rotate: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onOpen}
      className="absolute left-16 top-5 cursor-pointer"
    >
      {/* Tooltip */}
      <Tooltip
        show={hover}
        title="Workspace"
        description="Semua project dan eksperimenku ada di sini."
      />
      <Glow
  show={hover}
  color="#60A5FA"
/>
      {/* Screen */}
      <div className="relative h-12 w-20 rounded-md bg-neutral-800 shadow-xl overflow-hidden">

        <motion.div
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="m-1 h-10 rounded bg-gradient-to-br from-sky-200 via-sky-300 to-sky-500"
        />

      </div>

      {/* Keyboard */}
      <div className="mx-auto h-2 w-24 rounded-b-md bg-neutral-700" />
    </motion.div>
  );
}