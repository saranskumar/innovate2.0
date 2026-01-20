"use client";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  const list = [
    {
      id: 1,
      title: "Problem Statement - 1",
      subTitle: "Lorem Ipsum is not simply random text",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      points: [
        {
          id: 1,
          title: "Where can I get some?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going",
        },
        {
          id: 2,
          title: "Where can I get some?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going",
        },
        {
          id: 3,
          title: "Where can I get some?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going",
        },
      ],
    },
    {
      id: 2,
      title: "Problem Statement - 2",
      subTitle: "Lorem Ipsum is not simply random text",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      points: [
        {
          id: 1,
          title: "Where can I get some?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going",
        },
        {
          id: 2,
          title: "Where can I get some?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going",
        },
        {
          id: 3,
          title: "Where can I get some?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going",
        },
      ],
    },
    {
      id: 3,
      title: "Problem Statement - 3",
      subTitle: "Lorem Ipsum is not simply random text",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      points: [
        {
          id: 1,
          title: "Where can I get some?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going",
        },
        {
          id: 2,
          title: "Where can I get some?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going",
        },
        {
          id: 3,
          title: "Where can I get some?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going",
        },
      ],
    },
  ];

  const rotations = ["rotate-slight-1", "rotate-slight-2", "rotate-slight-3"];

  return (
    <div className="bg-paper min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-handwritten font-bold text-sketch mb-12 text-center pt-8">
          Problem Statements
        </h1>

        {list.map((problem, index) => (
          <motion.div
            key={problem.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.6, delay: index * 0.1 }}
            className="mb-12"
          >
            <div className={`paper-card ${rotations[index % rotations.length]} p-8 sm:p-10 lg:p-12`}>
              {/* Problem Title */}
              <h2 className="text-3xl sm:text-4xl font-handwritten font-bold text-sketch mb-4">
                {problem.title}
              </h2>

              {/* Subtitle with yellow highlight */}
              <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-6">
                <span className="highlight-yellow-soft">{problem.subTitle}</span>
              </h3>

              {/* Content */}
              <p className="text-base sm:text-lg text-text-secondary mb-6 leading-relaxed">
                {problem.content}
              </p>

              {/* Points */}
              <div className="space-y-4">
                {problem.points.map((point) => (
                  <div key={point.id} className="border-l-4 border-highlight pl-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
                      → {point.title}
                    </h4>
                    <p className="text-base text-text-secondary leading-relaxed">
                      {point.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.location.href = '/'}
            className="buttonMain font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
