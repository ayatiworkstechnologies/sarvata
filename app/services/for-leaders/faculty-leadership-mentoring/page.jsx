"use client";
import MainHero from "@/components/MainHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";
import TestimonialsSection from "@/components/about/TestimonialsSection";

export default function FacultyMentoringPage() {
  const leadershipMentoring = [
    {
      title: "Navigating complexity",
      description:
        "Seeing patterns, identifying root causes, making values-aligned decisions under pressure.",
    },
    {
      title: "Leading change strategically",
      description:
        "Building coalition, addressing resistance, maintaining momentum.",
    },
    {
      title: "Developing others",
      description:
        "Mentoring teacher leaders, providing feedback that builds capacity.",
    },
    {
      title: "Managing yourself",
      description:
        "Recognizing stress responses, maintaining perspective, sustainable boundaries.",
    },
  ];

  const capacityBuilding = [
    {
      title: "1. Developing Internal Instructional Coaches",
      description:
        "Train teacher leaders to provide ongoing peer coaching for sustainable capacity.",
    },
    {
      title: "2. Professional Learning Communities (PLC) Design",
      description:
        "Create structures for collaborative teacher learning focused on examining student work and refining practice.",
    },
    {
      title: "3. Customized Faculty Professional Learning",
      description:
        "Multi-session learning sequences aligned with your school goals: differentiation, metacognition, student agency, formative assessment, inclusive practice.",
    },
    {
      title: "4. New Teacher Induction",
      description:
        "Accelerate development and increase retention through structured support beyond “sink or swim.”",
    },
  ];

  const independenceTimeline = [
    {
      year: "Year 1",
      description: "We lead, you observe. We identify internal leaders.",
    },
    {
      year: "Year 2",
      description:
        "Internal leaders take primary roles. We provide behind-the-scenes mentoring.",
    },
    {
      year: "Year 3+",
      description:
        "You operate independently. Optional consultation available.",
    },
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <MainHero
        title="Faculty & Leadership Mentoring"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "For Leaders", href: "/services/for-leaders" },
          { label: "Faculty & Leadership Mentoring" },
        ]}
        webImage="/banners/service-4.jpg"
        mobileImage="/banners/service-mob-4.jpg"
      />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Building Capacity at All Levels"
        title="Why Traditional PD Often Falls Short"
        image="/assets/service-lea-1.webp"
        paragraphs={[
          "Your faculty is your greatest asset. But traditional professional development - episodic workshops with no follow-up - rarely translates to practice change.",
          "Isolation. One-and-done events. Disconnection from practice. No follow-through.",
          "In our experience, what tends to make a difference: sustained focus over time, job-embedded learning, collaborative structures, direct connection to practice, regular feedback.",
        ]}
      />

      {/* ── THE ISOLATION OF LEADERSHIP ─────────────────────── */}
      <section className="bg-soft-bg py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                The Isolation of Leadership
              </h2>
              <p className="text-muted text-[16px] leading-relaxed mb-6">
                School leadership is inherently lonely. You hold information you
                can&apos;t share, make decisions that disappoint some
                stakeholders, and project confidence while navigating
                uncertainty.
              </p>
              <p className="text-muted text-[16px] leading-relaxed mb-10">
                Leadership mentoring provides a trusted thought partner outside
                your system who understands educational leadership deeply and
                with whom you can think through complexity without performance
                or politics.
              </p>

              <div className="bg-white p-6 rounded-3xl border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Practical Details
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground shrink-0 w-32">
                      Who we mentor:
                    </span>
                    <span className="text-muted">
                      Principals, vice principals, coordinators, department
                      heads, teacher leaders
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground shrink-0 w-32">
                      How it works:
                    </span>
                    <span className="text-muted">
                      60-90 minute sessions, typically twice monthly. Your
                      agenda. Complete confidentiality.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-4xl border border-border/60 shadow-lg shadow-black/5">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                What Mentoring Provides
              </h3>
              <div className="space-y-6">
                {leadershipMentoring.map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i || 0) * 0.1 }}
                    key={i}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="block text-foreground mb-1">
                        {item.title}
                      </strong>
                      <p className="text-muted text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUILDING INTERNAL CAPACITY ───────────────────────── */}
      <section className="bg-white py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Building Internal Capacity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {capacityBuilding.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-[1.75rem] bg-soft-bg/50 border border-border/60 hover:bg-soft-bg transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Timeline to independence */}
          <div className="max-w-4xl mx-auto mt-20 md:mt-32">
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Building Toward Independence
              </h3>
            </div>

            <div className="relative px-4">
              {/* Timeline Line */}
              <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-secondary/30 via-secondary/10 to-transparent -translate-x-1/2 hidden sm:block" />

              <div className="space-y-10 md:space-y-0 relative">
                {independenceTimeline.map((phase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Content Card */}
                    <div className="w-full md:w-5/12">
                      <div
                        className={`p-8 rounded-4xl bg-secondary/5 border border-secondary/20 hover:bg-white hover:shadow-xl transition-all duration-500 group ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                      >
                        <div
                          className={`inline-flex px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-4 ${i % 2 === 0 ? "md:ml-auto" : ""}`}
                        >
                          {phase.year}
                        </div>
                        <p className="text-foreground text-[17px] leading-relaxed font-semibold">
                          {phase.description}
                        </p>
                      </div>
                    </div>

                    {/* Dot Indicator */}
                    <div className="absolute left-0 md:left-1/2 top-0 md:top-auto translate-y-2 md:translate-y-0 -translate-x-1/2 flex items-center justify-center z-10">
                      <div className="w-10 h-10 rounded-full bg-white border-4 border-secondary/40 shadow-sm flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-secondary" />
                      </div>
                    </div>

                    <div className="hidden md:block md:w-2/12" />
                    <div className="hidden md:block md:w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <TestimonialsSection
        title="What Our Leaders Say"
        testimonials={[
          {
            quote:
              "Leadership mentoring provides the thought-partnership necessary for authentic growth. Having an external mentor who understands educational complexity is invaluable.",
            author: "Rachel G., Principal",
          },
          {
            quote:
              "Mentoring transformed our teacher leaders from subject experts to true instructional coaches. The impact on faculty morale was immediate.",
            author: "S. Kulkarni, Head of School",
          },
        ]}
      />

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="Ready to Build Capacity?"
        steps={[
          {
            label: "Review",
            title: "Faculty Development Overview",
            description:
              "Download detailed information on our capacity building models.",
            href: "#",
            cta: "Download PDF",
          },
          {
            label: "Discuss",
            title: "Schedule Consultation",
            description:
              "Talk with us about your leadership challenges and goals.",
            href: "/contact-us",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
