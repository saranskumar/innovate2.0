"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

//logo imports
import sct from "../assets/logo/sct_logo.png";
import ieee from "../assets/logo/ieee_logo.png";
import yp from "../assets/logo/yp_logo.png";
import inapp from "../assets/logo/inapp_logo.png";
import innovate from "../assets/images/Innovate_2.png";

const Hero = () => {
  return (
    <motion.div
      className={styles.largeViewer}
      initial={{
        opacity: 0,
        filter: "blur(2px)",
        transform: "scaleY(0.7)",
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0)",
        transform: "scaleY(1)",
      }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <div style={{ margin: 5 }}>
        {/* InApp Logo */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0)" }}
          transition={{ ease: "easeIn", duration: 0.9 }}
          style={{ textAlign: "center", marginBottom: "10px" }}
        >
          <Image
            src={inapp}
            alt="inapp logo"
            //={styles.logo}
            //style={{ height: "10px", width: "auto" }}
            height={91}
            width={492}
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0)" }}
          transition={{ ease: "easeIn", duration: 1.9 }}
          className={styles.mainTitle}
          style={{ textAlign: "center" }}
        >
          INNOVATE
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0)" }}
          transition={{ ease: "easeIn", duration: 1.2 }}
          style={{ textAlign: "center", margin: "10px 0" }}
        >
          Empowering the Future: Engineering Solutions for a Smarter,
          Sustainable Tomorrow
        </motion.p>

        {/* Logos Section */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0)" }}
          transition={{ ease: "easeIn", duration: 1.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            margin: "10px 0",

            paddingLeft: 120,
            paddingRight: 120,
          }}
        >
          <Image
            src={yp}
            alt="yp"
            //className={styles.logo}
            //style={{ height: "10px", width: "auto" }}
            height={100}
            width={200}
          />
          <Image
            src={sct}
            alt="SCT Emblem"
            //className={styles.logo}
            height={100}
            width={250}
          />
          <Image
            src={ieee}
            alt="IEEE Logo"
            //={styles.logo}
            //style={{ height: "10px", width: "auto" }}
            height={15}
            width={150}
          />
        </motion.div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0)" }}
          transition={{ ease: "easeIn", duration: 1.7 }}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <p>Date: January 18-19, 2025</p>
          <p>Venue: SCT College of Engineering, Trivandrum</p>
          <p>Supported by: IEEE Kerala Young Professionals</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
