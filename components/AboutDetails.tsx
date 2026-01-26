"use client";
import React from "react";
import SpotlightCard from "./SpotlightCard";

const AboutDetails = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Box 1: InApp (Organizer) */}
            <SpotlightCard
                className="h-full border-red-100/20"
                spotlightColor="rgba(229, 57, 53, 0.2)"
            >
                <div className="h-full p-8 flex flex-col justify-center text-center">
                    <h3 className="text-xl font-bold text-primary mb-4">
                        Organized by InApp
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                        As part of <span className="text-text-primary font-semibold">InApp&apos;s Silver Jubilee</span> celebrations, Innovate 2.0 brings together the brightest minds to build impactful solutions. We are dedicated to fostering innovation and technical excellence.
                    </p>
                </div>
            </SpotlightCard>

            {/* Box 2: Collaborators (IEEE Kerala YP) */}
            <SpotlightCard
                className="h-full border-red-100/20"
                spotlightColor="rgba(229, 57, 53, 0.2)"
            >
                <div className="h-full p-8 flex flex-col justify-center text-center">
                    <h3 className="text-xl font-bold text-primary mb-4">
                        Community Partner
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                        In collaboration with <span className="text-text-primary font-semibold">IEEE Kerala Young Professionals</span>, we aim to bridge the gap between academia and industry, providing mentorship and a platform to showcase your talent.
                    </p>
                </div>
            </SpotlightCard>
        </div>
    );
};

export default AboutDetails;
