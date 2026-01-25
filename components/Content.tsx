"use client";
import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <div className="py-12 px-4">
      {/* About the Event Section */}
      <motion.div
        id="page1"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            About the Event
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-6">
            <span className="font-semibold text-primary">
              Unleash Your Creativity, Solve Real-World Challenges!
            </span>
          </h3>
          <p className="text-lg sm:text-xl text-text-secondary mb-6 leading-relaxed">
            As part of InApp&apos;s Silver Jubilee celebrations, Innovate 2.0 is a
            two-day hackathon designed for students across Kerala. Compete in
            teams to build impactful solutions that address real-world
            challenges, paving the way for a smart, sustainable tomorrow.
          </p>
          <ul className="list-professional space-y-3 text-base sm:text-lg text-text-primary">
            <li>Work on industry-relevant problem statements.</li>
            <li>Collaborate with mentors and tech leaders.</li>
            <li>Showcase your talent to industry experts.</li>
            <li>Win exciting prizes and gain mentorship opportunities.</li>
          </ul>
        </div>
      </motion.div>

      {/* Why Participate Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-8">
            Why Participate?
          </h2>

          <div className="space-y-5">
            <p className="text-base sm:text-lg text-text-primary leading-relaxed">
              <span className="font-bold text-primary">
                Innovate with Purpose:
              </span>{" "}
              Build solutions that matter.
            </p>
            <p className="text-base sm:text-lg text-text-primary leading-relaxed">
              <span className="font-bold text-primary">
                Learn from Experts:
              </span>{" "}
              Get mentorship and feedback from industry professionals.
            </p>
            <p className="text-base sm:text-lg text-text-primary leading-relaxed">
              <span className="font-bold text-primary">
                Showcase Your Talent:
              </span>{" "}
              Present your projects to industry leaders.
            </p>
            <p className="text-base sm:text-lg text-text-primary leading-relaxed">
              <span className="font-bold text-primary">
                Placement Opportunities:
              </span>{" "}
              Impress top tech professionals and open doors to career prospects.
            </p>
            <p className="text-base sm:text-lg text-text-primary leading-relaxed">
              <span className="font-bold text-primary">
                Win Awards & Recognition:
              </span>{" "}
              Take home prizes and future opportunities.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Collaborators Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Collaborators
          </h2>
          <p className="text-lg sm:text-xl text-text-primary leading-relaxed">
            This event is hosted by{" "}
            <span className="font-bold text-primary">InApp</span> in collaboration
            with{" "}
            <span className="font-bold text-primary">
              IEEE Kerala Young Professionals
            </span>{" "}
            and{" "}
            <span className="font-bold text-primary">
              SCT College of Engineering
            </span>
            , ensuring professional mentorship, vibrant networking, and a
            dynamic platform for innovation.
          </p>
        </div>
      </motion.div>

      {/* About InApp Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            About InApp
          </h2>
          <p className="text-lg sm:text-xl text-text-primary leading-relaxed">
            InApp has been at the forefront of technology and innovation for the
            last{" "}
            <span className="font-bold text-primary">25 years</span>.
            Join us in our mission to empower individuals and businesses to
            build smarter, sustainable solutions for the future.
          </p>
        </div>
      </motion.div>


    </div>
  );
};

export default Content;
