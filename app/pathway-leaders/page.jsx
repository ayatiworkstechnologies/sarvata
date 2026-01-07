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
        title="Let’s Work Together to Create Stronger, Safer School Systems"
        breadcrumbs={[{ label: "for leaders" }]}
      />

      <StorySection
        image="/img-7.jpg"
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
            icon: "/icon/icon-15.svg",
            title: "Cyber Safety & Digital Citizenship",
            description: `Join interactive workshops to learn about cyber safety, managing your digital footprint, and using technology responsibly and creatively in today's world.`,
            href: "#",
          },
          {
            icon: "/icon/icon-16.svg",
            title: "Mental Health & Well-being",
            description: `
Explore sessions focused on building self-awareness, understanding emotions, managing stress, developing resilience, and taking care of your mental well-being.`,
            href: "#",
          },

          {
            icon: "/icon/icon-17.svg",
            title: "Healthy Relationships & Boundaries",
            description: `
Get accurate information and join supportive discussions about growing up, consent, boundaries, and building healthy, respectful relationships.`,
            href: "#",
          },
          {
            icon: "/icon/icon-1.svg",
            title: "Understanding How You Learn",
            description: `
Discover tools and strategies to understand your unique learning style, explore your passions, and (most importantly) learn *how* you learn best.`,
            href: "#",
          },
        ]}
      />
    </main>
  );
}
