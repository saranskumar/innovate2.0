"use client";
import React from "react";
import { motion } from "framer-motion";
const Content = () => {
  return (
    <>
      <motion.div
        id="page1"
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
      <motion.div
        id="page1"
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
          <h2 className="text-3xl sm:text-4xl font-bold font-[Enhanced_LED_Board-7] mb-5 text-red-500">
            Rules and Regulations
          </h2>

          {/* Registration and Participation Section */}
          <h2 className="text-xl sm:text-2xl mb-5">
            Registration and Participation
          </h2>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-300 mb-5">
            <li>
              A refundable reservation commitment of ₹500 is collected during
              registration to ensure participation and avoid no-shows. The
              amount will be refunded at the venue upon attendance.
            </li>
            <li>
              Buying a ticket does not guarantee participation. All
              registrations will undergo scrutiny, and confirmations will be
              sent from the Innovate official email handle on or before 10th
              January 2025.
            </li>
            <li>
              If your registration is not selected, the amount paid during
              registration will be refunded within 7 business days.
            </li>
            <li>
              The decision of the organizing team regarding registration and
              participation is final and binding.
            </li>
          </ul>

          {/* Eligibility Section */}
          <h2 className="text-xl sm:text-2xl mb-5">Eligibility</h2>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-300 mb-5">
            <li>
              The hackathon is open exclusively to college students. All
              participants must be enrolled in a recognized academic institution
              at the time of registration.
            </li>
            <li>
              Each team must consist of a minimum of one and a maximum of five
              members.
            </li>
            <li>
              Teams are required to bring at least one laptop to participate
              effectively.
            </li>
            <li>
              All participants must present a valid college ID card for
              verification upon entering the premises.
            </li>
          </ul>

          {/* Event Rules and Logistics Section */}
          <h2 className="text-xl sm:text-2xl mb-5">
            Event Rules and Logistics
          </h2>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-300 mb-5">
            <li>
              The domains and problem statements will be revealed only at the
              start of the event to ensure a fair and exciting competition.
            </li>
            <li>
              While the problem statements will not be disclosed in advance,
              they will be aligned with the hackathon’s theme and cover a broad
              spectrum to provide participants with an idea of what to expect.
            </li>
            <li>
              Participants must strictly adhere to the schedule and guidelines
              provided by the organizing team. Any deviations may result in
              disqualification.
            </li>
          </ul>

          {/* On-Campus Regulations Section */}
          <h2 className="text-xl sm:text-2xl mb-5">On-Campus Regulations</h2>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-300 mb-5">
            <li>
              Participants are not permitted to bring vehicles inside the
              campus. Safeguarding of vehicles parked outside the campus is not
              the responsibility of the organizers or college authorities.
            </li>
            <li>
              A cloakroom will be provided inside the venue for personal
              belongings. However, the organizers are not responsible for lost
              or stolen items, including wallets, jewelry, or other valuables.
            </li>
            <li>
              Participants must remain within the college premises during the
              event. Leaving the campus without valid consent from the event
              coordinators is prohibited.
            </li>
          </ul>

          {/* Code of Conduct Section */}
          <h2 className="text-xl sm:text-2xl mb-5">Code of Conduct</h2>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-300 mb-5">
            <li>
              Participants must conduct themselves with professionalism and
              respect toward fellow participants, mentors, and event staff.
            </li>
            <li>
              Any act of misconduct, harassment, or breach of rules will result
              in immediate disqualification, removal from the event, and legal
              actions if applicable.
            </li>
          </ul>

          {/* Intellectual Property Section */}
          <h2 className="text-xl sm:text-2xl mb-5">Intellectual Property</h2>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-300 mb-5">
            <li>
              The intellectual property rights of the solutions developed during
              the hackathon remain with the respective teams. However, by
              participating, you agree to allow the organizers to showcase your
              work for marketing or promotional purposes.
            </li>
          </ul>

          {/* Liability and Responsibility Section */}
          <h2 className="text-xl sm:text-2xl mb-5">
            Liability and Responsibility
          </h2>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-300">
            <li>
              The organizers will not be held liable for any injury, loss, or
              damage incurred during the event. Participants are responsible for
              their own safety and belongings.
            </li>
            <li>
              The event venue complies with standard safety measures, but
              participants must adhere to the instructions provided for their
              safety.
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Content;
