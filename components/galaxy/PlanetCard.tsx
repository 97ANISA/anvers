"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PlanetData } from "@/data/planets";

interface PlanetCardProps {
  planet: PlanetData | null;
  onClose: () => void;
  onEnter: () => void;
}

export default function PlanetCard({
  planet,
  onClose,
  onEnter,
}: PlanetCardProps) {
  return (
    <AnimatePresence>
      {planet && (
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          transition={{
            duration: 0.35,
          }}
          className="absolute bottom-10 left-1/2 z-50 w-[360px] -translate-x-1/2 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Planet
          </p>

          <h2 className="mt-3 text-3xl font-light text-white">
            {planet.title}
          </h2>

          <p className="mt-2 italic text-white/60">
            {planet.subtitle}
          </p>

          <div className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white">
            {planet.theme}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={onClose}
              className="rounded-full border border-white/20 px-5 py-2 text-white transition hover:bg-white/10"
            >
              Close
            </button>

            <button
              onClick={onEnter}
              className="rounded-full bg-white px-6 py-2 font-medium text-black transition hover:scale-105"
            >
              Enter →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}