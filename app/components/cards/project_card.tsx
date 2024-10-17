import Image from "next/image";
import * as React from "react";

export interface IProject_CardProps {
  name: string;
  img: string;
  detail: string;
  //   badge: string[];
}

export function Project_Card(props: IProject_CardProps) {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <Image
        width={1000}
        height={1000}
        className="w-full h-auto"
        src={props.img}
        alt={props.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">{props.detail}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
          Yellow
        </span>
      </div>
    </div>
  );
}
