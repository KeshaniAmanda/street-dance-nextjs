import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// IMAGES
import tc1 from "../assets/tc1.jpg";
import tc2 from "../assets/tc2.jpg";
import tc3 from "../assets/tc3.jpg";
import tc4 from "../assets/tc4.jpg";
import tc5 from "../assets/tc5.jpg";
import tc6 from "../assets/tc6.jpg";
import tc7 from "../assets/tc7.jpg";
import tc8 from "../assets/tc8.jpg";
import tc9 from "../assets/tc9.jpg";
import tc10 from "../assets/tc10.jpg";
import tc11 from "../assets/tc11.jpg";
import tc12 from "../assets/tc12.jpg";

// ARROWS
import arrow1 from "../assets/arrow-img-1.png";
import arrow2 from "../assets/arrow-img-2.png";
import arrow3 from "../assets/arrow-img-3.png";

const data = [
  { img: tc1, title: "INSPIRATIONAL MOVE", category: "Kids" },
  { img: tc2, title: "GROUP DANCE", category: "Urban" },
  { img: tc3, title: "DANCE ACT", category: "Latino" },

  { img: tc4, title: "BALLET’S FINEST", category: "Kids" },
  { img: tc5, title: "GROUP MOVE", category: "Urban" },
  { img: tc6, title: "WANDERLUST", category: "Latino" },

  { img: tc7, title: "MOON DANCE", category: "Kids" },
  { img: tc8, title: "MODERN BALLET", category: "Urban" },
  { img: tc9, title: "FLAMENCO", category: "Latino" },

  { img: tc10, title: "GROUP DANCE", category: "Urban" },
  { img: tc11, title: "INSPIRATIONAL MOVE", category: "Kids" },
  { img: tc12, title: "DANCE ACT", category: "Latino" },
];

export default function TC1() {

  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const filteredData =
    filter === "All"
      ? data
      : data.filter((item) => item.category === filter);

  const handleClick = (title) => {
    const path = title.toLowerCase().replace(/ /g, "-");
    navigate(`/portfolio/${path}`);
  };

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="
        bg-gray-100 
        py-16 sm:py-28 md:py-40 lg:py-56 
        px-4 sm:px-6 md:px-20 
        flex flex-col md:flex-row 
        items-center justify-between
      ">

        <div className="md:w-1/2 text-center md:text-right">
          <h1 className="
            text-2xl sm:text-4xl md:text-5xl 
            font-light tracking-wide text-gray-800
          ">
            <span className="font-semibold">THREE</span> COLUMNS
          </h1>
        </div>

        <div className="
          md:w-1/2 
          mt-8 md:mt-0 
          flex flex-col md:flex-row 
          items-center justify-end 
          gap-6
        ">

          <p className="
            text-gray-600 
            text-xs sm:text-sm 
            max-w-xl md:max-w-3xl 
            leading-relaxed 
            text-center md:text-left
          ">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi
          </p>

          <div className="
            grid grid-cols-3 gap-2 sm:gap-4 
            md:-translate-x-8
          ">
            <img src={arrow1} alt="" className="w-8 sm:w-12" />
            <img src={arrow2} alt="" className="w-8 sm:w-12" />
            <img src={arrow3} alt="" className="w-8 sm:w-12" />

            <img src={arrow3} alt="" className="w-8 sm:w-12" />
            <img src={arrow1} alt="" className="w-8 sm:w-12" />
            <img src={arrow2} alt="" className="w-8 sm:w-12" />
          </div>

        </div>
      </section>

      {/* ================= FILTER ================= */}
      <div className="
        flex flex-wrap justify-center 
        gap-4 sm:gap-6 md:gap-10 
        text-[10px] sm:text-xs 
        tracking-[2px] sm:tracking-[3px] 
        py-6 sm:py-10
      ">

        {["All", "Kids", "Latino", "Urban"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`transition 
              ${filter === item 
                ? "text-[#19c2a0] font-semibold" 
                : "hover:text-[#19c2a0]"
              }`}
          >
            {item === "All" && "SHOW ALL"}
            {item === "Kids" && "KIDS DANCE"}
            {item === "Latino" && "LATINO DANCE"}
            {item === "Urban" && "URBAN DANCE"}
          </button>
        ))}

      </div>

      {/* ================= GRID ================= */}
      <div className="
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-6 sm:gap-10 md:gap-12 
        max-w-7xl mx-auto 
        px-4 sm:px-6 
        py-10 sm:py-16
      ">

        {filteredData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.title)}
            className="group cursor-pointer"
          >

            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full 
                  h-[250px] sm:h-[320px] md:h-[420px] 
                  object-cover 
                  group-hover:scale-110 
                  transition duration-500
                "
              />
            </div>

            <div className="mt-4 sm:mt-5">
              <h3 className="
                text-xs sm:text-sm md:text-[15px] 
                font-semibold tracking-widest text-gray-800
              ">
                {item.title}
              </h3>

              <p className="
                text-xs sm:text-sm 
                text-gray-500 mt-1 
                group-hover:text-[#19c2a0] 
                transition
              ">
                Art / {item.category} Dance
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}