"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StorySection({
  id,
  title,
  subtitle,
  paragraphs,
  image,
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      id={id}
      className="relative bg-[#faf9ff] py-12 lg:py-18 overflow-hidden"
    >
      {/* ── BACKGROUND ACCENTS ── */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 -z-0 hidden lg:block" />
      <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max relative z-10">
        {/* ── SECTION 1: THE STORY (NON-CARD DESIGN) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-12">
          {/* Image Column: Cinematic Portal */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-[60px] shadow-2xl border-[12px] border-white"
            >
              <motion.div
                style={{ y, height: "120%", top: "-10%" }}
                className="relative w-full"
              >
                <Image
                  src={image || "/about.jpg"}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-1000"
                  priority
                />
              </motion.div>

              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.div>
          </div>

          {/* Text Column: Staggered Reveal */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow text-primary mb-6 block">{title}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-10 leading-[0.9] tracking-tighter">
                {subtitle}
              </h2>

              <div className="space-y-8">
                {paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    className={`text-lg md:text-xl leading-relaxed font-light ${
                      p.startsWith("At the heart") 
                        ? "text-primary font-medium" 
                        : "text-muted-foreground"
                    }`}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
