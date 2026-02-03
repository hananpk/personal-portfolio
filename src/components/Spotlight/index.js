"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SocialIcons from "@/widgets/social";
import SplitText from "../SplitText";
import ColorBends from "../ColorBlend";

const Spotlight = () => {
  const containerRef = useRef(null);
  const tagRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    const tl = gsap.timeline();
    tl.fromTo(tagRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power4.out", delay: 1 }
    );

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full bg-[#030303] relative flex flex-col items-center justify-center overflow-hidden antialiased">

      {/* BACKGROUND LAYER 1: The Color Bends */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ColorBends colors={["#0008e7", "#8a5cff", "#485DDC"]} transparent />
      </div>

      {/* BACKGROUND LAYER 2: Mouse-following Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 80%)`
          )
        }}
      />

      {/* BACKGROUND LAYER 3: Film Grain Texture (The "Premium" Secret) */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.15] contrast-150 brightness-100 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* CONTENT: Keeping your default structure */}
      <div className="relative z-30 w-full md:w-[600px] px-6">
        <h1 className="py-2 text-left block">
          <SplitText
            text="Hey!"
            className="text-4xl md:text-6xl font-semibold text-white/40 tracking-tight"
          />
        </h1>
        <SplitText
          text="I'm Hanan"
          className="text-4xl md:text-6xl font-thin text-left text-white tracking-tight"
        />

        <p
          ref={tagRef}
          className="text-left tracking-[0.3em] text-blue-500 uppercase font-mono my-4 text-xs md:text-sm opacity-0"
        >
          | Software Engineer
        </p>

        <div className="text-zinc-400 text-sm md:text-base font-light my-6 text-justify leading-relaxed border-l border-white/10 pl-6">
          <p className="mb-4">
            I bring a unique blend of creativity and technical expertise to build web applications that not only function flawlessly but also provide exceptional user experiences.
          </p>
          <p>
            My expertise includes crafting responsive, high-performance web applications and designing top-notch, user-centric interfaces.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="social-icon-wrapper"
        >
          <SocialIcons />
        </motion.div>
      </div>
    </div>
  );
};

export default Spotlight;