"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialsSection({ title, testimonials }) {
  return (
    <section className="relative bg-white py-8 md:py-16 overflow-hidden border-t border-border/50">

      {/* Primary blob */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[140px] opacity-70 pointer-events-none" />

      {/* Secondary blob */}
      <div className="absolute bottom-[-120px] right-[-100px] w-[420px] h-[420px] bg-secondary/15 rounded-full blur-[140px] opacity-70 pointer-events-none" />

      {/* Center aurora glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

        <p className="eyebrow mb-16 text-center">
          {title}
        </p>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="group relative flex flex-col p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
            >
              {/* Quote Icon */}
              <div className="text-secondary/20 mb-6">
                <FaQuoteLeft size={32} />
              </div>

              <p className="section-body text-foreground italic mb-8 grow">
                &quot;{t.quote}&quot;
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
