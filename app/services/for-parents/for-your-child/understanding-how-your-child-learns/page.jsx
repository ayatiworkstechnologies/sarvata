"use client";
import MainHero from "@/components/MainHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";

export default function UnderstandingChildLearnsPage() {
  const whatStudentsLearn = [
    {
      title: "Understanding Learning Strengths",
      description:
        "Identifying their learning preferences, recognizing cognitive strengths, understanding what conditions help them focus best.",
    },
    {
      title: "Effective Study Strategies",
      description:
        "Note-taking methods matching their style, memory techniques that work, test preparation strategies, managing study time.",
    },
    {
      title: "Self-Regulation Skills",
      description:
        "Setting realistic goals, monitoring progress, adjusting strategies when needed, building persistence and managing frustration.",
    },
    {
      title: "Building Independence",
      description:
        "Taking ownership of learning, advocating for needs, problem-solving when stuck, developing a growth mindset.",
    },
  ];

  const details = {
    formats: [
      {
        label: "Individual Sessions",
        value: "Personalized work (typically 4-8 sessions)",
      },
      { label: "Small Group Workshops", value: "Learning alongside peers" },
      {
        label: "Parent-Child Sessions",
        value: "Building shared understanding",
      },
    ],
    included: [
      "Learning style assessment",
      "Strategy instruction and practice",
      "Study skills coaching",
      "Metacognitive development activities",
      "Materials for home use",
    ],
    parentInvolvement: [
      "Initial consultation to understand goals",
      "Periodic updates on strategies being developed",
      "Guidance for reinforcing strategies at home",
      "Final consultation discussing long-term application",
    ],
  };

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <MainHero
        title={
          <>
            Understand how your <br />
            <span className="text-[#D9A63A]">child learns</span>{" "}
            <span className="text-[#6B4A8E]">to support</span> <br />
            <span className="text-[#D9A63A]">them better</span>
          </>
        }
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "For Parents", href: "/services/for-parents" },
          {
            label: "For Your Child",
            href: "/services/for-parents/for-your-child",
          },
          { label: "Understanding Learning" },
        ]}
        webImage="/banners/child-web.png"
        mobileImage="/banners/child-mob.png"
      />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Building Self-Aware, Independent Learners"
        title="Individual and Group Programs (Grades 4-12)"
        image="/assets/ab-sec-5-2.webp"
        paragraphs={[
          "Students who understand how they learn are better equipped to navigate challenges, advocate for themselves, and succeed independently.",
          "Our programs are designed to help your child develop the self-awareness and strategies they need to own their learning journey.",
        ]}
      />

      {/* ── WHAT STUDENTS LEARN ──────────────────────────────────────── */}
      <section className="bg-soft-bg py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              What Students Learn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whatStudentsLearn.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i || 0) * 0.1 }}
                key={i}
                className="bg-white p-8 rounded-[1.75rem] border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAM DETAILS ─────────────────────────── */}
      <section className="bg-white py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-6xl mx-auto">
            {/* Formats */}
            <div className="bg-primary/5 border border-primary/20 rounded-4xl p-8 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Program Formats
              </h2>
              <ul className="space-y-4 grow">
                {details.formats.map((item, i) => (
                  <li
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-2 pb-4 border-b border-primary/10 last:border-0 last:pb-0"
                  >
                    <span className="font-bold text-primary shrink-0 min-w-[180px]">
                      {item.label}:
                    </span>
                    <span className="text-muted text-[15px] leading-relaxed">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Included */}
            <div className="bg-white border border-border/60 shadow-sm rounded-4xl p-8 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What&apos;s Included
              </h2>
              <ul className="space-y-4 grow">
                {details.included.map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-muted text-[16px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parent Involvement Timeline */}
            <div className="lg:col-span-2 mt-20">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
                  Parent Involvement Process
                </h2>
              </div>

              <div className="max-w-5xl mx-auto relative px-4">
                {/* Timeline Line */}
                <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-primary/30 via-secondary/30 to-transparent -translate-x-1/2 hidden sm:block" />

                <div className="space-y-12 md:space-y-0 relative">
                  {details.parentInvolvement.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      {/* Content Card */}
                      <div className="w-full md:w-5/12">
                        <div
                          className={`p-8 rounded-4xl bg-soft-bg/50 border border-border/60 hover:bg-white hover:shadow-xl transition-all duration-500 group ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                        >
                          <p className="text-foreground text-[17px] leading-relaxed font-semibold">
                            {item}
                          </p>
                        </div>
                      </div>

                      {/* Dot Indicator */}
                      <div className="absolute left-0 md:left-1/2 top-0 md:top-auto translate-y-2 md:translate-y-0 -translate-x-1/2 flex items-center justify-center z-10">
                        <div className="w-12 h-12 rounded-full bg-white border-4 border-primary/20 shadow-lg flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">
                            {i + 1}
                          </span>
                        </div>
                      </div>

                      <div className="hidden md:block md:w-2/12" />
                      <div className="hidden md:block md:w-5/12" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Who This Helps */}
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-4xl bg-soft-bg border border-border text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Who This Helps
              </h2>
              <p className="text-muted text-[16px] leading-relaxed">
                Students in grades 4-12 who want to understand why some subjects
                feel harder, struggle with organization or time management, feel
                frustrated that effort doesn&apos;t match results, want
                independence, or are transitioning to more demanding
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Empower Your Child's Learning"
        title="Help your child develop the self-awareness and strategies they need to succeed independently."
        steps={[
          {
            label: "Review",
            title: "Download Program Overview",
            description: "Detailed syllabus and approaches for this program.",
            href: "#",
            cta: "Download PDF",
          },
          {
            label: "Discuss",
            title: "Schedule Consultation",
            description: "Let's find the best format and focus for your child.",
            href: "/contact-us",
            cta: "Book Consultation",
          },
        ]}
      />
    </main>
  );
}
