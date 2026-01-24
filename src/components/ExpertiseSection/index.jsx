"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayers, FiCpu, FiLayout } from "react-icons/fi";

const ExpertiseSection = () => {
  const cards = [
    {
      title: "Software Engineering",
      desc: "Building immersive UIs with React, Next.js, and high-performance GSAP animations.",
      icon: <FiLayout className="text-blue-500" />,
      size: "md:col-span-2",
      gradient: "from-blue-500/10 to-transparent",
    },
    {
      title: "Scalable Systems",
      desc: "Architecting robust backends and optimized APIs.",
      icon: <FiCpu className="text-purple-500" />,
      size: "md:col-span-1",
      gradient: "from-purple-500/10 to-transparent",
    },
    {
      title: "Clean Code",
      desc: "Writing maintainable, type-safe code using TypeScript and industry best practices.",
      icon: <FiCode className="text-emerald-500" />,
      size: "md:col-span-1",
      gradient: "from-emerald-500/10 to-transparent",
    },
    {
      title: "UI/UX Design",
      desc: "Crafting user-centric interfaces that are functional, accessible, and beautiful.",
      icon: <FiLayers className="text-orange-500" />,
      size: "md:col-span-2",
      gradient: "from-orange-500/10 to-transparent",
    },
  ];

  return (
    <section className="py-24 px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold mb-2">Expertise</h2>
          <p className="text-3xl font-bold text-white">Technical Specialized Skills</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards?.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden group p-8 rounded-3xl border border-white/10 bg-zinc-900/20 backdrop-blur-3xl ${card.size}`}
            >
              {/* Inner Radial Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="text-3xl mb-4">{card.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-thin">{card.desc}</p>
                </div>
              </div>

              {/* Decorative Corner Light */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 blur-3xl rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;