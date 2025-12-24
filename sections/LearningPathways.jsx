"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PATHWAYS = [
  {
    title: "Educators",
    desc: "You see it every day. The student who finishes early and is bored.",
    image: "/learns-1.png",
    link: "/pathways/educators",
  },
  {
    title: "Leaders",
    desc: "Leading a school today means navigating complex landscapes.",
    image: "/learns-2.png",
    link: "/pathways/leaders",
  },
  {
    title: "Parents",
    desc: "Parenting today means guiding your child through an ever-evolving world.",
    image: "/learns-3.png",
    link: "/pathways/parents",
  },
  {
    title: "Learners",
    desc: "School is more than just classes and grades.",
    image: "/learns-4.png",
    link: "/pathways/learners",
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
          <span className="inline-block text-xs tracking-wider text-secondary mb-3">
            Educational Journeys
          </span>
          <h2 className="heading-lg mb-3">Learning Pathways</h2>
          <p className="text-muted text-sm">
            We are a premier educational resource, empowering schools,
            educators, and families to unlock every student’s full potential.
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
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
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
                  <h3 className="font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-muted text-sm mb-4">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <Link
                    href={item.link}
                    className="
                      mt-auto inline-flex items-center gap-1
                      text-primary text-sm font-medium
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
