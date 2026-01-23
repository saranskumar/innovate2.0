"use client";
import Day1 from "@/components/util/Day1";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Day2 from "./util/Day2";

const Event = () => {
  const [activeTab, setActiveTab] = useState("day1");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2
          id="page4"
          className="text-5xl sm:text-6xl font-bold text-text-primary mb-10 text-center"
        >
          Schedule
        </h2>

        <div className="md:flex gap-6">
          {/* Sidebar Navigation */}
          <ul className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 mb-6 md:mb-0">
            <li className="flex-1 md:flex-none">
              <button
                onClick={() => handleTabChange("day1")}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === "day1"
                  ? "button-sticky"
                  : "card text-text-primary hover:shadow-md"
                  }`}
              >
                DAY 1
              </button>
            </li>
            <li className="flex-1 md:flex-none">
              <button
                onClick={() => handleTabChange("day2")}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === "day2"
                  ? "button-sticky"
                  : "card text-text-primary hover:shadow-md"
                  }`}
              >
                DAY 2
              </button>
            </li>
          </ul>

          {/* Main content */}
          <div className="flex-1 bg-transparent text-text-primary rounded-lg w-full">
            {activeTab === "day1" && <Day1 />}
            {activeTab === "day2" && <Day2 />}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Event;
