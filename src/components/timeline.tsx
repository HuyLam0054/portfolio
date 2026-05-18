"use client";
import { IoCalendarOutline } from "react-icons/io5";

type Props = { name: string; company: string; time: string; detail: string };

export function Timeline2_Component({ name, company, time, detail }: Props) {
  return (
    <div className="flex gap-4">
      {/* Left Line + Dot */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 border-4 border-orange-500">
          <IoCalendarOutline className="text-orange-500 text-lg" />
        </div>

        <div className="w-0.5 flex-1 bg-gray-700" />
      </div>

      {/* Content */}
      <div className="pb-5">
        <time className="inline-block text-[12px] px-2 py-1 rounded border border-gray-700 bg-gray-800 text-gray-300">
          {time}
        </time>

        <div className="flex items-center gap-2 mt-3">
          <h3 className="text-[15px] font-semibold text-white">{name}</h3>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <h4 className="text-[13px] font-semibold text-orange-300">
            {company}
          </h4>
        </div>

        <p className="text-[13px] mt-3 text-gray-400 max-w-3xl leading-7 line-clamp-2">
          {detail}
        </p>
      </div>
    </div>
  );
}
