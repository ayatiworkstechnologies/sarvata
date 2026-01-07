"use client";

import MainHero from "@/components/MainHero";
import StorySection from "@/components/about/StorySection";
import SupportGridSection from "@/components/SupportGridSection";

export default function ParentsPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/parents-web.jpg"
        mobileImage="/parents-mobile.jpg"
        title="Have Concerns or Questions About Your Child’s Well-Being? Reach Out"
        breadcrumbs={[{ label: "For Parents" }]}
      />

      <StorySection
        image="/img-9.jpg"
        title="Navigating Education, Together"
        // subtitle="Why Sarvata Exists"
        paragraphs={[
          `Parenting today means guiding your child through an ever-evolving educational landscape. You celebrate their strengths, navigate their challenges, and champion their unique potential. We understand that this journey can sometimes feel complex, especially when supporting diverse learning needs.`,
          `You are not alone. Sarvata offers a supportive space for parents, providing insights, practical strategies, and clear guidance. We partner with you to better understand your child's learning profile and empower you to become an even stronger advocate and partner in their educational journey.`,
        ]}
      />

      <SupportGridSection
        eyebrow="Support"
        title="Support for Your Family"
        items={[
          {
            icon: "/icon/icon-12.svg",
            title: "Support for Your Family",
            description:
              "Access professional academic and psycho-counseling support tailored to help you understand your child's unique learning profile, strengths, and areas for growth.",
            href: "#",
          },
          {
            icon: "/icon/icon-13.svg",
            title: "Parent Workshops",
            description:
              "Participate in workshops designed for parents, offering practical, evidence-based strategies to support diverse learning needs, including neurodiversity, within your home environment.",
            href: "#",
          },
          {
            icon: "/icon/icon-14.svg",
            title: "School Partnership & Advocacy",
            description:
              "Discover effective strategies to foster open communication and strong collaboration with educators, strengthening the home-school connection for your child's success.",
            href: "#",
          },
        ]}
      />
    </main>
  );
}
