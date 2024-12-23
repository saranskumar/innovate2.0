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
      className="bg-black h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-fixed w-screen rounded-b-[35px] mt-1 overflow-hidden"
      initial={{ opacity: 0, filter: "blur(2px)", scaleY: 0.7 }}
      whileInView={{ opacity: 1, filter: "blur(0)", scaleY: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="m-2 pt-5">
        {/* InApp Logo */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0)" }}
          transition={{ ease: "easeIn", duration: 0.9 }}
          className="text-center mb-2 pt-12"
        >
          <Image
            src={inapp}
            alt="inapp logo"
            height={91}
            width={492}
            className="mx-auto w-[200px] md:w-[492px]"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0)" }}
          transition={{ ease: "easeIn", duration: 1.9 }}
          className="text-center text-[40px] md:text-[170px] font-extrabold font-[Enhanced_LED_Board-7] text-white break-words shadow-lg tracking-wider"
        >
          INNOVATE
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0)" }}
          transition={{ ease: "easeIn", duration: 1.2 }}
          className="text-center text-white text-sm font-extrabold md:text-lg mt-3 "
        >
          Empowering the Future Engineering Solutions for a Smarter Sustainable
          Tomorrow
        </motion.p>

        {/* Logos Section */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0)" }}
          transition={{ ease: "easeIn", duration: 1.5 }}
          className="flex flex-wrap justify-center gap-4 md:gap-10 lg:gap-20 mt-4   px-4"
        >
          {/* Individual Logos */}
          <div className="w-[60px] h-[40px] sm:w-[80px] sm:h-[50px] md:w-[190px] md:h-[160px]">
            <Image src={yp} alt="yp" className="w-full h-full object-contain" />
          </div>

          <div className="w-[60px] h-[40px] sm:w-[80px] sm:h-[50px] md:w-[190px] md:h-[160px]">
            <Image
              src={sct}
              alt="SCT Emblem"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-[60px] h-[40px] sm:w-[80px] sm:h-[50px] md:w-[190px] md:h-[160px]">
            <Image
              src={ieee}
              alt="IEEE Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Event Details */}
        {/* <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0)" }}
          transition={{ ease: "easeIn", duration: 1.7 }}
          className="text-center text-white mt-4 text-sm md:text-lg"
        >
          <p>Date: January 18-19, 2025</p>
          <p>Venue: SCT College of Engineering, Trivandrum</p>
          <p>Supported by: IEEE Kerala Young Professionals</p>
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default Hero;
