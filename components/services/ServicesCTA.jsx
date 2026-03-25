"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedButton from "@/components/AnimatedButton";
import { useConsultation } from "@/context/ConsultationContext";

export default function ServicesCTA() {
  const { openModal } = useConsultation();
  return (
    <section className="relative py-12 md:py-18 bg-[#faf9ff] overflow-hidden border-t border-slate-100">
      {/* ── SOFT MESH GRADIENTS (Light Mode) ── */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-40 pointer-events-none blur-[120px]"
        style={{ backgroundColor: "rgba(160, 102, 170, 0.08)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none blur-[100px]"
        style={{ backgroundColor: "rgba(99, 102, 241, 0.05)" }}
      />

      {/* ── SUBTLE INDUSTRIAL GRID ── */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #a066aa 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter leading-[1.1]">
            Ready to architect <br />
            <span className="text-[#a066aa] italic font-light">
              meaningful change?
            </span>
          </h2>

          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-14 font-light leading-relaxed">
            Take the first step toward building a truly learner-centered
            educational environment with our specialized frameworks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {/* Primary Action Button */}
            <AnimatedButton
              onClick={openModal}
              variant="primary"
              accentColor="var(--secondary)"
              className="px-10"
            >
              Schedule Consultation
            </AnimatedButton>

            {/* Vertical Divider (Desktop) */}
            <div className="h-12 w-[1px] bg-slate-200 hidden sm:block" />

            {/* Secondary Links Row */}
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <Link
                href="/services"
                className="text-slate-600 font-bold uppercase tracking-[0.2em] text-[11px] hover:text-primary transition-colors relative group"
              >
                Download Guide
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all group-hover:w-full" />
              </Link>

              <Link
                href="/contact"
                className="text-slate-600 font-bold uppercase tracking-[0.2em] text-[11px] hover:text-primary transition-colors relative group"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all group-hover:w-full" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
