"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Registration = () => {
  const [isChecked, setIsChecked] = useState(false);

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
            <div className="flex items-center justify-center gap-3">
              <input
                type="checkbox"
                id="rules-checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="w-5 h-5 accent-primary cursor-pointer rounded border-gray-300 focus:ring-primary"
              />
              <label htmlFor="rules-checkbox" className="text-text-secondary text-sm sm:text-base cursor-pointer select-none">
                I have read and accept the <a href="/rules" target="_blank" className="text-primary underline hover:text-red-400 transition">Rules and Regulations</a>
              </label>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
              <button
                disabled={!isChecked}
                onClick={() => window.open('https://www.yepdesk.com/innovate2026', '_blank')}
                className={`px-8 py-4 text-lg font-semibold border rounded-full transition-all duration-300 border-transparent
                  ${isChecked
                    ? "bg-primary text-white hover:bg-red-700 hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                    : "bg-gray-600 text-gray-300 cursor-not-allowed opacity-50"
                  }`}
              >
                Register Now
              </button>
            </motion.div>

          </div>

          {/* Meta info */}
          <p className="text-sm sm:text-base text-text-secondary">
            Registration Reopened:{" "}
            <span className="font-semibold text-yellow-500">Limited Slots Only!</span>
          </p>
        </div>
      </motion.div>
    </section >
  );
};

export default Registration;
