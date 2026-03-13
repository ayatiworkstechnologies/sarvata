"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/* ── differentiator data ──────────────────────────────────────── */
const ITEMS = [
  {
    title: "Grounded in Practice",
    description: "We're educators who've lived the gap between vision and reality. Our frameworks are shaped by classrooms, not just research papers.",
    icon: "M12 3v1m0 16v1m8.66-13l-.87.5M4.21 16.5l-.87.5M20.66 16.5l-.87-.5M4.21 7.5l-.87-.5M21 12h-1M4 12H3",
    color: "#10b981",
    bg: "rgba(16,185,129,0.10)",
  },
  {
    title: "Systems Thinking",
    description: "Real change isn't one workshop. We address culture, pedagogy, and operational systems in tandem so improvements compound.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.10)",
  },
  {
    title: "Building Independence",
    description: "We build your internal capacity, not dependence on us. Success is when our approaches become how you naturally operate.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    color: "#E2C473",
    bg: "rgba(226,196,115,0.15)",
  },
  {
    title: "Sustained Partnership",
    description: "We stay through implementation. Showing up for after the workshop is where the most important work happens.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
    color: "#A066AA",
    bg: "rgba(160,102,170,0.10)",
  },
];

/* ── floating particle ──────────────────────────────────────────── */
function Particle({ x, y, size, color, delay }) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{ left: x, top: y, width: size, height: size, background: color }}
      animate={{ y: [0, -18, 0], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function OurApproach() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-24 md:py-32">

      {/* ── particles ── */}
      {[
        { x: "8%",  y: "15%", size: 10, color: "#A066AA40", delay: 0 },
        { x: "85%", y: "20%", size: 7,  color: "#E2C47360", delay: 1.2 },
        { x: "70%", y: "70%", size: 12, color: "#6366f130", delay: 0.7 },
        { x: "20%", y: "75%", size: 8,  color: "#10b98130", delay: 1.8 },
        { x: "50%", y: "10%", size: 6,  color: "#A066AA50", delay: 2.4 },
      ].map((p, i) => <Particle key={i} {...p} />)}

      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full blur-[120px] opacity-20"
        style={{ background: "linear-gradient(135deg, #A066AA 0%, #7a45a0 60%, #4e2a7a 100%)" }} />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-[100px] opacity-10"
        style={{ background: "radial-gradient(circle, #E2C473, transparent 70%)" }} />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">

          {/* ══ LEFT — 3D Image Stack ══ */}
          <div className="relative h-[520px] hidden lg:block" style={{ perspective: "1000px" }}>

            {/* back plate */}
            <motion.div
              initial={{ opacity: 0, rotateY: -15, x: -40 }}
              whileInView={{ opacity: 1, rotateY: -6, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: imgY, transformStyle: "preserve-3d" }}
              className="absolute -left-6 top-8 h-[88%] w-[88%] rounded-[28px] border border-[#A066AA20]"
              aria-hidden
            >
              <div className="h-full w-full rounded-[28px]" style={{ background: "linear-gradient(135deg, #f3e8ff, #faf7fc)" }} />
            </motion.div>

            {/* main image */}
            <motion.div
              initial={{ opacity: 0, rotateY: 10, rotateX: 4, scale: 0.95 }}
              whileInView={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotateY: -3, rotateX: 2, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
              className="absolute inset-0 rounded-[28px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.18)] border border-white/80"
            >
              <motion.div style={{ y: imgY }} className="h-full w-full">
                <Image src="/home-contact.jpg" alt="Educators collaborating" fill className="object-cover" />
              </motion.div>
              {/* overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(78,42,122,0.45) 0%, rgba(160,102,170,0.15) 50%, transparent 100%)" }} />
            </motion.div>


          </div>

          {/* ══ RIGHT — text + items ══ */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-2 mb-5">
                <span className="h-[2px] w-6 rounded-full" style={{ background: "#A066AA" }} />
                <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: "#A066AA" }}>Our Approach</p>
              </span>
              <h2 className="text-4xl font-bold leading-[1.12] tracking-tight text-[#171717] md:text-5xl mb-5">
                Partnership,<br />
                <span style={{
                  background: "linear-gradient(135deg, #A066AA 0%, #7a45a0 60%, #4e2a7a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Not Prescription</span>
              </h2>
              <p className="text-[17px] leading-8 text-[#6b7280]" style={{ fontFamily: "var(--font-secondary)" }}>
                We don't arrive with generic solutions. We begin by understanding your context, goals, and challenges—then co-create approaches that are both aspirational and realistic.
              </p>
            </motion.div>

            <div className="space-y-5">
              {ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="group flex gap-4 items-start rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-[#e5e7eb] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                  style={{ background: "transparent" }}
                >
                  {/* icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110"
                    style={{ background: item.bg, color: item.color }}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  {/* text */}
                  <div>
                    <h4 className="mb-1 text-[16px] font-bold text-[#171717]">{item.title}</h4>
                    <p className="text-[14px] leading-6 text-[#6b7280]" style={{ fontFamily: "var(--font-secondary)" }}>
                      {item.description}
                    </p>
                  </div>
                  {/* arrow */}
                  <div className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                    <svg className="h-4 w-4" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
