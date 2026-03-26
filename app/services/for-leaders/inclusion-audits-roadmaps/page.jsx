"use client";
import InnerHero from "@/components/InnerHero";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";
import TestimonialsSection from "@/components/about/TestimonialsSection";

export default function InclusionAuditsPage() {
  const processSteps = [
    {
      title: "Discovery",
      description:
        "Document review, confidential interviews, classroom observations, system analysis.",
    },
    {
      title: "Analysis",
      description:
        "Identifying strengths, systemic gaps, working styles, cultural patterns, priorities.",
    },
    {
      title: "Reporting",
      description:
        "Comprehensive report with findings and specific recommendations.",
    },
    {
      title: "Presentation",
      description:
        "Collaborative discussion of findings, feasibility, prioritization.",
    },
  ];

  const domains = [
    {
      title: "Culture & Environment",
      description:
        "How do students, faculty, and families experience belonging?",
    },
    {
      title: "Pedagogical Practice",
      description: "How effectively do classroom practices meet diverse needs?",
    },
    {
      title: "Systems & Structures",
      description:
        "Do operational systems enable or impede inclusive practice?",
    },
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="Inclusion Audits & Roadmaps"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "For Leaders", href: "/services/for-leaders" },
          { label: "Inclusion Audits & Roadmaps" },
        ]}
        variant="planning"
        image="/assets/service-lea-2.webp"
      />

      {/* ── FROM ASPIRATION TO ACTION & THE GAP ────────────────── */}
      <section className="bg-white py-6 md:py-12 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                From Aspiration to Evidence-Based Action
              </h2>
              <p className="text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Most schools genuinely aspire to be inclusive. Yet aspiration
                doesn’t automatically translate to systematic practice.
              </p>
            </div>

            <div className="relative p-10 md:p-16 rounded-[3rem] bg-soft-bg border border-border overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                    The Gap
                  </h2>
                  <div className="space-y-6 text-muted text-lg leading-relaxed">
                    <p>
                      Well-intentioned policies sit unimplemented. Some students
                      consistently fall through cracks.
                    </p>
                    <p>
                      The gap isn’t about commitment. It’s about translating
                      values into coherent school-wide systems while managing
                      everything else.
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-10 rounded-3xl border border-primary/20 shadow-2xl shadow-primary/5 relative"
                >
                  <p className="text-foreground text-xl font-semibold leading-relaxed">
                    An inclusion audit provides what aspiration cannot:{" "}
                    <span className="text-primary italic font-bold">
                      objective data about current reality and strategic
                      pathways forward.
                    </span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT THIS PROVIDES ─────────────────────────────────── */}
      <section className="bg-soft-bg py-6 md:py-12 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              What This Provides
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Collaborative discovery of your current inclusive practices",
              "Objective, evidence-based assessment",
              "Confidential report with prioritized, actionable recommendations",
              "Strategic roadmap sequencing changes thoughtfully",
            ].map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i || 0) * 0.1 }}
                key={i}
                className="flex gap-4 items-start bg-white h-full p-6 rounded-[1.25rem] shadow-sm border border-border/50"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-primary"
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
                <p className="text-foreground font-medium text-[15px] pt-1 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROCESS ──────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-6 md:py-12">
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

      {/* ── KEY DOMAINS & DETAILS ─────────────────────────────────── */}
      <section className="bg-soft-bg py-6 md:py-12 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Three Assessment Domains
              </h2>
              <div className="space-y-6">
                {domains.map((domain, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white p-6 rounded-2xl border border-border/50 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {domain.title}
                    </h3>
                    <p className="text-muted text-sm">{domain.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Practical Details
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <span className="w-6 h-6 shrink-0 rounded bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <div>
                      <strong className="block text-foreground text-[15px]">
                        Timeline
                      </strong>
                      <span className="text-muted text-sm">
                        6-8 weeks from kickoff to final report
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="w-6 h-6 shrink-0 rounded bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                    <div>
                      <strong className="block text-foreground text-[15px]">
                        Confidentiality
                      </strong>
                      <span className="text-muted text-sm">
                        Individual voices anonymized, you control report access
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="w-6 h-6 shrink-0 rounded bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </span>
                    <div>
                      <strong className="block text-foreground text-[15px]">
                        Investment
                      </strong>
                      <span className="text-muted text-sm">
                        Contact for consultation - varies by school size and
                        scope
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  After the Audit
                </h2>
                <p className="text-muted text-[15px] leading-relaxed">
                  Many schools engage us for continued partnership implementing
                  recommendations: faculty professional development, leadership
                  coaching, system design and periodic check-ins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHEN THIS MAKES SENSE ─────────────────────────────────── */}
      <section className="bg-white py-6 md:py-12 relative overflow-hidden">
        <div className="container-max relative z-10 max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-[2rem] bg-secondary/5 border border-secondary/20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              When This Makes Sense
            </h2>
            <div className="space-y-4">
              <p className="text-muted text-[16px] leading-relaxed">
                While the Leadership may be firmly committed to inclusion as a
                foundational value, the current practices may not yet
                consistently reflect this commitment.
              </p>
              <p className="text-muted text-[16px] leading-relaxed">
                All well-intentioned initiatives introduced have not sustained
                itself school-wide.
              </p>
              <p className="text-muted text-[16px] leading-relaxed font-medium text-foreground">
                A more structured, data-informed review will ensure inclusion
                becomes embedded rather than existing as isolated efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <TestimonialsSection
        title="What School Leaders Say"
        testimonials={[
          {
            quote:
              "The inclusion audit gave us what our internal teams couldn't: an objective, systemic view of our gaps. The resulting roadmap is now our primary strategic document.",
            author: "Dr. Aruna V., Head of School",
          },
          {
            quote:
              "Finally, a framework that moves beyond compliance toward genuine culture change. The audit was the catalyst we needed to align our practice with our mission.",
            author: "S. Murthy, Principal",
          },
        ]}
      />

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="Ready to Evaluate and Improve?"
        steps={[
          {
            label: "Review",
            title: "Download Audit Overview",
            description:
              "Get detailed information about our process and methodology.",
            href: "#",
            cta: "Download PDF",
          },
          {
            label: "Discuss",
            title: "Schedule Consultation",
            description:
              "Talk with us confidentially about your school's inclusion journey.",
            href: "/contact-us",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
