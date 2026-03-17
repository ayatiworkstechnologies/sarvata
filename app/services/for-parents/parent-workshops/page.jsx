"use client";
import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";



export default function ParentWorkshopsPage() {
  const topics = [
    {
      title: "Supporting Your Neurodiverse Child",
      description: "Clear overview of neurodiversity (ADHD, autism, dyslexia) with practical strategies for organization, emotional regulation, and celebrating unique strengths."
    },
    {
      title: "Cyber Safety & Digital Well-being",
      description: "Navigate the digital world beyond fear-based rules. Setting healthy boundaries, managing screen time, fostering open conversations about online life."
    },
    {
      title: "The “Learning How to Learn” Parent",
      description: "Foster metacognition at home with question stems and routines that help your child build resilience, growth mindset, and independence."
    },
    {
      title: "Homework Without Battles",
      description: "Transform homework time from struggle to productive routine. Why it's difficult for some children and practical strategies that work."
    },
    {
      title: "Understanding Anxiety in Children",
      description: "Recognize when worry becomes problematic. Effective support strategies that don't enable avoidance, and when professional help is needed."
    }
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="Parent Workshops"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "For Parents", href: "/services/for-parents" }, { label: "Parent Workshops" }]}
       variant="mentoring" />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Partnering in Your Child's Learning"
        title="A Shared Language for Success"
        paragraphs={[
          "When parents and educators share the same tools and strategies, it creates a consistent, supportive environment for children to thrive.",
          "Practical, evidence-based workshops to support your child's unique journey at home.",
          "Our workshops build on the same core philosophies we use with educators: inclusive giftedness, fostering metacognition, and supporting the whole child."
        ]}
      />

      {/* ── WORKSHOP TOPICS ──────────────────────────────────────── */}
      <section className="bg-soft-bg py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Workshop Topics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {topics.map((item, i) => (
              <div key={i} className="group relative rounded-[1.75rem] border border-border/60 bg-white p-8 overflow-hidden hover:shadow-2xl hover:border-transparent hover:-translate-y-2 transition-all duration-500">
                <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">{item.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed mb-6">{item.description}</p>
                
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <svg className="w-5 h-5 text-primary group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                   </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Join Our Community"
        title="You are not alone on this journey."
        steps={[
          {
            label: "Explore",
            title: "See Workshop Schedule",
            description: "View upcoming dates and times for our interactive workshops.",
            href: "#",
            cta: "View Schedule",
          },
        ]}
      />
    </main>
  );
}
