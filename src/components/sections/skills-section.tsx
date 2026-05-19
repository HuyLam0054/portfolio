"use client";

import { FaArrowRight } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";

const SkillsSection = () => {
  return (
    <div className="bg-gray-800 border p-8 md:p-10 rounded-xl w-full">
      <div className="mb-5 flex gap-5 justify-between">
        <div className="flex flex-row gap-5">
          <IoStatsChartOutline className="text-2xl text-orange-300" />
          <span className="text-orange-300 text-xl uppercase">
            Skills & Enpertise
          </span>
        </div>
        <button
          onClick={() => {}}
          className="flex flex-row gap-1 hover:text-orange-100 text-orange-300 cursor-pointer "
        >
          <span className="text-[13px]">View All Skills</span>
          <FaArrowRight className="text-[10px] mt-1.5" />
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;
