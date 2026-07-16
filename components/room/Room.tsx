"use client";

import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

import Window from "./Window";
import Door from "./Door";
import Plant from "./Plant";
import Bed from "./Bed";
import Desk from "./Desk";
import Bookshelf from "./Bookshelf";
import Cat from "./Cat";
import Sunlight from "./Sunlight";
import Dust from "./Dust";

import HUD from "@/components/ui/HUD";
import Camera from "@/components/ui/Camera";

interface RoomProps {
  onOpenWorkspace: () => void;
}

export default function Room({
  onOpenWorkspace,
}: RoomProps) {
  const { x, y } = useParallax();

  // Nanti akan dipakai untuk animasi kamera
  const zoom = 1;
  const cameraX = 0;
  const cameraY = 0;

  return (
    <div className="flex h-screen items-center justify-center bg-[#DDD5C8]">
      <motion.div
        animate={{
          x,
          y,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
        }}
        className="relative h-[720px] w-[1200px] overflow-hidden rounded-[40px] bg-[#F7F1E7] shadow-2xl"
      >
        <Camera
          zoom={zoom}
          x={cameraX}
          y={cameraY}
        >
          {/* WALL */}
          <div className="absolute inset-0 bg-[#F7F1E7]" />

          {/* EFFECT */}
          <Sunlight />
          <Dust />

          {/* FURNITURE */}
          <Window />
          <Bookshelf />
          <Bed />

          <Desk
            onOpenWorkspace={onOpenWorkspace}
          />

          <Plant />
          <Cat />
          <Door />

          {/* FLOOR */}
          <div className="absolute bottom-0 h-52 w-full bg-[#C89D73]" />

          {/* CARPET */}
          <div className="absolute bottom-28 left-1/2 h-32 w-[520px] -translate-x-1/2 rounded-full bg-[#E6CFB2]" />

          {/* HUD */}
          <HUD />
        </Camera>
      </motion.div>
    </div>
  );
}