import { useState } from "react";

export function useCamera() {
  const [zoom, setZoom] = useState(1);

  const [x, setX] = useState(0);

  const [y, setY] = useState(0);

  function focus(targetX: number, targetY: number) {
    setZoom(1.5);

    setX(targetX);

    setY(targetY);
  }

  function reset() {
    setZoom(1);

    setX(0);

    setY(0);
  }

  return {
    zoom,
    x,
    y,
    focus,
    reset,
  };
}