"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InsightSplitSection({
  title,
  intro,
  highlights = [],
  description,
  image,
  imageAlt = "",
}) {
  return (
    <section className="section bg-white">
      <div className="container grid grid-cols-12 gap-10 md:gap-14 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          className="col-span-12 md:col-span-6 space-y-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* TITLE */}
          <h2 className="heading-lg text-xl sm:text-2xl md:text-3xl">
            {title}
          </h2>

          {/* INTRO */}
          <p className="text-muted font-secondary text-sm sm:text-base max-w-xl">
            {intro}
          </p>

          {/* HIGHLIGHT POINTS */}
          <div className="space-y-3 pt-2">
            {highlights.map((item, i) => (
              <div key={i} className="relative pl-5">
                <span className="absolute left-0 top-2 w-2 h-px bg-secondary" />
                <p className="font-secondary text-sm sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* DESCRIPTION */}
          <p className="text-muted font-secondary text-sm sm:text-base max-w-xl pt-2">
            {description}
          </p>

          {/* ACCENT LINE */}
          <div className="border-t border-secondary w-20 pt-2" />
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          className="col-span-12 md:col-span-6 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={image}
            alt={imageAlt}
            width={520}
            height={640}
            className="
              w-full
              max-w-xs sm:max-w-sm md:max-w-md
              rounded
              object-cover
            "
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
