"use client";

import { motion } from "framer-motion";

export default function MissionSection({ title, highlight, paragraphs }) {
  return (
    <section className="relative bg-emerald-50/30 py-32 md:py-48 overflow-hidden text-center flex items-center justify-center">
      {/* VIBRANT LIGHT GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 mb-8 text-sm font-bold tracking-widest uppercase shadow-sm">
            {title}
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground mb-12 tracking-tight max-w-4xl mx-auto">
             {highlight.split('every day.').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">every day.</span>}
                </span>
             ))}
             {/* Fallback rendering */}
             {!highlight.includes('every day.') && highlight}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {paragraphs && paragraphs.map((p, idx) => (
              <p key={idx} className="text-[18px] md:text-[21px] leading-relaxed text-muted font-light font-secondary">
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
