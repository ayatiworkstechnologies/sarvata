"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* ===== DESKTOP IMAGE ===== */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <Image
          src="/web-banner.jpg"
          alt="Growth and learning"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* ===== MOBILE IMAGE ===== */}
      <motion.div
        className="absolute inset-0 block md:hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <Image
          src="/mobile-banner.jpg"
          alt="Growth and learning"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* ===== SEED NODES ===== */}
      <motion.div
        className="absolute inset-0 z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
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
                transition: { type: "spring", stiffness: 120 }
              }
            }}
          >
            <Link
              href={item.href}
              className={`static-node ${item.cls}`}
            />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
