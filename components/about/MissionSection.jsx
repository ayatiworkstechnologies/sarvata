"use client";

import { motion } from "framer-motion";

export default function MissionSection({ title, highlight, paragraphs }) {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* ── AMBIENT MESH BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(160,102,170,0.03),transparent_70%)]" />
        {/* Subtle Accent Glows */}
        <div className="absolute top-0 right-0 h-96 w-96 bg-secondary/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl"
        >
          {/* 1. SECTION HEADER */}
          <div className="flex flex-col items-center text-center mb-16">
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="eyebrow text-primary mb-6"
            >
              {title}
            </motion.span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-[1.1] tracking-tight max-w-4xl">
              {/* Splitting to highlight the "Every Day" promise */}
              {highlight.split(", every day.").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-primary italic font-light">
                      , every day.
                    </span>
                  )}
                </span>
              ))}
            </h2>
          </div>

          {/* 2. THE PHILOSOPHY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Center Decorative Mark */}
            <div className="hidden md:block md:col-span-1">
              <div className="flex flex-col items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary/20" />
                <div className="h-20 w-[1px] bg-border" />
                <div className="h-2 w-2 rounded-full bg-secondary/20" />
              </div>
            </div>

            {/* Paragraph Content */}
            <div className="md:col-span-10 space-y-8">
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={`text-lg md:text-xl lg:text-2xl leading-relaxed text-center ${
                    idx === paragraphs.length - 1
                      ? "text-primary font-bold italic text-xl md:text-2xl lg:text-3xl"
                      : "text-muted-foreground font-light"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="hidden md:block md:col-span-1" />
          </div>
        </motion.div>
      </div>

      {/* Industrial Background Detailing */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none overflow-hidden flex items-center justify-center">
        <span className="text-[20vw] font-black uppercase tracking-tighter">
          Sarvata
        </span>
      </div>
    </section>
  );
}
