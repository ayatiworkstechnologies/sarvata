"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15
  });
  
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function ImpactSection({ title, metrics }) {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-black/5">
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-20"
        >
          <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-bold mb-4">
            At a Glance
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((m, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="text-center group"
             >
               <div className="w-full max-w-[200px] mx-auto flex flex-col items-center justify-center aspect-square rounded-full bg-primary/5 mb-6 group-hover:bg-primary/10 transition-colors duration-500 border border-primary/10 shadow-sm">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-light text-primary font-secondary tracking-tighter">
                    <AnimatedNumber value={m.value} />
                    {m.suffix}
                  </span>
               </div>
               <p className="text-muted-foreground font-medium text-[15px] md:text-[17px] px-4">
                 {m.label}
               </p>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
