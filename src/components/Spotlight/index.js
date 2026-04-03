"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SocialIcons from "@/widgets/social";
import SplitText from "../SplitText";
import ColorBends from "../ColorBlend";
import avatar from "../../assets/images/hanan-avatar.jpg";

const Spotlight = () => {
  const containerRef = useRef(null);
  const bioRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const skewX = useTransform(scrollYProgress, [0, 1], [2, -2]);

  const innerImageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const innerImageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.3, 1, 1.3],
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    gsap.fromTo(
      bioRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power4.out", delay: 1.2 },
    );

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="min-h-[100vh] w-full bg-[#030303] relative flex items-start justify-center overflow-hidden antialiased py-32 px-6"
      style={{ perspective: "1200px" }}
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <ColorBends colors={["#0008e7", "#8a5cff", "#485DDC"]} transparent />
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) =>
              `radial-gradient(800px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 80%)`,
          ),
        }}
      />

      <div className="relative z-30 max-w-6xl w-full flex items-center justify-center gap-10 sticky top-24">
        <motion.div
          style={{
            rotateX,
            rotateY,
            skewX,
            z: 50,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-2 md:order-1 relative group w-[350px]"
        >
          <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-3 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-black">
              <motion.div
                style={{
                  y: innerImageY,
                  scale: innerImageScale,
                }}
                className="relative w-full h-full"
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dx5ugtyis/image/upload/v1775252467/kling_20260324_%E4%BD%9C%E5%93%81_Ultra_real_410_1_rhqibu.jpg"
                  }
                  alt="Hanan"
                  fill
                  className="object-cover contrast-110 brightness-90 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </div>

            <div className="mt-6 flex flex-col items-center pb-4">
              <h3 className="text-2xl font-black text-white tracking-tighter">
                HANAN
              </h3>
              <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent w-12 my-2 transition-all duration-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

              <p className="text-white/40 font-mono text-[10px] tracking-[0.3em] uppercase">
                Software Engineer
              </p>
            </div>
          </div>

          <div className="absolute -inset-4 bg-blue-600/20 blur-[100px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ dura: 0.8 }}
          className="order-1 md:order-2 w-1/2 flex flex-col justify-center"
        >
          <div className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-gray-500 mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_#3b82f6]"></span>
            Active
          </div>

          <div className="text-5xl md:text-5xl font-black leading-none tracking-tighter text-white mb-8">
            <SplitText text="Developing" className="text-white/60 p-2 pl-0" />
            <div className="flex flex-wrap items-center gap-x-2">
              <span>FUTURE</span>
              <span className="pr-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 italic">
                ...
              </span>
            </div>
          </div>

          <div
            ref={bioRef}
            className="text-zinc-500 text-lg md:text-xl max-w-lg leading-relaxed font-light"
          >
            <p>
              Architecting high-performance digital interfaces where
              <span className="text-white"> aesthetic precision</span> meets
              <span className="text-white"> technical excellence</span>.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8">
            <SocialIcons />

            <motion.a
              href="#booking"
              whileHover="hover"
              whileTap="tap"
              className="relative z-10 flex items-center space-x-4 text-sm md:text-md bg-white px-10 py-5 rounded-full text-black font-semibold overflow-hidden"
            >
              <motion.div
                variants={{
                  hover: { x: "100%" },
                }}
                initial={{ x: "-100%" }}
                transition={{ duration: 0.5, ease: "circIn" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-20"
              />
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Spotlight;
