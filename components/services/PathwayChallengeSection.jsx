"use client";

import { motion } from "framer-motion";
import { FloatingShapes, SubtleGrid } from "@/components/VectorDecorations";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

export default function PathwayChallengeSection({
  eyebrow,
  title,
  paragraphs,
  accentColor = "primary",
  image,
}) {
  return (
    <section className="relative bg-white overflow-hidden py-6 md:py-12">
      {/* Background decoration */}
      <SubtleGrid />
      <FloatingShapes />

      {/* Subtle background blobs (Legacy kept for layering) */}
      <div className="pointer-events-none absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-secondary/8 blur-[100px]" />

      <div className="container-max relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: large decorative number + eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="flex flex-col justify-center"
        >
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <SectionHeading title={title} className="text-foreground" />

          {/* Accent bar */}
          <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-primary to-secondary mb-8" />

          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="section-body leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right: Visual card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-[40px] shadow-2xl border-[10px] border-white">
            <Image
              src={image || "/approach.jpg"}
              alt={title || "Pathway Challenge"}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Ambient Shine Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
