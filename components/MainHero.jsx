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
        className="relative w-full h-[500px] sm:h-[380px] md:h-[460px]"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10" />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="absolute inset-0 flex items-end">
        <div className="container px-4 md:px-0 pb-8 md:pb-12">
          {/* TITLE */}
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="
                text-white
                text-3xl md:text-4xl lg:text-5xl
                font-bold
                mb-3
                drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]
              "
            >
              {title}
            </motion.h1>
          )}

          {/* BREADCRUMB */}
          {breadcrumbs.length > 0 && (
            <nav className="text-sm font-secondary text-white/80">
              <ol className="flex items-center gap-2">
                <li className="flex items-center gap-1">
                  <HiHome className="text-white text-base" />
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>

                {breadcrumbs.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <GrNext className="opacity-60 text-xs" />
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
