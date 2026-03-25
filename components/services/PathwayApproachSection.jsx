"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { FloatingShapes, SubtleGrid } from "@/components/VectorDecorations";
import Image from "next/image";

export default function PathwayApproachSection({
  eyebrow = "Our Approach",
  title,
  items = [],
  image,
}) {
  return (
    <section className="relative bg-[#faf9ff] py-6 md:py-12">
      {/* Background decoration */}
      <SubtleGrid />
      <FloatingShapes />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container-max relative z-10">
        {/* items-start is crucial for sticky to work correctly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* LEFT: Sticky Cinematic Image */}
          {/* We set a height/min-height on the container to define the 'track' for sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl border-[8px] border-white bg-white"
            >
              <Image
                src={image || "/about.jpg"}
                alt={title || "Our Approach"}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* RIGHT: Content & Cards (The Scrolling Part) */}
          <div className="lg:col-span-7 flex flex-col pb-20">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="mb-10"
            >
              <p className="eyebrow">
                {eyebrow}
              </p>
              <SectionHeading title={title} className="" />
            </motion.div>

            {/* Approach Items Stack */}
            <div className="flex flex-col gap-8 lg:gap-12">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative rounded-[2.5rem] bg-white border border-slate-100 p-8 md:p-12 overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(160,102,170,0.1)] hover:border-primary/10 transition-all duration-500"
                >
                  <div className="flex flex-col sm:flex-row gap-8 items-start">
                    {/* Number Badge */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                        <span className="text-2xl font-black text-primary group-hover:text-white transition-colors">
                          {i + 1}
                        </span>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-lg font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle decorative glow inside card */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
