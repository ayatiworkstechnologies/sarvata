"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const PlantHeroNew = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });

  const seedY = useTransform(smooth, [0, 0.25], [-120, 300]);
  const seedOpacity = useTransform(smooth, [0.15, 0.3], [1, 0]);
  const seedRotate = useTransform(smooth, [0, 0.25], [0, 140]);

  const plantGrowth = useTransform(smooth, [0.25, 0.6], [0, 1]);
  const leafScale = useTransform(smooth, [0.45, 0.7], [0, 1]);
  const rootOpacity = useTransform(smooth, [0.55, 0.9], [0, 1]);
  const pollenOpacity = useTransform(smooth, [0.5, 0.8], [0, 0.6]);

  const rootWiggle = { duration: 6, repeat: Infinity, ease: "easeInOut" };

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-[#fdfcf8]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(132,204,22,0.08)_0%,transparent_55%)]" />

        <svg viewBox="0 0 200 430" className="h-[80vh] w-auto overflow-visible drop-shadow-2xl">

          <defs>
            <linearGradient id="stemGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3f6212" />
              <stop offset="100%" stopColor="#84cc16" />
            </linearGradient>

            <linearGradient id="soilGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e6d3a3" />
              <stop offset="50%" stopColor="#d2b48c" />
              <stop offset="100%" stopColor="#9c6b3e" />
            </linearGradient>

            <radialGradient id="bigSeedGradient">
              <stop offset="0%" stopColor="#8b4513" />
              <stop offset="100%" stopColor="#3b1d08" />
            </radialGradient>

            <filter id="seedGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="soilOrganic">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" />
              <feDisplacementMap scale="5" />
            </filter>
          </defs>

          {/* SOIL (wider) */}
          <g filter="url(#soilOrganic)">
            <path
              d="M10 330 Q100 285 190 330 L190 440 L10 440 Z"
              fill="url(#soilGradient)"
            />
            <path
              d="M20 325 Q100 300 180 325"
              stroke="#b08968"
              strokeWidth="5"
              opacity="0.7"
            />
          </g>

          {/* FALLING SEEDS */}
          {[80, 100, 120].map((x, i) => (
            <motion.path
              key={i}
              d="M-2 -4 Q0 -6 2 -4 Q4 0 0 4 Q-4 0 -2 -4"
              fill="#5a2d0c"
              style={{ x, y: seedY, opacity: seedOpacity, rotate: seedRotate }}
            />
          ))}

          {/* ROOT SYSTEM */}
          <motion.g style={{ opacity: rootOpacity }} strokeLinecap="round" fill="none">

            {/* Connection node */}
            <motion.circle
              cx="100"
              cy="325"
              r="4"
              fill="#6b3a18"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {[
              ["M100 325 C80 350 85 380 65 410", "M100 325 C85 345 90 375 70 410"],
              ["M100 325 C120 350 115 380 135 410", "M100 325 C115 345 110 375 130 410"],
              ["M100 330 C95 365 100 395 95 430", "M100 330 C90 360 95 390 90 430"],
              ["M100 330 C105 365 110 395 115 430", "M100 330 C110 360 115 390 120 430"],
            ].map((paths, i) => (
              <g key={i}>
                {/* Base root */}
                <motion.path
                  d={paths[0]}
                  stroke="#7a4a2e"
                  strokeWidth={i < 2 ? 1.8 : 1.6}
                  animate={{ d: [paths[0], paths[1], paths[0]] }}
                  transition={rootWiggle}
                />

                {/* Flowing nutrient layer */}
                <motion.path
                  d={paths[0]}
                  stroke="#d9f99d"
                  strokeWidth="0.6"
                  strokeDasharray="3 8"
                  animate={{ strokeDashoffset: [0, -40] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                  opacity="0.8"
                />
              </g>
            ))}

            {/* Sub roots */}
            {[
              "M75 360 C60 380 55 400 45 420",
              "M125 360 C140 380 145 400 155 420",
              "M95 390 C85 405 80 420 70 440",
              "M105 390 C115 405 120 420 130 440",
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="#8b5a2b"
                strokeWidth="0.7"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 5 + i, repeat: Infinity }}
              />
            ))}

            {/* Big seeds */}
            {[
              { cx: 65, cy: 410 },
              { cx: 135, cy: 410 },
              { cx: 95, cy: 430 },
              { cx: 115, cy: 430 },
            ].map((p, i) => (
              <motion.ellipse
                key={i}
                cx={p.cx}
                cy={p.cy}
                rx="7"
                ry="10"
                fill="url(#bigSeedGradient)"
                filter="url(#seedGlow)"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}

          </motion.g>

          {/* PLANT */}
          <motion.g
            animate={{ rotate: [-0.6, 0.5, -0.4, 0.6, -0.6] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "100px", originY: "320px" }}
          >
            <motion.path
              d="M100 320 Q105 200 100 80"
              stroke="url(#stemGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength: plantGrowth }}
            />

            <motion.g
              style={{ scale: leafScale, originX: "100px", originY: "200px" }}
              animate={{ scale: [1, 1.02, 0.99, 1], rotate: [-1.5, 1.5, -1, 1, -1.5] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <path d="M102 240 Q145 220 150 255 Q130 280 102 240" fill="#a3e635" />
              <path d="M98 225 Q55 205 50 240 Q70 270 98 225" fill="#a3e635" />
              <path d="M100 85 Q125 10 100 -10 Q75 10 100 85" fill="#365314" />
              <path d="M95 90 Q35 55 25 105 Q65 145 95 90" fill="#4d7c0f" />
              <path d="M105 90 Q165 55 175 105 Q135 145 105 90" fill="#4d7c0f" />
            </motion.g>
          </motion.g>

          {/* POLLEN */}
          <motion.g style={{ opacity: pollenOpacity }}>
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={i}
                r="1.4"
                fill="#bef264"
                initial={{ cx: 100, cy: 150 }}
                animate={{
                  cx: [100, 100 + (i - 4) * 18],
                  cy: [150, 110 - Math.random() * 40],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 5 + Math.random() * 2, repeat: Infinity, delay: i * 0.6 }}
              />
            ))}
          </motion.g>

        </svg>
      </div>
    </section>
  );
};

export default PlantHeroNew;
