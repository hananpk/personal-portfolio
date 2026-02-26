"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import SocialIcons from "@/widgets/social";
import SplitText from "../SplitText";
import ColorBends from "../ColorBlend";
import { Assets } from "@/assets";
import avatar from "../../assets/images/hanan-avatar.jpg";


const Spotlight = () => {
  const containerRef = useRef(null);
  const bioRef = useRef(null);

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

    gsap.fromTo(bioRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power4.out", delay: 1.2 }
    );

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen w-full bg-[#030303] relative flex items-center justify-center overflow-hidden antialiased py-20 px-6">
      
      <div className="absolute inset-0 z-0 opacity-40">
        <ColorBends colors={["#0008e7", "#8a5cff", "#485DDC"]} transparent />
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 80%)`
          )
        }}
      />

      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.15] contrast-150 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-30 max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 flex flex-col gap-6">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-4 shadow-2xl flex flex-col"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-900">
            <img 
              src={avatar.src || avatar} 
              alt="Hanan" 
              className="object-cover w-full h-full transition-all duration-700"
            />
          </div>
          <div className="mt-6 flex items-center justify-between px-2 pb-2">
            <div>
              <h3 className="text-xl font-bold text-white">Hanan</h3>
              <p className="text-blue-500 font-mono text-xs tracking-widest uppercase">Software Engineer</p>
            </div>
            <button className="p-3 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <Send className="w-5 h-5 text-white -rotate-12" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col justify-between"
        >
          <div>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-white mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for new projects
              <ArrowRight className="w-3 h-3 ml-1" />
            </div>

            <div className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
              <SplitText text="Hey!" className="text-white/30" />
              <div className="flex flex-wrap items-center gap-x-4">
                <span>I'm</span>
                
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Hanan</span>
              </div>
              {/* <div className="text-2xl md:text-5xl font-light mt-2 text-white/90">
                Building <span className="italic font-serif text-blue-500">Exceptional</span> Digital Experiences
              </div> */}
            </div>

            <div ref={bioRef} className="mt-8 text-zinc-400 font-thin md:text-lg max-w-xl leading-relaxed opacity-0">
              <p>
                I bring a unique blend of creativity and technical expertise to build web applications 
                that not only function flawlessly but also provide exceptional user experiences.
              </p>
            </div>
          </div>

          {/* Socials & CTA */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               <SocialIcons />
            </div>
            
            <button className="group flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
              <span className="font-bold">Let's Connect</span>
              <div className="p-1 rounded-full bg-black/10 group-hover:bg-white/20">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Spotlight;