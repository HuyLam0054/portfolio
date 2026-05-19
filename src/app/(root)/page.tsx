"use client";

import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/exprience-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import { FaUserCircle } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";

export default function MainHome() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 gap-3">
      <HeroSection />
      <div className="grid lg:grid-cols-7 gap-2">
        <div className="bg-gray-800 lg:col-span-3 border p-8 md:p-5 rounded-xl">
          <div className="mb-5 flex gap-5">
            <FaUserCircle className="text-2xl text-orange-300" />
            <span className="text-orange-300 text-xl uppercase">About me</span>
          </div>
          <AboutSection />
        </div>
        <div className="bg-gray-800 lg:col-span-4 border p-8 md:p-5 rounded-xl">
          <div className="mb-5 flex gap-5">
            <HiBriefcase className="text-2xl text-orange-300" />
            <span className="text-orange-300 text-xl uppercase">
              Experience
            </span>
          </div>
          <ExperienceSection />
        </div>
      </div>
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
