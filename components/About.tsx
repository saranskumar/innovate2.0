"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Award } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const features = [
  {
    icon: <Target size={40} />,
    title: "Industry-Relevant Challenges",
    description: "Work on industry-relevant problem statements."
  },
  {
    icon: <Users size={40} />,
    title: "Expert Collaboration",
    description: "Collaborate with mentors and tech leaders."
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Showcase Your Talent",
    description: "Showcase your talent to industry experts."
  },
  {
    icon: <Award size={40} />,
    title: "Win & Learn",
    description: "Win exciting prizes and gain mentorship opportunities."
  }
];

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
            About the Event
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">
            Unleash Your Creativity, Solve Real-World Challenges!
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <p className="text-lg sm:text-xl text-text-primary leading-relaxed text-center">
            As part of InApp&apos;s Silver Jubilee celebrations, <span className="font-semibold text-primary">Innovate 2.0</span> is a two-day hackathon designed for students across Kerala. Compete in teams to build impactful solutions that address real-world challenges, paving the way for a smart, sustainable tomorrow.
          </p>
        </motion.div>

        {/* Features Grid with SpotlightCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="min-h-[280px] border-red-100/20"
              spotlightColor="rgba(229, 57, 53, 0.2)"
            >
              <div className="flex flex-col items-center text-center h-full p-6">
                <div className="mb-4 p-3 bg-red-100/50 rounded-full text-primary group-hover:bg-red-200/50 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
