import MainHero from "@/components/MainHero";
import StorySection from "@/components/about/StorySection";
import MissionSection from "@/components/about/MissionSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import JourneySection from "@/components/about/JourneySection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import ImpactSection from "@/components/about/ImpactSection";

export const metadata = {
  title: "About Sarvata - Our Story, Mission & Philosophy",
  description:
    "Learn about Sarvata's founding mission: to inspire and create better educators and schools, every day. Discover our philosophy of personalized learning, expanding learner agency, and building self-directed education environments.",
  keywords: [
    "about Sarvata",
    "educational philosophy",
    "personalized learning",
    "learner agency",
    "school transformation",
    "inclusive education mission",
  ],
  openGraph: {
    title: "About Sarvata - Our Story, Mission & Philosophy",
    description:
      "Discover why Sarvata exists: to bridge the gap between aspirational pedagogy and daily classroom practice, empowering every learner's unique potential.",
    url: "https://sarvata.in/about",
    siteName: "Sarvata",
    images: [{ url: "/og-about.jpg", width: 1200, height: 630, alt: "About Sarvata" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sarvata - Our Story, Mission & Philosophy",
    description:
      "Discover why Sarvata exists and how we partner with schools to build truly inclusive, learner-centered environments.",
    images: ["/og-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      <MainHero
        webImage="/banners/about.jpg"
        mobileImage="/banners/about-mob.jpg"
        title="Want to Learn More About Our Approach? Start a Conversation"
        breadcrumbs={[{ label: "About Us" }]}
      />

      <StorySection
        title="Our Story"
        subtitle="Why Sarvata Exists"
        paragraphs={[
          "Sarvata means 'whole'. Our work is dedicated to the holistic development of schools and educators.",
          "We were born from years of working alongside teachers and school leaders wrestling with how to translate ideals of inclusion and personalization into systematic, sustainable practice. We guide teachers and school leaders to become truly inclusive and responsive in their practice. We embed practical, research-driven strategies into the daily life of schools, moving educators from aspiration to implementation.",
          "At the heart of everything we do is Personalised Learning, not as a technique, but as a fundamental belief in the unique potential of every learner. We partner with schools to build the environments, systems, and educator capacities where this potential can truly flourish.",
        ]}
        founderTitle="Founder's Journey"
        founderText="Our founder established Sarvata with a profound commitment to educational equity and the belief that every child deserves a school environment designed for their unique potential. Drawing from decades of firsthand experience in diverse classrooms, the vision was to bridge the gap between aspirational pedagogy and daily practice."
        image="/about.jpg"
      />

      <MissionSection
        title="Our Mission"
        highlight="Our mission is simple yet profound: to inspire and create better educators and schools, every day."
        paragraphs={[
          "We strive to be mindful in our approach, providing a vibrant and supportive environment for growth. We impart knowledge and experience through reflective teaching and learning, advancing the aspirations of students, teachers, and leaders while upholding integrity and trust.",
          "It's not about how good we are. It's about striving to be better, together.",
        ]}
      />

      <PhilosophySection
        title="Our Philosophy"
        subtitle="Learning is a Verb, Not a Noun"
        intro="Education's next frontier isn't technological. It's human. It's the shift from focusing on learning outcomes to focusing on the learner at the center of the process. We build our work on three interconnected principles:"
        points={[
          {
            title: "Expanding Learner Agency",
            desc: "Personalization isn't about optimizing a single pathway for each student. It's about creating multiple pathways and progressively giving learners choice over which route they take. When students experience genuine autonomy in how they explore a concept, many often demonstrate stronger intrinsic motivation. This doesn't mean eliminating structure. It means building agency as competence develops.",
          },
          {
            title: "Guiding the Internal Environment",
            desc: "Beyond managing classrooms and delivering content, educators have the opportunity to guide students' internal development: how learners think about their thinking, regulate themselves, and build identity as learners. This mentorship dimension helps students understand not just what they learn but how they learn. Over time, this metacognitive awareness can support greater independence across academic and non-academic contexts.",
          },
          {
            title: "Developing Self-Direction",
            desc: "Alongside content mastery, many schools are exploring how to support learners in gradually directing their own growth. This capacity builds through explicit strategy instruction, supported practice, and progressive independence.",
          },
        ]}
        researchTitle="Research Foundation"
        researchText="These principles draw from decades of research in metacognition, self-determination theory, and expertise development. We also acknowledge reality: implementation varies by context, developmental stage matters, and real-world constraints shape what's possible. Our role is helping schools navigate that complexity."
      />

      <JourneySection
        title="Our Collaborative Journey"
        intro="We believe in partnership, not prescriptions. Lasting change emerges when we work with you, not on you. Our approach unfolds in three phases:"
        steps={[
          {
            title: "Phase 1: Understand Your Context",
            desc: "We begin by learning from you. What are your goals? What's working? Where's the friction between aspiration and reality? This isn't a generic audit. It's a genuine discovery of your unique culture, constraints, and aspirations - what you're building toward and what's standing in the way.",
          },
          {
            title: "Phase 2: Co-Create Solutions",
            desc: "We adapt frameworks to your context and co-develop materials with your team. You bring deep expertise in your students and setting. We bring additional perspectives, research-informed strategies, and tools refined across diverse contexts. Together, we create approaches that fit your reality, not a template.",
          },
          {
            title: "Phase 3: Build Sustainability",
            desc: "We develop your internal capacity by mentoring teacher leaders, embedding practices into your daily routines, and creating structures that sustain themselves. Success means the approaches become how you naturally operate - part of your culture, not an initiative.",
          },
        ]}
      />

      <TestimonialsSection
        title="What Educators Say"
        testimonials={[
          { quote: "Sarvata transformed how we approach inclusive education. Their strategies are practical and immediately applicable.", author: "Sarah Jenkins, School Principal" },
          { quote: "The mentorship provided by Sarvata gave our teachers the confidence to truly personalize learning for every student.", author: "David Chen, Lead Educator" },
          { quote: "As a parent, seeing the shift in my child's engagement and autonomy has been nothing short of remarkable.", author: "Priya Sharma, Parent" },
        ]}
      />

      <ImpactSection
        title="Our Impact Snapshot"
        metrics={[
          { value: 50, suffix: "+", label: "Partner Schools" },
          { value: 2000, suffix: "+", label: "Educators Mentored" },
          { value: 50000, suffix: "+", label: "Students Impacted" },
          { value: 100, suffix: "%", label: "Commitment to Equity" },
        ]}
      />
    </main>
  );
}
