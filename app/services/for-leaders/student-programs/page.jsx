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
      description:
        "Navigate the online world with confidence and smart choices. Real talk about digital reality.",
      href: "/services/for-leaders/student-programs/cyber-safety-digital-citizenship",
      icon: <Shield className="w-8 h-8 transition-colors duration-500" strokeWidth={1.5} />,
    },
    {
      title: "Mental Health & Well-Being",
      description:
        "Practical tools for managing stress and difficult emotions. Skills that actually work.",
      href: "/services/for-leaders/student-programs/mental-health-well-being",
      icon: <Brain className="w-8 h-8 transition-colors duration-500" strokeWidth={1.5} />,
    },
    {
      title: "Healthy Relationships & Boundaries",
      description:
        "Education about consent, boundaries, and navigating social complexities. Mature conversations about real topics.",
      href: "/services/for-leaders/student-programs/healthy-relationships-boundaries",
      icon: <Users className="w-8 h-8 transition-colors duration-500" strokeWidth={1.5} />,
    },
  ];

  const implementationDetails = [
    {
      label: "Format",
      value: "60-90 minute interactive sessions (not lectures)",
    },
    {
      label: "Adaptation",
      value: "Content tailored to middle school vs. high school",
    },
    {
      label: "Delivery",
      value: "Class-based or assembly, depending on your needs",
    },
    {
      label: "Support",
      value: "Teacher and parent resources to reinforce concepts",
    },
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="Student Programs"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "For Leaders", href: "/services/for-leaders" },
          { label: "Student Programs" },
        ]}
        variant="mental-health"
        webImage="/banners/service-6.jpg"
        mobileImage="/banners/service-mob-6.jpg"
      />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Student Programs for Your School Community"
        title="More Than Subject Knowledge"
        image="/assets/ab-sec-5-3.webp"
        paragraphs={[
          "Students need more than subject knowledge to thrive. They need skills for navigating digital life, managing stress, and understanding healthy relationships.",
          "These programs provide developmentally appropriate workshops addressing real challenges students face.",
        ]}
      />

      {/* ── CORE PROGRAMS ──────────────────────────────────────── */}
      <section className="bg-soft-bg py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Three Core Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white p-8 rounded-[1.75rem] border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 ring-1 ring-primary/20 shadow-inner group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted text-[15px] leading-relaxed mb-6 flex-1">
                  {program.description}
                </p>
                <Link
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
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION & WHY THIS MATTERS ────────────────── */}
      <section className="bg-white py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Implementation
              </h2>
              <div className="bg-secondary/5 rounded-3xl p-8 border border-secondary/20">
                <ul className="space-y-6">
                  {implementationDetails.map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-2"
                    >
                      <span className="font-bold text-foreground min-w-[120px]">
                        {item.label}:
                      </span>
                      <span className="text-muted text-[15px] leading-relaxed">
                        {item.value}
                      </span>
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
                  &quot;These programs develop students&apos; capacity for
                  self-awareness, healthy decision-making, and well-being -
                  essential foundations for all learning.&quot;
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
            quote:
              "These sessions weren't regular lectures. They felt like real conversations that actually helped us understand why we act the way we do online and with each other.",
            author: "A. Bhatnagar, Grade 10 Student",
          },
          {
            quote:
              "The mental health tools provided were extremely practical. Our students use the breathing and grounding techniques daily now.",
            author: "Ms. Gupta, Student Counselor",
          },
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
            description:
              "Detailed information on all our student-facing sessions.",
            href: "#",
            cta: "Download PDF",
          },
          {
            label: "Discuss",
            title: "Schedule Consultation",
            description:
              "Contact us to plan workshops tailored to your student body.",
            href: "/contact-us",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
