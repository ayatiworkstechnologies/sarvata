"use client";
import MainHero from "@/components/MainHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, HeartPulse, Compass } from "lucide-react";
import TestimonialsSection from "@/components/about/TestimonialsSection";


export default function InsightsGuidancePage() {
  const testimonials = [
    {
      quote:
        "An informative and well-structured session that provided valuable insights into types of giftedness and practical approaches to differentiated instruction.",
      author: "Deepeka P S, Facilitator",
    },
    {
      quote:
        "The workshop was highly enriching, offering deep insights and encouraging self-reflection. The progression from understanding the learner to applying strategies through discussions, activities, and lesson planning was thoughtfully designed.",
      author: "Francis Xavier K, Facilitator",
    },
    {
      quote:
        "The explanations were clear and concise, especially the scientific perspective on giftedness, which was explained in a very simple and effective manner. The right balance of content interspersed with activities such as mindfulness and paired work made the session engaging and memorable.",
      author: "Sangeetha, Facilitator",
    },
  ];
  const services = [
    {
      title: "Academic & Learning Profiles",
      description:
        "Comprehensive evaluations identifying unique learning preferences, cognitive strengths, and areas for growth - giving you a clear picture of their academic potential.",
    },
    {
      title: "Psycho-Counseling Support",
      description:
        "A caring space for children and adolescents to explore social-emotional challenges, manage anxiety, build resilience, and develop healthy coping strategies.",
    },
    {
      title: "Guidance for Diverse Learners",
      description:
        "Expert guidance for parents of neurodiverse children, helping you understand and support learning differences while navigating school systems.",
    },
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <MainHero
        title={
          <>
            Supporting parents with <br />
            <span className="text-[#D9A63A]">clarity in</span>{" "}
            <span className="text-[#6B4A8E]">a complex</span> <br />
            <span className="text-[#D9A63A]">learning world</span>
          </>
        }
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "For Parents", href: "/services/for-parents" },
          { label: "Insights & Guidance" },
        ]}
        webImage="/banners/insights-web.png"
        mobileImage="/banners/insights-mob.png"
      />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Understanding Your Unique Child"
        title="You Are Your Child's Greatest Advocate"
        image="/assets/insights-1.png"
        paragraphs={[
          "You might be asking: “Why is my bright child struggling?” “How can I support their unique gifts?” “Is this anxiety or normal development?” “How do I navigate the school system?”",
          "We provide a safe, confidential space to find clear answers and practical strategies.",
          "Holistic evaluation and counseling to help you confidently support your child's journey.",
        ]}
      />

      {/* ── OUR SERVICES ──────────────────────────────────────── */}
      <section className="bg-soft-bg py-8 md:py-16 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((item, i) => {
              const Icon = [GraduationCap, HeartPulse, Compass][i] || Compass;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white p-8 rounded-[1.75rem] border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 text-primary ring-1 ring-primary/20 shadow-inner group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Icon
                      className="w-7 h-7 transition-colors duration-500 group-hover:text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <TestimonialsSection
        title="What Parents Say"
        testimonials={testimonials}
      />

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Ready to Gain Clarity?"
        title="You don't have to navigate this journey alone."
        steps={[
          {
            label: "Discuss",
            title: "Schedule a Consultation",
            description:
              "Speak with our professionals about your child's unique needs.",
            href: "/contact-us",
            cta: "Schedule a Consultation",
          },
        ]}
      />
    </main>
  );
}
