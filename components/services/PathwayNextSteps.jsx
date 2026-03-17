"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScheduleConsultationButton from "@/components/ScheduleConsultationButton";
import { useConsultation } from "@/context/ConsultationContext";

export default function PathwayNextSteps({ eyebrow = "Next Steps", title, steps = [] }) {
  const { openModal } = useConsultation();

  return (
    <section className="relative bg-[#f6f4f9] overflow-hidden py-16 md:py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(160,102,170,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(226,196,115,0.08),transparent_50%)]" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-semibold mb-4">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
            {title}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className={`grid grid-cols-1 gap-5 mx-auto mb-12 ${
          steps.length === 1 ? 'sm:grid-cols-1 max-w-md' : 
          steps.length === 2 ? 'sm:grid-cols-2 max-w-2xl' : 
          'sm:grid-cols-3 max-w-4xl'
        }`}>
          {steps.map((step, i) => {
            const isConsultation = step.href === "/contact" && step.cta && (step.cta.toLowerCase().includes("consultation") || step.cta.toLowerCase().includes("book") || step.cta.toLowerCase().includes("call"));
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative rounded-2xl bg-white border border-border/60 p-6
                           hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Number */}
                <span className="block text-4xl font-bold text-primary/15 leading-none mb-3 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[11px] uppercase tracking-[0.25em] text-secondary font-semibold mb-2">
                  {step.label}
                </p>
                <h4 className="text-lg font-bold text-foreground mb-2 tracking-tight">{step.title}</h4>
                <p className="text-muted font-secondary text-[14px] leading-relaxed">{step.description}</p>

                {step.href && (
                  isConsultation ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openModal();
                      }}
                      className="inline-flex items-center gap-1.5 mt-4 text-primary font-semibold text-sm
                                 hover:gap-3 transition-all duration-300 outline-none focus:outline-none"
                    >
                      {step.cta}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={step.href}
                      className="inline-flex items-center gap-1.5 mt-4 text-primary font-semibold text-sm
                                 hover:gap-3 transition-all duration-300"
                    >
                      {step.cta}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25, type: "spring", stiffness: 100 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative"
        >
          <div className="relative group/btn">
            {/* Animated Glow behind the button */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 group-hover/btn:opacity-60 blur-md transition-all duration-500 will-change-transform"></div>
            <ScheduleConsultationButton className="relative z-10 px-8 py-4 text-sm tracking-wide bg-gradient-to-r from-primary to-[#703b7b] hover:from-[#703b7b] hover:to-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
