"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "@/components/AnimatedButton";
import SectionHeading from "@/components/SectionHeading";
import { Users, BookOpenCheck, HeartHandshake } from "lucide-react";

const COMMUNITIES = [
  {
    title: "Educators",

    description:
      "Practical frameworks and job-embedded support to make responsive practice sustainable.",
    href: "/services/for-educators",
    button: "Explore Services for Educators ",
    image: "/approach.jpg",
    accent: "var(--secondary)",
    IconComponent: BookOpenCheck,
  },
  {
    title: "School Leaders",
    description:
      "Strategic partnership to build the systems, culture, and capacity for meaningful change.",
    href: "/services/for-leaders",
    button: "Explore Services for Leaders",
    image: "/about-web.jpg",
    accent: "var(--primary)",
    IconComponent: Users,
  },
  {
    title: "Parents",
    description:
      "Professional support to understand your child's learning profile and advocate effectively.",
    href: "/services/for-parents",
    button: "Explore Services for Parents ",
    image: "/approach.jpg",
    accent: "#10b981",
    IconComponent: HeartHandshake,
  },
];

export default function ModernWhatWeDo() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#fcfcfc] text-foreground py-8"
    >
      <div className="flex flex-col lg:flex-row min-h-screen max-w-[1400px] w-full mx-auto">
        {/* LEFT: Branding Narrative */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center px-8 md:px-12 py-8 lg:py-0 z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold mb-8 leading-[1.05] tracking-tight text-slate-900">
              We work with three <br className="hidden sm:block" />
              <span className="text-primary italic font-bold text-gradient lg:leading-tight">
                interconnected communities
              </span>
            </h2>
            <p className="text-muted text-lg max-w-sm font-light leading-relaxed mb-12">
              We connect educators, schools, and families to build meaningful,
              sustainable learning environments.
            </p>

            {/* Optional Thumbnail to cover emptiness on large screens */}
            <div className="hidden lg:block relative w-100 h-40 rounded-2xl overflow-hidden shadow-lg border border-border/50">
              <Image
                src="/about-1.jpg"
                alt="Educational Impact"
                fill
                className="object-cover"
              />
            </div>
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

  const scale = useTransform(smoothProgress, [0, 1], [0.85, 1]);
  const imgScale = useTransform(smoothProgress, [0, 1], [1.3, 1]); // Image "shrinks" into place
  const textY = useTransform(smoothProgress, [0, 1], [100, 0]);
  const textOpacity = useTransform(smoothProgress, [0.5, 1], [0, 1]);

  return (
    <div
      ref={cardRef}
      className="h-screen flex items-center justify-center sticky top-0 py-10 lg:py-0"
    >
      <motion.div
        style={{ scale }}
        className="relative w-full h-[500px] sm:h-[600px] md:h-[750px] max-h-[85vh] rounded-[32px] md:rounded-[48px] overflow-hidden bg-slate-900 group shadow-2xl"
      >
        {/* Cinematic Parallax Background */}
        <div className="absolute inset-0 overflow-hidden bg-[#1a1a1a]">
          <motion.div
            style={{ scale: imgScale }}
            className="relative h-full w-full opacity-80"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-700"
              priority={index === 0}
            />
          </motion.div>

          {/* Enhanced Dark Gradient to ensure text readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent lg:from-black/80 lg:via-black/20" />
        </div>

        {/* Content Body */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-end text-white"
        >
          {/* Header row with Icon */}
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 text-white opacity-90">
              {card.IconComponent && (
                <card.IconComponent className="w-full h-full" />
              )}
            </div>
            <div className="h-[1px] flex-grow bg-white/20" />
            <span className="text-4xl sm:text-5xl font-black text-white/50 drop-shadow-md tabular-nums tracking-tighter">
              0{index + 1}
            </span>
          </div>

          <p
            className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.4em] mb-2 sm:mb-3"
            style={{ color: card.accent }}
          >
            {card.subtitle || "Sarvata"}
          </p>
          <h3
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-6 leading-[1.1] md:leading-none"
            style={{ color: card.accent }}
          >
            {card.title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mb-6 sm:mb-10 font-light">
            {card.description}
          </p>

          <AnimatedButton
            href={card.href}
            className="w-full sm:w-fit justify-center"
            accentColor={card.accent}
          >
            {card.button}
          </AnimatedButton>
        </motion.div>

        {/* Top Edge Detail */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.div>
    </div>
  );
}
