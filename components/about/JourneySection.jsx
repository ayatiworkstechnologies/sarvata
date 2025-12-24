"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function JourneySection({ title, intro, steps }) {
  return (
    <section className="section bg-gray-50">
      
      {/* ================= HEADING ================= */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-xl mb-4">{title}</h2>
        <p className="text-muted font-secondary">{intro}</p>
      </motion.div>

      {/* ================= STEPS ================= */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 relative">

        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="relative text-center px-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {/* ICON */}
            <div className="flex justify-center mb-5">
              <Image
                src={step.icon}
                alt={step.title}
                width={42}
                height={42}
                className="object-contain"
              />
            </div>

            {/* TITLE */}
            <h4 className="heading-md mb-3">
              {step.title}
            </h4>

            {/* DESCRIPTION */}
            <p className="text-muted font-secondary text-sm leading-relaxed">
              {step.desc}
            </p>

            {/* VERTICAL DIVIDER (DESKTOP ONLY) */}
            {i < steps.length - 1 && (
              <span
                className="
                  hidden md:block
                  absolute top-10 right-0
                  h-50 w-px
                  bg-primary
                "
              />
            )}
          </motion.div>
        ))}

      </div>
    </section>
  );
}
