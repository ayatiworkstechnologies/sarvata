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
        title="Partnering in Your Child’s Journey"
        breadcrumbs={[{ label: "For Parents" }]}
      />

      <StorySection
        image="/img-9.jpg"
        title="Navigating Education, Together"
        paragraphs={[
          "You celebrate your child’s strengths, navigate their challenges, and champion their unique potential. This journey can feel complex.",
          "Sarvata partners with you to understand your child’s learning profile and empower you to advocate effectively with confidence.",
        ]}
      />

      <SupportGridSection
        eyebrow="Services"
        title="Support for Parents and Families"
        items={[
          {
            icon: "/icon/icon-12.svg",
            title: "Insights & Guidance",
            description: "Professional assessment and counseling to understand your child’s strengths and growth areas.",
            href: "#",
          },
          {
            icon: "/icon/icon-13.svg",
            title: "Parent Workshops",
            description: "Practical, evidence-based workshops with strategies to support diverse learning needs at home.",
            href: "#",
          },
          {
            icon: "/icon/icon-14.svg",
            title: "School Partnership & Advocacy",
            description: "Build stronger, clearer communication with educators and navigate accommodations confidently.",
            href: "#",
          },
        ]}
      />
    </main>
  );
}
