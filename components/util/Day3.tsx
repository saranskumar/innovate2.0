import React from "react";
import { motion } from "framer-motion";

const Day3 = () => {
    const schedule = [
        {
            id: 1,
            time: "05:00 AM",
            event: "Evaluation 4",
            description: "Final evaluation round",
            rotation: "rotate-slight-1",
        },
        {
            id: 2,
            time: "11:00 AM",
            event: "Final Pitch Presentations (Top 10 Finalists)",
            description: "Shortlisted teams present to judges",
            rotation: "-rotate-slight-1",
        },
        {
            id: 3,
            time: "01:30 PM",
            event: "Valedictory Function & Prize Distribution",
            description: "Results and closing ceremony",
            rotation: "rotate-slight-2",
        },
    ];

    return (
        <div className="relative py-4">
            {/* Hand-drawn vertical connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden sm:block"></div>

            <div className="space-y-6">
                {schedule.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: index * 0.1 }}
                        className="relative"
                    >
                        {/* Timeline Dot Marker */}
                        <div className="absolute left-0 sm:left-5 top-6 w-3 h-3 rounded-full bg-primary border-2 border-white z-10"></div>

                        {/* Schedule Note Card */}
                        <div className="ml-0 sm:ml-20">
                            <div
                                className="p-6 hover:shadow-lg transition-all duration-200 group cursor-default rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md relative"
                            >
                                {/* Yellow Highlighted Time */}
                                <div className="mb-3">
                                    <span className="inline-block text-lg sm:text-xl font-bold text-primary">
                                        <span className="font-semibold text-primary">{item.time}</span>
                                    </span>
                                </div>

                                {/* Event Title - Handwritten */}
                                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2 leading-tight">
                                    {item.event}
                                </h3>

                                {/* Description - Clean Sans-Serif */}
                                {item.description && (
                                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                                        {item.description}
                                    </p>
                                )}

                                {/* Hand-drawn underline accent */}
                                <div className="mt-3 w-16 h-0.5 bg-primary/20 rounded"></div>
                            </div>
                        </div>

                        {/* Dashed connector to next item */}
                        {index < schedule.length - 1 && (
                            <div className="hidden sm:block absolute left-9 top-16 w-0.5 h-6 border-l-2 border-dashed border-primary/15"></div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* End of Event Marker */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.6, delay: 0.5 }}
                className="mt-8 text-center"
            >
                <span className="inline-block px-4 py-2 text-sm font-medium text-text-secondary border-2 border-dashed border-primary/20 rounded-lg">
                    Hackathon Concludes — 48 Hours of Innovation
                </span>
            </motion.div>
        </div>
    );
};

export default Day3;
