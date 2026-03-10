"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Grounded in Practice",
    desc: "We’re educators who’ve lived the gap between vision and reality.",
  },
  {
    title: "Systems Thinking",
    desc: "We address culture, pedagogy, and operational systems together.",
  },
  {
    title: "Building Independence",
    desc: "Our goal is your capacity, not your dependency.",
  },
  {
    title: "Sustained Partnership",
    desc: "We support implementation, not just deliver workshops.",
  },
];

export default function Advantages() {
  return (
    <section className="section bg-[#f8f8f8]">
      <div className="container-max grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Partnership, Not Prescription</h2>
          <p className="text-muted">
            We don’t arrive with generic solutions. We begin by understanding your context, your goals,
            and your challenges. You bring expertise in your community. We bring frameworks, research,
            and external perspectives. Together, we build approaches that are both aspirational and realistic.
          </p>
        </div>

        <div className="space-y-4">
          {FEATURES.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-l-4 border-secondary p-5">
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
