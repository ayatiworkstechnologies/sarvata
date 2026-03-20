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
    button: "Explore Services for Educators",
    image: "/approach.jpg",
    accent: "var(--secondary)" /* Brand Gold */,
    icon: "/icon/icons-1.svg",
  },
  {
    title: "School Leaders",
    subtitle: "Strategic Partnership",
    description:
      "Strategic partnership to build the systems, culture, and capacity for meaningful educational change.",
    href: "/services/for-leaders",
    button: "Explore Services for Leaders",
    image: "/about-web.jpg",
    accent: "var(--primary)" /* Brand Purple */,
    icon: "/icon/icons-3.svg",
  },
  {
    title: "Parents",
    subtitle: "Family Empowerment",
    description:
      "Professional support to understand your child’s learning profile and advocate effectively.",
    href: "/services/for-parents",
    button: "Explore Services for Parents",
    image: "/approach.jpg",
    accent: "#10b981" /* Accent Green */,
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
      {/* Background Ambience - Using Theme Primary */}
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
        {/* LEFT: Sticky Intro Content */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center px-8 md:px-20 py-24 lg:py-0 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">
              What We Do
            </span>
            <h2 className="heading-xl leading-[0.9] tracking-tighter mb-8">
              We work with three <br />
              <span className="text-white/40 italic font-light">
                interconnected
              </span>{" "}
              <br />
              communities.
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mb-8" />
          </motion.div>
        </div>

        {/* RIGHT: The Stacking Experience */}
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

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div
      ref={cardRef}
      className="h-screen flex items-center sticky top-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative w-full h-[580px] md:h-[680px] rounded-[var(--radius-lg)] overflow-hidden bg-[#111111] border border-white/5 shadow-2xl group"
      >
        {/* Background Visual */}
        <div className="absolute inset-0">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* Content Body */}
        <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 rounded-[var(--radius-md)] bg-white/5 backdrop-blur-xl border border-white/10">
              <Image
                src={card.icon}
                alt=""
                width={36}
                height={36}
                className="invert"
              />
            </div>
            <div className="h-[1px] flex-grow bg-white/10" />
            <span className="text-5xl font-black text-white/5 tabular-nums">
              0{index + 1}
            </span>
          </div>

          <p
            className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
            style={{ color: card.accent }}
          >
            {card.subtitle}
          </p>
          <h3 className="heading-lg mb-6 tracking-tight text-white">
            {card.title}
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-10 font-light">
            {card.description}
          </p>

          <Link
            href={card.href}
            className="btn-modern bg-white text-black hover:bg-soft"
          >
            <span className="text-sm font-black uppercase tracking-wider">
              {card.button}
            </span>
            <div className="transition-transform group-hover:translate-x-1 ml-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>
        </div>

        {/* Top Glow Accent using Theme White/Opacity */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.div>
    </div>
  );
}
