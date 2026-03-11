"use client";

import { motion } from "framer-motion";

export default function JourneySection({ title, intro, steps }) {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-border/50">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        
        {/* HEADER */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center max-w-3xl mx-auto mb-20 md:mb-32"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-foreground mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-[18px] md:text-[20px] leading-relaxed text-muted font-secondary">
            {intro}
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line Desktop */}
          <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-transparent md:-translate-x-1/2 hidden md:block rounded-full" />

          {/* Vertical Line Mobile */}
          <div className="absolute left-[25px] top-4 bottom-4 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-transparent md:hidden block rounded-full" />


          <div className="space-y-16 md:space-y-32">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 pl-16 md:pl-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  
                  {/* Timeline Dot (Desktop & Mobile Unified relative to line) */}
                  <div className={`absolute md:left-1/2 top-0 left-0 md:-translate-x-1/2 md:-translate-y-0 w-[50px] h-[50px] md:w-16 md:h-16 flex items-center justify-center pointer-events-none`}>
                     <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-white flex items-center justify-center relative shadow-xl z-10">
                       <span className="text-primary font-secondary font-bold text-sm md:text-lg">0{i + 1}</span>
                       <motion.div 
                          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: i * 0.5 }}
                          className="absolute inset-0 rounded-full border border-primary/50" 
                       />
                     </div>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted font-secondary leading-relaxed text-[17px]">
                      {step.desc}
                    </p>
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block w-1/2" />
                  
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
