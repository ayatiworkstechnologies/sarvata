"use client";

import MainHero from "@/components/MainHero";
import StorySection from "@/components/about/StorySection";
import SupportGridSection from "@/components/SupportGridSection";

export default function EducatorsPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/eudcators-web.jpg"
        mobileImage="/eudcators-mobile.jpg"
        title="You’re Already Doing This Work. We Help You Do It More Sustainably."
        breadcrumbs={[{ label: "For Educators" }]}
      />

      <StorySection
        image="/img-5.jpg"
        title="The Challenge"
        paragraphs={[
          "You are already responding to diverse learners. The challenge is making that responsiveness sustainable within limited time, large classes, and curriculum demands.",
          "We offer frameworks that systematize what you already do intuitively, moving from moment-to-moment responses to sustainable, structured differentiation.",
        ]}
      />

      <SupportGridSection
        eyebrow="Services"
        title="How We Support Educators"
        items={[
          {
            icon: "/icon/icon-4.svg",
            title: "Workshops & Training",
            description: "Interactive, hands-on learning with practical frameworks and tools you can use immediately.",
            href: "#",
          },
          {
            icon: "/icon/icon-5.svg",
            title: "Teacher Mentoring",
            description: "Confidential, in-class partnership to help you implement new approaches with your actual students.",
            href: "#",
          },
          {
            icon: "/icon/icon-6.svg",
            title: "Free Resources & Tools",
            description: "Download practical templates, observation guides, and decision frameworks you can adapt quickly.",
            href: "#",
          },
        ]}
      />
    </main>
  );
}
