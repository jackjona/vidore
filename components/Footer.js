import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <nav className="relative z-10 mt-24 bg-secondary px-4 lg:px-6 py-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              width="128px"
              height="26px"
              className="ml-3"
              alt=""
            />
          </Link>
          <div className="flex justify-between items-center order-1">
            <ul className="flex flex-row lg:space-x-8 mt-0 font-medium">
              <li>
                <Link
                  href="/"
                  className="block py-2 pr-4 pl-3 lg:hover:text-primary-700 lg:p-0 text-white hover:bg-gray-700 hover:text-primary lg:hover:bg-transparent border-gray-700 transition-all duration-100 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pr-4 pl-3 lg:hover:text-primary-700 lg:p-0 text-white hover:bg-gray-700 hover:text-primary lg:hover:bg-transparent border-gray-700 transition-all duration-100 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="block py-2 pr-4 pl-3 lg:hover:text-primary-700 lg:p-0 text-white hover:bg-gray-700 hover:text-primary lg:hover:bg-transparent border-gray-700 transition-all duration-100 ease-in-out"
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
