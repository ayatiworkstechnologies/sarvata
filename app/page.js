import ThreeDExperience from "@/components/ThreeDExperience";
import WhatWeDo from "@/sections/WhatWeDo";
import OurApproach from "@/sections/OurApproach";
import GetStarted from "@/sections/GetStarted";

export const metadata = {
  title: "Sarvata - Transforming Educators & Schools, Every Day",
  description:
    "Sarvata is a premier educational consultancy empowering educators, school leaders, and families with practical, research-driven strategies to build truly inclusive and learner-centered schools.",
  keywords: [
    "educational consultancy",
    "personalized learning",
    "inclusive education",
    "school improvement",
    "educator professional development",
    "Sarvata",
  ],
  openGraph: {
    title: "Sarvata - Transforming Educators & Schools, Every Day",
    description:
      "Practical, research-driven educational consulting for schools, educators, and families. Empowering every learner's unique potential.",
    url: "https://sarvata.in",
    siteName: "Sarvata",
    images: [{ url: "/og-home.jpg", width: 1200, height: 630, alt: "Sarvata - Transforming Learning" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvata - Transforming Educators & Schools, Every Day",
    description:
      "Practical, research-driven educational consulting for schools, educators, and families.",
    images: ["/og-home.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      <ThreeDExperience />
      <WhatWeDo />
      <OurApproach />
      <GetStarted />
    </main>
  );
}
