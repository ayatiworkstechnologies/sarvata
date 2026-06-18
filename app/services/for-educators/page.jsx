import MainHero from "@/components/MainHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayApproachSection from "@/components/services/PathwayApproachSection";
import PathwayServicesSection from "@/components/services/PathwayServicesSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";

export const metadata = {
  alternates: { canonical: '/services/for-educators' },
  title:
    "Services for Educators - Sustainable Differentiation & Mentoring | Sarvata",
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
    title:
      "Services for Educators - Sustainable Differentiation & Mentoring | Sarvata",
    description:
      "Practical workshops, in-class mentoring, and frameworks that help educators build sustainable, learner-centered practice - without burning out.",
    url: "https://sarvata.org/services/for-educators",
    siteName: "Sarvata",
    images: [
      {
        url: "/og-educators.jpg",
        width: 1200,
        height: 630,
        alt: "Sarvata Services for Educators",
      },
    ],
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
        webImage="/banners/edu-web.png"
        mobileImage="/banners/edu-mob.png"
        title={
          <>
            Empowering{" "}
            <span className="text-[#D9A63A]">educators</span>{" "}
            <span className="text-[#6B4A8E]">to design truly inclusive,</span>{" "}
            <span className="text-[#D9A63A]">learner-centered</span>{" "}
            <span className="text-[#6B4A8E]">classrooms.</span>
          </>
        }
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "For Educators" },
        ]}
      />

      {/* ── THE CHALLENGE ───────────────────────────────────────── */}
      <PathwayChallengeSection
        title="The Challenge"
        image="/assets/edu-1.png"
        paragraphs={[
          <span key="p1">
            You&apos;re already responding to diverse learners - the student who
            finishes early, the one who struggles with pace, the creative
            thinker whose brilliance doesn&apos;t fit the test.{" "}
            <span className="text-primary italic font-bold">
              The challenge is making it sustainable.
            </span>
          </span>,
          <span key="p2">
            Limited time, large classes, curriculum requirements, and the
            cognitive load of attending to 25+ individuals simultaneously make{" "}
            <span className="text-primary italic font-bold">
              responsive practice exhausting.
            </span>
          </span>,
          <span key="what-we-offer">
            <strong>What we offer:</strong> Frameworks that systematize what you
            already do intuitively, moving from moment-to-moment responses to{" "}
            <span className="text-primary italic font-bold">
              sustainable, structured differentiation.
            </span>
          </span>,
        ]}
      />

      {/* ── OUR APPROACH ────────────────────────────────────────── */}
      <PathwayApproachSection
        eyebrow="Our Approach"
        image="/assets/edu-2.png"
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
              "Make observation systematic - guide students to understand their own patterns and progressively build independence.",
          },
          {
            title: "Facilitating & Mentoring",
            description:
              "Beyond facilitating external learning environments, guide students' internal development - how they plan, monitor, and reflect on their own learning.",
          },
        ]}
      />

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <PathwayServicesSection
        eyebrow="Services"
        title="Find the Support That Fits Your Practice"
        columns={2}
        services={[
          {
            title: "Workshops & Training",
            description:
              "Interactive, hands-on learning that gives you practical frameworks and tools you can use immediately.",
            href: "/services/for-educators/workshops-training",
            cta: "Explore Workshops",
          },
          {
            title: "Teacher Mentoring",
            description:
              "Confidential, in-class partnership to help you implement new approaches with your actual students.",
            href: "/services/for-educators/teacher-mentoring",
            cta: "Learn About Mentoring",
          },
        ]}
      />

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="Where Would You Like to Start?"
        steps={[
          {
            label: "Ready to Learn",
            title: "Browse Workshops & Training",
            description:
              "Find hands-on workshops designed to build practical, immediately usable frameworks.",
            href: "/services/for-educators/workshops-training",
            cta: "View workshops and training",
          },
          {
            label: "Want Partnership",
            title: "Explore Teacher Mentoring",
            description:
              "Partner with a consultant who works alongside you in your actual classroom.",
            href: "/services/for-educators/teacher-mentoring",
            cta: "Learn About Mentoring",
          },
        ]}
      />
    </main>
  );
}
