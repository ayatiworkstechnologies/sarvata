"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderSection({
  founderTitle,
  founderText,
  founderImage,
}) {
  return (
    <section className="relative bg-[#faf9ff] pb-12 lg:pb-18 overflow-hidden z-10">
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white border border-primary/10 shadow-[0_40px_80px_rgba(0,0,0,0.04)]"
        >
          {/* Decorative Pattern Background */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-12 lg:p-16">
            {/* Left: Founder Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src={
                    founderImage || "/about-1.jpg"
                  } /* Fallback placeholder */
                  alt="Founder of Sarvata"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Narrative / Quote */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <h3 className="eyebrow mb-8 inline-block">{founderTitle}</h3>

              <blockquote className="relative mb-10">
                <p className="text-xl md:text-2xl font-light text-foreground/80 leading-[1.7] italic relative z-10">
                  &ldquo;{founderText}&rdquo;
                </p>
              </blockquote>

              <div className="flex flex-col">
                <p className="text-foreground font-bold tracking-widest text-[11px] uppercase mb-1">
                  Founder & Visionary
                </p>
                <p className="text-muted text-[11px] uppercase tracking-wider">
                  Sarvata Educational Consultancy
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
