"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HUD() {
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      const hour = now.getHours();

      if (hour >= 6 && hour < 12) {
        setGreeting("Morning ☀️");
      } else if (hour >= 12 && hour < 18) {
        setGreeting("Afternoon 🌤");
      } else if (hour >= 18 && hour < 22) {
        setGreeting("Evening 🌙");
      } else {
        setGreeting("Night 🌌");
      }
    };

    updateClock();

    const interval = setInterval(updateClock, 1000 * 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute left-8 top-8 rounded-2xl bg-white/80 px-5 py-3 shadow-lg backdrop-blur"
      >
        <p className="text-sm text-gray-500">
          Location
        </p>

        <h2 className="font-semibold">
          🏡 Home
        </h2>
      </motion.div>

      {/* Top Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute right-8 top-8 rounded-2xl bg-white/80 px-5 py-3 text-right shadow-lg backdrop-blur"
      >
        <h2 className="font-semibold">
          {time || "--:--"}
        </h2>

        <p className="text-sm text-gray-500">
          {greeting}
        </p>
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-8 left-8 rounded-2xl bg-white/80 px-5 py-3 shadow-lg backdrop-blur"
      >
        <p className="text-sm text-gray-500">
          Companion
        </p>

        <h2 className="font-semibold">
          🐈 Juta is exploring...
        </h2>
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-8 right-8 rounded-2xl bg-white/80 px-5 py-3 text-right shadow-lg backdrop-blur"
      >
        <p className="text-sm text-gray-500">
          Birthday
        </p>

        <h2 className="font-semibold">
          17 July 1997
        </h2>
      </motion.div>
    </>
  );
}