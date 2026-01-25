"use client";
import React from "react";
import { motion } from "framer-motion";

const Collaborators = () => {
    return (
        <div className="py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
                className="max-w-5xl mx-auto mb-12"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
                        Collaborators
                    </h2>
                    <p className="text-lg sm:text-xl text-text-primary leading-relaxed">
                        This event is hosted by{" "}
                        <span className="font-bold text-primary">InApp</span> in collaboration
                        with{" "}
                        <span className="font-bold text-primary">
                            IEEE Kerala Young Professionals
                        </span>{" "}
                        and{" "}
                        <span className="font-bold text-primary">
                            SCT College of Engineering
                        </span>
                        , ensuring professional mentorship, vibrant networking, and a
                        dynamic platform for innovation.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Collaborators;
