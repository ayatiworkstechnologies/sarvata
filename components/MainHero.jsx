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
      <div className="relative h-[600px] sm:h-[600px] md:h-[600px] w-full">
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(160,102,170,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(226,196,115,0.12),transparent_30%)]" />

      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-end justify-start">
        <div className="container-max w-full pb-12 md:pb-16 text-left">
          <div className="max-w-4xl relative z-10 w-full text-left">
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="max-w-3xl text-xl font-extrabold leading-none tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] sm:text-2xl md:text-3xl lg:text-4xl uppercase"
              >
                {title}
              </motion.h1>
            )}

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-3 max-w-2xl text-[14px] leading-6 text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] md:text-[16px]"
              >
                {subtitle}
              </motion.p>
            )}


            {/* Breadcrumbs below title */}
            {breadcrumbs.length > 0 && (
              <motion.nav
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
                className="mt-8 flex w-fit items-center gap-1.5 rounded-2xl border border-white/20 bg-black/20 px-4 py-2.5 backdrop-blur-md shadow-xl sm:rounded-full sm:px-5 lg:mt-10"
              >
                <ol className="flex flex-wrap items-center gap-2.5 text-[14px] font-bold text-white">
                  <li className="flex items-center gap-2">
                    <HiHome className="text-lg text-white" />
                    <Link href="/" className="transition hover:text-white/80">
                      Home
                    </Link>
                  </li>

                  {breadcrumbs.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <GrNext className="text-[10px] text-white/50" />
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
