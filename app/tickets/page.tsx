"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TicketsPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-paper py-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="max-w-3xl mx-auto text-center"
            >
                {/* Main Paper Card */}
                <div className="paper-card sketchy-lift rotate-slight-1 p-8 sm:p-12 lg:p-16">
                    {/* Title */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-handwritten font-bold text-sketch mb-6">
                        Registration
                    </h1>

                    {/* Status Message */}
                    <div className="mb-8">
                        <h2 className="text-3xl sm:text-4xl font-handwritten font-bold text-text-primary mb-4">
                            <span className="highlight-organic">Opens Soon!</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                            We&apos;re preparing an amazing hackathon experience for you.
                            Registration will open shortly. Stay tuned for updates!
                        </p>
                    </div>

                    {/* Info Box */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="paper-note rotate-slight-2 p-6 bg-paper-dark"
                    >
                        <h3 className="text-xl font-semibold text-text-primary mb-3 hand-underline inline-block">
                            What to expect:
                        </h3>
                        <ul className="sketch-list text-left text-text-secondary space-y-2">
                            <li>Team registration (1-5 members)</li>
                            <li>Refundable ₹500 commitment fee</li>
                            <li>Confirmation via email</li>
                            <li>College ID verification at venue</li>
                        </ul>
                    </motion.div>

                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-8"
                    >
                        <button
                            onClick={() => window.location.href = '/'}
                            className="buttonMain font-semibold"
                        >
                            ← Back to Home
                        </button>
                    </motion.div>
                </div>

                {/* Additional Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-base sm:text-lg text-text-secondary mt-8"
                >
                    Follow us on social media for the latest updates and announcements!
                </motion.p>
            </motion.div>
        </div>
    );
}
