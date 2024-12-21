"use client";
import React from "react";
import { motion } from "framer-motion";
const Venue = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, filter: "blur(0)" }}
      transition={{ ease: "easeIn", duration: 1.5 }}
      id="page5"
      className="w-full flex justify-center items-center "
    >
      <div className="md:w-[80%] m-3 mt-8">
        <h2 className=" font-palanquin text-4xl mb-10 font-bold ">Venue</h2>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.1118851564481!2d76.97857658187175!3d8.470231553187036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05baee56e6b99b%3A0x4ce024c88eb0ddcb!2sSree%20Chitra%20Thirunal%20College%20of%20Engineering%2C%20Thiruvananthapuram!5e0!3m2!1sen!2sin!4v1711636446051!5m2!1sen!2sin"
            width="600"
            height="450"
            // Source Stackoverflow
            style={{ border: 0, filter: "invert(100%)" }}
            // allowfullscreen={false}
            loading="lazy"
            className="w-full rounded-md mb-5"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default Venue;
