"use client";
import React from "react";
import { motion } from "framer-motion";

const EventDetails = () => {
    return (
        <div className="py-12 px-4">
            {/* About the Event Section */}
            <motion.div
                id="page1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
                className="max-w-5xl mx-auto mb-12"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
                        About the Event
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-6">
                        <span className="font-semibold text-primary">
                            Unleash Your Creativity, Solve Real-World Challenges!
                        </span>
                    </h3>
                    <p className="text-lg sm:text-xl text-text-secondary mb-6 leading-relaxed">
                        As part of InApp&apos;s Silver Jubilee celebrations, Innovate 2.0 is a
                        two-day hackathon designed for students across Kerala. Compete in
                        teams to build impactful solutions that address real-world
                        challenges, paving the way for a smart, sustainable tomorrow.
                    </p>
                    <ul className="list-professional space-y-3 text-base sm:text-lg text-text-primary">
                        <li>Work on industry-relevant problem statements.</li>
                        <li>Collaborate with mentors and tech leaders.</li>
                        <li>Showcase your talent to industry experts.</li>
                        <li>Win exciting prizes and gain mentorship opportunities.</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

export default EventDetails;
