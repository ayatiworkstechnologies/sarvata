"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhilosophySection({ title, intro, image, points }) {
  return (
    <section className="section">
      <div className="container grid grid-cols-12 gap-12 items-start">
        {/* ================= LEFT — STICKY IMAGE + INTRO ================= */}
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
          {/* CONTENT WRAPPER — controls width */}
          <div className=" ">
            {/* TITLE */}
            <h2 className="heading-lg">{title}</h2>

            {/* INTRO */}
            <p className="text-muted font-secondary">{intro}</p>

            {/* ACCENT LINE */}
            <div className="border-t border-secondary w-16 mb-5" />

            {/* IMAGE — fits exactly same width */}
            <Image
              src={image}
              alt={title}
              width={420}
              height={520}
              className="w-full h-auto rounded object-cover"
            />
          </div>
        </motion.div>

        {/* ================= RIGHT — SCROLL AREA (HIDDEN SCROLLBAR) ================= */}
        <motion.div
          className="
            col-span-12 md:col-span-7
            md:overflow-y-auto
            space-y-12
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
              className="relative pl-10"
            >
              {/* NUMBER */}
              <span className="absolute left-0 top-0 text-secondary font-semibold">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h4 className="heading-md mb-2">{item.title}</h4>

              <p className="text-muted font-secondary leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
