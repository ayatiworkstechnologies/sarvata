"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function PhilosophyScroll({ title, intro, points }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section ref={containerRef} className="relative bg-white h-[250vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT: Fixed Branding */}
        <div className="w-full lg:w-1/2 h-[40vh] lg:h-screen flex flex-col justify-center px-8 md:px-12 bg-soft/30 relative border-r border-border/50">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow text-primary mb-6 block">{title}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-8 leading-[0.95]">
              Learning is a{" "}
              <span className="text-primary italic font-light">Verb</span>,{" "}
              <br />
              Not a Noun.
            </h2>
            <p className="section-body text-lg text-muted max-w-md">{intro}</p>
          </motion.div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-[2px] bg-border/30 hidden lg:block">
            <motion.div
              style={{ scaleY: smoothProgress, transformOrigin: "top" }}
              className="absolute inset-0 bg-primary w-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
            />
          </div>
        </div>

        {/* RIGHT: Step-by-Step System */}
        <div className="w-full lg:w-1/2 h-screen relative px-8 md:px-20">
          <div className="relative h-full flex flex-col justify-center">
            {points.map((pt, i) => (
              <PrincipleItem
                key={i}
                pt={pt}
                index={i}
                scrollYProgress={smoothProgress}
                range={[i / points.length, (i + 1) / points.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipleItem({ pt, index, scrollYProgress, range }) {
  const opacity = useTransform(
    scrollYProgress,
    [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
    [30, 0, 0, -30],
  );

  return (
    <motion.div
      style={{ opacity, y, position: "absolute" }}
      className="w-full pr-10"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-7xl font-black text-primary/80 tabular-nums tracking-tighter drop-shadow-md">
            0{index + 1}
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
        </div>
        <div className="pl-2">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 tracking-tight leading-tight">
            {pt.title}
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed font-light max-w-md">
            {pt.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
