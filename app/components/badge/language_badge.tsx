"use client";

import React from "react";

export interface IBadge {
  name: string;
}

export function Badge(props: IBadge) {
  return (
    <>
      <span className="w-auto bg-blue-100 text-blue-800 text-xs font-medium px-1 rounded-full dark:bg-purple-900 dark:text-purple-300">
        {props.name}
      </span>
    </>
  );
}
