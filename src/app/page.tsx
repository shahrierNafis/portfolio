"use client";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Name from "@/components/Name";
import ParticleEffect from "@/components/ParticleEffect";
import ToolsNSkills from "@/components/ToolsNSkills";

export default function Home() {
  return (
    <>
      <Name />
      <ParticleEffect />
      <ToolsNSkills />
      <FeaturedProjects />
      <Contact />
    </>
  );
}
