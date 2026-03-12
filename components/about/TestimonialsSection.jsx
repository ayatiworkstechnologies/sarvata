"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TestimonialsSection({ title, testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden flex items-center justify-center border-t border-border/50">
      {/* Light Aurora glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10 text-center">
        <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-semibold mb-16">
          {title}
        </p>

        <div className="relative h-[280px] md:h-[220px] w-full flex items-center justify-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: i === currentIndex ? 1 : 0,
                y: i === currentIndex ? 0 : 20,
                pointerEvents: i === currentIndex ? "auto" : "none",
                scale: i === currentIndex ? 1 : 0.95
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center w-full"
            >
              <div className="text-secondary/20 mb-6">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-xl md:text-3xl font-secondary text-foreground leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-border"></div>
                <p className="text-primary font-bold tracking-widest uppercase text-sm">
                  {t.author}
                </p>
                <div className="h-px w-8 bg-border"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-primary w-8" : "bg-primary/20 w-2.5 hover:bg-primary/40"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
