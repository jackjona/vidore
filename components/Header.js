import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="px-4 lg:px-6 py-6 bg-black">
        <div className="flex flex-wrap justify-center sm:justify-between items-center mx-auto max-w-screen-xl">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Click to go back home"
          >
            <img
              src="/logo.png"
              width="128px"
              height="26px"
              className="ml-3"
              alt=""
            />
          </Link>
          <div className="flex justify-center sm:justify-between items-center order-1">
            <ul className="flex flex-row lg:space-x-8 mt-0 sm:text-xl text-white font-bold">
              <li>
                <Link
                  href="/"
                  className="block group py-2 pr-4 pl-3 lg:hover:text-primary-700 lg:p-0 hover:bg-gray-700 hover:text-primary lg:hover:bg-transparent transition-all duration-100 ease-in-out"
                >
                  <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block group py-2 pr-4 pl-3 lg:hover:text-primary-700 lg:p-0 hover:bg-gray-700 hover:text-primary lg:hover:bg-transparent transition-all duration-100 ease-in-out"
                >
                  <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="block group py-2 pr-4 pl-3 lg:hover:text-primary-700 lg:p-0 hover:bg-gray-700 hover:text-primary lg:hover:bg-transparent transition-all duration-100 ease-in-out"
                >
                  <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                    Search
                  </span>
                </Link>
              </li>
              {/*               <li>
                <Link
                  href="/contact"
                  className="block group py-2 pr-4 pl-3 lg:hover:text-primary-700 lg:p-0 hover:bg-gray-700 hover:text-primary lg:hover:bg-transparent transition-all duration-100 ease-in-out"
                ><span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                  Contact
                
                </span>  </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
