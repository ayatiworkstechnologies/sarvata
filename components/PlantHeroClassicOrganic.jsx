"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const PlantHeroClassicOrganic = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 25,
    mass: 0.8,
  });

  // --- Animation Mapping ---
  const seedY = useTransform(smooth, [0, 0.2], [-150, 320]);
  const seedOpacity = useTransform(smooth, [0.25, 0.35], [1, 0.4]);
  const rootPath = useTransform(smooth, [0.2, 0.6], [0, 1]);
  const subRootPath = useTransform(smooth, [0.4, 0.7], [0, 1]);
  const stemPath = useTransform(smooth, [0.3, 0.85], [0, 1]);
  
  const leafGrowth = (start, end) => useTransform(smooth, [start, end], [0, 1]);
  const nutrientFlow = useTransform(smooth, [0.5, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#fdfdfb]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden pt-20">
        
        <svg viewBox="0 0 200 450" className="h-[82vh] w-auto overflow-visible z-10">
          <defs>
            <linearGradient id="rootGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3e2723" />
              <stop offset="100%" stopColor="#8d6e63" />
            </linearGradient>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bef264" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>
            <radialGradient id="bigSeedGrad">
              <stop offset="0%" stopColor="#5d4037" />
              <stop offset="100%" stopColor="#1a0f0e" />
            </radialGradient>
          </defs>

          {/* SOIL LAYER */}
          <path d="M-50 320 Q100 295 250 320 L250 500 L-50 500 Z" fill="#f4f1e8" />

          {/* 1. ROOTS & BIG SEEDS */}
          <motion.g fill="none" stroke="url(#rootGrad)" strokeLinecap="round">
            {[
              { d: "M100 320 C100 360 120 380 90 440", w: 3.5, ex: 90, ey: 440 },
              { d: "M90 320 C80 340 70 370 55 410", w: 3, ex: 55, ey: 410 },
              { d: "M110 320 C120 340 135 370 145 420", w: 3, ex: 145, ey: 420 },
              { d: "M105 320 C115 360 100 390 120 435", w: 2.5, ex: 120, ey: 435 },
            ].map((root, i) => (
              <g key={`root-group-${i}`}>
                <motion.path d={root.d} strokeWidth={root.w} style={{ pathLength: rootPath }} />
                <motion.ellipse 
                  cx={root.ex} cy={root.ey} rx="6" ry="8" fill="url(#bigSeedGrad)"
                  style={{ 
                    opacity: useTransform(smooth, [0.55, 0.65], [0, 1]), 
                    scale: useTransform(smooth, [0.55, 0.7], [0, 1.2]) 
                  }}
                />
                <motion.path 
                  d={root.d} stroke="#d9f99d" strokeWidth={root.w * 0.3} strokeDasharray="5 15"
                  style={{ pathLength: rootPath, strokeDashoffset: nutrientFlow, opacity: 0.5 }}
                />
              </g>
            ))}
          </motion.g>

          {/* 2. INITIAL SEEDS */}
          {[100, 90, 110, 105].map((x, i) => (
            <motion.path key={`s-${i}`} d="M-4 -6 Q0 -10 4 -6 Q6 0 0 6 Q-6 0 -4 -6" fill="#26140f"
              style={{ x, y: seedY, opacity: seedOpacity, rotate: i * 40, scale: useTransform(smooth, [0.15, 0.25, 0.35], [1, 1.4, 0.9]) }}
            />
          ))}

          {/* 3. MAIN STEM */}
          <motion.path d="M100 320 C105 250 85 180 100 50" stroke="#365314" strokeWidth="6" strokeLinecap="round" fill="none"
            style={{ pathLength: stemPath }}
          />

          {/* 4. CLASSIC TEARDROP LEAVES */}
          <motion.g>
            {[
              { d: "M0 0 Q40 -20 50 15 Q30 40 0 0", x: 101, y: 255, r: -25, s: 0.4 }, // Bottom Right
              { d: "M0 0 Q-40 -20 -50 15 Q-30 40 0 0", x: 97, y: 205, r: 20, s: 0.5 },  // Bottom Left
              { d: "M0 0 Q45 -30 60 5 Q35 40 0 0", x: 99, y: 145, r: -15, s: 0.6 },   // Mid Right
              { d: "M0 0 Q-45 -30 -60 5 Q-35 40 0 0", x: 97, y: 105, r: 30, s: 0.7 },  // Mid Left
              { d: "M0 0 Q25 -55 0 -80 Q-25 -55 0 0", x: 100, y: 52, r: 0, s: 0.85 },  // Top Bud
            ].map((leaf, i) => (
              <g key={`leaf-${i}`} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.r})`}>
                <motion.path
                  d={leaf.d}
                  fill="url(#leafGrad)"
                  style={{ 
                    scale: leafGrowth(leaf.s, leaf.s + 0.12),
                    originX: "0px", originY: "0px"
                  }}
                />
                {/* Mid-vein for detail */}
                <motion.path
                  d={leaf.d.split('Q')[0] + "Q" + leaf.d.split('Q')[1]}
                  stroke="#1a2e05"
                  strokeWidth="1.2"
                  opacity="0.2"
                  fill="none"
                  style={{ 
                    pathLength: leafGrowth(leaf.s + 0.05, leaf.s + 0.12),
                    originX: "0px", originY: "0px"
                  }}
                />
              </g>
            ))}
          </motion.g>

          {/* 5. DUST PARTICLES */}
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={i}
              r="0.8"
              fill="#a3e635"
              style={{
                opacity: useTransform(smooth, [0.7, 1], [0, 0.4]),
                cx: 100 + (i - 6) * 15,
                cy: useTransform(smooth, [0.6, 1], [350, 50 + (i * 15)])
              }}
            />
          ))}
        </svg>
      </div>
    </section>
  );
};

export default PlantHeroClassicOrganic;