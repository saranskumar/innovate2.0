"use client";

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}
const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-[#1a1a1a] text-white rounded-lg shadow-md my-4"
      style={{
        clipPath:
          "polygon(0px 0px, 100% 0px, 100% 90%, calc(100% - 58px) 100%, 0px 100%, 0px 39px)",
      }}
    >
      <div
        className="cursor-pointer flex justify-between items-center p-4 font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 border-t border-gray-500">{content}</div>
      </div>
    </div>
  );
};

const Faqs = () => {
  const items = [
    {
      title: "Who can participate in the Innovate Hackathon?",
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
    <div id="page6" className="w-full flex justify-center items-center ">
      <div className="md:w-[80%] m-3 mt-16 justify-center items-center">
        <h2 className=" font-palanquin text-4xl mb-10 font-bold ">FAQs</h2>

        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
