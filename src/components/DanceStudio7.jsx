import React, { useState } from "react";
import { Link } from "react-router-dom";

import pf1 from "../assets/pf1.jpg";
import pf2 from "../assets/pf2.jpg";
import pf3 from "../assets/pf3.jpg";
import pf4 from "../assets/pf4.jpg";
import pf5 from "../assets/pf5.jpg";
import pf6 from "../assets/pf6.jpg";

export default function VibezPortfolio() {
  const [filter, setFilter] = useState("ALL");

  const items = [
    {
      id: 1,
      img: pf1,
      category: "HIPHOP",
      size: "big-left",
      title: "URBAN DANCE",
      sub: "Ballet/Modern Dance",
      link: "/urban-dance",
    },
    {
      id: 2,
      img: pf2,
      category: "BALLET",
      title: "MODERN DANCE",
      sub: "Ballet/Modern Dance",
      link: "/modern-dance",
    },
    {
      id: 3,
      img: pf3,
      category: "HIPHOP",
      featured: true,
      title: "STAGE DANCE",
      sub: "Hip Hop/Modern Dance",
      link: "/stage-dance",
    },
    {
      id: 4,
      img: pf4,
      category: "LATINO",
      title: "KIDS BALLET",
      sub: "Ballet/Modern Dance",
      link: "/kids-ballet",
    },
    {
      id: 5,
      img: pf5,
      category: "BALLET",
      title: "ZUMBA",
      sub: "Latino/Modern Dance",
      link: "/zumba",
    },
    {
      id: 6,
      img: pf6,
      category: "HIPHOP",
      size: "big-right",
      title: "URBAN BALLET",
      sub: "HipHop/Latino/Modern Dance",
      link: "/urban-ballet",
    },
  ];

  const filteredItems =
    filter === "ALL"
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <section className="w-full bg-white">

      {/* FILTER MENU */}
      <div className="flex justify-center items-center gap-6 py-8 text-sm font-semibold tracking-widest">
        {["ALL", "BALLET", "HIPHOP", "LATINO"].map((cat, i) => (
          <div key={cat} className="flex items-center gap-6">
            <button
              onClick={() => setFilter(cat)}
              className={`transition duration-300 ${
                filter === cat
                  ? "text-[#19c2a0]"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {cat === "ALL" ? "SHOW ALL" : cat}
            </button>

           
          </div>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:h-[700px]">

        {filteredItems.map((item) => {
          let classes = "relative group overflow-hidden";

          if (item.size === "big-left") classes += " lg:col-span-2";
          if (item.size === "big-right") classes += " lg:col-span-2";

          return (
            <div key={item.id} className={classes}>

              {/* IMAGE */}
              <img
                src={item.img}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              {!item.featured ? (
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              )}

              {/* CLICKABLE TEXT */}
              <Link
                to={item.link}
                className="absolute bottom-10 left-10 z-20 opacity-0 group-hover:opacity-100 transition duration-500"
              >
                {/* SUB TEXT (WHITE → GREEN ON HOVER) */}
                <p className="text-sm text-white hover:text-[#19c2a0] transition duration-300">
                  {item.sub}
                </p>

                {/* TITLE */}
                <h2 className="text-3xl lg:text-4xl font-bold tracking-widest uppercase text-white">
                  {item.title}
                </h2>
              </Link>

            </div>
          );
        })}
      </div>

    </section>
  );
}