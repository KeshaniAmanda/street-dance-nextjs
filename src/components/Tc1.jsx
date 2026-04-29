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

  // 👉 navigation function
  const handleClick = (title) => {
    const path = title.toLowerCase().replace(/ /g, "-");
    navigate(`/portfolio/${path}`);
  };

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gray-100 py-56 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">

        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-5xl font-light tracking-wide text-gray-800 text-right gap-8">
            <span className="font-semibold">THREE</span> COLUMNS
          </h1>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex items-center justify-end ">

          <p className="text-gray-600 max-w-3xl leading-relaxed text-sm">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus<br /> viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet.<br /> Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi
          </p>

          <div className="grid grid-cols-3 gap-4 -translate-x-8">
            <img src={arrow1} alt="" className="w-12" />
            <img src={arrow2} alt="" className="w-12" />
            <img src={arrow3} alt="" className="w-12" />

            <img src={arrow3} alt="" className="w-12" />
            <img src={arrow1} alt="" className="w-12" />
            <img src={arrow2} alt="" className="w-12" />
          </div>

        </div>
      </section>

      {/* ================= FILTER ================= */}
      <div className="flex justify-center gap-10 text-xs tracking-[3px] py-10">

        <button onClick={() => setFilter("All")}
          className={`transition ${filter === "All" ? "text-[#19c2a0] font-semibold" : "hover:text-[#19c2a0]"}`}>
          SHOW ALL
        </button>

        <button onClick={() => setFilter("Kids")}
          className={`transition ${filter === "Kids" ? "text-[#19c2a0] font-semibold" : "hover:text-[#19c2a0]"}`}>
          KIDS DANCE
        </button>

        <button onClick={() => setFilter("Latino")}
          className={`transition ${filter === "Latino" ? "text-[#19c2a0] font-semibold" : "hover:text-[#19c2a0]"}`}>
          LATINO DANCE
        </button>

        <button onClick={() => setFilter("Urban")}
          className={`transition ${filter === "Urban" ? "text-[#19c2a0] font-semibold" : "hover:text-[#19c2a0]"}`}>
          URBAN DANCE
        </button>

      </div>

      {/* ================= GRID ================= */}
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6 py-16">

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
                className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="mt-5">
              <h3 className="text-[15px] font-semibold tracking-widest text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1 group-hover:text-[#19c2a0] transition">
                Art / {item.category} Dance
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}