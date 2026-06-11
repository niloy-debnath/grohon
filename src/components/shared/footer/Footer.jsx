// import React from "react";

import Logo from "../logo/Logo";

export default function Footer() {
  const navLinks = [
    "Services",
    "Coverage",
    "About Us",
    "Pricing",
    "Blog",
    "Contact",
  ];

  return (
    <footer className="w-full bg-[#0D2C54] max-w-11/12 text-white px-4 sm:px-8 py-12 md:py-16 flex flex-col items-center rounded-4xl mx-auto">
      {/* Footer Logo */}
      <div className="flex items-center gap-2 mb-4 select-none">
        <Logo></Logo>
      </div>

      {/* Tagline */}
      <p className="text-gray-400 text-center max-w-2xl text-sm sm:text-[15px] leading-relaxed mb-8 md:mb-10 px-2 sm:px-4 font-light">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* Divider Line 1 */}
      <div className="w-full border-t border-dashed border-gray-800/60 mb-6 md:mb-8" />

      {/* Footer Navigation Links */}
      <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 gap-y-3 text-gray-400 font-medium text-sm sm:text-[15px] mb-6 md:mb-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Divider Line 2 */}
      <div className="w-full border-t border-dashed border-gray-800/60 mb-8 md:mb-10" />

      {/* Social Media Icons */}
      <div className="flex items-center gap-4">
        {/* LinkedIn */}
        <a
          href="#linkedin"
          className="w-10 h-10 rounded-full bg-[#1275b1] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
        >
          <span className="font-bold text-lg lowercase mb-1">in</span>
        </a>

        {/* X */}
        <a
          href="#x"
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-100 transition-colors font-black text-xl"
        >
          𝕏
        </a>

        {/* Facebook */}
        <a
          href="#facebook"
          className="w-10 h-10 rounded-full bg-[#1677f2] flex items-center justify-center text-white text-xl font-bold hover:opacity-90 transition-opacity"
        >
          f
        </a>

        {/* YouTube */}
        <a
          href="#youtube"
          className="w-10 h-10 rounded-full bg-[#ff0000] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
