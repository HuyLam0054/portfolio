"use client";

import { BiArrowBack } from "react-icons/bi";
import { IconButton } from "../button";

const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-5 gap-4 my-2">
      <div className="bg-gray-800 col-span-3 border-2 rounded-lg p-8 md:p-12">
        <div>
          <span className="text-orange-300 text-xl font-semobild my-4 uppercase">
            Hello, I&apos;m
          </span>
          <p className="text-white text-5xl font-semobild my-2 uppercase">
            LAM QUANG HUY
          </p>
          <IconButton icon={<BiArrowBack />} name="ABC" url="123" />
        </div>
        <div>
          <span></span>
          <p></p>
        </div>
      </div>
      <div className="bg-gray-800 col-span-2 border-2 rounded-lg p-8 md:p-12">
        <h2 className="text-orange-300 text-xl font-semobild my-4 uppercase">
          Hello, I&apos;m
        </h2>
        <span className="text-white text-5xl font-semobild my-4 uppercase">
          LAM QUANG HUY
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
