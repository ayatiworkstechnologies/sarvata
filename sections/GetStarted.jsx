"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useConsultation } from "@/context/ConsultationContext";
import { SubtleGrid } from "@/components/VectorDecorations";

export default function GetStarted() {
  const { openModal } = useConsultation();

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <SubtleGrid />

      <div className="container-max relative z-10">
        {/* MAIN WRAPPER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[500px] md:min-h-[600px] w-full rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-border"
        >
          {/* 1. BACKGROUND IMAGE PORTAL */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/img-home.jpg"
              alt="Partnership with Sarvata"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />
            {/* Intelligent Gradient: Darkens only where text lives */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:via-black/20 lg:to-transparent" />
          </div>

          {/* 2. GLASS CONTENT PANEL */}
          <div className="relative z-10 h-full w-full flex items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-2xl">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                  Take the First Step
                </span>
              </motion.div>

              {/* Headline */}
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.95] mb-6">
                Ready to transform <br />
                <span className="text-secondary italic font-light">
                  your community?
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-lg font-light">
                Wherever you are in your journey, we&apos;re ready to meet you
                there with tailored, actionable support that builds capacity
                from within.
              </p>

              {/* CTA BUTTON - Industrial Glass Style */}
              <button
                onClick={openModal}
                className="group relative inline-flex items-center gap-6 rounded-2xl bg-white px-10 py-6 text-black transition-all duration-500 hover:bg-secondary hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
              >
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">
                    Inquiry
                  </span>
                  <span className="text-lg font-black tracking-tight leading-none">
                    Schedule Consultation
                  </span>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5 group-hover:bg-black/10 transition-transform duration-500 group-hover:rotate-90">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* 3. DECORATIVE TOP LINE */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </motion.div>

        {/* BOTTOM METRIC BAR (Subtle Credibility) */}
        <div className="mt-12 flex flex-wrap justify-center gap-12 opacity-40 grayscale pointer-events-none">
          <p className="text-xs font-bold uppercase tracking-widest text-foreground">
            50+ Institutions
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-foreground">
            India-Wide Reach
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-foreground">
            Research Backed
          </p>
        </div>
      </div>
    </section>
  );
}
