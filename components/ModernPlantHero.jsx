"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ModernPlantHero = () => {
  const containerRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);
  const [displayDepth, setDisplayDepth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 15,
    damping: 30,
    mass: 1.5,
  });

  useMotionValueEvent(smooth, "change", (latest) => {
    if (latest < 0.2) setActiveStage(0);
    else if (latest < 0.6) setActiveStage(1);
    else setActiveStage(2);

    setDisplayDepth(Math.round(latest * 480));
  });

  // --- Animation Mapping ---
  const mainSeedY = useTransform(smooth, [0, 0.25], [-100, 600]);
  const mainSeedScale = useTransform(smooth, [0, 0.2, 0.3], [1, 1.5, 0.8]);
  const mainSeedGlow = useTransform(smooth, [0.15, 0.3], [0, 1]);
  const rootGrowth = useTransform(smooth, [0.2, 0.7], [0, 1]);
  const particleFlow = useTransform(smooth, [0.4, 1], [0, -200]);
  const podScale = useTransform(smooth, [0.5, 0.75], [0, 1.2]);
  const podOpacity = useTransform(smooth, [0.5, 0.6], [0, 1]);
  const stemPath = useTransform(smooth, [0.4, 1], [0, 1]);
  const leafScale = useTransform(smooth, [0.6, 1], [0, 1.1]);

  return (
    /* FIX 1: Added z-0 to the section so it stays behind your Header (which should be z-50).
       FIX 2: Ensure overflow is managed so it doesn't break header fixed positioning.
    */
    <section 
      ref={containerRef} 
      className="relative h-[4000px] bg-[#fcfcf9] text-[#1a2e05] z-0 overflow-visible"
    >
      
      {/* 1. Visual Window Sticky Container 
          FIX 3: top-0 might need an offset if your header is fixed. 
          Using top-0 works if your header has a z-index > 10.
      */}
      <div className="sticky top-0 h-screen w-full flex items-end justify-center pb-10 overflow-hidden">
        
        {/* FIX 4: Background Atmosphere now relative to this container to avoid covering external elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(163,230,53,0.1)_0%,transparent_70%)] -z-10" />

        <svg viewBox="0 0 400 950" className="h-[85vh] w-auto overflow-visible z-10">
          <defs>
            <filter id="sandTexture" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
              <feDiffuseLighting in="noise" lightingColor="#f5f2e8" surfaceScale="3">
                <feDistantLight azimuth="45" elevation="60" />
              </feDiffuseLighting>
            </filter>

            <linearGradient id="rootGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a2c2a" />
              <stop offset="100%" stopColor="#8d6e63" />
            </linearGradient>

            <radialGradient id="biolumGlow">
              <stop offset="0%" stopColor="#bef264" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* DEEP SANDY SOIL SECTION */}
          <g>
            <rect x="-400" y="600" width="1200" height="400" fill="#f5f2e8" filter="url(#sandTexture)" />
            <rect x="-400" y="600" width="1200" height="400" fill="rgba(141, 110, 99, 0.12)" />
            <line x1="-400" y1="600" x2="800" y2="600" stroke="#d7ccc8" strokeWidth="2" strokeDasharray="8 4" />
          </g>

          {/* ROOTS */}
          <motion.g fill="none" strokeLinecap="round">
            {[
              { d: "M200 600 C200 700 120 750 60 880", w: 5, px: 60, py: 880 }, 
              { d: "M200 600 C200 700 280 750 340 880", w: 5, px: 340, py: 880 }, 
              { d: "M200 600 C250 650 380 680 390 750", w: 3, px: 390, py: 750 }, 
              { d: "M200 600 C150 650 20 680 10 750", w: 3, px: 10, py: 750 },   
            ].map((root, i) => (
              <g key={i}>
                <motion.path 
                  d={root.d} 
                  stroke="url(#rootGrad)"
                  strokeWidth={root.w} 
                  style={{ pathLength: rootGrowth }} 
                />
                <motion.path 
                  d={root.d} 
                  stroke="#d9f99d"
                  strokeWidth={root.w * 0.3} 
                  strokeDasharray="10 20"
                  style={{ 
                    pathLength: rootGrowth,
                    strokeDashoffset: particleFlow,
                    opacity: 0.6 
                  }} 
                />
                <motion.g style={{ opacity: podOpacity, scale: podScale }}>
                  <circle cx={root.px} cy={root.py} r="18" fill="url(#biolumGlow)" />
                  <ellipse cx={root.px} cy={root.py} rx="8" ry="12" fill="#2d1a18" />
                  <motion.circle 
                    cx={root.px} cy={root.py} r="20" stroke="#bef264" strokeWidth="0.5" fill="none"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.g>
              </g>
            ))}
          </motion.g>

          {/* FALLING SEED */}
          <motion.g style={{ x: 200, y: mainSeedY }}>
             <motion.circle r="25" fill="url(#biolumGlow)" style={{ opacity: mainSeedGlow, scale: 1.2 }} />
             <motion.path
              d="M-6 -8 C-6 -8 0 -14 6 -8 C12 0 0 12 C-12 0 -6 -8"
              fill="#26140f"
              style={{ scale: mainSeedScale }}
            />
          </motion.g>

          {/* PLANT STEM */}
          <motion.path
            d="M200 600 C210 400 180 250 200 100"
            stroke="url(#naturalStem)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength: stemPath }}
          />
          
          <defs>
             <linearGradient id="naturalStem" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#2d4a08" />
              <stop offset="100%" stopColor="#84cc16" />
            </linearGradient>
          </defs>

          {/* LEAVES */}
          <motion.g>
            {[
              { d: "M0 0 C40 -70 120 -60 100 40 C80 80 30 50 0 0", x: 202, y: 450, r: -20 },
              { d: "M0 0 C-40 -70 -120 -60 -100 40 C-80 80 -30 50 0 0", x: 198, y: 320, r: 20 },
              { d: "M0 0 Q50 -100 0 -160 Q-50 -100 0 0", x: 200, y: 105, r: 0 },
            ].map((leaf, i) => (
              <g key={i} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.r})`}>
                <motion.path
                  d={leaf.d}
                  fill="#3f6212"
                  style={{ scale: leafScale, transformOrigin: "0px 0px" }}
                />
              </g>
            ))}
          </motion.g>
        </svg>

        {/* HUD */}
        <div className="absolute right-12 bottom-12 flex flex-col items-end gap-3 pointer-events-none z-20">
          <div className="text-right text-[#1a2e05]">
            <span className="block text-[10px] font-bold opacity-30 tracking-[0.4em] uppercase">Strata Depth</span>
            <span className="text-3xl font-light font-mono">
              {displayDepth}m
            </span>
          </div>
          <div className="w-56 h-[2px] bg-black/5 relative overflow-hidden">
             <motion.div 
              style={{ scaleX: smooth, transformOrigin: "left" }}
              className="absolute inset-0 bg-lime-600"
             />
          </div>
          <AnimatePresence mode="wait">
            <motion.p
                key={activeStage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-[10px] font-bold text-lime-700 uppercase tracking-widest"
            >
                {["Sowing Sequence", "Sub-Surface Network", "Full Maturation"][activeStage]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
};

export default ModernPlantHero;