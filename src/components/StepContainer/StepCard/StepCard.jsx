import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Style from "./StepCard.module.scss";

const StepCard = (props) => {
  const {
    id,
    i,
    name,
    tools,
    description,
    color,
    progress,
    range,
    targetScale,
  } = props;
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  function getClassName() {
    switch (true) {
      case [1, 3, 5].includes(id):
        return "top_to_bottom";
      case [2, 4].includes(id):
        return "bottom_to_top";
      default:
        return "";
    }
  }
  const className = getClassName();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div ref={container} className={`${Style.card_container} card`}>
      <motion.div
        className={`${Style.card} ${Style[className]} border border-white/5`}
        style={{ scale, opacity, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className="">
          <div className="rounded-[2.4rem]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-4 max-w-md">
                <div className={`w-12 h-1 rounded-full ${color}`} />
                <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-tighter">
                  {name}
                </h3>
                <p className="text-zinc-500 leading-relaxed font-thin">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-300 group-hover:border-white/20 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StepCard;
