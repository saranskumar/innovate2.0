"use client";
import React from "react";
import { motion } from "framer-motion";
import { ScribbleArrow } from "@/components/util/Scribbles";

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
        Join Kerala&apos;s brightest minds to build technology-driven solutions
        for real-world challenges!
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="mb-6 flex flex-col sm:flex-row gap-4"
      >
        <button
          onClick={() => {
            window.open("/problems");
          }}
          className="buttonMain font-semibold"
        >
          Problem Statements
        </button>

        <div className="relative">
          <button
            onClick={() => {
              window.open("/tickets", "_self");
            }}
            className="buttonMain font-semibold bg-paper-dark border-sketch"
          >
            Get Your Ticket →
          </button>
          <ScribbleArrow className="absolute -bottom-8 -right-6 sm:-right-16 sm:bottom-2 rotate-[130deg] sm:rotate-0" delay={0.5} />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="text-base sm:text-lg md:text-xl font-handwritten text-center text-text-primary mt-4"
      >
        <span className="highlight-yellow-soft font-semibold">Registration Opens Soon!</span> Stay tuned for updates.
      </motion.h2>
    </div>
  );
};

export default Registeration;
