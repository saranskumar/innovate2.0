"use client";
import React from "react";
import Image from "next/image";
import innovate from "../assets/images/Innovate_2.png";
import { motion } from "framer-motion";
//hidden md:block
const About = () => {
  const about_event = `Dhyuthi, the flagship event of IEEE SCT SB, is back for its 5th edition after a one-year hiatus. This highly anticipated event will feature three distinct tracks that delve into relevant topics and showcase technologies with significant growth potential, offering participants a chance to explore cutting-edge advancements in various fields. Dhyuthi is designed to provide a rich experience, packed with technical workshops where attendees can gain hands-on skills as well as participate in competitions that encourage innovation and teamwork. Dhyuthi 5.0 fosters collaboration and innovation, offering diverse activities that promote personal growth and academic discourse, solidifying its status as a highly anticipated IEEE event.`;
  return (
    <section className="padding pt-20 pb-20">
      <section
        id="page1"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container text-white"
      >
        <motion.div
          initial={{ opacity: 0, transform: "translate(-100px)" }}
          whileInView={{ opacity: 1, transform: "translate(0px)" }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="flex-1 flex justify-center items-center "
        >
          <Image
            src={innovate}
            alt=""
            loading="lazy"
            width="350"
            height="280"
            decoding="async"
            data-nimg="1"
            className=" object-contain rounded-md"
          />
        </motion.div>
        <motion.div
          className="flex m-5 flex-1 flex-col mt-2 mask-radial-faded"
          initial={{ opacity: 0, transform: "scale(0.7)" }}
          whileInView={{ opacity: 1, transform: "scale(1)" }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          <div className="md:flex items-center justify-center gap-3 my-4">
            <h1 className="text-4xl text-center  md:text-5xl font-bold font-[TheGoodMonolith] bg-gradient-to-b from-white via-red-500 to-red-700 bg-clip-text text-transparent mb-4">
              This Jan
            </h1>
          </div>
          <div className="md:flex items-center justify-center gap-3 my-4">
            <div className="ml-2">
              <h2 className="text-3xl md:text-4xl animate-pulse font-bold  font-[Enhanced_LED_Board-7] text-center">
                18 - 19
              </h2>
            </div>
          </div>
          <motion.p
            className="text-lg md:text-xl font-semibold text-gray-400 text-center"
            initial={{ opacity: 0, transform: "scale(0.3)" }}
            whileInView={{ opacity: 1, transform: "scale(1)" }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
          >
            From idea to reality
          </motion.p>
          <motion.p
            className="text-lg pt-6 md:text-xl font-semibold text-white text-center"
            initial={{ opacity: 0, transform: "scale(0.3)" }}
            whileInView={{ opacity: 1, transform: "scale(1)" }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
          >
            SCT College of Engineering, Trivandrum
          </motion.p>
          <motion.p
            className="text-lg pt-2 md:text-xl font-semibold text-gray-400 text-center"
            initial={{ opacity: 0, transform: "scale(0.3)" }}
            whileInView={{ opacity: 1, transform: "scale(1)" }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
          >
            Supported by{" "}
            <span className="text-white">IEEE Kerala Young Professionals</span>
          </motion.p>
        </motion.div>

        {/* <div className="flex m-5 flex-1 flex-col">
          <h2 className="font-palanquin text-4xl mb-10 font-bold lg:max-w-lg lg:text-start ">
            About Dhyuthi 2024
          </h2>
          <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7 text-justify text-[#bbbcbc]">
            {about_event}
          </p>
          <div className="flex-1 flex justify-center items-center ">
            <h2 className="font-palanquin text-4xl mb-10 font-bold bg-gradient-to-r from-[#efb98f] via-[#ef9a06] to-[#f1871d] bg-clip-text text-transparent lg:max-w-lg">
              October 04 | 05 | 06
            </h2>
          </div>
        </div> */}
      </section>
    </section>
  );
};

export default About;
