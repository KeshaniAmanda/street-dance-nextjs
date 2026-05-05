import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/about1.jpg";
import img2 from "../assets/ds5.jpg";
import img3 from "../assets/about3.jpg";
import img4 from "../assets/about4.jpg";

const About1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const data = [
    {
      img: img1,
      title: "BREAKDANCE",
      desc: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.",
    },
    {
      img: img2,
      title: "HIP HOP",
      desc: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.",
    },
    {
      img: img3,
      title: "POLE DANCING",
      desc: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.",
    },
  ];

  return (
    <div className="bg-gray-100">

      {/* 🔥 TOP 3 CARDS */}
      <div className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={handleClick}
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-base sm:text-lg font-semibold tracking-wide text-black">
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 BOTTOM SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative h-[250px] sm:h-[350px] md:h-auto">
          <img
            src={img4}
            alt="dance"
            className="w-full h-full object-cover"
          />

          {/* ▶ PLAY BUTTON */}
          <div
            onClick={() =>
              window.open(
                "https://player.vimeo.com/video/167769701?title=0&byline=0&portrait=0&autoplay=1",
                "_blank"
              )
            }
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[10px] sm:border-l-[12px] border-l-white border-y-[6px] sm:border-y-[8px] border-y-transparent ml-1"></div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-black text-white flex items-center">
          <div className="p-6 sm:p-10 md:p-12 max-w-2xl">
            <h2 className="text-lg sm:text-2xl md:text-3xl leading-snug">
              DANCE COMPETITION CAMP.
              <br />
              TRAIN YOUR SKILLS TO THE MAX.
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6 leading-relaxed">
              Lorem Ipsum gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh
              vulputate cursus a sit amet mauris.
            </p>

            <button
              onClick={() => window.open("/moderndance", "_blank")}
              className="mt-4 sm:mt-6 text-[#20c4b7] text-xs sm:text-sm font-bold flex items-center gap-2"
            >
              → PARTICIPATE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About1;