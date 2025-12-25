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
      <div className="
        container
        grid grid-cols-12
        gap-8 sm:gap-10 md:gap-14
        items-center
      ">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          className="
            col-span-12 md:col-span-6
            space-y-4 sm:space-y-5
            text-center md:text-left
          "
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* TITLE */}
          <h2 className="heading-lg text-lg sm:text-xl md:text-3xl">
            {title}
          </h2>

          {/* INTRO */}
          <p className="text-muted font-secondary text-sm sm:text-base max-w-xl mx-auto md:mx-0">
            {intro}
          </p>

          {/* HIGHLIGHT POINTS */}
          <div className="space-y-3 pt-1 text-left max-w-xl mx-auto md:mx-0">
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
          <p className="text-muted font-secondary text-sm sm:text-base max-w-xl mx-auto md:mx-0 pt-2">
            {description}
          </p>

          {/* ACCENT LINE */}
          <div className="border-t border-secondary w-20 mx-auto md:mx-0 pt-2" />
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          className="
            col-span-12 md:col-span-6
            flex justify-center md:justify-end
            mt-6 md:mt-0
          "
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
            priority
            className="
              w-full
              max-w-xs sm:max-w-sm md:max-w-md
              rounded
              object-cover
            "
          />
        </motion.div>

      </div>
    </section>
  );
}
