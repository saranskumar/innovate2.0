"use client";
import React from "react";
import { motion } from "framer-motion";

const Registeration = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h2 className="text-4xl text-center sm:text-5xl md:text-6xl font-extrabold font-[Enhanced_LED_Board-7] text-white break-words mb-4">
        Innovate. Collaborate. Create.
      </h2>

      <motion.h2
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0)" }}
        transition={{ ease: "easeIn", duration: 1.9 }}
        className="text-lg sm:text-xl md:text-2xl font-bold  font-[Enhanced_LED_Board-7] text-center  text-red-700 mb-6"
      >
        Join Kerala&apos;s brightest minds to build technology-driven solutions
        for real-world challenges!
      </motion.h2>

      <motion.div
        className="flex flex-col items-center justify-center p-4 m-4 rounded-xl bg-red-700 scale-75 hover:scale-100 transition-transform duration-200"
        initial={{ opacity: 0, transform: "scale(0.7)" }}
        whileInView={{ opacity: 1, transform: "scale(1)" }}
        transition={{ ease: "easeIn", duration: 0.2 }}
        style={{
          clipPath:
            "polygon(0px 0px, 100% 0px, 100% 90%, calc(100% - 58px) 100%, 0px 100%, 0px 39px)",
        }}
      >
        <button
          onClick={() => {
            window.open("https://www.yepdesk.com/innovate2025");
          }}
          className="buttonMain"
        >
          Register Now
        </button>
      </motion.div>
    </div>
  );
};

export default Registeration;
