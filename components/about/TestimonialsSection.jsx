"use client";

import TestimonialsCarousel from "@/components/about/TestimonialsCarousel";

export default function TestimonialsSection({ title, testimonials }) {
  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-white py-8 md:py-16">
      <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-primary/10 opacity-70 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-120px] right-[-100px] h-[420px] w-[420px] rounded-full bg-secondary/15 opacity-70 blur-[140px] pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/5 via-secondary/5 to-primary/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <p className="eyebrow mb-10 text-center md:mb-14">{title}</p>
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
