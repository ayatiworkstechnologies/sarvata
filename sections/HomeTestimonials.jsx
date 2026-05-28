"use client";

import SectionHeading from "@/components/SectionHeading";
import TestimonialsCarousel from "@/components/about/TestimonialsCarousel";
import { FloatingShapes, SubtleGrid } from "@/components/VectorDecorations";
import { TEAM_TESTIMONIALS } from "@/data/teamTestimonials";

export default function HomeTestimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fcfcfc] py-4 sm:py-6 md:py-10">
      <FloatingShapes />
      <SubtleGrid />

      <div className="container-max relative z-10">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="eyebrow">Testimonials</span>
          <SectionHeading title="Voices From Our Learning Communities" />
        </div>

        <TestimonialsCarousel testimonials={TEAM_TESTIMONIALS} />
      </div>
    </section>
  );
}
