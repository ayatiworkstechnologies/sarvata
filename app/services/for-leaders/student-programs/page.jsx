"use client";
import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import Link from "next/link";
import { motion } from "framer-motion";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import { Shield, Brain, Users } from "lucide-react";



export default function StudentProgramsPage() {
  const programs = [
    {
      title: "Cyber Safety & Digital Citizenship",
      description: "Navigate the online world with confidence and smart choices. Real talk about digital reality.",
      href: "/services/for-leaders/student-programs/cyber-safety-digital-citizenship",
      icon: <Shield className="w-8 h-8 text-primary" strokeWidth={1.5} />
    },
    {
      title: "Mental Health & Well-Being",
      description: "Practical tools for managing stress and difficult emotions. Skills that actually work.",
      href: "/services/for-leaders/student-programs/mental-health-well-being",
      icon: <Brain className="w-8 h-8 text-primary" strokeWidth={1.5} />
    },
    {
      title: "Healthy Relationships & Boundaries",
      description: "Education about consent, boundaries, and navigating social complexities. Mature conversations about real topics.",
      href: "/services/for-leaders/student-programs/healthy-relationships-boundaries",
      icon: <Users className="w-8 h-8 text-primary" strokeWidth={1.5} />
    }
  ];

  const implementationDetails = [
    { label: "Format", value: "60-90 minute interactive sessions (not lectures)" },
    { label: "Adaptation", value: "Content tailored to middle school vs. high school" },
    { label: "Delivery", value: "Class-based or assembly, depending on your needs" },
    { label: "Support", value: "Teacher and parent resources to reinforce concepts" }
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="Student Programs"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "For Leaders", href: "/services/for-leaders" }, { label: "Student Programs" }]}
        variant="mental-health" />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Student Programs for Your School Community"
        title="More Than Subject Knowledge"
        paragraphs={[
          "Students need more than subject knowledge to thrive. They need skills for navigating digital life, managing stress, and understanding healthy relationships.",
          "These programs provide developmentally appropriate workshops addressing real challenges students face."
        ]}
      />

      {/* ── CORE PROGRAMS ──────────────────────────────────────── */}
      <section className="bg-soft-bg py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Three Core Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, i) => (
              <div key={i} className="group h-full flex flex-col items-center text-center bg-white p-10 rounded-[2rem] border border-border/60 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">{program.title}</h3>
                <p className="text-muted text-[16px] leading-relaxed mb-8 flex-1">
                  {program.description}
                </p>
                <Link
                  href={program.href}
                  className="mt-auto inline-flex items-center gap-2 text-primary font-bold text-[15px] group-hover:gap-3 transition-all duration-300 bg-soft-bg px-6 py-3 rounded-full hover:bg-secondary/100 hover:text-foreground shadow-sm hover:shadow-md transition-colors"
                  style={{ '--hover-bg': 'var(--secondary)' }}
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION & WHY THIS MATTERS ────────────────── */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Implementation
              </h2>
              <div className="bg-secondary/5 rounded-3xl p-8 border border-secondary/20">
                <ul className="space-y-6">
                  {implementationDetails.map((item, i) => (
                    <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                      <span className="font-bold text-foreground min-w-[120px]">{item.label}:</span>
                      <span className="text-muted text-[15px] leading-relaxed">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why This Matters
              </h2>
              <div className="pl-6 border-l-4 border-primary/30">
                <p className="text-muted text-lg leading-relaxed italic">
                  &quot;These programs develop students&apos; capacity for self-awareness, healthy decision-making, and well-being - essential foundations for all learning.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <TestimonialsSection
        title="What Students & Teachers Say"
        testimonials={[
          {
            quote: "These sessions weren't regular lectures. They felt like real conversations that actually helped us understand why we act the way we do online and with each other.",
            author: "A. Bhatnagar, Grade 10 Student"
          },
          {
            quote: "The mental health tools provided were extremely practical. Our students use the breathing and grounding techniques daily now.",
            author: "Ms. Gupta, Student Counselor"
          }
        ]}
      />

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="Ready to Offer Support?"
        steps={[
          {
            label: "Review",
            title: "Download Programs Overview",
            description: "Detailed information on all our student-facing sessions.",
            href: "#",
            cta: "Download PDF",
          },
          {
            label: "Discuss",
            title: "Schedule Consultation",
            description: "Contact us to plan workshops tailored to your student body.",
            href: "/contact",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
