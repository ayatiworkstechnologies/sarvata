"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { LuPuzzle, LuSettings, LuTarget, LuHandshake } from "react-icons/lu";

const DIFFERENTIATORS = [
  {
    title: "Grounded in Practice",
    description:
      "We’re educators who’ve lived the gap between vision and reality.",
    icon: LuPuzzle,
    image: "/assets/home-sec-3-1.webp",
    accent: "var(--primary)",
  },
  {
    title: "Systems Thinking",
    description:
      "We address culture, pedagogy, and operational systems together.",
    icon: LuSettings,
    image: "/assets/home-sec-3-2.webp",
    accent: "var(--secondary)",
  },
  {
    title: "Building Independence",
    description: "Our goal is your capacity, not your dependency.",
    icon: LuTarget,
    image: "/assets/home-sec-3-3.webp",
    accent: "var(--secondary)",
  },
  {
    title: "Sustained Partnership",
    description: "We support implementation, not just deliver workshops.",
    icon: LuHandshake,
    image: "/assets/home-sec-3-4.webp",
    accent: "var(--primary)",
  },
];

export default function ApproachFeatures() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Subtle decorative background gradient instead of dots */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-soft to-transparent" />
      </div>

      <div className="container-max relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="eyebrow">What Makes Us Different</span>
            <h2 className="heading-lg max-w-2xl">
              Our unique approach to{" "}
              <span className="text-primary italic">transformative</span>{" "}
              education
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

  // Balanced Parallax: Image moves within its container
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const Icon = item.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col rounded-[44px] bg-white border border-border/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:border-primary/20 transition-all duration-500 overflow-hidden h-full"
    >
      {/* 1. Cinematic Header with Parallax */}
      <div className="relative h-48 w-full overflow-hidden">
        <motion.div
          style={{ y, height: "110%", top: "-5%" }}
          className="relative w-full"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* 2. Content Area */}
      <div className="p-9 flex flex-col grow">
        {/* Icon & Title Row */}
        <div className="flex flex-col gap-5 mb-5">
          <div className="shrink-0 h-14 w-14 rounded-2xl bg-soft border border-border/40 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/30 group-hover:shadow-inner transition-all duration-500">
            <div className="relative h-7 w-7 flex items-center justify-center">
              <Icon className="w-full h-full transition-transform group-hover:scale-110 text-primary" />
            </div>
          </div>
          <h4 className="text-[19px] font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
            {item.title}
          </h4>
        </div>

        <p className="text-[15px] leading-relaxed text-muted/80 font-medium">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

