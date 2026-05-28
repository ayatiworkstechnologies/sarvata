"use client";

import { motion } from "framer-motion";

export default function PhilosophyScroll({ id, title, intro, points }) {
  return (
    <section id={id} className="relative bg-white py-12 sm:py-16 lg:py-24">
      <div className="container-max">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[28px] border border-primary/10 bg-soft/40 p-6 sm:p-8 lg:p-10"
            >
              <span className="eyebrow text-primary mb-6 block">{title}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-8 leading-[0.95]">
                Learning is a{" "}
                <span className="text-primary italic font-light">Verb</span>,{" "}
                <br />
                Not a Noun.
              </h2>
              <p className="section-body max-w-md text-lg text-muted">
                {intro}
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {points.map((pt, i) => (
              <PrincipleItem key={i} pt={pt} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipleItem({ pt, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="w-full rounded-[28px] border border-primary/10 bg-white p-6 shadow-[0_18px_50px_rgba(31,41,55,0.06)] sm:p-8 lg:p-10"
    >
      <div className="flex flex-col">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-4xl font-black tracking-tighter text-primary/35 drop-shadow-md sm:text-5xl">
            0{index + 1}
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
        </div>
        <div className="pl-1">
          <h3 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-slate-800 sm:mb-6 sm:text-3xl md:text-4xl">
            {pt.title}
          </h3>
          <p className="max-w-2xl whitespace-pre-line text-lg font-light leading-relaxed text-muted">
            {pt.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
