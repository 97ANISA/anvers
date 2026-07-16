"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

export default function Typewriter({
  text,
  speed = 30,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");

    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));

      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="whitespace-pre-line">
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
}