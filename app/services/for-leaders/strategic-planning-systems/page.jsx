"use client";
import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import {
  BookOpen,
  LineChart,
  Calendar,
  LifeBuoy,
  Laptop,
  FileText,
} from "lucide-react";

export default function StrategicPlanningPage() {
  const coreSystems = [
    {
      title: "Curriculum Design & Organization",
      description:
        "Multiple pathways while ensuring all students access essential content.",
    },
    {
      title: "Assessment & Reporting",
      description:
        "Systems that measure deep understanding and communicate growth meaningfully.",
    },
    {
      title: "Scheduling & Time Allocation",
      description:
        "Structures that enable innovation rather than constrain it.",
    },
    {
      title: "Learning Support & Intervention",
      description: "Multi-tiered systems that serve all learners.",
    },
    {
      title: "Technology Integration",
      description:
        "Tools that enable personalization without creating inequity.",
    },
    {
      title: "Policies & Procedures",
      description:
        "Alignment with educational values rather than outdated assumptions.",
    },
  ];

  const processSteps = [
    {
      title: "Systems Audit",
      description: "Examine current systems, identify misalignments.",
    },
    {
      title: "Prioritization",
      description: "Determine which changes have highest impact.",
    },
    {
      title: "Collaborative Design",
      description: "Draft redesigns, vet with stakeholders, refine.",
    },
    {
      title: "Implementation Support",
      description: "Ongoing consultation and troubleshooting.",
    },
  ];

  const whatWeSupport = [
    "Readiness assessment",
    "Building coalition",
    "Communication strategy",
    "Implementation support through the difficult middle phase",
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="Strategic Planning & Systems"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "For Leaders", href: "/services/for-leaders" },
          { label: "Strategic Planning & Systems" },
        ]}
        variant="planning"
        image="/banners/service-par-5.jpg"
      />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Building Infrastructure That Enables Vision"
        title="When Systems and Vision Collide"
        image="/assets/home-sec-3-1.webp"
        paragraphs={[
          "Many schools articulate compelling visions: personalized learning, student agency, deep understanding. Yet daily reality often contradicts these aspirations - not because people don't care, but because operational systems were designed for a different educational model.",
          "You can't layer new pedagogical approaches onto old industrial-age systems and expect coherence. Sustainable change requires redesigning the infrastructure itself.",
          "Our Approach: We help you examine operational infrastructure through the lens of your instructional vision, identify misalignments, and redesign systems to support rather than undermine your goals.",
          "This is collaborative work: you know your constraints and community; we bring frameworks and external perspective.",
        ]}
      />

      {/* ── CORE SYSTEMS ───────────────────────────────────────── */}
      <section className="bg-soft-bg py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Core Systems We Address
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreSystems.map((sys, i) => {
              const Icon =
                [BookOpen, LineChart, Calendar, LifeBuoy, Laptop, FileText][
                i
                ] || FileText;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i || 0) * 0.1 }}
                  key={i}
                  className="group h-full bg-white p-8 rounded-[1.75rem] border border-border/50 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 text-primary ring-1 ring-primary/20 shadow-inner group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Icon className="w-7 h-7 transition-colors duration-500 group-hover:text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {sys.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed flex-1">
                    {sys.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE PROCESS ──────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-8 md:py-16">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow"
            >
              Our Methodology
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
              The Process
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative px-4">
            {/* Timeline Line */}
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-secondary/30 to-transparent -translate-x-1/2 hidden sm:block" />

            <div className="space-y-12 md:space-y-0 relative">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-5/12">
                    <div
                      className={`p-8 rounded-[2rem] bg-soft-bg/50 border border-border/60 hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-500 group ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted text-[16px] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step Number Indicator */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:top-auto translate-y-2 md:translate-y-0 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-primary/20 shadow-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Spacer for MD screens */}
                  <div className="hidden md:block md:w-2/12" />
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES & SUPPORT ───────────────────────────── */}
      <section className="bg-soft-bg py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-border shadow-xl shadow-black/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                    Why Good Ideas Sometimes Struggle
                  </h2>
                  <p className="text-muted text-[17px] leading-relaxed mb-8">
                    Educational change can falter not because ideas are unsound,
                    but because changing schools is about changing human
                    behavior and culture.
                  </p>
                  <div className="pt-8 border-t border-border mt-auto">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Investment
                    </h3>
                    <p className="text-muted text-[15px] leading-relaxed">
                      Varies by scope: comprehensive multi-year redesign,
                      focused single-year improvement, audit and recommendations
                      only, or ongoing consultation.
                    </p>
                  </div>
                </div>
                <div className="bg-secondary/5 rounded-3xl p-8 border border-secondary/20 h-full">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    How We Support You:
                  </h3>
                  <div className="space-y-4">
                    {whatWeSupport.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 items-center bg-white p-4 rounded-xl border border-secondary/10 shadow-sm"
                      >
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                          <svg
                            className="w-3.5 h-3.5 text-secondary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-foreground font-medium text-[15px]">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <TestimonialsSection
        title="What Our Partners Say"
        testimonials={[
          {
            quote:
              "Finally, our operational systems support our educational vision instead of competing with it. The redesign of our assessment framework was a game-changer.",
            author: "Mark S., Operations Director",
          },
          {
            quote:
              "Strategic planning with Sarvata isn't about documents; it's about shifting the behavior of our entire school community toward our goals.",
            author: "L. Fernandez, Principal",
          },
        ]}
      />

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="Ready to Redesign?"
        steps={[
          {
            label: "Review",
            title: "Download Systems Overview",
            description: "Read more about our approach to systems alignment.",
            href: "#",
            cta: "Download PDF",
          },
          {
            label: "Discuss",
            title: "Schedule Consultation",
            description:
              "Contact us to start examining your school's infrastructure.",
            href: "/contact-us",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
