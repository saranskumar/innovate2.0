"use client";
import React from "react";
import { motion } from "framer-motion";

const tracks = [
    {
        number: "01",
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        problems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
    },
    {
        number: "02",
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        problems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
    },
    {
        number: "03",
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        problems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
    },
    {
        number: "04",
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        problems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
    },
    {
        number: "05",
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        problems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
    },
];

const ProblemsPage = () => {
    return (
        <div className="min-h-screen pt-36 pb-24 px-4 bg-[#0d0d0d]">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary">
                        Problem Statements
                    </h1>
                    <div className="mt-4 mx-auto w-16 h-1 bg-[#b50e1d] rounded-full" />
                </motion.div>

                {/* Track list */}
                <div className="space-y-4">
                    {tracks.map((track, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="bg-white/5 border border-white/10 rounded-2xl px-8 py-8"
                        >
                            {/* Track heading */}
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="text-[#b50e1d] font-black text-lg tabular-nums">
                                    {track.number}
                                </span>
                                <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
                                    Track {track.number}: {track.title}
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4 pl-8">
                                {track.description}
                            </p>

                            {/* Problem list */}
                            <ul className="pl-8 space-y-2.5">
                                {track.problems.map((problem, j) => (
                                    <li key={j} className="flex gap-3 text-text-secondary text-sm sm:text-base leading-relaxed">
                                        <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#b50e1d]" />
                                        {problem}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProblemsPage;
