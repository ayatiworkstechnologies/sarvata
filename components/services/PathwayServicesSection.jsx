"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FloatingShapes, SubtleGrid } from "@/components/VectorDecorations";
import SectionHeading from "@/components/SectionHeading";

export default function PathwayServicesSection({ eyebrow = "Services", title, services = [], columns = 3 }) {
  const gridClass = columns === 2 
    ? "grid-cols-1 md:grid-cols-2" 
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="relative bg-white overflow-hidden py-24 md:py-32">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #a066aa 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <FloatingShapes />
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="max-w-2xl mb-16 md:mb-24"
        >
          <p className="eyebrow mb-6">
            {eyebrow}
          </p>
          <SectionHeading title={title} className="text-slate-900 leading-[1.1] tracking-tight" />
        </motion.div>

        {/* Service Cards */}
        <div className={`grid ${gridClass} gap-6 lg:gap-8`}>
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 1, 0.36, 1] }}
              className="group relative h-full flex flex-col"
            >
              <div className="relative flex-1 p-8 lg:p-12 rounded-[40px] border border-slate-200 bg-white transition-all duration-700 hover:shadow-2xl overflow-hidden flex flex-col">
                {/* Background Number Accent */}
                <span className="absolute -bottom-4 -right-2 text-[120px] font-black text-slate-50 select-none group-hover:text-[#a066aa]/5 transition-colors duration-700 pointer-events-none">
                  0{i + 1}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-tight pr-12">
                    {svc.title}
                  </h3>

                  <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-12 flex-grow font-light">
                    {svc.description}
                  </p>

                  {svc.href && (
                    <Link
                      href={svc.href}
                      className="group/link inline-flex items-center gap-4 w-fit mt-auto"
                    >
                      <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center group-hover/link:bg-secondary group-hover/link:border-secondary transition-all duration-300 shadow-sm">
                        <svg
                          className="w-4 h-4 text-slate-400 group-hover/link:text-foreground transition-colors"
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
                        {svc.cta || "Learn More"}
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
