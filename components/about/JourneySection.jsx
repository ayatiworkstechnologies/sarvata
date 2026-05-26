"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function JourneySection({ title, intro, steps, image }) {
  const containerRef = useRef(null);

  // Track scroll for the center animated drawing line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the line drawing effect
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#faf9ff] py-8 sm:py-16 md:py-24 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#E2C473 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container-max relative z-10">
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24 md:mb-40"
        >
          <span className="eyebrow text-primary mb-6 block">Our Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-8 tracking-tight">
            {title}
          </h2>
          <p className="section-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {intro}
          </p>
        </motion.div>

        {/* --- TIMELINE TRACK --- */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated Center Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ scaleY: pathLength, transformOrigin: "top" }}
              className="absolute inset-0 bg-primary shadow-[0_0_20px_rgba(160,102,170,0.4)]"
            />
          </div>

          <div className="space-y-24 sm:space-y-32 md:space-y-56">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative">
                  <div
                    className={`flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-24 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* 1. TEXT CONTENT COLUMN */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full md:w-1/2"
                    >
                      <div
                        className={`flex flex-col ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          {!isEven && (
                            <span className="text-4xl font-black text-primary/20 tabular-nums">
                              0{i + 1}
                            </span>
                          )}
                          <div className="h-[2px] w-12 bg-primary/20" />
                          {isEven && (
                            <span className="text-4xl font-black text-primary/20 tabular-nums">
                              0{i + 1}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6 leading-[1.1] tracking-tighter">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light max-w-lg">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>

                    {/* 2. CENTER NODE (Desktop Anchor) */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-0 hidden md:flex items-center justify-center z-20">
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        className="w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center shadow-2xl"
                      >
                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                      </motion.div>
                    </div>

                    {/* 3. IMAGE COLUMN: Cinematic Feature */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full md:w-1/2"
                    >
                      <div className="relative aspect-[4/3] rounded-[24px] md:rounded-[48px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] group border border-border bg-soft">
                        <Image
                          src={step.image || `/approach.jpg`}
                          alt={step.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
