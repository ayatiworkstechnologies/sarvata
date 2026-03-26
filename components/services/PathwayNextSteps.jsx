"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FloatingShapes, SubtleGrid } from "@/components/VectorDecorations";
import ScheduleConsultationButton from "@/components/ScheduleConsultationButton";
import { useConsultation } from "@/context/ConsultationContext";
import SectionHeading from "@/components/SectionHeading";

export default function PathwayNextSteps({
  eyebrow = "Next Steps",
  title,
  steps = [],
}) {
  const { openModal } = useConsultation();

  const hasConsultationCard = steps.some(
    (step) =>
      step.href === "/contact-us" &&
      step.cta &&
      (step.cta.toLowerCase().includes("consultation") ||
        step.cta.toLowerCase().includes("book") ||
        step.cta.toLowerCase().includes("call")),
  );

  return (
    <section className="relative bg-[#f6f4f9] overflow-hidden py-6 md:py-12">
      {/* Background decoration */}
      <SubtleGrid />
      <FloatingShapes />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(160,102,170,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(226,196,115,0.08),transparent_50%)]" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-xl mx-auto mb-8"
        >
          <p className="eyebrow">{eyebrow}</p>
          <SectionHeading title={title} className="text-foreground" />
        </motion.div>

        {/* Steps */}
        <div
          className={`grid grid-cols-1 gap-5 mx-auto mb-12 ${
            steps.length === 1
              ? "sm:grid-cols-1 max-w-md"
              : steps.length === 2
                ? "sm:grid-cols-2 max-w-2xl"
                : "sm:grid-cols-3 max-w-4xl"
          }`}
        >
          {steps.map((step, i) => {
            const isConsultation =
              step.href === "/contact-us" &&
              step.cta &&
              (step.cta.toLowerCase().includes("consultation") ||
                step.cta.toLowerCase().includes("book") ||
                step.cta.toLowerCase().includes("call"));

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative h-full flex flex-col rounded-2xl bg-white border border-border/60 p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Number */}
                <span className="block text-4xl font-bold text-primary/15 leading-none mb-3 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[11px] uppercase tracking-[0.25em] text-secondary font-semibold mb-2">
                  {step.label}
                </p>
                <h4 className="card-title mb-2">{step.title}</h4>
                <p className="card-body leading-relaxed flex-grow">
                  {step.description}
                </p>

                {step.href &&
                  (isConsultation ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openModal();
                      }}
                      className="inline-flex items-center gap-1.5 mt-4 text-primary font-bold text-sm hover:text-secondary hover:gap-3 transition-all duration-300 outline-none focus:outline-none group/link"
                    >
                      {step.cta}
                      <svg
                        className="w-3.5 h-3.5 transition-colors group-hover/link:text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={step.href}
                      className="inline-flex items-center gap-1.5 mt-4 text-primary font-bold text-sm hover:text-secondary hover:gap-3 transition-all duration-300 group/link"
                    >
                      {step.cta}
                      <svg
                        className="w-3.5 h-3.5 transition-colors group-hover/link:text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  ))}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Buttons */}
        {!hasConsultationCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              type: "spring",
              stiffness: 100,
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative"
          >
            <ScheduleConsultationButton />
          </motion.div>
        )}
      </div>
    </section>
  );
}
