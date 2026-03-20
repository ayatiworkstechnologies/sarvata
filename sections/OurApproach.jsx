"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const DIFFERENTIATORS = [
  {
    title: "Grounded in Practice",
    description:
      "We’re educators who’ve lived the gap between vision and reality.",
    icon: "/icon/1.svg",
    accent: "var(--primary)",
  },
  {
    title: "Systems Thinking",
    description:
      "We address culture, pedagogy, and operational systems together.",
    icon: "/icon/2.svg",
    accent: "#6366f1",
  },
  {
    title: "Building Independence",
    description: "Our goal is your capacity, not your dependency.",
    icon: "/icon/3.svg",
    accent: "var(--secondary)",
  },
  {
    title: "Sustained Partnership",
    description: "We support implementation, not just deliver workshops.",
    icon: "/icon/4.svg",
    accent: "var(--primary)",
  },
];

export default function OurApproach() {
  const targetRef = useRef(null);

  return (
    <section ref={targetRef} className="relative bg-white py-24 md:py-32">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* LEFT SIDE: Sticky Content (Our Approach) */}
          <div className="w-full lg:w-5/12">
            <div className="lg:sticky lg:top-32">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">
                Our Approach
              </span>
              <h2 className="heading-xl mb-8 leading-[1.1]">
                Partnership, <br />
                <span className="text-primary italic">Not Prescription</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8 max-w-md">
                We don’t arrive with generic solutions. We begin by
                understanding your context, your goals, and your challenges. You
                bring expertise in your community. We bring frameworks,
                research, and external perspectives.
              </p>
              <div className="p-6 rounded-[var(--radius-lg)] bg-soft border border-border/50">
                <p className="text-sm font-bold text-foreground italic">
                  "Together, we build approaches that are both aspirational and
                  realistic."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Differentation List */}
          <div className="w-full lg:w-7/12">
            <div className="mb-12">
              <h3 className="text-2xl font-bold tracking-tight text-foreground uppercase border-b border-border pb-4 mb-8">
                What Makes Us Different
              </h3>
              <div className="flex flex-col gap-6">
                {DIFFERENTIATORS.map((item, i) => (
                  <DifferentiatorCard key={i} item={item} index={i} />
                ))}
              </div>
            </div>

            {/* Large Display Image (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative h-64 w-full rounded-[var(--radius-lg)] overflow-hidden mt-12 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
            >
              <Image
                src="/approach.jpg"
                alt="Partnership focus"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferentiatorCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group flex gap-6 p-8 rounded-[var(--radius-md)] bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all"
    >
      <div className="flex-shrink-0">
        <div className="h-14 w-14 rounded-2xl flex items-center justify-center bg-soft border border-border group-hover:bg-primary/5 transition-colors">
          <Image src={item.icon} alt="" width={32} height={32} />
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <p className="text-muted leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}
