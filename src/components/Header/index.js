"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Assets } from "@/assets";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center pointer-events-auto">
        <div className="group relative cursor-pointer">
          <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
          <div className="relative transform transition-all duration-500 group-hover:scale-110 group-active:scale-95">
            <Image
              src={Assets.Logo}
              width={65}
              height={65}
              alt="Logo"
              className="brightness-125 contrast-125"
              priority
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </div>
        <a href="#booking">
          <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:border-green-500/50 transition-colors duration-500">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
              Available
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
