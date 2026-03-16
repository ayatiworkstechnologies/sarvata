import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";

export const metadata = {
  title: "Inclusion Audits & Roadmaps - For Leaders | Sarvata",
  description:
    "From Aspiration to Evidence-Based Action. An inclusion audit provides objective data about current reality and strategic pathways forward.",
};

export default function InclusionAuditsPage() {
  const processSteps = [
    {
      title: "Discovery",
      description: "Document review, confidential interviews, classroom observations, system analysis."
    },
    {
      title: "Analysis",
      description: "Identifying strengths, systemic gaps, working styles, cultural patterns, priorities."
    },
    {
      title: "Reporting",
      description: "Comprehensive report with findings and specific recommendations."
    },
    {
      title: "Presentation",
      description: "Collaborative discussion of findings, feasibility, prioritization."
    }
  ];

  const domains = [
    {
      title: "Culture & Environment",
      description: "How do students, faculty, and families experience belonging?"
    },
    {
      title: "Pedagogical Practice",
      description: "How effectively do classroom practices meet diverse needs?"
    },
    {
      title: "Systems & Structures",
      description: "Do operational systems enable or impede inclusive practice?"
    }
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="Inclusion Audits & Roadmaps"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "For Leaders", href: "/services/for-leaders" }, { label: "Inclusion Audits & Roadmaps" }]}
       variant="planning" />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="From Aspiration to Evidence-Based Action"
        title="When Aspiration Isn't Enough"
        paragraphs={[
          "Most schools genuinely aspire to be inclusive. Yet aspiration doesn't automatically translate to systematic practice.",
          "Well-intentioned policies sit unimplemented. Some students consistently fall through cracks.",
          "The gap isn't about commitment. It's about translating values into coherent school-wide systems while managing everything else.",
          "An inclusion audit provides what aspiration cannot: objective data about current reality and strategic pathways forward."
        ]}
      />

      {/* ── WHAT THIS PROVIDES ─────────────────────────────────── */}
      <section className="bg-soft-bg py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              What This Provides
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Collaborative discovery of your current inclusive practices", "Objective, evidence-based assessment", "Confidential report with prioritized, actionable recommendations", "Strategic roadmap sequencing changes thoughtfully"].map((item, i) => (
              <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-[1.25rem] shadow-sm border border-border/50">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground font-medium text-[15px] pt-1 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROCESS ──────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-16 md:py-24">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              The Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="flex items-center group relative rounded-[1.5rem] border border-border/60 bg-soft-bg/50 p-6 overflow-hidden hover:bg-soft-bg hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6">
                  <span className="text-primary font-bold text-lg">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted text-[15px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY DOMAINS & DETAILS ─────────────────────────────────── */}
      <section className="bg-soft-bg py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Three Assessment Domains
              </h2>
              <div className="space-y-6">
                {domains.map((domain, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-border/50 shadow-sm">
                    <h3 className="text-lg font-bold text-foreground mb-2">{domain.title}</h3>
                    <p className="text-muted text-sm">{domain.description}</p>
                  </div>
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
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </span>
                    <div>
                      <strong className="block text-foreground text-[15px]">Timeline</strong>
                      <span className="text-muted text-sm">6-8 weeks from kickoff to final report</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="w-6 h-6 shrink-0 rounded bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </span>
                    <div>
                      <strong className="block text-foreground text-[15px]">Confidentiality</strong>
                      <span className="text-muted text-sm">Individual voices anonymized, you control report access</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="w-6 h-6 shrink-0 rounded bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                    </span>
                    <div>
                      <strong className="block text-foreground text-[15px]">Investment</strong>
                      <span className="text-muted text-sm">Contact for consultation—varies by school size and scope</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  After the Audit
                </h2>
                <p className="text-muted text-[15px] leading-relaxed">
                  Many schools engage us for continued partnership implementing recommendations: faculty professional development, leadership coaching, system design and periodic check-ins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHEN THIS MAKES SENSE ─────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10 max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-[2rem] bg-secondary/5 border border-secondary/20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              When This Makes Sense
            </h2>
            <div className="space-y-4">
               <p className="text-muted text-[16px] leading-relaxed">
                 While the Leadership may be firmly committed to inclusion as a foundational value, the current practices may not yet consistently reflect this commitment.
               </p>
               <p className="text-muted text-[16px] leading-relaxed">
                 All well-intentioned initiatives introduced have not sustained itself school-wide.
               </p>
               <p className="text-muted text-[16px] leading-relaxed font-medium text-foreground">
                 A more structured, data-informed review will ensure inclusion becomes embedded rather than existing as isolated efforts.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="Ready to Evaluate and Improve?"
        steps={[
          {
            label: "Review",
            title: "Download Audit Overview",
            description: "Get detailed information about our process and methodology.",
            href: "#",
            cta: "Download PDF",
          },
          {
            label: "Discuss",
            title: "Schedule Consultation",
            description: "Talk with us confidentially about your school's inclusion journey.",
            href: "/contact",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
