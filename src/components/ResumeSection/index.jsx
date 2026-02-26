"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiArrowRight } from "react-icons/fi";

const ResumeSection = () => {
  return (
    <section className="py-24 px-8 bg-black flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative group max-w-4xl w-full"
      >
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition duration-1000" />

        <div className="relative overflow-hidden bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Side: Info */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-3 text-blue-400">
              <FiFileText className="text-xl" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold">Resume</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Looking for the <span className="text-gray-400 italic">Full Picture?</span>
            </h2>
            <p className="text-gray-500 max-w-sm text-sm md:text-base leading-relaxed font-thin">
              Detailed breakdown of my technical stack, professional experience, and academic background.
            </p>
          </div>

          <div className="relative">
            <motion.a
              href="/assets/resume/Hanan_Software_Engineer_Resume.pdf"
              download="Hanan_Resume.pdf"
              whileHover="hover"
              whileTap="tap"
              className="relative z-10 flex items-center space-x-4 text-sm md:text-lg bg-white px-10 py-5 rounded-full text-black font-semibold overflow-hidden"
            >

              <motion.div 
                variants={{
                  hover: { x: "100%" }
                }}
                initial={{ x: "-100%" }}
                transition={{ duration: 0.5, ease: "circIn" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-20"
              />
              
              <span className="relative flex items-center gap-3">
                Download PDF <FiDownload className="animate-bounce" />
              </span>
            </motion.a>

            <motion.a 
              href="https://viiew.me/hanan" 
              target="_blank"
              className="mt-6 flex items-center justify-center space-x-2 text-zinc-500 hover:text-white transition-colors text-xs uppercase tracking-widest cursor-pointer group/link"
            >
              <span>View Interactive Version</span>
              <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <div className="absolute right-[-10%] top-[-20%] opacity-5 pointer-events-none select-none">
            <span className="text-[15rem] font-black text-white">CV</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;