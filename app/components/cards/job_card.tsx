"use client";

import React from "react";
import { IoSparklesOutline } from "react-icons/io5";

export interface IJobCardProps {
  name: string;
}

export function JobCard(props: IJobCardProps) {
  return (
    <div className="py-[8px] px-[7px] border flex rounded-3xl border-yellow-700 opacity-[0.9] mb-4 sm:mb-0 mr-5">
      <IoSparklesOutline className="text-yellow-700 dark:text-yellow-200 mr-[10px] w-2 h-2 sm:h-5 sm:w-5" />
      <h1 className="text-yellow-700 dark:text-[#cbbcf8] text-[10px] sm:text-[15px]">
        {props.name}
      </h1>
    </div>
  );
}
