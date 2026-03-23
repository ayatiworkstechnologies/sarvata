"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "@/components/AnimatedButton";
import SectionHeading from "@/components/SectionHeading";

const COMMUNITIES = [
  {
    title: "Educators",

    description:
      "Practical frameworks and job-embedded support to make responsive practice sustainable.",
    href: "/services/for-educators",
    button: "Explore Services for Educators ",
    image: "/approach.jpg",
    accent: "var(--secondary)",
    icon: "/icon/icons-1.svg",
  },
  {
    title: "School Leaders",
    description:
      "Strategic partnership to build the systems, culture, and capacity for meaningful change.",
    href: "/services/for-leaders",
    button: "Explore Services for Leaders",
    image: "/about-web.jpg",
    accent: "var(--primary)",
    icon: "/icon/icons-3.svg",
  },
  {
    title: "Parents",
    description:
      "Professional support to understand your child's learning profile and advocate effectively.",
    href: "/services/for-parents",
    button: "Explore Services for Parents ",
    image: "/approach.jpg",
    accent: "#10b981",
    icon: "/icon/icons-2.svg",
  },
];

export default function ModernWhatWeDo() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#fcfcfc] text-foreground section"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* LEFT: Branding Narrative */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center px-8 md:px-20 py-24 lg:py-0 z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">
              What We Do
            </span>
            <SectionHeading className="text-slate-900 leading-[0.95] tracking-tighter">
              We work with three <br />
              <span className="text-primary italic font-bold text-gradient">
                interconnected communities
              </span>
            </SectionHeading>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mb-8" />
            <p className="text-muted text-lg max-w-sm font-light leading-relaxed">
              We align every stakeholder—from the classroom to the boardroom—to
              create lasting educational change.
            </p>
          </motion.div>
        </div>

        {/* RIGHT: Stacking Card Track */}
        <div className="w-full lg:w-1/2 px-4 md:px-12 pb-32">
          {COMMUNITIES.map((card, i) => (
            <CommunityCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityCard({ card, index }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Smooth out the motion for an industrial feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const scale = useTransform(smoothProgress, [0, 1], [0.8, 1]);
  const imgScale = useTransform(smoothProgress, [0, 1], [1.3, 1]); // Image "shrinks" into place
  const textY = useTransform(smoothProgress, [0, 1], [100, 0]);
  const textOpacity = useTransform(smoothProgress, [0.5, 1], [0, 1]);

  return (
    <div ref={cardRef} className="h-screen flex items-center sticky top-0">
      <motion.div
        style={{ scale }}
        className="relative w-full h-[650px] md:h-[750px] rounded-[48px] overflow-hidden bg-white group"
      >
        {/* Cinematic Parallax Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ scale: imgScale }}
            className="relative h-full w-full"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-700"
              priority={index === 0}
            />
          </motion.div>
        </div>

        {/* Content Body */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end text-white"
        >
          {/* Header row with Icon */}
          <div className="flex items-center gap-6 mb-8">
            <div className="">
              <Image
                src={card.icon}
                alt=""
                width={36}
                height={36}
                className="invert"
              />
            </div>
            <div className="h-[1px] flex-grow bg-white/10" />
            <span className="text-4xl font-black text-white/10 tabular-nums">
              0{index + 1}
            </span>
          </div>

          <p
            className="text-[11px] font-black uppercase tracking-[0.4em] mb-3"
            style={{ color: card.accent }}
          >
            {card.subtitle}
          </p>
          <h3
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-none"
            style={{ color: card.accent }}
          >
            {card.title}
          </h3>
          <p className="text-white/80 text-lg leading-relaxed max-w-sm mb-10 font-light">
            {card.description}
          </p>

          <AnimatedButton
            href={card.href}
            className="w-fit"
            accentColor={card.accent}
          >
            {card.button}
          </AnimatedButton>
        </motion.div>

        {/* Top Edge Detail */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </motion.div>
    </div>
  );
}
