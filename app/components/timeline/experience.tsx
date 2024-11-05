import * as React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { Badge } from "../badge/language_badge";

export interface IExperienceProps {
  name: string;
  position: string;
  start_time: string;
  end_time: string;
  detail: string;
  language: string[];
}

export function Experience(props: IExperienceProps) {
  return (
    <ol
      className="relative border-s border-gray-200 dark:border-gray-700"
      id="experience"
    >
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <div className="mb-5">
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]">
            <span className="text-gray-800 dark:text-gray-50 font-bold">
              {props.name}
            </span>
          </p>
          <div className="ml-5">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[500px]">
              <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                {props.position}
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
            <div className="max-w-screen-sm flex">
              <p className="text-sm mt-2 flex gap-2">
                {props.language.map((lang, index) => (
                  <Badge key={index} name={lang} />
                ))}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ol>
  );
}
