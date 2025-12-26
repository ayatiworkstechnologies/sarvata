"use client";

import MainHero from "@/components/about/MainHero";
import StorySection from "@/components/about/StorySection";
import SupportGridSection from "@/components/SupportGridSection";

export default function LearnersPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/leaners-web.jpg"
        mobileImage="/leaners-mobile.jpg"
        title="For Learners"
        breadcrumbs={[{ label: "for Learners" }]}
      />

      <StorySection
        image="/img-8.jpg"
        title="Your Journey, Your Voice"
        // subtitle="Why Sarvata Exists"
        paragraphs={[
          `School is more than just classes and grades. It's a time to explore your interests, figure out how you learn best, and discover who you are becoming. It's also about learning how to navigate the world around you safely and confidently.`,
          `Your voice matters, and your journey is unique. Sarvata is here to support you with resources and workshops designed to help you understand yourself better, stay safe, build healthy relationships, and unlock your amazing potential.`,
        ]}
      />

      <SupportGridSection
        eyebrow="Support"
        title="Tools for Your Growth"
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
