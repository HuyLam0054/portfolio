"use client";

import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";

const RootFooter = () => {
  return (
    <footer className="bg-gray-900 shadow-xs my-4">
      <hr className="my-3 sm:mx-auto lg:my-8" />
      <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="col-span-2 lg:col-span-1">
            <span className="flex flex-col items-start">
              <p className="text-[15px] text-orange-300">Let&apos;s Work</p>
              <p className="text-[20px] text-white uppercase font-bold my-1">
                TOGETHER
              </p>
              <p className="text-[13px] text-white">
                Always open to discussing IT solutions, technical opportunities,
                and collaborating on projects that create real value through
                technology.
              </p>
            </span>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col">
              <span className="flex flex-row text-lg text-white">
                <CiMail className="text-orange-300 w-6 h-6 mr-1" />
                Email
              </span>
              <span className="text-[13px] text-gray-400 mt-1">
                huy.lam.0054@gmail.com
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col">
              <span className="flex flex-row text-lg text-white">
                <CiLocationOn className="text-orange-300 w-6 h-6 mr-1" />
                Location
              </span>
              <span className="text-[13px] text-gray-400 mt-1">
                Ho Chi Minh, Viet Nam
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col">
              <span className="flex flex-row text-lg text-white">
                <SlPhone className="text-orange-300 w-6 h-6 mr-1" />
                Phone
              </span>
              <span className="text-[13px] text-gray-400 mt-1 ml-6">
                (+84) 345 678 910
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <button
              type="button"
              className="block text-black hover:text-white bg-orange-300 hover:bg-orange-400 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-5 py-4 cursor-pointer"
            >
              <span>Send Messenger to Me</span>
            </button>
          </div>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <div className="flex flex-col sm:flex-row justify-between text-center">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logo_2.png"
              height={2000}
              width={2000}
              className="h-12 w-12 rounded-full"
              alt="Logo"
            />
            <span className="self-center text-orange-300 text-xl ms-2 text-heading font-semibold whitespace-nowrap">
              <p className="text-[15px]">LAM QUANG HUY</p>
              <p className="text-[10px]">IT helpdesk / IT servicedesk</p>
            </span>
          </Link>
          <span className="block text-sm text-orange-300 mt-5">
            © 2026{" "}
            <Link href="/" className="hover:underline">
              Lam Quang Huy
            </Link>
            . All Rights Reserved.
          </span>
          <span className="block text-sm text-orange-300 mt-5">
            Build with Nextjs & TailwindCSS
          </span>
        </div>
      </div>
    </footer>
  );
};

export default RootFooter;
