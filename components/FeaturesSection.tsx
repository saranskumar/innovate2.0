"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LuCpu, LuUsers, LuZap, LuBriefcase } from 'react-icons/lu';
import SpotlightCard from './SpotlightCard';

const features = [
    {
        icon: <LuCpu size={40} />,
        title: "Skill Empowerment",
        description: "Gain hands-on technical, professional, and creative skills through curated bootcamps and competitions."
    },
    {
        icon: <LuZap size={40} />,
        title: "Holistic Growth",
        description: "Develop confidence, leadership, communication, and personality beyond academics."
    },
    {
        icon: <LuBriefcase size={40} />,
        title: "Innovation & Exposure",
        description: "Explore emerging technologies, startup thinking, and real-world problem solving."
    },
    {
        icon: <LuUsers size={40} />,
        title: "Networking & Inspiration",
        description: "Connect with like-minded peers, mentors, and future women leaders in engineering."
    }
];

const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                        Why Participate?
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Experience a blend of technical innovation and professional growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <SpotlightCard className="h-full" spotlightColor="rgba(229, 57, 53, 0.2)">
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="mb-6 p-4 bg-red-100/50 rounded-full text-primary group-hover:bg-red-200/50 transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                                    <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
