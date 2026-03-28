"use client";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";
import { motion } from "framer-motion";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import MainHero from "@/components/MainHero";

export default function WorkshopsTrainingPage() {
  const workshops = [
    {
      title: "Designing for Student Choice",
      duration: "3 hours | K-12 educators",
      challenge:
        "You want students to have agency but need clear targets and manageable logistics.",
      whatYouDo:
        "Design “bouquet tasks” with multiple pathways, create choice boards that offer meaningful options, build scaffolding for all students, practice logistics of choice-based learning.",
      youLeaveWith:
        "Choice board templates, planning protocols, adapted lesson",
    },
    {
      title: "Making Thinking Visible",
      duration: "2.5 hours | K-12 educators",
      challenge:
        "You want independent, self-aware students, but metacognition doesn’t develop automatically.",
      whatYouDo:
        "Practice metacognitive questioning techniques, learn routines for building reflection into lessons, model thinking processes efficiently, connect metacognitive practice to content.",
      youLeaveWith: "Question stems, reflection protocols, modeling strategies",
    },
    {
      title: "Differentiation That Doesn’t Break You",
      duration:
        "3 hours | K-12 educators, especially those new to differentiation",
      challenge:
        "Differentiation matters, but creating different tasks for every student is exhausting.",
      whatYouDo:
        "Identify strategic differentiation points, use formative assessment for flexible grouping, build student independence for navigation, leverage technology for efficiency.",
      youLeaveWith:
        "Decision-making framework, grouping protocols, management strategies",
    },
    {
      title: "Recognizing Potential in All Students",
      duration: "2.5 hours | K-12 teachers and support staff",
      challenge:
        "Traditional “gifted” identification misses many capable students.",
      whatYouDo:
        "Expand thinking about high potential and talent, practice observation for cognitive strengths and creativity, learn differentiation for enrichment, create environments where all strengths emerge.",
      youLeaveWith:
        "Observation checklists, enrichment strategies, strength-based protocols",
    },
  ];

  const formats = [
    {
      title: "In-School Programs",
      description:
        "Customized to your curriculum, grade levels, and goals. Whole faculty, departments, or teams.",
    },
    {
      title: "Open Courses",
      description:
        "Online workshops with educators from multiple schools. Accessible anywhere.",
    },
    {
      title: "Series",
      description:
        "4-6 sessions with time between to try strategies, bring questions, and refine together.",
    },
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <MainHero
        title="Workshops & Training"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "For Educators", href: "/services/for-educators" },
          { label: "Workshops & Training" },
        ]}
        webImage="/banners/service-1.jpg"
        mobileImage="/banners/service-mob-1.jpg"
      />

      {/* ── INTRO ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Overview"
        title="Practical Strategies That Work"
        image="/assets/ser-img-1.webp"
        paragraphs={[
          "Our workshops give you tools you can actually use. No lectures. No theory without practice. Just collaborative work on real teaching challenges.",
        ]}
      />

      {/* ── FEATURED WORKSHOPS ─────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-8 md:py-16">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Featured</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Workshops
            </h2>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col">
            {workshops.map((workshop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col lg:flex-row gap-8 lg:gap-16 py-8 md:py-16 border-t border-border/50 first:border-none"
              >
                {/* Left Side: Title & Duration */}
                <div className="lg:w-2/5 flex flex-col items-start pr-0 lg:pr-8">
                  <span className="text-secondary/20 font-serif text-6xl md:text-7xl leading-none mb-4 group-hover:text-primary transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                    {workshop.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary text-sm font-semibold rounded-full">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {workshop.duration}
                  </div>
                </div>

                {/* Right Side: Editorial Content Grid */}
                <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-2 lg:pt-6">
                  {/* The Challenge - Full Width */}
                  <div className="md:col-span-2 space-y-3">
                    <h4 className="eyebrow">The Challenge</h4>
                    <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                      {workshop.challenge}
                    </p>
                  </div>

                  {/* What you'll do */}
                  <div className="space-y-3 relative md:pr-6">
                    <h4 className="text-[12px] uppercase tracking-[0.2em] font-bold text-muted">
                      What You&apos;ll Do
                    </h4>
                    <p className="text-[15px] leading-relaxed text-muted">
                      {workshop.whatYouDo}
                    </p>
                  </div>

                  {/* You leave with */}
                  <div className="space-y-3 relative md:pl-6 md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-0 md:before:h-full md:before:w-px md:before:bg-border/60">
                    <h4 className="text-[12px] uppercase tracking-[0.2em] font-bold text-primary">
                      You Leave With
                    </h4>
                    <p className="text-[15px] leading-relaxed text-foreground font-semibold bg-primary/5 p-4 rounded-xl border border-primary/10">
                      {workshop.youLeaveWith}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <TestimonialsSection
        title="What Educators Say"
        testimonials={[
          {
            quote:
              "This wasn't just another PD day. We left with tools we actually use the next morning. The 'Designing for Student Choice' workshop changed how I plan my week.",
            author: "Elena R., Middle School Teacher",
          },
          {
            quote:
              "Practical, high-impact, and respectful of our time. Sarvata understands the reality of 21st-century classrooms.",
            author: "James T., High School Educator",
          },
        ]}
      />

      {/* ── WORKSHOP FORMATS ───────────────────────────────────── */}
      <section className="bg-soft-bg py-8 md:py-16 relative overflow-hidden text-center">
        <div className="container-max relative z-10">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Workshop Formats
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {formats.map((format, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-[1.75rem] border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {format.title}
                </h3>
                <p className="text-muted text-[15px] leading-relaxed">
                  {format.description}
                </p>
              </motion.div>
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
            description:
              "Get the full list of our available workshops and details.",
            href: "#",
            cta: "Download Catalog",
          },
          {
            label: "Plan",
            title: "Contact Us to Schedule",
            description: "Ready to set up a workshop for your school or team?",
            href: "/contact-us",
            cta: "Contact Us",
          },
          {
            label: "Discuss",
            title: "Schedule Consultation",
            description:
              "Speak with our team to find the best fit for your educators.",
            href: "/contact-us",
            cta: "Schedule Consultation",
          },
        ]}
      />
    </main>
  );
}
