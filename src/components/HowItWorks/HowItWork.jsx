import React from 'react';
import { Lightbulb, PenTool, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Share Your Idea",
      description: "Tell me what you need — a new website, redesign, or template customization. We'll discuss your goals and vision clearly, together.",
      icon: <Lightbulb className="w-24 h-24 text-zinc-800 absolute bottom-4 right-4 -z-10" />,
      rotation: "-rotate-2"
    },
    {
      number: "02",
      title: "Design & Build",
      description: "I'll craft a modern, responsive design in Framer and bring it to life with smooth animations and smart layouts seamlessly consistently.",
      icon: <PenTool className="w-24 h-24 text-zinc-800 absolute bottom-4 right-4 -z-10" />,
      rotation: "rotate-0"
    },
    {
      number: "03",
      title: "Launch & Care",
      description: "Once you're happy, we'll launch your site. I'll also provide post-launch support to make sure everything runs perfectly smoothly.",
      icon: <Rocket className="w-24 h-24 text-zinc-800 absolute bottom-4 right-4 -z-10" />,
      rotation: "rotate-2"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#000] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.6em] text-zinc-500 font-bold mb-4">
              How It Works
          </h2>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
            {/* ESCAPED APOSTROPHE HERE */}
            Here&apos;s what working<br />together looks like
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 relative">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex-1 relative p-8 rounded-3xl border border-[#2f2f2f9b] bg-[#141414] shadow-sm transition-transform duration-300 hover:scale-105 ${step.rotation} z-10`}
            >
              <span className="text-lg font-semibold text-zinc-500 block mb-4">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold text-white mb-6">
                {step.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-12">
                {step.description}
              </p>
              
              {/* Background Icon */}
              <div className="opacity-20">
                {step.icon}
              </div>
            </div>
          ))}
          
          <div className="hidden lg:block absolute top-0 left-1/3 -translate-x-1/2 -translate-y-8">
             <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-zinc-700"><path d="M5 35C20 5 40 5 55 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;