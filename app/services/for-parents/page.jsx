import MainHero from "@/components/MainHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayApproachSection from "@/components/services/PathwayApproachSection";
import PathwayServicesSection from "@/components/services/PathwayServicesSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";

export const metadata = {
  title:
    "Services for Parents - Understanding & Supporting Your Child's Learning | Sarvata",
  description:
    "Sarvata partners with parents to understand their child's unique learning profile, navigate educational challenges, and build a strong home-school connection. Professional guidance, workshops, and advocacy support.",
  keywords: [
    "parent support education",
    "child learning profile",
    "parent workshops",
    "school advocacy for parents",
    "neurodiversity support",
    "home school connection",
    "Sarvata for parents",
  ],
  openGraph: {
    title:
      "Services for Parents - Understanding & Supporting Your Child's Learning | Sarvata",
    description:
      "Professional guidance, workshops, and advocacy support to help parents understand their child's learning profile and champion their educational journey.",
    url: "https://sarvata.in/services/for-parents",
    siteName: "Sarvata",
    images: [
      {
        url: "/og-parents.jpg",
        width: 1200,
        height: 630,
        alt: "Sarvata Services for Parents",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services for Parents - Sarvata",
    description:
      "Professional support to understand your child's unique learning profile and collaboratively map their path to holistic growth.",
    images: ["/og-parents.jpg"],
  },
};

export default function ParentsPage() {
  return (
    <main className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <MainHero
        webImage="/banners/pare-web.png"
        mobileImage="/banners/pare-mob.png"
        title={
          <>
            Supporting you in{" "}
            <span className="text-[#D9A63A]">every step</span>{" "}
            <span className="text-[#6B4A8E]">of your</span>{" "}
            <span className="text-[#D9A63A]">child's learning</span>{" "}
            <span className="text-[#6B4A8E]">journey.</span>
          </>
        }
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "For Parents" },
        ]}
      />

      {/* ── THE CHALLENGE ───────────────────────────────────────── */}
      <PathwayChallengeSection
        title="Navigating Education, Together"
        image="/assets/pare-1.png"
        paragraphs={[
          <span key="p1">
            You celebrate your child&apos;s strengths, navigate their
            challenges, and champion their unique potential. This journey can
            feel complex,{" "}
            <span className="text-primary italic font-bold">
              especially when supporting diverse learning needs.
            </span>
          </span>,
          <span key="p2">
            Sarvata partners with you to understand your child&apos;s learning
            profile and{" "}
            <span className="text-primary italic font-bold">
              empowers you to become a stronger advocate
            </span>{" "}
            in their educational journey.
          </span>,
        ]}
      />

      {/* ── OUR APPROACH ────────────────────────────────────────── */}
      <PathwayApproachSection
        eyebrow="How We Work With You"
        title="Understanding, Empowering, Advocating"
        image="/assets/pare-2.png"
        items={[
          {
            title: "Understanding Your Child",
            description:
              "Holistic evaluation and counseling to help you understand your child's unique learning profile, strengths, and areas for growth.",
          },
          {
            title: "Building Practical Strategies",
            description:
              "Evidence-based workshops and tailored guidance that give you tools to support your child's learning at home - in ways that actually work.",
          },
          {
            title: "Strengthening the Home-School Connection",
            description:
              "Strategies to foster open communication with educators and build a strong, collaborative partnership between home and school.",
          },
        ]}
      />

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <PathwayServicesSection
        eyebrow="Services"
        title="Support Built Around Your Family"
        columns={2}
        services={[
          {
            title: "Insights & Guidance",
            description:
              "Holistic evaluation and counseling to understand your child’s unique learning profile, strengths, and growth areas.",
            href: "/services/for-parents/insights-guidance",
            cta: "Learn More",
          },
          {
            title: "Parent Workshops",
            description:
              "Practical, evidence-based workshops offering strategies to support diverse learning needs at home.",
            href: "/services/for-parents/parent-workshops",
            cta: "Explore Workshops",
          },
          {
            title: "School Partnership & Advocacy",
            description:
              "Strategies to foster open communication with educators and strengthen the home-school connection.",
            href: "/services/for-parents/school-partnership-advocacy",
            cta: "Learn More",
          },
          {
            title: "For Your Child",
            description:
              "Help your child develop metacognitive awareness and effective learning strategies for long-term success.",
            href: "/services/for-parents/for-your-child",
            cta: "Learn More",
          },
        ]}
      />

      {/* ── NEXT STEPS ──────────────────────────────────────────── */}
      <PathwayNextSteps
        eyebrow="Next Steps"
        title="How Can We Support Your Family?"
        steps={[
          {
            label: "Let's Connect",
            title: "Schedule a Consultation",
            description:
              "Book a confidential consultation to discuss your child's specific needs and learning profile.",
            href: "/contact-us",
            cta: "Book a Consultation",
          },
          {
            label: "Say Hello",
            title: "Contact Us",
            description:
              "Have questions? Reach out directly and we'll be in touch within one business day.",
            href: "/contact-us",
            cta: "Get in Touch",
          },
        ]}
      />
    </main>
  );
}
