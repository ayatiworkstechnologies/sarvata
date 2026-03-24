"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ApproachHero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-20">
      <div className="container-max">
        {/* Changed items-center to items-stretch to sync heights */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24">
          {/* LEFT: Cinematic Image Portal (Now Dynamic Height) */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            /* min-h-[450px] ensures it looks good on mobile 
               lg:h-auto + flex-1 allows it to grow with the right-side text
            */
            className="relative w-full lg:flex-1 min-h-[450px] lg:h-auto rounded-[40px] overflow-hidden shadow-2xl border border-border"
          >
            <Image
              src="/assets/home-sec-1.webp"
              alt="Educators collaborating"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />
            {/* Selective Vignette to ground the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />

            {/* Top Industrial Accent */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </motion.div>

          {/* RIGHT: Narrative Focus */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow text-primary mb-6 block">
                Our Approach
              </span>
              <h2 className="heading-xl mb-8 leading-[1.1]">
                Partnership, <br />
                <span className="text-primary italic font-bold text-gradient">
                  Not Prescription
                </span>
              </h2>

              <p className="section-body text-lg leading-relaxed text-muted mb-10">
                We don’t arrive with generic solutions. We begin by
                understanding your context, your goals, and your challenges. You
                bring expertise in your community; we bring frameworks,
                research, and external perspectives. We work alongside you to
                ensure the systems we build are sustainable long after our
                partnership ends.
              </p>

              <div className="p-8 rounded-[var(--radius-lg)] bg-soft border border-primary/10 relative overflow-hidden group">
                <p className="text-base font-bold text-foreground italic leading-relaxed relative z-10">
                  "Together, we build approaches that are both aspirational and
                  realistic."
                </p>
                {/* Interactive background element */}
                <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
