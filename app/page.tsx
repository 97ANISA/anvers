"use client";

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
  );
}