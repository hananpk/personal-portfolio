import { Assets } from "@/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-16 px-8 flex flex-col items-center">
      {/* Centered Logo/Initials */}
      <div className="mb-6 opacity-80">
        <Image src={Assets.Logo} width={50} alt="Logo" />
      </div>

      {/* Primary Navigation */}
      <nav className="flex space-x-10 mb-8">
        <a
          href="#work"
          className="text-[10px] uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors duration-300"
        >
          Work
        </a>
        <a
          href="mailto:hananhpk@gmail.com"
          className="text-[10px] uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors duration-300"
        >
          Contact
        </a>
        <a
          href="https://view.me/hanan"
          className="text-[10px] uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors duration-300"
        >
          Resume
        </a>
      </nav>

      {/* Minimal Copyright */}
      <div className="text-[9px] uppercase tracking-[0.4em] text-zinc-700">
        Hanan © {currentYear}
      </div>

      {/* Thin Bottom Accent */}
      <div className="mt-8 w-12 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </footer>
  );
};

export default Footer;
