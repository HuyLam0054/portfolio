/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import * as React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { Badge } from "../badge/language_badge";

export interface IProjectCardProps {
  project_name: string;
  url: string;
  img_url: string;
  start_time: string;
  end_time: string;
  detail: string;
  language_tag: string[];
  time_animation: number;
}

export function ProjectCard(props: IProjectCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] lg:flex mb-4">
      <Image
        src={props.img_url}
        alt={props.img_url}
        width={1000}
        height={1000}
        className="lg:w-1/2 max-h-96 object-cover"
      />

      <div className="relative py-4 px-7">
        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-[600px] my-2 flex bottom-0 gap-2">
          {props.language_tag.map((lang, index) => (
            <Badge key={index} name={lang} />
          ))}
        </p>
        <div className="mb-5">
          <p className="text-lg lg:text-2xl text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]">
            <span className="text-gray-800 dark:text-gray-50 font-bold">
              {props.project_name}
            </span>
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]">
            <span className="text-gray-800 dark:text-gray-50 flex flex-row">
              <IoCalendarOutline className="mr-2 w-4 h-4" />
              {props.start_time} - {props.end_time}
            </span>
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 max-w-[600px]">
            <span className="text-gray-800 dark:text-gray-50 flex flex-row text-justify">
              {props.detail}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
