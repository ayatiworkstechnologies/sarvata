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
    image: "/assets/home-sec-3-1.webp",
    accent: "var(--primary)",
  },
  {
    title: "Systems Thinking",
    description:
      "We address culture, pedagogy, and operational systems together.",
    icon: "/icon/2.svg",
    image: "/assets/home-sec-3-2.webp",
    accent: "#6366f1",
  },
  {
    title: "Building Independence",
    description: "Our goal is your capacity, not your dependency.",
    icon: "/icon/3.svg",
    image: "/assets/home-sec-3-3.webp",
    accent: "var(--secondary)",
  },
  {
    title: "Sustained Partnership",
    description: "We support implementation, not just deliver workshops.",
    icon: "/icon/4.svg",
    image: "/assets/home-sec-3-4.webp",
    accent: "var(--primary)",
  },
];

export default function ApproachFeatures() {
  return (
    <section className="bg-soft/40 py-6 md:py-12">
      <div className="container-max">
        <div className="mb-16 flex flex-col items-center text-center">
          <h3 className="text-xs font-black uppercase tracking-[0.4em] text-muted mb-4">
            What Makes Us Different
          </h3>
          <div className="h-1 w-12 bg-primary/20 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIATORS.map((item, i) => (
            <FeatureCard key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item, i }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Suble Parallax: Image moves from 15% to -15% during the scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: i * 0.1,
        ease: [0.21, 1, 0.36, 1],
      }}
      className="group relative flex flex-col rounded-[32px] bg-white border border-border shadow-sm hover:shadow-xl transition-all overflow-hidden"
    >
      {/* 1. Cinematic Header with Parallax */}
      <div className="relative h-44 w-full overflow-hidden">
        <motion.div
          style={{ y, height: "130%", top: "-15%" }}
          className="relative w-full"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
        {/* Subtle top edge highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-40" />
      </div>

      {/* 2. Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Icon & Title Row */}
        <div className="flex items-center gap-4 mb-5">
          <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-soft border border-border flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
            <Image
              src={item.icon}
              alt=""
              width={22}
              height={22}
              className="group-hover:scale-110 transition-transform"
            />
          </div>
          <h4 className="text-[17px] font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
            {item.title}
          </h4>
        </div>

        <p className="text-[14px] leading-relaxed text-muted font-medium">
          {item.description}
        </p>
      </div>

      {/* 3. Mechanical Progress Line */}
      <div
        className="absolute bottom-0 left-8 right-8 h-1 rounded-t-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
        style={{ background: item.accent }}
      />
    </motion.div>
  );
}
