"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { FloatingShapes, SubtleGrid } from "@/components/VectorDecorations";

import Image from "next/image";

export default function PathwayApproachSection({ eyebrow = "Our Approach", title, items = [], image }) {
  return (
    <section className="relative bg-[#faf9ff] overflow-hidden py-24 md:py-32">
      {/* Background decoration */}
      <SubtleGrid />
      <FloatingShapes />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Sticky Cinematic Image */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 relative">
             <motion.div
               initial={{ opacity: 0, x: -30, scale: 0.95 }}
               whileInView={{ opacity: 1, x: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
               className="relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl border-[8px] border-white bg-white"
             >
               <Image
                 src={image || "/about.jpg"}
                 alt={title || "Our Approach"}
                 fill
                 className="object-cover transition-transform duration-1000 hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-60 pointer-events-none" />
               <div className="absolute top-8 left-8 flex flex-col gap-2">
                 <div className="h-1 w-12 bg-white/40 rounded-full" />
                 <div className="h-1 w-6 bg-white/20 rounded-full" />
               </div>
             </motion.div>
          </div>

          {/* RIGHT: Content & Cards */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="mb-14"
            >
              <p className="eyebrow text-primary mb-6 block">
                {eyebrow}
              </p>
              <SectionHeading title={title} className="text-slate-900" />
            </motion.div>

            {/* Approach Items Stack */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-[2rem] bg-white border border-slate-200 p-8 md:p-10 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(160,102,170,0.08)] hover:border-primary/20 transition-all duration-500 flex flex-col sm:flex-row gap-6 sm:gap-8"
                >
                  {/* Subtle Light Flare */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/10 transition-colors duration-500" />

                  {/* Number Badge */}
                  <div className="shrink-0 relative">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center relative overflow-hidden group-hover:bg-primary/5 transition-colors duration-500">
                      <span className="text-2xl font-black text-primary/40 group-hover:text-primary transition-colors">
                        0{i + 1}
                      </span>
                      {/* Sweep effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 group-hover:animate-[shimmer_1.5s_infinite]" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-light text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
