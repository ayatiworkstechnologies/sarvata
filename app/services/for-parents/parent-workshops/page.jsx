"use client";
import MainHero from "@/components/MainHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";
import TestimonialsSection from "@/components/about/TestimonialsSection";

export default function ParentWorkshopsPage() {
  const topics = [
    {
      title: "Supporting Your Neurodiverse Child",
      description:
        "Clear overview of neurodiversity (ADHD, autism, dyslexia) with practical strategies for organization, emotional regulation, and celebrating unique strengths.",
    },
    {
      title: "Cyber Safety & Digital Well-being",
      description:
        "Navigate the digital world beyond fear-based rules. Setting healthy boundaries, managing screen time, fostering open conversations about online life.",
    },
    {
      title: "The “Learning How to Learn” Parent",
      description:
        "Foster metacognition at home with question stems and routines that help your child build resilience, growth mindset, and independence.",
    },
    {
      title: "Homework Without Battles",
      description:
        "Transform homework time from struggle to productive routine. Why it's difficult for some children and practical strategies that work.",
    },
    {
      title: "Understanding Anxiety in Children",
      description:
        "Recognize when worry becomes problematic. Effective support strategies that don't enable avoidance, and when professional help is needed.",
    },
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <MainHero
        title="Parent Workshops"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "For Parents", href: "/services/for-parents" },
          { label: "Parent Workshops" },
        ]}
        webImage="/banners/services-8.jpg"
        mobileImage="/banners/services-mob-8.jpg"
      />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Partnering in Your Child's Learning"
        title="A Shared Language for Success"
        image="/assets/ab-sec-2.webp"
        paragraphs={[
          "When parents and educators share the same tools and strategies, it creates a consistent, supportive environment for children to thrive.",
          "Practical, evidence-based workshops to support your child's unique journey at home.",
          "Our workshops build on the same core philosophies we use with educators: inclusive giftedness, fostering metacognition, and supporting the whole child.",
        ]}
      />

      {/* ── WORKSHOP TOPICS ──────────────────────────────────────── */}
      <section className="bg-soft-bg py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Workshop Topics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {topics.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <TestimonialsSection
        title="What Parents Say"
        testimonials={[
          {
            quote:
              "The workshop on 'Cyber Safety' was eye-opening. It moved beyond just rules and gave us a framework for real conversations with our teenagers.",
            author: "Sarah L., Parent",
          },
          {
            quote:
              "Finally, a parent session that isn't just theory. We left with concrete strategies we could use at the dinner table that very night.",
            author: "Mark J., Parent",
          },
        ]}
      />

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Join Our Community"
        title="You are not alone on this journey."
        steps={[
          {
            label: "Explore",
            title: "See Workshop Schedule",
            description:
              "View upcoming dates and times for our interactive workshops.",
            href: "#",
            cta: "View Schedule",
          },
        ]}
      />
    </main>
  );
}
