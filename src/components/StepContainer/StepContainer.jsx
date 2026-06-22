"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import StepCard from "./StepCard/StepCard";
import Style from "./StepContainer.module.scss";
import { techStackData } from "@/data/techStackData";

const StepContainer = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="skills" className="relative bg-black w-full" ref={container}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 px-4 md:px-12 lg:px-16">
        <div className="relative md:sticky top-0 h-auto md:h-screen flex flex-col justify-start md:justify-center py-12 md:py-20 w-full lg:w-1/3 pl-4 md:pl-10 lg:pl-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4 font-thin">
              Technical Layers
            </h2>
            <p className="text-3xl md:text-4xl text-white font-bold tracking-tight leading-tight">
              How I <span className="text-blue-500">Build.</span>
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE: SCROLLING CARDS */}
        <div className={`w-full lg:w-2/3 ${Style.StepContainer}`}>
          {techStackData.map(({ id, name, tools, description, color }, i) => {
            const targetScale = 1 - (techStackData.length - i) * 0.05;
            return (
              <StepCard
                i={i}
                key={id || i}
                name={name}
                tools={tools}
                color={color}
                description={description}
                progress={scrollYProgress}
                range={[i * (1 / techStackData.length), 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepContainer;
