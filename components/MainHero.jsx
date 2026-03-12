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
  subtitle,
  breadcrumbs = [],
}) {
  return (
    <section className="relative isolate w-full overflow-hidden">
      {/* Background Image Area */}
      <div className="relative h-[420px] w-full sm:h-[420px] md:h-[520px] lg:h-[600px]">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={webImage}
            alt={alt}
            fill
            priority
            className="hidden object-cover md:block"
          />

          <Image
            src={mobileImage}
            alt={alt}
            fill
            priority
            className="block object-cover md:hidden"
          />
        </motion.div>

        {/* Light premium overlay only */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_35%,rgba(0,0,0,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(160,102,170,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(226,196,115,0.12),transparent_30%)]" />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -left-16 bottom-8 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-12 h-52 w-52 rounded-full bg-secondary/12 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-max pt-20 md:pt-24">
          <div className="max-w-4xl">
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="max-w-3xl text-3xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)] sm:text-4xl md:text-5xl lg:text-6xl"
              >
                {title}
              </motion.h1>
            )}

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-4 max-w-2xl text-[15px] leading-7 text-white/90 drop-shadow-[0_4px_14px_rgba(0,0,0,0.12)] md:mt-5 md:text-lg"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, scaleX: 0.7 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-6 h-[3px] w-24 origin-left rounded-full bg-gradient-to-r from-primary via-secondary to-white/70 md:mt-8"
            />
          </div>
        </div>
      </div>

      {/* Bottom Breadcrumb Bar */}
      {breadcrumbs.length > 0 && (
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-max pb-5 md:pb-6">
            <motion.nav
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="inline-flex max-w-full rounded-full border border-white/20 bg-white/12 px-4 py-2.5 backdrop-blur-md"
            >
              <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/90">
                <li className="flex items-center gap-2">
                  <HiHome className="text-base text-white" />
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>

                {breadcrumbs.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <GrNext className="text-[10px] opacity-70" />
                    {item.href ? (
                      <Link href={item.href} className="transition hover:text-white">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-white">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </motion.nav>
          </div>
        </div>
      )}
    </section>
  );
}