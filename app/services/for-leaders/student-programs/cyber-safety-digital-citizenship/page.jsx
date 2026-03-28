"use client";

import { motion } from "framer-motion";
import MainHero from "@/components/MainHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";

export default function CyberSafetyPage() {
  const coverage = [
    {
      title: "Digital Footprints",
      description:
        "What posts mean for their futures and how to build a positive online presence.",
    },
    {
      title: "Privacy & Security",
      description:
        "Strong passwords, privacy settings, spotting scams - practical skills they can use immediately.",
    },
    {
      title: "Respect & Digital Drama",
      description:
        "Addressing cyberbullying, handling online conflict, being an upstander.",
    },
    {
      title: "Social Media & Mental Health",
      description:
        "How algorithms work, recognizing impact on mood, healthy boundaries.",
    },
    {
      title: "Online Reputation",
      description: "Making choices their future selves will thank them for.",
    },
  ];

  const whyMatters = [
    "Addresses cyberbullying before it escalates",
    "Reduces reactive discipline around online incidents",
    "Parents appreciate professional approach",
    "Creates shared expectations about digital behavior",
    "Strengthens your acceptable use policies",
  ];

  const implementationDetails = [
    {
      label: "Delivery formats",
      value:
        "Class-based sessions, grade-level assemblies, advisory/homeroom format",
    },
    {
      label: "Teacher support",
      value: "Discussion prompts and follow-up activities",
    },
    {
      label: "Parent component",
      value: "Optional parent evening or take-home resources",
    },
    {
      label: "Follow-up options",
      value: "Single session, multi-session series, or periodic refreshers",
    },
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <MainHero
        title="Cyber Safety & Digital Citizenship"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "For Leaders", href: "/services/for-leaders" },
          {
            label: "Student Programs",
            href: "/services/for-leaders/student-programs",
          },
          { label: "Cyber Safety" },
        ]}
        webImage="/banners/services-2.jpg"
        mobileImage="/banners/services-mob-2.jpg"
      />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Your Digital World. Your Rules."
        title="Be Smart, Be Safe, Be You"
        image="/assets/home-sec-3-4.webp"
        paragraphs={[
          "Your students' online lives are huge parts of their social lives. These workshops give them tools to be smart, confident, and powerful in digital spaces.",
          "No “don't use your phone” lectures. Real talk about what actually happens online and practical strategies that work.",
        ]}
      />

      {/* ── WHAT WE COVER ──────────────────────────────────────── */}
      <section className="bg-soft-bg py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              What We Cover
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coverage.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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

      {/* ── APPROACH & LEADERSHIP VIEW ─────────────────────────── */}
      <section className="bg-white py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 max-w-6xl mx-auto">
            {/* Approach */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Workshop Approach
              </h2>
              <div className="space-y-4 text-muted text-[16px] leading-relaxed">
                <p className="font-medium text-foreground">
                  No judgment. Just facts. Empowering, not scaring. Interactive
                  scenarios, not lectures.
                </p>
                <p>
                  <strong className="text-foreground">Age-appropriate:</strong>{" "}
                  Middle school focuses on foundations. High school addresses
                  reputation and long-term consequences.
                </p>
              </div>
            </div>

            {/* Why This Matters */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                For School Leaders: Why This Matters
              </h2>
              <ul className="space-y-4">
                {whyMatters.map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-primary"
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
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION ──────────────────────────────────────── */}
      <section className="bg-secondary/5 py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Implementation
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
            <ul className="space-y-6">
              {implementationDetails.map((item, i) => (
                <li
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2"
                >
                  <span className="font-bold text-foreground min-w-[140px]">
                    {item.label}:
                  </span>
                  <span className="text-muted text-[15px] leading-relaxed">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="Ready to Offer Support?"
        steps={[
          {
            label: "Review",
            title: "Download Program Overview",
            description: "Detailed syllabus and approaches for this workshop.",
            href: "#",
            cta: "Download PDF",
          },
          {
            label: "Discuss",
            title: "Schedule Consultation",
            description: "Let's align this program with your tech policies.",
            href: "/contact-us",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
