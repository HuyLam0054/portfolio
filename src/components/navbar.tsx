"use client";

import { Navbar } from "@/data/layout/main-layout";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const RootNavbar = () => {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 inset-s-0 border-b border-default">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="https://flowbite.com/"
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
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-black hover:text-white bg-orange-300 hover:bg-orange-500 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-3 py-2 cursor-pointer"
          >
            <span>Contact Me</span>
            <FaArrowRight className="ms-1.5 mt-0.5" />
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden md:flex w-full md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
            {Navbar.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="block py-2 px-3 text-white text-[13px] rounded hover:text-orange-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}{" "}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default RootNavbar;
