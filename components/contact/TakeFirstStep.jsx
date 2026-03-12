"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const actions = [
  {
    question: "Exploring options?",
    cta: "Learn about our services",
    href: "/services",
    variant: "outline",
  },
  {
    question: "Ready to talk?",
    cta: "Schedule a consultation",
    href: "/contact",
    variant: "primary",
  },
  {
    question: "Questions?",
    cta: "Contact us",
    href: "/contact",
    variant: "outline",
  },
];

export default function TakeFirstStep() {
  return (
    <section className="relative bg-soft-bg overflow-hidden border-t border-border/50">
      {/* Vibrant ambient glow */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[300px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[400px] h-[250px] bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="container-max relative z-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-sm mb-6 tracking-wide border border-primary/20 shadow-sm"
          >
            TAKE THE FIRST STEP
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight"
          >
            Ready to transform
            <br />
            <span className="text-primary">
              your community?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-muted font-secondary text-lg md:text-xl max-w-xl mx-auto mb-16 leading-relaxed"
          >
            Wherever you are in your journey, we&apos;re ready to meet you there
            with tailored, actionable support.
          </motion.p>

          {/* Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {actions.map((action, i) => (
              <motion.div
                key={action.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-5"
              >
                <p className="text-muted font-secondary font-medium text-sm tracking-wide">
                  {action.question}
                </p>

                <Link
                  href={action.href}
                  className={`btn w-full ${action.variant === "primary" ? "btn-primary" : "btn-outline"}`}
                >
                  {action.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
