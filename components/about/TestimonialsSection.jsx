"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection({ title, testimonials }) {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-border/50">

      {/* Primary blob */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[140px] opacity-70 pointer-events-none" />

      {/* Secondary blob */}
      <div className="absolute bottom-[-120px] right-[-100px] w-[420px] h-[420px] bg-secondary/15 rounded-full blur-[140px] opacity-70 pointer-events-none" />

      {/* Center aurora glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

        <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-semibold mb-16 text-center">
          {title}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="group relative flex flex-col p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="text-secondary/20 mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>

              <p className="text-[16px] md:text-[18px] font-secondary text-foreground leading-relaxed italic mb-8 flex-grow">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-black/5">
                <div className="h-0.5 w-6 bg-primary/40 rounded-full"></div>
                <p className="text-primary font-bold tracking-widest uppercase text-[11px]">
                  {t.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}