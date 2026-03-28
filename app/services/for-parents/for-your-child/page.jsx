"use client";
import MainHero from "@/components/MainHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import Link from "next/link";
import { motion } from "framer-motion";
import TestimonialsSection from "@/components/about/TestimonialsSection";

export default function ForYourChildPage() {
  const programs = [
    {
      title: "Understanding How Your Child Learns",
      description:
        "Individual and group programs helping students develop self-awareness and independence as learners.",
      href: "/services/for-parents/for-your-child/understanding-how-your-child-learns",
      icon: (
        <svg
          className="w-8 h-8 transition-colors duration-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <MainHero
        title="For Your Child"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "For Parents", href: "/services/for-parents" },
          { label: "For Your Child" },
        ]}
        webImage="/banners/service-10.jpg"
        mobileImage="/banners/service-mob-10.jpg"
      />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Understanding How They Learn"
        title="The Most Important Skill"
        image="/assets/service-par-1.webp"
        paragraphs={[
          "Beyond subject content, developing awareness of how they learn can support both academic progress and longer-term learning independence.",
          "We work with children and teens to discover their learning preferences, develop effective strategies, build self-regulation skills, and become increasingly independent learners.",
          "Helping your child develop metacognitive awareness and effective learning strategies.",
        ]}
      />

      {/* ── PROGRAMS ──────────────────────────────────────── */}
      <section className="bg-soft-bg py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white p-8 rounded-[1.75rem] border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6">{program.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted text-[15px] leading-relaxed mb-4">
                  {program.description}
                </p>
                {program.href && (
                  <a
                    href={program.href}
                    className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:text-secondary hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <TestimonialsSection
        title="What Students & Parents Say"
        testimonials={[
          {
            quote:
              "I finally understand how I learn. It's not that I wasn't smart; I just needed a different way to organize my thoughts.",
            author: "Maya, Grade 8 Student",
          },
          {
            quote:
              "Watching my child move from frustration to independence has been the greatest gift. They actually enjoy planning their study time now.",
            author: "R. Khanna, Parent",
          },
        ]}
      />

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="Ready to Help Them Understand Themselves?"
        steps={[
          {
            label: "Review",
            title: "Download Learning Programs Overview",
            description: "Detailed information on our student sessions.",
            href: "#",
            cta: "Download PDF",
          },
          {
            label: "Discuss",
            title: "Schedule Consultation",
            description:
              "Contact us to plan workshops tailored to your child's needs.",
            href: "/contact-us",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
