"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
export default function Hero() {
  const [tooltip, setTooltip] = useState({
    label: "",
    x: 0,
    y: 0,
    visible: false,
  });

  const seeds = [
    // { href: "/services/for-educators", cls: "node-educators", label: "for Educators " },
    {
      href: "/services/for-leaders",
      cls: "node-leaders",
      label: "for Leaders",
    },
    {
      href: "/services/for-parents",
      cls: "node-parents",
      label: "for Parents",
    },
    {
      href: "/services/for-educators",
      cls: "node-learners",
      label: "for Educators",
    },
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
      <div className="pointer-events-none absolute top-0 inset-0 container-max mx-auto w-full h-screen z-20 flex items-start md:items-end justify-between pt-40 md:pt-0 pb-12 md:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.4 },
            },
          }}
          className="max-w-2xl relative z-20 pointer-events-auto"
        >
          {/* <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-[10px] md:text-[12px] mt-4 uppercase tracking-[0.3em] text-primary font-semibold mb-4"
          >
            Sarvata
          </motion.p> */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="text-2xl font-bold leading-[1.15] text-white md:text-3xl lg:text-4xl tracking-tight mb-2 md:mb-4"
          >
            <span className="text-[#E2C473] drop-shadow-sm inline-block uppercase">
              Building schools where every learner belongs
            </span>{" "}
            <br />
            <span className="inline-block mt-2 font-extrabold text-white drop-shadow-sm uppercase">
              and every educator thrives.
            </span>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-4 md:mt-6 max-w-[85%] md:max-w-md text-[15px] md:text-[17px] leading-relaxed text-white/90 font-secondary"
          >
            We partner with schools, educators, and parents to create truly
            inclusive, learner-centered educational environments.
          </motion.p>
        </motion.div>
      </div>
      {/* VIDEO */}
      <div className="absolute inset-0 hidden md:block">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/home-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="absolute inset-0 block md:hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/home-video-mob.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* OVERLAY & BACKGROUND ACCENTS */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -bottom-[20%] -right-[10%] z-10 pointer-events-none w-[70vw] h-[70vw] max-w-[800px] max-h-[800px]"
      >
        <Image
          src="/logo.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </motion.div>

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
          <div className="seed-tooltip text-white font-semibold tracking-wide drop-shadow-md bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm border border-white/20 whitespace-nowrap">
            {tooltip.label}
          </div>
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
