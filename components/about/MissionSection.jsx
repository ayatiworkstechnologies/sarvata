"use client";

import { motion } from "framer-motion";

export default function MissionSection({ title, highlight, description }) {
  return (
    <section className="section bg-gray-50">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-xl mb-4">{title}</h2>
        <p className="text-primary font-semibold mb-4">
          {highlight}
        </p>
        <p className="text-muted font-secondary">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
