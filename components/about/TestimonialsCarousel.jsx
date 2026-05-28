"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

export default function TestimonialsCarousel({ testimonials = [] }) {
  if (!testimonials.length) return null;
  const cardsPerPage = 3;
  const [startIndex, setStartIndex] = useState(0);
  const visibleTestimonials = Array.from(
    { length: Math.min(cardsPerPage, testimonials.length) },
    (_, offset) => testimonials[(startIndex + offset) % testimonials.length],
  );

  const goPrev = () => {
    setStartIndex((current) =>
      (current - cardsPerPage + testimonials.length) % testimonials.length,
    );
  };

  const goNext = () => {
    setStartIndex((current) => (current + cardsPerPage) % testimonials.length);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary/80">
          {String(startIndex + 1).padStart(2, "0")} /{" "}
          {String(testimonials.length).padStart(2, "0")}
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white text-primary transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary hover:text-white"
            aria-label="Previous testimonials"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white text-primary transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary hover:text-white"
            aria-label="Next testimonials"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleTestimonials.map((testimonial, index) => {
          const name = testimonial.name || testimonial.author || "Community Member";

          return (
            <article
              key={`${name}-${testimonial.event || "testimonial"}-${startIndex}-${index}`}
              className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-primary/10 bg-white/95 p-6 shadow-[0_18px_50px_rgba(31,41,55,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(31,41,55,0.12)] sm:p-7"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-primary/8 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold leading-snug text-foreground sm:text-xl">
                      {name}
                    </p>
                    {testimonial.role ? (
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
                        {testimonial.role}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/20 text-primary">
                    <FaQuoteLeft size={16} />
                  </div>
                </div>

                <p className="flex-1 font-[var(--font-secondary)] text-sm leading-7 italic text-slate-700 sm:text-[15px]">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="mt-6 border-t border-primary/10 pt-4">
                  {testimonial.school ? (
                    <p className="text-sm font-semibold leading-6 text-foreground">
                      {testimonial.school}
                    </p>
                  ) : null}
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary/80 sm:text-xs">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
