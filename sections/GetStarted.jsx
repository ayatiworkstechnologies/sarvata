"use client";

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
              className="object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
              priority
            />
          </div>

          {/* 2. CONTENT PANEL */}
          <div className="relative z-10 h-full w-full flex items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-2xl rounded-[28px] border border-white/75 bg-white/[0.88] p-6 shadow-[0_18px_50px_rgba(31,41,55,0.14)] md:p-10">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className=""
              >
                {/* <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" /> */}
                <span className="eyebrow">Take the First Step</span>
              </motion.div>

              {/* Headline */}
              <SectionHeading
                title="Ready to transform your community?"
                className="text-foreground"
              />

              {/* Description */}
              <p className="section-body text-muted leading-relaxed mb-12 max-w-lg">
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
