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
    const eventDate: Date = new Date("2026-02-21T12:00:00");
    const now: Date = new Date();
    const difference: number = eventDate.getTime() - now.getTime();

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
    return null;
  }

  return (
    <div className="py-8 md:py-16 px-4 flex flex-col items-center justify-center">
      <p className="text-xl sm:text-2xl font-semibold text-text-primary mb-8 text-center uppercase tracking-wide">
        THE HACKATHON STARTS IN
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="flex flex-nowrap justify-center gap-2 sm:gap-6 w-full max-w-4xl px-2"
      >
        {/* Days */}
        <div className="flex-1 flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-lg border border-red-100 p-3 sm:p-6 min-w-[70px]">
          <span className="text-3xl sm:text-6xl md:text-7xl font-bold text-primary">
            {timeLeft.days || "0"}
          </span>
          <span className="text-[10px] sm:text-base mt-1 sm:mt-2 text-text-secondary font-medium uppercase tracking-wide">
            Days
          </span>
        </div>

        {/* Hours */}
        <div className="flex-1 flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-lg border border-red-100 p-3 sm:p-6 min-w-[70px]">
          <span className="text-3xl sm:text-6xl md:text-7xl font-bold text-primary">
            {timeLeft.hours || "0"}
          </span>
          <span className="text-[10px] sm:text-base mt-1 sm:mt-2 text-text-secondary font-medium uppercase tracking-wide">
            Hours
          </span>
        </div>

        {/* Minutes */}
        <div className="flex-1 flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-lg border border-red-100 p-3 sm:p-6 min-w-[70px]">
          <span className="text-3xl sm:text-6xl md:text-7xl font-bold text-primary">
            {timeLeft.minutes || "0"}
          </span>
          <span className="text-[10px] sm:text-base mt-1 sm:mt-2 text-text-secondary font-medium uppercase tracking-wide">
            Minutes
          </span>
        </div>

        {/* Seconds */}
        <div className="flex-1 flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-lg border border-red-100 p-3 sm:p-6 min-w-[70px]">
          <span className="text-3xl sm:text-6xl md:text-7xl font-bold text-primary">
            {timeLeft.seconds || "0"}
          </span>
          <span className="text-[10px] sm:text-base mt-1 sm:mt-2 text-text-secondary font-medium uppercase tracking-wide">
            Seconds
          </span>
        </div>
      </motion.div>

      <div className="mt-10 text-center">
        <p className="text-base sm:text-lg text-text-primary font-medium">
          <span className="font-semibold text-primary">
            Fostering collaboration - innovation - diverse activities
          </span>
        </p>
      </div>
    </div>
  );
};
