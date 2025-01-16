"use client";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  const list = [
    {
      id: 1,
      title: "Problem Statment - 1",
      subTitle: "Lorem Ipsum is not simply random text",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: 2,
      title: "Problem Statment - 2",
      subTitle: "Lorem Ipsum is not simply random text",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: 3,
      title: "Problem Statment - 3",
      subTitle: "Lorem Ipsum is not simply random text",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: 4,
      title: "Problem Statment - 4",
      subTitle: "Lorem Ipsum is not simply random text",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: 5,
      title: "Problem Statment - 5",
      subTitle: "Lorem Ipsum is not simply random text",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
  ];
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl pt-28 pl-14 font-bold  font-[Enhanced_LED_Board-7] mb-5 text-white">
        Problem Statments
      </h2>
      {list.map((list, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, transform: "translate(-100px)" }}
          whileInView={{ opacity: 1, transform: "translate(0px)" }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="bg-transparent text-white font-roboto p-8 sm:p-4 text-center leading-6"
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
              {list.title}
            </h2>
            <h3 className="text-2xl sm:text-3xl mb-5">{list.subTitle}</h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-5">
              {list.content}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default page;
