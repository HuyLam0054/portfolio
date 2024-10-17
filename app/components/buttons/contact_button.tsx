import Image from "next/image";
import * as React from "react";

export interface IContactButtonProps {
  src: string;
}

export function ContactButton(props: IContactButtonProps) {
  return (
    <button
      type="button"
      className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
    >
      <Image
        src={props.src}
        alt={props.src}
        width={500}
        height={500}
        className="w-8 h-8"
      />
    </button>
  );
}
