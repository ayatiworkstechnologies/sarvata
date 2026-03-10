"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SupportGridSection({
  eyebrow,
  title,
  items = [],
}) {
  const itemCount = items.length;

  /* ===== GRID VARIANTS ===== */
  const gridCols =
    itemCount === 3
      ? "lg:grid-cols-3 lg:max-w-5xl"
      : itemCount === 2
      ? "lg:grid-cols-2 lg:max-w-4xl"
      : "lg:grid-cols-4";

  return (
    <section className="section bg-[#f6f6f6]">
      <div className="container">

        {/* ================= HEADER ================= */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <span className="inline-block text-lg font-medium border border-secondary px-4 py-1 bg-secondary text-white rounded mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="heading-xl">{title}</h2>
        </motion.div>

        {/* ================= GRID ================= */}
        <div
          className={`
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            ${gridCols}
            gap-4
          `}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="
                bg-white
                rounded
                p-6
                flex flex-col
                justify-between
                hover:shadow-md
                transition-all
              "
            >
              {/* ICON */}
              <div className="mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={35}
                  height={35}
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <h4 className="font-semibold text-2xl mb-3">
                  {item.title}
                </h4>
                <p className="text-muted font-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* FOOTER */}
              <div className="pt-5 mt-5 border-t border-secondary/40">
                <Link
                  href={item.href}
                  className="
                    inline-flex items-center gap-2
                    text-lg font-medium text-primary
                    hover:translate-x-1
                    transition-transform
                  "
                >
                  Learn More <span className="text-secondary">›</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
