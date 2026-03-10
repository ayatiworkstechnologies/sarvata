"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [tooltip, setTooltip] = useState({ label: "", x: 0, y: 0, visible: false });

  const seeds = [
    { href: "/pathway-educators", cls: "node-educators", label: "Services for Educators" },
    { href: "/pathway-leaders", cls: "node-leaders", label: "Services for Leaders" },
    { href: "/pathway-parents", cls: "node-parents", label: "Services for Parents" },
  ];

  const showTooltip = (e, label) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({ label, x: rect.left + rect.width / 2, y: rect.top - 10, visible: true });
  };

  return (
    <section className="relative w-full overflow-hidden h-screen">
      <div className="absolute inset-0">
        <video className="absolute inset-0 w-full h-full object-cover" src="/hero.mp4" autoPlay muted playsInline loop />
      </div>

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 container h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold leading-tight mb-4">
            Transforming Educators and Schools, Every Day
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-7">
            We partner with schools, educators, and parents to create truly inclusive,
            learner-centered educational environments.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/pathway-educators" className="btn btn-primary">Explore Services</Link>
            <Link href="/contact" className="btn border border-white text-white hover:bg-white hover:text-black">Schedule a Consultation</Link>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute z-40 pointer-events-none"
        initial={false}
        animate={{ opacity: tooltip.visible ? 1 : 0, left: tooltip.x, top: tooltip.y }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ transform: "translate(-50%, -100%)" }}
      >
        {tooltip.visible && <div className="seed-tooltip">{tooltip.label}</div>}
      </motion.div>

      <motion.div className="absolute inset-0 z-30" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
        {seeds.map((item, i) => (
          <motion.div key={i} variants={{ hidden: { opacity: 0, scale: 0.6 }, visible: { opacity: 1, scale: 1 } }}>
            <Link
              href={item.href}
              className={`static-node ${item.cls}`}
              onMouseEnter={(e) => showTooltip(e, item.label)}
              onMouseLeave={() => setTooltip((p) => ({ ...p, visible: false }))}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
