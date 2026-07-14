"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Room from "@/components/room/Room";
import GalaxyScreen from "@/components/screens/GalaxyScreen";

type Screen = "home" | "workspace";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");

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
  );
}