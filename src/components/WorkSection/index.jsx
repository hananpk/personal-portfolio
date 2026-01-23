import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "viiew.me",
    category: "Web Application",
    url: "https://viiew.me/",
    image:
      "https://res.cloudinary.com/dx5ugtyis/image/upload/v1769202400/post-1_dt27sm.jpg",
  },
  {
    id: 2,
    title: "Premagic",
    category: "AI Web Application",
    url: "https://premagic.com",
    image:
      "https://premagic.com/static/3b887fde248c9802f7e6c4f7a2d128df/81bf4/events-hero.webp",
  },
];

const WorkSection = () => {
  const [activeImage, setActiveImage] = useState(projects[0].image);

  return (
    <section className="min-h-screen bg-black text-white p-8 md:p-24 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-12">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-8">
            Selected Work
          </h2>

          <div className="flex flex-col space-y-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                onMouseEnter={() => setActiveImage(project.image)}
                className="group block border-b border-white/10 pb-6 transition-all duration-300 hover:pl-4"
              >
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs text-blue-400 font-mono mb-2 block opacity-0 group-hover:opacity-100 transition-opacity">
                      0{project.id}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-light group-hover:italic transition-all">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-gray-500 text-sm mb-1 group-hover:text-white transition-colors">
                    {project.category}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <button className="mt-12 text-gray-400 hover:text-white underline underline-offset-8 decoration-1 transition-colors">
            View all projects
          </button>
        </div>

        {/* Right Side: Dynamic Image Preview */}
        <div className="hidden md:block relative h-[500px] w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl">
          <img
            key={activeImage}
            src={activeImage}
            alt="Project Preview"
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-700 ease-in-out hover:scale-105"
          />
          {/* Subtle Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

          <div className="absolute bottom-8 left-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/70">
                Click to Explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
