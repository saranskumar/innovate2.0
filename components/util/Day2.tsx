import React from "react";

const Day2 = () => {
  const item = [
    {
      id: 6,
      time: "08:00 AM",
      event: "Evaluation 3: Final Progress Evaluation",
      description: "",
    },
    {
      id: 7,
      time: "12:00 PM",
      event: "Announcement of Finalists",
      description: "",
    },
    {
      id: 8,
      time: "03:00 PM",
      event: "Final Presentations & Evaluations",
      description: "",
    },
    {
      id: 9,
      time: "05:00 PM",
      event: "Closing Ceremony & Prize Distribution",
      description: "",
    },
    {
      id: 10,
      time: "06:00 PM",
      event: "Event Wrap-Up",
      description: "",
    },
  ];
  return (
    <div>
      {/* <h2 className="text-red-700 font-extrabold">
        To Be Updated Soon – Stay Tuned!
      </h2> */}
      <div>
        <ol className="relative border-s border-gray-700">
          {item.map((list, index) => (
            <li className="mb-10 ms-6" key={index}>
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-gray-900 bg-[#eb2929]">
                <svg
                  className="w-2.5 h-2.5 text-[#ffffff]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {list.event}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {list.time}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {list.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Day2;
