"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ApproachHero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT: Sticky Cinematic Image */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 relative order-1">
             <motion.div
               initial={{ opacity: 0, x: -40, rotateY: -10 }}
               whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
               className="relative aspect-[4/3] lg:aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border border-border bg-white"
             >
               <Image
                 src="/assets/home-sec2.webp"
                 alt="Educators collaborating"
                 fill
                 className="object-cover transition-transform duration-1000 hover:scale-105"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
               <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
             </motion.div>
          </div>

          {/* RIGHT: Narrative Focus */}
          <div className="lg:col-span-6 flex flex-col justify-center min-h-[500px] order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
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

              <p className="section-body text-lg md:text-xl leading-relaxed text-muted mb-10 font-light">
                We don’t arrive with generic solutions. We begin by
                understanding your context, your goals, and your challenges. You
                bring expertise in your community; we bring frameworks,
                research, and external perspectives. We work alongside you to
                ensure the systems we build are sustainable long after our
                partnership ends.
              </p>

              <div className="p-10 rounded-[2.5rem] bg-soft border border-primary/10 relative overflow-hidden group shadow-sm">
                <p className="text-lg md:text-xl font-bold text-foreground italic leading-relaxed relative z-10 transition-colors group-hover:text-primary">
                  "Together, we build approaches that are both aspirational and
                  realistic."
                </p>
                {/* Interactive background element */}
                <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
