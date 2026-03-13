import MainHero from "@/components/MainHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayApproachSection from "@/components/services/PathwayApproachSection";
import PathwayServicesSection from "@/components/services/PathwayServicesSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";

export const metadata = {
  title: "Services for Educators - Sustainable Differentiation & Mentoring | Sarvata",
  description:
    "Sarvata helps educators build sustainable, structured differentiation through workshops, in-class mentoring, and practical frameworks. Move from intuitive response to systematic, learner-centered practice.",
  keywords: [
    "educator professional development",
    "differentiated instruction",
    "teacher mentoring",
    "personalized learning workshops",
    "metacognition for teachers",
    "inclusive classroom strategies",
    "Sarvata for educators",
  ],
  openGraph: {
    title: "Services for Educators - Sustainable Differentiation & Mentoring | Sarvata",
    description:
      "Practical workshops, in-class mentoring, and frameworks that help educators build sustainable, learner-centered practice—without burning out.",
    url: "https://sarvata.in/services/for-educators",
    siteName: "Sarvata",
    images: [{ url: "/og-educators.jpg", width: 1200, height: 630, alt: "Sarvata Services for Educators" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services for Educators - Sarvata",
    description:
      "Sustainable differentiation frameworks and in-class mentoring for educators who want to meet every learner's needs without burning out.",
    images: ["/og-educators.jpg"],
  },
};

export default function EducatorsPage() {
  return (
    <main className="bg-white">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <MainHero
        webImage="/eudcators-web.jpg"
        mobileImage="/eudcators-mobile.jpg"
        title="You're Already Doing This Work. We Help You Do It More Sustainably."
        breadcrumbs={[{ label: "For Educators" }]}
      />

      {/* ── THE CHALLENGE ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="The Challenge"
        title="Responsive Teaching Is Exhausting Without the Right Structures"
        paragraphs={[
          "You're already responding to diverse learners—the student who finishes early, the one who struggles with pace, the creative thinker whose brilliance doesn't fit the test. The challenge is making it sustainable.",
          "Limited time, large classes, curriculum requirements, and the cognitive load of attending to 25+ individuals simultaneously make responsive practice exhausting.",
          "What we offer: Frameworks that systematize what you already do intuitively, moving from moment-to-moment responses to sustainable, structured differentiation.",
        ]}
      />

      {/* ── OUR APPROACH ────────────────────────────────────────── */}
      <PathwayApproachSection
        eyebrow="Our Approach"
        title="From Intuitive Response to Sustainable, Structured Practice"
        items={[
          {
            title: "Building Structures for Choice",
            description:
              "Design systems where students make meaningful choices within clear parameters, reducing your cognitive load while increasing student ownership.",
          },
          {
            title: "Developing Metacognitive Awareness",
            description:
              "Make observation systematic—guide students to understand their own patterns and progressively build independence.",
          },
          {
            title: "Facilitating & Mentoring",
            description:
              "Beyond facilitating external learning environments, guide students' internal development—how they plan, monitor, and reflect on their own learning.",
          },
        ]}
      />

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <PathwayServicesSection
        eyebrow="Services"
        title="Find the Support That Fits Your Practice"
        services={[
          {
            title: "Workshops & Training",
            description:
              "Interactive, hands-on learning that gives you practical frameworks and tools you can use immediately—differentiation, metacognition, true personalization.",
            href: "#workshops",
            cta: "Explore Workshops",
          },
          {
            title: "Teacher Mentoring",
            description:
              "Confidential, in-class partnership to help you implement new approaches with your actual students—real context, real feedback.",
            href: "#mentoring",
            cta: "Learn About Mentoring",
          },
          {
            title: "Free Resources & Tools",
            description:
              "Download free checklists for identifying student strengths, lesson plan templates, and guides for creating choice-based activities.",
            href: "#resources",
            cta: "Access Resources",
          },
          {
            title: "Our Core Principles",
            description:
              "What do we mean by 'learning as a verb'? Read our foundational frameworks on the future of education and the path of self-actualization.",
            href: "#principles",
            cta: "Read More",
          },
        ]}
      />

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="Where Would You Like to Start?"
        steps={[
          {
            label: "Just Exploring",
            title: "Start with Free Resources",
            description:
              "Browse our library of templates, checklists, and guides—no commitment required.",
            href: "#resources",
            cta: "Access Free Resources",
          },
          {
            label: "Ready to Learn",
            title: "Browse Workshops & Training",
            description:
              "Find hands-on workshops designed to build practical, immediately usable frameworks.",
            href: "#workshops",
            cta: "View Workshops",
          },
          {
            label: "Want Partnership",
            title: "Explore Teacher Mentoring",
            description:
              "Partner with a consultant who works alongside you in your actual classroom.",
            href: "#mentoring",
            cta: "Learn About Mentoring",
          },
        ]}
      />

    </main>
  );
}
