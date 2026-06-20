"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Assets } from "@/assets";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "CV", href: "#cv" },
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#booking" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center pointer-events-auto relative">
          {/* Logo */}
          <div className="group relative cursor-pointer">
            <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
            <div className="relative transform transition-all duration-500 group-hover:scale-110 group-active:scale-95">
              <Link href="/">
                <Image
                  src={Assets.Logo}
                  width={65}
                  height={65}
                  alt="Logo"
                  className="brightness-125 contrast-125 w-12 md:w-16"
                  priority
                />
              </Link>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          </div>

          {/* Available pill - centered */}
          <a
            href="#booking"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:border-green-500/50 transition-colors duration-500">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
                Available
              </span>
            </div>
          </a>

          {/* Menu toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="relative z-[60] group flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-500 hover:border-blue-400/50"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
              className="block h-[1.5px] w-5 rounded-full bg-white"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
              className="block h-[1.5px] w-5 rounded-full bg-white"
            />
          </button>
        </div>
      </header>

      {/* Liquid reveal menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(2% at calc(100% - 50px) 50px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 50px) 50px)" }}
            exit={{ clipPath: "circle(2% at calc(100% - 50px) 50px)" }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-40 bg-zinc-950/80 backdrop-blur-md"
          >
            {/* Content layer - fades in once the liquid settles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <nav className="flex flex-col items-start gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative block overflow-hidden"
                      style={{ perspective: "600px" }}
                    >
                      {/* Default text - flips up and away on hover */}
                      <span
                        className="block text-3xl md:text-5xl font-light tracking-tight text-zinc-300 opacity-100 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:[transform:rotateX(-90deg)] group-hover:opacity-0"
                        style={{ transformOrigin: "top" }}
                      >
                        {link.label}
                      </span>
                      {/* Hover text - flips in from below */}
                      <span
                        className="absolute inset-0 block text-3xl md:text-5xl font-light tracking-tight text-blue-400 opacity-0 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] [transform:rotateX(90deg)] group-hover:[transform:rotateX(0deg)] group-hover:opacity-100"
                        style={{ transformOrigin: "bottom" }}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
