"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { GrNext } from "react-icons/gr";

export default function InnerHero({
  webImage,
  mobileImage,
  image, // fallback for legacy 'image' prop
  alt = "Page banner",
  title,
  subtitle,
  breadcrumbs = [],
  variant = "default", // legacy variant prop
}) {
  // Use webImage or fallback to image
  const finalWebImage = webImage || image;
  // Use mobileImage or fallback to finalWebImage
  const finalMobileImage = mobileImage || finalWebImage;

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
            src={finalWebImage}
            alt={alt}
            fill
            priority
            className="hidden object-cover md:block"
          />

          <Image
            src={finalMobileImage}
            alt={alt}
            fill
            priority
            className="block object-cover md:hidden"
          />
        </motion.div>


      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-end justify-start">
        <div className="container-max w-full pb-12 md:pb-16 text-left">
          <div className="max-w-4xl relative z-10 w-full text-left px-6">
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="max-w-3xl text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl leading-none tracking-tighter text-primary uppercase"
              >
                {title}
              </motion.h1>
            )}

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] md:text-[18px] font-medium"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, scaleX: 0.7 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-6 h-[4px] w-24 origin-left rounded-full bg-linear-to-r from-primary to-secondary md:mt-8"
            />

            {/* Breadcrumbs below title */}
            {breadcrumbs.length > 0 && (
              <motion.nav
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
                className="mt-10 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-6 py-3 backdrop-blur-md shadow-2xl"
              >
                <ol className="flex flex-wrap items-center gap-2.5 text-[14px] font-bold text-white/80">
                  <li className="flex items-center gap-2">
                    <HiHome className="text-xl text-primary" />
                    <Link href="/" className="transition hover:text-white">
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
