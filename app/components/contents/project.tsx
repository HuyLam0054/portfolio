"use client";
import { applications, iProject } from "@/app/utils/experience";
import * as React from "react";
import { ProjectCard } from "../cards/project_card";

export interface IMyProjectsProps {}

export function Projects(props: IMyProjectsProps) {
  return (
    <>
      <div
        className="py-8 px-4 mx-auto max-w-screen-xl min-h-screen"
        id="projects"
      >
        <div className="mb-6 max-w-3xl text-center sm:text-center sm:mx-auto sm:mb-12">
          <h2 className="font-heading mb-4 mt-12 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
            My Projects
          </h2>
        </div>
        <div className="mb-4 grid-cols-2">
          {applications.map((item: iProject, index: number) => (
            <ProjectCard
              key={index}
              project_name={item.project_name}
              url={item.url}
              img_url={item.img_url}
              start_time={item.start_time}
              end_time={item.end_time}
              detail={item.detail}
              language_tag={item.language_tag.map((tag) => tag.name)}
              time_animation={0.5 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </>
  );
}
