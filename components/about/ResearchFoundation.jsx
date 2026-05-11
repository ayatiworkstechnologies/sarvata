"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ResearchFoundation({ researchTitle, researchText }) {
  return (
    <section className="relative bg-[#fafafa] py-24 lg:py-40 overflow-hidden">
      <div className="container-max">
        {/* items-stretch forces the columns to match the height of the tallest one */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* LEFT: Cinematic Image Portal (Now Dynamic Height) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            /* lg:col-span-5 + lg:h-auto + relative flex: This allows the container 
               to take the full height of the parent grid cell. We need 'relative flex'
               so the absolute-filled Image knows how to scale. 
               min-h-[450px] is a safe fallback for mobile. */
            className="lg:col-span-5 relative w-full flex min-h-[450px] lg:h-auto rounded-[40px] overflow-hidden shadow-2xl border border-border"
          >
            <Image
              src="/assets/about-3.jpg"
              alt="Research & Evidence"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            {/* Subtle brand tint Vignette */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-60" />

            {/* Perspective Detailing (Industrial Vibe) */}
            <div className="absolute top-10 right-10 flex flex-col items-end gap-2">
              <div className="h-1 w-12 bg-white/40 rounded-full" />
              <div className="h-1 w-8 bg-white/20 rounded-full" />
            </div>
          </motion.div>

          {/* RIGHT: High-Contrast Research Card */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-10 md:p-14 rounded-[48px] bg-white border border-primary/10 shadow-[0_30px_70px_rgba(0,0,0,0.04)] overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-secondary to-transparent" />

              <div className="flex items-center gap-4 mb-10">
                <h3 className="eyebrow">{researchTitle}</h3>
              </div>

              <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-[1.6] italic mb-12">
                &ldquo;{researchText}&rdquo;
              </blockquote>

              {/* Refined Industrial Credential Tags */}
              <div className="flex flex-wrap gap-6 items-center border-t border-border pt-10">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-soft border border-border">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                    Evidence-Based
                  </span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-soft border border-border">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                    Context-Aware
                  </span>
                </div>
              </div>

              {/* Ghosted Watermark */}
              <div className="absolute -bottom-6 -right-6 text-[100px] font-black text-black/[0.02] pointer-events-none select-none">
                INTEL
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
