"use client";

import { motion } from "framer-motion";

export default function PathwayApproachSection({ eyebrow = "Our Approach", title, items = [] }) {
  return (
    <section className="relative bg-[#f6f4f9] overflow-hidden py-20 md:py-28">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/8 blur-[100px]" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-semibold mb-4">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
            {title}
          </h2>
        </motion.div>

        {/* Approach Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-[1.75rem] bg-white border border-border/60 p-8 overflow-hidden
                         hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/30 transition-all duration-400"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full bg-primary/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Step number */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-border group-hover:bg-primary/30 transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{item.title}</h3>
              <p className="text-muted font-secondary text-[15px] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
