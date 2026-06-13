import { useState, useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

function Digit({ target, delay, duration }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (!inView) return;

    let controls;

    const timer = setTimeout(() => {
      controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setValue(latest);
        },
      });
    }, delay);

    return () => {
      clearTimeout(timer);
      controls?.stop();
    };
  }, [inView, target, duration, delay]);

  const current = Math.floor(value);
  const progress = value - current;

  return (
    <span
      ref={ref}
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        height: "1.6em", // Increased height
        width: "0.8em",
        lineHeight: "1.6em",
        verticalAlign: "middle",
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `translateY(${progress * -100}%)`,
        }}
      >
        {current}
      </span>

      {current < 9 && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `translateY(${100 - progress * 100}%)`,
          }}
        >
          {current + 1}
        </span>
      )}
    </span>
  );
}

export default function Counter({
  value = "200",
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}) {
  let digitIndex = 0;

  return (
    <span
      className={`inline-flex items-center tabular-nums ${className}`}
      style={{
        lineHeight: 1,
      }}
    >
      {prefix}

      {value.split("").map((char, index) => {
        if (!/\d/.test(char)) {
          return <span key={index}>{char}</span>;
        }

        const delay = digitIndex * 100;
        digitIndex++;

        return (
          <Digit
            key={index}
            target={parseInt(char)}
            delay={delay}
            duration={duration}
          />
        );
      })}

      {suffix}
    </span>
  );
}
