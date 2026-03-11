"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StorySection({
  title,
  subtitle,
  paragraphs,
  founderTitle,
  founderText,
  image
}) {
  return (
    <section className="relative bg-[#f5f7f5] py-24 md:py-32 overflow-hidden">
      {/* Soft gradient backgrounds */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#6bcf8e]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[12px] uppercase tracking-[0.3em] text-[#6bcf8e] font-bold mb-4">
              {title}
            </p>
            <h2 className="text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl tracking-tight mb-8">
              {subtitle}
            </h2>
            
            <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground font-light text-justify">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* FOUNDER BLOCK - GLASSMORPHISM */}
            <div className="mt-12 p-8 md:p-10 rounded-3xl bg-white/40 backdrop-blur-xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.03)] relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#6bcf8e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4 relative z-10">{founderTitle}</h3>
               <p className="text-muted-foreground font-light text-[16px] leading-relaxed relative z-10">
                 "{founderText}"
               </p>
            </div>
          </motion.div>

          {/* IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border-[8px] border-white bg-white">
               <Image
                 src={image || "/placeholder.jpg"}
                 alt={title}
                 fill
                 className="object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
