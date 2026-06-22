"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InlineWidget } from "react-calendly";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
  FiClock,
} from "react-icons/fi";

const BookingSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Simple local time for Dubai (GMT+4)
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Dubai",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  );

  return (
    <section
      id="booking"
      className="py-32 px-6 md:px-12 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT SIDE: THE PITCH */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500  font-thin">
                contact
              </h2>
              <h3 className="text-4xl md:text-4xl font-bold text-white tracking-tighter leading-[0.9]">
                Let&apos;s build <br />
                <span className=" italic text-blue-500">the future.</span>
              </h3>
            </div>

            <p className="text-zinc-400 text-md md:text-xl font-light max-w-md leading-relaxed">
              Currently accepting new projects and technical consultations. Grab
              a spot on my calendar or reach out via traditional channels.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-4 bg-white px-8 py-5 rounded-full text-md transition-all hover:bg-blue-600 hover:text-white text-sm"
            >
              Schedule a Call
              <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform" />
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE: THE DIRECT CHANNELS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative background blur */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />

            <div className="relative space-y-1 w-full">
              {[
                {
                  label: "Email",
                  value: "hananhpk@gmail.com",
                  href: "mailto:hananhpk@gmail.com",
                  icon: <FiMail />,
                },
                {
                  label: "WhatsApp / Call",
                  value: "+971 50 944 3818",
                  href: "tel:+971509443818",
                  icon: <FiPhone />,
                },
                {
                  label: "Location",
                  value: "Dubai, United Arab Emirates",
                  href: null,
                  icon: <FiMapPin />,
                },
              ].map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  target={contact.href ? "_blank" : undefined}
                  className={`flex flex-col p-8 border-b border-white/5 group hover:bg-zinc-900/40 transition-all ${!contact.href && "cursor-default"}`}
                >
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                        {contact.label}
                      </p>
                      <p className="text-xl md:text-2xl text-zinc-200 font-light group-hover:text-blue-500 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                    <div className="text-zinc-700 group-hover:text-blue-500 transition-colors text-2xl">
                      {contact.icon}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Calendly Modal Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-xl"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 z-[110] bg-white text-black p-4 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className="absolute w-full h-[2px] bg-current rotate-45" />
                <span className="absolute w-full h-[2px] bg-current -rotate-45" />
              </div>
            </motion.button>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-full max-w-6xl h-full max-h-[90vh] bg-zinc-950 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <InlineWidget
                url="https://calendly.com/hananpk"
                styles={{ height: "100%", width: "100%" }}
                pageSettings={{
                  backgroundColor: "09090b",
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
