"use client";

import { motion } from "framer-motion";
import { getBasePath } from "../utils/basePath";

const basePath = getBasePath();

const projects = [
    {
        id: 1,
        title: "Prismio",
        desc: "Interactive 3D Learning App",
        tags: ["Flutter", "3D Visualization", "Education UI"],
        image: `${basePath}/prismio.png`
    },
    {
        id: 2,
        title: "Jersey Shop",
        desc: "Modern Sports E-Commerce Design",
        tags: ["Web Design", "UI/UX", "Figma"],
        image: `${basePath}/jersey_shop.png`
    },
    {
        id: 3,
        title: "Car Rental System",
        desc: "Vehicle Booking Platform with Admin Panel",
        tags: ["PHP", "HTML/CSS", "MySQL"],
        image: `${basePath}/car_rental.png`
    },
    {
        id: 4,
        title: "Music Player App",
        desc: "Sleek Audio Streaming Interface",
        tags: ["Mobile App", "UI Design", "Visuals"],
        image: `${basePath}/music_player.jpg`
    },
];

export default function Projects() {
    return (
        <section className="relative min-h-screen w-full bg-[#121212] py-32 px-6 md:px-12 flex flex-col items-center z-10">

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold text-white mb-24 tracking-tighter"
            >
                Selected Work
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative h-[500px] w-full rounded-3xl overflow-hidden cursor-pointer
                       bg-white/5 backdrop-blur-lg border border-white/10
                       hover:border-white/20 transition-all duration-500
                       hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32 z-20">
                            <div className="flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <div className="flex gap-2 mb-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs uppercase tracking-wider text-gray-400 border border-white/10 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                                    {project.desc}
                                </p>
                            </div>
                        </div>

                        {/* Image Thumbnail */}
                        <div className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}
