import LearningPathways from "@/sections/LearningPathways";
import Hero from "@/sections/Hero";
import WhoWeAre from "@/sections/WhoWeAre";
import Image from "next/image";
import Advantages from "@/sections/Advantages";
import PersonalisedLearningCTA from "@/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <LearningPathways />
      <Advantages />
      <PersonalisedLearningCTA />
      </main>
  );
}
