"use client";

import { motion } from "framer-motion";

export default function PhilosophySection({ title, subtitle, intro, points, researchTitle, researchText }) {
  return (
    <section className="relative bg-[#f5f7f5] py-24 md:py-32 overflow-hidden">
      {/* Subtle grids */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(107, 207, 142, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 207, 142, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-semibold mb-4 text-center">
            Our Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-light leading-tight text-foreground mb-6 tracking-tight">
            {subtitle}
          </h2>
          <p className="text-[18px] leading-relaxed text-muted-foreground font-light">
            {intro}
          </p>
        </motion.div>

        {/* THREE PRINCIPLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {points.map((pt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl p-8 md:p-10 border border-black/5 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6bcf8e]/20 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
              <div className="text-[#6bcf8e] text-5xl font-light mb-6 font-primary opacity-30">
                0{i + 1}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 pr-6 leading-snug relative z-10">
                {pt.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-[15px] relative z-10 whitespace-pre-line">
                {pt.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* RESEARCH FOUNDATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto p-10 md:p-12 rounded-[2rem] bg-gradient-to-br from-primary/5 via-secondary/5 to-white text-center relative overflow-hidden shadow-sm border border-border/60"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(160,102,170,0.1),transparent_50%)] pointer-events-none" />
          <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">{researchTitle}</h3>
          <p className="text-muted font-secondary text-[17px] leading-relaxed relative z-10 max-w-3xl mx-auto">
            {researchText}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
