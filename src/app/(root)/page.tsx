"use client";
import { Timeline2_Component, Timeline_Component } from "@/components/timeline";
import { Experience } from "@/data/mocks/timeline";

export default function MainHome() {
  return (
    <>
      <div className="flex flex-col bg-white mx-20 font-sans dark:bg-gray-800 gap-3 mt-20">
        {Experience.map((item, index) => (
          <Timeline2_Component
            key={index}
            name={item.name}
            time={item.time}
            detail={item.detail}
          />
        ))}
      </div>
    </>
  );
}
