"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";

const checkpoints = [
  {
    date: "Aug 2022",
    role: "Frontend Engineer",
    company: "Tegain Pvt Ltd",
    location: "Kochi, India",
  },
  {
    date: "Aug 2023",
    role: "Frontend Engineer",
    company: "Webandcrafts",
    location: "Thrissur, India",
  },
  {
    date: "Sep 2024",
    role: "Product Engineer",
    company: "Premagic",
    location: "Bangalore, India",
  },
  {
    date: "May 2025",
    role: "Founder & CEO",
    company: "iinve",
    location: "Kozhikode, India",
  },
  {
    date: "Apr 2026",
    role: "Frontend Engineer",
    company: "Suadeo",
    location: "Dubai, UAE",
    current: true,
  },
];

function Dot({ cp, isInView, delay }) {
  return (
    <div className="relative">
      {cp.current && (
        <motion.div
          className="absolute inset-0 rounded-full bg-cyan-400"
          initial={{ opacity: 0, scale: 1 }}
          animate={isInView ? { opacity: [0.5, 0], scale: [1, 2.6] } : {}}
          transition={{
            duration: 1.6,
            delay: delay + 0.4,
            repeat: Infinity,
            repeatDelay: 0.4,
            ease: "easeOut",
          }}
        />
      )}
      <motion.div
        className="relative rounded-full border-[3px] bg-black"
        style={{
          height: cp.current ? 18 : 14,
          width: cp.current ? 18 : 14,
        }}
        initial={{ borderColor: "rgba(255,255,255,0.15)" }}
        animate={
          isInView
            ? {
                borderColor: "#3d87ff",
                backgroundColor: cp.current ? "#3d87ff" : "#000000",
              }
            : {}
        }
        transition={{ duration: 0.4, delay }}
      />
    </div>
  );
}

function CheckpointText({ cp, isInView, delay, align = "center" }) {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      className={`flex flex-col ${alignClass} gap-0.5`}
      initial={{ opacity: 0, y: align === "center" ? -4 : 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: delay + 0.1 }}
    >
      <span
        className={`whitespace-nowrap text-[12px] ${
          cp.current ? "text-blue-500 font-medium" : "text-white/80"
        }`}
      >
        {cp.role}
      </span>
      <span className="whitespace-nowrap text-[11px] text-white/40">
        {" "}
        {cp.company}
      </span>
      <span className="whitespace-nowrap text-[11px] text-white/40 font-thin">
        {cp.location}
      </span>
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const el = scrollRef.current;
    if (!el) return;

    const id = requestAnimationFrame(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;

      animate(0, maxScroll, {
        duration: 2.2,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => {
          el.scrollLeft = v;
        },
        onComplete: () => {
          el.scrollLeft = el.scrollWidth - el.clientWidth;
        },
      });
    });

    return () => cancelAnimationFrame(id);
  }, [isInView]);

  return (
    <div className="bg-black md:py-20">
      <div ref={ref} className="w-full max-w-5xl mx-auto py-14">
        {/* Mobile: animated horizontal scroll timeline */}
        <div className="flex md:hidden">
          <style>{`.timeline-scroll::-webkit-scrollbar{display:none}`}</style>
          <div
            ref={scrollRef}
            className="timeline-scroll w-full overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="relative flex items-start gap-x-14 pl-6 pr-10 w-max pt-10">
              {checkpoints.map((cp, i) => {
                const delay = (i / (checkpoints.length - 1)) * 1.8;
                const isLast = i === checkpoints.length - 1;
                return (
                  <div
                    key={cp.date}
                    className="relative flex flex-col items-center gap-3 w-32 shrink-0"
                  >
                    {!isLast && (
                      <div
                        className="absolute top-[9px] left-1/2 h-[2px] rounded-full overflow-hidden"
                        style={{
                          width: "184px",
                          background: "#3d87ff49",
                        }}
                      >
                        <motion.div
                          className="absolute left-0 top-0 h-full rounded-full"
                          style={{ background: "#3d87ff" }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "100%" } : {}}
                          transition={{
                            duration: 0.9,
                            delay,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        />
                      </div>
                    )}
                    <div className="h-[18px] flex items-center justify-center">
                      <Dot cp={cp} isInView={isInView} delay={delay} />
                    </div>
                    <span className="text-[11px] text-white/40">{cp.date}</span>
                    <CheckpointText
                      cp={cp}
                      isInView={isInView}
                      delay={delay}
                      align="center"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative hidden md:block">
          <div
            className="relative h-[3px] w-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #3d87ff49, #3d87ff58)",
            }}
          >
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #3d87ff3d, #3d87ff8c, #3d87ff)",
              }}
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            />

            {checkpoints.map((cp, i) => {
              const left = (i / (checkpoints.length - 1)) * 100;
              const delay = (i / (checkpoints.length - 1)) * 1.8;

              return (
                <div
                  key={cp.date}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${left}%` }}
                >
                  <Dot cp={cp} isInView={isInView} delay={delay} />

                  <motion.span
                    className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] text-white/40"
                    initial={{ opacity: 0, y: 4 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: delay + 0.1 }}
                  >
                    {cp.date}
                  </motion.span>

                  <div className="absolute top-6 left-1/2 -translate-x-1/2">
                    <CheckpointText
                      cp={cp}
                      isInView={isInView}
                      delay={delay}
                      align="left"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        {" "}
        <Link
          href="/timeline"
          className="border border-blue-700 hover:bg-blue-700 text-white text-sm py-4 px-6 rounded-full"
        >
          Read my full story
        </Link>
      </div>
    </div>
  );
}
