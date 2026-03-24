"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    audience: "For Educators",
    description:
      "Practical frameworks, workshops, mentoring, and resources to make responsive practice sustainable.",
    href: "/services/for-educators",
    cta: "Explore Educator Services ",
    icon: "/icon/icons-4.svg",
    accent: "text-emerald-500",
    bg: "bg-emerald-50/50",
  },
  {
    audience: "For School Leaders",
    description:
      "Strategic partnership to build the systems, culture, and capacity needed for meaningful change.",
    href: "/services/for-leaders",
    cta: "Explore Leader Services ",
    icon: "/icon/icons-5.svg",
    accent: "text-blue-500",
    bg: "bg-blue-50/50",
  },
  {
    audience: "For Parents",
    description:
      "Professional support to understand your child's learning profile and advocate effectively.",
    href: "/services/for-parents",
    cta: "Explore Parent Services ",
    icon: "/icon/icons-6.svg",
    accent: "text-rose-500",
    bg: "bg-rose-50/50",
  },
];

export default function ServicesMain() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Architectural Elements - Using a standard hex fallback for the primary color */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #a066aa 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a066aa] mb-6 block">
              Expertise
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              How We Support Your <br />
              <span className="italic font-light text-[#a066aa]">
                Educational Community
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg lg:text-xl max-w-sm lg:text-right pb-2 font-light leading-relaxed"
          >
            We align three interconnected pillars to create truly
            learner-centered environments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.21, 1, 0.36, 1],
              }}
              className="group relative h-full"
            >
              <div className="relative h-full p-10 lg:p-12 rounded-[40px] border border-slate-200 bg-white transition-all duration-700 hover:shadow-2xl overflow-hidden flex flex-col">
                {/* Background Number Accent */}
                <span className="absolute -bottom-4 -right-2 text-[120px] font-black text-slate-50 select-none group-hover:text-[#a066aa]/5 transition-colors duration-700 pointer-events-none">
                  0{i + 1}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Image
                      src={service.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                    {service.audience}
                  </h3>

                  <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-12 flex-grow font-light">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="group/link inline-flex items-center gap-4 w-fit"
                  >
                    <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center group-hover/link:bg-secondary group-hover/link:border-secondary transition-all duration-300 shadow-sm">
                      <svg
                        className={`w-4 h-4 ${service.accent} group-hover/link:text-foreground transition-colors`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover/link:text-primary transition-colors">
                      {service.cta}
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
