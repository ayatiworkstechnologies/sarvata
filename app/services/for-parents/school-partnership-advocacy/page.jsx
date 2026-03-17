"use client";
import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";



export default function SchoolPartnershipPage() {
  const services = [
    {
      title: "Understanding Reports & Assessments",
      description: "Decode psycho-educational reports, school assessments, and IEPs. We translate the jargon for crystal-clear understanding."
    },
    {
      title: "Effective Communication Strategies",
      description: "Build positive relationships with teachers. Frameworks for effective email communication and parent-teacher meeting preparation."
    },
    {
      title: "Navigating Accommodations & Support",
      description: "Clear guidance on requesting and collaborating on school-based accommodations, interventions, and support plans."
    }
  ];

  const communicationStrategies = [
    {
      label: "Email",
      tips: [
        "Start positive",
        "Be specific",
        "Keep brief",
        "Proofread for tone"
      ]
    },
    {
      label: "Meetings",
      tips: [
        "Clarify goals",
        "Listen first",
        "Use “I” statements",
        "Summarize agreed next steps"
      ]
    },
    {
      label: "Relationships",
      tips: [
        "Build connections before you need them",
        "Assume positive intent",
        "Focus on shared goals"
      ]
    }
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="School Partnership & Advocacy"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "For Parents", href: "/services/for-parents" }, { label: "Partnership & Advocacy" }]}
       variant="advocacy" />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Building the Home-School Bridge"
        title="The Power of a United Team"
        paragraphs={[
          "You know your child best. Teachers know them differently. When parents and educators work together respectfully, the child wins.",
          "But navigating school systems, understanding educational terms, and participating in meetings can be intimidating.",
          "Empowering you to become your child's most effective advocate. We give you the tools and confidence to speak with the school, fostering strong, positive partnerships."
        ]}
      />

      {/* ── OUR SERVICES ──────────────────────────────────────── */}
      <section className="bg-soft-bg py-20 md:py-32 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              How We Help
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Our Services
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative px-4">
            {/* Timeline Line */}
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary/30 via-secondary/10 to-transparent -translate-x-1/2 hidden sm:block" />

            <div className="space-y-12 md:space-y-0 relative">
              {services.map((item, i) => (
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
                    <div className={`p-8 rounded-[2rem] bg-white border border-border/60 hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 group ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">{item.title}</h3>
                      <p className="text-muted text-[16px] leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Step Number Indicator */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:top-auto translate-y-2 md:translate-y-0 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-secondary/20 shadow-lg flex items-center justify-center">
                       <span className="text-secondary font-bold text-lg">{i + 1}</span>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-2/12" />
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNICATION THAT WORKS ────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Communication That Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {communicationStrategies.map((group, i) => (
              <div key={i} className="bg-primary/5 rounded-[1.5rem] p-8 border border-primary/20 hover:border-primary/40 transition-colors">
                <h3 className="text-2xl font-bold text-primary mb-6">{group.label}</h3>
                <ul className="space-y-4">
                  {group.tips.map((tip, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="w-6 h-6 shrink-0 rounded bg-primary/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <span className="text-foreground text-[15px]">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Be Their Best Advocate"
        title="Let's build a strong team."
        steps={[
          {
            label: "Connect",
            title: "Book an Advocacy Consultation",
            description: "Work together to build a collaborative team that ensures your child thrives.",
            href: "/contact",
            cta: "Book Consultation",
          },
        ]}
      />
    </main>
  );
}
