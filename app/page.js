import LearningPathways from "@/sections/LearningPathways";
import Hero from "@/sections/Hero";
import WhoWeAre from "@/sections/WhoWeAre";
import Image from "next/image";
import Advantages from "@/sections/Advantages";
import PersonalisedLearningCTA from "@/sections/CTA";
import ModernRootSystem from "@/sections/GrowthBanner";
import PlantHero from "@/components/PlantHero";
import PlantHeroNew from "@/components/PlantHeroNew";
import PlantHeroClassicOrganic from "@/components/PlantHeroClassicOrganic";
import ModernPlantHero from "@/components/ModernPlantHero";

export default function Home() {
  return (
    <main>
      {/* <ModernRootSystem /> */}
      <PlantHero />
      <PlantHeroNew />
      <PlantHeroClassicOrganic />
      <ModernPlantHero />
      {/* <Hero /> */}
      <WhoWeAre />
      <LearningPathways />
      <Advantages />
      <PersonalisedLearningCTA />
      </main>
  );
}
