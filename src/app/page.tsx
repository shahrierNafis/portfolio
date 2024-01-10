"use client";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Name from "@/components/Name";
import ParticleEffect from "@/components/ParticleEffect";
import ToolsNSkills from "@/components/ToolsNSkills";
import ScrollDown from "@/components/ScrollDown";

export default function Home() {
  return (
    <>
      <Name />
      <ParticleEffect />
      <ToolsNSkills />
      <FeaturedProjects />
      <Contact />
      <ScrollDown />
    </>
  );
}
