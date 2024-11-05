"use client";
import * as React from "react";
import { JobCard } from "../cards/job_card";
import Image from "next/image";

export function Home() {
  return (
    <section
      className="bg-white dark:bg-gray-900 mt-10 md:mt-0 min-h-screen"
      id="home"
    >
      <div className="py-8 px-4 m-auto max-w-screen-xl">
        <div className="grid w-full lg:grid-cols-2 gap-3">
          <div className="bg-white dark:bg-gray-900 dark:border-gray-900 p-8 sm:p-12">
            <div className="flex flex-row items-center justify-center w-full">
              <div className="h-full w-full flex flex-col justify-center m-auto text-start">
                <div className="flex flex-row justify-start flex-wrap capitalize">
                  <JobCard name={`data_analyst`} />
                  <JobCard name={`business_analyst`} />
                </div>

                <div className="flex flex-col gap-6 mt-5 sm:my-12 text-5xl sm:text-6xl font-bold text-gray-800 dark:text-white w-auto h-auto">
                  <span>
                    Hello, My name is
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                      {" "}
                      Quang Huy{" "}
                    </span>
                  </span>
                </div>
                <div className="w-full h-full justify-center items-center flex sm:hidden my-3">
                  {/* <Image
                    src="/bg_2.svg"
                    alt="work icons"
                    height={450}
                    width={450}
                    className="my-4"
                  /> */}
                </div>
                <p className="text-sm sm:text-base content-normal text-gray-700 dark:text-gray-300 mb-5 text-justify">
                  I am a recent graduate majoring in Information Systems. With
                  the specialized knowledge I have gained and the achievements I
                  accomplished during my studies, I aspire to work in the Data
                  field as a Data Analyst (DA) or Business Analyst (BA). My goal
                  is to gain more practical experience and knowledge to handle
                  work efficiently. I hope that working in your company will
                  help me acquire additional experience and skills, enabling me
                  to achieve my objective of becoming a Data Scientist within
                  the next four years and potentially maintain a long-term
                  commitment to the company.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 dark:border-gray-900 p-8 hidden sm:flex">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src="/main.png"
                alt="work icons"
                height={550}
                width={550}
                className="h-[80%] w-auto rounded-full hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
