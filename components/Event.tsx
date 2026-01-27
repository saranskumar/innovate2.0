"use client";
import Day1 from "@/components/util/Day1";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Day2 from "./util/Day2";
import Day3 from "./util/Day3";

const Event = () => {
  const [activeTab, setActiveTab] = useState("day1");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-16 px-4 bg-neutral-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2
          id="schedule"
          className="text-5xl sm:text-6xl font-bold text-white mb-2 text-center"
        >
          Schedule
        </h2>

        <div className="text-center mb-10">
          <span className="text-xl text-gray-400 font-medium tracking-wide">
            48-Hour Hackathon · Feb 20–22
          </span>
        </div>

        <div className="md:flex gap-6">
          {/* Sidebar Navigation */}
          <ul className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 mb-6 md:mb-0">

            <li className="flex-1 md:flex-none">
              <div onClick={() => handleTabChange("day1")} className="cursor-pointer">
                <div
                  className={`w-full px-6 py-3 font-semibold transition-all text-center rounded-xl backdrop-blur-md border border-white/10 ${activeTab === "day1"
                    ? "bg-primary/90 text-white shadow-lg"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  Day 1
                </div>
              </div>
            </li>
            <li className="flex-1 md:flex-none">
              <div onClick={() => handleTabChange("day2")} className="cursor-pointer">
                <div
                  className={`w-full px-6 py-3 font-semibold transition-all text-center rounded-xl backdrop-blur-md border border-white/10 ${activeTab === "day2"
                    ? "bg-primary/90 text-white shadow-lg"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  Day 2
                </div>
              </div>
            </li>
            <li className="flex-1 md:flex-none">
              <div onClick={() => handleTabChange("day3")} className="cursor-pointer">
                <div
                  className={`w-full px-6 py-3 font-semibold transition-all text-center rounded-xl backdrop-blur-md border border-white/10 ${activeTab === "day3"
                    ? "bg-primary/90 text-white shadow-lg"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  Day 3
                </div>
              </div>
            </li>
          </ul>

          {/* Main content */}
          <div className="flex-1 bg-transparent text-white rounded-lg w-full">
            {activeTab === "day1" && <Day1 />}
            {activeTab === "day2" && <Day2 />}
            {activeTab === "day3" && <Day3 />}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Event;
