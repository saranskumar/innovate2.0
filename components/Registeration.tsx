"use client";
import React from "react";
import { motion } from "framer-motion";
import { ScribbleArrow } from "@/components/util/Scribbles";

const Registeration = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-4">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary text-center mb-6 max-w-4xl">
        <span className="font-bold text-primary">Innovate 2.0. Collaborate. Create.</span>
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
          <ScribbleArrow className="hidden" delay={0.5} />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="text-base sm:text-lg md:text-xl font-medium text-center text-text-primary mt-4"
      >
        <span className="font-semibold text-primary">Registration Opens Soon!</span> Stay tuned for updates.
      </motion.h2>
    </div>
  );
};

export default Registeration;
