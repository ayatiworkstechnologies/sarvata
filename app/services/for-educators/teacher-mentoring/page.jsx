"use client";
import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";
import { Shield, Briefcase, HeartHandshake } from "lucide-react";
import TestimonialsSection from "@/components/about/TestimonialsSection";



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
          "Workshops provide tools. Mentoring helps you implement them with your actual students. This is a confidential, non-evaluative partnership - not supervision."
        ]}
      />

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-20 md:py-32">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Our Process
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
              How It Works
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/5 border border-secondary/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <p className="text-foreground font-medium text-[15px]">
                  Typical commitment: 4-6 cycles over a semester, meeting every 2-3 weeks
                </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto relative px-4">
            {/* Timeline Line */}
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-secondary/30 to-transparent -translate-x-1/2 hidden sm:block" />

            <div className="space-y-12 md:space-y-0 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-5/12">
                    <div className={`p-8 rounded-[2rem] bg-soft-bg/50 border border-border/60 hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-500 group ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-muted text-[16px] leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Step Number Indicator */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:top-auto translate-y-2 md:translate-y-0 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-primary/20 shadow-lg flex items-center justify-center">
                       <span className="text-primary font-bold text-lg">{i + 1}</span>
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

      {/* ── WHAT MAKES THIS DIFFERENT ──────────────────────────── */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              What Makes This Different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentiators.map((diff, i) => {
              const Icon = i === 0 ? Shield : i === 1 ? Briefcase : HeartHandshake;
              return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 border border-border/50 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-white"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mx-auto flex items-center justify-center mb-6 ring-1 ring-primary/20 shadow-inner">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{diff.title}</h3>
                <p className="text-muted text-[16px] leading-relaxed">{diff.description}</p>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <div id="testimonials">
        <TestimonialsSection
          title="What Mentees Say"
          testimonials={[
            {
              quote: "Mentoring provides the bridge between theory and practice. Having a trusted partner to co-plan and observe with no evaluation pressure changed my practice forever.",
              author: "Lin M., Grade 5 Teacher"
            },
            {
              quote: "Job-embedded support is the only way professional development sticks. The reflection cycles were the most valuable 20 minutes of my week.",
              author: "David K., Early Years Educator"
            }
          ]}
        />
      </div>

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
            href: "#testimonials",
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
