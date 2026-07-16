"use client";

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
  const [transitioning, setTransitioning] = useState(false);

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
        <Opening onBegin={() => setScreen("galaxy")} />
      )}

      {screen === "galaxy" && (
        <Galaxy onEnter={handleEnterJourney} />
      )}

      {screen === "journey" && selectedPlanet && (
        <Journey
          planet={selectedPlanet}
          onBack={handleBackToGalaxy}
        />
      )}
    </>
  );
}