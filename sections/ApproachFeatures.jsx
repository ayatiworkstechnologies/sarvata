"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LuPuzzle, LuSettings, LuTarget, LuHandshake } from "react-icons/lu";

const DIFFERENTIATORS = [
  {
    title: "Grounded in Practice",
    description: "We're educators who've lived the gap between vision and reality.",
    icon: LuPuzzle,
    image: "/assets/home-sec-3-1.webp",
    accent: "var(--primary)",
  },
  {
    title: "Systems Thinking",
    description:
      "We address culture, pedagogy, and operational systems together.",
    icon: LuSettings,
    image: "/assets/home-sec-3-2.webp",
    accent: "var(--secondary)",
  },
  {
    title: "Building Independence",
    description: "Our goal is your capacity, not your dependency.",
    icon: LuTarget,
    image: "/assets/home-sec-3-3.webp",
    accent: "var(--secondary)",
  },
  {
    title: "Sustained Partnership",
    description: "We support implementation, not just deliver workshops.",
    icon: LuHandshake,
    image: "/assets/home-sec-3-4.webp",
    accent: "var(--primary)",
  },
];

export default function ApproachFeatures() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-16 md:py-24">
      {/* Subtle decorative background gradient instead of dots */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2 opacity-40">
        <div className="absolute left-0 top-0 h-64 w-full bg-linear-to-b from-soft to-transparent" />
      </div>

      <div className="container-max relative z-10">
        <div className="mb-10 sm:mb-14 md:mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="eyebrow">What Makes Us Different</span>
            <h2 className="heading-lg max-w-2xl">
              Our unique approach to{" "}
              <span className="text-primary italic">transformative</span>{" "}
              education
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4">
          {DIFFERENTIATORS.map((item, i) => (
            <FeatureCard key={item.title} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item, i }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -10 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] border border-border/60 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-primary/20 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)]"
    >
      {/* Image Header */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-soft">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="flex grow flex-col p-5 sm:p-6 md:p-9">
        {/* Icon & Title Row */}
        <div className="mb-3 sm:mb-4 md:mb-5 flex flex-col gap-3 sm:gap-4 md:gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border/40 bg-soft transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:shadow-inner">
            <div className="relative flex h-7 w-7 items-center justify-center">
              <Icon className="h-full w-full text-primary transition-transform group-hover:scale-110" />
            </div>
          </div>
          <h4 className="text-[16px] sm:text-[17px] md:text-[19px] font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
            {item.title}
          </h4>
        </div>

        <p className="text-[15px] font-medium leading-relaxed text-muted/80">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
