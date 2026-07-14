"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import ShootingStar from "@/components/galaxy/ShootingStar";

interface GalaxyScreenProps {
  onBack: () => void;
}

const planets = [
  {
    id: "about",
    name: "About Me",
    subtitle: "Who is Nisa?",
    color: "#F3D5B5",
    size: 110,
    x: "18%",
    y: "28%",
  },
  {
    id: "science",
    name: "Science",
    subtitle: "Curiosity",
    color: "#60A5FA",
    size: 140,
    x: "70%",
    y: "18%",
  },
  {
    id: "ocean",
    name: "Ocean",
    subtitle: "Deep Blue",
    color: "#38BDF8",
    size: 130,
    x: "28%",
    y: "68%",
  },
  {
    id: "memories",
    name: "Memories",
    subtitle: "Life Journey",
    color: "#F472B6",
    size: 120,
    x: "76%",
    y: "65%",
  },
];

export default function GalaxyScreen({
  onBack,
}: GalaxyScreenProps) {
  const [selectedPlanet, setSelectedPlanet] = useState<string>("");

  // Supaya posisi bintang tidak berubah setiap render
  const stars = useMemo(
    () =>
      Array.from({ length: 150 }, () => ({
        size: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      })),
    []
  );

  return (
    <main className="relative h-screen overflow-hidden bg-[#020617]">

      {/* Nebula */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[180px]" />

      <div className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-[10%] bottom-[10%] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[150px]" />

      {/* Shooting Stars */}
      <ShootingStar />
      <ShootingStar delay={4} top={260} />
      <ShootingStar delay={8} top={520} />

      {/* Stars */}
      {stars.map((star, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 2 + (index % 5),
            repeat: Infinity,
          }}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top,
          }}
        />
      ))}

      {/* Sun */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 shadow-[0_0_140px_60px_rgba(250,204,21,.45)]"
      />
            {/* ================= PLANETS ================= */}

      {planets.map((planet, index) => {
                const isSelected = selectedPlanet === planet.id;

        return (
          <motion.div
            key={planet.id}
            onClick={() => setSelectedPlanet(planet.id)}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              y: [0, -12, 0],
              scale: isSelected ? 1.8 : 1,
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              opacity: {
                delay: index * 0.2,
                duration: 0.8,
              },
              y: {
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 0.35,
              },
            }}
            className="absolute cursor-pointer"
            style={{
              left: planet.x,
              top: planet.y,
            }}
          >
            {/* Glow */}
            <motion.div
              animate={{
                scale: isSelected ? 1.35 : 1,
                opacity: isSelected ? 0.9 : 0.45,
              }}
              transition={{
                duration: 0.4,
              }}
              className="absolute inset-0 rounded-full blur-2xl"
              style={{
                background: planet.color,
              }}
            />

            {/* Planet */}
            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              className="relative overflow-hidden rounded-full shadow-2xl"
              style={{
                width: planet.size,
                height: planet.size,
                background: `radial-gradient(circle at 30% 30%, white, ${planet.color})`,
              }}
            >
              <div className="absolute left-5 top-5 h-5 w-5 rounded-full bg-white/70 blur-sm" />

              <div className="absolute left-6 top-10 h-4 w-14 rounded-full bg-white/10" />
              <div className="absolute right-5 bottom-7 h-3 w-10 rounded-full bg-black/10" />
              <div className="absolute left-10 bottom-12 h-5 w-8 rounded-full bg-black/10" />

              {(planet.id === "science" || planet.id === "ocean") && (
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
                />
              )}
            </motion.div>

            <motion.div
              animate={{
                opacity: isSelected ? 1 : 0.8,
                y: isSelected ? -4 : 0,
              }}
              className="mt-5 text-center"
            >
              <h2 className="text-xl font-semibold text-white">
                {planet.name}
              </h2>

              <p className="mt-1 text-sm text-white/60">
                {planet.subtitle}
              </p>
            </motion.div>
          </motion.div>
        );
      })}

      {/* TITLE */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="absolute left-12 top-10"
      >
        <p className="text-sm tracking-[0.4em] text-white/50">
          ANVERS
        </p>

        <h1 className="mt-3 text-6xl font-bold text-white">
          Galaxy
        </h1>

        <p className="mt-3 text-white/60">
          Explore my universe.
        </p>
      </motion.div>

      {/* Selected Planet */}
      {selectedPlanet && (
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className="absolute bottom-10 right-10 w-80 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Selected Planet
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white capitalize">
            {selectedPlanet}
          </h2>

          <button className="mt-6 w-full rounded-xl bg-white py-3 font-semibold text-slate-900">
            Explore →
          </button>
        </motion.div>
      )}

      {/* Back */}
      <button
        onClick={onBack}
        className="absolute right-10 top-10 rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-white backdrop-blur-xl"
      >
        ← Back Home
      </button>
    </main>
  );
}