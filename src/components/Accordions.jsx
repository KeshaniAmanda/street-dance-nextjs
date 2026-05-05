import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const accordionData = [
  {
    title: "YOUR FINANCIAL BRIDGE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin tellus vitae condimentum egestas. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. In vel tristique. Nulla risus aliquam venenatis ut feugiat.",
  },
  {
    title: "OUR PHILOSOPHY",
    content:
      "Libero varius ligula id nec libero amet non metus ligula risus egestas senectus euismod.",
  },
  {
    title: "YOU SHOULD OCCASIONALLY LOOK AT THE RESULTS.",
    content:
      "In vel tristique. Nulla risus aliquam venenatis ut feugiat.",
  },
  {
    title: "VISION HELPS YOU SEE THE ROAD AHEAD!",
    content:
      "Vision helps you plan ahead and stay focused on your goals.",
  },
  {
    title: "KEEP QUIET AND CONTINUE WORKING.",
    content:
      "Consistency is the key to long term success.",
  },
  {
    title: "THE KEY TO SUCCESS IS STAYING ON TARGET",
    content:
      "Stay aligned with your goals and avoid distractions.",
  },
  {
    title: "QUALITY IN EVERYTHING WE DO",
    content:
      "We focus on delivering high quality results always.",
  },
];

export default function Accordions() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="
        bg-[#19c2a0] 
        h-[200px] sm:h-[260px] 
        flex flex-col justify-center items-center 
        text-white 
        pt-20 sm:pt-24
      ">
        <h1 className="
          text-2xl sm:text-3xl md:text-[36px] 
          tracking-widest font-semibold
        ">
          Accordions
        </h1>

        <div className="mt-3 text-xs sm:text-sm flex gap-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span>Accordions</span>
        </div>
      </div>

      {/* ACCORDION */}
      <div className="
        max-full 
        px-4 sm:px-8 md:px-16 lg:px-24 
        mt-10 sm:mt-16
      ">

        {accordionData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="border-b border-gray-200">

              {/* TITLE */}
              <button
                onClick={() => handleToggle(index)}
                className="
                  w-full flex justify-between items-center 
                  py-4 sm:py-5 
                  text-left
                "
              >
                <span
                  className={`
                    text-sm sm:text-[15px] md:text-base 
                    tracking-wide font-semibold 
                    transition-colors duration-200
                    ${isOpen ? "text-[#19c2a0]" : "text-gray-800"}
                  `}
                >
                  {item.title}
                </span>

                <ChevronDown
                  size={18}
                  className={`
                    transition-all duration-300
                    ${isOpen 
                      ? "rotate-180 text-[#19c2a0]" 
                      : "text-gray-400"
                    }
                  `}
                />
              </button>

              {/* CONTENT */}
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${isOpen ? "max-h-[300px] pb-4 sm:pb-5" : "max-h-0"}
                `}
              >
                <p className="
                  text-gray-500 
                  text-xs sm:text-sm 
                  leading-relaxed 
                  pr-0 sm:pr-10
                ">
                  {item.content}
                </p>
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}