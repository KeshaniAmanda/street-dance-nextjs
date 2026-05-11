import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import tc1 from "../assets/tc6.jpg";
import tc2 from "../assets/tc5.jpg";
import tc3 from "../assets/tc4.jpg";
import tc4 from "../assets/tc3.jpg";
import tc5 from "../assets/tc2.jpg";
import tc6 from "../assets/tc1.jpg";

export default function ModernDanceGallery() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");

  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      image: tc1,
      title: "WANDERLUST",
      category: "Latino Dance",
      type: "Latino",
      path: "/latino-dance",
      width: "md:col-span-2",
    },
    {
      id: 2,
      image: tc2,
      title: "GROUP MOVE",
      category: "Urban Dance",
      type: "Urban",
      path: "/urban-dance",
      width: "md:col-span-1",
    },
    {
      id: 3,
      image: tc3,
      title: "BALLET'S FINEST",
      category: "Kids Dance",
      type: "Kids",
      path: "/kids-dance",
      width: "md:col-span-1",
    },
    {
      id: 4,
      image: tc4,
      title: "DANCE ACT",
      category: "Latino Dance",
      type: "Latino",
      path: "/latino-dance",
      width: "md:col-span-1",
    },
    {
      id: 5,
      image: tc5,
      title: "GROUP DANCE",
      category: "Urban Dance",
      type: "Urban",
      path: "/urban-dance",
      width: "md:col-span-1",
    },
    {
      id: 6,
      image: tc6,
      title: "INSPIRATIONAL MOVE",
      category: "Kids Dance",
      type: "Kids",
      path: "/kids-dance",
      width: "md:col-span-2",
    },
  ];

  // FILTER
  const filteredItems =
    filter === "All"
      ? items
      : items.filter((item) => item.type === filter);

  return (
    <section className="w-full bg-white py-20 overflow-hidden">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">

          <div>
            <h2 className="uppercase text-[34px] md:text-[40px] leading-[1.1] font-light text-[#222] text-right">
              <span className="font-bold">OUR ENSEMBLE</span> IS TAKING
              <br />
              OVER THE WORLD <span className="font-bold">JOIN.</span>
            </h2>
          </div>

          <div>
            <p className="text-[#9b9b9b] text-[17px] leading-[2] max-w-[520px]">
              Lorem ipsum proin gravida velit auctor aliquet.
              Aenean sollicitudin, lorem auci elit consequat
              ipsutissem niuis sed odio sit nibh a sit amet
              ridiculus mus.
            </p>
          </div>

        </div>

        {/* MENU */}
        <div className="flex flex-wrap justify-center gap-10 uppercase tracking-[4px] text-[14px] mb-14">

          <button
            onClick={() => setFilter("All")}
            className={`transition duration-300 ${
              filter === "All"
                ? "text-pink-500"
                : "text-black hover:text-pink-500"
            }`}
          >
            Show All
          </button>

          <button
            onClick={() => setFilter("Kids")}
            className={`transition duration-300 ${
              filter === "Kids"
                ? "text-pink-500"
                : "text-black hover:text-pink-500"
            }`}
          >
            Kids Dance
          </button>

          <button
            onClick={() => setFilter("Latino")}
            className={`transition duration-300 ${
              filter === "Latino"
                ? "text-pink-500"
                : "text-black hover:text-pink-500"
            }`}
          >
            Latino Dance
          </button>

          <button
            onClick={() => setFilter("Urban")}
            className={`transition duration-300 ${
              filter === "Urban"
                ? "text-pink-500"
                : "text-black hover:text-pink-500"
            }`}
          >
            Urban Dance
          </button>

        </div>
      </div>

      {/* GALLERY */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[320px]">

        {filteredItems.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setActive(item.id)}
            onMouseLeave={() => setActive(null)}
            className={`relative overflow-hidden cursor-pointer group ${item.width}`}
          >

            {/* IMAGE */}
<img
  src={item.image}
  alt={item.title}
  onClick={() => navigate(item.path)}
  className="w-full h-[620px] md:h-full object-cover transition duration-700 group-hover:scale-110"
/>

            {/* DARK OVERLAY */}
            <div
              className={`absolute inset-0 bg-black/45 transition duration-500 ${
                active === item.id
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />

            {/* TEXT */}
            <div
              className={`absolute bottom-10 right-10 z-10 text-right transition-all duration-700 ${
                active === item.id
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-16"
              }`}
            >

              {/* CATEGORY */}
              <span className="text-white/80 text-[15px] block mb-2">

                <span
                  onClick={() => navigate(item.path)}
                  className="hover:text-pink-500 transition duration-300 cursor-pointer"
                >
                  Art
                </span>

                {" "} / {" "}

                <span
                  onClick={() => navigate(item.path)}
                  className="hover:text-pink-500 transition duration-300 cursor-pointer"
                >
                  {item.category}
                </span>

              </span>

              {/* TITLE */}
              <h3
                onClick={() => navigate(item.path)}
                className="text-white text-[26px] md:text-[42px] font-light uppercase leading-none  transition duration-300 cursor-pointer"
              >
                {item.title}
              </h3>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}