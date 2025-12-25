"use client";

import MainHero from "@/components/about/MainHero";
import StorySection from "@/components/about/StorySection";
import SupportGridSection from "@/components/SupportGridSection";

export default function LeadersPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/web-banner.jpg"
        mobileImage="/mobile-banner.jpg"
        title="For Leaders"
        breadcrumbs={[{ label: "for leaders" }]}
      />

      <StorySection
        image="/our-story.jpg"
        title="Leading Beyond the Status Quo"
        // subtitle="Why Sarvata Exists"
        paragraphs={[
          `Leading a school today means navigating a complex landscape. You balance the vital demands of daily operations with the imperative to innovate, fostering an environment where both students and educators thrive. It requires a vision that looks beyond standardised outcomes towards cultivating a truly learner-centric culture.`,
          `Sarvata is your strategic partner in this essential work. We provide the expertise, frameworks, and collaborative support to help you move from visionary ideas to tangible, school-wide transformation. Let us help you architect a future-ready learning environment built on the principles of inclusion, personalization, and mentorship.`,
        ]}
         />

      <SupportGridSection
        eyebrow="Support"
        title="Building a Thriving Educational Ecosystem"
        items={[
          {
            icon: "/icon/icon-1.svg",
            title: "Inclusion Audits & Roadmaps",
            description:
              "Partner with us for comprehensive inclusion audits and data-driven implementation roadmaps designed to embed responsive, equitable practices throughout your school community.",
            href: "#",
          },
          {
            icon: "/icon/icon-1.svg",
            title: "Faculty & Leadership Mentoring",
            description:
              "Engage in bespoke mentoring for your leadership team and faculty, fostering a shared vision, enhancing pedagogical practice, and building internal capacity for sustained growth.",
            href: "#",
          },
          {
            icon: "/icon/icon-1.svg",
            title: "Strategic Planning & Systems",
            description:
              "Enhance academic administration and optimise key processes, freeing your leadership to concentrate on strategic goals and mentoring your educators.",
            href: "#",
          },
          {
            icon: "/icon/icon-1.svg",
            title: "Our Core Principles",
            description:
              `What do we mean by "learning as a verb"? Read our foundational manifestos on the future of education and the path to self-actualization.`,
            href: "#",
          },
        ]}
      />
    </main>
  );
}
