"use client";

import { motion } from "framer-motion";
import { FloatingShapes, SubtleGrid } from "@/components/VectorDecorations";
import SectionHeading from "@/components/SectionHeading";

export default function PathwayChallengeSection({ eyebrow, title, paragraphs, accentColor = "primary" }) {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-28">
      {/* Background decoration */}
      <SubtleGrid />
      <FloatingShapes />

      {/* Subtle background blobs (Legacy kept for layering) */}
      <div className="pointer-events-none absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-secondary/8 blur-[100px]" />

      <div className="container-max relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: large decorative number + eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="flex flex-col justify-center"
        >
          <p className="eyebrow mb-5">
            {eyebrow}
          </p>
          <SectionHeading title={title} className="text-foreground" />

          {/* Accent bar */}
          <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-primary to-secondary mb-8" />

          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <p key={i} className="section-body leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right: Visual card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] bg-soft-bg border border-border/60 p-8 md:p-10 overflow-hidden">
            {/* Inner glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/10 blur-[60px]" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-secondary/15 blur-[60px]" />

            <div className="relative z-10">
              {/* Big decorative quote mark */}
              <div className="text-[120px] leading-none font-bold text-primary/10 select-none mb-2">&quot;</div>
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-snug tracking-tight -mt-10">
                The goal is not to cover the curriculum, it is to uncover the learner.
              </p>
              <div className="mt-6 h-px w-full bg-border" />
              <p className="mt-5 text-sm text-muted font-secondary">
                Sarvata Educational Consultancy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
