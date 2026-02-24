"use client";
import React from "react";
import { motion } from "framer-motion";

const tracks = [
    {
        number: "01",
        title: "Future Tech & Generative AI",
        description: "Leveraging the power of Agentic AI, Edge Computing, and Multimodal Models to solve complex challenges.",
        problems: [
            "Create edge-enabled, low-cost IoT + tinyML solutions to enable efficiency and drive progress in industries or promote sustainable future.",
            "Create real-time assistive solution/tools for specially abled, using vision + audio models.",
            "Propose AI-driven solutions leveraging Large Language Models (LLMs) and Agentic AI that enhances productivity or to solve challenges in healthcare, education, or other industries.",
        ],
    },
    {
        number: "02",
        title: "Sustainable Planet (ESG Focus)",
        description: "Engineering solutions for the Climate Crisis, Circular Economy, and Resource Management.",
        problems: [
            "Develop systems for small businesses or communities to easily measure, visualize, and reduce their energy, waste, or water footprints.",
            "Water & Agriculture Resilience: Build sensor-based or dashboard tools to optimize micro-irrigation or water usage, promoting sustainable practices in agriculture or campus facility management.",
        ],
    },
    {
        number: "03",
        title: "Social Responsibility & Community Resilience",
        description: "Bridging the digital divide and empowering communities through Civic Tech and Inclusive Design.",
        problems: [
            "Civic Tech & Governance: Develop a solution that allows users to report civic issues, track resolution status, or participate in governance to visualize resource allocation.",
            "Healthcare for the Last Mile: Create lightweight solutions for community clinics to prioritize care that maps with local emergency resources.",
            "Inclusive Education & Financial Literacy: Build tools that promote digital literacy or financial inclusion for rural populations.",
        ],
    },
    {
        number: "04",
        title: "Next-Gen Project Management & Collaboration",
        description: "Redefining how distributed teams work, prototype, and deliver in a hybrid world.",
        problems: [
            "AI-Augmented Workflows: Build solutions that help manage remote and distributed teams by automating routine administrative tasks. Think beyond simple task boards - focus on \"AI Teammates\".",
            "Rapid Prototyping & Developer Experience: Develop a \"Low-Code Prototype Generator\" or scaffolding tool that converts simple mockups or logic flows into code structure, accelerating the MVP development process for student projects and startups.",
        ],
    },
    {
        number: "05",
        title: "Cybersecurity & Digital Trust",
        description: "Ensuring privacy, integrity, and security in an interconnected ecosystem.",
        problems: [
            "Privacy-First Identity & Safety: Develop decentralized solutions for public safety that ensure user safety without storing Personally Identifiable Information (PII) centrally.",
            "Supply Chain Integrity: Create a lightweight immutable ledger solution to verify the provenance of goods in procurement workflows, preventing fraud and ensuring ethical sourcing for institutions.",
            "Deepfake Detection & Data Dignity: Build innovative tools to protect personal data on digital platforms, focusing on detecting synthetic media (deepfakes) or empowering users to control how their data is shared in an AI-scraping world.",
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
