"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        h-145
      "
    >
      {/* ===== DESKTOP VIDEO ===== */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* ===== MOBILE VIDEO ===== */}
      <motion.div
        className="absolute inset-0 block md:hidden"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* ===== OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* ===== HERO TITLE (optional) ===== */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title intentionally empty */}
      </motion.div>

      {/* ===== SEED NODES ===== */}
      <motion.div
        className="absolute inset-0 z-30"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {[
          { href: "/pathway-educators", cls: "node-educators" },
          { href: "/pathway-leaders", cls: "node-leaders" },
          { href: "/pathway-parents", cls: "node-parents" },
          { href: "/pathway-learners", cls: "node-learners" },
        ].map((item, i) => (
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
            <Link href={item.href} className={`static-node ${item.cls}`} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
