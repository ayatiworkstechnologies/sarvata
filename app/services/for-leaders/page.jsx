import MainHero from "@/components/MainHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayApproachSection from "@/components/services/PathwayApproachSection";
import PathwayServicesSection from "@/components/services/PathwayServicesSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";

export const metadata = {
  title: "Services for School Leaders - Strategic Partnership & School Transformation | Sarvata",
  description:
    "Sarvata partners with school leaders to build systems, culture, and capacity for meaningful, lasting educational change. From inclusion audits to faculty mentoring - strategic support grounded in your school's reality.",
  keywords: [
    "school leadership coaching",
    "school transformation",
    "inclusion audit",
    "educational strategic planning",
    "faculty mentoring",
    "school culture change",
    "Sarvata school leaders",
  ],
  openGraph: {
    title: "Services for School Leaders - Strategic Partnership for Lasting Change | Sarvata",
    description:
      "Strategic consultancy for school principals and leaders: inclusion audits, faculty development, systems design, and cultural transformation rooted in your school's unique context.",
    url: "https://sarvata.in/services/for-leaders",
    siteName: "Sarvata",
    images: [{ url: "/og-leaders.jpg", width: 1200, height: 630, alt: "Sarvata Services for School Leaders" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services for School Leaders - Sarvata",
    description:
      "Strategic partnership to build systems, culture, and capacity for meaningful educational change.",
    images: ["/og-leaders.jpg"],
  },
};

export default function LeadersPage() {
  return (
    <main className="bg-white">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <MainHero
        webImage="/banners/for-school-leaders.jpg"
        mobileImage="/banners/for-school-leaders-mob.jpg"
        title="Leading Sustainable Educational Change"
        breadcrumbs={[{ label: "For Leaders" }]}
      />

      {/* ── THE CHALLENGE ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="The Leadership Challenge"
        title="Holding Competing Imperatives with Clarity & Conviction"
        paragraphs={[
          "In your hands rests not just an institution, but the promise of tomorrow. As school leaders, you stand at the crossroads of powerful and often competing imperatives.",
          "Managing the immediacy of daily operations while safeguarding long-term vision, upholding accountability without losing sight of authentic learning, empowering faculty despite constraints, and harmonising the varied expectations of stakeholders.",
          "Meaningful change is slow, contextual, and requires deep cultural shifts - far beyond policy updates. That's where partnership makes the difference.",
        ]}
      />

      {/* ── OUR APPROACH ────────────────────────────────────────── */}
      <PathwayApproachSection
        eyebrow="Our Approach"
        title="Partnership, Not Prescription"
        items={[
          {
            title: "Beginning With Your Context",
            description:
              "We don't arrive with solutions to problems we don't understand. We begin by learning your community, culture, and constraints before developing any recommendations.",
          },
          {
            title: "Frameworks Meet Reality",
            description:
              "You know your institution. We bring research, frameworks, and external perspectives. Together we develop approaches that are both aspirational and realistic.",
          },
          {
            title: "Deep Cultural Shifts",
            description:
              "Real change goes beyond policy updates. We help you build the cultural shifts, shared language, and internal capacity that make transformation lasting.",
          },
        ]}
      />

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <PathwayServicesSection
        eyebrow="Services"
        title="Strategic Support for School Leaders"
        services={[
          {
            title: "Inclusion Audits & Strategic Roadmaps",
            description:
              "Objective assessment of current practices and data-driven planning for systemic improvement - giving you a clear, actionable picture of where you are and where you're headed.",
            href: "#audits",
            cta: "Learn More",
          },
          {
            title: "Faculty & Leadership Mentoring",
            description:
              "Develop your team's capacity through confidential mentoring and job-embedded professional learning that meets educators where they are.",
            href: "#mentoring",
            cta: "Learn More",
          },
          {
            title: "Strategic Planning & Systems",
            description:
              "Design operational infrastructure enabling your vision: curriculum alignment, assessment frameworks, scheduling, and change management support.",
            href: "#planning",
            cta: "Learn More",
          },
          {
            title: "Programs for Your Students",
            description:
              "Workshops on digital citizenship, mental health and well-being, and healthy relationships - directly serving the young people in your care.",
            href: "#student-programs",
            cta: "Learn More",
          },
        ]}
      />

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="Ready to Take the Next Step?"
        steps={[
          {
            label: "Start Here",
            title: "Download Services Overview",
            description:
              "Get a comprehensive overview of our leadership services and frameworks.",
            href: "#overview",
            cta: "Download Overview",
          },
          {
            label: "Let's Talk",
            title: "Schedule a Consultation",
            description:
              "Have a confidential, no-obligation conversation about your school's specific context and needs.",
            href: "/contact",
            cta: "Book a Call",
          },
          {
            label: "Reach Out",
            title: "Contact Us Directly",
            description:
              "Send us a message and we'll respond within one business day to discuss how we can help.",
            href: "/contact",
            cta: "Get in Touch",
          },
        ]}
      />

    </main>
  );
}
