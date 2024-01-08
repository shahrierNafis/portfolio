"use client";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import ParticleEffect from "@/components/ParticleEffect";
import ToolsNSkills from "@/components/ToolsNSkills";

export default function Home() {
  return (
    <>
      <ParticleEffect />
      <ToolsNSkills />
      <FeaturedProjects />
      <Contact />
    </>
  );
}
