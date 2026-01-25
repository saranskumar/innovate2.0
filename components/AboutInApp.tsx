"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutInApp = () => {
    return (
        <div className="py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
                className="max-w-5xl mx-auto mb-12"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
                        About InApp
                    </h2>
                    <p className="text-lg sm:text-xl text-text-primary leading-relaxed">
                        InApp has been at the forefront of technology and innovation for the
                        last{" "}
                        <span className="font-bold text-primary">25 years</span>.
                        Join us in our mission to empower individuals and businesses to
                        build smarter, sustainable solutions for the future.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutInApp;
