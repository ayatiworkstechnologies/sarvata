import InnerHero from "@/components/InnerHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";

export const metadata = {
  title: "Understanding How Your Child Learns | Sarvata",
  description:
    "Building Self-Aware, Independent Learners. Individual and group programs for students in grades 4-12.",
};

export default function UnderstandingChildLearnsPage() {
  const whatStudentsLearn = [
    {
      title: "Understanding Learning Strengths",
      description: "Identifying their learning preferences, recognizing cognitive strengths, understanding what conditions help them focus best."
    },
    {
      title: "Effective Study Strategies",
      description: "Note-taking methods matching their style, memory techniques that work, test preparation strategies, managing study time."
    },
    {
      title: "Self-Regulation Skills",
      description: "Setting realistic goals, monitoring progress, adjusting strategies when needed, building persistence and managing frustration."
    },
    {
      title: "Building Independence",
      description: "Taking ownership of learning, advocating for needs, problem-solving when stuck, developing a growth mindset."
    }
  ];

  const details = {
    formats: [
      { label: "Individual Sessions", value: "Personalized work (typically 4-8 sessions)" },
      { label: "Small Group Workshops", value: "Learning alongside peers" },
      { label: "Parent-Child Sessions", value: "Building shared understanding" }
    ],
    included: [
      "Learning style assessment",
      "Strategy instruction and practice",
      "Study skills coaching",
      "Metacognitive development activities",
      "Materials for home use"
    ],
    parentInvolvement: [
      "Initial consultation to understand goals",
      "Periodic updates on strategies being developed",
      "Guidance for reinforcing strategies at home",
      "Final consultation discussing long-term application"
    ]
  };

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <InnerHero
        title="Understanding How Your Child Learns"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "For Parents", href: "/services/for-parents" }, { label: "For Your Child", href: "/services/for-parents/for-your-child" }, { label: "Understanding Learning" }]}
       variant="planning" />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Building Self-Aware, Independent Learners"
        title="Individual and Group Programs (Grades 4-12)"
        paragraphs={[
          "Students who understand how they learn are better equipped to navigate challenges, advocate for themselves, and succeed independently.",
          "Our programs are designed to help your child develop the self-awareness and strategies they need to own their learning journey.",
        ]}
      />

      {/* ── WHAT STUDENTS LEARN ──────────────────────────────────────── */}
      <section className="bg-soft-bg py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              What Students Learn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whatStudentsLearn.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[1.75rem] border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAM DETAILS ─────────────────────────── */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16 max-w-6xl mx-auto">
            
            {/* Formats & Included */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Program Formats</h2>
              <ul className="space-y-4 mb-12">
                {details.formats.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-bold text-foreground shrink-0">{item.label}:</span>
                    <span className="text-muted text-[15px]">{item.value}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {details.included.map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <span className="w-5 h-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-muted text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parent Involvement */}
            <div>
              <div className="bg-secondary/5 rounded-3xl p-8 border border-secondary/20 h-full">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Parent Involvement</h2>
                <ul className="space-y-6">
                  {details.parentInvolvement.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="font-bold text-secondary text-lg leading-none mt-0.5">{i+1}.</span>
                      <span className="text-foreground text-[15px] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Who This Helps */}
          <div className="max-w-4xl mx-auto">
             <div className="p-8 md:p-12 rounded-[2rem] bg-soft-bg border border-border text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Who This Helps</h2>
                <p className="text-muted text-[16px] leading-relaxed">
                  Students in grades 4-12 who want to understand why some subjects feel harder, struggle with organization or time management, feel frustrated that effort doesn&apos;t match results, want independence, or are transitioning to more demanding environments.
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
            href: "/contact",
            cta: "Book Consultation",
          },
        ]}
      />
    </main>
  );
}
