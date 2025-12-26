"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { GrNext } from "react-icons/gr";

export default function MainHero({
  webImage,
  mobileImage,
  alt = "Page banner",
  title,
  breadcrumbs = [],
}) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ================= IMAGE WRAPPER ================= */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative w-full h-[600px] sm:h-[320px] md:h-[400px]"
      >
        {/* WEB IMAGE */}
        <Image
          src={webImage}
          alt={alt}
          fill
          priority
          className="hidden md:block object-cover"
        />

        {/* MOBILE IMAGE */}
        <Image
          src={mobileImage}
          alt={alt}
          fill
          priority
          className="block md:hidden object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="container absolute inset-0 flex items-end">
        <div className="px-15 pb-6 md:pb-10">
          {/* TITLE */}
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="
    text-white
    font-heading
    text-3xl md:text-4xl
    font-semibold
    mb-2
    drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)]
  "
            >
              {title}
            </motion.h1>
          )}

          {/* BREADCRUMB - BOTTOM LEFT */}
          {breadcrumbs.length > 0 && (
            <nav className="text-sm font-secondary text-white/80">
              <ol className="flex items-center justify-start gap-2">
                {/* HOME */}
                <li className="flex items-center gap-1">
                  <HiHome className="text-white text-base" />
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>

                {breadcrumbs.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="opacity-60"> <GrNext /> </span>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="hover:text-white transition"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-white">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
