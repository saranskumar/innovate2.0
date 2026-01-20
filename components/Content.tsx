"use client";
import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <div className="bg-paper py-12 px-4">
      {/* About the Event Section */}
      <motion.div
        id="page1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="paper-card rotate-slight-1 p-8 sm:p-12 lg:p-16">
          <h2 className="text-4xl sm:text-5xl font-handwritten font-bold text-sketch mb-6">
            About the Event
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-6">
            <span className="highlight-yellow">
              Unleash Your Creativity, Solve Real-World Challenges!
            </span>
          </h3>
          <p className="text-lg sm:text-xl text-text-secondary mb-6 leading-relaxed">
            As part of InApp's Silver Jubilee celebrations, Innovate is a
            two-day hackathon designed for students across Kerala. Compete in
            teams to build impactful solutions that address real-world
            challenges, paving the way for a smart, sustainable tomorrow.
          </p>
          <ul className="sketch-list space-y-3 text-base sm:text-lg text-text-primary">
            <li>Work on industry-relevant problem statements.</li>
            <li>Collaborate with mentors and tech leaders.</li>
            <li>Showcase your talent to industry experts.</li>
            <li>Win exciting prizes and gain mentorship opportunities.</li>
          </ul>
        </div>
      </motion.div>

      {/* Why Participate Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="paper-card rotate-slight-2 p-8 sm:p-12 lg:p-16">
          <h2 className="text-4xl sm:text-5xl font-handwritten font-bold text-sketch mb-8">
            Why Participate?
          </h2>

          <div className="space-y-5">
            <p className="text-base sm:text-lg text-text-primary leading-relaxed">
              <span className="font-semibold highlight-yellow-soft">
                Innovate with Purpose:
              </span>{" "}
              Build solutions that matter.
            </p>
            <p className="text-base sm:text-lg text-text-primary leading-relaxed">
              <span className="font-semibold highlight-yellow-soft">
                Learn from Experts:
              </span>{" "}
              Get mentorship and feedback from industry professionals.
            </p>
            <p className="text-base sm:text-lg text-text-primary leading-relaxed">
              <span className="font-semibold highlight-yellow-soft">
                Showcase Your Talent:
              </span>{" "}
              Present your projects to industry leaders.
            </p>
            <p className="text-base sm:text-lg text-text-primary leading-relaxed">
              <span className="font-semibold highlight-yellow-soft">
                Placement Opportunities:
              </span>{" "}
              Impress top tech professionals and open doors to career prospects.
            </p>
            <p className="text-base sm:text-lg text-text-primary leading-relaxed">
              <span className="font-semibold highlight-yellow-soft">
                Win Awards & Recognition:
              </span>{" "}
              Take home prizes and future opportunities.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Collaborators Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="paper-card rotate-slight-3 p-8 sm:p-12 lg:p-16">
          <h2 className="text-4xl sm:text-5xl font-handwritten font-bold text-sketch mb-6">
            Collaborators
          </h2>
          <p className="text-lg sm:text-xl text-text-primary leading-relaxed">
            This event is hosted by{" "}
            <span className="font-bold highlight-yellow">InApp</span> in collaboration
            with{" "}
            <span className="font-bold highlight-yellow">
              IEEE Kerala Young Professionals
            </span>{" "}
            and{" "}
            <span className="font-bold highlight-yellow">
              SCT College of Engineering
            </span>
            , ensuring professional mentorship, vibrant networking, and a
            dynamic platform for innovation.
          </p>
        </div>
      </motion.div>

      {/* About InApp Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="paper-card rotate-slight-4 p-8 sm:p-12 lg:p-16">
          <h2 className="text-4xl sm:text-5xl font-handwritten font-bold text-sketch mb-6">
            About InApp
          </h2>
          <p className="text-lg sm:text-xl text-text-primary leading-relaxed">
            InApp has been at the forefront of technology and innovation for the
            last{" "}
            <span className="highlight-yellow font-semibold">25 years</span>.
            Join us in our mission to empower individuals and businesses to
            build smarter, sustainable solutions for the future.
          </p>
        </div>
      </motion.div>

      {/* Rules and Regulations Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="paper-card rotate-slight-1 p-8 sm:p-12 lg:p-16">
          <h2 className="text-4xl sm:text-5xl font-handwritten font-bold text-sketch mb-8">
            Rules and Regulations
          </h2>

          {/* Registration and Participation */}
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-handwritten-alt font-semibold text-text-primary mb-4">
              Registration and Participation
            </h3>
            <ul className="sketch-list space-y-3 text-base sm:text-lg text-text-primary">
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
          </div>

          {/* Eligibility */}
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-handwritten-alt font-semibold text-text-primary mb-4">
              Eligibility
            </h3>
            <ul className="sketch-list space-y-3 text-base sm:text-lg text-text-primary">
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
          </div>

          {/* Event Rules and Logistics */}
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-handwritten-alt font-semibold text-text-primary mb-4">
              Event Rules and Logistics
            </h3>
            <ul className="sketch-list space-y-3 text-base sm:text-lg text-text-primary">
              <li>
                The domains and problem statements will be revealed only at the
                start of the event to ensure a fair and exciting competition.
              </li>
              <li>
                While the problem statements will not be disclosed in advance,
                they will be aligned with the hackathon&apos;s theme and cover a broad
                spectrum to provide participants with an idea of what to expect.
              </li>
              <li>
                Participants must strictly adhere to the schedule and guidelines
                provided by the organizing team. Any deviations may result in
                disqualification.
              </li>
            </ul>
          </div>

          {/* On-Campus Regulations */}
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-handwritten-alt font-semibold text-text-primary mb-4">
              On-Campus Regulations
            </h3>
            <ul className="sketch-list space-y-3 text-base sm:text-lg text-text-primary">
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
          </div>

          {/* Code of Conduct */}
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-handwritten-alt font-semibold text-text-primary mb-4">
              Code of Conduct
            </h3>
            <ul className="sketch-list space-y-3 text-base sm:text-lg text-text-primary">
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
          </div>

          {/* Intellectual Property */}
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-handwritten-alt font-semibold text-text-primary mb-4">
              Intellectual Property
            </h3>
            <ul className="sketch-list space-y-3 text-base sm:text-lg text-text-primary">
              <li>
                The intellectual property rights of the solutions developed during
                the hackathon remain with the respective teams. However, by
                participating, you agree to allow the organizers to showcase your
                work for marketing or promotional purposes.
              </li>
            </ul>
          </div>

          {/* Liability and Responsibility */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-handwritten-alt font-semibold text-text-primary mb-4">
              Liability and Responsibility
            </h3>
            <ul className="sketch-list space-y-3 text-base sm:text-lg text-text-primary">
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
        </div>
      </motion.div>
    </div>
  );
};

export default Content;
