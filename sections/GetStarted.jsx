"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useConsultation } from "@/context/ConsultationContext";
import AnimatedButton from "@/components/AnimatedButton";
import SectionHeading from "@/components/SectionHeading";
import { SubtleGrid } from "@/components/VectorDecorations";

export default function GetStarted() {
  const { openModal } = useConsultation();

  return (
    <section className="relative overflow-hidden bg-white">
      <SubtleGrid />

      <div className="container-max relative z-10">
        {/* MAIN WRAPPER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[500px] md:min-h-[600px] w-full rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-border"
        >
          {/* 1. BACKGROUND IMAGE PORTAL */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/home-cta.webp"
              alt="Partnership with Sarvata"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />
            {/* Intelligent Gradient: Darkens only where text lives */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:via-black/20 lg:to-transparent" />
          </div>

          {/* 2. GLASS CONTENT PANEL */}
          <div className="relative z-10 h-full w-full flex items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-2xl">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                  Take the First Step
                </span>
              </motion.div>

              {/* Headline */}
              <SectionHeading
                title="Ready to transform your community?"
                light
                className="text-white"
              />

              {/* Description */}
              <p className="section-body !text-white leading-relaxed mb-12 max-w-lg">
                Wherever you are in your journey, we&apos;re ready to meet you
                there with tailored, actionable support that builds capacity
                from within.
              </p>

              {/* 3 ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Learn about our services */}
                <AnimatedButton
                  href="/services"
                  variant="white"
                  accentColor="var(--secondary)"
                >
                  Learn about our services
                </AnimatedButton>

                {/* Schedule a consultation */}
                <AnimatedButton
                  onClick={openModal}
                  variant="primary"
                  accentColor="var(--secondary)"
                >
                  Schedule a consultation
                </AnimatedButton>

                {/* Contact us */}
                <AnimatedButton
                  href="/contact-us"
                  variant="white"
                  accentColor="var(--secondary)"
                >
                  Contact us
                </AnimatedButton>
              </div>
            </div>
          </div>

          {/* 3. DECORATIVE TOP LINE */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
