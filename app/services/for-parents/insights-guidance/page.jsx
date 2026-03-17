"use client";
import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";
import Link from "next/link";



export default function InsightsGuidancePage() {
  const services = [
    {
      title: "Academic & Learning Profiles",
      description: "Assessments identifying unique learning preferences, cognitive strengths, and areas for growth - giving you a clear picture of their academic potential."
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
      <section className="bg-white py-20 md:py-32 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
              >
                Our Philosophy
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Approach</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative bg-secondary/5 rounded-[2.5rem] p-10 md:p-12 border border-secondary/20 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-[120px] font-bold text-secondary/5 group-hover:text-secondary/10 transition-colors pointer-events-none">1</div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 shadow-inner">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">A &quot;Whole Child&quot; Perspective</h3>
                  <p className="text-muted text-[17px] leading-relaxed">
                    We connect the dots between academic, social, and emotional well-being. We don&apos;t just look at scores; we look at the human behind them.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative bg-primary/5 rounded-[2.5rem] p-10 md:p-12 border border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-[120px] font-bold text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">2</div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-inner">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">Empowering Your Advocacy</h3>
                  <p className="text-muted text-[17px] leading-relaxed">
                    We provide clear language, concrete data, and professional reports to partner confidently with your child&apos;s school. You become the expert the school listens to.
                  </p>
                </div>
              </motion.div>
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
