"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const COMMUNITIES = [
  {
    title: "Educators",
    subtitle: "Sustainable Practice",
    description:
      "Practical frameworks and job-embedded support to make responsive practice sustainable.",
    href: "/services/for-educators",
    button: "Explore Services",
    image: "/approach.jpg",
    accent: "var(--secondary)",
    icon: "/icon/icons-1.svg",
  },
  {
    title: "School Leaders",
    subtitle: "Strategic Partnership",
    description:
      "Strategic partnership to build the systems, culture, and capacity for meaningful educational change.",
    href: "/services/for-leaders",
    button: "Strategic Roadmap",
    image: "/about-web.jpg",
    accent: "var(--primary)",
    icon: "/icon/icons-3.svg",
  },
  {
    title: "Parents",
    subtitle: "Family Empowerment",
    description:
      "Professional support to understand your child’s learning profile and advocate effectively.",
    href: "/services/for-parents",
    button: "Family Support",
    image: "/approach.jpg",
    accent: "#10b981",
    icon: "/icon/icons-2.svg",
  },
];

export default function ModernWhatWeDo() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white"
      style={{ zIndex: "var(--z-base)" }}
    >
      {/* 1. Cinematic Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [0.1, 0.2, 0.1],
            ),
            backgroundColor: "var(--primary)",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px]"
        />
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* 2. LEFT: Sticky Branding & Narrative */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center px-8 md:px-20 py-24 lg:py-0 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">
              01 — Ecosystem
            </span>
            <h2 className="heading-xl leading-[0.9] tracking-tighter mb-8">
              We work with three <br />
              <span className="text-white/40 italic font-light">
                interconnected
              </span>{" "}
              <br />
              communities.
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-primary to-secondary mb-8" />
            <p className="text-white/50 max-w-sm font-light leading-relaxed">
              Real change happens when educators, leaders, and parents align. We
              provide the structural support to make it happen.
            </p>
          </motion.div>
        </div>

        {/* 3. RIGHT: The Stacking Experience */}
        <div className="w-full lg:w-1/2 px-4 md:px-12 pb-32">
          {COMMUNITIES.map((card, i) => (
            <CommunityCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityCard({ card, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div
      ref={cardRef}
      className="h-screen flex items-center sticky top-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative w-full h-[600px] md:h-[700px] rounded-[var(--radius-lg)] overflow-hidden bg-[#0d0d0d] border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.5)] group"
      >
        {/* Background Visual Layer */}
        <div className="absolute inset-0">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Card Content Grid */}
        <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
          {/* Header Row */}
          <div className="flex items-center gap-6 mb-10">
            <div className="p-4 rounded-[var(--radius-md)] bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-colors">
              <Image
                src={card.icon}
                alt=""
                width={36}
                height={36}
                className="invert opacity-80"
              />
            </div>
            <div className="h-[1px] flex-grow bg-white/10" />
            <span className="text-5xl font-black text-white/5 tabular-nums">
              0{index + 1}
            </span>
          </div>

          {/* Typography */}
          <p
            className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3"
            style={{ color: card.accent }}
          >
            {card.subtitle}
          </p>
          <h3 className="heading-lg mb-6 tracking-tight text-white leading-none">
            {card.title}
          </h3>
          <p className="text-white/50 text-lg leading-relaxed max-w-md mb-12 font-light">
            {card.description}
          </p>

          {/* LIQUID MAGNETIC BUTTON */}
          <Link
            href={card.href}
            className="group/btn relative inline-flex items-center gap-8 overflow-hidden rounded-2xl bg-white px-8 py-5 text-black transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-2xl w-fit"
          >
            <div className="relative z-10 flex flex-col items-start">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40 group-hover/btn:opacity-60 transition-opacity">
                Pathway
              </span>
              <span className="text-base font-bold tracking-tight leading-none">
                {card.button}
              </span>
            </div>

            <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-black/5 transition-all duration-500 group-hover/btn:bg-black group-hover/btn:text-white group-hover/btn:rotate-[360deg]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Liquid Background Slide */}
            <div
              className="absolute inset-0 -z-0 translate-y-[101%] transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover/btn:translate-y-0"
              style={{ backgroundColor: card.accent }}
            />
          </Link>
        </div>

        {/* Industrial Accent Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.div>
    </div>
  );
}
