"use client";

import { motion } from "framer-motion";

interface Props {
  radius: number;
  angle: number;
  color: string;
  title: string;

  selected: boolean;
  onSelect: () => void;
}

export default function MobilePlanet({
  radius,
  angle,
  color,
  title,
  selected,
  onSelect,
}: Props) {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute left-1/2 top-1/2"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      }}
    >
      <motion.div
        onClick={onSelect}
        whileTap={{
          scale: 1.15,
        }}
        whileHover={{
          scale: 1.08,
        }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          y: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute cursor-pointer"
        style={{
          left: "50%",
          top: 0,
          transform: `translate(-50%,0) rotate(${angle}deg)`,
        }}
      >
        {/* Glow */}
        <motion.div
          animate={{
            opacity: selected ? 0.9 : 0.45,
            scale: selected ? 1.35 : 1,
          }}
          transition={{
            duration: 0.35,
          }}
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background: color,
          }}
        />

        {/* Planet */}
        <motion.div
          animate={{
            scale: selected ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className="relative h-14 w-14 overflow-hidden rounded-full shadow-2xl"
          style={{
            background: `radial-gradient(circle at 30% 30%, #ffffff, ${color})`,
            boxShadow: selected
              ? `0 0 45px ${color}`
              : `0 0 20px ${color}`,
          }}
        >
          {/* Highlight */}
          <div className="absolute left-2 top-2 h-3 w-3 rounded-full bg-white/80 blur-[2px]" />

          {/* Texture */}
          <div className="absolute left-3 top-6 h-2 w-6 rounded-full bg-white/10" />

          <div className="absolute bottom-3 right-2 h-2 w-4 rounded-full bg-black/10" />
        </motion.div>

        {/* Label */}
        <motion.div
          animate={{
            opacity: selected ? 1 : 0.8,
            y: selected ? -2 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="mt-2"
        >
          <p className="text-center text-xs font-medium text-white">
            {title}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}