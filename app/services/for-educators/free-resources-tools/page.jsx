"use client";
import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";
import TestimonialsSection from "@/components/about/TestimonialsSection";



export default function FreeResourcesPage() {
  const resources = [
    {
      title: "Choice Board Design Kit",
      description: "Offering choice without creating 25 different lessons.",
      whenToUse: "Offering choice without creating 25 different lessons",
      details: ["Choice board templates", "Decision making framework"],
      link: "#"
    },
    {
      title: "Metacognitive Question Stems",
      description: "Question stems organized by purpose, grade-band adaptations, sentence starters, protocols for independent use.",
      whenToUse: "Deepening student self-awareness about learning",
      details: ["Organized by purpose", "Grade-band adaptations"],
      link: "#"
    },
    {
      title: "Strength-Spotting Observation Guide",
      description: "Observable indicators, prompts for noticing abilities beyond tests, note-taking template, conversation guide.",
      whenToUse: "Planning enrichment or building fuller student profiles",
      details: ["Observable indicators", "Note-taking template"],
      link: "#"
    },
    {
      title: "Differentiation Decision Framework",
      description: "Questions for when/where to differentiate, three-tier framework, time-saving approaches, troubleshooting.",
      whenToUse: "Differentiation feels overwhelming and needs strategic focus",
      details: ["Three-tier framework", "Decision tree"],
      link: "#"
    },
    {
      title: "Formative Assessment Quick-Checks",
      description: "15 fast techniques, guidance on what each reveals, question stems, flexible grouping strategies.",
      whenToUse: "Need real-time data without piles of papers to grade",
      details: ["15 fast techniques", "Grouping strategies"],
      link: "#"
    },
    {
      title: "Building Independence Scaffolding Planner",
      description: "Framework for identifying independence skills, lesson template, gradual release model, troubleshooting guide.",
      whenToUse: "Students always need you and you want to build capacity",
      details: ["Gradual release model", "Troubleshooting guide"],
      link: "#"
    }
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="Free Resources & Tools"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "For Educators", href: "/services/for-educators" }, { label: "Free Resources & Tools" }]}
       variant="resources" 
        image="/assets/service-edu-2.webp" />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Tools for Your Practice, Freely Shared"
        title="Resources From Real Classrooms"
        paragraphs={[
          "Resources we've developed and used in real classrooms. Download, adapt, share with colleagues. No registration required."
        ]}
      />

      {/* ── RESOURCES GRID ─────────────────────────────────────── */}
      <section className="relative bg-soft-bg overflow-hidden py-6 md:py-12">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {resources.map((resource, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative h-full rounded-[1.75rem] border border-border/60 bg-white p-8 overflow-hidden hover:shadow-2xl hover:border-transparent transition-all duration-500 flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">{resource.title}</h3>
                  <p className="text-muted text-[15px] leading-relaxed mb-6">{resource.description}</p>
                  

                  <div className="space-y-3 mb-8">
                    {resource.details.map((detail, j) => (
                      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i || 0) * 0.1 }} key={j} className="flex items-center gap-3 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-6 border-t border-border/40">
                  <a
                    href={resource.link}
                    className="inline-flex w-full items-center justify-center gap-2 bg-primary text-white py-4 px-6 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 active:scale-[0.98]"
                  >
                    Download PDF
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USING THESE RESOURCES ────────────────────────────────── */}
      <section className="bg-white py-6 md:py-12 relative overflow-hidden text-center">
        <div className="container-max relative z-10">
           <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-8">
              Using These Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
               <div className="p-6 h-full rounded-2xl bg-secondary/10 border border-secondary/20">
                 <h3 className="font-bold text-foreground mb-2">Adapt Freely</h3>
                 <p className="text-sm text-muted">Make them fit your specific context and students.</p>
               </div>
               <div className="p-6 h-full rounded-2xl bg-secondary/10 border border-secondary/20">
                 <h3 className="font-bold text-foreground mb-2">Share Generously</h3>
                 <p className="text-sm text-muted">Pass them along to colleagues who might benefit.</p>
               </div>
               <div className="p-6 h-full rounded-2xl bg-secondary/10 border border-secondary/20">
                 <h3 className="font-bold text-foreground mb-2">Start Small</h3>
                 <p className="text-sm text-muted">Focus on one pressing challenge at a time.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <TestimonialsSection
        title="What Our Community Says"
        testimonials={[
          {
            quote: "Sharing these resources freely shows how much Sarvata cares about classroom transformation. The choice-board kit alone saved me hours of planning.",
            author: "P. Sharma, Educator"
          },
          {
            quote: "These aren't just templates; they are deep frameworks that shift how you think about teaching. I use the metacognitive stems in every lesson now.",
            author: "A. Reddy, Teacher"
          }
        ]}
      />

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Want More?"
        title="Move Beyond the Foundations"
        steps={[
          {
            label: "Learn",
            title: "Workshops & Training",
            description: "Join hands-on sessions to build your skills.",
            href: "/services/for-educators/workshops-training",
            cta: "Explore Workshops",
          },
          {
            label: "Partner",
            title: "Teacher Mentoring",
            description: "Get implementation support in your actual classroom.",
            href: "/services/for-educators/teacher-mentoring",
            cta: "Learn About Mentoring",
          },
        ]}
      />
    </main>
  );
}
