import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-md">
      <nav className="px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Click to go back home"
          >
            <img
              src="/logo.png"
              width="128"
              height="26"
              className="h-8 w-auto"
              alt="Logo"
            />
          </Link>

          <ul className="flex flex-row space-x-8 text-lg font-semibold text-white">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/search", label: "Search" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative group transition-colors duration-200 hover:text-primary"
                >
                  <span className="pb-1 bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
