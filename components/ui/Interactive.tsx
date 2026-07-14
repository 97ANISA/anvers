"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import Glow from "./Glow";
import Tooltip from "./Tooltip";

interface InteractiveProps {
  children: ReactNode;
  title: string;
  description: string;
  glowColor?: string;
  onClick?: () => void;
}

export default function Interactive({
  children,
  title,
  description,
  glowColor = "#60A5FA",
  onClick,
}: InteractiveProps) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className="relative cursor-pointer"
    >
      <Tooltip
        show={hover}
        title={title}
        description={description}
      />

      <Glow
        show={hover}
        color={glowColor}
      />

      {children}
    </motion.div>
  );
}