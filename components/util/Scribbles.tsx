import React from "react";
import { motion } from "framer-motion";

// Configuration for common scribble animation
const drawTransition = {
    duration: 0.4,
    ease: "easeInOut",
};

const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: drawTransition
    },
};

interface ScribbleProps {
    className?: string;
    color?: string;
    delay?: number;
}

export const ScribbleArrow: React.FC<ScribbleProps> = ({
    className = "",
    color = "#2D2D2D", // Dark gray/black ink
    delay = 0
}) => {
    return (
        <svg
            width="60"
            height="40"
            viewBox="0 0 60 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <motion.path
                d="M5 25C15 20 35 15 50 18C52 18.5 53.5 19 54 20"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={drawVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ ...drawTransition, delay }}
            />
            <motion.path
                d="M45 10C48 14 52 16 55 20C52 22 48 26 44 30"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={drawVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ ...drawTransition, delay: delay + 0.2 }}
            />
        </svg>
    );
};

export const ScribbleLoop: React.FC<ScribbleProps> = ({
    className = "",
    color = "#2D2D2D",
    delay = 0
}) => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 120 60"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <motion.path
                d="M10 25C10 25 30 5 60 5C90 5 110 25 110 35C110 45 90 55 60 55C30 55 10 35 15 20"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={drawVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ ...drawTransition, delay }}
            />
        </svg>
    );
};

export const ScribbleUnderline: React.FC<ScribbleProps> = ({
    className = "",
    color = "#2D2D2D",
    delay = 0
}) => {
    return (
        <svg
            width="100%"
            height="10"
            viewBox="0 0 200 10"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <motion.path
                d="M5 5C50 2 100 8 195 5"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={drawVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ ...drawTransition, delay }}
            />
        </svg>
    );
};

export const ScribbleSparkle: React.FC<ScribbleProps> = ({
    className = "",
    color = "#2D2D2D",
    delay = 0
}) => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <motion.path
                d="M15 5V25M5 15H25M8 8L22 22M22 8L8 22"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={drawVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ ...drawTransition, delay }}
            />
        </svg>
    );
};
