"use client";
import React from "react";
import Image from "next/image";
import innovate from "../assets/images/Innovate_2.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-paper">
      <section className="flex justify-between items-center max-lg:flex-col gap-12 max-w-6xl mx-auto">
        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="paper-card rotate-slight-1 p-4 max-w-md">
            <Image
              src={innovate}
              alt="Innovate Hackathon"
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
          <div className="paper-note rotate-slight-2 max-w-lg p-8">
            {/* "This Jan" heading with handwritten font */}
            <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-sketch mb-4">
              This Jan
            </h2>

            {/* Dates with yellow highlight */}
            <div className="mb-6">
              <h2 className="text-5xl md:text-6xl font-handwritten font-bold text-sketch highlight-yellow inline-block">
                Feb 21
              </h2>
            </div>

            {/* Tagline */}
            <motion.p
              className="text-lg md:text-xl font-medium text-text-secondary mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From idea to reality
            </motion.p>

            {/* Location */}
            <motion.p
              className="text-lg md:text-xl font-semibold text-text-primary mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              SCT College of Engineering, Trivandrum
            </motion.p>

            {/* Supported by */}
            <motion.p
              className="text-base md:text-lg text-text-secondary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Supported by{" "}
              <span className="text-text-primary font-semibold highlight-yellow-soft">
                IEEE Kerala Young Professionals
              </span>
            </motion.p>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default About;
