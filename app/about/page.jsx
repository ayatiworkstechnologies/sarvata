"use client";

import MainHero from "@/components/MainHero";
import JourneySection from "@/components/about/JourneySection";
import MissionSection from "@/components/about/MissionSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import StorySection from "@/components/about/StorySection";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/about-web.jpg"
        mobileImage="/about-mobile.jpg"
        title="Why Sarvata Exists"
        breadcrumbs={[{ label: "About Us" }]}
      />

      <StorySection
        image="/our-story.jpg"
        title="Our Story"
        subtitle="Whole-School, Whole-Learner Change"
        paragraphs={[
          "Sarvata means ‘whole’. Our work is dedicated to the holistic development of schools and educators.",
          "We were born from years of working alongside teachers and school leaders trying to translate ideals of inclusion and personalization into systematic, sustainable practice.",
          "At the heart of everything we do is Personalised Learning, not as a technique, but as a fundamental belief in the unique potential of every learner.",
        ]}
      />

      <MissionSection
        title="Our Mission"
        highlight="Our mission is simple yet profound: to inspire and create better educators and schools, every day."
        description="We impart knowledge and experience through reflective teaching and learning, advancing the aspirations of students, teachers, and leaders while upholding integrity and trust. It’s not about how good we are. It’s about striving to be better, together."
      />

      <PhilosophySection
        title="Our Philosophy"
        intro="Learning is a verb, not a noun. Education’s next frontier isn’t technological. It’s human."
        image="/about-1.jpg"
        points={[
          {
            title: "Expanding Learner Agency",
            desc: "Personalization is about creating multiple pathways and progressively giving learners choice over which route they take.",
          },
          {
            title: "Guiding the Internal Environment",
            desc: "Educators can guide students’ internal development: metacognition, self-regulation, and identity as learners.",
          },
          {
            title: "Developing Self-Direction",
            desc: "Alongside content mastery, schools can build independence through explicit strategy instruction, supported practice, and progressive release.",
          },
        ]}
      />

      <JourneySection
        title="Our Collaborative Journey"
        intro="Lasting change emerges when we work with you, not on you."
        steps={[
          {
            title: "Phase 1: Understand Your Context",
            desc: "We begin by learning from you: goals, what is working, and where friction exists between aspiration and reality.",
            icon: "/icon/icon-1.svg",
          },
          {
            title: "Phase 2: Co-Create Solutions",
            desc: "We adapt frameworks to your setting and co-develop materials that fit your community, learners, and constraints.",
            icon: "/icon/icon-2.svg",
          },
          {
            title: "Phase 3: Build Sustainability",
            desc: "We mentor internal leaders and embed routines so successful practice becomes culture, not a temporary initiative.",
            icon: "/icon/icon-3.svg",
          },
        ]}
      />
    </main>
  );
}
