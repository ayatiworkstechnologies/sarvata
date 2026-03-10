"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PATHWAYS = [
  {
    title: "Educators",
    desc: "Practical frameworks and job-embedded support to make responsive practice sustainable.",
    image: "/img-1.jpg",
    link: "/pathway-educators",
    cta: "Explore Services for Educators",
  },
  {
    title: "School Leaders",
    desc: "Strategic partnership to build the systems, culture, and capacity for meaningful educational change.",
    image: "/img-2.jpg",
    link: "/pathway-leaders",
    cta: "Explore Services for Leaders",
  },
  {
    title: "Parents",
    desc: "Professional support to understand your child’s learning profile and advocate effectively.",
    image: "/img-3.jpg",
    link: "/pathway-parents",
    cta: "Explore Services for Parents",
  },
];

export default function LearningPathways() {
  return (
    <section className="section bg-white">
      <div className="container-max">
        <motion.div className="text-center max-w-2xl mx-auto mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-2 py-1 font-primary font-bold text-base border-black/10 bg-secondary tracking-wider text-white mb-3">
            What We Do
          </span>
          <h2 className="heading-xl mb-3">We work with three interconnected communities</h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PATHWAYS.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="group h-full flex flex-col rounded overflow-hidden bg-white border border-black/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <div className="relative h-72 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-2xl mb-2">{item.title}</h3>
                  <p className="text-muted mb-4">{item.desc}</p>
                  <Link href={item.link} className="mt-auto font-primary inline-flex items-center gap-1 text-primary text-lg font-medium group-hover:gap-2 transition-all">
                    {item.cta} <span>→</span>
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
