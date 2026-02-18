"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import counterTitle from "@/assets/Counter Title.svg";

interface TimeLeft {
    hours: number;
    minutes: number;
    seconds: number;
    totalSeconds: number;
}

// ✏️ Set your hackathon start date/time — end is auto-calculated as 48 hours later
const HACKATHON_START = new Date("2026-02-21T11:00:00+05:30");
const HACKATHON_END = new Date(HACKATHON_START.getTime() + 48 * 60 * 60 * 1000);
const TOTAL_DURATION_MS = HACKATHON_END.getTime() - HACKATHON_START.getTime();

export default function CountdownPage() {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [timeToStart, setTimeToStart] = useState<string>("");
    // For the "Starts in..." subtitle
    const [phase, setPhase] = useState<"before" | "live" | "ended">("before");
    const [progress, setProgress] = useState(0);

    const getPhase = (now: Date) => {
        if (now < HACKATHON_START) return "before";
        if (now >= HACKATHON_START && now < HACKATHON_END) return "live";
        return "ended";
    };

    const getProgressPercent = (now: Date) => {
        const elapsed = now.getTime() - HACKATHON_START.getTime();
        const pct = (elapsed / TOTAL_DURATION_MS) * 100;
        return Math.min(Math.max(pct, 0), 100);
    };

    // Helper to format "Starts in Xd Yh Zm"
    const formatTimeToStart = (now: Date) => {
        const diff = HACKATHON_START.getTime() - now.getTime();
        if (diff <= 0) return "";

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);

        if (d > 0) return `Starts in ${d}d ${h}h ${m}m`;
        return `Starts in ${h}h ${m}m ${s}s`;
    };

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            setCurrentTime(now);

            const currentPhase = getPhase(now);
            setPhase(currentPhase);

            if (currentPhase === "before") {
                // Static 48 hours before start
                setTimeLeft({ hours: 48, minutes: 0, seconds: 0, totalSeconds: 48 * 3600 });
                setTimeToStart(formatTimeToStart(now));
            } else if (currentPhase === "live") {
                // Count down to END
                const difference = HACKATHON_END.getTime() - now.getTime();
                setTimeToStart(""); // Clear subtitle

                if (difference <= 0) {
                    setTimeLeft({ hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 });
                } else {
                    setTimeLeft({
                        hours: Math.floor(difference / (1000 * 60 * 60)),
                        minutes: Math.floor((difference / 1000 / 60) % 60),
                        seconds: Math.floor((difference / 1000) % 60),
                        totalSeconds: Math.floor(difference / 1000),
                    });
                }
            } else {
                // Ended
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 });
                setTimeToStart("");
            }

            setProgress(getProgressPercent(now));
        };

        tick();
        const timer = setInterval(tick, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft || !currentTime) return null;

    const pad = (n: number) => String(n).padStart(2, "0");

    const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    // Solid accent color matching site brand
    const digitColor = "text-[#E53935]";

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d0d0d] px-4 relative overflow-hidden font-sans">
            {/* Ambient glow — brand red tones */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-800/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-red-900/8 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-red-900/8 rounded-full blur-[100px]" />
            </div>

            {/* Current Time Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-6 right-6 z-20"
            >
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-2xl">
                    <div className="flex flex-col items-end leading-none">
                        <span className="text-white font-bold text-lg tracking-wider">{formattedTime}</span>
                        <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest">Local Time</span>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-[#E53935] animate-pulse" />
                </div>
            </motion.div>

            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-10">
                {/* Branding */}
                <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >

                    <Image
                        src={counterTitle}
                        alt="INNOVATE 2.0"
                        className="w-auto max-w-[320px] sm:max-w-[520px] md:max-w-[700px] mx-auto"
                        priority
                    />
                </motion.div>

                {/* Phase label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-2"
                >
                    <div className="flex items-center gap-3">
                        {phase === "live" && (
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E53935] opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E53935]" />
                            </span>
                        )}
                        <span
                            className={`text-lg sm:text-2xl font-bold uppercase tracking-widest ${phase === "live"
                                ? "text-[#E53935]"
                                : phase === "ended"
                                    ? "text-[#E53935]"
                                    : "text-neutral-400"
                                }`}
                        >
                            {phase === "before" && "Hackathon Duration"}
                            {phase === "live" && "Hacking Live"}
                            {phase === "ended" && "Hackathon Ended"}
                        </span>
                    </div>

                    {/* Subtitle for Before Phase */}
                    {phase === "before" && timeToStart && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-neutral-400 text-sm font-mono tracking-widest uppercase"
                        >
                            {timeToStart}
                        </motion.span>
                    )}
                </motion.div>

                {/* Countdown numbers */}
                {phase !== "ended" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ease: "easeOut", duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-2 sm:gap-6"
                    >
                        {/* Hours */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-12 py-6 sm:py-10 backdrop-blur-sm min-w-[100px] sm:min-w-[180px] flex justify-center">
                                <span className={`text-5xl sm:text-9xl font-black tabular-nums ${digitColor}`}>
                                    {pad(timeLeft.hours)}
                                </span>
                            </div>
                            <span className="mt-3 text-xs sm:text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase">
                                Hours
                            </span>
                        </div>

                        <span className="text-2xl sm:text-7xl font-black text-neutral-700 mb-6 pb-2 sm:pb-0">
                            :
                        </span>

                        {/* Minutes */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-12 py-6 sm:py-10 backdrop-blur-sm min-w-[100px] sm:min-w-[180px] flex justify-center">
                                <span className={`text-5xl sm:text-9xl font-black tabular-nums ${digitColor}`}>
                                    {pad(timeLeft.minutes)}
                                </span>
                            </div>
                            <span className="mt-3 text-xs sm:text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase">
                                Minutes
                            </span>
                        </div>

                        <span className="text-2xl sm:text-7xl font-black text-neutral-700 mb-6 pb-2 sm:pb-0">
                            :
                        </span>

                        {/* Seconds */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-12 py-6 sm:py-10 backdrop-blur-sm min-w-[100px] sm:min-w-[180px] flex justify-center">
                                <span className={`text-5xl sm:text-9xl font-black tabular-nums ${digitColor}`}>
                                    {pad(timeLeft.seconds)}
                                </span>
                            </div>
                            <span className="mt-3 text-xs sm:text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase">
                                Seconds
                            </span>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10"
                    >
                        <p className="text-5xl sm:text-7xl font-black text-[#E53935]">
                            🏁 Time&apos;s Up!
                        </p>
                    </motion.div>
                )}

                {/* Progress bar — only shown during live phase */}
                {phase === "live" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="w-full max-w-3xl"
                    >
                        <div className="flex justify-between text-xs text-neutral-500 mb-2 font-medium">
                            <span>Started · Feb 21, 11:00 AM</span>
                            <span>{Math.round(progress)}% elapsed</span>
                            <span>Ends · Feb 23, 11:00 AM</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                            <motion.div
                                className="h-full rounded-full bg-[#E53935]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </div>
                    </motion.div>
                )}


            </div>
        </div>
    );
}