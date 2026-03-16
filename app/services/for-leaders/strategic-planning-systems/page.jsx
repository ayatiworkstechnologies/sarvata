import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";

export const metadata = {
  title: "Strategic Planning & Systems - For Leaders | Sarvata",
  description:
    "Building Infrastructure That Enables Vision. Redesign systems to support rather than undermine your goals.",
};

export default function StrategicPlanningPage() {
  const coreSystems = [
    {
      title: "Curriculum Design & Organization",
      description: "Multiple pathways while ensuring all students access essential content."
    },
    {
      title: "Assessment & Reporting",
      description: "Systems that measure deep understanding and communicate growth meaningfully."
    },
    {
      title: "Scheduling & Time Allocation",
      description: "Structures that enable innovation rather than constrain it."
    },
    {
      title: "Learning Support & Intervention",
      description: "Multi-tiered systems that serve all learners."
    },
    {
      title: "Technology Integration",
      description: "Tools that enable personalization without creating inequity."
    },
    {
      title: "Policies & Procedures",
      description: "Alignment with educational values rather than outdated assumptions."
    }
  ];

  const processSteps = [
    {
      title: "Systems Audit",
      description: "Examine current systems, identify misalignments."
    },
    {
      title: "Prioritization",
      description: "Determine which changes have highest impact."
    },
    {
      title: "Collaborative Design",
      description: "Draft redesigns, vet with stakeholders, refine."
    },
    {
      title: "Implementation Support",
      description: "Ongoing consultation and troubleshooting."
    }
  ];

  const whatWeSupport = [
    "Readiness assessment",
    "Building coalition",
    "Communication strategy",
    "Implementation support through the difficult middle phase"
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="Strategic Planning & Systems"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "For Leaders", href: "/services/for-leaders" }, { label: "Strategic Planning & Systems" }]}
       variant="planning" />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Building Infrastructure That Enables Vision"
        title="When Systems and Vision Collide"
        paragraphs={[
          "Many schools articulate compelling visions: personalized learning, student agency, deep understanding. Yet daily reality often contradicts these aspirations—not because people don't care, but because operational systems were designed for a different educational model.",
          "You can't layer new pedagogical approaches onto old industrial-age systems and expect coherence. Sustainable change requires redesigning the infrastructure itself.",
          "Our Approach: We help you examine operational infrastructure through the lens of your instructional vision, identify misalignments, and redesign systems to support rather than undermine your goals.",
          "This is collaborative work: you know your constraints and community; we bring frameworks and external perspective."
        ]}
      />

      {/* ── CORE SYSTEMS ───────────────────────────────────────── */}
      <section className="bg-soft-bg py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Core Systems We Address
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreSystems.map((sys, i) => (
              <div key={i} className="bg-white p-8 rounded-[1.75rem] border border-border/50 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  {/* Icon placeholder for visual hierarchy */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{sys.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{sys.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROCESS & CHALLENGES ───────────────────────────── */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* The Process */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
                The Process
              </h2>
              <div className="space-y-8 relative">
                {/* Timeline line */}
                <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-border -z-10" />

                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div className="w-14 h-14 rounded-full bg-soft-bg border-4 border-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                      <span className="text-primary font-bold">{i + 1}</span>
                    </div>
                    <div className="pt-2">
                       <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                       <p className="text-muted text-[15px]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Ideas Struggle */}
            <div>
              <div className="bg-secondary/5 rounded-[2rem] p-8 md:p-10 border border-secondary/20 h-full">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Why Good Ideas Sometimes Struggle
                </h2>
                <p className="text-muted text-[16px] leading-relaxed mb-10">
                  Educational change can falter not because ideas are unsound, but because changing schools is about changing human behavior and culture.
                </p>

                <h3 className="text-lg font-bold text-foreground mb-6">We support:</h3>
                <div className="space-y-4 mb-10">
                  {whatWeSupport.map((item, i) => (
                    <div key={i} className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-white/50 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                         <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                         </svg>
                      </div>
                      <span className="text-foreground font-medium text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Investment</h3>
                  <p className="text-muted text-[15px] leading-relaxed">
                    Varies by scope: comprehensive multi-year redesign, focused single-year improvement, audit and recommendations only, or ongoing consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            description: "Contact us to start examining your school's infrastructure.",
            href: "/contact",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
