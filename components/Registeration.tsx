"use client";
import React from "react";
import { motion } from "framer-motion";

const Registeration = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-4 bg-paper">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-handwritten font-bold text-sketch text-center mb-6 max-w-4xl">
        <span className="highlight-yellow">Innovate. Collaborate. Create.</span>
      </h2>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="text-lg sm:text-xl md:text-2xl font-medium text-center text-text-primary mb-8 max-w-3xl"
      >
        Join Kerala's brightest minds to build technology-driven solutions
        for real-world challenges!
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="mb-6"
      >
        <button
          onClick={() => {
            window.open("/problems");
          }}
          className="buttonMain font-semibold"
        >
          Problem Statements
        </button>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="text-base sm:text-lg md:text-xl font-handwritten-alt text-center text-text-primary mt-4"
      >
        Thank you to everyone who registered! See you soon.
      </motion.h2>
    </div>
  );
};

export default Registeration;
