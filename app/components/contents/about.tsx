"use client";
import * as React from "react";
import Image from "next/image";
import {
  FaBirthdayCake,
  FaHome,
  FaMailBulk,
  FaPhoneAlt,
  FaUserCircle,
  FaUserGraduate,
} from "react-icons/fa";
import {
  achievement,
  experience,
  iAchievement,
  iExperience,
} from "@/app/utils/experience";
import { Achievement } from "../cards/achievement_card";
import { Experience } from "../timeline/experience";

export function About() {
  return (
    <section className="bg-white dark:bg-gray-900" id="about">
      <div className="py-8 px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-4 pb-10 text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white capitalize">
          About me
        </h2>
        <div className="grid sm:grid-cols-2 gap-5 max-w-screen-xl">
          <div className="flex flex-row items-center justify-center w-full ">
            <div className="h-full w-full flex flex-col justify-center m-auto text-start">
              {/* avt img */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="w-full h-full justify-center items-center flex rounded-full">
                  <Image
                    src="/avt.png"
                    alt="work icons"
                    height={450}
                    width={450}
                    className="rounded-full object-cover -mt-8 h-64 w-64"
                  />
                </div>
                {/* information */}
                <div>
                  <p className="text-2xl text-gray-700 dark:text-gray-300 mb-5 max-w-[600px]">
                    <span className="text-gray-800 dark:text-gray-50 font-bold">
                      Lam Quang Huy
                    </span>
                  </p>

                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]">
                    <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                      <FaUserCircle className="mr-2 w-4 h-4" />
                      Male
                    </span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]">
                    <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                      <FaBirthdayCake className="mr-2 w-4 h-4" />
                      12 / 11 / 2000
                    </span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]">
                    <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                      <FaPhoneAlt className="mr-2 w-4 h-4" />
                      (+84) 383 780 054
                    </span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]">
                    <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                      <FaMailBulk className="mr-2 w-4 h-4" />
                      huy.lam.0054@gmail.com
                    </span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]">
                    <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                      <FaHome className="mr-2 w-4 h-4" />
                      Long Thanh, Dong Nai
                    </span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]">
                    <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                      <FaUserGraduate className="mr-2 w-4 h-4" />
                      Thu Dau Mot University <br />
                      (8/2019 - 12/2023)
                    </span>
                  </p>
                </div>
              </div>

              <div className="text-base sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-5 max-w-[600px] py-3">
                <span className="font-bold capitalize">My Achievement</span>
                {achievement.map((item: iAchievement) => (
                  <Achievement
                    key={item.name}
                    name={item.name}
                    achievement={item.achievement}
                    time={item.time}
                    detail={item.detail}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center w-full ">
            <div className="h-full w-full flex flex-col m-auto text-start">
              {experience.map((item: iExperience) => (
                <div className="grid" key={item.company_name}>
                  <Experience
                    name={item.company_name}
                    position={item.position}
                    start_time={item.start_time}
                    end_time={item.end_time}
                    detail={item.detail}
                    language={item.language_tag.map((tag) => tag.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
