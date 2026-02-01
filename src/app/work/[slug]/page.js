"use client";
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiZap } from 'react-icons/fi';
import { projects } from '@/data/projectsData';
import Link from 'next/link';

export default function ProjectDetail() {
    const { slug } = useParams();
    const router = useRouter();
    const project = projects.find((p) => p.slug === slug);

    if (!project) return <div className="bg-black text-white h-screen flex items-center justify-center">Project not found</div>;

    return (
        <main className="bg-black min-h-screen text-white pb-24">
            {/* Hero Header */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    src={project.image}
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-12 left-8 md:left-24">
                    <Link href="/">
                        <button onClick={() => router.back()} className="flex items-center gap-2 text-zinc-400 hover:text-white mb-6 transition-colors">
                            <FiArrowLeft /> Back to Work
                        </button>
                    </Link>
                    <h1 className="text-2xl md:text-4xl font-black tracking-tighter uppercase">{project.title}</h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-8 mt-20 grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="md:col-span-2 space-y-24">

                    {/* 1. Overview */}
                    <section>
                        <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Overview</h2>
                        <p className="text-md md:text-lg text-zinc-300 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: project.fullDescription }}>

                        </p>
                    </section>

                    {/* 2. NEW: KEY FEATURES */}
                    {project.features && (
                        <section>
                            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-8">Key Features</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/10 hover:border-blue-500/30 transition-colors">
                                        <FiZap className="text-blue-500 mt-1 flex-shrink-0" />
                                        <p className="text-zinc-300 text-sm leading-relaxed">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 3. Process Section */}
                    {project.process && (
                        <section>
                            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-8">Development & Design Process</h2>
                            <div className="space-y-8">
                                {project.process.map((item, index) => (
                                    <div key={index} className="flex gap-6 group">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm font-mono text-zinc-500 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">
                                            0{index + 1}
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-lg font-bold text-white uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-sm md:text-md text-zinc-400 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Stats Border */}
                    <section className="grid grid-cols-2 gap-8 border-y border-white/10 py-12">
                        {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key}>
                                <p className="text-zinc-500 text-xs uppercase mb-1">{key}</p>
                                <p className="text-md font-medium">{value}</p>
                            </div>
                        ))}
                    </section>
                </div>

                {/* Right Column (Sticky) */}
                <div className="space-y-12">
                    <div className="sticky top-24">
                        <h2 className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-6">Stack</h2>
                        <div className="flex flex-wrap gap-2 mb-12">
                            {project.stack.map((tech) => (
                                <span key={tech} className="px-4 py-2 bg-zinc-900 border border-white/5 rounded-full text-xs text-zinc-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a href={project.url} target="_blank" className="flex items-center justify-between p-6 bg-white text-black rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all">
                            Visit Live Site <FiExternalLink />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}