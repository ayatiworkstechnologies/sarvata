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
        title="The Impossible Balancing Act"
        // subtitle="Why Sarvata Exists"
        paragraphs={[
          "You see it every day. The student who finishes early and is bored. The student who struggles with the pace and feels left behind. The student who is bright and creative, but their gifts don't fit into a standardized test box.",
          `You're constantly pulled in 25 different directions, trying to be everything to everyone. You know the "one-size-fits-all" model is failing your students, but finding the time and the tools to differentiate for everyone feels overwhelming.`
         ]}
        link="/learning-pathways"
        linkText="The goal is no longer to 'cover the curriculum.' The goal is to 'uncover the learner."
      />

       <SupportGridSection
        eyebrow="Support"
        title="Find the Support You Need"
        items={[
          {
            icon: "/icon/icon-1.svg",
            title: "Workshops & Training",
            description:
              "Gain practical strategies to build learner-centric classrooms. Explore programs on differentiation, fostering metacognition, and true personalization.",
            href: "/support/workshops",
          },
          {
            icon: "/icon/icon-1.svg",
            title: "In-Class Mentoring",
            description:
              "Ready to become a learning mentor? Our consultants partner with you through classroom observations and co-planning to guide students’ internal development.",
            href: "/support/mentoring",
          },
          {
            icon: "/icon/icon-1.svg",
            title: "Free Resources & Tools",
            description:
              "Download free checklists for identifying student strengths, lesson plan templates, and guides for creating choice-based activities.",
            href: "/support/resources",
          },
          {
            icon: "/icon/icon-1.svg",
            title: "Our Core Principles",
            description:
              "What do we mean by “learning as a verb”? Read our foundational manifestos on the future of education and the path of self-actualization.",
            href: "/support/principles",
          },
        ]}
      />

 

    </main>
  );
}
