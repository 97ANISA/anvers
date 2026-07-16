"use client";

import { useState } from "react";

import Stars from "./Stars";
import Nebula from "./Nebula";
import Intro from "./Intro";
import BeginButton from "./BeginButton";

interface OpeningProps {
  onBegin: () => void;
}

export default function Opening({
  onBegin,
}: OpeningProps) {
  const [loading, setLoading] = useState(false);

  const handleBegin = () => {
    setLoading(true);

    setTimeout(() => {
      onBegin();
    }, 1200);
  };

  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-[#020617]">
      {/* Background */}
      <Stars />
      <Nebula />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-1000 ${
          loading
            ? "scale-110 opacity-0 blur-md"
            : "scale-100 opacity-100"
        }`}
      >
        <Intro />

        <BeginButton
          onClick={handleBegin}
        />
      </div>

      {/* Fade to Black */}
      <div
        className={`pointer-events-none absolute inset-0 bg-black transition-opacity duration-1000 ${
          loading ? "opacity-100" : "opacity-0"
        }`}
      />
    </main>
  );
}