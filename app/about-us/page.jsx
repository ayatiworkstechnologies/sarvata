import MainHero from "@/components/MainHero";
import StorySection from "@/components/about/StorySection";
import FounderSection from "@/components/about/FounderSection";
import MissionSection from "@/components/about/MissionSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import JourneySection from "@/components/about/JourneySection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import ResearchFoundation from "@/components/about/ResearchFoundation";

export const metadata = {
  alternates: { canonical: '/about-us' },
  title: "About Us - Sarvata Educational Consultancy",
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
    title: "About Us - Sarvata Educational Consultancy",
    description:
      "Discover why Sarvata exists: to bridge the gap between aspirational pedagogy and daily classroom practice, empowering every learner's unique potential.",
    url: "https://sarvata.org/about",
    siteName: "Sarvata",
    images: [
      { url: "/og-about.png", width: 1200, height: 630, alt: "About Sarvata" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Sarvata Educational Consultancy",
    description:
      "Discover why Sarvata exists and how we partner with schools to build truly inclusive, learner-centered environments.",
    images: ["/og-about.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      <MainHero
        webImage="/banners/about-web.png"
        mobileImage="/banners/about-mob.png"
        title={
          <>
            Empowering <br />
            <span className="text-[#D9A63A]">educators</span>{" "}
            <span className="text-[#6B4A8E]">and designing</span> <br />
            <span className="text-[#D9A63A]">truly inclusive,</span>{" "}
            <span className="text-[#6B4A8E]">learner-centered schools.</span>
          </>
        }
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
        image="/assets/about-1.png"
      />

      <FounderSection
        founderTitle="Founder's Journey"
        founderText="Sarvata was founded through a sustained engagement with both the theory and practice of inclusive education. Alongside years of work in diverse classrooms, the journey has involved shaping educator learning, designing responsive frameworks, and translating research on learner variability, agency, and self-direction into strategies schools can actually use. The vision has always been to move beyond inspiring ideas alone and contribute practical models that help educators build equitable, learner-centered environments with confidence."
        founderImage="/assets/about-2.png"
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
            desc: `Personalization isn't about optimizing a single pathway for each student. It's about creating multiple pathways and progressively giving learners choice over which route they take.

When students experience genuine autonomy in how they explore a concept, many often demonstrate stronger intrinsic motivation. This doesn't mean eliminating structure. It means building agency as competence develops.`,
          },
          {
            title: "Guiding the Internal Environment",
            desc: `Beyond managing classrooms and delivering content, educators have the opportunity to guide students' internal development: how learners think about their thinking, regulate themselves, and build identity as learners.

This mentorship dimension helps students understand not just what they learn but how they learn. Over time, this metacognitive awareness can support greater independence across academic and non-academic contexts.`,
          },
          {
            title: "Developing Self-Direction",
            desc:
              "Alongside content mastery, many schools are exploring how to support learners in gradually directing their own growth. This capacity builds through explicit strategy instruction, supported practice, and progressive independence.",
          },
        ]}
        researchTitle="Research Foundation"
        researchText="These principles draw from decades of research in metacognition, self-determination theory, and expertise development. We also acknowledge reality: implementation varies by context, developmental stage matters, and real-world constraints shape what's possible. Our role is helping schools navigate that complexity."
      />

      <ResearchFoundation
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
            image: "/assets/about-4.png",
          },
          {
            title: "Phase 2: Co-Create Solutions",
            desc: "We adapt frameworks to your context and co-develop materials with your team. You bring deep expertise in your students and setting. We bring additional perspectives, research-informed strategies, and tools refined across diverse contexts. Together, we create approaches that fit your reality, not a template.",
            image: "/assets/about-5.png",
          },
          {
            title: "Phase 3: Build Sustainability",
            desc: "We develop your internal capacity by mentoring teacher leaders, embedding practices into your daily routines, and creating structures that sustain themselves. Success means the approaches become how you naturally operate - part of your culture, not an initiative.",
            image: "/assets/about-6.png",
          },
        ]}
      />

      <TestimonialsSection
        title="What Our Community Says"
        testimonials={[
          {
            quote:
              "An informative and well-structured session that provided valuable insights into types of giftedness and practical approaches to differentiated instruction.",
            author: "Deepeka P S, Facilitator",
          },
          {
            quote:
              "The workshop was highly enriching, offering deep insights and encouraging self-reflection. The progression from understanding the learner to applying strategies through discussions, activities, and lesson planning was thoughtfully designed.",
            author: "Francis Xavier K, Facilitator",
          },
          {
            quote:
              "The explanations were clear and concise, especially the scientific perspective on giftedness, which was explained in a very simple and effective manner. The right balance of content interspersed with activities such as mindfulness and paired work made the session engaging and memorable.",
            author: "Sangeetha, Facilitator",
          },
        ]}
      />
    </main>
  );
}
