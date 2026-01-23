"use client";
import "tailwindcss/tailwind.css";
import Header from "../Header";
import Style from "./spotlight.module.scss";
import { BackgroundBeams } from "../BackgroundBeams";
import { FlipWords, TextGenerateEffect } from "../FlipWords";
import SocialIcons from "@/widgets/social";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "../SplitText";
import RotatingText from "../RotatingText";
import ColorBends from "../ColorBlend";
import WorkSection from "../WorkSection";

const Spotlight = () => {
  const socialRef = useRef(null);
  const tagRef = useRef(null);
  var tl = gsap.timeline();
  useEffect(() => {
    tl.to(socialRef.current, {
      y: 0,
      duration: 0.5,
      opacity: 1,
      delay: 0,
      scale: 1,
    });
    tl.to(tagRef.current, {
      y: 0,
      duration: 0.5,
      opacity: 1,
      delay: 0.5,
      scale: 1,
    });
  }, []);
  return (
    <>
      <div className="h-[100vh] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <Header />
        <div className="mx-auto p-4 absolute inset-0 flex flex-col items-center justify-center h-full z-10 bg-black/80 w-full">
          <div className="w-full md:w-[600px] mx-auto">
            <h1 className="py-2 text-left block ">
              <SplitText
                text="Hey!"
                className="text-4xl md:text-6xl font-bold text-center text-white/60"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                showCallback
              />
            </h1>
            <SplitText
              text="I'm Hanan"
              className="text-4xl md:text-6xl font-semibold text-center text-white"
              delay={100}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              showCallback
            />
            <p
              ref={tagRef}
              className={`text-left tracking-widest text-neutral-100 max-w-lg my-2 text-sm md:text-md relative z-10`}
            >
              A Software Engineer
            </p>
            <p className="text-gray-100/40 text-sm md:text-base !font-thin w-full md:w-[600px] my-4 text-justify">
              I bring a unique blend of creativity and technical expertise to
              build web applications that not only function flawlessly but also
              provide exceptional user experiences. My expertise includes
              crafting responsive, high-performance web applications and
              designing top-notch, user-centric interfaces that are both
              functional and beautiful.
            </p>
            <SocialIcons />
          </div>
        </div>
        <ColorBends
          colors={["#0008e7", "#8a5cff", "#485DDC"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
          color=""
        />
      </div>
    </>
  );
};

export default Spotlight;
