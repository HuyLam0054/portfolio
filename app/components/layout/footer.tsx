import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface IRootFooterProps {}

export function RootFooter(props: IRootFooterProps) {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              height={50}
              width={50}
              src="/logo.png"
              className="h-8 w-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-yellow-500">
              Portfolio
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#home" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" className="hover:underline me-4 md:me-6">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:underline me-4 md:me-6">
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            Portfolio
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}