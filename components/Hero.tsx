"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//logo imports
import sct from "../assets/logo/sct_logo.png";
import ieee from "../assets/logo/ieee_logo.png";
import yp from "../assets/logo/yp_logo.png";
import inapp from "../assets/logo/inapp_logo.png";

const Hero = () => {
  return (
    <motion.div
      id="page0"
      className="min-h-screen flex flex-col justify-center items-center bg-paper w-full overflow-hidden py-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* InApp Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.2 }}
          className="mb-6"
        >
          <Image
            src={inapp}
            alt="inapp logo"
            height={91}
            width={492}
            className="mx-auto w-[180px] lg:w-[380px] opacity-90"
            style={{ filter: 'invert(1) brightness(0.2)' }}
          />
        </motion.div>

        {/* Main Title - Hand-drawn style */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.3 }}
          className="text-7xl sm:text-8xl lg:text-[140px] font-handwritten text-sketch font-bold mb-6 leading-none"
          style={{ letterSpacing: '0.02em' }}
        >
          innovate
        </motion.h1>

        {/* Subtitle with yellow highlight */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-text-primary max-w-3xl mx-auto mb-12 px-4 font-medium"
        >
          <span className="highlight-yellow">
            Empowering the Future: Engineering Solutions
          </span>{" "}
          for a Smarter Sustainable Tomorrow
        </motion.p>

        {/* Logos Section - Paper note cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 mb-8 px-4"
        >
          {/* YP Logo Card */}
          <div className="paper-note rotate-slight-1 w-[120px] h-[95px] sm:w-[150px] sm:h-[115px] md:w-[180px] md:h-[145px] flex items-center justify-center hover:shadow-paper-hover transition-all">
            <Image
              src={yp}
              alt="IEEE Young Professionals"
              className="w-full h-full object-contain p-2"
            />
          </div>

          {/* SCT Logo Card */}
          <div className="paper-note rotate-slight-2 w-[120px] h-[95px] sm:w-[150px] sm:h-[115px] md:w-[180px] md:h-[145px] flex items-center justify-center hover:shadow-paper-hover transition-all">
            <Image
              src={sct}
              alt="SCT College of Engineering"
              className="w-full h-full object-contain p-2"
              style={{ filter: 'invert(1) brightness(0.2)' }}
            />
          </div>

          {/* IEEE Logo Card */}
          <div className="paper-note rotate-slight-3 w-[120px] h-[95px] sm:w-[150px] sm:h-[115px] md:w-[180px] md:h-[145px] flex items-center justify-center hover:shadow-paper-hover transition-all">
            <Image
              src={ieee}
              alt="IEEE Logo"
              className="w-full h-full object-contain p-2"
            />
          </div>
        </motion.div>

        {/* Decorative hand-drawn arrow pointing down (optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.6 }}
          className="text-text-secondary text-4xl mt-4"
        >
          ↓
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
