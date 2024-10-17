import * as React from "react";
import { Project_Card } from "../cards/project_card";

export function Section_3() {
  return (
    <section className="bg-white dark:bg-gray-900" id="experience">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="p-8 mx-auto">
          <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2 text-center">
            Experience
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Project_Card
            name={`The Coldest Sunset`}
            img={`https://v1.tailwindcss.com/img/card-top.jpg`}
            detail={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.`}
          />
          <Project_Card
            name={`The Coldest Sunset`}
            img={`https://v1.tailwindcss.com/img/card-top.jpg`}
            detail={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.`}
          />
          <Project_Card
            name={`The Coldest Sunset`}
            img={`https://v1.tailwindcss.com/img/card-top.jpg`}
            detail={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.`}
          />
        </div>
      </div>
    </section>
  );
}
