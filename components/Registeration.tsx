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


          {/* Checkbox for Rules */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <input
              type="checkbox"
              id="rules-agreement"
              className="w-5 h-5 accent-primary cursor-pointer"
              onChange={(e) => {
                const button = document.getElementById("register-btn") as HTMLButtonElement;
                if (e.target.checked) {
                  button.disabled = false;
                  button.classList.remove("opacity-50", "cursor-not-allowed");
                  button.classList.add("cursor-pointer", "hover:bg-primary/80");
                } else {
                  button.disabled = true;
                  button.classList.add("opacity-50", "cursor-not-allowed");
                  button.classList.remove("cursor-pointer", "hover:bg-primary/80");
                }
              }}
            />
            <label htmlFor="rules-agreement" className="text-text-secondary text-sm sm:text-base">
              I agree to the <a href="/rules" className="text-primary underline hover:text-primary/80">Rules and Regulations</a>
            </label>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <button
              id="register-btn"
              disabled
              onClick={() => window.open("https://www.yepdesk.com/innovate2026", "_blank")}
              className="px-8 py-4 text-lg font-semibold border rounded-full transition-all duration-300 border-transparent bg-primary text-white opacity-50 cursor-not-allowed"
            >
              Register Now
            </button>
            <p className="mt-4 text-yellow-400 font-bold text-sm animate-pulse">
              ⚠ Limited Slots Only!
            </p>
          </motion.div>


        </div>
      </motion.div>
    </section >
  );
};

export default Registration;
