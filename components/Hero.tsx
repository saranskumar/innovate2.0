"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import sct from "../assets/logo/sct_logo.png";
import ieee from "../assets/logo/ieee_logo.png";
import yp from "../assets/logo/yp_logo.png";
import inapp from "../assets/logo/InApp_Logo.svg";
import sb from "../assets/logo/SB_White.png";
import innovate from "../assets/logo/innovate_logo.svg";
import { Link } from "react-scroll";

const Hero = () => {

  return (
    <motion.div
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center w-full overflow-hidden pt-24 pb-10 md:pt-36 md:pb-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      style={{
        background: 'transparent'
      }}
    >


      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* InApp Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src={inapp}
            alt="inapp logo"
            height={91}
            width={550}
            className="mx-auto w-[140px] lg:w-[300px] opacity-90"
            style={{ filter: "brightness(0) invert(1)" }}
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
            alt="Innovate Hackathon 2.0 - 2nd Edition"
            width={800}
            height={240}
            className="w-[350px] lg:w-[600px] opacity-95 mix-blend-overlay"
          />
        </motion.div>



        {/* Subtitle with yellow highlight */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4 font-medium"
        >
          <span className="font-semibold text-white">
            Empowering the Future: Engineering Solutions
          </span>{" "}
          for a Smarter Sustainable Tomorrow
        </motion.p>

        {/* Logos Section - All 4 in a row on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
          className="flex flex-nowrap justify-center items-center gap-3 sm:gap-6 md:gap-10 lg:gap-16 mb-8 px-2"
        >
          {/* YP Logo */}
          <div className="w-[80px] h-[64px] sm:w-[100px] sm:h-[80px] md:w-[160px] md:h-[130px] flex items-center justify-center flex-shrink-0">
            <Image
              src={yp}
              alt="IEEE Young Professionals"
              className="w-full h-full object-contain"
            />
          </div>

          {/* SB Logo */}
          <div className="w-[70px] h-[56px] sm:w-[80px] sm:h-[64px] md:w-[130px] md:h-[100px] flex items-center justify-center flex-shrink-0">
            <Image
              src={sb}
              alt="IEEE Student Branch"
              className="w-full h-full object-contain"
            />
          </div>

          {/* SCT Logo */}
          <div className="w-[80px] h-[64px] sm:w-[100px] sm:h-[80px] md:w-[160px] md:h-[130px] flex items-center justify-center flex-shrink-0">
            <Image
              src={sct}
              alt="SCT College of Engineering"
              className="w-full h-full object-contain"
            />
          </div>

          {/* IEEE Logo - Larger than others */}
          <div className="w-[100px] h-[80px] sm:w-[130px] sm:h-[100px] md:w-[200px] md:h-[170px] flex items-center justify-center flex-shrink-0">
            <Image
              src={ieee}
              alt="IEEE Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Register Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <Link
            to="registration"
            smooth={true}
            offset={-80}
            duration={500}
            className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-red-800 transition shadow-lg cursor-pointer transform hover:scale-105 active:scale-95 glare-button"
          >
            Register Now
          </Link>
        </motion.div>

        {/* Decorative hand-drawn arrow pointing down (optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 text-gray-200 bg-neutral-900/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-sm max-w-full mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-lg md:text-xl font-bold leading-tight whitespace-nowrap text-white">
                Sree Chitra Thirunal College of Engineering
              </span>
              <span className="text-[10px] sm:text-sm md:text-base font-medium text-gray-400 opacity-90 whitespace-nowrap">
                Pappanamcode, Thiruvananthapuram, Kerala
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
