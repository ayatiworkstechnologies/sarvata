"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PlantHero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ================= Scroll Mappings ================= */
  const seedY = useTransform(scrollYProgress, [0, 0.25], [-120, 300]);
  const seedOpacity = useTransform(scrollYProgress, [0.15, 0.3], [1, 0]);

  const plantGrowth = useTransform(scrollYProgress, [0.25, 0.6], [0, 1]);
  const leafScale = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);
  const rootGrowth = useTransform(scrollYProgress, [0.55, 0.9], [0, 1]);

  const pollenOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 0.6]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-[#fdfcf8]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(132,204,22,0.08)_0%,transparent_55%)]" />

        <svg
          viewBox="0 0 200 430"
          className="h-[80vh] w-auto overflow-visible drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Stem Gradient */}
            <linearGradient id="stemGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#365314" />
              <stop offset="100%" stopColor="#65a30d" />
            </linearGradient>

            {/* Organic Soil Texture */}
            <filter id="soilOrganic">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="4"
              />
              <feDisplacementMap scale="6" />
            </filter>

            {/* Seed Glow */}
            <filter id="seedGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ================= SOIL ================= */}
          <g filter="url(#soilOrganic)">
            {/* Deep Soil */}
            <path
              d="M30 330 Q100 295 170 330 L170 430 L30 430 Z"
              fill="#dcc9a8"
            />
            {/* Upper Sand Ridge */}
            <path
              d="M40 325 Q100 305 160 325"
              stroke="#b89b74"
              strokeWidth="4"
              opacity="0.6"
            />
          </g>

          {/* ================= FALLING SEEDS ================= */}
          {[80, 100, 120].map((x, i) => (
            <motion.path
              key={i}
              d="M-2 -4 Q0 -6 2 -4 Q4 0 0 4 Q-4 0 -2 -4"
              fill="#5a2d0c"
              style={{
                x,
                y: seedY,
                opacity: seedOpacity,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          ))}

          {/* ================= SEEDS INSIDE SOIL ================= */}
          {[70, 90, 110, 130].map((x, i) => (
            <motion.ellipse
              key={i}
              cx={x}
              cy="322"
              rx="4"
              ry="7"
              fill="#5a2d0c"
              filter="url(#seedGlow)"
              style={{ opacity: seedOpacity }}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}

          {/* ================= ROOT SYSTEM ================= */}
          <motion.g
            style={{ pathLength: rootGrowth, opacity: rootGrowth }}
            stroke="#7a4a2e"
            strokeLinecap="round"
            fill="none"
          >
            {/* 4 Main Roots */}
            <path d="M100 325 C80 350 85 380 65 410" strokeWidth="1.8" />
            <path d="M100 325 C120 350 115 380 135 410" strokeWidth="1.8" />
            <path d="M100 330 C95 365 100 395 95 430" strokeWidth="1.6" />
            <path d="M100 330 C105 365 110 395 115 430" strokeWidth="1.6" />

            {/* 7 Sub Roots */}
            <path d="M80 360 C60 375 55 395 45 415" strokeWidth="1" />
            <path d="M85 380 C70 395 68 420 60 430" strokeWidth="0.9" />
            <path d="M120 360 C140 375 145 395 155 415" strokeWidth="1" />
            <path d="M115 380 C130 395 132 420 140 430" strokeWidth="0.9" />
            <path d="M95 370 C85 390 80 415 75 430" strokeWidth="0.8" />
            <path d="M105 370 C115 390 120 415 125 430" strokeWidth="0.8" />
            <path d="M100 395 C90 410 90 430 85 440" strokeWidth="0.7" />
          </motion.g>

          {/* ================= PLANT ================= */}
          <motion.g
            animate={{ rotate: [-0.6, 0.6, -0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "100px", originY: "320px" }}
          >
            {/* Stem */}
            <motion.path
              d="M100 320 Q105 200 100 80"
              stroke="url(#stemGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength: plantGrowth }}
            />

            {/* Leaves */}
            <motion.g
              style={{ scale: leafScale, originX: "100px", originY: "200px" }}
            >
              <path
                d="M102 240 Q145 220 150 255 Q130 280 102 240"
                fill="#a3e635"
              />
              <path
                d="M98 225 Q55 205 50 240 Q70 270 98 225"
                fill="#a3e635"
              />

              {/* Crown */}
              <path
                d="M100 85 Q125 10 100 -10 Q75 10 100 85"
                fill="#365314"
              />
              <path
                d="M95 90 Q35 55 25 105 Q65 145 95 90"
                fill="#4d7c0f"
              />
              <path
                d="M105 90 Q165 55 175 105 Q135 145 105 90"
                fill="#4d7c0f"
              />
            </motion.g>
          </motion.g>

          {/* ================= POLLEN ================= */}
          <motion.g style={{ opacity: pollenOpacity }}>
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={i}
                r="1.4"
                fill="#bef264"
                initial={{ cx: 100, cy: 150 }}
                animate={{
                  cx: [100, 100 + (i - 4) * 22],
                  cy: [150, 100 - Math.random() * 60],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </motion.g>
        </svg>

        {/* ================= SCROLL INDICATOR ================= */}
        <div className="absolute bottom-10 flex flex-col items-center">
          <motion.span
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="mb-2 text-xs uppercase tracking-[0.4em] text-stone-400"
          >
            Scroll to Plant
          </motion.span>
          <div className="h-12 w-[1px] bg-stone-300 overflow-hidden">
            <motion.div
              style={{ scaleY: scrollYProgress, originY: 0 }}
              className="h-full w-full bg-lime-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantHero;
