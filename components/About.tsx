"use client";
import React from "react";
import Image from "next/image";
import innovate from "../assets/images/Innovate_2.png";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

const About = () => {
  return (
    <section className="py-16 md:py-24 px-4 overflow-hidden">
      <div className="flex justify-between items-center max-lg:flex-col gap-12 max-w-6xl mx-auto mb-20 md:mb-32">
        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="max-w-md">
            <Image
              src={innovate}
              alt="Innovate 2.0 Hackathon"
              loading="lazy"
              width="350"
              height="280"
              className="object-contain rounded-md w-full"
            />
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
        >
          <div className="max-w-lg">
            {/* Header Section */}
            <div className="mb-8">
              <span className="text-xl font-medium text-text-secondary uppercase tracking-widest pl-1">
                Mark The Date
              </span>
              <h2 className="text-7xl md:text-8xl font-black text-primary leading-none mt-2 tracking-tighter">
                FEB 21
              </h2>
              <motion.p
                className="text-2xl md:text-3xl font-light text-text-primary italic mt-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                From idea to reality
              </motion.p>
            </div>

            <div className="w-24 h-1.5 bg-red-100 rounded-full mb-8"></div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Location */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-3 bg-red-50 rounded-xl text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text-primary leading-tight">Venue</h3>
                  <p className="text-text-secondary text-lg mt-1">SCT College of Engineering, Trivandrum</p>
                </div>
              </motion.div>

              {/* Supported By */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="p-3 bg-red-50 rounded-xl text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text-primary leading-tight">Supported By</h3>
                  <p className="text-text-secondary text-lg mt-1">IEEE Kerala Young Professionals</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Why Participate Section */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-12">
            Why Participate?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 */}
            <SpotlightCard className="h-full" spotlightColor="rgba(229, 57, 53, 0.2)">
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-red-100/50 rounded-full text-primary group-hover:bg-red-200/50 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5 0-2.2-1.8-4-4-4-1.8 0-4 1.8-4 4 0 1.5.5 2.5 1.5 3.5.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Innovate with Purpose</h3>
                <p className="text-text-secondary leading-relaxed">Build solutions that matter and address real-world challenges.</p>
              </div>
            </SpotlightCard>

            {/* Item 2 */}
            <SpotlightCard className="h-full" spotlightColor="rgba(229, 57, 53, 0.2)">
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-red-100/50 rounded-full text-primary group-hover:bg-red-200/50 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Learn from Experts</h3>
                <p className="text-text-secondary leading-relaxed">Get mentorship and valuable feedback from industry professionals.</p>
              </div>
            </SpotlightCard>

            {/* Item 3 */}
            <SpotlightCard className="h-full" spotlightColor="rgba(229, 57, 53, 0.2)">
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-red-100/50 rounded-full text-primary group-hover:bg-red-200/50 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Showcase Your Talent</h3>
                <p className="text-text-secondary leading-relaxed">Present your innovative projects to industry leaders and peers.</p>
              </div>
            </SpotlightCard>

            {/* Item 4 */}
            <SpotlightCard className="h-full" spotlightColor="rgba(229, 57, 53, 0.2)">
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-red-100/50 rounded-full text-primary group-hover:bg-red-200/50 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Placement Opportunities</h3>
                <p className="text-text-secondary leading-relaxed">Impress top tech professionals and open doors to career prospects.</p>
              </div>
            </SpotlightCard>

            {/* Item 5 */}
            <SpotlightCard className="h-full" spotlightColor="rgba(229, 57, 53, 0.2)">
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-red-100/50 rounded-full text-primary group-hover:bg-red-200/50 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Win Awards & Recognition</h3>
                <p className="text-text-secondary leading-relaxed">Take home prizes and future opportunities.</p>
              </div>
            </SpotlightCard>

            {/* Item 6 */}
            <SpotlightCard className="h-full" spotlightColor="rgba(229, 57, 53, 0.2)">
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-red-100/50 rounded-full text-primary group-hover:bg-red-200/50 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Networking & Community</h3>
                <p className="text-text-secondary leading-relaxed">Connect with like-minded peers, mentors, and industry leaders.</p>
              </div>
            </SpotlightCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
