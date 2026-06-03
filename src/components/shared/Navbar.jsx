import { useState } from "react";

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
      <nav className="w-full bg-white text-[#2d3139] px-4 sm:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-100 relative z-50">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 select-none">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full fill-[#c5e75c]"
              >
                <path
                  d="M20,35 L50,15 L80,35 L80,75 L50,95 L20,75 Z"
                  opacity="0.6"
                />
                <path d="M20,35 L50,15 L50,55 L20,75 Z" />
                <path d="M50,55 L80,35 L80,75 L50,95 Z" opacity="0.8" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#1a1d20]">
              Zap<span>Shift</span>
            </span>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
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
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-4 md:pt-0 border-t border-gray-100 md:border-none">
            <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Sign In
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#c5e75c] text-black font-semibold pl-5 pr-2 py-2 rounded-xl hover:bg-[#b4d64b] transition-colors group">
              Sign Up
              <div className="bg-[#22252a] text-[#c5e75c] w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
