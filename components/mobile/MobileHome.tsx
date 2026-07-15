"use client";

import { useState } from "react";

import MobileSplash from "./MobileSplash";
import MobileGalaxy from "./MobileGalaxy";

export default function MobileHome() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <MobileSplash
        onStart={() => setEntered(true)}
      />
    );
  }

  return <MobileGalaxy />;
}