"use client";

import { motion } from "framer-motion";

export default function MissionSection({ title, highlight, description }) {
  return (
    <section className="section bg-gray-50">
      <motion.div
        className="
          max-w-3xl mx-auto
          px-2 sm:px-0
          text-center
        "
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* TITLE */}
        <h2
          className="
            heading-xl
            mb-4
            text-2xl sm:text-3xl md:text-4xl
          "
        >
          {title}
        </h2>

        {/* HIGHLIGHT */}
        <p
          className="
            text-primary font-semibold
            mb-4
            text-base sm:text-lg
          "
        >
          {highlight}
        </p>

        {/* DESCRIPTION */}
        <p
          className="
            text-muted font-secondary
            text-sm sm:text-base
            leading-relaxed
          "
        >
          {description}
        </p>
      </motion.div>
    </section>
  );
}
