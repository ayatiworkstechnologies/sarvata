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
    { href: "/services/for-educators", cls: "node-educators", label: "for Educators " },
    { href: "/services/for-leaders", cls: "node-leaders", label: "for Leaders " },
    { href: "/services/for-parents", cls: "node-parents", label: "for Parents " },
    { href: "#", cls: "node-learners", label: "for Learners " },
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
      <div className="pointer-events-none absolute top-0 left-0 w-full h-screen z-20 flex items-end justify-between p-6 pb-10 md:p-14 md:pb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-[10px] md:text-[12px] mt-4 uppercase tracking-[0.3em] text-primary font-semibold mb-4"
          >
            Sarvata
          </motion.p> */}
          <h1 className="text-3xl font-bold leading-[1.15] text-white md:text-5xl lg:text-7xl tracking-tight">
            Transforming <br /> Educators &<br />
            <span className="font-extrabold text-primary">Schools, Every Day</span>
          </h1>
          <p className="mt-4 md:mt-6 max-w-[90%] md:max-w-xl text-[15px] md:text-[17px] leading-relaxed text-white font-secondary">
            We partner with schools, educators, and parents to create truly
            inclusive, learner-centered educational environments.
          </p>
        </motion.div>

      </div>
      {/* VIDEO */}
      <div className="absolute inset-0 hidden md:block">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="absolute inset-0 block md:hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
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
          <div className="seed-tooltip text-white font-semibold tracking-wide drop-shadow-md bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm border border-white/20 whitespace-nowrap">{tooltip.label}</div>
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
