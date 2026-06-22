"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

const chapters = [
  {
    id: "tegain",
    date: "Aug 2022 — May 2023",
    role: "Frontend Developer",
    company: "Tegain Pvt Ltd",
    location: "Kochi, India",
    summary:
      "First role out of the gate, learning what production code actually demands.",
    story:
      "Joined Tegain as my first professional engineering role, working across client projects in React. This is where the fundamentals stopped being theoretical — shipping under real deadlines, reading other people's code, and learning that clean architecture matters more once three other people depend on it.",
  },
  {
    id: "webandcrafts",
    date: "Aug 2023 — Sep 2024",
    role: "Software Engineer",
    company: "Webandcrafts",
    location: "Thrissur, India",
    summary:
      "A year of building deeper React fluency across a wider range of products.",
    story:
      "At Webandcrafts I worked across a broader spread of client products, sharpening how I think about component architecture, state management, and translating design files into interfaces that actually hold up across browsers and screen sizes. I developed large-scale web applications and marketing websites for clients across different industries, often picking up complex, ambiguous requirements and turning them into structured, maintainable codebases. This was where I got comfortable working with bigger teams, tighter handoffs between design and engineering, and the kind of edge-case-heavy UI work that doesn't show up in a portfolio screenshot but is most of what real frontend engineering actually is.",
  },
  {
    id: "premagic",
    date: "Sep 2024 — May 2025",
    role: "Product Engineer",
    company: "Premagic",
    location: "Bangalore, India",
    summary: "Stepped into product thinking, not just implementation.",
    story:
      "Premagic marked a major evolution in my career—from Frontend Engineer to Product Engineer. While continuing to build high-performance user experiences and interactive interfaces, I became deeply involved in developing AI-powered products and data-driven solutions at scale. My work included AI facial scanning systems, automated attendee poster generation, real-time event engagement experiences, and AI-powered data visualization dashboards that transformed large volumes of event data into meaningful insights. I also worked extensively with real-time data streams and analytics platforms to help organizers track attendee engagement, campaign performance, and event outcomes in real time. <br/> <br/> Beyond engineering, I began taking ownership of product decisions end-to-end. Alongside building features such as announcement carousels, dynamic news sections, and scroll-driven experiences with Framer Motion, I collaborated closely with design, business, and engineering teams to define requirements, shape user experiences, and deliver scalable solutions. This transition allowed me to contribute not only as an engineer but also as a product thinker focused on creating measurable business impact through AI, data, and modern web technologies.",
  },
  {
    id: "founder",
    date: "May 2025 — Jan 2026",
    role: "Founder & CEO",
    company: "iinve & viiew.me",
    location: "Kozhikode, India",
    summary: "Took the leap — built and shipped two products of my own.",
    story:
      "After several years of building products for others, I took the leap to build my own. As a founder, I spent eight months taking two SaaS products from concept to launch—owning every aspect of the journey, from product strategy and design systems to backend architecture, payments, deployment, and customer acquisition. Beyond building the products, I successfully attracted and onboarded customers, validating ideas through real-world usage and feedback while continuously iterating on the experience.<br/><br/> This chapter taught me far more than engineering alone. It strengthened my understanding of product strategy, growth, prioritization, and execution under uncertainty. Balancing user needs, technical constraints, and business goals gave me firsthand experience in turning ideas into sustainable products and reinforced the importance of ownership, adaptability, and delivering measurable value to customers.",
    products: [
      {
        name: "iinve",
        tagline: "SaaS platform for photographers & videographers",
        description:
          "A full event-management platform for photography studios — client galleries, invoice builder, portfolio pages, and an AI-assisted media pipeline, all under one dashboard.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Jotai"],
        accent: "#C8A96E",
        url: "https://iinve.com",
      },
      {
        name: "viiew.me",
        tagline: "Link-in-bio & personal page builder",
        description:
          "A fast, customizable personal landing page builder — built for creators who want a single polished link without wrestling with a website.",
        tags: ["Next.js", "Tailwind", "Supabase"],
        accent: "#3d87ff",
        url: "https://viiew.me",
      },
    ],
  },
  {
    id: "suadeo",
    date: "Apr 2026 — Present",
    role: "Frontend Engineer",
    company: "Suadeo",
    location: "Dubai, UAE",
    current: true,
    summary: "Back in a team, building on a Data & AI platform in Dubai.",
    story:
      "Currently at Suadeo, a France-based Data & AI platform company, based out of Dubai. After a year of building solo, this chapter is about bringing that product ownership instinct back into a team setting — and figuring out what's next.",
  },
];

