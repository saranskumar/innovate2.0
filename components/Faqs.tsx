"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className="overflow-hidden hover:scale-[1.01] hover:shadow-lg transition-all duration-300 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-md"
      >
        <div
          className="cursor-pointer flex justify-between items-center p-5 font-medium text-text-primary hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={isOpen ? "font-semibold text-primary" : ""}>
            {title}
          </span>
          <span className="text-2xl font-bold ml-4 transition-transform duration-300 text-primary" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
            +
          </span>
        </div>
        <div
          className={`transition-all duration-300 ease-in-out bg-white/5 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="p-5 text-text-secondary border-t border-white/20">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

const Faqs = () => {
  const items = [
    {
      title: "Who can participate in the Innovate 2.0 Hackathon?",
      content:
        "The hackathon is open exclusively to college students enrolled in recognized academic institutions.",
    },
    {
      title: "How many members can be in a team?",
      content: "Teams can have a minimum of 1 and a maximum of 5 members.",
    },
    {
      title: "What is the registration fee?",
      content:
        "A refundable reservation commitment of ₹500 is required during registration to avoid no-shows. The amount will be refunded at the venue upon attendance.",
    },
    {
      title: "What should I bring to the event?",
      content:
        "Each team must bring at least one laptop, along with valid college ID cards for all members.",
    },
    {
      title: "Will meals be provided during the event?",
      content:
        "Yes, meals and refreshments will be provided to all participants throughout the hackathon.",
    },
    {
      title: "What is the venue for the event?",
      content:
        "The hackathon will be held at Sree Chitra Thirunal College of Engineering, Thiruvananthapuram.",
    },
    {
      title: "Are problem statements provided in advance?",
      content:
        "No, the problem statements will be revealed at the start of the event, but they will align with the hackathon's theme and cover a broad spectrum.",
    },
    {
      title: "What are the prizes for the event?",
      content:
        "A total of ₹50,000 in cash prizes will be awarded: ₹25,000 for 1st place, ₹15,000 for 2nd place, and ₹10,000 for 3rd place.",
    },
    {
      title: "What if my registration is not selected?",
      content:
        "If your registration is not selected, the ₹500 refundable reservation commitment will be refunded.",
    },
    {
      title: "Will accommodation be provided?",
      content:
        "Retiring rooms (classrooms) will be available for resting during the hackathon. Accommodation for students is not provided separately.",
    },
    {
      title: "Can participants leave the venue during the event?",
      content:
        "No, participants must stay within the premises for the duration of the hackathon unless they have valid consent from the event coordinators.",
    },
    {
      title: "Will internet and power be available at the venue?",
      content:
        "Yes, stable high-speed internet and uninterrupted power supply will be provided.",
    },
  ];

  return (
    <div id="faq" className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl sm:text-6xl font-bold text-text-primary mb-10 text-center">
          FAQs
        </h2>

        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Faqs;
