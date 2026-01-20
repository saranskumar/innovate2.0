"use client";
import React from "react";
import { motion } from "framer-motion";

const Venue = () => {
  return (
    <div className="bg-paper py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        id="page5"
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-5xl sm:text-6xl font-handwritten font-bold text-sketch mb-10 text-center">
          Venue
        </h2>

        <div className="paper-card p-4 rotate-slight-1">
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.1118851564481!2d76.97857658187175!3d8.470231553187036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05baee56e6b99b%3A0x4ce024c88eb0ddcb!2sSree%20Chitra%20Thirunal%20College%20of%20Engineering%2C%20Thiruvananthapuram!5e0!3m2!1sen!2sin!4v1711636446051!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0, filter: "sepia(30%) saturate(140%) hue-rotate(10deg) contrast(95%)" }}
              loading="lazy"
              className="w-full rounded-lg"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg sm:text-xl text-text-primary font-medium">
            📍{" "}
            <span className="highlight-yellow font-semibold">
              Sree Chitra Thirunal College of Engineering
            </span>
            , Thiruvananthapuram
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Venue;
