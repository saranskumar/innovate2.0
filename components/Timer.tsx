"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Timer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const eventDate: Date = new Date("2025-01-18T09:30:00"); // Replace with your event date
    const now: Date = new Date();
    const difference: number = eventDate.getTime() - now.getTime(); // Use getTime() to get the timestamp in milliseconds

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!timeLeft) {
    // Render nothing until the client has mounted
    return null;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center  text-white font-mono p-4">
      <p className="text-base sm:text-lg mb-4 italic text-center">
        THE MUCH AWAITED EVENT WILL START IN
      </p>

      <motion.div
        initial={{ opacity: 0, transform: "scale(0.7)" }}
        whileInView={{ opacity: 1, transform: "scale(1)" }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
      >
        <div className="flex flex-col items-center">
          <span>{timeLeft.days || "0"}</span>
          <span className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
            Days
          </span>
        </div>
        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">-</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours || "0"}</span>
          <span className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
            Hours
          </span>
        </div>
        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">-</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes || "0"}</span>
          <span className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
            Minutes
          </span>
        </div>
        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">-</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds || "0"}</span>
          <span className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
            Seconds
          </span>
        </div>
      </motion.div>

      <div className="mt-8 text-center">
        {/*<p className="uppercase text-xs sm:text-sm md:text-base">Venue:</p>*/}
        <p className="text-sm sm:text-base text-red-700 bg-clip-text text-transparent md:text-lg lg:text-xl">
          Fostering collaboration - innovation - diverse activities
        </p>
      </div>
    </div>
  );
};
