"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title?: string;
  english: string;
  indonesian?: string;
}

export default function JourneyContent({
  eyebrow,
  title,
  english,
  indonesian,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -40,
      }}
      transition={{
        duration: 0.6,
      }}
      className="flex flex-1 flex-col items-center justify-center text-center"
    >
      <p className="tracking-[0.45em] uppercase text-[#B98A47]">
        {eyebrow}
      </p>

      {title && (
        <>
          <h1 className="mt-6 text-7xl font-light text-[#2C2722]">
            {title}
          </h1>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-20 bg-[#D8B37B]" />
            <div className="h-2 w-2 rounded-full bg-[#D8B37B]" />
            <div className="h-px w-20 bg-[#D8B37B]" />
          </div>
        </>
      )}

      <p className="mt-20 max-w-3xl text-[42px] font-light italic leading-[1.5] text-[#2C2722]">
        {english}
      </p>

      {indonesian && (
        <p className="mt-12 max-w-xl text-lg leading-9 text-[#72685A]">
          {indonesian}
        </p>
      )}
    </motion.div>
  );
}