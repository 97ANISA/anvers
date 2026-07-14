"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import HomeRoom from "./HomeRoom";
import Workspace from "./Workspace";

export default function World() {
  const [room, setRoom] = useState("home");

  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={room}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.6 }}
      >
        {room === "home" && (
          <HomeRoom goWorkspace={() => setRoom("workspace")} />
        )}

        {room === "workspace" && (
          <Workspace goHome={() => setRoom("home")} />
        )}
      </motion.div>

    </AnimatePresence>
  );
}