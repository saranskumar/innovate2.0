"use client";
import React from "react";
import { motion } from "framer-motion";

const Registration = () => {

  return (
    <section
      id="registration"
      className="py-24 px-4 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl w-full"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl px-8 sm:px-12 md:px-16 py-14 text-center">

          {/* Accent */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary mb-6 leading-tight">
            Innovate. <span className="text-primary">Collaborate.</span> Create.
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-10">
            Join Kerala’s brightest builders to design and develop
            technology-driven solutions for real-world challenges.
          </p>

          <div className="flex flex-col items-center gap-6 mb-8">
            {/* Checkbox */}
            {/* Checkbox removed as registration is closed */}

            {/* CTA */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
              <button
                disabled={true}
                className="px-8 py-4 text-lg font-semibold border rounded-full transition-all duration-300 bg-primary text-white border-transparent cursor-not-allowed"
              >
                Registration Closed
              </button>
            </motion.div>

          </div>

          {/* Meta info */}
          <p className="text-sm sm:text-base text-text-secondary">
            Registration is currently{" "}
            <span className="font-semibold text-primary">closed</span>.
          </p>
        </div>
      </motion.div>
    </section >
  );
};

export default Registration;
