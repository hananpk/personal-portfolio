"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
// ... your other imports
import SocialIcons from "@/widgets/social";
import Header from "../Header";
import SplitText from "../SplitText";
import ColorBends from "../ColorBlend";
import { motion } from "framer-motion";

const Spotlight = () => {
  const socialRef = useRef(null);
  const tagRef = useRef(null);
  const bioRef = useRef(null); // New ref for bio
  const bioLines = [
    "I bring a unique blend of creativity and technical expertise to build web applications that not only function flawlessly but also provide exceptional user experiences.",
    "My expertise includes crafting responsive, high-performance web applications and designing top-notch, user-centric interfaces that are beautiful.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.5, // Start after your headings
        staggerChildren: 0.15,
      },
    },
  };

  // Item Animation (Animation 2: Rise + Focus Blur)
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        // The "Twice" part: Chaining a color shift right after reveal
      },
    },
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. First, the "A Software Engineer" tag slides up
    tl.fromTo(
      tagRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power4.out", delay: 1 }, // Delay to wait for SplitText
    );

    // 2. ATTRACTIVE BIO ANIMATION: Reveal with subtle blur and stagger
    // We target the words/characters or just the block for a smooth drift
    tl.fromTo(
      bioRef.current,
      {
        y: 30,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "expo.out",
      },
      "-=0.4", // Starts slightly before the previous animation ends
    );

    // 3. Social Icons pop in last
    tl.fromTo(
      ".social-icon-wrapper", // Assuming SocialIcons has this class or use a ref
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.5",
    );
  }, []);

  return (
    <>
      <div className="h-[100vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <Header />
        <div className="mx-auto p-4 absolute inset-0 flex flex-col items-center justify-center h-full z-10 bg-black/80 w-full">
          <div className="w-full md:w-[600px] mx-auto">
            {/* ... Hey! and I'm Hanan SplitText components ... */}

            <h1 className="py-2 text-left block ">
              <SplitText
                text="Hey!"
                className="text-4xl md:text-6xl font-bold text-left text-white/60"
              />
            </h1>
            <SplitText
              text="I'm Hanan"
              className="text-4xl md:text-6xl font-semibold text-left text-white"
            />

            <p
              ref={tagRef}
              className="text-left tracking-widest text-neutral-100 max-w-lg my-2 text-sm md:text-md relative z-10 opacity-0"
            >
              A Software Engineer
            </p>

            {/* THE BIO TAG WITH NEW REF AND ANIMATION CLASSES */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-gray-100/50 text-sm md:text-base !font-thin my-4 text-justify leading-relaxed"
            >
              {bioLines.map((line, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="block overflow-hidden pb-1"
                >
                  {/* The "Second Animation": A subtle text-color shimmer */}
                  <motion.span
                    animate={
                      {
                        // color: [
                        //   "rgba(244, 244, 245, 0.4)",
                        //   "rgba(255, 255, 255, 1)",
                        //   "rgba(244, 244, 245, 0.4)",
                        // ],
                      }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2 + 2,
                    }}
                  >
                    {line}
                  </motion.span>
                </motion.span>
              ))}
            </motion.div>

            <SocialIcons />
          </div>
        </div>

        {/* ColorBends Component */}
        <ColorBends colors={["#0008e7", "#8a5cff", "#485DDC"]} transparent />
      </div>
    </>
  );
};
export default Spotlight;
