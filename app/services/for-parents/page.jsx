import MainHero from "@/components/MainHero";
import PathwayChallengeSection from "@/components/services/PathwayChallengeSection";
import PathwayApproachSection from "@/components/services/PathwayApproachSection";
import PathwayServicesSection from "@/components/services/PathwayServicesSection";
import PathwayNextSteps from "@/components/services/PathwayNextSteps";

export const metadata = {
  title: "Services for Parents – Understanding & Supporting Your Child's Learning | Sarvata",
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
    title: "Services for Parents – Understanding & Supporting Your Child's Learning | Sarvata",
    description:
      "Professional guidance, workshops, and advocacy support to help parents understand their child's learning profile and champion their educational journey.",
    url: "https://sarvata.in/services/for-parents",
    siteName: "Sarvata",
    images: [{ url: "/og-parents.jpg", width: 1200, height: 630, alt: "Sarvata Services for Parents" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services for Parents – Sarvata",
    description:
      "Professional support to understand your child's learning profile and advocate effectively in their educational journey.",
    images: ["/og-parents.jpg"],
  },
};

export default function ParentsPage() {
  return (
    <main className="bg-white">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <MainHero
        webImage="/parents-web.jpg"
        mobileImage="/parents-mobile.jpg"
        title="Partnering in Your Child's Journey"
        breadcrumbs={[{ label: "For Parents" }]}
      />

      {/* ── THE CHALLENGE ───────────────────────────────────────── */}
      <PathwayChallengeSection
        eyebrow="Navigating Education, Together"
        title="You Champion Your Child's Potential—We Help You Understand It"
        paragraphs={[
          "You celebrate your child's strengths, navigate their challenges, and champion their unique potential. This journey can feel complex, especially when supporting diverse learning needs.",
          "Sarvata partners with you to understand your child's learning profile and empowers you to become a stronger advocate in their educational journey.",
          "You are not alone. We offer a supportive space for parents—professional insights, practical strategies, and clear guidance, every step of the way.",
        ]}
      />

      {/* ── OUR APPROACH ────────────────────────────────────────── */}
      <PathwayApproachSection
        eyebrow="How We Work With You"
        title="Understanding, Empowering, Advocating"
        items={[
          {
            title: "Understanding Your Child",
            description:
              "Professional assessment and counseling to help you understand your child's unique learning profile, strengths, and areas for growth.",
          },
          {
            title: "Building Practical Strategies",
            description:
              "Evidence-based workshops and tailored guidance that give you tools to support your child's learning at home—in ways that actually work.",
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
        services={[
          {
            title: "Insights & Guidance",
            description:
              "Professional assessment and counseling to understand your child's unique learning profile, strengths, and growth areas—delivered with clarity and compassion.",
            href: "#insights",
            cta: "Learn More",
          },
          {
            title: "Parent Workshops",
            description:
              "Practical, evidence-based workshops offering strategies to support diverse learning needs at home, including neurodiversity and learning differences.",
            href: "#workshops",
            cta: "Explore Workshops",
          },
          {
            title: "School Partnership & Advocacy",
            description:
              "Strategies to foster open communication with educators and strengthen the home-school connection for your child's long-term success.",
            href: "#advocacy",
            cta: "Learn More",
          },
          {
            title: "For Your Child",
            description:
              "Help your child develop metacognitive awareness and effective learning strategies for long-term academic confidence and self-direction.",
            href: "#for-child",
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
            label: "Get Informed",
            title: "Download the Parent Services Guide",
            description:
              "A clear overview of all the ways Sarvata partners with families—what to expect and how to begin.",
            href: "#guide",
            cta: "Download Guide",
          },
          {
            label: "Let's Connect",
            title: "Schedule a Consultation",
            description:
              "Book a confidential consultation to discuss your child's specific needs and learning profile.",
            href: "/contact",
            cta: "Book a Consultation",
          },
          {
            label: "Say Hello",
            title: "Contact Us",
            description:
              "Have questions? Reach out directly and we'll be in touch within one business day.",
            href: "/contact",
            cta: "Get in Touch",
          },
        ]}
      />

    </main>
  );
}