function Chapter({ chapter, index, total }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-10"
    >
      {/* Rail */}
      <div className="flex flex-col items-center">
        <span
          className="text-2xl sm:text-3xl tabular-nums select-none"
          style={{
            color: chapter.current ? "#3d87ff" : "rgba(255,255,255,0.25)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        {index < total - 1 && (
          <div
            className="mt-3 w-px flex-1 bg-white/10"
            style={{ minHeight: 40 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-16">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            {chapter.role}
          </h3>
          {chapter.current && (
            <span className="rounded-full border border-[#3d87ff]/40 bg-[#3d87ff]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#3d87ff]">
              Live
            </span>
          )}
        </div>
        {chapter.company && (
          <span className="text-sm sm:text-base text-white/40 mb-2 block">
            {chapter.company}
          </span>
        )}

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-white/40 mb-4 font-thin">
          <span>{chapter.date}</span>
          <span className="text-white/15">·</span>
          <span className="flex items-center gap-1 mt-2 sm:mt-0">
            <MapPin size={12} className="text-white/30 " />
            {chapter.location}
          </span>
        </div>

        <p className="text-white/70 leading-relaxed max-w-xl text-[14px] sm:text-base font-thin">
          {chapter.summary}
        </p>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-4 flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
        >
          {open ? "Show less" : "Read the story"}
          <ChevronDown
            size={15}
            className="transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p
                className="mt-5 max-w-xl text-sm md:text-md !leading-[1.7] text-white/80 font-thin"
                dangerouslySetInnerHTML={{ __html: chapter.story }}
              />

              {chapter.products && (
                <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
                  {chapter.products.map((p) => (
                    <a
                      key={p.name}
                      href={p.url}
                      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div
                            className="mb-2 h-1.5 w-8 rounded-full"
                            style={{ backgroundColor: p.accent }}
                          />
                          <h4 className="text-base font-semibold text-white">
                            {p.name}
                          </h4>
                          <p className="text-xs text-white/40 mt-0.5">
                            {p.tagline}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={16}
                          className="shrink-0 text-white/30 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                      <p className="mt-3 text-[13px] leading-relaxed text-white/55">
                        {p.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-white/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function TimelineDetailPage() {
  const heroRef = useRef(null);
  const router = useRouter();
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-black text-white pt-8">
      {/* Hero */}
      <div
        ref={heroRef}
        className="mx-auto max-w-3xl px-6 pt-28 pb-20 sm:px-10"
      >
        <Link href="/">
          <button
            onClick={() => router.back()}
            className="relative z-[60] group flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-500 hover:border-blue-400/50 mb-6"
          >
            <FiArrowLeft />
          </button>
        </Link>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4"
        >
          The full story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-secondary text-4xl sm:text-5xl lg:text-5xl leading-[1.1] text-white"
        >
          Four years, five chapters,{" "}
          <span className="text-[#3d87ff]">two products of my own.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-lg text-white/55 leading-relaxed font-thin"
        >
          From a junior frontend seat in Kerala to founding and shipping two
          SaaS products, and now building from Dubai. Here&apos;s the path, in
          full.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-3xl px-6 sm:px-10 pb-32">
        {chapters.map((chapter, i) => (
          <Chapter
            key={chapter.id}
            chapter={chapter}
            index={i}
            total={chapters.length}
          />
        ))}
      </div>
    </div>
  );
}
