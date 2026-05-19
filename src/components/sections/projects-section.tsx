"use client";

import { FaArrowRight, FaRegFolderOpen } from "react-icons/fa";
import { ProjectCard } from "../card";
import { ProjectData } from "@/data/mocks/projects";

const ProjectsSection = () => {
  return (
    <div className="bg-gray-800 border p-8 md:p-10 rounded-xl w-full">
      <div className="mb-5 flex gap-5 justify-between">
        <div className="flex flex-row gap-5">
          <FaRegFolderOpen className="text-2xl text-orange-300" />
          <span className="text-orange-300 text-xl uppercase">Projects</span>
        </div>
        <button
          onClick={() => {}}
          className="flex flex-row gap-1 hover:text-orange-100 text-orange-300 cursor-pointer "
        >
          <span className="text-[13px]">View All Projects</span>
          <FaArrowRight className="text-[10px] mt-1.5" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {ProjectData?.slice(0, 10).map((index) => (
          <ProjectCard
            key={index.id}
            detail={index.description}
            image={index.image}
            name={index.name}
            tech={index.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
