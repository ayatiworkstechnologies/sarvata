"use client";
import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";



export default function WorkshopsTrainingPage() {
  const workshops = [
    {
      title: "Designing for Student Choice",
      duration: "3 hours | K-12 educators",
      challenge: "You want students to have agency but need clear targets and manageable logistics.",
      whatYouDo: "Design “bouquet tasks” with multiple pathways, create choice boards that offer meaningful options, build scaffolding for all students, practice logistics of choice-based learning.",
      youLeaveWith: "Choice board templates, planning protocols, adapted lesson"
    },
    {
      title: "Making Thinking Visible",
      duration: "2.5 hours | K-12 educators",
      challenge: "You want independent, self-aware students, but metacognition doesn’t develop automatically.",
      whatYouDo: "Practice metacognitive questioning techniques, learn routines for building reflection into lessons, model thinking processes efficiently, connect metacognitive practice to content.",
      youLeaveWith: "Question stems, reflection protocols, modeling strategies"
    },
    {
      title: "Differentiation That Doesn’t Break You",
      duration: "3 hours | K-12 educators, especially those new to differentiation",
      challenge: "Differentiation matters, but creating different tasks for every student is exhausting.",
      whatYouDo: "Identify strategic differentiation points, use formative assessment for flexible grouping, build student independence for navigation, leverage technology for efficiency.",
      youLeaveWith: "Decision-making framework, grouping protocols, management strategies"
    },
    {
      title: "Recognizing Potential in All Students",
      duration: "2.5 hours | K-12 teachers and support staff",
      challenge: "Traditional “gifted” identification misses many capable students.",
      whatYouDo: "Expand thinking about high potential and talent, practice observation for cognitive strengths and creativity, learn differentiation for enrichment, create environments where all strengths emerge.",
      youLeaveWith: "Observation checklists, enrichment strategies, strength-based protocols"
    }
  ];

  const formats = [
    {
      title: "In-School Programs",
      description: "Customized to your curriculum, grade levels, and goals. Whole faculty, departments, or teams."
    },
    {
      title: "Open Courses",
      description: "Online workshops with educators from multiple schools. Accessible anywhere."
    },
    {
      title: "Series",
      description: "4-6 sessions with time between to try strategies, bring questions, and refine together."
    }
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="Workshops & Training"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "For Educators", href: "/services/for-educators" }, { label: "Workshops & Training" }]}
       variant="mentoring" />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Overview"
        title="Practical Strategies That Work"
        paragraphs={[
          "Our workshops give you tools you can actually use. No lectures. No theory without practice. Just collaborative work on real teaching challenges."
        ]}
      />

      {/* ── FEATURED WORKSHOPS ─────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-16 md:py-24">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-semibold mb-4">
              Featured
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Workshops
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {workshops.map((workshop, i) => (
              <div
                key={i}
                className="group relative rounded-[1.75rem] border border-border/60 bg-soft-bg p-8 lg:p-10 overflow-hidden hover:shadow-2xl hover:border-transparent hover:-translate-y-2 transition-all duration-500"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{workshop.title}</h3>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {workshop.duration}
                  </span>
                </div>
                
                <div className="space-y-4 text-[15px] leading-relaxed">
                  <div>
                    <strong className="text-foreground">The challenge: </strong>
                    <span className="text-muted">{workshop.challenge}</span>
                  </div>
                  <div>
                    <strong className="text-foreground">What you’ll do: </strong>
                    <span className="text-muted">{workshop.whatYouDo}</span>
                  </div>
                  <div>
                    <strong className="text-foreground">You leave with: </strong>
                    <span className="text-muted">{workshop.youLeaveWith}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKSHOP FORMATS ───────────────────────────────────── */}
      <section className="bg-soft-bg py-16 md:py-24 relative overflow-hidden text-center">
        <div className="container-max relative z-10">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Workshop Formats
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {formats.map((format, i) => (
              <div key={i} className="bg-white p-6 lg:p-8 rounded-[1.25rem] shadow-sm border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3">{format.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="Ready to Transform Your Practice?"
        steps={[
          {
            label: "Explore",
            title: "Download Workshop Catalog",
            description: "Get the full list of our available workshops and details.",
            href: "#",
            cta: "Download Catalog",
          },
          {
            label: "Plan",
            title: "Contact Us to Schedule",
            description: "Ready to set up a workshop for your school or team?",
            href: "/contact",
            cta: "Contact Us",
          },
          {
            label: "Discuss",
            title: "Schedule Consultation",
            description: "Speak with our team to find the best fit for your educators.",
            href: "/contact",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
