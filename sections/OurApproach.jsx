"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ApproachHero() {
  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-16">
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-24">
          {/* LEFT: Sticky Cinematic Image */}
          <div className="relative order-1 lg:col-span-6 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -40, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] overflow-hidden rounded-[40px] border border-border bg-white shadow-2xl lg:aspect-[4/5]"
            >
              <Image
                src="/assets/home-sec2.webp"
                alt="Educators collaborating"
                fill
                className="object-cover object-center transition-transform duration-1000 hover:scale-[1.03]"
                priority
              />
              <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </motion.div>
          </div>

          {/* RIGHT: Narrative Focus */}
          <div className="order-2 flex min-h-[500px] flex-col justify-center lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow">Our Approach</span>
              <h2 className="heading-xl mb-8 leading-[1.1]">
                Partnership, <br />
                <span className="text-gradient text-primary italic font-bold">
                  Not Prescription
                </span>
              </h2>

              <p className="section-body mb-10 text-lg font-light leading-relaxed text-muted md:text-xl">
                We don&apos;t arrive with generic solutions. We begin by
                understanding your context, your goals, and your challenges. You
                bring expertise in your community; we bring frameworks,
                research, and external perspectives. We work alongside you to
                ensure the systems we build are sustainable long after our
                partnership ends.
              </p>

              <div className="group relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-soft p-10 shadow-sm">
                <p className="relative z-10 text-lg font-bold italic leading-relaxed text-foreground transition-colors group-hover:text-primary md:text-xl">
                  &ldquo;Together, we build approaches that are both aspirational
                  and realistic.&rdquo;
                </p>
                {/* Interactive background element */}
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-colors duration-700 group-hover:bg-primary/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
