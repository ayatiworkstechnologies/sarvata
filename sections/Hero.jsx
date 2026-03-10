"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [tooltip, setTooltip] = useState({
    label: "",
    x: 0,
    y: 0,
    visible: false,
  });

  const seeds = [
    { href: "/pathway-educators", cls: "node-educators", label: "Educators Pathway" },
    { href: "/pathway-leaders", cls: "node-leaders", label: "Leaders Pathway" },
    { href: "/pathway-parents", cls: "node-parents", label: "Parents Pathway" },
    { href: "/pathway-learners", cls: "node-learners", label: "Learners Pathway" },
  ];

  const showTooltip = (e, label) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setTooltip({
      label,
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      visible: true,
    });
  };

  const hideTooltip = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <section className="relative w-full overflow-hidden h-screen">
      {/* VIDEO */}
      <div className="absolute inset-0 hidden md:block">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          
          playsInline
        />
      </div>

      <div className="absolute inset-0 block md:hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          
          playsInline
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* DYNAMIC TOOLTIP */}
      <motion.div
        className="absolute z-40 pointer-events-none"
        initial={false}
        animate={{
          opacity: tooltip.visible ? 1 : 0,
          scale: tooltip.visible ? 1 : 0.96,
          left: tooltip.x,
          top: tooltip.y,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ transform: "translate(-50%, -100%)" }}
      >
        {tooltip.visible && (
          <div className="seed-tooltip">{tooltip.label}</div>
        )}
      </motion.div>

      {/* SEED NODES */}
      <motion.div
        className="absolute inset-0 z-30"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {seeds.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.6 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { type: "spring", stiffness: 120 },
              },
            }}
          >
            <Link
              href={item.href}
              className={`static-node ${item.cls}`}
              onMouseEnter={(e) => showTooltip(e, item.label)}
              onMouseLeave={hideTooltip}
              onFocus={(e) => showTooltip(e, item.label)}
              onBlur={hideTooltip}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
