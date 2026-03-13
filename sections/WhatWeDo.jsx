"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ── community data ─────────────────────────────────────────────── */
const COMMUNITIES = [
  {
    title: "Educators",
    subtitle: "Sustainable Practice",
    description: "Practical frameworks and job-embedded support to make responsive, differentiated teaching sustainable - not exhausting.",
    href: "/services/for-educators",
    icon: (
      <Image src="/icon/icons-1.svg" alt="Educators Icon" width={64} height={64} className="h-16 w-auto object-contain drop-shadow-sm" />
    ),
    button: "Explore Services for Educators",
    accent: "#10b981",      /* emerald */
    accentLight: "#d1fae5",
    num: "01",
  },
  {
    title: "School Leaders",
    subtitle: "Strategic Partnership",
    description: "Systems thinking and strategic partnership to build the culture, capacity, and infrastructure for lasting educational change.",
    href: "/services/for-leaders",
    button: "Explore Services for Leaders",
    icon: (
      <Image src="/icon/icons-3.svg" alt="School Leaders Icon" width={64} height={64} className="h-16 w-auto object-contain drop-shadow-sm" />
    ),
    accent: "#6366f1",      /* indigo */
    accentLight: "#e0e7ff",
    num: "02",
  },
  {
    title: "Parents",
    subtitle: "Family Empowerment",
    description: "Professional support to understand your child's unique learning profile and become a confident, effective advocate in their education.",
    href: "/services/for-parents",
    button: "Explore Services for Parents",
    icon: (
      <Image src="/icon/icons-2.svg" alt="Parents Icon" width={64} height={64} className="h-16 w-auto object-contain drop-shadow-sm" />
    ),
    accent: "#A066AA",      /* brand primary */
    accentLight: "#f3e8ff",
    num: "03",
  },
];

/* ── 3-D card variants ──────────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -12, scale: 0.94 },
  show: (i) => ({
    opacity: 1, y: 0, rotateX: 0, scale: 1,
    transition: { duration: 0.75, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #faf7fc 0%, #ffffff 100%)" }}
    >
      {/* ── floating 3-D orbs (parallax) ── */}
      <motion.div className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full opacity-25 blur-[90px]"
        aria-hidden style={{ y: y1, background: "linear-gradient(135deg, #A066AA 0%, #7a45a0 60%, #4e2a7a 100%)" }} />
      <motion.div className="pointer-events-none absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full opacity-15 blur-[80px]"
        aria-hidden style={{ y: y2, background: "radial-gradient(circle, #E2C473, transparent 70%)" }} />

      {/* ── 3-D perspective grid in bg ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "linear-gradient(#A066AA 1px, transparent 1px), linear-gradient(90deg, #A066AA 1px, transparent 1px)", backgroundSize: "60px 60px", perspective: "600px", transform: "rotateX(55deg) scale(2.5)", transformOrigin: "bottom" }} />

      <div className="container-max relative z-10 py-24 md:py-32">

        {/* ── heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 mb-5">
            <span className="h-[2px] w-6 rounded-full" style={{ background: "#A066AA" }} />
            <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: "#A066AA" }}>Who We Do</p>
          </span>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.12] tracking-tight text-[#171717]">
            Supporting your<br />
            <span style={{
              background: "linear-gradient(135deg, #A066AA 0%, #7a45a0 60%, #4e2a7a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>educational community</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#6b7280]" style={{ fontFamily: "var(--font-secondary)" }}>
            Real change happens when educators, leaders, and parents work together. We partner with all three.
          </p>
        </motion.div>

        {/* ── 3-D cards grid ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3" style={{ perspective: "1200px" }}>
          {COMMUNITIES.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, rotateX: 3, rotateY: i === 0 ? 2 : i === 2 ? -2 : 0, scale: 1.02, transition: { duration: 0.3 } }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="group relative h-full rounded-[24px] overflow-hidden border border-[#e5e7eb] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]">

                {/* top accent line */}
                {/* <div className="h-[3px] w-full" style={{ background: item.accent }} /> */}

                <div className="p-8">
                  {/* number + icon row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-16 items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-4xl font-black leading-none" style={{ color: item.accent + "18" }}>{item.num}</span>
                  </div>

                  {/* text */}
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: item.accent }}>
                    {item.subtitle}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-[#171717]">{item.title}</h3>
                  <p className="text-[15px] leading-7 text-[#6b7280]" style={{ fontFamily: "var(--font-secondary)" }}>
                    {item.description}
                  </p>

                  {/* cta */}
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                    style={{ color: item.accent }}
                  >
                    {item.button}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* 3D shine layer */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]"
                  style={{ background: `linear-gradient(135deg, ${item.accent}08 0%, transparent 60%)` }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── bottom image strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: -6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: "preserve-3d", perspective: "800px" }}
          className="mt-16 relative rounded-[28px] overflow-hidden h-[200px] md:h-[260px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
        >
          <Image src="/about-web.jpg" alt="Educational community" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #A066AAcc 0%, #A066AA44 40%, transparent 70%)" }} />
          <div className="absolute inset-0 flex items-center px-10 md:px-14">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#E2C473] mb-2">Trusted by schools across India</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Real change happens when<br className="hidden md:block" /> your whole community aligns.
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
