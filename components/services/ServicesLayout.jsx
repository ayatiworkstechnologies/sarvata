"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const services = [
  {
    audience: "For Educators",
    description:
      "Practical frameworks, workshops, mentoring, and resources to make responsive practice sustainable.",
    href: "/services/for-educators",
    cta: "Explore Educator Services",
    image: "/assets/educater.png", // Replace with your actual images
    accent: "text-emerald-500",
    bg: "bg-emerald-50/50",
  },
  {
    audience: "For School Leaders",
    description:
      "Strategic partnership to build the systems, culture, and capacity needed for meaningful change.",
    href: "/services/for-leaders",
    cta: "Explore Leader Services",
    image: "/assets/leaders.png",
    accent: "text-blue-500",
    bg: "bg-blue-50/50",
  },
  {
    audience: "For Parents",
    description:
      "Professional support to understand your child's unique learning profile and collaboratively map their path to holistic growth.",
    href: "/services/for-parents",
    cta: "Explore Parent Services",
    image: "/assets/parents.png",
    accent: "text-rose-500",
    bg: "bg-rose-50/50",
  },
];

export default function ServicesMain() {
  return (
    <section className="relative py-10 sm:py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #a066aa 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a066aa] mb-4"
          >
            Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight"
          >
            How We Support Your <br />
            <span className="italic font-light text-[#a066aa]">
              Educational Community
            </span>
          </motion.h2>
        </div>

        {/* Alternating Services List */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-40">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex flex-col gap-8 sm:gap-10 md:gap-12 items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.21, 1, 0.36, 1] }}
                  className="flex-1 space-y-6"
                >
                  <div
                    className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${service.bg} ${service.accent}`}
                  >
                    0{i + 1} Pillar
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                    {service.audience}
                  </h3>
                  <p className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-xl">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="group/link inline-flex items-center gap-4 pt-4"
                  >
                    <div className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center group-hover/link:bg-[#a066aa] group-hover/link:border-[#a066aa] transition-all duration-300 shadow-sm">
                      <LuArrowRight
                        className={`w-5 h-5 ${service.accent} group-hover/link:text-white transition-colors`}
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover/link:text-slate-900 transition-colors">
                      {service.cta}
                    </span>
                  </Link>
                </motion.div>

                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.21, 1, 0.36, 1] }}
                  className="flex-1 w-full"
                >
                  <div className="relative aspect-[4/3] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.audience}
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
