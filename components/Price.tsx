"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import innovate from "../assets/images/prize.png";

const Price = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null); // Reference to the section
  const isInView = useInView(ref, { once: true }); // Trigger only once when in view

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 50; // Final prize value
      const duration = 2000; // Animation duration in milliseconds
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setValue(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <div
      ref={ref} // Attach ref to the parent container
      className="flex flex-col md:flex-row items-center justify-center my-10 px-4 md:px-20"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center md:text-left md:w-1/2"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Prize Pool of <span className="text-red-700">{value}K</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          Join us for the ultimate competition and grab a chance to win from a
          massive prize pool of ₹50,000!
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
      >
        <Image
          src={innovate} // Replace with the actual image path
          alt="Prize Pool"
          className="w-full md:w-3/4 rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Price;
