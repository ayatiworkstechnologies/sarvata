"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function JourneySection({ title, intro, steps }) {
  return (
    <section className="section bg-gray-50">

      {/* ================= HEADING ================= */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12 md:mb-16 px-2"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-xl text-2xl sm:text-3xl md:text-4xl mb-4">
          {title}
        </h2>
        <p className="text-muted font-secondary text-sm sm:text-base">
          {intro}
        </p>
      </motion.div>

      {/* ================= STEPS ================= */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative">

        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="relative text-center px-4 sm:px-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {/* ICON */}
            <div className="flex justify-center mb-4 md:mb-5">
              <Image
                src={step.icon}
                alt={step.title}
                width={36}
                height={36}
                className="object-contain md:w-[42px] md:h-[42px]"
              />
            </div>

            {/* TITLE */}
            <h4 className="heading-md text-base md:text-lg mb-2 md:mb-3">
              {step.title}
            </h4>

            {/* DESCRIPTION */}
            <p className="text-muted font-secondary text-sm leading-relaxed max-w-sm mx-auto">
              {step.desc}
            </p>

            {/* DESKTOP VERTICAL DIVIDER */}
            {i < steps.length - 1 && (
              <span
                className="
                  hidden md:block
                  absolute top-10 right-0
                  h-48 w-px
                  bg-primary/60
                "
              />
            )}

            {/* MOBILE HORIZONTAL DIVIDER */}
            {i < steps.length - 1 && (
              <span
                className="
                  block md:hidden
                  mx-auto mt-8
                  h-px w-24
                  bg-primary/40
                "
              />
            )}
          </motion.div>
        ))}

      </div>
    </section>
  );
}
