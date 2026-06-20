"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data/projectsData";
import Link from "next/link";

// src/data/projects.js

const WorkSection = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section
      id="works"
      className="relative min-h-screen bg-black text-white py-24 px-8 md:px-24 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4 font-thin"
            >
              Selected Works
            </motion.h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Crafting <span className="text-blue-500">Digital</span> <br />{" "}
              Experiences.
            </h3>
          </div>

          <div className="flex flex-col">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveProject(project)}
                className="group relative border-b border-white/5 py-10 cursor-pointer"
              >
                <Link
                  href={`/work/${project.slug}`}
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <div className="flex justify-between items-center">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
                          0{project.id}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                          {project.category}
                        </span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-semibold group-hover:translate-x-3 transition-transform duration-500">
                        {project.title}
                      </h4>
                    </div>
                    <FiArrowUpRight className="text-3xl text-zinc-700 group-hover:text-blue-500 group-hover:rotate-45 transition-all duration-500" />
                  </div>
                </Link>

                <motion.div
                  className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/30 -mx-4 rounded-xl transition-colors duration-500"
                  layoutId="hoverBg"
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ x: 10 }}
            className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-bold"
          >
            Explore all design work
            <div className="w-12 h-[1px] bg-zinc-800 group-hover:w-20 group-hover:bg-blue-500 transition-all duration-500" />
          </motion.button>
        </div>

        <div className="lg:col-span-7 sticky top-24 h-fit hidden lg:block">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/3] w-full perspective-1000"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProject.image}
                  src={activeProject.image}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.7, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute top-8 left-8 flex gap-2">
                {activeProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black via-black/40 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-blue-500" />
                  <span className="text-xs uppercase tracking-[0.3em] text-white font-medium">
                    Interaction Design Preview
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Glass Element for extra "UI/UX" feel */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl z-20 hidden xl:flex items-center justify-center p-6 text-center"
            >
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 leading-relaxed">
                Focused on <span className="text-white">user-centric</span> flow
                & accessibility.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
