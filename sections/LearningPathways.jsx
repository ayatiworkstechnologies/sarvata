"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PATHWAYS = [
  {
    title: "Educators",
    desc: "You see it every day. The student who finishes early and is bored.",
    image: "/img-1.jpg",
    link: "/pathway-educators",
  },
  {
    title: "Leaders",
    desc: "Leading a school today means navigating complex landscapes.",
    image: "/img-2.jpg",
    link: "/pathway-leaders",
  },
  {
    title: "Parents",
    desc: "Parenting today means guiding your child through an ever-evolving world.",
    image: "/img-3.jpg",
    link: "/pathway-parents",
  },
  {
    title: "Learners",
    desc: "School is more than just classes and grades.",
    image: "/img-4.jpg",
    link: "/pathway-learners",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -8,
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // modern easing
    },
  },
};

export default function LearningPathways() {
  return (
    <section className="section bg-white">
      <div className="container-max">
        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block px-2 py-1 font-primary font-bold text-base border-black/10 bg-secondary tracking-wider text-white mb-3">
            Educational Journeys
          </span>
          <h2 className="heading-xl mb-3">Learning Pathways</h2>
          <p className="text-black text-sm">
            We are a premier educational resource, empowering schools,
            educators, and families to unlock every students full potential.
            Explore our resources to find the support you need.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {PATHWAYS.map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -6,
                rotateX: 2,
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* CARD */}
              <div
                className="
                  group h-full flex flex-col
                  rounded overflow-hidden
                  bg-white
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                  transition-shadow duration-300
                "
              >
                {/* Image Reveal */}
                <div className="relative h-72 overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-2xl mb-2">{item.title}</h3>

                  <p className="text-muted mb-4">{item.desc}</p>

                  {/* CTA */}
                  <Link
                    href={item.link}
                    className="
                      mt-auto font-primary inline-flex items-center gap-1
                      text-primary text-xl font-medium
                      transition-all
                      group-hover:gap-2
                    "
                  >
                    Discover <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
