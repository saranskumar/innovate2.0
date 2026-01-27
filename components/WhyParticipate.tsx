"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, GraduationCap, Star, Briefcase, Trophy, Network } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const reasons = [
    {
        icon: <Lightbulb size={40} />,
        title: "Innovate with Purpose",
        description: "Build solutions that matter and address real-world challenges."
    },
    {
        icon: <GraduationCap size={40} />,
        title: "Learn from Experts",
        description: "Get mentorship and valuable feedback from industry professionals."
    },
    {
        icon: <Star size={40} />,
        title: "Showcase Your Talent",
        description: "Present your innovative projects to industry leaders and peers."
    },
    {
        icon: <Briefcase size={40} />,
        title: "Placement Opportunities",
        description: "Impress top tech professionals and open doors to career prospects."
    },
    {
        icon: <Trophy size={40} />,
        title: "Win Awards & Recognition",
        description: "Take home prizes and future opportunities."
    },
    {
        icon: <Network size={40} />,
        title: "Networking & Community",
        description: "Connect with like-minded peers, mentors, and industry leaders."
    }
];

const WhyParticipate = () => {
    return (
        <section className="py-20 px-4" id="why-participate">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-4">
                        Why Participate?
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
                        Join us for an unforgettable experience of innovation, learning, and growth
                    </p>
                </motion.div>

                {/* Reasons Grid with SpotlightCards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <SpotlightCard
                            key={index}
                            className="min-h-[280px] border-white/10"
                            spotlightColor="rgba(229, 57, 53, 0.2)"
                        >
                            <div className="flex flex-col items-center text-center h-full p-6">
                                <div className="mb-4 p-3 bg-white/5 rounded-full text-primary group-hover:bg-white/10 transition-colors duration-300">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-base text-text-secondary leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyParticipate;
