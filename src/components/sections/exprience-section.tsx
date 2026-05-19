"use client";

import { Experience } from "@/data/mocks/timeline";
import { Timeline2_Component } from "../timeline";

const ExperienceSection = () => {
  return (
    <div className="px-2 md:px-5">
      {[...Experience].reverse().map((item, index) => (
        <Timeline2_Component
          key={index}
          name={item.name}
          company={item.company}
          time={item.time}
          detail={item.detail}
        />
      ))}
    </div>
  );
};

export default ExperienceSection;
