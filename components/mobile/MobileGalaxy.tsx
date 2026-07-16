"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import MobilePlanet from "./MobilePlanet";
import MobileOrbit from "./MobileOrbit";

export default function MobileGalaxy() {
  const [selectedPlanet, setSelectedPlanet] = useState("");

  const stars = useMemo(
    () =>
      Array.from({ length: 200 }, () => ({
        size: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      })),
    []
  );

  return (
    <main className="relative h-screen overflow-hidden bg-[#020617]">

      {/* ================= NEBULA ================= */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[140px]" />

      <div className="absolute left-10 top-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-20 right-0 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[140px]" />

      {/* ================= STARS ================= */}

      {stars.map((star, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
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

      {/* ================= SUN ================= */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: 360,
        }}
        transition={{
          rotate: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
          },
        }}
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 shadow-[0_0_90px_35px_rgba(250,204,21,.55)]"
      />

      {/* ================= ORBITS ================= */}

      <MobileOrbit radius={90} />
      <MobileOrbit radius={140} />
      <MobileOrbit radius={190} />
      <MobileOrbit radius={240} />

      {/* ================= PLANETS ================= */}

      <MobilePlanet
        radius={90}
        angle={0}
        color="#F3D5B5"
        title="About"
        selected={selectedPlanet === "about"}
        onSelect={() => setSelectedPlanet("about")}
      />

      <MobilePlanet
        radius={140}
        angle={90}
        color="#60A5FA"
        title="Science"
        selected={selectedPlanet === "science"}
        onSelect={() => setSelectedPlanet("science")}
      />

      <MobilePlanet
        radius={190}
        angle={180}
        color="#38BDF8"
        title="Ocean"
        selected={selectedPlanet === "ocean"}
        onSelect={() => setSelectedPlanet("ocean")}
      />

      <MobilePlanet
        radius={240}
        angle={270}
        color="#F472B6"
        title="Memories"
        selected={selectedPlanet === "memories"}
        onSelect={() => setSelectedPlanet("memories")}
      />

      {/* ================= INFO CARD ================= */}

      {selectedPlanet && (
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="absolute bottom-8 left-5 right-5 rounded-3xl bg-white/10 p-5 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-bold capitalize text-white">
            {selectedPlanet}
          </h2>

          <p className="mt-2 text-sm text-white/60">
            Explore this world and discover everything inside Anvers.
          </p>

          <motion.button
            whileTap={{
              scale: 0.96,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="mt-5 w-full rounded-2xl bg-white py-3 font-semibold text-slate-900"
          >
            Explore →
          </motion.button>
        </motion.div>
      )}
    </main>
  );
}