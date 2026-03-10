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
        title="Want to Learn More About Our Approach? Start a Conversation"
        breadcrumbs={[{ label: "About Us" }]}
      />

      <StorySection
        image="/our-story.jpg"
        title="Our Story"
        subtitle="Why Sarvata Exists"
        paragraphs={[
          "Sarvata means ‘whole’. Our work is dedicated to the holistic development of schools and educators. We were born from a desire to offer transformative programmes that guide teachers and school managements to become truly inclusive and responsive in their processes. We saw a need to move beyond theory and embed practical, research-driven strategies into the daily life of schools.",
          "At the heart of everything we do is the design of Personalised Learning not just as a technique, but as a fundamental belief in the unique potential of every individual learner. We partner with schools to build environments where this potential can truly flourish.",
        ]}
      />

      <MissionSection
        title="Our Mission"
        highlight="Our mission is simple yet profound: to inspire and create better educators and schools every day."
        description="We strive to be mindful, providing a vibrant and supportive environment for growth. We impart knowledge and experience through reflective teaching and learning, advancing the aspirations of students, teachers, and leaders while upholding integrity and trust. We believe deeply that it's not about how good we are; it's about striving to be better, together."
      />

      <PhilosophySection
        title="Our Philosophy: The Personalization Imperative"
        intro="The true next wave of educational innovation isn't about technology; it's about shifting our focus from the outcomes of learning to the human learner at the heart of the process. It’s about moving beyond the one-size-fits-all model towards learning that is deeply personal, profoundly engaging, and relentlessly focused on the individual."
        image="/about-1.jpg"
        points={[
          {
            title: "Redefining Personalization: Moving from 'What' to 'How'",
            desc: "For too long, we've confused 'customization'-offering optimized pathways-with true 'personalization.' Real personalization hands the menu to the learner. It cedes control, giving students genuine agency and choice in how they explore a concept. When learners direct their own process, they ignite intrinsic motivation and build profound, lasting ownership of their education. We must see learning as a dynamic verb, not a static noun.",
          },
          {
            title: "The New Role of the Teacher: From Facilitator to Mentor",
            desc: "A facilitator manages the external learning environment. A mentor guides the internal one. The next wave demands that educators transcend content delivery to embrace this profound role. The focus shifts to fostering metacognition-helping learners reflect on how they learn and who they are becoming through the process. We empower educators to mentor the development of self-aware, self-directed human beings.",
          },
          {
            title: "The True Purpose: Education as a Path to Self-Actualization",
            desc: "When we center the learner, empowering them with choice and mentored reflection, we do more than teach subjects-we guide them towards self-realization. By understanding how they learn, students begin to understand who they are. This is the foundation for fulfilling their potential and finding their place in the world.",
          },
           {
            title: "The True Purpose: Education as a Path to Self-Actualization",
            desc: "When we center the learner, empowering them with choice and mentored reflection, we do more than teach subjects-we guide them towards self-realization. By understanding how they learn, students begin to understand who they are. This is the foundation for fulfilling their potential and finding their place in the world.",
          },
        ]}
      />

      <JourneySection
  title="Our Collaborative Journey"
  intro="We believe in partnership, not just process. We work with you to embed lasting, meaningful change by moving through three collaborative phases."
  steps={[
    {
      title: "Listen & Understand",
      desc: "We begin by listening. We seek to understand your unique culture, goals, and challenges-not with a generic audit, but with a deep, empathetic discovery.",
      icon: "/icon/icon-1.svg",
    },
    {
      title: "Mentor & Co-Create",
      desc: "We act as mentors, not just consultants. We co-create solutions with your team, co-developing lesson plans and mentoring your educators to build self-sustaining internal expertise.",
      icon: "/icon/icon-2.svg",
    },
    {
      title: "Embed & Sustain",
      desc: "Our goal is to make ourselves obsolete. We help you embed these new, learner-centric practices into your school's DNA, creating a culture that sustains and refines itself long after our work is done.",
      icon: "/icon/icon-3.svg",
    },
  ]}
/>

    </main>
  );
}
