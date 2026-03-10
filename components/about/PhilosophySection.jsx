"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhilosophySection({ title, intro, image, points }) {
  return (
    <section className="section">
      <div className="container grid grid-cols-12 gap-8 md:gap-12 items-start">
        {/* ================= LEFT - INTRO + IMAGE ================= */}
        <motion.div
          className="
            col-span-12 md:col-span-5
            md:sticky md:top-28
            self-start 
          "
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-sm sm:max-w-md mx-auto md:mx-0 text-center md:text-left">
            {/* TITLE */}
            <h2 className="heading-lg text-xl sm:text-2xl md:text-3xl mb-4">
              {title}
            </h2>

            {/* INTRO */}
            <p className="text-muted font-secondary text-sm sm:text-base mb-5">
              {intro}
            </p>

            {/* ACCENT */}
            <div className="border-t border-secondary w-16 mb-6 mx-auto md:mx-0" />

            {/* IMAGE */}
            <Image
              src={image}
              alt={title}
              width={420}
              height={520}
              className="
                w-full h-auto
                rounded-lg object-cover
              "
            />
          </div>
        </motion.div>

        {/* ================= RIGHT - PHILOSOPHY POINTS ================= */}
        <motion.div
          className="
            col-span-12 md:col-span-7
            space-y-8 sm:space-y-10 md:space-y-12
             md:max-h-[calc(100vh-160px)]
    md:overflow-y-auto
    scrollbar-hide
          "
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-10 max-w-2xl mx-auto md:mx-0"
            >
              {/* NUMBER */}
              <span className="absolute left-0 top-0 text-secondary text-lg sm:text-xl md:text-2xl font-semibold">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h4 className="heading-md mb-2 text-base sm:text-lg">
                {item.title}
              </h4>

              <p className="text-muted font-secondary text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
