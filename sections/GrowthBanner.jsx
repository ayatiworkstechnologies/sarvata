"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PlantReveal() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const soilY = useTransform(scrollYProgress, [0, 0.4], [0, 260]);
  const rootsOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);

  const seeds = [
    { x: 140, y: 270 },
    { x: 220, y: 330 },
    { x: 300, y: 260 },
    { x: 360, y: 330 },
  ];

  return (
    <div
      ref={sectionRef}
      className="h-[240vh] bg-gradient-to-b from-[#f6efe6] to-[#070402]"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex justify-center">

        {/* 🌱 ORGANIC PLANT */}
        <motion.div
          initial={{ y: 160, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute top-24 z-30 flex flex-col items-center"
        >
          {/* Leaves */}
          <motion.div
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-[150px] h-[140px]"
          >
            <div className="absolute left-0 top-8 rotate-[-18deg]">
              <Leaf />
            </div>
            <div className="absolute left-[45px] top-2 scale-75">
              <Leaf />
            </div>
            <div className="absolute right-0 top-8 rotate-[18deg]">
              <Leaf />
            </div>
          </motion.div>

          {/* Stem */}
          <motion.div
            animate={{ scaleY: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative z-10 w-[8px] h-44 bg-gradient-to-b from-green-300 via-green-600 to-green-900 rounded-full mt-[-6px] shadow-[0_0_10px_rgba(50,255,120,0.4)]"
          />
        </motion.div>

        {/* 🌍 SOIL */}
        <motion.div
          style={{ y: soilY }}
          className="absolute top-[55%] w-full h-[340px] bg-[#3a2415] rounded-t-[75%] z-20 shadow-[0_-20px_60px_rgba(0,0,0,0.6)]"
        />

        {/* 🌑 UNDERGROUND */}
        <motion.div
          style={{ opacity: rootsOpacity }}
          className="absolute top-[60%] w-full h-[650px] bg-[#120904] z-10 flex justify-center"
        >
          <div className="relative w-[520px] h-[480px] mt-10">

            {/* soil texture */}
            <div className="absolute inset-0 bg-soil-texture opacity-30 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

            {/* ROOTS */}
            <svg viewBox="0 0 520 480" className="absolute inset-0 z-10">
              <defs>
                <linearGradient id="rootGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffe2b3" />
                  <stop offset="60%" stopColor="#ffae42" />
                  <stop offset="100%" stopColor="#ff7b00" />
                </linearGradient>

                <filter id="rootGlow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {seeds.map((seed, i) => {
                const path = `M260 0 C 240 150, ${seed.x - 30} 240, ${seed.x} ${seed.y}`;

                return (
                  <g key={i}>
                    {/* glow */}
                    <motion.path
                      d={path}
                      fill="none"
                      stroke="#ffb347"
                      strokeWidth="6"
                      opacity="0.15"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3.4, delay: 0.7 + i * 0.4 }}
                    />

                    {/* main root */}
                    <motion.path
                      d={path}
                      fill="none"
                      stroke="url(#rootGrad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      filter="url(#rootGlow)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3.4, delay: 0.7 + i * 0.4 }}
                    />

                    {/* nutrient particles */}
                    {[...Array(6)].map((_, p) => (
                      <circle key={p} r="2.5" fill="#fff9e6">
                        <animateMotion
                          dur={`${2 + p * 0.4}s`}
                          repeatCount="indefinite"
                          begin={`${2 + i * 0.4}s`}
                          path={path}
                        />
                      </circle>
                    ))}
                  </g>
                );
              })}
            </svg>

            {/* ROOT HAIRS */}
            {[...Array(45)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-[#ffd9a6]"
                style={{
                  width: "1px",
                  height: `${8 + Math.random() * 14}px`,
                  left: `${250 + Math.random() * 60 - 30}px`,
                  top: `${50 + Math.random() * 340}px`,
                  transform: `rotate(${Math.random() * 140 - 70}deg)`,
                  opacity: 0.35,
                }}
                animate={{ opacity: [0.15, 0.45, 0.15] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
              />
            ))}

            {/* SEEDS */}
            {seeds.map((seed, i) => (
              <motion.div
                key={i}
                className="absolute z-20"
                style={{ left: seed.x - 14, top: seed.y - 14 }}
              >
                <motion.div
                  className="absolute w-20 h-20 rounded-full bg-orange-400/20 blur-2xl"
                  animate={{ scale: [1, 2, 1], opacity: [0.2, 0.7, 0.2] }}
                  transition={{ repeat: Infinity, duration: 3.2, delay: 2 + i * 0.4 }}
                />

                <motion.div
                  className="w-14 h-14 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, #fffbe6, #ff9a1f, #ff6a00)",
                    boxShadow: "0 0 80px 30px rgba(255,140,40,1)",
                  }}
                  animate={{ scale: [0.85, 1.35, 0.9] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.6,
                    delay: 2 + i * 0.4,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Leaf() {
  return (
    <div className="relative">
      <div className="leaf-shape" />
      <div className="leaf-vein center" />
      {[...Array(4)].map((_, i) => (
        <div key={i} className="leaf-vein side" style={{ top: 22 + i * 16 }} />
      ))}
    </div>
  );
}
