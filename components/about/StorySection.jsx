"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StorySection({
  image,
  title,
  subtitle,
  paragraphs,
}) {
  return (
    <section className="section">
      <div className="container grid grid-cols-12 gap-12 items-center">

        {/* IMAGE */}
        <motion.div
          className="col-span-12 md:col-span-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={image}
            alt={title}
            width={500}
            height={600}
            className="rounded"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="col-span-12 md:col-span-7"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="heading-xl mb-3">{title}</h2>
          <h3 className="heading-lg mb-4">{subtitle}</h3>

          {paragraphs.map((p, i) => (
            <p key={i} className="text-muted font-secondary mb-4">
              {p}
            </p>
          ))}

          <div className="border-t border-secondary w-20 mt-6" />
        </motion.div>

      </div>
    </section>
  );
}
