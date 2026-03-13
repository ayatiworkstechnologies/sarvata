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

      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-max pt-20 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl rounded-3xl border border-white/30 bg-white/15 p-6 shadow-xl sm:p-8 md:p-10"
          >
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="max-w-3xl text-2xl font-bold leading-[1.05] tracking-tight text-black/80 sm:text-3xl md:text-4xl lg:text-5xl"
              >
                {title}
              </motion.h1>
            )}

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-4 max-w-2xl text-[15px] leading-7 text-white/90 md:mt-5 md:text-lg"
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
          </motion.div>
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
              className="inline-flex max-w-full rounded-full border border-white/30 bg-white/15 px-5 py-2.5 shadow-lg"
            >
              <ol className="flex flex-wrap items-center gap-2.5 text-[15px] font-semibold text-white">
                <li className="flex items-center gap-2">
                  <HiHome className="text-lg text-white" />
                  <Link href="/" className="transition hover:text-white/80">
                    Home
                  </Link>
                </li>

                {breadcrumbs.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <GrNext className="text-[11px] text-white/70" />
                    {item.href ? (
                      <Link href={item.href} className="transition hover:text-white/80">
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