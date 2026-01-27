"use client";
import React from "react";
import GlareHover from "./GlareHover";

const AboutDetails = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {/* Box 1: InApp (Organizer) */}

            <GlareHover
                width="100%"
                height="100%"
                background="rgba(255, 255, 255, 0.05)"
                borderRadius="24px"
                borderColor="rgba(255, 255, 255, 0.1)"
                glareColor="rgba(255, 230, 230, 0.4)"
                glareOpacity={0.4}
                glareSize={200}
                className="rounded-3xl border border-white/20 backdrop-blur-md"
            >
                <div className="h-full p-8 flex flex-col justify-center text-center">
                    <h3 className="text-xl font-bold text-primary mb-4">
                        Organized by InApp
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                        Innovate 2.0 brings together the brightest minds to build impactful solutions. We are dedicated to fostering innovation and technical excellence.
                    </p>
                </div>
            </GlareHover>

            {/* Box 2: Collaborators (IEEE Kerala YP) */}
            <GlareHover
                width="100%"
                height="100%"
                background="rgba(255, 255, 255, 0.05)"
                borderRadius="24px"
                borderColor="rgba(255, 255, 255, 0.1)"
                glareColor="rgba(255, 230, 230, 0.4)"
                glareOpacity={0.4}
                glareSize={200}
                className="rounded-3xl border border-white/20 backdrop-blur-md"
            >
                <div className="h-full p-8 flex flex-col justify-center text-center">
                    <h3 className="text-xl font-bold text-primary mb-4">
                        Community Partner
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                        In collaboration with <span className="text-text-primary font-semibold">IEEE Kerala Young Professionals</span>, we aim to bridge the gap between academia and industry, providing mentorship and a platform to showcase your talent.
                    </p>
                </div>
            </GlareHover>

            {/* Box 3: Host (SCTCE & IEEE SCT SB) */}
            <GlareHover
                width="100%"
                height="100%"
                background="rgba(255, 255, 255, 0.05)"
                borderRadius="24px"
                borderColor="rgba(255, 255, 255, 0.1)"
                glareColor="rgba(255, 230, 230, 0.4)"
                glareOpacity={0.4}
                glareSize={200}
                className="rounded-3xl border border-white/20 backdrop-blur-md"
            >
                <div className="h-full p-8 flex flex-col justify-center text-center">
                    <h3 className="text-xl font-bold text-primary mb-4">
                        Hosted By
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                        Hosted by <span className="text-text-primary font-semibold">IEEE SCT Student Branch </span> at SCTCE, a premier student community dedicated to fostering a legacy of technical excellence, leadership, and innovation through hands-on learning.
                    </p>
                </div>
            </GlareHover>
        </div >
    );
};

export default AboutDetails;
