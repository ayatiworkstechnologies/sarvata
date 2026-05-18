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
    image: "/assets/home-1.png",
    accent: "var(--secondary)",
    IconComponent: BookOpenCheck,
  },
  {
    title: "School Leaders",
    description:
      "Strategic partnership to build the systems, culture, and capacity for meaningful change.",
    href: "/services/for-leaders",
    button: "Explore Service for Leaders",
    image: "/assets/home-2.png",
    accent: "var(--secondary)",
    IconComponent: Users,
  },
  {
    title: "Parents",
    description:
      "Professional support to understand your child's learning profile and advocate effectively.",
    href: "/services/for-parents",
    button: "Explore Service for Parents",
    image: "/assets/home-3.png",
    accent: "var(--secondary)",
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
            className="eyebrow !text-sm !mb-4"
          >
            What We Do
          </motion.span>
          <h2 className="heading-xl text-foreground">
            We work with three{" "}
            <span className="text-primary italic font-bold">
              interconnected communities
            </span>
          </h2>
          <p className="section-body text-muted max-w-2xl mx-auto mt-4">
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
      className="group relative h-[550px] md:h-[650px] rounded-[32px] overflow-hidden shadow-xl transition-shadow duration-500 bg-[#f7f3ef]"
    >
      {/* Background Image */}
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
      />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex flex-col justify-end">
        <motion.div
          style={{ opacity: useTransform(progress, [0.6, 1], [0, 1]) }}
        >
          {/* Content card */}
          <div className="relative rounded-[20px] md:rounded-[24px] overflow-hidden border border-white/70 bg-white/85 shadow-[0_12px_30px_rgba(31,41,55,0.16)]">
            <div className="relative z-10 p-5 md:p-6">
              {/* Icon + Title row */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center border border-slate-200/80 shrink-0"
                  style={{ color: card.accent }}
                >
                  <card.IconComponent size={20} />
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold leading-tight"
                  style={{ color: card.accent }}
                >
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-[13px] md:text-sm leading-relaxed mb-5 font-light">
                {card.description}
              </p>

              {/* CTA Button */}
              <AnimatedButton
                href={card.href}
                className="w-full justify-center"
                accentColor={card.accent}
              >
                {card.button}
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
