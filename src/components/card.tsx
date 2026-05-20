"use client";

import Link from "next/link";
import ProjectIndicator from "./indicator";
import Image from "next/image";

type SkillsProps = {
  img: string;
  title: string;
  skills: string[];
  score: number;
};
type ProjectsProps = {
  image: string;
  name: string;
  detail: string;
  tech: string[];
};

const SkillCard = ({ img, title, skills, score }: SkillsProps) => {
  return (
    <div className="bg-gray-700 block max-w-md p-6 border-orange-300 border-2 rounded-md shadow-xs">
      <div className="flex flex-row">
        <Image
          width={300}
          height={300}
          src={img}
          alt="icon"
          className="w-5 h-5 mr-2 mt-2"
        />
        <h5 className="mb-3 text-white text-[15px] font-semibold tracking-tight text-heading leading-8">
          {title}
        </h5>
      </div>
      <span className="text-[13px] mb-6 text-gray-200">
        {skills?.map((index) => (
          <p key={index}>- {index}</p>
        ))}
      </span>
      <div className="w-full bg-gray-800 rounded-full mt-4">
        <div
          className="bg-orange-300 text-xs font-medium text-gray-800 text-center p-0.5 leading-none rounded-full h-4 flex items-center justify-center"
          style={{ width: `${score}%` }}
        >
          {score}%
        </div>
      </div>
    </div>
  );
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
          <h5 className="my-3 text-white hover:text-orange-300 duration-300 text-[15px] font-semibold tracking-tight text-heading">
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
