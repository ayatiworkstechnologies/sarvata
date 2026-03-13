"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PathwayServicesSection({ eyebrow = "Services", title, services = [] }) {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px]" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-semibold mb-4">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
            {title}
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-[1.75rem] border border-border/60 bg-soft-bg p-8 lg:p-9 overflow-hidden
                         hover:shadow-2xl hover:border-transparent hover:-translate-y-2 transition-all duration-500"
            >
              {/* Hover accent glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/12 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-600" />

              {/* Service icon / number badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  {svc.icon ? (
                    <span className="text-primary text-xl">{svc.icon}</span>
                  ) : (
                    <span className="text-primary font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  )}
                </div>

                {/* Arrow indicator */}
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center
                               group-hover:border-primary group-hover:bg-primary group-hover:text-white
                               transition-all duration-300">
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{svc.title}</h3>
              <p className="text-muted font-secondary text-[15px] leading-relaxed mb-6 flex-1">{svc.description}</p>

              {/* CTA Link */}
              {svc.href && (
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm
                             group-hover:gap-3 transition-all duration-300"
                >
                  {svc.cta || "Learn More"}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
