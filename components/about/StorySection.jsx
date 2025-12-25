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
      <div className="container grid grid-cols-12 gap-8 md:gap-12 items-center">

        {/* IMAGE */}
        <motion.div
          className="
            col-span-12 md:col-span-5
            flex justify-center md:justify-start
          "
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
            className="
              rounded
              w-full
              max-w-xs sm:max-w-sm md:max-w-full
              h-auto
              object-cover
            "
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="
            col-span-12 md:col-span-7
            text-center md:text-left
          "
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* TITLE */}
          <h2 className="heading-xl text-2xl sm:text-3xl md:text-4xl mb-2">
            {title}
          </h2>

          {/* SUBTITLE */}
          <h3 className="heading-lg text-lg sm:text-xl md:text-2xl mb-4">
            {subtitle}
          </h3>

          {/* PARAGRAPHS */}
          <div className="space-y-4 max-w-2xl mx-auto md:mx-0">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="
                  text-muted font-secondary
                  text-sm sm:text-base
                  leading-relaxed
                "
              >
                {p}
              </p>
            ))}
          </div>

          {/* ACCENT LINE */}
          <div className="border-t border-secondary w-20 mt-6 mx-auto md:mx-0" />
        </motion.div>

      </div>
    </section>
  );
}
