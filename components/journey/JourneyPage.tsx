"use client";

import { AnimatePresence, motion } from "framer-motion";

import { JourneyPage as JourneyPageType } from "@/types/Journey";

import Typewriter from "./Typewriter";
import DelayedFade from "./DelayedFade";
import PlanetSymbol from "./PlanetSymbol";
import BookDivider from "./BookDivider";

interface JourneyPageProps {
  page: JourneyPageType;
  planet: string;
}

export default function JourneyPage({
  page,
  planet,
}: JourneyPageProps) {
  return (
    <AnimatePresence mode="wait">

      <motion.section
        key={page.id}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "left center",
        }}
        initial={{
          opacity: 0,
          rotateY: 70,
          x: 180,
          scale: .95,
        }}
        animate={{
          opacity: 1,
          rotateY: 0,
          x: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          rotateY: -70,
          x: -180,
          scale: .95,
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

        {/* Planet */}
        {page.type === "opening" && (
          <PlanetSymbol
            planet={planet}
          />
        )}

        {/* Opening */}
        {page.type === "opening" && (
          <motion.p
            initial={{
              opacity:0,
            }}
            animate={{
              opacity:1,
            }}
            transition={{
              delay:.5,
            }}
            className="
              mb-10
              uppercase
              tracking-[0.65em]
              text-[#B58B52]
            "
          >
            Journey Begins
          </motion.p>
        )}

        {/* Title */}
        {page.title && (
          <>
            <motion.h1
              initial={{
                opacity:0,
                y:20,
              }}
              animate={{
                opacity:1,
                y:0,
              }}
              transition={{
                duration:.6,
              }}
              className="
                text-5xl
                font-light
                tracking-tight
                text-[#2F2923]
                md:text-6xl
              "
            >
              {page.title}
            </motion.h1>

            <BookDivider />
          </>
        )}

        {/* English */}
        <div
          className="
            mt-8
            max-w-3xl
            whitespace-pre-line
            text-[54px]
            font-light
            italic
            leading-[1.45]
            text-[#2F2923]
          "
        >
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
                text-2xl
                leading-[1.8]
                text-[#756958]
              "
            >
              {page.indonesian}
            </p>

          </DelayedFade>
        )}

      </motion.section>

    </AnimatePresence>
  );
}