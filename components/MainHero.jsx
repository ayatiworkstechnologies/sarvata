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
  eventLogo,
}) {
  return (
    <section className="relative isolate w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative h-[480px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full">
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
      </div>

      {/* Content */}
      <div className="absolute inset-0">
        <div className="container-max relative h-full w-full">
          {/* Main Info Container (Stacks Logo, Title, and Subtitle) */}
          <div className="
            absolute left-4 sm:left-8 md:left-10 lg:left-14
            top-[95px] sm:top-[115px] md:top-[140px] lg:top-[180px] z-10
            max-w-[90%] sm:max-w-[520px] lg:max-w-[700px]
            flex flex-col gap-3.5 sm:gap-5 md:gap-6
          ">
            {/* Logo Optional */}
            {eventLogo && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.55 }}
                className="w-25 sm:w-30 md:w-35 "
              >
                <Image
                  src={eventLogo}
                  alt="Event Logo"
                  width={200}
                  height={60}
                  className="h-auto w-full object-contain"
                  priority
                />
              </motion.div>
            )}

            {/* Title */}
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.65 }}
                className="
                  text-[24px] sm:text-[36px] md:text-[46px] lg:text-[56px] font-extrabold leading-[1.15]
                  tracking-[-1px] md:tracking-[-1.5px] text-[#6B4A8E]
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
                  max-w-[85%] sm:max-w-xl text-[13px] sm:text-[14px] leading-6 sm:leading-7 
                  text-[#2E2738] font-bold md:text-[#5F5570] md:font-medium md:text-[15px]
                "
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Breadcrumb */}
          {breadcrumbs.length > 0 && (
            <motion.nav
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="
                absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-4 sm:left-8 md:left-10 lg:left-14 z-20
                flex w-fit items-center gap-1.5
                rounded-2xl sm:rounded-full border border-white/35
                bg-black/25 px-4 sm:px-5 py-2.5 sm:py-3
                shadow-xl backdrop-blur-md
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
