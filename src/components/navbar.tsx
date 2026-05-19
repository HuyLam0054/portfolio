"use client";

import { Navbar } from "@/data/layout/main-layout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const RootNavbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 inset-s-0 border-b border-default">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
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
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="hidden lg:block text-black hover:text-white bg-orange-300 hover:bg-orange-500 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-3 py-2 cursor-pointer"
          >
            <span>Contact Me</span>
          </button>
          <button
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className={`inline-flex lg:hidden cursor-pointer items-center ${openMenu ? "text-white" : "text-orange-300"}  p-3 w-10 h-10 hover:text-orange-300 ml-3 rounded-sm`}
          >
            <span className="sr-only">Open main menu</span>
            {!openMenu ? (
              <CiMenuFries className="h-20 w-20" />
            ) : (
              <IoMdClose className="h-20 w-20" />
            )}
          </button>
        </div>
        <div
          className={`${
            openMenu ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row absolute lg:static top-20 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent p-4 lg:p-0 z-50`}
        >
          <ul className="flex flex-col lg:flex-row gap-3 lg:gap-8">
            {Navbar.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="block py-2 px-3 text-white text-[13px] rounded hover:text-orange-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={"/"}
                className="block lg:hidden py-2 px-3 text-white text-[13px] rounded hover:text-orange-300"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default RootNavbar;
