import * as React from "react";
import { GiAchievement } from "react-icons/gi";

export interface IAchievementProps {
  name: string;
  achievement: string;
  time: string;
  detail: string;
}

export function Achievement(props: IAchievementProps) {
  return (
    <div className="mb-5">
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 max-w-[600px] mt-5">
        <span className="text-gray-800 dark:text-gray-50 font-bold flex flex-row">
          <GiAchievement className="mr-1 w-6 h-6" />
          {props.name}
        </span>
      </p>
      <p className="text-sm text-gray-700 dark:text-gray-300 my-4 max-w-[600px]">
        <span className="text-gray-800 dark:text-gray-50 flex flex-row">
          {props.achievement} {props.time}
        </span>
      </p>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]">
        <span className="text-gray-800 dark:text-gray-50 flex flex-row text-justify">
          {props.detail}
        </span>
      </p>
    </div>
  );
}
