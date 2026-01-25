"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";


const Price = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 60;
      const duration = 2000;
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
      ref={ref}
      className="py-16 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left flex-1 max-w-lg"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Prize Pool of{" "}
            <span className="font-bold text-primary text-6xl sm:text-7xl inline-block">
              {value}K
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-text-primary">
            Join us for the ultimate competition and grab a chance to win from a
            massive prize pool of{" "}
            <span className="font-bold text-primary">₹60,000!</span>
          </p>
        </motion.div>

        {/* Right Section */}

      </div>
    </div>
  );
};

export default Price;
