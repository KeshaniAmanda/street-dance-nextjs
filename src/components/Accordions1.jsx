import { useState } from "react";

const accordionData = [
  {
    title: "SHOULD I BUY THIS THEME?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin tellus vitae condimentum egestas. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. In vel tristique. Nulla risus aliquam venenatis ut feugiat.",
  },
  {
    title: "ARE THERE ANY DISCOUNTS INCLUDED?",
    content:
      "Yes, occasionally discounts are available depending on promotions.",
  },
  {
    title: "WHAT IS WEB HOSTING?",
    content:
      "Web hosting is a service that allows websites to be accessible on the internet.",
  },
  {
    title: "WHAT IS UX?",
    content:
      "UX (User Experience) focuses on improving user satisfaction and usability.",
  },
];

export default function Accordion1() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="
      w-full 
      px-4 sm:px-8 md:px-16 lg:px-24 
      mt-10 sm:mt-16
    ">

      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="mb-3 sm:mb-4">

            {/* HEADER */}
            <button
              onClick={() => handleToggle(index)}
              className={`
                w-full flex items-center gap-3 sm:gap-4 
                px-4 sm:px-6 
                py-3 sm:py-4 
                text-left 
                transition-all duration-300
                ${isOpen 
                  ? "bg-[#19c2a0] text-white" 
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }
              `}
            >
              {/* ICON */}
              <span
                className={`
                  text-lg sm:text-xl font-bold transition-colors duration-300
                  ${isOpen ? "text-white" : "text-gray-600"}
                `}
              >
                {isOpen ? "−" : "+"}
              </span>

              {/* TITLE */}
              <span className="
                font-semibold tracking-wide 
                text-xs sm:text-sm md:text-base
              ">
                {item.title}
              </span>
            </button>

            {/* CONTENT */}
            <div
              className={`
                overflow-hidden transition-all duration-300
                ${isOpen 
                  ? "max-h-[300px] bg-white px-4 sm:px-6 py-4 sm:py-5" 
                  : "max-h-0"
                }
              `}
            >
              <p className="
                text-gray-500 
                text-xs sm:text-sm 
                leading-relaxed
              ">
                {item.content}
              </p>
            </div>

          </div>
        );
      })}

    </div>
  );
}