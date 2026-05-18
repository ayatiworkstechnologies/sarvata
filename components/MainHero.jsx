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
      {/* Background Image */}
      <div className="relative h-[600px] w-full">
        <motion.div
          initial={{ scale: 1.04 }}
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

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(160,102,170,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(226,196,115,0.12),transparent_32%)]" />
      </div>

      {/* Content */}
      <div className="absolute inset-0">
        <div className="container-max relative h-full w-full">
          {/* Title */}
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.65 }}
              className="
                absolute left-4 top-[150px] z-10
                max-w-[520px]
                text-[34px] font-extrabold leading-[1.12]
                tracking-[-1.5px] text-[#6B4A8E]
                sm:left-8 sm:text-[42px]
                md:left-10 md:top-[155px] md:text-[52px]
                lg:left-14 lg:text-[56px]
              "
            >
              {title}
            </motion.h1>
          )}

          {/* Subtitle optional */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="
                absolute left-4 top-[360px] z-10
                max-w-xl text-[15px] leading-7 text-[#5F5570]
                sm:left-8 md:left-10 lg:left-14
              "
            >
              {subtitle}
            </motion.p>
          )}

          {/* Breadcrumb */}
          {breadcrumbs.length > 0 && (
            <motion.nav
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="
                absolute bottom-16 left-4 z-20
                flex w-fit items-center gap-1.5
                rounded-2xl border border-white/35
                bg-black/25 px-4 py-2.5
                shadow-xl backdrop-blur-md
                sm:left-8 sm:rounded-full sm:px-5
                md:left-10 lg:left-14
              "
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
                    <GrNext className="text-[10px] text-white/60" />

                    {item.href ? (
                      <Link href={item.href} className="transition hover:text-white/80">
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </motion.nav>
          )}
        </div>
      </div>
    </section>
  );
}