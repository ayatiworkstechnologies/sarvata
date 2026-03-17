"use client";
import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import Link from "next/link";
import { motion } from "framer-motion";



export default function ForYourChildPage() {
  const programs = [
    {
      title: "Understanding How Your Child Learns",
      description: "Individual and group programs helping students develop self-awareness and independence as learners.",
      href: "/services/for-parents/for-your-child/understanding-how-your-child-learns",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="For Your Child"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "For Parents", href: "/services/for-parents" }, { label: "For Your Child" }]}
       variant="mental-health" />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Understanding How They Learn"
        title="The Most Important Skill"
        paragraphs={[
          "Beyond subject content, developing awareness of how they learn can support both academic progress and longer-term learning independence.",
          "We work with children and teens to discover their learning preferences, develop effective strategies, build self-regulation skills, and become increasingly independent learners.",
          "Helping your child develop metacognitive awareness and effective learning strategies."
        ]}
      />

      {/* ── PROGRAMS ──────────────────────────────────────── */}
      <section className="bg-soft-bg py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program, i) => (
              <div key={i} className="group flex flex-col items-center text-center bg-white p-10 rounded-[2rem] border border-border/60 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">{program.title}</h3>
                <p className="text-muted text-[16px] leading-relaxed mb-8 flex-1">
                  {program.description}
                </p>
                <Link
                  href={program.href}
                  className="mt-auto inline-flex items-center gap-2 text-primary font-semibold text-[15px] group-hover:gap-3 transition-all duration-300 bg-primary/5 px-6 py-3 rounded-full hover:bg-primary/10"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            description: "Contact us to plan workshops tailored to your child's needs.",
            href: "/contact",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
