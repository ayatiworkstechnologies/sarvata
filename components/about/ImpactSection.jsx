"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function ImpactSection({ title, metrics }) {
  return (
    <section className="relative bg-white py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 leading-[1.1] mb-6">
              Empowering <span className="text-primary font-medium italic">growth</span> at every scale.
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              Our data reflects a commitment to transforming the educational landscape through inclusive practices and dedicated mentorship.
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 
                ${i % 2 === 1 ? 'mt-0 md:mt-12 bg-primary/[0.02]' : 'bg-white'}`}
              >
                <div>
                  <span className="text-5xl md:text-6xl font-secondary text-slate-900 tracking-tighter block mb-4">
                    <AnimatedNumber value={m.value} />
                    <span className="text-primary">{m.suffix}</span>
                  </span>
                  <div className="w-12 h-1 bg-primary/20 group-hover:w-20 transition-all duration-500 rounded-full" />
                </div>
                <p className="mt-8 text-slate-500 font-medium tracking-wide uppercase text-xs">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}