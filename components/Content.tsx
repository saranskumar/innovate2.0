"use client";
import React from "react";
import { motion } from "framer-motion";
const Content = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, transform: "translate(-100px)" }}
        whileInView={{ opacity: 1, transform: "translate(0px)" }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="bg-transparent text-white font-roboto p-8 sm:p-12 text-center leading-6"
      >
        {/* About the Event Section */}
        <div
          className="bg-[#1a1a1a] p-10 sm:p-12 lg:p-16 xl:p-20 rounded-lg mx-auto mb-8 max-w-full text-left"
          style={{
            clipPath:
              "polygon(0px 0px, 100% 0px, 100% 90%, calc(100% - 58px) 100%, 0px 100%, 0px 39px)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl  font-bold  font-[Enhanced_LED_Board-7] mb-5 text-red-500">
            About the Event
          </h2>
          <h3 className="text-2xl sm:text-3xl mb-5">
            Unleash Your Creativity, Solve Real-World Challenges!
          </h3>
          <p className="text-xl sm:text-2xl text-gray-300 mb-5">
            As part of InApp’s Silver Jubilee celebrations, Innovate is a
            two-day hackathon designed for students across Kerala. Compete in
            teams to build impactful solutions that address real-world
            challenges, paving the way for a smart, sustainable tomorrow.
          </p>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-300">
            <li>Work on industry-relevant problem statements.</li>
            <li>Collaborate with mentors and tech leaders.</li>
            <li>Showcase your talent to industry experts.</li>
            <li>Win exciting prizes and gain mentorship opportunities.</li>
          </ul>
        </div>
      </motion.div>
      {/* ------------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0, transform: "translate(-100px)" }}
        whileInView={{ opacity: 1, transform: "translate(0px)" }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="bg-transparent text-white font-roboto p-8 sm:p-12 text-center"
      >
        {/* Header Section */}
        <div
          className="bg-[#1a1a1a] p-10 sm:p-12 lg:p-16 xl:p-20 rounded-lg mx-auto mb-8 max-w-full text-left"
          style={{
            clipPath:
              "polygon(0px 0px, 100% 0px, 100% 90%, calc(100% - 58px) 100%, 0px 100%, 0px 39px)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-6">
            Why Participate?
          </h2>

          {/* Content Section */}
          <div className="max-w-full sm:max-w-3xl lg:max-w-4xl  space-y-6 text-left leading-8">
            <p className="text-lg sm:text-xl font-medium text-gray-300">
              Innovate with Purpose:{" "}
              <span className="font-semibold text-gray-200">
                Build solutions that matter.
              </span>
            </p>
            <p className="text-lg sm:text-xl font-medium text-gray-300">
              Learn from Experts:{" "}
              <span className="font-semibold text-gray-200">
                Get mentorship and feedback from industry professionals.
              </span>
            </p>
            <p className="text-lg sm:text-xl font-medium text-gray-300">
              Showcase Your Talent:{" "}
              <span className="font-semibold text-gray-200">
                Present your projects to industry leaders.
              </span>
            </p>
            <p className="text-lg sm:text-xl font-medium text-gray-300">
              Placement Opportunities:{" "}
              <span className="font-semibold text-gray-200">
                Impress top tech professionals and open doors to career
                prospects.
              </span>
            </p>
            <p className="text-lg sm:text-xl font-medium text-gray-300">
              Win Awards & Recognition:{" "}
              <span className="font-semibold text-gray-200">
                Take home prizes and future opportunities.
              </span>
            </p>
          </div>
        </div>
      </motion.div>
      {/* ----------------------------------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, transform: "translate(-100px)" }}
        whileInView={{ opacity: 1, transform: "translate(0px)" }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="bg-transparent text-white font-roboto p-8 sm:p-12 text-center leading-6"
      >
        {/* About the Event Section */}
        <div
          className="bg-[#1a1a1a] p-10 sm:p-12 lg:p-16 xl:p-20 rounded-lg mx-auto mb-8 max-w-full text-left"
          style={{
            clipPath:
              "polygon(0px 0px, 100% 0px, 100% 90%, calc(100% - 58px) 100%, 0px 100%, 0px 39px)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl  font-bold  font-[Enhanced_LED_Board-7] mb-5 text-red-500">
            Collaborators
          </h2>
          {/* <h3 className="text-2xl sm:text-3xl mb-5">
            Unleash Your Creativity, Solve Real-World Challenges!
          </h3> */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-5">
            This event is hosted by{" "}
            <span className="text-white font-bold">InApp</span> in collaboration
            with{" "}
            <span className="text-white font-bold">
              IEEE Kerala Young Professionals
            </span>{" "}
            and{" "}
            <span className="text-white font-bold">
              SCT College of Engineering
            </span>
            , ensuring professional mentorship, vibrant networking, and a
            dynamic platform for innovation..
          </p>
        </div>
      </motion.div>
      {/* ------------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0, transform: "translate(-100px)" }}
        whileInView={{ opacity: 1, transform: "translate(0px)" }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="bg-transparent text-white font-roboto p-8 sm:p-12 text-center leading-6"
      >
        {/* About the Event Section */}
        <div
          className="bg-[#1a1a1a] p-10 sm:p-12 lg:p-16 xl:p-20 rounded-lg mx-auto mb-8 max-w-full text-left"
          style={{
            clipPath:
              "polygon(0px 0px, 100% 0px, 100% 90%, calc(100% - 58px) 100%, 0px 100%, 0px 39px)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl  font-bold  font-[Enhanced_LED_Board-7] mb-5 text-red-500">
            About InApp
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 mb-5">
            InApp has been at the forefront of technology and innovation for the
            last 25 years. Join us in our mission to empower individuals and
            businesses to build smarter, sustainable solutions for the future.
          </p>
        </div>
      </motion.div>
      {/* ------------------------------------------------------ */}
    </>
  );
};

export default Content;
