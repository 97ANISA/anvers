"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Background from "./Background";
import Sun from "./Sun";
import Orbit from "./Orbit";
import Planet from "./Planet";
import PlanetCard from "./PlanetCard";

import { planets, PlanetData } from "@/data/planets";

interface GalaxyProps {
  onEnter: (planet: PlanetData) => void;
}

export default function Galaxy({
  onEnter,
}: GalaxyProps) {
  const [selectedPlanet, setSelectedPlanet] =
    useState<PlanetData | null>(null);

  const [zooming, setZooming] =
    useState(false);

  const handleEnter = () => {
    if (!selectedPlanet) return;

    setZooming(true);

    setTimeout(() => {
      onEnter(selectedPlanet);
    }, 800);
  };

  return (
    <main className="relative h-screen overflow-hidden bg-[#020617]">
      <motion.div
        animate={{
          scale: zooming ? 2.2 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="h-full w-full"
      >
        {/* Background */}
        <Background />

        {/* Sun */}
        <Sun />

        {/* Planets */}
        {planets.map((planet) => (
          <motion.div
            key={planet.id}
            animate={{
              opacity:
                zooming && selectedPlanet?.id !== planet.id
                  ? 0
                  : 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Orbit
              radius={planet.orbit}
              duration={planet.speed}
            >
              <Planet
  planet={planet}
  selected={
    zooming &&
    selectedPlanet?.id === planet.id
  }
  onClick={() => setSelectedPlanet(planet)}
/>
            </Orbit>
          </motion.div>
        ))}

        {/* Planet Card */}
        <PlanetCard
          planet={selectedPlanet}
          onClose={() => setSelectedPlanet(null)}
          onEnter={handleEnter}
        />
      </motion.div>
    </main>
  );
}