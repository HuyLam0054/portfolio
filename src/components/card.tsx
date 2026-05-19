"use client";

import Link from "next/link";
import ProjectIndicator from "./indicator";
import Image from "next/image";
import { ProjectData } from "@/data/mocks/projects";

type SkillsProps = { title: string; skills: string[]; score: number };
type ProjectsProps = {
  image: string;
  name: string;
  detail: string;
  tech: string[];
};

const SkillCard = ({ title, skills, score }: SkillsProps) => {
  return <div>Skillcard</div>;
};

const ProjectCard = ({ image, name, detail, tech }: ProjectsProps) => {
  return (
    <div className="bg-gray-700 block md:max-w-md border-orange-300 border-2 rounded-xl shadow-xs">
      <Link href="#">
        <Image
          width={500}
          height={500}
          className="h-auto min-h-32 object-cover w-full rounded-t-xl"
          src={image}
          alt=""
        />
      </Link>
      <div className="p-2 text-center">
        <Link href="#">
          <h5 className="my-3 text-white text-[15px] font-semibold tracking-tight text-heading">
            {name}
          </h5>
        </Link>
        <span className="text-gray-300 text-[13px]">{detail}</span>
        <div className="flex flex-wrap items-center justify-center gap-2 my-4 ">
          {tech?.map((index) => (
            <ProjectIndicator key={index} name={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { SkillCard, ProjectCard };
