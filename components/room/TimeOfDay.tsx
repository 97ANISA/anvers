"use client";

import { motion } from "framer-motion";

export default function TimeOfDay() {
  const hour = new Date().getHours();

  const isDay = hour >= 6 && hour < 18;

  return (
    <>
      {/* Sky */}
      <motion.div
        animate={{
          backgroundColor: isDay ? "#bfe8ff" : "#0f172a",
        }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      />

      {/* Sun / Moon */}
      <motion.div
        animate={{
          backgroundColor: isDay ? "#fde68a" : "#f8fafc",
        }}
        transition={{ duration: 1 }}
        className="absolute right-8 top-8 h-12 w-12 rounded-full shadow-lg"
      />

      {/* Stars */}
      {!isDay && (
        <>
          <div className="absolute left-8 top-8 h-1 w-1 rounded-full bg-white" />
          <div className="absolute left-28 top-20 h-1 w-1 rounded-full bg-white" />
          <div className="absolute right-20 top-32 h-1 w-1 rounded-full bg-white" />
          <div className="absolute right-40 top-12 h-1 w-1 rounded-full bg-white" />
        </>
      )}
    </>
  );
}