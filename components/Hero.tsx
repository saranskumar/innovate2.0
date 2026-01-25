"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import sct from "../assets/logo/sct_logo.png";
import ieee from "../assets/logo/ieee_logo.png";
import yp from "../assets/logo/yp_logo.png";
import inapp from "../assets/logo/inapp_logo.png";
import sb from "../assets/logo/SB_Black.png";
import innovate from "../assets/logo/innovate_logo.png";

const Hero = () => {
  return (
    <motion.div
      id="page0"
      className="relative min-h-screen flex flex-col justify-center items-center w-full overflow-hidden pt-36 pb-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%)'
      }}
    >


      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
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
          />
        </motion.div>

        {/* Innovate Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.25 }}
          className="mb-8 flex justify-center"
        >
          <Image
            src={innovate}
            alt="Innovate 2.0"
            width={600}
            height={180}
            className="w-[350px] lg:w-[600px] brightness-0"
          />
        </motion.div>



        {/* Subtitle with yellow highlight */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-red-700 max-w-3xl mx-auto mb-12 px-4 font-medium"
        >
          <span className="font-semibold text-primary">
            Empowering the Future: Engineering Solutions
          </span>{" "}
          for a Smarter Sustainable Tomorrow
        </motion.p>

        {/* Logos Section - All 4 in a row on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
          className="flex flex-nowrap justify-center items-center gap-2 sm:gap-6 md:gap-10 lg:gap-16 mb-8 px-2"
        >
          {/* YP Logo */}
          <div className="w-[60px] h-[48px] sm:w-[100px] sm:h-[80px] md:w-[160px] md:h-[130px] flex items-center justify-center flex-shrink-0">
            <Image
              src={yp}
              alt="IEEE Young Professionals"
              className="w-full h-full object-contain"
            />
          </div>

          {/* SB Logo */}
          <div className="w-[50px] h-[40px] sm:w-[80px] sm:h-[64px] md:w-[130px] md:h-[100px] flex items-center justify-center flex-shrink-0">
            <Image
              src={sb}
              alt="IEEE Student Branch"
              className="w-full h-full object-contain"
            />
          </div>

          {/* SCT Logo */}
          <div className="w-[60px] h-[48px] sm:w-[100px] sm:h-[80px] md:w-[160px] md:h-[130px] flex items-center justify-center flex-shrink-0">
            <Image
              src={sct}
              alt="SCT College of Engineering"
              className="w-full h-full object-contain"
            />
          </div>

          {/* IEEE Logo */}
          <div className="w-[70px] h-[56px] sm:w-[130px] sm:h-[100px] md:w-[200px] md:h-[170px] flex items-center justify-center flex-shrink-0">
            <Image
              src={ieee}
              alt="IEEE Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Decorative hand-drawn arrow pointing down (optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.6 }}
          className="text-red-400 text-3xl mt-8"
        >

        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
