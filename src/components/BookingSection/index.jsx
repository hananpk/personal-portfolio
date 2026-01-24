"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InlineWidget } from "react-calendly";

const BookingSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="booking" className="py-24 px-8 flex flex-col items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative group max-w-2xl w-full"
      >
        {/* Animated Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

        {/* Main Card Content (Remains Unchanged) */}
        <div className="relative px-8 py-12 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Let’s build something{" "}
            <span className="text-blue-500">extraordinary.</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-md leading-relaxed font-thin">
            Have a project in mind or just want to talk tech? Grab a spot on my
            calendar and let's make it happen.
          </p>

          {/* NEXT LEVEL TRIGGER */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="calendly-button-wrapper"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-4 bg-white text-2xlfont-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg "
            >
              Schedule a 15-min Call
            </button>
          </motion.div>

          <div className="mt-6 flex items-center space-x-2 text-xs text-zinc-500 uppercase tracking-widest">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Slots available this week</span>
          </div>
        </div>
      </motion.div>

      {/* --- NEXT LEVEL MODAL --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/40 backdrop-blur-3xl"
          >
            {/* Morphing Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-[110] group p-4"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <span className="absolute w-full h-[1px] bg-white rotate-45 group-hover:bg-blue-500 group-hover:rotate-[225deg] transition-all duration-500" />
                <span className="absolute w-full h-[1px] bg-white -rotate-45 group-hover:bg-blue-500 group-hover:rotate-[-225deg] transition-all duration-500" />
              </div>
            </motion.button>

            {/* Immersive Calendar Container */}
            <motion.div
              initial={{ y: "100%", opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ y: "100%", opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-5xl h-full max-h-[85vh] bg-zinc-950 border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
              <InlineWidget
                url="https://calendly.com/hananpk"
                styles={{ height: "100%", width: "100%" }}
                pageSettings={{
                  backgroundColor: "09090b", // Custom hex to match your bg
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "3b82f6",
                  textColor: "ffffff",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BookingSection;