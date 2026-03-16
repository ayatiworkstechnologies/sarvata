import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";
import Link from "next/link";

export const metadata = {
  title: "Insights & Guidance - For Parents | Sarvata",
  description:
    "Professional assessment and counseling to help you confidently support your child's journey.",
};

export default function InsightsGuidancePage() {
  const services = [
    {
      title: "Academic & Learning Profiles",
      description: "Assessments identifying unique learning preferences, cognitive strengths, and areas for growth—giving you a clear picture of their academic potential."
    },
    {
      title: "Psycho-Counseling Support",
      description: "A caring space for children and adolescents to explore social-emotional challenges, manage anxiety, build resilience, and develop healthy coping strategies."
    },
    {
      title: "Guidance for Diverse Learners",
      description: "Expert guidance for parents of neurodiverse children, helping you understand and support learning differences while navigating school systems."
    }
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="Insights & Guidance"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "For Parents", href: "/services/for-parents" }, { label: "Insights & Guidance" }]}
       variant="planning" />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Understanding Your Unique Child"
        title="You Are Your Child&apos;s Greatest Advocate"
        paragraphs={[
          "You might be asking: “Why is my bright child struggling?” “How can I support their unique gifts?” “Is this anxiety or normal development?” “How do I navigate the school system?”",
          "We provide a safe, confidential space to find clear answers and practical strategies.",
          "Professional assessment and counseling to help you confidently support your child's journey."
        ]}
      />

      {/* ── OUR SERVICES ──────────────────────────────────────── */}
      <section className="bg-soft-bg py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[1.75rem] border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-secondary/5 rounded-3xl p-8 border border-secondary/20 hover:border-secondary/40 transition-colors">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                     <span className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center text-secondary">1</span>
                     A &quot;Whole Child&quot; Perspective
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed">We connect the dots between academic, social, and emotional well-being.</p>
               </div>
               <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                     <span className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">2</span>
                     Empowering Your Advocacy
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed">We provide clear language, concrete data, and professional reports to partner confidently with your child&apos;s school.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Ready to Gain Clarity?"
        title="You don't have to navigate this journey alone."
        steps={[
          {
            label: "Discuss",
            title: "Schedule a Consultation",
            description: "Speak with our professionals about your child's unique needs.",
            href: "/contact",
            cta: "Schedule a Consultation",
          },
        ]}
      />
    </main>
  );
}
