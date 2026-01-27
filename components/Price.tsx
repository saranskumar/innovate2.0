"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Price = () => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = 60;
    const duration = 1800;
    const stepTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setValue(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left flex-1 max-w-lg"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Prize Pool of
          </h2>

          {/* Animated Number */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="text-primary font-extrabold text-6xl sm:text-7xl leading-none"
          >
            ₹{value}K
          </motion.div>

          <p className="mt-6 text-lg sm:text-xl text-text-primary">
            Join us for the ultimate competition and stand a chance to win from a
            total prize pool of{" "}
            <span className="font-semibold text-primary">
              ₹60,000
            </span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Price;
