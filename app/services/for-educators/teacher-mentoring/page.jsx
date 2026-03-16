import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";

export const metadata = {
  title: "Teacher Mentoring - For Educators | Sarvata",
  description:
    "From Workshop to Classroom. Mentoring helps you implement strategies with your actual students in a confidential, non-evaluative partnership.",
};

export default function TeacherMentoringPage() {
  const steps = [
    {
      title: "Partnership",
      description: "We meet to understand your goals and context."
    },
    {
      title: "Co-Planning",
      description: "Together we design lessons incorporating new strategies."
    },
    {
      title: "Observation",
      description: "We observe focused on what you asked us to notice."
    },
    {
      title: "Reflection",
      description: "Protected debrief time to analyze and plan next steps."
    },
    {
      title: "Iteration",
      description: "You try again, we support, we refine."
    }
  ];

  const differentiators = [
    {
      title: "Confidential",
      description: "What we discuss stays between us."
    },
    {
      title: "Job-embedded",
      description: "Your classroom, your students, your curriculum."
    },
    {
      title: "Non-evaluative",
      description: "Partnership for growth, not assessment."
    }
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="Teacher Mentoring"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "For Educators", href: "/services/for-educators" }, { label: "Teacher Mentoring" }]}
       variant="mentoring" />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="From Workshop to Classroom"
        title="Implement Strategies with Real Support"
        paragraphs={[
          "Workshops provide tools. Mentoring helps you implement them with your actual students. This is a confidential, non-evaluative partnership—not supervision."
        ]}
      />

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="relative bg-soft-bg overflow-hidden py-16 md:py-24">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-muted text-lg">
              Typical commitment: 4-6 cycles over a semester, meeting every 2-3 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-center group relative rounded-[1.5rem] border border-border/60 bg-white p-6 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6">
                  <span className="text-primary font-bold text-lg">Step {i + 1}</span>
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

      {/* ── WHAT MAKES THIS DIFFERENT ──────────────────────────── */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              What Makes This Different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentiators.map((diff, i) => (
              <div key={i} className="text-center p-8 border border-border/50 rounded-3xl hover:border-primary/20 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 mx-auto flex items-center justify-center mb-6">
                  {/* Icon placeholder */}
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{diff.title}</h3>
                <p className="text-muted text-[16px] leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="Ready to Partner?"
        steps={[
          {
            label: "Overview",
            title: "Detailed Mentoring Overview",
            description: "Read more about our approach and typical cycles.",
            href: "#",
            cta: "Read overview",
          },
          {
            label: "Testimonials",
            title: "See What Teachers Say",
            description: "Hear from educators who have partnered with us.",
            href: "#",
            cta: "View Testimonials",
          },
          {
            label: "Discuss",
            title: "Schedule Consultation",
            description: "Speak directly with us to explore how mentoring might help.",
            href: "/contact",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
