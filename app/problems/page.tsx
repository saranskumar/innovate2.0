"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for better navigation

const page = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">


      <div className="max-w-3xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-text-primary mb-6">
            Coming Soon
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-text-secondary mb-12 font-medium">
            Problem Statements are <span className="text-primary font-bold">Releasing Soon</span>
          </h2>

          <p className="text-lg text-text-secondary mb-12 max-w-lg mx-auto leading-relaxed">
            We are finalizing the challenges for this year&apos;s hackathon. Stay tuned for some exciting problem statements!
          </p>

          <Link
            href="/"
            className="buttonMain font-semibold inline-flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
