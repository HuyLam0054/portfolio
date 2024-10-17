import * as React from "react";

export interface IYellow_BadgeProps {
  name: string;
}

export function Yellow_Badge(props: IYellow_BadgeProps) {
  return (
    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
      {props.name}
    </span>
  );
}
