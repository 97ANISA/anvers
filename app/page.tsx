"use client";

<<<<<<< HEAD
import { useState } from "react";

import Opening from "@/components/opening/Opening";
import Galaxy from "@/components/galaxy/Galaxy";
import Journey from "@/components/journey/Journey";
import ScreenFade from "@/components/ui/ScreenFade";

import { PlanetData } from "@/data/planets";

type Screen = "opening" | "galaxy" | "journey";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("opening");

  const [selectedPlanet, setSelectedPlanet] =
    useState<PlanetData | null>(null);

  const [transitioning, setTransitioning] =
    useState(false);

  const handleEnterJourney = (planet: PlanetData) => {
    setTransitioning(true);

    setTimeout(() => {
      setSelectedPlanet(planet);
      setScreen("journey");
      setTransitioning(false);
    }, 800);
  };

  const handleBackToGalaxy = () => {
    setTransitioning(true);

    setTimeout(() => {
      setScreen("galaxy");
      setSelectedPlanet(null);
      setTransitioning(false);
    }, 800);
  };

  return (
    <>
      <ScreenFade show={transitioning} />

      {screen === "opening" && (
        <Opening
          onBegin={() => setScreen("galaxy")}
        />
      )}

      {screen === "galaxy" && (
        <Galaxy
          onEnter={handleEnterJourney}
        />
      )}

      {screen === "journey" && selectedPlanet && (
        <Journey
          planet={selectedPlanet}
          onBack={handleBackToGalaxy}
        />
      )}
    </>
=======
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Room from "@/components/room/Room";
import GalaxyScreen from "@/components/screens/GalaxyScreen";
import MobileHome from "@/components/mobile/MobileHome";

type Screen = "home" | "workspace";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  // ================= MOBILE =================
  if (isMobile) {
    return <MobileHome />;
  }

  // ================= DESKTOP =================
  return (
    <AnimatePresence mode="wait">
      {screen === "home" ? (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Room
            onOpenWorkspace={() => setScreen("workspace")}
          />
        </motion.div>
      ) : (
        <motion.div
          key="workspace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <GalaxyScreen
            onBack={() => setScreen("home")}
          />
        </motion.div>
      )}
    </AnimatePresence>
>>>>>>> d11ec3485fa6373bd609cc1bb87f215e5781e1f4
  );
}