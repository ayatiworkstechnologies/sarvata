"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "@/components/AnimatedButton";
import { Users, BookOpenCheck, HeartHandshake } from "lucide-react";

const COMMUNITIES = [
  {
    title: "Educators",
    description:
      "Practical frameworks and job-embedded support to make responsive practice sustainable.",
    href: "/services/for-educators",
    button: "Explore Service for Educators",
    image: "/assets/home-sec-1.webp",
    accent: "var(--secondary)",
    IconComponent: BookOpenCheck,
  },
  {
    title: "School Leaders",
    description:
      "Strategic partnership to build the systems, culture, and capacity for meaningful change.",
    href: "/services/for-leaders",
    button: "Explore Service for Leaders",
    image: "/assets/home-sec-2.webp",
    accent: "var(--primary)",
    IconComponent: Users,
  },
  {
    title: "Parents",
    description:
      "Professional support to understand your child's learning profile and advocate effectively.",
    href: "/services/for-parents",
    button: "Explore Service for Parents",
    image: "/assets/home-sec-3.webp",
    accent: "#10b981",
    IconComponent: HeartHandshake,
  },
];

export default function ModernWhatWeDo() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], // Animation completes when section hits center
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#fcfcfc] py-8 md:py-12  overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-primary/60 mb-4 block"
          >
            What We Do
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            We work with three{" "}
            <span className="text-primary italic font-serif">
              interconnected communities
            </span>
          </h2>
          <p>
            We connect educators, schools, and families to build meaningful,
            sustainable learning environments.
          </p>
        </div>

        {/* Splitting Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {COMMUNITIES.map((card, i) => (
            <SplitCard
              key={i}
              card={card}
              index={i}
              progress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SplitCard({ card, index, progress }) {
  // 1. Initial Group Entrance (Top to Bottom)
  const translateY = useTransform(progress, [0, 0.4], [-150, 0]);

  // 2. THE SPLIT LOGIC
  // On Desktop: Card 0 starts shifted right, Card 2 starts shifted left.
  // This makes them appear as "one" card in the center initially.
  // '105%' ensures they are completely hidden behind the middle card.
  const translateX = useTransform(
    progress,
    [0.3, 0.8], // Starts splitting after they've moved down a bit
    [index === 0 ? "105%" : index === 2 ? "-105%" : "0%", "0%"],
  );

  // 3. Visual Polish
  const opacity = useTransform(progress, [0, 0.3, 0.5], [0, 0, 1]);
  const scale = useTransform(progress, [0.3, 0.8], [0.9, 1]);

  return (
    <motion.div
      style={{
        y: translateY,
        x: translateX,
        opacity,
        scale,
        zIndex: index === 1 ? 20 : 10, // Keep center card on top during split
      }}
      className="group relative h-[550px] md:h-[650px] rounded-[32px] overflow-hidden shadow-2xl transition-shadow duration-500 bg-slate-900"
    >
      {/* Background Image */}
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
      />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <motion.div
          style={{ opacity: useTransform(progress, [0.6, 1], [0, 1]) }} // Fade text in last
          className="mb-4"
        >
          <div
            className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20"
            style={{ color: card.accent }}
          >
            <card.IconComponent size={24} />
          </div>
          <h3
            className="text-3xl font-bold mb-3"
            style={{ color: card.accent }}
          >
            {card.title}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-8 font-light">
            {card.description}
          </p>

          <AnimatedButton
            href={card.href}
            className="w-full justify-center"
            accentColor={card.accent}
          >
            {card.button}
          </AnimatedButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
