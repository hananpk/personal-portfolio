"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Braces,
  Calendar,
  LaptopMinimal,
  Rocket,
  Sparkles,
} from "lucide-react";
import Counter from "../Counter";
import me from "../../assets/images/me.png";
import Image from "next/image";
import PixelatedImage from "../PixelatedImage";

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delays the start of each child animation
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, // Smooth custom ease out
  },
};

export default function Spotlight() {
  const [imageRevealed, setImageRevealed] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Dotted gradient backgrounds */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage:
            "radial-gradient(ellipse 55% 45% at 30% 25%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 45% at 30% 25%, black 0%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3d87ff8c 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage:
            "radial-gradient(ellipse 45% 35% at 22% 92%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 45% 35% at 22% 92%, black 0%, transparent 75%)",
        }}
      />

      {/* Portrait image - Desktop (always visible) & Mobile (revealed via canvas) */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* Desktop Layout */}
        <div className="hidden md:block absolute inset-y-0 right-0 h-full w-[56%]">
          <Image
            src={me}
            alt="Hanan portrait"
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Mobile Pixel Reveal Layout */}
        <AnimatePresence>
          {imageRevealed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }} // slightly dimmed so text stays legible on mobile
              exit={{ opacity: 0 }}
              className="block md:hidden absolute inset-0 h-full w-full"
            >
              <PixelatedImage src={me.src} isRevealed={imageRevealed} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent md:from-black md:via-transparent" />
      </div>

      {/* Main content wrapper turned into an animated container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex h-full min-h-screen max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-16"
      >
        {/* Avatars + clients */}
        {/* <motion.div variants={itemVariants}>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[
                "https://i.pravatar.cc/64?img=12",
                "https://i.pravatar.cc/64?img=32",
                "https://i.pravatar.cc/64?img=45",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Client"
                  className="h-10 w-10 rounded-full border-2 border-black object-cover"
                />
              ))}
            </div>
            <span className="font-bold text-xl md:text-2xl">100+</span>
          </div>
          <p className="-mt-3 mb-10 text-white/60 text-sm md:text-md font-thin">
            Total Satisfied Client
          </p>
        </motion.div> */}

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-extrabold leading-[0.95] text-5xl md:text-7xl lg:text-8xl"
        >
          <span className="block">It&apos;s Me</span>
          <span className="mt-2 block -skew-x-6 text-blue-500">HANAN</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-md text-lg text-white/70"
        >
          Software Engineer
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-3 md:w-[40%] gap-6 sm:gap-16"
        >
          {[
            {
              value: "200+",
              label: "Projects Completed",
              icon: <LaptopMinimal size={24} />,
            },
            {
              value: "4+",
              label: "Years of Experience",
              icon: <Braces size={24} />,
            },
            {
              value: "2",
              label: "SaaS Shipped",
              icon: <Rocket size={24} />,
            },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-bold sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs md:text-sm text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* CTA Actions Wrapper */}
      <div className="absolute bottom-10 right-6 z-10 flex flex-col sm:flex-row gap-3 sm:right-10">
        {/* Mobile Only: Meet Me Button */}
        {!imageRevealed && (
          <button
            onClick={() => setImageRevealed(true)}
            className="flex md:hidden items-center justify-center gap-2 rounded-full px-4 py-2 font-medium text-white transition hover:scale-[1.03] text-sm animate-gradient-x"
            style={{
              background:
                "linear-gradient(270deg, #3d87ff, #3a61ed, #3d87ff, #3d87ff)",
              backgroundSize: "400% 400%",
            }}
          >
            <Sparkles size={18} />
            Meet Me
          </button>
        )}
      </div>
    </section>
  );
}
