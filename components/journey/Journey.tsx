"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { PlanetData } from "@/data/planets";
import { journeys } from "@/data/journeys";

import Typewriter from "./Typewriter";
import DelayedFade from "./DelayedFade";
import FloatingDust from "./FloatingDust";

interface JourneyProps {
  planet: PlanetData;
  onBack: () => void;
}

export default function Journey({
  planet,
  onBack,
}: JourneyProps) {
  const journey =
    journeys[planet.id as keyof typeof journeys];

  const [currentPage, setCurrentPage] = useState(0);

  const page = journey.pages[currentPage];

  const lastPage =
    currentPage === journey.pages.length - 1;

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#FBF6EE]"
      style={{
        perspective: "2200px",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF8] via-[#FBF3E5] to-[#F3E4CE]" />

      {/* Sun Glow */}
      <motion.div
        animate={{
          x: [-40, 30, -40],
          y: [-20, 15, -20],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-60 -top-60 h-[900px] w-[900px] rounded-full bg-[#FFD88A]/35 blur-[190px]"
      />

      {/* Soft Glow */}
      <motion.div
        animate={{
          opacity: [0.25, 0.5, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-white blur-[170px]"
      />

      {/* Floating Dust */}
      <FloatingDust />

      {/* Paper Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#000 0.7px, transparent 0.7px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Decorative Circles */}
      <div className="absolute left-24 top-32 h-2 w-2 rounded-full bg-[#D7B179]/40" />
      <div className="absolute right-40 top-56 h-3 w-3 rounded-full bg-[#D7B179]/20" />
      <div className="absolute left-1/3 bottom-24 h-2 w-2 rounded-full bg-[#D7B179]/30" />

      {/* Main */}
      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Header */}
        {page.type !== "opening" && (
          <motion.header
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .5,
            }}
            className="flex items-center justify-between px-16 pt-12"
          >
            <p className="text-xs uppercase tracking-[0.45em] text-[#B58B52]">
              {page.eyebrow}
            </p>

            <p className="text-sm tracking-[0.3em] text-[#9B8464]">
              {currentPage + 1} / {journey.pages.length}
            </p>
          </motion.header>
        )}

        <AnimatePresence mode="wait">

          <motion.section
  key={page.id}
  style={{
    transformStyle: "preserve-3d",
    transformOrigin: "left center",
  }}
            animate={{
              opacity: 1,
              rotateY: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              rotateY: -18,
              x: -120,
            }}
            transition={{
              duration: .9,
              ease: [0.22,1,0.36,1],
            }}
            className="
              mx-auto
              flex
              min-h-screen
              w-full
              max-w-5xl
              flex-col
              items-center
              justify-center
              px-16
              text-center
            "
          >
                        {/* Mercury Symbol */}
            {page.type === "opening" && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: [0.45, 1, 0.45],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-20 text-[150px] font-light text-[#D6B27C]"
              >
                ☿
              </motion.div>
            )}

            {/* Eyebrow (Opening Only) */}
            {page.type === "opening" && (
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: .5,
                }}
                className="mb-8 uppercase tracking-[0.6em] text-[#B58B52]"
              >
                Journey Begins
              </motion.p>
            )}

            {/* Title */}
            {page.title && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: .7,
                }}
                className="mb-14"
              >
                <h1 className="text-5xl font-light tracking-tight text-[#2F2923] md:text-6xl">
                  {page.title}
                </h1>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="h-px w-20 bg-[#D7B179]/60" />

                  <motion.div
                    animate={{
                      scale: [1, 1.35, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="h-2 w-2 rounded-full bg-[#D7B179]"
                  />

                  <div className="h-px w-20 bg-[#D7B179]/60" />
                </div>
              </motion.div>
            )}

            {/* English */}
            <div className="max-w-3xl whitespace-pre-line text-[42px] font-light italic leading-[1.45] text-[#2F2923] md:text-[52px]">
              <Typewriter
                text={page.english}
                speed={28}
              />
            </div>

            {/* Indonesian */}
            {page.indonesian && (
              <DelayedFade>
                <p
                  className="
                    mt-14
                    max-w-2xl
                    whitespace-pre-line
                    text-xl
                    leading-[2]
                    text-[#6E6358]
                  "
                >
                  {page.indonesian}
                </p>
              </DelayedFade>
            )}

            {/* Decorative Divider */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: .5,
              }}
              transition={{
                delay: 2.5,
              }}
              className="mt-24 flex items-center gap-5"
            >
              <div className="h-px w-24 bg-[#D7B179]/40" />

              <div className="h-2 w-2 rounded-full bg-[#D7B179]" />

              <div className="h-px w-24 bg-[#D7B179]/40" />
            </motion.div>
                        {/* Continue */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 3,
                duration: 0.6,
              }}
              className="mt-20 flex flex-col items-center"
            >
              <div className="mb-5 h-px w-56 bg-[#D7B179]/30" />

              <motion.button
                whileHover={{
                  scale: 1.03,
                  letterSpacing: "0.45em",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                }}
                onClick={() => {
                  if (lastPage) {
                    onBack();
                  } else {
                    setCurrentPage((prev) => prev + 1);
                  }
                }}
                className="group flex items-center gap-5 uppercase tracking-[0.35em] text-[#B58B52]"
              >
                <span>{page.button}</span>

                <motion.span
                  animate={{
                    x: [0, 8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </motion.button>

              <div className="mt-5 h-px w-56 bg-[#D7B179]/30" />
            </motion.div>

            {/* Progress */}
            {page.type !== "opening" && (
              <div className="mt-16 flex items-center gap-3">
                {journey.pages.map((item, index) => (
                  <motion.div
                    key={item.id}
                    animate={{
                      width: index === currentPage ? 34 : 8,
                      opacity: index <= currentPage ? 1 : 0.25,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className={`h-2 rounded-full ${
                      index <= currentPage
                        ? "bg-[#D7B179]"
                        : "bg-[#DDD2C4]"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.section>
        </AnimatePresence>

        {/* Back */}
        {page.type !== "opening" && (
          <motion.button
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: .4,
            }}
            whileHover={{
              x: -4,
            }}
            onClick={onBack}
            className="absolute left-10 top-10 text-sm uppercase tracking-[0.3em] text-[#A37A47]"
          >
            ← Galaxy
          </motion.button>
        )}
      </div>

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,.06) 100%)",
        }}
      />
    </main>
  );
}