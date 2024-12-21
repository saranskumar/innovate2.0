"use client";
import Day1 from "@/components/util/Day1";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Day2 from "./util/Day2";
import Day3 from "./util/Day3";

const Event = () => {
  const [activeTab, setActiveTab] = useState("day1"); // Default to "profile"

  // Function to handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, filter: "blur(0)" }}
      transition={{ ease: "easeIn", duration: 1.5 }}
    >
      <h2
        id="page4"
        className="md:flex m-10 md:ml-48 font-palanquin text-4xl mb-10 font-bold lg:max-w-lg lg:text-start "
      >
        Schedule
      </h2>
      <div className="md:flex m-10 md:ml-48">
        {/* Sidebar Navigation */}
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li>
            <button
              onClick={() => handleTabChange("day1")}
              className={`inline-flex items-center px-4 py-3 w-full rounded-lg ${
                activeTab === "day1"
                  ? "text-white bg-gradient-to-r from-[#ff5151] via-[#e12204] to-[#e53600] "
                  : "bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              DAY 1
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabChange("day2")}
              className={`inline-flex items-center px-4 py-3 w-full rounded-lg ${
                activeTab === "day2"
                  ? "text-white bg-gradient-to-r from-[#ff5151] via-[#e12204] to-[#e53600]"
                  : "bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              DAY 2
            </button>
          </li>
        </ul>

        {/* Main content */}
        <div className="pl-12 bg-transparent text-medium text-gray-500  rounded-lg w-full">
          {activeTab === "day1" && <Day1 />}
          {activeTab === "day2" && <Day2 />}
        </div>
      </div>
    </motion.div>
  );
};

export default Event;
