"use client";

import { useEffect, useState } from "react";

export function useParallax() {
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const x = (event.clientX - window.innerWidth / 2) / 40;
      const y = (event.clientY - window.innerHeight / 2) / 40;

      setOffset({
        x,
        y,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return offset;
}