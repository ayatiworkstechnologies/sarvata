"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScheduleConsultationButton from "@/components/ScheduleConsultationButton";

export default function PathwayNextSteps({ eyebrow = "Next Steps", title, steps = [] }) {
  return (
    <section className="relative bg-[#f6f4f9] overflow-hidden py-20 md:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(160,102,170,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(226,196,115,0.08),transparent_50%)]" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-semibold mb-4">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
            {title}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-white border border-border/60 p-6
                         hover:border-primary/30 hover:shadow-lg transition-all duration-350"
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
                <Link
                  href={step.href}
                  className="inline-flex items-center gap-1.5 mt-4 text-primary font-semibold text-sm
                             hover:gap-3 transition-all duration-250"
                >
                  {step.cta}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Buttons — passed as children optionally */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ScheduleConsultationButton />
          <Link href="/contact" className="btn btn-outline">
            Contact Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
