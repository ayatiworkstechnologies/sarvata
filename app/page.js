import Home3DExperience from "@/sections/Home3DExperience";
import WhoWeAre from "@/sections/WhoWeAre";
import LearningPathways from "@/sections/LearningPathways";
import Advantages from "@/sections/Advantages";
import PersonalisedLearningCTA from "@/sections/CTA";

export default function Home() {
  return (
    <main>
      <Home3DExperience />
      <WhoWeAre />
      <LearningPathways />
      <Advantages />
      <PersonalisedLearningCTA />
    </main>
  );
}
