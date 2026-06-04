import { useState } from "react";

import Logo from "../logo/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Coverage",
      link: "/coverage",
    },

    {
      name: "About Us",
      link: "/about-us",
    },

    {
      name: "Pricing",
      link: "/pricing",
    },

    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div>
      <nav className="w-full bg-white text-[#2d3139] px-4 sm:px-8 py-2 flex flex-col md:flex-row md:items-center md:justify-between   relative z-50 max-w-11/12 mx-auto rounded-full  border-2 border-[#0D2C54]">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <Logo></Logo>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
          ></button>
        </div>

        {/* Navigation Links & Actions */}
        <div
          className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center w-full md:w-auto gap-6 md:gap-8 mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-medium text-gray-600 w-full md:w-auto text-center">
            {/* {navLinks.map((link) => (
              <a
                key={link}
                href={navLinks.link}
                className="hover:text-black transition-colors py-2 md:py-0 w-full md:w-auto"
              >
                {link}
              </a>
            ))} */}
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="hover:text-black transition-colors py-2 md:py-0 w-full md:w-auto"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-4 md:pt-0 border-t border-gray-100 md:border-none">
          <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl   font-semibold text-[#0D2C54] border-1 border-[#0D2C54] hover:bg-gray-50 transition-colors">
            Sign In
          </button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FFB400] text-black font-semibold pl-5 pr-2 py-2 rounded-xl hover:bg-[#b4d64b] transition-colors group">
            Sign Up
            <div className="bg-[#22252a] text-[#FFB400] w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
