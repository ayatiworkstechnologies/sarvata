"use client";

import MainHero from "@/components/MainHero";
import StorySection from "@/components/about/StorySection";
import SupportGridSection from "@/components/SupportGridSection";

export default function LeadersPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/leaders-web.jpg"
        mobileImage="/leaders-mobile.jpg"
        title="Leading Sustainable Educational Change"
        breadcrumbs={[{ label: "For Leaders" }]}
      />

      <StorySection
        image="/img-7.jpg"
        title="Partnership, Not Prescription"
        paragraphs={[
          "Meaningful change is slow, contextual, and requires deep cultural shifts beyond policy updates.",
          "You know your community, culture, and constraints. We bring frameworks, research, and external perspectives. Together, we develop approaches that are both aspirational and realistic.",
        ]}
      />

      <SupportGridSection
        eyebrow="Services"
        title="How We Support School Leaders"
        items={[
          {
            icon: "/icon/icon-15.svg",
            title: "Inclusion Audits & Strategic Roadmaps",
            description: "Objective assessment of current practices with prioritized, actionable recommendations.",
            href: "#",
          },
          {
            icon: "/icon/icon-16.svg",
            title: "Faculty & Leadership Mentoring",
            description: "Build internal capacity through confidential mentoring and job-embedded professional learning.",
            href: "#",
          },
          {
            icon: "/icon/icon-17.svg",
            title: "Strategic Planning & Systems",
            description: "Design the operational infrastructure needed to align daily practice with long-term vision.",
            href: "#",
          },
        ]}
      />
    </main>
  );
}
