"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScheduleConsultationButton from "@/components/ScheduleConsultationButton";
import AnimatedButton from "@/components/AnimatedButton";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    audience: "For Educators",
    description:
      "Practical frameworks, workshops, mentoring, and resources to make responsive practice sustainable.",
    href: "/services/for-educators",
    cta: "Explore Educator Services",
    icon: (
      <Image src="/icon/icons-4.svg" alt="Educators Icon" width={64} height={64} className="h-16 w-auto object-contain drop-shadow-sm" />
    ),
    gradient: "from-emerald-500 to-teal-600",
    glow: "bg-emerald-500/20",
  },
  {
    audience: "For School Leaders",
    description:
      "Strategic partnership to build the systems, culture, and capacity needed for meaningful change.",
    href: "/services/for-leaders",
    cta: "Explore Leader Services",
    icon: (
      <Image src="/icon/icons-5.svg" alt="School Leaders Icon" width={64} height={64} className="h-16 w-auto object-contain drop-shadow-sm" />
    ),
    gradient: "from-blue-500 to-indigo-600",
    glow: "bg-blue-500/20",
  },
  {
    audience: "For Parents",
    description:
      "Professional support to understand your child's learning profile and advocate effectively.",
    href: "/services/for-parents",
    cta: "Explore Parent Services",
    icon: (
      <Image src="/icon/icons-6.svg" alt="Parents Icon" width={64} height={64} className="h-16 w-auto object-contain drop-shadow-sm" />
    ),
    gradient: "from-rose-500 to-pink-600",
    glow: "bg-rose-500/20",
  },
];

export default function ServicesLayout() {
  return (
    <>
      {/* ================= INTRO SECTION ================= */}
      <section className="section bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <p className="eyebrow">
              SERVICES
            </p>
            <SectionHeading title="How We Support Your Educational Community" />
            <p className="section-body leading-relaxed">
              We work with three interconnected communities to build truly
              learner-centered educational environments.
            </p>
          </motion.div>

          {/* ================= SERVICE CARDS ================= */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
            {services.map((service, i) => (
              <motion.div
                key={service.audience}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-md"
              >
                <div className="relative h-full rounded-[2rem] border border-border/60 bg-white p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-transparent hover:-translate-y-2">
                  {/* Hover glow */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 ${service.glow} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="flex h-16 items-center mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="card-title mb-4 tracking-tight">
                      {service.audience}
                    </h3>

                    {/* Description */}
                    <p className="card-body leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 font-semibold text-base text-primary group-hover:gap-4 transition-all duration-300"
                    >
                      {service.cta}
                      <svg
                        className="w-5 h-5 text-current opacity-70 group-hover:opacity-100 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Schedule Consultation BANNER ================= */}
      <section className="relative bg-soft-bg overflow-hidden border-t border-border/50">
        {/* Vibrant light glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 via-secondary/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-full blur-[80px] pointer-events-none" />

        <motion.div
          className="container-max relative z-10 py-20 md:py-28 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading title="Ready to Schedule Consultation?" className="text-foreground" />
          <p className="section-body max-w-2xl mx-auto mb-12 leading-relaxed">
            Take the first step toward building a truly learner-centered
            educational environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <AnimatedButton href="/services" className="w-full sm:w-auto" accentColor="var(--primary)">
              Download Services Guide
            </AnimatedButton>

            <ScheduleConsultationButton className="w-full sm:w-auto" variant="secondary" />

            <AnimatedButton href="/contact" className="w-full sm:w-auto" accentColor="#1e293b">
              Contact Us
            </AnimatedButton>
          </div>
        </motion.div>
      </section>
    </>
  );
}
